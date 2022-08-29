(function (windown) {
    let HOST = "127.0.0.1";
    let PORT = 8443;
    let SSL = true;
    let URL = SSL ? "https://"+HOST+":8000" : "http://"+HOST+":8000";
    // let URL = "https://smartFox.com:8000";
    var navigatorUserAgent = "";//"Mozilla/5.0 (X11; Linux i686) NodeJS/v0.8.18";
    let vcClass = {};
    vcClass.defineGetterSetter = function (proto, prop, getter, setter, getterName, setterName) {
        if (proto.__defineGetter__) {
            getter && proto.__defineGetter__(prop, getter);
            setter && proto.__defineSetter__(prop, setter);
        } else if (Object.defineProperty) {
            var desc = { enumerable: false, configurable: true };
            getter && (desc.get = getter);
            setter && (desc.set = setter);
            Object.defineProperty(proto, prop, desc);
        } else {
            throw new Error("browser does not support getters");
        }

        if (!getterName && !setterName) {
            // Lookup getter/setter function
            var hasGetter = getter != null,
                hasSetter = setter != undefined,
                props = Object.getOwnPropertyNames(proto);
            for (var i = 0; i < props.length; i++) {
                var name = props[i];

                if ((proto.__lookupGetter__ ? proto.__lookupGetter__(name) : Object.getOwnPropertyDescriptor(proto, name)) || typeof proto[name] !== "function") continue;

                var func = proto[name];
                if (hasGetter && func === getter) {
                    getterName = name;
                    if (!hasSetter || setterName) break;
                }
                if (hasSetter && func === setter) {
                    setterName = name;
                    if (!hasGetter || getterName) break;
                }
            }
        }

        // Found getter/setter
        var ctor = proto.constructor;
        if (getterName) {
            if (!ctor.__getters__) {
                ctor.__getters__ = {};
            }
            ctor.__getters__[getterName] = prop;
        }
        if (setterName) {
            if (!ctor.__setters__) {
                ctor.__setters__ = {};
            }
            ctor.__setters__[setterName] = prop;
        }
    };

    /**
     * Create a new object and copy all properties in an exist object to the new object
     * @function
     * @param {object|Array} obj The source object
     * @return {Array|object} The created object
     */
    vcClass.clone = function (obj) {
        // Cloning is better if the new object is having the same prototype chain
        // as the copied obj (or otherwise, the cloned object is certainly going to
        // have a different hidden class). Play with C1/C2 of the
        // PerformanceVirtualMachineTests suite to see how this makes an impact
        // under extreme conditions.
        //
        // Object.create(Object.getPrototypeOf(obj)) doesn't work well because the
        // prototype lacks a link to the constructor (Carakan, V8) so the new
        // object wouldn't have the hidden class that's associated with the
        // constructor (also, for whatever reasons, utilizing
        // Object.create(Object.getPrototypeOf(obj)) + Object.defineProperty is even
        // slower than the original in V8). Therefore, we call the constructor, but
        // there is a big caveat - it is possible that the this.init() in the
        // constructor would throw with no argument. It is also possible that a
        // derived class forgets to set "constructor" on the prototype. We ignore
        // these possibities for and the ultimate solution is a standardized
        // Object.clone(<object>).
        var newObj = obj.constructor ? new obj.constructor() : {};

        // Assuming that the constuctor above initialized all properies on obj, the
        // following keyed assignments won't turn newObj into dictionary mode
        // because they're not *appending new properties* but *assigning existing
        // ones* (note that appending indexed properties is another story). See
        // CCClass.js for a link to the devils when the assumption fails.
        for (var key in obj) {
            var copy = obj[key];
            // Beware that typeof null == "object" !
            if ((typeof copy === "undefined" ? "undefined" : _typeof(copy)) === "object" && copy && !(copy instanceof vcClass.Node) && !(copy instanceof HTMLElement)) {
                newObj[key] = vcClass.clone(copy);
            } else {
                newObj[key] = copy;
            }
        }
        return newObj;
    };

    vcClass.inject = function (srcPrototype, destPrototype) {
        for (var key in srcPrototype) {
            destPrototype[key] = srcPrototype[key];
        }
    };

    /**
     * @namespace
     * @name ClassManager
     */
    var ClassManager = {
        id: 0 | Math.random() * 998,

        instanceId: 0 | Math.random() * 998,

        getNewID: function getNewID() {
            return this.id++;
        },

        getNewInstanceId: function getNewInstanceId() {
            return this.instanceId++;
        }
    };

    /* Managed JavaScript Inheritance
     * Based on John Resig's Simple JavaScript Inheritance http://ejohn.org/blog/simple-javascript-inheritance/
     * MIT Licensed.
     */
    (function () {
        var fnTest = /\b_super\b/;

        /**
         * The base Class implementation (does nothing)
         * @class
         */
        vcClass.Class = function () {};

        /**
         * Create a new Class that inherits from this Class
         * @static
         * @param {object} props
         * @return {function}
         */
        vcClass.Class.extend = function (props) {
            var _super = this.prototype;

            // Instantiate a base Class (but only create the instance,
            // don't run the init constructor)
            var prototype = Object.create(_super);

            // Copy the properties over onto the new prototype. We make function
            // properties non-eumerable as this makes typeof === 'function' check
            // unnecessary in the for...in loop used 1) for generating Class()
            // 2) for vcClass.clone and perhaps more. It is also required to make
            // these function properties cacheable in Carakan.
            var desc = { writable: true, enumerable: false, configurable: true };

            // The dummy Class constructor
            var Class;
            Class = function Class(arg0, arg1, arg2, arg3, arg4) {
                this.__instanceId = ClassManager.getNewInstanceId();
                if (this.ctor) {
                    switch (arguments.length) {
                        case 0:
                            this.ctor();break;
                        case 1:
                            this.ctor(arg0);break;
                        case 2:
                            this.ctor(arg0, arg1);break;
                        case 3:
                            this.ctor(arg0, arg1, arg2);break;
                        case 4:
                            this.ctor(arg0, arg1, arg2, arg3);break;
                        case 5:
                            this.ctor(arg0, arg1, arg2, arg3, arg4);break;
                        default:
                            this.ctor.apply(this, arguments);
                    }
                }
            };

            desc.value = ClassManager.getNewID();
            Object.defineProperty(prototype, '__pid', desc);

            // Populate our constructed prototype object
            Class.prototype = prototype;

            // Enforce the constructor to be what we expect
            desc.value = Class;
            Object.defineProperty(prototype, 'constructor', desc);

            // Copy getter/setter
            this.__getters__ && (Class.__getters__ = vcClass.clone(this.__getters__));
            this.__setters__ && (Class.__setters__ = vcClass.clone(this.__setters__));

            for (var idx = 0, li = arguments.length; idx < li; ++idx) {
                var prop = arguments[idx];
                for (var name in prop) {
                    var isFunc = typeof prop[name] === "function";
                    var override = typeof _super[name] === "function";
                    var hasSuperCall = fnTest.test(prop[name]);

                    if (isFunc && override && hasSuperCall) {
                        desc.value = function (name, fn) {
                            return function () {
                                var tmp = this._super;

                                // Add a new ._super() method that is the same method
                                // but on the super-Class
                                this._super = _super[name];

                                // The method only need to be bound temporarily, so we
                                // remove it when we're done executing
                                var ret = fn.apply(this, arguments);
                                this._super = tmp;

                                return ret;
                            };
                        }(name, prop[name]);
                        Object.defineProperty(prototype, name, desc);
                    } else if (isFunc) {
                        desc.value = prop[name];
                        Object.defineProperty(prototype, name, desc);
                    } else {
                        prototype[name] = prop[name];
                    }

                    if (isFunc) {
                        // Override registered getter/setter
                        var getter, setter, propertyName;
                        if (this.__getters__ && this.__getters__[name]) {
                            propertyName = this.__getters__[name];
                            for (var i in this.__setters__) {
                                if (this.__setters__[i] === propertyName) {
                                    setter = i;
                                    break;
                                }
                            }
                            vcClass.defineGetterSetter(prototype, propertyName, prop[name], prop[setter] ? prop[setter] : prototype[setter], name, setter);
                        }
                        if (this.__setters__ && this.__setters__[name]) {
                            propertyName = this.__setters__[name];
                            for (var i in this.__getters__) {
                                if (this.__getters__[i] === propertyName) {
                                    getter = i;
                                    break;
                                }
                            }
                            vcClass.defineGetterSetter(prototype, propertyName, prop[getter] ? prop[getter] : prototype[getter], prop[name], getter, name);
                        }
                    }
                }
            }

            // And make this Class extendable
            Class.extend = vcClass.Class.extend;

            //add implementation method
            Class.implement = function (prop) {
                for (var name in prop) {
                    prototype[name] = prop[name];
                }
            };
            return Class;
        };
    })();

    let DataType = {};
    DataType.NULL = 0;
    DataType.BOOL = 1;
    DataType.BYTE = 2;
    DataType.SHORT = 3;
    DataType.INT = 4;
    DataType.LONG = 5;
    DataType.FLOAT = 6;
    DataType.DOUBLE = 7;
    DataType.UTF_STRING = 8;
    DataType.BOOL_ARRAY = 9;
    DataType.BYTE_ARRAY = 10;
    DataType.SHORT_ARRAY = 11;
    DataType.INT_ARRAY = 12;
    DataType.LONG_ARRAY = 13;
    DataType.FLOAT_ARRAY = 14;
    DataType.DOUBLE_ARRAY = 15;
    DataType.UTF_STRING_ARRAY = 16;
    DataType.N_ARRAY = 17;
    DataType.N_OBJECT = 18;
    DataType.CLASS = 19;
    DataType.TEXT = 20;

    function DataWrapper(typeId, object) {
        this.id = typeId;
        this.value = object;
        this.type = "UNKNOW";
        if(object == null || object == undefined)
            this.id = typeId = DataType.NULL
        if(typeId == DataType.NULL){
            this.type = "NULL";
        }else
        if(typeId == DataType.BOOL){
            this.type = "BOOL";
        }else
        if(typeId == DataType.BYTE){
            this.type = "BYTE";
        }else
        if(typeId == DataType.SHORT){
            this.type = "SHORT";
        }else
        if(typeId == DataType.INT){
            this.type = "INT";
        }else
        if(typeId == DataType.LONG){
            this.type = "LONG";
        }else
        if(typeId == DataType.FLOAT){
            this.type = "FLOAT";
        }else
        if(typeId == DataType.DOUBLE){
            this.type = "DOUBLE";
        }else
        if(typeId == DataType.UTF_STRING){
            this.type = "UTF_STRING";
        }else
        if(typeId == DataType.BOOL_ARRAY){
            this.type = "BOOL_ARRAY";
        }else
        if(typeId == DataType.BYTE_ARRAY){
            this.type = "BYTE_ARRAY";
        }else
        if(typeId == DataType.SHORT_ARRAY){
            this.type = "SHORT_ARRAY";
        }else
        if(typeId == DataType.INT_ARRAY){
            this.type = "INT_ARRAY";
        }else
        if(typeId == DataType.LONG_ARRAY){
            this.type = "LONG_ARRAY";
        }else
        if(typeId == DataType.FLOAT_ARRAY){
            this.type = "FLOAT_ARRAY";
        }else
        if(typeId == DataType.DOUBLE_ARRAY){
            this.type = "DOUBLE_ARRAY";
        }else
        if(typeId == DataType.UTF_STRING_ARRAY){
            this.type = "UTF_STRING_ARRAY";
        }else
        if(typeId == DataType.N_OBJECT){
            this.type = "N_OBJECT";
        }else
        if(typeId == DataType.CLASS){
            this.type = "CLASS";
        }else if(typeId == DataType.TEXT){
            this.type = "TEXT";
        }else if(typeId == DataType.N_ARRAY){
            this.type = "N_ARRAY";
        }

    };
    DataWrapper.prototype.getDump = function(){
        let dump = "";
        if(this.id == DataType.N_OBJECT){
            dump += this.value.getDump();
        }else if(this.id == DataType.BYTE_ARRAY){
            dump += "["+ this.value+ "]";
            dump += " ("+this.type+")\n";
        }else{
            dump += this.value;
            dump += " ("+this.type+")\n";
        }
        return dump;
    }
    DataWrapper.prototype.getTypeId = function () {
        return this.id;
    }
    DataWrapper.prototype.getObject = function () {
        return this.value;
    }
    let DefaultDataSerializer = {};
    DefaultDataSerializer.object2binary = function(object){
        let buffer = new ByteArray();
        buffer.writeByte(DataType.N_OBJECT);
        buffer.writeShort(object.getSize());
        return DefaultDataSerializer.obj2bin(object, buffer);
    }
    DefaultDataSerializer.array2binary = function(object){
        let buffer = new ByteArray();
        buffer.writeByte(DataType.N_ARRAY);
        buffer.writeShort(object.size());
        return DefaultDataSerializer.arr2bin(object, buffer);
    }
    DefaultDataSerializer.arr2bin = function(nArray, buffer){
        for(let i = 0; i < nArray._dataHolder.length;i++){
            let wrapper = nArray._dataHolder[i];
            buffer = DefaultDataSerializer.encodeObject(buffer, wrapper.getTypeId(), wrapper.getObject());
        }
        return buffer;
    }
    DefaultDataSerializer.obj2bin = function(object, buffer){
        let keys = object.getKeys();
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let wrapper = object.getKey(key);
            let dataObj = wrapper.getObject();
            buffer = DefaultDataSerializer.encodeNObjectKey(buffer, key);
            buffer = DefaultDataSerializer.encodeObject(buffer, wrapper.getTypeId(), dataObj);
        }
        return buffer;
    }
    DefaultDataSerializer.encodeNObjectKey = function(buffer, key){
        buffer.writeString(key);
        return buffer;
    }
// endcode Object
    DefaultDataSerializer.binEncode_NULL = function(buffer, value){
        buffer.writeByte(DataType.NULL);
        return buffer;
    }
    DefaultDataSerializer.binEncode_BOOL = function(buffer, value){
        buffer.writeByte(DataType.BOOL);
        buffer.writeByte(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_BYTE = function(buffer, value){
        buffer.writeByte(DataType.BYTE);
        buffer.writeByte(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_SHORT = function(buffer, value){
        buffer.writeByte(DataType.SHORT);
        buffer.writeShort(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_INT = function(buffer, value){
        buffer.writeByte(DataType.INT);
        buffer.writeInt(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_LONG = function(buffer, value){
        buffer.writeByte(DataType.LONG);
        buffer.writeLong(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_FLOAT = function(buffer, value){
        buffer.writeByte(DataType.FLOAT);
        buffer.writeFloat(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_DOUBLE = function(buffer, value){
        buffer.writeByte(DataType.DOUBLE);
        buffer.writeDouble(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_UTF_STRING = function(buffer, value){
        buffer.writeByte(DataType.UTF_STRING);
        buffer.writeString(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_TEXT = function(buffer, value){
        buffer.writeByte(DataType.TEXT);
        buffer.writeText(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_BOOL_ARRAY= function(buffer, value){
        buffer.writeByte(DataType.BOOL_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeByte(value[i] ? 1 : 0);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_BYTE_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.BYTE_ARRAY);
        buffer.writeBytes(value);
        return buffer;
    }
    DefaultDataSerializer.binEncode_SHORT_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.SHORT_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeShort(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_INT_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.INT_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeInt(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_LONG_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.LONG_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeLong(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_FLOAT_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.FLOAT_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeFloat(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_DOUBLE_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.DOUBLE_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeDouble(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.binEncode_UTF_STRING_ARRAY = function(buffer, value){
        buffer.writeByte(DataType.UTF_STRING_ARRAY);
        buffer.writeShort(value.length);
        for(let i = 0; i < value.length;i++){
            buffer.writeString(value[i]);
        }
        return buffer;
    }
    DefaultDataSerializer.encodeObject = function(buffer, typeId, object){
        switch (typeId) {
            case DataType.NULL:
                return DefaultDataSerializer.binEncode_NULL(buffer);
            case DataType.BOOL:
                return DefaultDataSerializer.binEncode_BOOL(buffer, object);
            case DataType.BYTE:
                return DefaultDataSerializer.binEncode_BYTE(buffer, object);
            case DataType.SHORT:
                return DefaultDataSerializer.binEncode_SHORT(buffer,object);
            case DataType.INT:
                return DefaultDataSerializer.binEncode_INT(buffer, object);
            case DataType.LONG:
                return DefaultDataSerializer.binEncode_LONG(buffer, object);
            case DataType.FLOAT:
                return DefaultDataSerializer.binEncode_FLOAT(buffer, object);
            case DataType.DOUBLE:
                return DefaultDataSerializer.binEncode_DOUBLE(buffer,object);
            case DataType.UTF_STRING:
                return DefaultDataSerializer.binEncode_UTF_STRING(buffer, object);
            case DataType.TEXT:
                return DefaultDataSerializer.binEncode_TEXT(buffer, object);
            case DataType.BOOL_ARRAY:
                return DefaultDataSerializer.binEncode_BOOL_ARRAY(buffer, object);
            case DataType.BYTE_ARRAY:
                return DefaultDataSerializer.binEncode_BYTE_ARRAY(buffer,object);
            case DataType.SHORT_ARRAY:
                return DefaultDataSerializer.binEncode_SHORT_ARRAY(buffer, object);
            case DataType.INT_ARRAY:
                return DefaultDataSerializer.binEncode_INT_ARRAY(buffer,object);
            case DataType.LONG_ARRAY:
                return DefaultDataSerializer.binEncode_LONG_ARRAY(buffer, object);
            case DataType.FLOAT_ARRAY:
                return DefaultDataSerializer.binEncode_FLOAT_ARRAY(buffer, object);
            case DataType.DOUBLE_ARRAY:
                return DefaultDataSerializer.binEncode_DOUBLE_ARRAY(buffer, object);
            case DataType.UTF_STRING_ARRAY:
                return DefaultDataSerializer.binEncode_UTF_STRING_ARRAY(buffer, object);
            case DataType.N_ARRAY:
                let buffer2 = DefaultDataSerializer.array2binary(object);
                return DefaultDataSerializer.addData(buffer, buffer2);
            case DataType.N_OBJECT:
            {
                let buffer2 = DefaultDataSerializer.object2binary(object);
                return DefaultDataSerializer.addData(buffer, buffer2);
            }
            case DataType.CLASS:
                // return addData(buffer, object2binary(pojo2sfs(object))); vonv note
                return null;
        }
    }
    DefaultDataSerializer.addData = function(ba1, ba2){
        for(let i = 0; i < ba2.getArrayWrite().length;i++){
            ba1.getArrayWrite().push(ba2.getArrayWrite()[i]);
        }
        return ba1;
    }
    DefaultDataSerializer.binary2Object = function(buffer){
        if(buffer.length < 3){
            console.error("Cant decode an Nobject . byte data is insuficient size: "+buffer.length);
            return;
        }
        return DefaultDataSerializer.decodeNObject(buffer);
    };
    DefaultDataSerializer.binary2array = function(buffer){
        if(buffer.length < 3){
            console.error("Cant decode an NArray . byte data is insuficient size: "+buffer.length);
            return;
        }
        return DefaultDataSerializer.decodeNArray(buffer);
    }
    DefaultDataSerializer.decodeNObject = function(byteArray){
        let nObject = SObject.newInstance();
        let header = byteArray.readByte();
        if(header != DataType.N_OBJECT){
            VLogger.error("Invalid Data Type Expected: "+DataType.N_OBJECT+ ", founded "+header);
            return null;
        }
        let size = byteArray.readShort();
        if(size < 0){
            VLogger.error("Cant decode NObject size is negative " + size);
            return;
        }
        for(let i = 0; i < size; i++){
            let keyString = byteArray.readString();
            let decodedObject = DefaultDataSerializer.decodeObject(byteArray);
            if(decodedObject != null && decodedObject != undefined){
                nObject.putNObject(keyString, decodedObject);
            }
        }
        return nObject;
    }
    DefaultDataSerializer.decodeNArray = function(buffer){
        let nArray = SArray.newInstance();
        let header = buffer.readByte();
        if(header != DataType.N_ARRAY){
            console.error("Invalid Data Type Expected: "+DataType.N_ARRAY+ ", founded "+header);
            return null;
        }
        let size = buffer.readShort();
        if(size < 0){
            console.error("Cant decode N_ARRAY size is negative " + size);
            return;
        }
        for(let i = 0; i < size; i++){
            let decodedObject = DefaultDataSerializer.decodeObject(buffer);
            if(decodedObject != null){
                nArray.add(decodedObject);
            }else{
                // throw new SmartFox.Exceptions.ValidationError("decode fail NArrayObject");
            }
        }
        return nArray;
    }
// decode Serialize
    DefaultDataSerializer.binDecode_NULL = function(buffer){
        return new DataWrapper(DataType.NULL, null);
    }
    DefaultDataSerializer.binDecode_BOOL = function(buffer){
        return new DataWrapper(DataType.BOOL, buffer.readByte());
    }
    DefaultDataSerializer.binDecode_BYTE = function(buffer){
        return new DataWrapper(DataType.BYTE, buffer.readByte());
    }
    DefaultDataSerializer.binDecode_SHORT = function(buffer){
        return new DataWrapper(DataType.SHORT, buffer.readShort());
    }
    DefaultDataSerializer.binDecode_INT = function(buffer){
        return new DataWrapper(DataType.INT, buffer.readInt());
    }
    DefaultDataSerializer.binDecode_LONG = function(buffer){
        return new DataWrapper(DataType.LONG, buffer.readDouble());
    }
    DefaultDataSerializer.binDecode_FLOAT = function(buffer){
        return new DataWrapper(DataType.FLOAT, buffer.readFloat());
    }
    DefaultDataSerializer.binDecode_DOUBLE = function(buffer){
        return new DataWrapper(DataType.DOUBLE, buffer.readDouble());
    }
    DefaultDataSerializer.binDecode_UTF_STRING = function(buffer){
        return new DataWrapper(DataType.UTF_STRING, buffer.readString());
    }
    DefaultDataSerializer.binDecode_TEXT = function(buffer){
        return new DataWrapper(DataType.TEXT, buffer.readText());
    }
// bin decocde array
    DefaultDataSerializer.getTypeArraySize = function(buffer){
        return buffer.readShort();
    }
    DefaultDataSerializer.binDecode_BOOL_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readByte());
        }
        return new DataWrapper(DataType.BOOL_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_BYTE_ARRAY = function(buffer){
        let size = buffer.readInt();
        let array = [];
        for(let i = 0; i < size; i++){
            let value = buffer.readByte();
            array.push(value);
        }
        return new DataWrapper(DataType.BYTE_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_SHORT_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readShort());
        }
        return new DataWrapper(DataType.SHORT_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_INT_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readInt());
        }
        return new DataWrapper(DataType.INT_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_LONG_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readLong());
        }
        return new DataWrapper(DataType.LONG_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_FLOAT_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readFloat());
        }
        return new DataWrapper(DataType.FLOAT_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_DOUBLE_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readDouble());
        }
        return new DataWrapper(DataType.DOUBLE_ARRAY, array);
    }
    DefaultDataSerializer.binDecode_UTF_STRING_ARRAY = function(buffer){
        let size = DefaultDataSerializer.getTypeArraySize(buffer);
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(buffer.readString());
        }
        return new DataWrapper(DataType.UTF_STRING_ARRAY, array);
    }
    DefaultDataSerializer.decodeObject = function(buffer){
        let decodedObject = null;
        let headerByte = buffer.readByte();
        if (headerByte == DataType.NULL) {
            decodedObject = DefaultDataSerializer.binDecode_NULL(buffer);
        } else if (headerByte == DataType.BOOL) {
            decodedObject = DefaultDataSerializer.binDecode_BOOL(buffer);
        } else if (headerByte == DataType.BOOL_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_BOOL_ARRAY(buffer);
        } else if (headerByte == DataType.BYTE) {
            decodedObject = DefaultDataSerializer.binDecode_BYTE(buffer);
        } else if (headerByte == DataType.BYTE_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_BYTE_ARRAY(buffer);
        } else if (headerByte == DataType.SHORT) {
            decodedObject = DefaultDataSerializer.binDecode_SHORT(buffer);
        } else if (headerByte == DataType.SHORT_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_SHORT_ARRAY(buffer);
        } else if (headerByte == DataType.INT) {
            decodedObject = DefaultDataSerializer.binDecode_INT(buffer);
        } else if (headerByte == DataType.INT_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_INT_ARRAY(buffer);
        } else if (headerByte == DataType.LONG) {
            decodedObject = DefaultDataSerializer.binDecode_LONG(buffer);
        } else if (headerByte == DataType.LONG_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_LONG_ARRAY(buffer);
        } else if (headerByte == DataType.FLOAT) {
            decodedObject = DefaultDataSerializer.binDecode_FLOAT(buffer);
        } else if (headerByte == DataType.FLOAT_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_FLOAT_ARRAY(buffer);
        } else if (headerByte == DataType.DOUBLE) {
            decodedObject = DefaultDataSerializer.binDecode_DOUBLE(buffer);
        } else if (headerByte == DataType.DOUBLE_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_DOUBLE_ARRAY(buffer);
        } else if (headerByte == DataType.UTF_STRING) {
            decodedObject = DefaultDataSerializer.binDecode_UTF_STRING(buffer);
        } else if (headerByte == DataType.TEXT) {
            decodedObject = DefaultDataSerializer.binDecode_TEXT(buffer);
        } else if (headerByte == DataType.UTF_STRING_ARRAY) {
            decodedObject = DefaultDataSerializer.binDecode_UTF_STRING_ARRAY(buffer);
        } else if (headerByte == DataType.N_ARRAY) {
            buffer.setCurrentPosition(buffer.position() - 1);
            decodedObject = new DataWrapper(DataType.N_ARRAY, DefaultDataSerializer.decodeNArray(buffer));
        } else if (headerByte == DataType.N_OBJECT) {
            buffer.setCurrentPosition(buffer.position() - 1);
            decodedObject =  DefaultDataSerializer.decodeNObject(buffer);
        } else {
            // throw new NCodecException("Unknow SFSDataType ID: " + headerByte);
        }
        return decodedObject;
    }
    function SObject() {
        this.dataHolder = new Utils.HashTable();
    }
    SObject.newFromBinary = function(buffer){
        let byteArray = new ByteArray();
        byteArray.initWithInt8Array(buffer);
        return DefaultDataSerializer.binary2Object(byteArray);
    }
    SObject.newInstance = function() {
        return new SObject();
    }
    SObject.prototype.getDump = function(){
        let dump = "\n";
        let tab = "";
        for(let item in this.dataHolder.items){
            let value = this.dataHolder.getItem(item);
            let dumpItem = "";
            if(value instanceof DataWrapper){
                dumpItem = value.getDump();
                if(value.getTypeId() == DataType.N_OBJECT){
                    tab += "\t";
                }
            }else{
                dumpItem = value;
            }
            dump += tab +""+ item +" : " + dumpItem;
        }
        return dump;
    }
    SObject.prototype.toBinary = function(){
        return DefaultDataSerializer.object2binary(this);
    }
    SObject.prototype.isNull = function (key) {
        let wrapper = this.dataHolder.getItem(key);
        if(wrapper == null || wrapper == undefined)
            return false;
    };
    SObject.prototype.containsKey = function (key) {
        return this.dataHolder.hasItem(key);
    }
    SObject.prototype.removeElement = function (key) {
        return this.dataHolder.removeItem(key);
    }
    SObject.prototype.getKeys = function () {
        return this.dataHolder.keys();
    }
    SObject.prototype.getSize = function () {
        return this.getKeys().length;
    }
    SObject.prototype.get = function (key) {
        let item = this.dataHolder.getItem(key);
        if(item == undefined)
            return null;
        return item.getObject() != undefined ? item.getObject() : null;
    };
    SObject.prototype.getKey = function(key){
        return this.dataHolder.getItem(key);
    }
    SObject.prototype.putObj = function(key, value, type){
        if(value instanceof DataWrapper){
            this.dataHolder.setItem(key, value);
        }else{
            this.dataHolder.setItem(key, new DataWrapper(type, value));
        }
    }
    SObject.prototype._validateKeyValue = function(key, value){
        if(key == undefined || value == undefined){
            VLogger.error("Error parameter . must be two params is key and value");
            return false;
        }
        return true;
    }
// put Data
    SObject.prototype.putBool = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.BOOL);
        }
    }
    SObject.prototype.putByte = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.BYTE);
        }
    }
    SObject.prototype.putShort = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.SHORT);
        }
    }
    SObject.prototype.putInt = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.INT);
        }
    }
    SObject.prototype.putLong = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.LONG);
        }
    }
    SObject.prototype.putFloat = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.FLOAT);
        }
    }
    SObject.prototype.putDouble = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.DOUBLE);
        }
    }
    SObject.prototype.putUtfString = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.UTF_STRING);
        }
    }
    SObject.prototype.putText = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.TEXT);
        }
    }
    SObject.prototype.putNObject = function(key, nObject){
        this.putObj(key, nObject, DataType.N_OBJECT);
    }
// for array
    SObject.prototype.putBoolArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.BOOL_ARRAY);
        }
    }
    SObject.prototype.putByteArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.BYTE_ARRAY);
        }
    }
    SObject.prototype.putShortArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.SHORT_ARRAY);
        }
    }
    SObject.prototype.putIntArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.INT_ARRAY);
        }
    }
    SObject.prototype.putLongArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.LONG_ARRAY);
        }
    }
    SObject.prototype.putFloatArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.FLOAT_ARRAY);
        }
    }
    SObject.prototype.putDoubleArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.DOUBLE_ARRAY);
        }
    }
    SObject.prototype.putNArray = function(key , value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key, value , DataType.N_ARRAY);
        }
    }
    SObject.prototype.putUtfStringArray = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.UTF_STRING_ARRAY);
        }
    }
    SObject.prototype.putUtfString = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.UTF_STRING);
        }
    }
    SObject.prototype.putText = function(key, value){
        if(this._validateKeyValue(key, value)){
            this.putObj(key,value,DataType.TEXT);
        }
    };
    SObject.prototype.putNObject = function(key, nObject){
        this.putObj(key, nObject, DataType.N_OBJECT);
    }
    // get data
    SObject.prototype.getBool = function(key){
        return this.get(key);
    }
    SObject.prototype.getByte = function(key){
        return this.get(key);
    }
    SObject.prototype.getShort = function(key){
        return this.get(key);
    }
    SObject.prototype.getInt = function(key){
        return this.get(key);
    }
    SObject.prototype.getLong = function(key){
        return this.get(key);
    }
    SObject.prototype.getFloat = function(key){
        return this.get(key);
    }
    SObject.prototype.getDouble = function(key){
        return this.get(key);
    }
    SObject.prototype.getUtfString = function(key){
        return this.get(key);
    }
    SObject.prototype.getText = function(key){
        return this.get(key);
    }
    SObject.prototype.getSObject = function(key){
        return this.get(key);
    }
    SObject.prototype.getSArray = function(key){
        return this.get(key);
    }
    SObject.prototype.getDoubleArray = function (key) {
        return this.get(key);
    }
    SObject.prototype.getIntArray = function (key) {
        return this.get(key);
    }
    SObject.prototype.getByteArray = function(key){
        return this.get(key);
    }
    SObject.prototype.getUtfStringArray = function (key) {
        return this.get(key);
    }
    function SArray(){
        this._dataHolder = new Array();
    }
    SArray.newInstance = function(){
        return new SArray();
    }
    SArray.newFromBinary = function(buffer){
        let byteArray = new ByteArray();
        byteArray.initWithInt8Array(buffer);
        return DefaultDataSerializer.binary2array(byteArray);
    }
    SArray.prototype.toBinary = function () {
        return DefaultDataSerializer.array2binary(this);
    }
    SArray.prototype.add = function(wrapper){
        if(wrapper instanceof DataWrapper){
            this._dataHolder.push(wrapper);
        }else if(wrapper instanceof SObject){
            this.addNObject(wrapper);
        }
    }
    SArray.prototype.addObject = function(obj, type){
        this._dataHolder.push(new DataWrapper(type, obj));
    }
    SArray.prototype.addNull = function(){
        this.addObject(null, DataType.NULL);
    }
    SArray.prototype.addBool = function(value){
        this.addObject(value, DataType.BOOL);
    }
    SArray.prototype.addByte = function(value){
        this.addObject(value, DataType.BYTE);
    }
    SArray.prototype.addShort = function(value){
        this.addObject(value, DataType.SHORT);
    }
    SArray.prototype.addInt = function(value){
        this.addObject(value, DataType.INT);
    }
    SArray.prototype.addLong = function(value){
        this.addObject(value, DataType.LONG);
    }
    SArray.prototype.addFloat = function(value){
        this.addObject(value, DataType.FLOAT);
    }
    SArray.prototype.addDouble = function(value){
        this.addObject(value, DataType.DOUBLE);
    }
    SArray.prototype.addUtfString = function(value){
        this.addObject(value, DataType.UTF_STRING);
    }
    SArray.prototype.addNArray = function(value){
        this.addObject(value,DataType.N_ARRAY);
    }
    SArray.prototype.addNObject = function(value){
        this.addObject(value, DataType.N_OBJECT);
    }
    SArray.prototype.get = function(index){
        return this._dataHolder[index];
    }
    SArray.prototype.size = function(){
        return this._dataHolder.length;
    }
    function Logger(){
        this.isAvailable = void 0 != console;
        this.level = Logger.LogLevel.INFO;
        if(SmartFoxSDK.debug)
            this.level = Logger.LogLevel.DEBUG
    }
    Logger.LogLevel = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    }
    Logger.prototype.setLevel = function (a) {
        a < Logger.LogLevel.DEBUG || a > Logger.LogLevel.ERROR || (this.level = a);
    }
    Logger.prototype.debug = function(a){
        if(this.level == Logger.LogLevel.DEBUG)
            console.log(a);
    }
    // Logger.prototype.debug = console.log.bind(window.console);

    Logger.prototype.info = function (a) {
        this.isAvailable && this.level <= Logger.LogLevel.INFO && console.log(a);
    }
    Logger.prototype.warn = function (a) {
        this.isAvailable && this.level <= Logger.LogLevel.WARN && console.log(a);
    }
    Logger.prototype.error = function (a) {
        if(this.level == Logger.Error)
            console.error(a);
    }
    let Utils = {};
    Utils.ArrayUtil = {};
    Utils.ArrayUtil.objToArray = function(a){
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(a[c]);
        return b
    }
    Utils.ArrayUtil.removeItem = function (a, b) {
        var c = a.indexOf(b); - 1 < c && a.splice(c, 1)
    };
    Utils.HashTable = function (a) {
        this.length = 0;
        this.items = {};
        if(a != undefined){
            for (var b in a) {
                a.hasOwnProperty(b) && (this.items[b] = a[b], this.length++);
            }
        }
    };
    Utils.HashTable.prototype.setItem = function (a, b) {
        var c = void 0;
        this.hasItem(a) ? c = this.items[a] : this.length++;
        this.items[a] = b;
        return c;
    };
    Utils.HashTable.prototype.getItem = function (a) {
        return this.hasItem(a) ? this.items[a] : void 0;
    };
    Utils.HashTable.prototype.hasItem = function (a) {
        return this.items.hasOwnProperty(a);
    };
    Utils.HashTable.prototype.removeItem = function (a) {
        let previous;
        if (this.hasItem(a)) return previous = this.items[a], this.length--, delete this.items[a], previous;
    };
    Utils.HashTable.prototype.keys = function () {
        var a = [],
            b;
        for (b in this.items) {
            this.hasItem(b) && a.push(b);
        }
        return a;
    };
    Utils.HashTable.prototype.values = function () {
        var a = [],
            b;
        for (b in this.items) {
            this.hasItem(b) && a.push(this.items[b]);
        }
        return a;
    };
    Utils.HashTable.prototype.each = function (a) {
        for (var b in this.items) {
            this.hasItem(b) && a(b, this.items[b]);
        }
    };
    Utils.HashTable.prototype.clear = function () {
        this.items = {};
        this.length = 0;
    };

    function ByteArray() {
        var temp_arr;
        var cur = 0;
        var int8Arr;
        var dt;
        var length = 0;
        var write_arr = new Array();
        this.position = function () {
            return cur;
        };
        this.setCurrentPosition = function (pos) {
            cur = pos;
        }
        this.getTempArr = function () {
            return temp_arr;
        }
        this.isEnd = function () {
            if (cur <= dt.byteLength - 1)
                return false;
            else return true;
        };
        this.initWithBytes = function (bytes) {
            let buffer = new ArrayBuffer(bytes.length);
            int8Arr = new Int8Array(buffer);
            for(let i = 0; i < bytes.length;i++){
                int8Arr[i] = bytes[i];
            }
            temp_arr = int8Arr.buffer;
            dt = new DataView(int8Arr.buffer, 0);
        },
            this.initWithInt8Array = function (arr) {
                temp_arr = arr;
                int8Arr = new Int8Array(arr);
                dt = new DataView(int8Arr.buffer, 0);
            };
        this.Length = function () {
            return length;
        };
        this.readString = function () {
            if (!dt) return null;
            var str = null;
            var strLength = this.readShort();
            if (!strLength) return null;
            if (cur < 0 || cur > dt.byteLength - strLength) return null;
            var str = UTF8FromByteArray(new Uint8Array(temp_arr.slice(cur, cur + strLength)));
            cur += strLength;
            return str;
        };
        this.readText = function () {
            if (!dt) return null;
            var str = null;
            var strLength = this.readInt();
            if (!strLength) return null;
            if (cur < 0 || cur > dt.byteLength - strLength) return null;
            var str = UTF8FromByteArray(new Uint8Array(temp_arr.slice(cur, cur + strLength)));
            cur += strLength;
            return str;
        };
        this.readInt = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 4) return null;
            var num = dt.getInt32(cur);
            cur += 4;
            return num;
        };
        this.readShort = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 2) return null;
            var num = dt.getInt16(cur);;
            cur += 2;
            return num;
        };
        this.readLong = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 8) return null;
            var num = dt.getFloat64(cur);
            cur += 8;
            return num;
        };
        this.readDouble = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 8) return null;
            var num = dt.getFloat64(cur);
            cur += 8;
            return num;
        };
        this.readFloat = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 4) return null;
            var num = dt.getFloat32(cur);
            cur += 4;
            return num;
        };
        this.readBoolean = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 1) return null;
            var num = dt.getInt8(cur);
            var bol = num > 0 ? true : false;
            cur += 1;
            return bol;
        };
        this.readByte = function () {
            if (!dt) return null;
            if (cur < 0 || cur > dt.byteLength - 1) return null;
            var num = dt.getInt8(cur);
            cur += 1;
            return num;
        };

        this.readByteArr = function (length) {
            var barr = new ByteArray();
            var arr = [];
            for (var i = 0; i < length; i++) {
                arr.push(temp_arr[cur + i]);
            }
            barr.initWithInt8Array(arr);
            cur += length;
            return barr;
        };
        this.getByteArrayWithBase64 = function () {
            // test no base 64
            //return this.getArrayBuffer();
            return base64ArrayBuffer(this.getArrayBuffer());
        };
        this.getArrayWrite = function () {
            return write_arr;
        };
        this.getArrayBuffer = function () {
            var size = 0;
            var arr = write_arr;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].t == "str") size += arr[i].val.length + 2;
                if (arr[i].t == "int") size += 4;
                if (arr[i].t == "sho") size += 2;
                if (arr[i].t == "dou") size += 8;
                if (arr[i].t == "flo") size += 4;
                if (arr[i].t == "boo") size += 1;
                if (arr[i].t == "byt") size += 1;
            }
            var buffer = new ArrayBuffer(size);
            var dt = new DataView(buffer, 0);
            cur = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].t == "str") {
                    dt.setInt16(cur, arr[i].val.length);cur += 2;
                    for (var j = 0; j < arr[i].val.length; j++) {
                        dt.setUint8(cur + j, arr[i].val[j]);
                    }
                    cur += arr[i].val.length;
                }
                if (arr[i].t == "txt") {
                    dt.setInt16(cur, arr[i].val.length);cur += 4;
                    for (var j = 0; j < arr[i].val.length; j++) {
                        dt.setUint8(cur + j, arr[i].val[j]);
                    }
                    cur += arr[i].val.length;
                }
                if (arr[i].t == "int") {
                    dt.setInt32(cur, arr[i].val);
                    cur += 4;
                }
                if (arr[i].t == "sho") {
                    dt.setInt16(cur, arr[i].val);
                    cur += 2;
                }
                if (arr[i].t == "dou") {
                    dt.setFloat64(cur, arr[i].val);
                    cur += 8;
                }
                if (arr[i].t == "flo") {
                    dt.setFloat32(cur, arr[i].val);
                    cur += 4;
                }
                if (arr[i].t == "boo") {
                    var valu = arr[i].val == true ? 1 : 0;
                    dt.setInt8(cur, valu);
                    cur += 1;
                }
                if (arr[i].t == "byt") {
                    dt.setInt8(cur, arr[i].val);
                    cur += 1;
                }
            }
            length = cur;
            return dt.buffer;
        };

        this.writeString = function (str) {
            write_arr.push({ t: "str", val: UTF8ToByteArray(str) });
        };
        this.writeText = function (txt) {
            write_arr.push({ t: "txt", val: UTF8ToByteArray(txt) });
        };
        this.writeInt = function (num) {
            write_arr.push({ t: "int", val: num });
        };
        this.writeShort = function (num) {
            write_arr.push({ t: "sho", val: num });
        };
        this.writeDouble = function (num) {
            write_arr.push({ t: "dou", val: num });
        };
        this.writeLong = function (num) {
            write_arr.push({ t: "dou", val: num });
        }
        this.writeFloat = function (num) {
            write_arr.push({ t: "flo", val: num });
        };
        this.writeBoolean = function (bo) {
            write_arr.push({ t: "boo", val: bo });
        };
        this.writeByte = function (num) {
            write_arr.push({ t: "byt", val: num });
        };
        this.writeBytes = function (byteArray) {
            this.writeInt(byteArray.length);
            for (var i = 0; i < byteArray.length; i++) {
                write_arr.push({ t: "byt", val: byteArray[i] });
            }
        };
        this.UTF8toByteArray = function (str) {
            return UTF8ToByteArray(str);
        };

        function base64ArrayBuffer(arrayBuffer) {
            var base64 = '';
            var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            var bytes = new Uint8Array(arrayBuffer);
            var byteLength = bytes.byteLength;
            var byteRemainder = byteLength % 3;
            var mainLength = byteLength - byteRemainder;

            var a, b, c, d;
            var chunk;

            // Main loop deals with bytes in chunks of 3
            for (var i = 0; i < mainLength; i = i + 3) {
                // Combine the three bytes into a single integer
                chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

                // Use bitmasks to extract 6-bit segments from the triplet
                a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
                b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
                c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
                d = chunk & 63; // 63       = 2^6 - 1

                // Convert the raw binary segments to the appropriate ASCII encoding
                base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
            }

            // Deal with the remaining bytes and padding
            if (byteRemainder == 1) {
                chunk = bytes[mainLength];

                a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

                // Set the 4 least significant bits to zero
                b = (chunk & 3) << 4; // 3   = 2^2 - 1

                base64 += encodings[a] + encodings[b] + '==';
            } else if (byteRemainder == 2) {
                chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];

                a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
                b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

                // Set the 2 least significant bits to zero
                c = (chunk & 15) << 2; // 15    = 2^4 - 1

                base64 += encodings[a] + encodings[b] + encodings[c] + '=';
            }

            return base64;
        }
        function UTF8ToByteArray(str) {
            var utf8 = [];
            for (var i = 0; i < str.length; i++) {
                var charcode = str.charCodeAt(i);
                if (charcode < 0x80) utf8.push(charcode);else if (charcode < 0x800) {
                    utf8.push(0xc0 | charcode >> 6, 0x80 | charcode & 0x3f);
                } else if (charcode < 0xd800 || charcode >= 0xe000) {
                    utf8.push(0xe0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
                }
                // surrogate pair
                else {
                    i++;
                    // UTF-16 encodes 0x10000-0x10FFFF by
                    // subtracting 0x10000 and splitting the
                    // 20 bits of 0x0-0xFFFFF into two halves
                    charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                    utf8.push(0xf0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3f, 0x80 | charcode >> 6 & 0x3f, 0x80 | charcode & 0x3f);
                }
            }
            return utf8;
        }
        function UTF8FromByteArray(data) {
            // array of bytes
            var str = '',
                i;
            for (i = 0; i < data.length; i++) {
                var value = data[i];

                if (value < 0x80) {
                    str += String.fromCharCode(value);
                } else if (value > 0xBF && value < 0xE0) {
                    str += String.fromCharCode((value & 0x1F) << 6 | data[i + 1] & 0x3F);
                    i += 1;
                } else if (value > 0xDF && value < 0xF0) {
                    str += String.fromCharCode((value & 0x0F) << 12 | (data[i + 1] & 0x3F) << 6 | data[i + 2] & 0x3F);
                    i += 2;
                } else {
                    // surrogate pair
                    var charCode = ((value & 0x07) << 18 | (data[i + 1] & 0x3F) << 12 | (data[i + 2] & 0x3F) << 6 | data[i + 3] & 0x3F) - 0x010000;

                    str += String.fromCharCode(charCode >> 10 | 0xD800, charCode & 0x03FF | 0xDC00);
                    i += 3;
                }
            }

            return str;
        }
    }

    function MessagePack() {
        this.byteArray = new ByteArray();
        this.initBytes = function (bytes) {
            this.byteArray = new ByteArray();
            this.byteArray.initWithBytes(bytes);
        };
        this.getByteArray = function () {
            return this.byteArray.getArrayBuffer();
        };
        this.getBytes = function () {
            let bytes = [];
            let int8Arr = new Int8Array(this.getByteArray());
            for(let i = 0; i < int8Arr.length;i++){
                bytes.push(int8Arr[i]);
            }
            return bytes;
        };
        this.packInt = function (value) {
            this.byteArray.writeInt(value);
        };
        this.packString = function (value) {
            this.byteArray.writeString(value);
        };
        this.packBoolean = function (value) {
            this.byteArray.writeBoolean(value);
        };
        this.packShort = function (value) {
            this.byteArray.writeShort(value);
        };
        this.packByte = function (value) {
            this.byteArray.writeByte(value);
        };
        this.packDouble = function (value) {
            this.byteArray.writeDouble(value);
        };
        this.packFloat = function (value) {
            this.byteArray.writeFloat(value);
        };
        this.unPackByte = function () {
            return this.byteArray.readByte();
        };
        this.unPackBoolean = function () {
            return this.byteArray.readBoolean();
        };
        this.unPackShort = function () {
            return this.byteArray.readShort();
        };
        this.unPackInt = function () {
            return this.byteArray.readInt();
        };
        this.unPackFloat = function () {
            return this.byteArray.readFloat();
        };
        this.unPackDouble = function () {
            return this.byteArray.readDouble();
        };
        this.unPackString = function () {
            return this.byteArray.readString();
        };
    }

    function SmartFox(config) {
        this._log = new Logger();
        this._majVersion = 1;
        this._minVersion = 0;
        this._subVersion = 0;
        this._lagMonitor = null;
        this.version = this._majVersion + "." + this._minVersion + "." + this._subVersion;
        this._socketEngine = null;
        this._eventDispatcher = null;
        this._eventExtensionDispatcher = null;
        this._inited = this._isJoining = !1;
        this._currentZone = null;
        this.debug = !0;
        if(config != undefined){
            this.config = config;
            null != this.config && this.config.debug && (this.debug = !0);
            this.debug = this.config.debug;
            if(this.config.debug){
                this._log.setLevel(Logger.LogLevel.DEBUG);
            }
        }
        this.lastJoinedRoom = this.mySelf = this.buddyManager =
            this.userManager = this.roomManager = this.sessionToken = null;
        this._controllers = {};
        this.groups = {};
        this._initialize();
        this._log.debug("SmartFox instance ready");
    }
    SmartFox.prototype._initialize = function () {
        this._inited || (this._socketEngine = new SmartFox.SocketEngine(this),
            this._eventDispatcher = new SmartFox.EventDispatcher(this),
            this._eventExtensionDispatcher = new SmartFox.EventDispatcher(),
            this._socketEngine.addEventListener(SmartFox.SocketEvent.CONNECT,this._onSocketConnect, this),
            this._socketEngine.addEventListener(SmartFox.SocketEvent.DISCONNECT,this._onSocketDisconnect, this),
            this._socketEngine.addEventListener(SmartFox.SocketEvent.DATA,this._onSocketData, this),
            this._socketEngine.addEventListener(SmartFox.SocketEvent.IOERROR, this._onSocketIOError, this),
            this._controllers[0] = new SmartFox.Controllers.SystemController(this),
            this._controllers[1] = new SmartFox.Controllers.ExtensionController(this),
            this._inited = !0,
            this._reset());
    };
    SmartFox.prototype.getCurrentZone = function(){
        return this._currentZone;
    }
    SmartFox.prototype.getLastJoinedRoom = function(){
        return this.lastJoinedRoom;
    }
    SmartFox.prototype.getLogger = function(){
        return this._log;
    }
    SmartFox.prototype._reset = function (a) {
        this._inited = false;
        this.userManager = new SmartFox.Managers.GlobalUserManager(this);
        this.roomManager = new SmartFox.Managers.RoomManager(this);
        this.groups = {};
        this._isJoining = !1;
        this.mySelf = this.lastJoinedRoom = this._currentZone = null;
        a && (this.sessionToken = null);
    };
    SmartFox.prototype.getGroups = function () {
        return this.groups.id;
    };
    SmartFox.prototype._handleLogout = function () {
        this._reset(!1);
    };
    SmartFox.prototype._handleClientDisconnection = function (a) {
        this.isConnected() && this._socketEngine.disconnect(a);
    };
    SmartFox.prototype._handleHandShake = function (a) {
        let b = a.get(SmartFox.Controllers.KEY_ERROR_CODE);
        null == b ? (this.sessionToken = a.get(SmartFox.Requests.System.HandshakeRequest.KEY_SESSION_TOKEN),
            this._socketEngine._maxMessageSize = a.get(SmartFox.Requests.System.HandshakeRequest.KEY_MAX_MESSAGE_SIZE),
            this._socketEngine._isReconnecting ? this._socketEngine._isReconnecting = !1 :
                this._dispatchEvent(SmartFox.Event.CONNECTION, {
                    success: !0
                })) : (a = {
            success: !1,
            errorMessage: SmartFox.ErrorCodes.getErrorMessage(b, a.get(SmartFox.Controllers.KEY_ERROR_PARAMS)),
            errorCode: b
        }, this._dispatchEvent(SmartFox.Event.CONNECTION, a))
    };
    SmartFox.prototype.getRoomById = function (roomId) {
        return this.roomManager.getRoomById(roomId);
    };
    SmartFox.prototype.removeRoomById = function(roomId){
        this.roomManager._removeRoomById(roomId);
    }
    SmartFox.prototype.getRoomByName = function (a) {
        return this.roomManager.getRoomByName(a);
    };
    SmartFox.prototype.getRoomList = function () {
        return this.roomManager.getRoomList();
    };
    SmartFox.prototype.getRoomFromGroup = function (a) {
        return this.roomManager.getRoomListFromGroup(a);
    };
    SmartFox.prototype.getRoomGroups = function () {
        return this.roomManager.getRoomGroups();
    };
    SmartFox.prototype.getJoinedRooms = function () {
        return this.roomManager.getJoinedRooms();
    };
    SmartFox.prototype.initConfig = function (config) {
        if (config != undefined) {
            this.config = config;
            null != this.config && this.config.debug && (this.debug = !0);
            this.debug = this.config.debug;
            if(this.config.debug){
                this._log.setLevel(Logger.LogLevel.DEBUG);
            }
        }
    };
    SmartFox.SocketEngine = function (smartFox) {
        this._smartFox = smartFox;
        this._socket = null;
        this.isConnected = !1;
        this.isConnecting = !1;
        this._socket = null;
        this._controller = {};
        this._maxMessageSize = 1E4;
        this.reconnectionSeconds = 0;
        this._reconnectionDelayMillis = 1E3;
        this._attemptingReconnection = this._isReconnecting = !1;
        this._eventDispatcher = new SmartFox.EventDispatcher();
        this._disconnectionReason = SmartFox.ClientDisconnectionReason.UNKNOWN;
        this._log = smartFox._log;
    }
    SmartFox.SocketEngine.prototype.connect = function (ip, port, ssl) {
        var protocol = "ws://";
        if (ssl != undefined && ssl) {
            protocol = "wss://";
        }
        var url = protocol + ip + ":" + port + "/";
        this.isConnected ?
            this._log.error("Connection is already active") :
            this.isConnecting ?
                this._log.error("A connection attempt is already in progress") :
                (
                    this.isConnecting = !0,
                        this._socket = new WebSocket(url, [], "cacert.pem"),
                        this._socket.binaryType = "arraybuffer",
                        this._socket._scope = this,
                        this._socket.onopen = this._onSocketConnect,
                        this._socket.onclose = this._onSocketDisconnect,
                        this._socket.onmessage = this._onSocketData,
                        this._socket.onerror = this._onSocketError
                )
    };
    SmartFox.SocketEngine.prototype._onSocketConnect = function () {
        this._scope.isConnected = !0;
        this._scope.isConnecting = !1;
        this._scope._log.debug("SOCKET CONNECTION SUCCESS");
        this._scope._eventDispatcher.dispatchEvent(SmartFox.SocketEvent.CONNECT, {
            success: !0,
            isReconnection: this._scope._attemptingReconnection
        })
    };
    SmartFox.SocketEngine.prototype.disconnect = function (a) {
        this._disconnectionReason = a;
        if(this._socket)
            this._socket.close()
    };
    SmartFox.SocketEngine.prototype._onSocketData = function (a) {
        this._scope._eventDispatcher.dispatchEvent(SmartFox.SocketEvent.DATA, a.data)
    };
    SmartFox.SocketEngine.prototype._onSocketDisconnect = function () {
        this._scope.isConnected = !1;
        if (this._scope.isConnecting) {
            this._scope.isConnecting = !1;
            var a = {
                success: !1,
                isReconnection: this._scope._attemptingReconnection
            };
            this._scope._eventDispatcher.dispatchEvent(SmartFox.SocketEvent.CONNECT, a)
        } else a = {
            reason: this._scope._disconnectionReason
        }, this._scope._eventDispatcher.dispatchEvent(SmartFox.SocketEvent.DISCONNECT, a), this._scope._disconnectionReason = SmartFox.ClientDisconnectionReason.UNKNOWN
    };
    SmartFox.SocketEngine.prototype._onSocketError = function (a) {
        this._scope._eventDispatcher.dispatchEvent(SmartFox.SocketEvent.IOERROR, a.data)
    };
    SmartFox.SocketEngine.prototype.addEventListener = function (event, func, caller) {
        this._eventDispatcher.addEventListener(event, func, caller);
    };
    SmartFox.SocketEngine.prototype.removeEventListener = function (event, func) {
        this._eventDispatcher.removeEventListener(event, func);
    };
    SmartFox.SocketEngine.prototype.addController = function(a, b){
        null == this._controller[a] && (this._controller[a] = b);
    }
    SmartFox.SocketEngine.prototype.removeController = function(a){
        delete this._controller(a);
    }
    SmartFox.SocketEngine.prototype.send = function (request) {
        let nObject = SObject.newInstance();
        nObject.putByte(SmartFox.Controllers.CONTROLLER_ID,request.getTargetController());
        nObject.putShort(SmartFox.Controllers.ACTION_ID, request.getId());
        nObject.putNObject(SmartFox.Controllers.PARAM_ID, request._reqObj);
        let rawPacket = nObject.toBinary().getArrayBuffer();
        this._socket.send(rawPacket);
        // this._log.debug("--send message---")
        // this._log.debug(nObject);
    };
    SmartFox.DebugHelper = {};
    SmartFox.DebugHelper.getDump = function(a){
        function b(a, c, f) {
            var g = null;
            SmartFox.DebugHelper._getTabs(f);
            for (var h in a) {
                var i = a[h];
                if (null == i) g = "Null";
                else {
                    var j = i.constructor,
                        k = void 0;
                    j === Array || j === Object ? (g = null, k = j === Array ? "[Array]" : "[Object]", b(i, c, f + 1)) : g = i.constructor === Number ? "Num" : i.constructor === Boolean ? "Bool" : i.constructor.name === "SObject" ? "SObject" : i.constructor === String ? "Str" : "Unsupported"
                }
                let gg = " (" + g + ")";
                if(g === "SObject"){
                    g = i.getDump();
                    gg = g;
                }
                c.push(SmartFox.DebugHelper._getTabs(f) + h + ": " + (void 0 == k ? i : k) + (void 0 == g ? "" : gg))
            }
        }
        var c = [];
        b(a, c, 0);
        return SmartFox.DebugHelper._prettyPrint(c)
    }
    SmartFox.DebugHelper._getTabs = function (a) {
        if (0 >= a) return "";
        if (1 == a) return "\t";
        for (var b = "", c = 0; c < a; c++) b += "\t";
        return b
    };
    SmartFox.DebugHelper._prettyPrint = function (a) {
        for (var b = "", c = a.length - 1; - 1 < c; c--) {
            b += a[c] + "\n";
        }
        return b
    };
    let ControlRequest = {};
    ControlRequest.SYSTEM = 0;
    ControlRequest.EXTENSION = 1;
    SmartFox.Requests = {};
    SmartFox.Requests.Game = {};
    SmartFox.Requests.Handshake = 0;
    SmartFox.Requests.Login = 1;
    SmartFox.Requests.Logout = 2;
    SmartFox.Requests.JoinRoom = 4;
    SmartFox.Requests.CreateRoom = 6;
    SmartFox.Requests.GenericMessage = 7;
    SmartFox.Requests.ChangeRoomName = 8;
    SmartFox.Requests.ChangeRoomPassword = 9;
    SmartFox.Requests.SetRoomVariables = 11;
    SmartFox.Requests.SetUserVariables = 12;
    SmartFox.Requests.CallExtension = 13;
    SmartFox.Requests.LeaveRoom = 14;
    SmartFox.Requests.SubscribeRoomGroup = 15;
    SmartFox.Requests.UnsubscribeRoomGroup = 16;
    SmartFox.Requests.SpectatorToPlayer = 17;
    SmartFox.Requests.PlayerToSpectator = 18;
    SmartFox.Requests.ChangeRoomCapacity = 19;
    SmartFox.Requests.KickUser = 24;
    SmartFox.Requests.BanUser = 25;
    SmartFox.Requests.ManualDisconnection = 26;
    SmartFox.Requests.FindRooms = 27;
    SmartFox.Requests.FindUsers = 28;
    SmartFox.Requests.PingPong = 29;
    SmartFox.Requests.InitBuddyList = 200;
    SmartFox.Requests.AddBuddy = 201;
    SmartFox.Requests.BlockBuddy = 202;
    SmartFox.Requests.RemoveBuddy = 203;
    SmartFox.Requests.SetBuddyVariables = 204;
    SmartFox.Requests.GoOnline = 205;
    SmartFox.Requests.InviteUsers = 300;
    SmartFox.Requests.InvitationReply = 301;
    SmartFox.Requests.CreateGame = 302;
    SmartFox.Requests.QuickJoinGame = 303;
    SmartFox.Requests.ClientDisconnectionReason = 1005;
    SmartFox.Requests.getRequestNameFromId = function (a) {
        for (var b in SmartFox.Requests) if (SmartFox.Requests[b] == a) return b;
        return "ActionID: "+ a;
    };
    SmartFox.Requests.RoomSettings = vcClass.Class.extend({
        ctor(a){
            this.name = a;
            this.password = "";
            this.groupId = "default";
            this.isGame = !1;
            this.maxUsers = 10;
            this.maxSpectators = 0;
            this.maxVariables = 5;
            this.variables = [];
            this.extension = this.events = this.permissions = null
        }
    });
    SmartFox.Requests.Game.GameSettings = SmartFox.Requests.RoomSettings.extend({
        ctor(a){
            this._super(a);
            this.isPublic = !0;
            this.minPlayersToStartGame = 2;
            this.searchableRooms = this.invitedPlayers = null;
            this.invitationExpiryTime = 15;
            this.leaveLastJoinedRoom = !0;
            this.notifyGameStarted = !1;
            this.invitationParams = this.spectatorMatchExpression = this.playerMatchExpression = null
        }
    });
    SmartFox.Requests.RoomPermissions = function(){
        this.allowPasswordStateChange = this.allowNameChange = !1;
        this.allowPublicMessages = !0;
        this.allowResizing = !1
    }
    SmartFox.Requests.RoomEvents = function () {
        this.allowUserVariablesUpdate = this.allowUserExit = this.allowUserEnter = this.allowUserCountChange = !1
    };
    SmartFox.Requests.RoomExtension = function (a, b) {
        this.id = a;
        this.className = b;
        this.propertiesFile = ""
    };
    SmartFox.Requests.System = {};
    SmartFox.Exceptions = {};
    SmartFox.Exceptions.Error = vcClass.Class.extend({
        ctor: function (a) {
            this._message = a;
        },
        getMessage: function () {
            return this._message;
        }
    });
    SmartFox.Exceptions.ValidationError = SmartFox.Exceptions.Error.extend({
        ctor: function (a, b) {
            this._super(a);
            this._errors = b;
        },
        getErrors: function () {
            return this._errors;
        }
    })
    SmartFox.Requests._BaseRequest = vcClass.Class.extend({
        ctor: function(id) {
            this._reqObj = SObject.newInstance();
            this._id = id;
            this._idcontroller = 0;
            this._targetController = ControlRequest.SYSTEM;
            this._log = new Logger();
        },
        getTargetController : function(){
            return this._targetController;
        },
        getId : function(){
            return this._id;
        },
        getMessage: function getMessage() {
            return {
                a: this._id,
                c: this._targetController,
                p: this._reqObj
            }
        },
        getDump: function(){
            return this._reqObj.getDump();
        },
        validate: function validate() {
            this._log.error("BaseRequest.validate = no child-class implementation found!")
        },
        execute: function execute() {
            this._log.error("BaseRequest.execute = no child-class implementation found!")
        }
    });

    SmartFox.Requests.System.ExtensionRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.CallExtension);
            this._targetController = ControlRequest.EXTENSION;
            this._extCmd = a;
            this._params = null;
            if(b != undefined){
                this._params = b;
            }
            this._roomId = null;
            if(c != undefined){
                this._roomId = c;
            }
            null == this._params && (this._params = SObject.newInstance());
        },
        validate: function () {
            var a = [];
            (null == this._extCmd || 0 == this._extCmd.length) && a.push("Missing extension command");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("ExtensionRequest Error", a);
        },
        execute: function () {
            this._reqObj.putUtfString(this.constructor.KEY_CMD, this._extCmd);
            if(this._roomId != null &&  this._roomId >= 0){
                this._reqObj.putInt(this.constructor.KEY_ROOM, this._roomId);
            }
            if(this._params != null)
                this._reqObj.putNObject(this.constructor.KEY_PARAMS, this._params);
        }
    });
    SmartFox.Requests.System.ExtensionRequest.KEY_CMD = "c";
    SmartFox.Requests.System.ExtensionRequest.KEY_PARAMS = "p";
    SmartFox.Requests.System.ExtensionRequest.KEY_ROOM = "r";
    SmartFox.Requests.System.HandshakeRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b) {
            this._super(SmartFox.Requests.Handshake);
            this._apiVersion = a;
            this._reconnectionToken = b;
            this._reqObj.putUtfString(this.constructor.KEY_API, this._apiVersion);
            this._reqObj.putUtfString(this.constructor.KEY_CLIENT_TYPE, navigatorUserAgent);
            null != this._reconnectionToken && (this._reqObj.putUtfString(this.constructor.KEY_RECONNECTION_TOKEN, this._reconnectionToken))
        },
        validate: function () {

        },
        execute: function () {
        }
    });

    SmartFox.Requests.System.HandshakeRequest.KEY_SESSION_TOKEN = "tk";
    SmartFox.Requests.System.HandshakeRequest.KEY_API = "api";
    SmartFox.Requests.System.HandshakeRequest.KEY_COMPRESSION_THRESHOLD = "ct";
    SmartFox.Requests.System.HandshakeRequest.KEY_RECONNECTION_TOKEN = "rt";
    SmartFox.Requests.System.HandshakeRequest.KEY_CLIENT_TYPE = "cl";
    SmartFox.Requests.System.HandshakeRequest.KEY_MAX_MESSAGE_SIZE = "ms";
    SmartFox.Requests.System.LogoutRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function() {
            this._super(SmartFox.Requests.Logout);
        },
        validate: function(a) {
        },
        execute: function() {}
    });
    SmartFox.Requests.System.LoginRequest = SmartFox.Requests._BaseRequest.extend({
        ctor(un, pwd, zn, params) {
            this._super(SmartFox.Requests.Login);
            this._un = un;
            this._pwd = pwd;
            this._params = params;
            this._zn = zn;
        },
        validate(a) {

        },
        execute(a) {
            a._log.debug(this._zn + this._pwd + this._un);
            this._reqObj.putUtfString(this.constructor.KEY_ZONE_NAME, this._zn);
            this._reqObj.putUtfString(this.constructor.KEY_USER_NAME, this._un);
            this._reqObj.putUtfString(this.constructor.KEY_PASSWORD, 0 < this._pwd.length ? (this._pwd) : "");
            null != this._params && undefined != this._params && (this._reqObj.putNObject(this.constructor.KEY_PARAMS, this._params));
        }
    });
    SmartFox.Requests.System.LoginRequest.KEY_ZONE_NAME = "zn";
    SmartFox.Requests.System.LoginRequest.KEY_USER_NAME = "un";
    SmartFox.Requests.System.LoginRequest.KEY_PASSWORD = "pw";
    SmartFox.Requests.System.LoginRequest.KEY_PARAMS = "p";
    SmartFox.Requests.System.LoginRequest.KEY_PRIVILEGE_ID = "pi";
    SmartFox.Requests.System.LoginRequest.KEY_ID = "id";
    SmartFox.Requests.System.LoginRequest.KEY_ROOMLIST = "rl";
    SmartFox.Requests.System.LoginRequest.KEY_RECONNECTION_SECONDS = "rs";
    SmartFox.Requests.System.JoinRoomRequest = SmartFox.Requests._BaseRequest.extend({
        ctor(a, pass, idRoomtoLeave, isSpectator) {
            this._super(SmartFox.Requests.JoinRoom);
            "string" === typeof a ? this._rName = a : "number" === typeof a ? this._rId = a : a instanceof SmartFox.Entities.Room && (this._rId = a.id, this._rName = a.name);
            this._password = pass;
            this._roomIdToLeave = idRoomtoLeave;
            this._asSpectator = "boolean" == typeof isSpectator ? isSpectator : !1;
        },
        validate: function () {
            if (null == this._rId && null == this._rName)
                throw new SmartFox.Exceptions.ValidationError("Join Room Error",["Missing id or name Room"]);
        },
        execute: function(a) {
            a._isJoining = !0;
            0 <= this._rId ? this._reqObj.putInt(this.constructor.KEY_ROOM_ID,this._rId) : null != this._rName && (this._reqObj.putUtfString(this.constructor.KEY_ROOM_NAME,this._rName));
            null != this._password && (this._reqObj.putUtfString(this.constructor.KEY_PASS, this._password));
            null != this._roomIdToLeave && (this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE, this._roomIdToLeave));
            this._asSpectator && (this._reqObj.putBool(this.constructor.KEY_AS_SPECTATOR,this._asSpectator))
        }
    });
    SmartFox.Requests.System.JoinRoomRequest.KEY_ROOM = "r";
    SmartFox.Requests.System.JoinRoomRequest.KEY_USER_LIST = "ul";
    SmartFox.Requests.System.JoinRoomRequest.KEY_ROOM_NAME = "n";
    SmartFox.Requests.System.JoinRoomRequest.KEY_ROOM_ID = "i";
    SmartFox.Requests.System.JoinRoomRequest.KEY_PASS = "p";
    SmartFox.Requests.System.JoinRoomRequest.KEY_ROOM_TO_LEAVE = "rl";
    SmartFox.Requests.System.JoinRoomRequest.KEY_AS_SPECTATOR = "sp";
    SmartFox.Requests.System.LeaveRoomRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function(a) {
            this._super(SmartFox.Requests.LeaveRoom);
            this._room = a;
        },
        validate: function(a) {
            if (1 > a.getJoinedRooms().length)
                throw new SmartFox.Exceptions.ValidationError("LeaveRoomRequest Error", ["You are not joined in any room"]);
        },
        execute: function() {
            null != this._room && (this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id))
        }
    });
    SmartFox.Requests.System.LeaveRoomRequest.KEY_ROOM_ID = "r";
    SmartFox.Requests.System.SubscribeRoomGroup = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a) {
            this._super(SmartFox.Requests.SubscribeRoomGroup);
            this._groupId = a;
        },
        validate: function (a) {

        },
        execute: function () {
            null != this._groupId && (this._reqObj.putUtfString("g", this._groupId));
        }
    });
    SmartFox.Requests.System.UnsubscribeRoomGroupRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a) {
            this._super(SmartFox.Requests.UnsubscribeRoomGroup);
            this._groupId = a
        },
        validate: function (a) {

        },
        execute: function () {
            null != this._groupId && (this._reqObj.putUtfString(this.constructor.KEY_GROUP_ID,this._groupId));
        }
    });
    SmartFox.Requests.System.UnsubscribeRoomGroupRequest.KEY_GROUP_ID = "g";
    SmartFox.Requests.System.SpectatorToPlayerRequest = SmartFox.Requests._BaseRequest.extend({
        ctor(a){
            this._super(SmartFox.Requests.SpectatorToPlayer);
            this._room = a;
        },
        validate(a){
            if (1 > a.getJoinedRooms().length) throw new SmartFox.Exceptions.ValidationError("SpectatorToPlayerRequest Error", ["You are not joined in any room"]);
        },
        execute(a){
            null == this._room && (this._room = a.lastJoinedRoom);
            this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id)
        }

    });
    SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_ROOM_ID = "r";
    SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_USER_ID = "u";
    SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_PLAYER_ID = "p";
    SmartFox.Requests.System.PlayerToSpectatorRequest = SmartFox.Requests._BaseRequest.extend({
        ctor(a){
            this._super(SmartFox.Requests.PlayerToSpectator);
            this._room = a;
        },
        validate(a){
            if (1 > a.getJoinedRooms().length) throw new SmartFox.Exceptions.ValidationError("PlayerToSpectatorRequest Error", ["You are not joined in any room"]);
        },
        execute(a){
            null == this._room && (this._room = a.lastJoinedRoom);
            this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id)
        }

    })
    SmartFox.Requests.System.PlayerToSpectatorRequest.KEY_ROOM_ID = "r";
    SmartFox.Requests.System.PlayerToSpectatorRequest.KEY_USER_ID = "u";

    SmartFox.Requests.Game.QuickJoinGameRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.QuickJoinGame);
            this._matchExpression = a;
            this._whereToSearch = b;
            this._roomToLeave = c
        },
        validate: function () {
            var a = [];
            null == this._whereToSearch || 1 > this._whereToSearch.length ? a.push("Missing lis of Rooms or Group name where to search the game to join") : this._whereToSearch.length > this.constructor.MAX_ROOMS && a.push("Too many Rooms specified in list where to search the game to join; client limit is: " +
                this.constructor.MAX_ROOMS);
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("CreateSFSGameRequest Error", a);
        },
        execute: function () {
            if ("string" == typeof this._whereToSearch[0])
                this._reqObj.putUtfStringArray(this.constructor.KEY_GROUP_LIST,[this._whereToSearch]);
            else if (this._whereToSearch[0] instanceof SmartFox.Entities.Room) {
                for (var a = [], b = 0; b < this._whereToSearch.length; b++) {
                    var c = this._whereToSearch[b];
                    c instanceof SmartFox.Entities.Room && a.push(c.id)
                }
                this._reqObj.putIntArray(this.constructor.KEY_ROOM_LIST,a);
            } else
                throw new SmartFox.Exceptions.ValidationError("Invalid type in whereToSearch parameter");

            null != this._roomToLeave && (this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE,this._roomToLeave.id));
            null != this._matchExpression && (this._reqObj.putNArray(this.constructor.KEY_MATCH_EXPRESSION,this._matchExpression.toNArray()))
        }
    });
    SmartFox.Requests.Game.QuickJoinGameRequest.KEY_ROOM_LIST = "rl";
    SmartFox.Requests.Game.QuickJoinGameRequest.KEY_GROUP_LIST = "gl";
    SmartFox.Requests.Game.QuickJoinGameRequest.KEY_ROOM_TO_LEAVE = "tl";
    SmartFox.Requests.Game.QuickJoinGameRequest.KEY_MATCH_EXPRESSION = "me";
    SmartFox.Requests.Game.QuickJoinGameRequest.MAX_ROOMS = 32;
    SmartFox.Requests.System.FindRoomsRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.FindRooms);
            null == c && (c = 0);
            this._matchExpr = a;
            this._groupId = b;
            this._limit = c
        },
        validate: function () {
            var a = [];
            null == this._matchExpr && a.push("Missing match expression");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("FindRoomsRequest Error", a);
        },
        execute: function () {
            this._reqObj.putNArray(this.constructor.KEY_EXPRESSION,this._matchExpr.toNArray());
            null != this._groupId && this._reqObj.putUtfString(this.constructor.KEY_GROUP,this._groupId)
            0 < this._limit && this._reqObj.putShort(this.constructor.KEY_LIMIT,this._limit)
        }
    });
    SmartFox.Requests.System.FindRoomsRequest.KEY_EXPRESSION = "e";
    SmartFox.Requests.System.FindRoomsRequest.KEY_GROUP = "g";
    SmartFox.Requests.System.FindRoomsRequest.KEY_LIMIT = "l";
    SmartFox.Requests.System.FindRoomsRequest.KEY_FILTERED_ROOMS = "fr";
    SmartFox.Requests.System.FindUsersRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.FindUsers);
            null == c && (c = 0);
            this._matchExpr = a;
            this._target = b;
            this._limit = c
        },
        validate: function () {
            var a = [];
            null == this._matchExpr && a.push("Missing match expression");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("FindUsersRequest Error", a);
        },
        execute: function () {
            this._reqObj.putNArray(this.constructor.KEY_EXPRESSION,this._matchExpr.toNArray());
            null != this._target && (this._target instanceof SmartFox.Entities.Room ? this._reqObj.putInt(this.constructor.KEY_ROOM, this._target.id) : "string" == typeof this._target ? this._reqObj.putUtfString(this.constructor.KEY_GROUP, this._target) : this._log.warn("Unsupport target type for FindUsersRequest: " + this._target));
            0 < this._limit && (this._reqObj.putShort(this.constructor.KEY_LIMIT,this._limit))
        }
    });
    SmartFox.Requests.System.FindUsersRequest.KEY_EXPRESSION = "e";
    SmartFox.Requests.System.FindUsersRequest.KEY_GROUP = "g";
    SmartFox.Requests.System.FindUsersRequest.KEY_ROOM = "r";
    SmartFox.Requests.System.FindUsersRequest.KEY_LIMIT = "l";
    SmartFox.Requests.System.FindUsersRequest.KEY_FILTERED_USERS = "fu";

    SmartFox.Requests.System.PingPongRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function () {
            this._super(SmartFox.Requests.PingPong)
        },
        validate: function () {},
        execute: function () {}
    });

    SmartFox.Requests.Game.InviteUsersRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.InviteUsers);
            this._invitedUsers = a;
            this._secondsForAnswer = b;
            this._params = c
            if(b == undefined) this._secondsForAnswer = this.constructor.MIN_EXPIRY_TIME;
            if(c == undefined) this._params = null;
        },
        validate: function () {
            var a = [];
            (null == this._invitedUsers || 1 > this._invitedUsers.length) && a.push("No invitation(s) to send");
            this._invitedUsers.length > this.constructor.MAX_INVITATIONS_FROM_CLIENT_SIDE && a.push("Too many invitations; " + this.constructor.MAX_INVITATIONS_FROM_CLIENT_SIDE + " max are allowed from client side");
            (this._secondsForAnswer < this.constructor.MIN_EXPIRY_TIME || this._secondsForAnswer > this.constructor.MAX_EXPIRY_TIME) && a.push("secondsForAnswer value is out of range (min: " + this.constructor.MIN_EXPIRY_TIME + "; max: " + this.constructor.MAX_EXPIRY_TIME + ")");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("InviteUsersRequest Error", a);
        },
        execute: function (a) {
            var b = [],
                c;
            for (c in this._invitedUsers) {
                var d = this._invitedUsers[c];
                (d instanceof SmartFox.Entities.User) &&
                d != a.mySelf && b.push(d.id)
            }
            this._reqObj.putIntArray(this.constructor.KEY_INVITED_USERS,b);
            this._reqObj.putShort(this.constructor.KEY_TIME,this._secondsForAnswer);
            null != this._params && (this._reqObj.putNObject(this.constructor.KEY_PARAMS,this._params))
        }
    });
    SmartFox.Requests.Game.InviteUsersRequest.KEY_USER = "u";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_USER_ID = "ui";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_INVITATION_ID = "ii";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_TIME = "t";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_PARAMS = "p";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_INVITEE_ID = "ee";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_INVITED_USERS = "iu";
    SmartFox.Requests.Game.InviteUsersRequest.KEY_REPLY_ID = "ri";
    SmartFox.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE = 8;
    SmartFox.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME = 5;
    SmartFox.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME = 300;
    SmartFox.Requests.Game.InvitationReplyRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.InvitationReply);
            this._invitation = a;
            this._reply = b;
            this._params = c
        },
        validate: function () {
            var a = [];
            null == this._invitation && a.push("Missing invitation object");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("InvitationReplyRequest Error", a);
        },
        execute: function () {
            this._reqObj.putInt(this.constructor.KEY_INVITATION_ID,this._invitation.id);
            this._reqObj.putByte(this.constructor.KEY_INVITATION_REPLY, this._reply);
            null != this._params && (this._reqObj.putNObject(this.constructor.KEY_INVITATION_PARAMS, this._params))
        }
    });
    SmartFox.Requests.Game.CreateGameRequest = SmartFox.Requests._BaseRequest.extend({
        init: function (a) {
            this._super(SmartFox.Requests.CreateGame);
            this._settings = a;
            this._createRoomRequest = new SmartFox.Requests.System.CreateRoomRequest(a, !1, null)
        },
        validate: function (a) {
            var b = [];
            try {
                this._createRoomRequest.validate(a)
            } catch (c) {
                b = c.getErrors()
            }
            this._settings.minPlayersToStartGame > this._settings.maxUsers && b.push("Minimum number of players to start the game can't be greater than the Room's maximum number of users");
            (this._settings.invitationExpiryTime < SmartFox.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME || this._settings.invitationExpiryTime > SmartFox.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME) && b.push("Invitation expiration time value is out of range (min: " + SmartFox.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + SmartFox.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME + ")");
            null != this._settings.invitedPlayers && this._settings.invitedPlayers.length > SmartFox.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE &&
            b.push("Can't invite more than " + SmartFox.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " players from client side");
            if (0 < b.length) throw new SmartFox.Exceptions.ValidationError("CreateSFSGameRequest Error", b);
        },
        execute: function (a) {
            this._createRoomRequest.execute(a);
            this._reqObj = this._createRoomRequest._reqObj;
            this._reqObj.putBool(this.constructor.KEY_IS_PUBLIC,this._settings.isPublic);
            this._reqObj.putInt(this.constructor.KEY_MIN_PLAYERS,this._settings.minPlayersToStartGame);
            this._reqObj.putDouble(this.constructor.KEY_INVITATION_EXPIRY,this._settings.invitationExpiryTime);
            this._reqObj[this.constructor.KEY_LEAVE_ROOM] = this._settings.leaveLastJoinedRoom;
            this._reqObj[this.constructor.KEY_NOTIFY_GAME_STARTED] = this._settings.notifyGameStarted;
            null != this._settings.playerMatchExpression && (this._reqObj[this.constructor.KEY_PLAYER_MATCH_EXP] = this._settings.playerMatchExpression._toArray());
            null != this._settings.spectatorMatchExpression && (this._reqObj[this.constructor.KEY_SPECTATOR_MATCH_EXP] = this._settings.spectatorMatchExpression._toArray());
            if (null != this._settings.invitedPlayers) {
                var a = [],
                    b;
                for (b in this._settings.invitedPlayers) {
                    var c = this._settings.invitedPlayers[b];
                    (c instanceof SmartFox.Entities.User) && a.push(c.id)
                }
                this._reqObj[this.constructor.KEY_INVITED_PLAYERS] = a
            }
            null != this._settings.searchableRooms && (this._reqObj[this.constructor.KEY_SEARCHABLE_ROOMS] = this._settings.searchableRooms);
            null != this._settings.invitationParams && (this._reqObj[this.constructor.KEY_INVITATION_PARAMS] = this._settings.invitationParams)
        }
    });
    SmartFox.Requests.Game.CreateGameRequest.KEY_IS_PUBLIC = "gip";
    SmartFox.Requests.Game.CreateGameRequest.KEY_MIN_PLAYERS = "gmp";
    SmartFox.Requests.Game.CreateGameRequest.KEY_INVITED_PLAYERS = "ginp";
    SmartFox.Requests.Game.CreateGameRequest.KEY_SEARCHABLE_ROOMS = "gsr";
    SmartFox.Requests.Game.CreateGameRequest.KEY_PLAYER_MATCH_EXP = "gpme";
    SmartFox.Requests.Game.CreateGameRequest.KEY_SPECTATOR_MATCH_EXP = "gsme";
    SmartFox.Requests.Game.CreateGameRequest.KEY_INVITATION_EXPIRY = "gie";
    SmartFox.Requests.Game.CreateGameRequest.KEY_LEAVE_ROOM = "glr";
    SmartFox.Requests.Game.CreateGameRequest.KEY_NOTIFY_GAME_STARTED = "gns";
    SmartFox.Requests.Game.CreateGameRequest.KEY_INVITATION_PARAMS = "ip";

    SmartFox.Requests.System.CreateRoomRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b, c) {
            this._super(SmartFox.Requests.CreateRoom);
            this._settings = a;
            this._autoJoin = "boolean" == typeof b ? b : !1;
            this._roomToLeave = c;
        },
        validate: function () {
            var a = [];
            (null == this._settings.name || 0 == this._settings.name.length) && a.push("Missing Room name");
            0 >= this._settings.maxUsers && a.push("Max number of users must be > 0");
            null != this._settings.extension && ((null == this._settings.extension.className || 0 == this._settings.extension.className.length) &&
            a.push("Missing Extension class name"), (null == this._settings.extension.id || 0 == this._settings.extension.id.length) && a.push("Missing Extension id"));

            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("CreateRoomRequest Error", a);
        },
        execute: function () {
            this._reqObj.putUtfString(this.constructor.KEY_NAME,this._settings.name);
            this._reqObj.putUtfString(this.constructor.KEY_GROUP_ID,this._settings.groupId);
            this._reqObj.putUtfString(this.constructor.KEY_PASSWORD,this._settings.password);
            this._reqObj.putBool(this.constructor.KEY_ISGAME,this._settings.isGame);
            this._reqObj.putShort(this.constructor.KEY_MAXUSERS,this._settings.maxUsers);
            this._reqObj.putShort(this.constructor.KEY_MAXSPECTATORS,this._settings.maxSpectators);
            this._reqObj.putShort(this.constructor.KEY_MAXVARS,this._settings.maxVariables);
            if (null != this._settings.variables && 0 < this._settings.variables.length) {
                var a = SArray.newInstance();
                for (let b in this._settings.variables) {
                    var c = this._settings.variables[b];
                    if(c instanceof SmartFox.Entities.Variables.RoomVariable){
                        a.addNArray(c.toNArray());
                    }
                }
                this._reqObj.putNArray(this.constructor.KEY_ROOMVARS, a);
            }
            null != this._settings.permissions &&
            (a = [], a.push(this._settings.permissions.allowNameChange),
                a.push(this._settings.permissions.allowPasswordStateChange),
                a.push(this._settings.permissions.allowPublicMessages),
                a.push(this._settings.permissions.allowResizing),
                this._reqObj.putBoolArray(this.constructor.KEY_PERMISSIONS,a));

            null != this._settings.events && (a = [], a.push(this._settings.events.allowUserEnter), a.push(this._settings.events.allowUserExit), a.push(this._settings.events.allowUserCountChange), a.push(this._settings.events.allowUserVariablesUpdate),
                this._reqObj.putBoolArray(this.constructor.KEY_EVENTS, a));
            null != this._settings.extension && (this._reqObj.putUtfString(this.constructor.KEY_EXTID, this._settings.extension.id), this._reqObj.putUtfString(this.constructor.KEY_EXTCLASS ,this._settings.extension.className), null != this._settings.extension.propertiesFile && 0 < this._settings.extension.propertiesFile.length && (this._reqObj.putUtfString(this.constructor.KEY_EXTPROP,this._settings.extension.propertiesFile)));
            this._reqObj.putBool(this.constructor.KEY_AUTOJOIN ,this._autoJoin);
            null != this._roomToLeave && (this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE, this._roomToLeave.id))
        }
    });
    SmartFox.Requests.System.CreateRoomRequest.KEY_ROOM = "r";
    SmartFox.Requests.System.CreateRoomRequest.KEY_NAME = "n";
    SmartFox.Requests.System.CreateRoomRequest.KEY_PASSWORD = "p";
    SmartFox.Requests.System.CreateRoomRequest.KEY_GROUP_ID = "g";
    SmartFox.Requests.System.CreateRoomRequest.KEY_ISGAME = "ig";
    SmartFox.Requests.System.CreateRoomRequest.KEY_MAXUSERS = "mu";
    SmartFox.Requests.System.CreateRoomRequest.KEY_MAXSPECTATORS = "ms";
    SmartFox.Requests.System.CreateRoomRequest.KEY_MAXVARS = "mv";
    SmartFox.Requests.System.CreateRoomRequest.KEY_ROOMVARS = "rv";
    SmartFox.Requests.System.CreateRoomRequest.KEY_PERMISSIONS = "pm";
    SmartFox.Requests.System.CreateRoomRequest.KEY_EVENTS = "ev";
    SmartFox.Requests.System.CreateRoomRequest.KEY_EXTID = "xn";
    SmartFox.Requests.System.CreateRoomRequest.KEY_EXTCLASS = "xc";
    SmartFox.Requests.System.CreateRoomRequest.KEY_EXTPROP = "xp";
    SmartFox.Requests.System.CreateRoomRequest.KEY_AUTOJOIN = "aj";
    SmartFox.Requests.System.CreateRoomRequest.KEY_ROOM_TO_LEAVE = "rl";

    SmartFox.Requests.GenericMessageType = {};
    SmartFox.Requests.GenericMessageType.PUBLIC_MSG = 0;
    SmartFox.Requests.GenericMessageType.PRIVATE_MSG = 1;
    SmartFox.Requests.GenericMessageType.MODERATOR_MSG = 2;
    SmartFox.Requests.GenericMessageType.ADMING_MSG = 3;
    SmartFox.Requests.GenericMessageType.OBJECT_MSG = 4;
    SmartFox.Requests.GenericMessageType.BUDDY_MSG = 5;
    SmartFox.Requests.MessageRecipientMode = function (a, b) {
        if (a < this.TO_USER || a > this.TO_ZONE) throw new SmartFox.Exceptions.Error("Illegal recipient mode: " + a);
        this.mode = a;
        this.target = b
    };
    SmartFox.Requests.MessageRecipientMode.TO_USER = 0;
    SmartFox.Requests.MessageRecipientMode.TO_ROOM = 1;
    SmartFox.Requests.MessageRecipientMode.TO_GROUP = 2;
    SmartFox.Requests.MessageRecipientMode.TO_ZONE = 3;
    SmartFox.Requests.Game.InvitationReplyRequest.KEY_INVITATION_ID = "i";
    SmartFox.Requests.Game.InvitationReplyRequest.KEY_INVITATION_REPLY = "r";
    SmartFox.Requests.Game.InvitationReplyRequest.KEY_INVITATION_PARAMS = "p";
    SmartFox.Requests.System.GenericMessageRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function () {
            this._super(SmartFox.Requests.GenericMessage);
            this._type = -1;
            this._recipient = this._params = this._message = this._user = this._room = null;
            this._sendMode = -1
        },
        validate: function (a) {
            if (0 > this._type) throw new SmartFox.Exceptions.ValidationError("GenericMessageRequest Error", ["Unsupported message type: " + this._type]);
            var b = [];
            switch (this._type) {
                case SmartFox.Requests.GenericMessageType.PUBLIC_MSG:
                    this._validatePublicMessage(a,b);
                    break;
                case SmartFox.Requests.GenericMessageType.PRIVATE_MSG:
                    this._validatePrivateMessage(a, b);
                    break;
                case SmartFox.Requests.GenericMessageType.OBJECT_MSG:
                    this._validateObjectMessage(a, b);
                    break;
                case SmartFox.Requests.GenericMessageType.BUDDY_MSG:
                    this._validateBuddyMessage(a, b);
                    break;
                default:
                    this._validateSuperUserMessage(a, b)
            }
            if (0 < b.length) throw new SmartFox.Exceptions.ValidationError("GenericMessageRequest Error", b);
        },
        execute: function (a) {
            this._reqObj.putByte(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE,this._type);
            switch (this._type) {
                case SmartFox.Requests.GenericMessageType.PUBLIC_MSG:
                    this._executePublicMessage(a);
                    break;
                case SmartFox.Requests.GenericMessageType.PRIVATE_MSG:
                    this._executePrivateMessage(a);
                    break;
                case SmartFox.Requests.GenericMessageType.OBJECT_MSG:
                    this._executeObjectMessage(a);
                    break;
                case SmartFox.Requests.GenericMessageType.BUDDY_MSG:
                    this._executeBuddyMessage(a);
                    break;
                default:
                    this._executeSuperUserMessage(a)
            }
        },
        _validatePublicMessage: function (a, b) {
            (null == this._message || 0 == this._message.length) &&
            b.push("Public message is empty");
            null != this._room && !a.mySelf.isJoinedInRoom(this._room) && b.push("You are not joined in the target Room: " + this._room)
        },
        _validatePrivateMessage: function (a, b) {
            (null == this._message || 0 == this._message.length) && b.push("Private message is empty");
            0 > this._recipient && b.push("Invalid recipient id: " + this._recipient)
        },
        _validateObjectMessage: function (a, b) {
            null == this._params && b.push("Object message is null")
        },
        _validateBuddyMessage: function (a, b) {
            a.buddyManager.isInited || b.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
            !1 == a.buddyManager.myOnlineState && b.push("Can't send messages while you are offline in the Buddy List system");
            (null == this._message || 0 == this._message.length) && b.push("Buddy message is empty");
            0 > this._recipient && b.push("Recipient is offline or not in your Buddy List")
        },
        _validateSuperUserMessage: function (a, b) {
            (null == this._message || 0 == this._message.length) && b.push("Moderator message is empty");
            switch (this._sendMode) {
                case SmartFox.Requests.MessageRecipientMode.TO_USER:
                    this._recipient instanceof SmartFox.Entities.User ||
                    b.push("User object expected as recipient");
                    break;
                case SmartFox.Requests.MessageRecipientMode.TO_ROOM:
                    this._recipient instanceof SmartFox.Entities.Room || b.push("Room object expected as recipient");
                    break;
                case SmartFox.Requests.MessageRecipientMode.TO_GROUP:
                    "string" != typeof this._recipient && b.push("String object (the groupId) expected as recipient")
            }
        },
        _executePublicMessage: function (a) {
            null == this._room && (this._room = a.lastJoinedRoom);
            if (null == this._room) throw new SmartFox.Exceptions.Error("User should be joined in a Room in order to send a public message");
            this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_ROOM_ID, this._room.id);
            this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID ,a.mySelf.id);
            this._reqObj.putUtfString(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE,this._message);
            null != this._params && (this._reqObj.putNObject(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS,this._params))
        },
        _executePrivateMessage: function () {
            this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT, this._recipient);
            this._reqObj.putUtfString(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE,this._message);
            null != this._params && (this._reqObj.putNObject(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS,this._params))
        },
        _executeBuddyMessage: function () {
            this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT,this._recipient);
            this._reqObj.putUtfString(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE,this._message);
            null != this._params && (this._reqObj.putNObject(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params))
        },
        _executeSuperUserMessage: function () {
            this._reqObj.putUtfString(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE,this._message);
            null != this._params && (this._reqObj.putNObject(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS,this._params));
            this._reqObj.putByte(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT_MODE,this._sendMode);
            switch (this._sendMode) {
                case SmartFox.Requests.MessageRecipientMode.TO_USER:
                    this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT,this._recipient.id);
                    break;
                case SmartFox.Requests.MessageRecipientMode.TO_ROOM:
                    this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT,this._recipient.id);
                    break;
                case SmartFox.Requests.MessageRecipientMode.TO_GROUP:
                    this._reqObj.putUtfStringArray(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT,this._recipient);
                    break;
            }
        },
        _executeObjectMessage: function (a) {
            null == this._room && (this._room = a.lastJoinedRoom);
            if (null == this._room) throw new SmartFox.Exceptions.Error("User should be joined in a Room in order to send an object message");
            a = [];
            if (null != this._recipient && this._recipient instanceof Array) {
                var b = this._recipient;
                if (b.length > this._room.capacity) throw new SmartFox.Exceptions.Error("The number of recipients is bigger than the target Room capacity: " +
                    b.length);
                for (var c in b) {
                    var d = b[c];
                    d instanceof SmartFox.Entities.User ? a.push(d.id) : this._log.warn("Bad recipient in ObjectMessage recipient list: " + typeof d + "; expected type: SFSUser")
                }
            }
            this._reqObj.putInt(SmartFox.Requests.System.GenericMessageRequest.KEY_ROOM_ID, this._room.id);
            this._reqObj.putNObject(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
            0 < a.length && (this._reqObj.putIntArray(SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT,a))
        }
    });
    SmartFox.Requests.System.PublicMessageRequest = SmartFox.Requests.System.GenericMessageRequest.extend({
        ctor: function (a, b, c) {
            this._super();
            this._type = SmartFox.Requests.GenericMessageType.PUBLIC_MSG;
            this._message = a;
            this._room = c;
            this._params = b
        }
    });
    SmartFox.Requests.System.PrivateMessageRequest = SmartFox.Requests.System.GenericMessageRequest.extend({
        ctor: function (a, b, c) {
            this._super();
            this._type = SmartFox.Requests.GenericMessageType.PRIVATE_MSG;
            this._message = a;
            this._recipient = b;
            this._params = c
        }
    });
    SmartFox.Requests.System.ModeratorMessageRequest = SmartFox.Requests.System.GenericMessageRequest.extend({
        ctor: function (a, b, c) {
            this._super();
            if (null == b) throw new SmartFox.Exceptions.Error("Recipient mode cannot be null");
            this._type = SmartFox.Requests.GenericMessageType.MODERATOR_MSG;
            this._message = a;
            this._params = c;
            this._recipient = b.target;
            this._sendMode = b.mode
        }
    });
    SmartFox.Requests.System.AdminMessageRequest = SmartFox.Requests.System.GenericMessageRequest.extend({
        ctor: function (a, b, c) {
            this._super();
            if (null == b) throw new SmartFox.Exceptions.Error("Recipient mode cannot be null");
            this._type = SmartFox.Requests.GenericMessageType.ADMING_MSG;
            this._message = a;
            this._params = c;
            this._recipient = b.target;
            this._sendMode = b.mode
        }
    });
    SmartFox.Requests.System.GenericMessageRequest.KEY_ROOM_ID = "r";
    SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID = "u";
    SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE = "m";
    SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE = "t";
    SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT = "rc";
    SmartFox.Requests.System.GenericMessageRequest.KEY_RECIPIENT_MODE = "rm";
    SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS = "p";
    SmartFox.Requests.System.GenericMessageRequest.KEY_SENDER_DATA = "sd";
    SmartFox.Requests.System.SetRoomVariablesRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a, b) {
            this._super(SmartFox.Requests.SetRoomVariables);
            this._roomVariables = a;
            this._room = b
        },
        validate: function (a) {
            var b = [];
            null != this._room ? this._room.containsUser(a.mySelf) || b.push("You are not joined in the target Room") : null == a.lastJoinedRoom && b.push("You are not joined in any Room");
            (null == this._roomVariables || 0 == this._roomVariables.length) && b.push("No variables were specified");
            if (0 < b.length) throw new SmartFox.Exceptions.ValidationError("SetRoomVariablesRequest Error",
                b);
        },
        execute: function (a) {
            var a = SArray.newInstance();
            for (let b = 0; b < this._roomVariables.length;b++) {
                a.addNArray(this._roomVariables[b].toNArray());
            }
            null == this._room && (this._room = a.lastJoinedRoom);
            this._reqObj.putNArray(this.constructor.KEY_VAR_LIST, a);
            this._reqObj.putInt(this.constructor.KEY_VAR_ROOM,this._room.id)
        }
    });
    SmartFox.Requests.System.SetRoomVariablesRequest.KEY_VAR_ROOM = "r";
    SmartFox.Requests.System.SetRoomVariablesRequest.KEY_VAR_LIST = "vl";
    SmartFox.Requests.System.SetUserVariablesRequest = SmartFox.Requests._BaseRequest.extend({
        ctor: function (a) {
            this._super(SmartFox.Requests.SetUserVariables);
            this._userVariables = a
        },
        validate: function () {
            var a = [];
            (null == this._userVariables || 0 == this._userVariables.length) && a.push("No variables were specified");
            if (0 < a.length) throw new SmartFox.Exceptions.ValidationError("SetUserVariablesRequest Error", a);
        },
        execute: function () {
            var a = SArray.newInstance();
            for (let b = 0; b < this._userVariables.length;b++) {
                a.addNArray(this._userVariables[b].toNArray());
            }
            this._reqObj.putNArray(this.constructor.KEY_VAR_LIST,a)
        }
    });
    SmartFox.Requests.System.SetUserVariablesRequest.KEY_USER = "u";
    SmartFox.Requests.System.SetUserVariablesRequest.KEY_VAR_LIST = "vl";
    SmartFox.Event = {
        HANDSHAKE: "handshake",
        LOGIN: "login",
        LOGOUT: "logout",
        ROOM_JOIN: "roomJoin",
        USER_ENTER_ROOM: "userEnterRoom",
        USER_EXIT_ROOM: "userExitRoom",
        ERROR_REQUEST: "ErrorRequest",
        CONNECTION: "connection",
        CONNECTION_LOST: "connectionLost",
        CONNECTION_RETRY: "connectionRetry",
        CONNECTION_RESUME: "connectionResume",
        LOGIN_ERROR: "loginError",
        ROOM_ADD: "roomAdd",
        QUICK_JOIN_GAME: "quickJoinGame",
        ROOM_CREATION_ERROR: "roomCreationError",
        ROOM_REMOVE: "roomRemove",
        KICK_USER: "kickUser",
        ROOM_JOIN_ERROR: "roomJoinError",
        USER_COUNT_CHANGE: "userCountChange",
        PLAYER_TO_SPECTATOR: "playerToSpectator",
        PLAYER_TO_SPECTATOR_ERROR: "playerToSpectatorError",
        SPECTATOR_TO_PLAYER: "spectatorToPlayer",
        SPECTATOR_TO_PLAYER_ERROR: "spectatorToPlayerError",
        ROOM_NAME_CHANGE: "roomNameChange",
        ROOM_NAME_CHANGE_ERROR: "roomNameChangeError",
        ROOM_PASSWORD_STATE_CHANGE: "roomPasswordStateChange",
        ROOM_PASSWORD_STATE_CHANGE_ERROR: "roomPasswordStateChangeError",
        ROOM_CAPACITY_CHANGE: "roomCapacityChange",
        ROOM_CAPACITY_CHANGE_ERROR: "roomCapacityChangeError",
        PUBLIC_MESSAGE: "publicMessage",
        PRIVATE_MESSAGE: "privateMessage",
        OBJECT_MESSAGE: "objectMessage",
        MODERATOR_MESSAGE: "moderatorMessage",
        ADMIN_MESSAGE: "adminMessage",
        EXTENSION_RESPONSE: "extensionResponse",
        ROOM_VARIABLES_UPDATE: "roomVariablesUpdate",
        USER_VARIABLES_UPDATE: "userVariablesUpdate",
        ROOM_GROUP_SUBSCRIBE: "roomGroupSubscribe",
        ROOM_GROUP_SUBSCRIBE_ERROR: "roomGroupSubscribeError",
        ROOM_GROUP_UNSUBSCRIBE: "roomGroupUnsubscribe",
        ROOM_GROUP_UNSUBSCRIBE_ERROR: "roomGroupUnsubscribeError",
        ROOM_FIND_RESULT: "roomFindResult",
        USER_FIND_RESULT: "userFindResult",
        INVITATION: "invitation",
        INVITATION_REPLY: "invitationReply",
        INVITATION_REPLY_ERROR: "invitationReplyError",
        PING_PONG: "pingPong",
        SOCKET_ERROR: "socketError",
        DISCONNECT_REASON: "disconnectReason"
    };
    SmartFox.prototype._dispatchEventExtension = function (a, b) {
        this._eventExtensionDispatcher.dispatchEvent(a, b);
    };
    SmartFox.prototype.addEventListener = function (a, b, c) {
        this._eventDispatcher.addEventListener(a, b, c);
    };
    SmartFox.prototype.addEventListenerExtension = function (a, b, c) {
        if(a == undefined || a == null || a.length <= 0){
            this._log.error("CMD Invalidate "+ b.name);
        }
        this._eventExtensionDispatcher.addEventListener(a, b, c);
    };
    SmartFox.prototype.removeEventListener = function (a, b) {
        this._eventDispatcher.removeEventListener(a, b);
    };
    SmartFox.prototype.removeEventListenerExtension = function (a, b) {
        this._eventExtensionDispatcher.removeEventListener(a, b);
    };
    SmartFox.prototype._dispatchEvent = function (a, b) {
        this._eventDispatcher.dispatchEvent(a, b);
    };
    SmartFox.prototype._onSocketConnect = function (a) {
        a.success ? (a = new SmartFox.Requests.System.HandshakeRequest(this.version, a.isReconnection ? this.sessionToken : null),
            this.send(a)) : this._dispatchEvent(SmartFox.Event.CONNECTION, {
            success: !1
        })
    };
    SmartFox.prototype._onSocketData = function (data) {
        let nObject = SObject.newFromBinary(data);
        let actionId = nObject.get(SmartFox.Controllers.ACTION_ID);
        let params = nObject.get(SmartFox.Controllers.PARAM_ID);
        let idController = nObject.get(SmartFox.Controllers.CONTROLLER_ID);
        let dumpOut = "<<<<<<<---------INCOMING DATA----------" + params.getDump();
        dumpOut += (idController == ControlRequest.SYSTEM ? "IN System > : "+  SmartFox.Requests.getRequestNameFromId(actionId) : "");
        dumpOut += "\n<<<<<<<-----------END-------------------\n";
        this.getLogger().debug(dumpOut);

        actionId == null ? this._log.error("Message rejected: Action ID is Missing") : idController == null ? this._log.error("Message Rejected : Controller ID is Missing") : this._controllers[idController].handleMessage(actionId, params);
    };
    SmartFox.prototype._onSocketIOError = function (a) {
        this._dispatchEvent(SmartFox.Event.SOCKET_ERROR, {
            message: a
        })
    };
    SmartFox.prototype.isConnected = function () {
        return null != this._socketEngine ? this._socketEngine.isConnected : !1
    };
    SmartFox.prototype.disconnect = function (reason) {
        this._socketEngine.disconnect(reason);
    };
    SmartFox.prototype._onSocketDisconnect = function (event) {
        this._dispatchEvent(SmartFox.Event.CONNECTION_LOST, event);
        this._reset(!0);
    };
    SmartFox.prototype.connect = function (a, b, ssl) {
        if (this.isConnected())
            this._log.warn("Already connected");
        else if (this._socketEngine.isConnecting)
            this._log.warn("A connection attempt is already in progress");
        else {
            var c = null != this.config && null != this.config.host ? this.config.host : null,
                d = null != this.config && null != this.config.port ? this.config.port : null;
            ssl = null != this.config && null != this.config.ssl ? this.config.ssl : null;
            null != a && (c = a);
            null != b && (d = b);
            null == c || 0 == c.length ? this._log.error("Invalid connection host/address") : "number" != typeof d || 0 > d || 65535 < d ? this._log.error("Invalid TCP port") : this._socketEngine.connect(c, d, ssl);
        }
    };
    SmartFox.prototype.send = function (request) {
        if (this.isConnected()) {
            if (null == request.validate || null == request.execute) {
                this._log.error("An invalidate request");
            }else{
                try {
                    request.validate(this);
                    request.execute(this);
                } catch (e) {
                    if (e instanceof SmartFox.Exceptions.ValidationError && e.getMessage() != null) {
                        this._log.error(e.getMessage());
                    } else {
                        throw e;
                    }
                    return !1;
                }
                this._socketEngine.send(request);
                let dumpout = "------SEND DATA------>>>>>>>"+ request.getDump();
                dumpout += (request.getTargetController() == ControlRequest.SYSTEM ? "SEND System > : "+  SmartFox.Requests.getRequestNameFromId(request.getId()) :
                    "OUT Extension > :"+ request._extCmd);
                dumpout    += "\n-----END---------------->>>>>>>\n"
                this.getLogger().debug(dumpout);
            }
            return !0;
        } else {
            this._log.error("you are not connected, Request can not send");
        }
    };
    SmartFox.EventDispatcher = function () {
        this.listenersByEvent = {};
    };
    SmartFox.EventDispatcher.prototype.addEventListener = function (a, b, c) {
        null == this.listenersByEvent[a] && (this.listenersByEvent[a] = []);
        this.listenersByEvent[a].push({
            listener: b,
            scope: c
        });
    };
    SmartFox.EventDispatcher.prototype.removeEventListener = function (a, b) {
        var c = this.listenersByEvent[a];
        if (null != c) for (var d = 0; d < c.length; d++) {
            if (c[d].listener === b) {
                c.splice(d, 1);
                break;
            }
        }
    };
    SmartFox.EventDispatcher.prototype.dispatchEvent = function (a, b) {
        var c = this.listenersByEvent[a];
        if (c && 0 < c.length)
            for (var d = 0; d < c.length; d++) {
                c[d].listener.call(c[d].scope, b);
            }
    };
    SmartFox.SocketEvent = {
        CONNECT: "socketConnect",
        DISCONNECT: "socketDisconnect",
        DATA: "data",
        IOERROR: "socketIOError"
    };
    SmartFox.ErrorCodes = {};
    SmartFox.ErrorCodes._errorsByCode =
        [
            "Client API version is obsolete: {0}; required version: {1}",
            "Requested Zone {0} does not exist",
            "User name {0} is not recognized",
            "Wrong password for user {0}",
            "User {0} is banned",
            "Zone {0} is full",
            "User {0} is already logged in Zone {1}",
            "The server is full", "Zone {0} is currently inactive",
            "User name {0} contains bad words; filtered: {1}",
            "Guest users not allowed in Zone {0}",
            "IP address {0} is banned",
            "A Room with the same name already exists: {0}",
            "Requested Group is not available - Room: {0}; Group: {1}",
            "Bad Room name length -  Min: {0}; max: {1}; passed name length: {2}",
            "Room name contains bad words: {0}",
            "Zone is full; can't add Rooms anymore",
            "You have exceeded the number of Rooms that you can create per session: {0}",
            "Room creation failed, wrong parameter: {0}",
            "User {0} already joined in Room",
            "Room {0} is full",
            "Wrong password for Room {0}",
            "Requested Room does not exist",
            "Room {0} is locked",
            "Group {0} is already subscribed",
            "Group {0} does not exist",
            "Group {0} is not subscribed",
            "Group {0} does not exist",
            "{0}",
            "Room permission error; Room {0} cannot be renamed",
            "Room permission error; Room {0} cannot change password state",
            "Room permission error; Room {0} cannot change capacity",
            "Switch user error; no player slots available in Room {0}",
            "Switch user error; no spectator slots available in Room {0}",
            "Switch user error; Room {0} is not a Game Room",
            "Switch user error; you are not joined in Room {0}",
            "Buddy Manager initialization error, could not load buddy list: {0}",
            "Buddy Manager error, your buddy list is full; size is {0}",
            "Buddy Manager error, was not able to block buddy {0} because offline",
            "Buddy Manager error, you are attempting to set too many Buddy Variables; limit is {0}",
            "Game {0} access denied, user does not match access criteria",
            "QuickJoinGame action failed: no matching Rooms were found",
            "Your previous invitation reply was invalid or arrived too late"
        ];
    SmartFox.ErrorCodes.setErrorMessage = function (a, b) {
        this._errorsByCode[a] = b
    };
    SmartFox.ErrorCodes.getErrorMessage = function (a, b) {
        return this.stringFormat(this._errorsByCode[a], b)
    };
    SmartFox.ErrorCodes.stringFormat = function (a, b) {
        if (null == a) return "";
        if (null != b) for (var c = 0; c < b.length; c++) a = a.replace("{" + c + "}", b[c]);
        return a
    };
    SmartFox.ClientDisconnectionReason = {
        IDLE: "idle",
        KICK: "kick",
        BAN: "ban",
        MANUAL: "manual",
        UNKNOWN: "unknown",
        DUPLICATE: "duplicate"
    };
    SmartFox.Exceptions = {};
    SmartFox.Exceptions.Error = vcClass.Class.extend({
        ctor: function ctor(message) {
            this._message = message;
        },
        getMessage: function getMessage() {
            return this._message;
        }
    });
    SmartFox.Exceptions.ValidationError = SmartFox.Exceptions.Error.extend({
        ctor: function ctor(message, errors) {
            this._super(message);
            this._errors = errors;
        },
        getError: function getError() {
            return this._errors;
        }

    });
    SmartFox.Controllers = {};
    SmartFox.Controllers.CONTROLLER_ID = "c";
    SmartFox.Controllers.ACTION_ID = "a";
    SmartFox.Controllers.PARAM_ID = "p";
    SmartFox.Controllers.KEY_ERROR_CODE = "ec";
    SmartFox.Controllers.KEY_ERROR_PARAMS = "ep";
    SmartFox.Controllers.ROOM_PARAM = "r";
    SmartFox.Controllers.USER_PARAM = "u";
    SmartFox.Controllers.USER_COUNT_PARAM = "uc";
    SmartFox.Controllers.SPECT_COUNT_PARAM = "sc";
    SmartFox.Controllers.SystemController = function (smartFox) {
        this._smartFox = smartFox;
        this._id = 0;
        this._requestHandlers = {};
        this._initRequestHandlers();
        this._log = smartFox._log;
    };
    SmartFox.Controllers.SystemController.prototype.getId = function () {
        return this._id;
    };
    SmartFox.Controllers.SystemController.prototype._populateRoomList = function (a) {
        let b = this._smartFox.roomManager;
        for (var c = 0; c < a.size(); c++) {
            var d = SmartFox.Entities.Room.fromArray(a.get(c).value);
            b._replaceRoom(d)
        }
    };
    SmartFox.Controllers.SystemController.prototype.handleMessage = function (actionId, msg) {
        // this._smartFox.debug && this._log.info("IN < " + this._getEvtName(actionId));
        var c = this._requestHandlers[actionId];
        if (c != null) {
            this[c](msg);
        } else this._log.warn("Unknown message id " + actionId);
    };
    SmartFox.Controllers.SystemController.prototype._initRequestHandlers = function () {
        this._requestHandlers[SmartFox.Requests.Handshake] = "_fnHandshake";
        this._requestHandlers[SmartFox.Requests.Login] = "_fnLogin";
        this._requestHandlers[SmartFox.Requests.Logout] = "_fnLogout";
        this._requestHandlers[SmartFox.Requests.JoinRoom] = "_fnJoinRoom";
        this._requestHandlers[SmartFox.Requests.CreateRoom] = "_fnCreateRoom";
        this._requestHandlers[SmartFox.Requests.ChangeRoomName] = "_fnChangeRoomName";
        this._requestHandlers[SmartFox.Requests.ChangeRoomPassword] = "_fnChangeRoomPassword";
        this._requestHandlers[SmartFox.Requests.ChangeRoomCapacity] = "_fnChangeRoomCapacity";
        this._requestHandlers[SmartFox.Requests.KickUser] = "_fnKickUser";
        this._requestHandlers[SmartFox.Requests.GenericMessage] = "_fnGenericMessage";
        this._requestHandlers[SmartFox.Requests.SetRoomVariables] = "_fnSetRoomVariables";
        this._requestHandlers[SmartFox.Requests.SetUserVariables] = "_fnSetUserVariables";
        this._requestHandlers[SmartFox.Requests.SubscribeRoomGroup] = "_fnSubscribeRoomGroup";
        this._requestHandlers[SmartFox.Requests.UnsubscribeRoomGroup] = "_fnUnsubscribeRoomGroup";
        this._requestHandlers[SmartFox.Requests.SpectatorToPlayer] = "_fnSpectatorToPlayer";
        this._requestHandlers[SmartFox.Requests.PlayerToSpectator] = "_fnPlayerToSpectator";
        this._requestHandlers[SmartFox.Requests.InitBuddyList] = "_fnInitBuddyList";
        this._requestHandlers[SmartFox.Requests.AddBuddy] = "_fnAddBuddy";
        this._requestHandlers[SmartFox.Requests.RemoveBuddy] = "_fnRemoveBuddy";
        this._requestHandlers[SmartFox.Requests.BlockBuddy] = "_fnBlockBuddy";
        this._requestHandlers[SmartFox.Requests.GoOnline] = "_fnGoOnline";
        this._requestHandlers[SmartFox.Requests.SetBuddyVariables] = "_fnSetBuddyVariables";
        this._requestHandlers[SmartFox.Requests.FindRooms] = "_fnFindRooms";
        this._requestHandlers[SmartFox.Requests.FindUsers] = "_fnFindUsers";
        this._requestHandlers[SmartFox.Requests.InviteUsers] = "_fnInviteUsers";
        this._requestHandlers[SmartFox.Requests.InvitationReply] = "_fnInvitationReply";
        this._requestHandlers[SmartFox.Requests.QuickJoinGame] = "_fnQuickJoinGame";
        this._requestHandlers[SmartFox.Requests.PingPong] = "_fnPingPong";
        this._requestHandlers[1E3] = "_fnUserEnterRoom";
        this._requestHandlers[1001] = "_fnUserCountChange";
        this._requestHandlers[1002] = "_fnUserLost";
        this._requestHandlers[1003] = "_fnRoomLost";
        this._requestHandlers[1004] = "_fnUserExitRoom";
        this._requestHandlers[1005] = "_fnClientDisconnection";
    };
    SmartFox.Controllers.SystemController.prototype._getEvtName = function (a) {
        return this._requestHandlers[a].substr(3);
    };
    SmartFox.Controllers.SystemController.prototype._fnHandshake = function (evt) {
        this._smartFox._handleHandShake(evt);
    };
    SmartFox.Controllers.SystemController.prototype._fnClientDisconnection = function (evt) {
        var msg = evt.data;
        var status = evt.status;
        if (status) {
            var typeDisconnect = msg.unPackByte();
            var b = typeDisconnect;
            this._smartFox._dispatchEvent(SmartFox.Event.DISCONNECT_REASON, b);
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnLogin = function (params) {
        let ec = params.get("ec");
        let ep = params.get("ep");
        if(ec != null){
            this._smartFox._dispatchEvent(SmartFox.Event.LOGIN_ERROR, {id: ec, msg: ep});
        }else{
            this._smartFox.mySelf = new SmartFox.Entities.User(params.get("id"), params.get("un"), !0);
            this._smartFox.mySelf._setUserManager(this._smartFox.userManager);
            this._smartFox._currentZone = params.get("zn");
            this._smartFox.groups.id = params.get("gr");
            this._smartFox.userManager._addUser(this._smartFox.mySelf);
            let b = {};
            b.zone = params.get("zn");
            b.user = this._smartFox.mySelf;
            b.data = params.get("po");
            this._smartFox._dispatchEvent(SmartFox.Event.LOGIN, b);
            let token = params.get("token");
            console.log("token", token);
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnLogout = function (b) {
        this._smartFox._handleLogout();
        this._smartFox._dispatchEvent(SmartFox.Event.LOGOUT, b);
    };
    SmartFox.Controllers.SystemController.prototype._fnJoinRoom = function (params) {
        let b = this._smartFox.roomManager,
            c = {};
        this._smartFox._isJoining = !1;
        let d = params.get(SmartFox.Controllers.KEY_ERROR_CODE);
        if(d == null){
            let userList = params.get(SmartFox.Requests.System.JoinRoomRequest.KEY_USER_LIST);
            let roomObject = params.get(SmartFox.Requests.System.JoinRoomRequest.KEY_ROOM);
            let room = SmartFox.Entities.Room.fromArray(roomObject);
            room._setRoomManager(b);
            room = b._replaceRoom(room, b.containsGroup(room.groupId));
            for(let i = 0; i < userList.size(); i++){
                let e = userList.get(i).getObject(),
                    f = this._getOrCreateUser(e, !0, room);
                f._setPlayerId(e.get(3).getObject(), room);
                room._addUser(f);
            }
            let idOwner = roomObject.get(8).value;
            if(idOwner >= 0){
                let owner = room.getUserById(idOwner);
                room.setOwner(owner);
            }
            room.isJoined = !0;
            this._smartFox.lastJoinedRoom = room;
            c.room = room;
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_JOIN, c);
        }else{
            this._log.error("JOIN ROOM ERROR CODE "+d);
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_JOIN_ERROR, d);
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnSpectatorToPlayer = function(resObject){
        let b = {};
        let ec = resObject.get(SmartFox.Controllers.KEY_ERROR_CODE);
        if(null == ec){
            let c = resObject.get(SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_ROOM_ID),
                d = resObject.get(SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_USER_ID),
                a = resObject.get(SmartFox.Requests.System.SpectatorToPlayerRequest.KEY_PLAYER_ID),
                e = this._smartFox.userManager.getUserById(d),
                f = this._smartFox.roomManager.getRoomById(c);
            null != f ? null != e ? e.isJoinedInRoom(f) ? (e._setPlayerId(a, f), b.room = f, b.user = e, b.playerId = a, this._smartFox._dispatchEvent(SmartFox.Event.SPECTATOR_TO_PLAYER,
                b)) : this._log.warn("SpectatorToPlayer event, user " + e + " not joined in Room ", f) : this._log.warn("SpectatorToPlayer event, unknown User id: " + d) : this._log.warn("SpectatorToPlayer event, unknown Room id: " + c)
        }else{
            this._smartFox._dispatchEvent(SmartFox.Event.PLAYER_TO_SPECTATOR_ERROR,{ec, msg: SmartFox.ErrorCodes.getErrorMessage(ec, a.get(SmartFox.Controllers.KEY_ERROR_PARAMS))});
        }
    }
    SmartFox.Controllers.SystemController.prototype._fnPlayerToSpectator = function(resObject){
        let b = {};
        let ec = resObject.get(SmartFox.Controllers.KEY_ERROR_CODE);
        if(null == ec){
            let c = resObject.get(SmartFox.Requests.System.PlayerToSpectatorRequest.KEY_ROOM_ID),
                a = resObject.get(SmartFox.Requests.System.PlayerToSpectatorRequest.KEY_USER_ID),
                d = this._smartFox.userManager.getUserById(a),
                e = this._smartFox.roomManager.getRoomById(c);
            b.playerId = d.getPlayerId(e);
            null != e ? null != d ? d.isJoinedInRoom(e) ? (d._setPlayerId(-1, e), b.room = e, b.user = d, this._smartFox._dispatchEvent(SmartFox.Event.PLAYER_TO_SPECTATOR, b)) : this._log.warn("PlayerToSpectator event, user " +
                d + " not joined in Room ", e) : this._log.warn("PlayerToSpectator event, unknown User id: " + a) : this._log.warn("PlayerToSpectator event, unknown Room id: " + c)
        }else{
            this._smartFox._dispatchEvent(SmartFox.Event.PLAYER_TO_SPECTATOR_ERROR,{ec, msg: SmartFox.ErrorCodes.getErrorMessage(ec, resObject.get(SmartFox.Controllers.KEY_ERROR_PARAMS))});
        }
    }
    SmartFox.Controllers.SystemController.prototype._fnSubscribeRoomGroup = function(resObject){
        let b = {};
        if(null == resObject.get(SmartFox.Controllers.KEY_ERROR_CODE)){
            let group = resObject.get("g");
            let roomList = resObject.get("rl");
            if(this._smartFox.roomManager.containsGroup(group))
                this._log.warn("Subscribe group error Group: "+group +" already subscribed");
            this._populateRoomList(roomList);
            b.groupId = group;
            b.newRooms = this._smartFox.roomManager.getRoomListFromGroup(group);
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_GROUP_SUBSCRIBE, b);
        }else{

        }
    }
    SmartFox.Controllers.SystemController.prototype._fnUnsubscribeRoomGroup = function (resObject) {
        var b = {};
        if (null == resObject.get(SmartFox.Controllers.KEY_ERROR_CODE)) {
            var c = resObject.get("g");
            this._smartFox.roomManager.containsGroup(c) || this._log.warn("Unsubscribe Group error: Group '" + c + "' not found (maybe never subscribed, or the Room Manager doesn't contain Rooms belonging to that Group)");
            this._smartFox.roomManager._removeGroup(c);
            b.groupId = c;
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_GROUP_UNSUBSCRIBE,
                b)
        } else c = a.get(SmartFox.Controllers.KEY_ERROR_CODE), a = SmartFox.ErrorCodes.getErrorMessage(c, a.get(SmartFox.Controllers.KEY_ERROR_PARAMS)), b.errorMessage = a, b.errorCode = c, this._smartFox._dispatchEvent(SmartFox.Event.ROOM_GROUP_UNSUBSCRIBE_ERROR, b)
    };
    SmartFox.Controllers.SystemController.prototype._fnSetUserVariables = function(a){
        var b = a.get(SmartFox.Requests.System.SetUserVariablesRequest.KEY_USER),
            c = a.get(SmartFox.Requests.System.SetUserVariablesRequest.KEY_VAR_LIST),
            a = this._smartFox.userManager.getUserById(b),
            d = [];
        if (null != a) {
            for (b = 0; b < c.size(); b++) {
                var e = SmartFox.Entities.Variables.UserVariable.fromArray(c.get(b).value);
                a._setVariable(e);
                d.push(e.name)
            }
            c = {};
            c.changedVars = d;
            c.user = a;
            this._smartFox._dispatchEvent(SmartFox.Event.USER_VARIABLES_UPDATE, c)
        } else this._log.warn("UserVariablesUpdate event, unknown User id: " + b)
    }
    SmartFox.Controllers.SystemController.prototype._fnSetRoomVariables = function(a){
        var b = a.get(SmartFox.Requests.System.SetRoomVariablesRequest.KEY_VAR_ROOM),
            c = a.get(SmartFox.Requests.System.SetRoomVariablesRequest.KEY_VAR_LIST),
            a = this._smartFox.roomManager.getRoomById(b),
            d = [];
        if (null != a) {
            for (b = 0; b < c.size(); b++) {
                var e = SmartFox.Entities.Variables.RoomVariable.fromArray(c.get(b).value);
                a._setVariable(e);
                d.push(e.name)
            }
            c = {};
            c.changedVars = d;
            c.room = a;
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_VARIABLES_UPDATE, c)
        } else this._log.warn("RoomVariablesUpdate event, unknown Room id: " + b)
    }
    SmartFox.Controllers.SystemController.prototype._fnQuickJoinGame = function (a) {
        if (null != a.get(SmartFox.Controllers.KEY_ERROR_CODE)) {
            var b = a.get(SmartFox.Controllers.KEY_ERROR_CODE),
                a = SmartFox.ErrorCodes.getErrorMessage(b, a.get(SmartFox.Controllers.KEY_ERROR_PARAMS)),
                c = {};
            c.errorMessage = a;
            c.errorCode = b;
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_JOIN_ERROR, c)
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnPingPong = function(a){

    }
    SmartFox.Controllers.SystemController.prototype._fnRoomLost = function(a){
        let roomId = a.get(SmartFox.Controllers.ROOM_PARAM)
        let room = this._smartFox.roomManager.getRoomById(roomId);
        if(null != room){
            this._smartFox.roomManager._removeRoom(room);
            let c = room.getUserList();
            for(let i = 0; i < c.length;i++){
                room._removeUser(c[i]);
            }
            let d = {};
            d.room = room;
            this._smartFox._dispatchEvent(SmartFox.Event.ROOM_REMOVE, d);
        }
    }
    SmartFox.Controllers.SystemController.prototype._fnUserExitRoom = function (a) {
        var b = this._smartFox.roomManager.getRoomById(a.get(SmartFox.Controllers.ROOM_PARAM)),
            a = this._smartFox.userManager.getUserById(a.get(SmartFox.Controllers.USER_PARAM));
        if (null != b && null != a) {
            var c = {};
            c.playerId = a.getPlayerId(b);
            b._removeUser(a);
            if(!a.isItMe){
                this._smartFox.userManager._removeUser(a);
            }
            a.isItMe && b.isJoined &&
            (b.isJoined = !1, 0 == this._smartFox.roomManager.getJoinedRooms().length && (this._smartFox.lastJoinedRoom = null), b._isManaged || this._smartFox.roomManager._removeRoom(b));
            c.user = a;
            c.room = b;
            a._removePlayerId(b);
            this._smartFox._dispatchEvent(SmartFox.Event.USER_EXIT_ROOM, c)
        } else this._log.debug("Failed to handle UserExit event. Room: " + b + ", User: " + a)
    };
    SmartFox.Controllers.SystemController.prototype._fnUserLost = function(a){
        a = this._smartFox.userManager.getUserById(a.get(SmartFox.Controllers.USER_PARAM));
        if(null != a){
            let b = this._smartFox.roomManager.getUserRooms(a);
            this._smartFox.roomManager._removeUser(a);
            this._smartFox.userManager._removeUser(a);
            for(let c in b){
                let d = {};
                d.user = a;
                d.room = b[c];
                d.playerId = a.getPlayerId(b[c]);
                this._smartFox._dispatchEvent(SmartFox.Event.USER_EXIT_ROOM, d);
            }
        }
    }
    SmartFox.Controllers.SystemController.prototype._fnFindUsers = function(a){
        let userList = a.get(SmartFox.Requests.System.FindUsersRequest.KEY_FILTERED_USERS);
        let b = [];
        for (let i = 0; i < userList.size(); i++) {
            let obj = userList.get(i).value;
            var f = SmartFox.Entities.User.fromArray(obj);
            b.push(f);
        }
        this._smartFox._dispatchEvent(SmartFox.Event.USER_FIND_RESULT, b)
    }
    SmartFox.Controllers.SystemController.prototype._fnFindRooms = function(a){
        let roomList = a.get(SmartFox.Requests.System.FindRoomsRequest.KEY_FILTERED_ROOMS);
        let b = [];
        for(let i = 0; i < roomList.size();i++){
            let obj = roomList.get(i).value;
            let r = SmartFox.Entities.Room.fromArray(obj);
            b.push(r);
        }
        this._smartFox._dispatchEvent(SmartFox.Event.ROOM_FIND_RESULT, b)
    }
    SmartFox.Controllers.SystemController.prototype._fnInviteUsers = function (a) {
        var b = {}, c = null,
            c = null != a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER_ID) ? this._smartFox.userManager.getUserById(a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER_ID)) : SmartFox.Entities.User.fromArray(a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER)),
            d = a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_INVITATION_ID),
            a = new SmartFox.Entities.Invitation.NInvitation(c, this._smartFox.mySelf, a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_TIME).value, a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_PARAMS));
        a.id = d;
        b.invitation = a;
        this._smartFox._dispatchEvent(SmartFox.Event.INVITATION, b);
    };
    SmartFox.Controllers.SystemController.prototype._fnInvitationReply = function (a) {
        var b = {};
        if (null == a.get(SmartFox.Controllers.KEY_ERROR_CODE)) {
            var c = null,
                c = null != a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER_ID) ? this._smartFox.userManager.getUserById(a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER_ID)) : SmartFox.Entities.User.fromArray(a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_USER)),
                d = a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_REPLY_ID),
                a = a.get(SmartFox.Requests.Game.InviteUsersRequest.KEY_PARAMS);
            b.invitee = c;
            b.reply = d;
            b.data = a;
            this._smartFox._dispatchEvent(SmartFox.Event.INVITATION_REPLY, b)
        } else c = a.get(SmartFox.Controllers.KEY_ERROR_CODE), a = SmartFox.ErrorCodes.getErrorMessage(c, a.get(SmartFox.Controllers.KEY_ERROR_PARAMS)), b.errorMessage = a, b.errorCode = c, this._smartFox._dispatchEvent(SmartFox.Event.INVITATION_REPLY_ERROR, b)
    };
    SmartFox.Controllers.SystemController.prototype._fnGenericMessage = function (a) {
        switch (a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE)) {
            case SmartFox.Requests.GenericMessageType.PUBLIC_MSG:
                this._handlePublicMessage(a);
                break;
            case SmartFox.Requests.GenericMessageType.PRIVATE_MSG:
                this._handlePrivateMessage(a);
                break;
            case SmartFox.Requests.GenericMessageType.BUDDY_MSG:
                this._handleBuddyMessage(a);
                break;
            case SmartFox.Requests.GenericMessageType.MODERATOR_MSG:
                this._handleModMessage(a);
                break;
            case SmartFox.Requests.GenericMessageType.ADMING_MSG:
                this._handleAdminMessage(a);
                break;
            case SmartFox.Requests.GenericMessageType.OBJECT_MSG:
                this._handleObjectMessage(a)
        }
    };
    SmartFox.Controllers.SystemController.prototype._handlePublicMessage = function (a) {
        var b = {}, c = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_ROOM_ID),
            d = this._smartFox.roomManager.getRoomById(c);
        null != d ? (b.room = d, b.sender = this._smartFox.userManager.getUserById(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID)), b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE), b.data = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS), this._smartFox._dispatchEvent(SmartFox.Event.PUBLIC_MESSAGE,
            b)) : this._log.warn("Unexpected, public message target Room doesn't exist; Room id: " + c)
    };
    SmartFox.Controllers.SystemController.prototype._handlePrivateMessage = function (a) {
        var b = {}, c = this._smartFox.userManager.getUserById(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID));
        if (null == c) {
            if (null == a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_SENDER_DATA)) {
                this._log.warn("Unexpected, private message has no sender details");
                return
            }
            c = SmartFox.Entities.User.fromArray(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_SENDER_DATA))
        }
        b.sender = c;
        b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE);
        b.data = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
        this._smartFox._dispatchEvent(SmartFox.Event.PRIVATE_MESSAGE, b)
    };
    SmartFox.Controllers.SystemController.prototype._handleBuddyMessage = function (a) {
        console.log("unsported buddy message")
        /* var b = {}, c = a[SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID],
             d = this._smartFox.buddyManager.getBuddyById(c);
         b.isItMe = this._smartFox.mySelf.id == c;
         b.buddy = d;
         b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE);
         b.data = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
         this._smartFox._dispatchEvent(SmartFox.BuddyEvent.BUDDY_MESSAGE, b)*/
    };
    SmartFox.Controllers.SystemController.prototype._handleModMessage = function (a) {
        var b = {};
        b.sender = SmartFox.Entities.User.fromArray(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_SENDER_DATA));
        b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE);
        b.data = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
        this._smartFox._dispatchEvent(SmartFox.Event.MODERATOR_MESSAGE, b)
    };
    SmartFox.Controllers.SystemController.prototype._handleAdminMessage = function (a) {
        var b = {};
        b.sender = SmartFox.Entities.User.fromArray(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_SENDER_DATA));
        b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_MESSAGE);
        b.data = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
        this._smartFox._dispatchEvent(SmartFox.Event.ADMIN_MESSAGE, b)
    };
    SmartFox.Controllers.SystemController.prototype._handleObjectMessage = function (a) {
        var b = {};
        b.sender = this._smartFox.userManager.getUserById(a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_USER_ID));
        b.message = a.get(SmartFox.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
        this._smartFox._dispatchEvent(SmartFox.Event.OBJECT_MESSAGE, b)
    };
    SmartFox.Controllers.SystemController.prototype._getOrCreateUser = function (a, b, c) {
        null == b && (b = !1);
        var d = this._smartFox.userManager.getUserById(a.get(0).getObject());
        if (null == d) {
            d = SmartFox.Entities.User.fromArray(a, c);
            d._setUserManager(this._smartFox.userManager);
        }else if (null != c) {
            d._setPlayerId(a.get(3).getObject(), c);
            let variables = a.get(4).getObject();
            for(let i = 0; i < variables.size();i++){
                d._setVariable(SmartFox.Entities.Variables.UserVariable.fromArray(variables.get(i).getObject()));
            }
        }
        b && this._smartFox.userManager._addUser(d);
        return d;
    };
    SmartFox.Controllers.SystemController.prototype._fnUserEnterRoom = function (a) {
        var b = this._smartFox.roomManager.getRoomById(a.get(SmartFox.Controllers.ROOM_PARAM));
        if (null != b) {
            a = this._getOrCreateUser(a.get(SmartFox.Controllers.USER_PARAM), !0, b);
            b._addUser(a);
            var c = {};
            c.user = a;
            c.room = b;
            this._smartFox._dispatchEvent(SmartFox.Event.USER_ENTER_ROOM, c)
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnUserCountChange = function(a){
        var b = this._smartFox.roomManager.getRoomById(a.get(SmartFox.Controllers.ROOM_PARAM));
        if (null != b) {
            var c = a.get(SmartFox.Controllers.USER_COUNT_PARAM),
                d = 0;
            null != a.get("sc") && (d = a.get(SmartFox.Controllers.SPECT_COUNT_PARAM));
            b._userCount = c;
            b._specCount = d;
            a = {};
            a.room = b;
            a.uCount = c;
            a.sCount = d;
            this._smartFox._dispatchEvent(SmartFox.Event.USER_COUNT_CHANGE, a)
        }
    };
    SmartFox.Controllers.SystemController.prototype._fnKickUser = function (evt) {
        if (evt.status) {
            var msg = evt.data;
            var b = {
                user_id_kick: msg.unPackInt(),
                user_id_to_kick: msg.unPackInt()
            };
            this._smartFox._dispatchEvent(SmartFox.Event.KICK_USER, b);
        } else {
            this._log.error(evt.err);
        }
    };
    SmartFox.Controllers.ExtensionController = function (smartFox) {
        this._smartFox = smartFox;
        this._id = 1;
        this._log = smartFox._log;
    };
    SmartFox.Controllers.ExtensionController.prototype.getId = function () {
        return this._id;
    };
    SmartFox.Controllers.ExtensionController.prototype.handleMessage = function (actionId, params) {
        actionId = params.get("c");
        params = params.get("p");
        this._smartFox.debug && this._log.info("IN < ExtensionResponse " + actionId);
        this._smartFox._dispatchEventExtension(actionId, params);
    };
    SmartFox.Entities = {};
    SmartFox.Entities.Variables = {};
    SmartFox.Entities.Invitation = {};
    SmartFox.Entities.Invitation.NInvitation = function (a, b, c, d) {
        this.id = -1;
        this.inviter = a;
        this.invitee = b;
        this.secondsForAnswer = null != c ? c : 15;
        this.params = d
    };
    SmartFox.Entities.Invitation.InvitationReply = {};
    SmartFox.Entities.Invitation.InvitationReply.ACCEPT = 0;
    SmartFox.Entities.Invitation.InvitationReply.REFUSE = 1;
    SmartFox.Entities.Room = function (a, b, c) {
        this.id = a;
        this.name = b;
        this.groupId = null != c ? c : "default";
        this.isPasswordProtected = this.isGame = this.isHidden = this.isJoined = !1;
        this._specCount = this._userCount = this.maxSpectators = this.maxUsers = 0;
        this._userManager = new SmartFox.Managers.UserManager;
        this._roomManager = null;
        this.variables = {};
        this.properties = {};
        this.owner = null;
    };
    SmartFox.Entities.Room.fromArray = function (a) {
        var b = new SmartFox.Entities.Room(a.get(0).getObject(), a.get(1).getObject(), a.get(2).getObject());
        b.isGame = a.get(3).getObject();
        b.isPasswordProtected = a.get(4).getObject();
        b._userCount = a.get(5).getObject();
        b.maxUsers = a.get(6).getObject();
        let c = a.get(7).getObject();
        if(null != c){
            for(let d = 0; d < c.size(); d++){
                let e = SmartFox.Entities.Variables.RoomVariable.fromArray(c.get(d).getObject());
                b._setVariable(e);
            }
        }
        if(b.isGame){
            b._specCount = a.get(9).getObject();
            b.maxSpectators = a.get(10).getObject();
        }
        return b;
    };
    SmartFox.Entities.Room.prototype.setOwner = function(user){
        this.owner = user;
    }
    SmartFox.Entities.Room.prototype.getOwner = function(){
        if(this.owner != null && !this.owner.isPlayer())
            this.owner = null;
        return this.owner;
    }
    SmartFox.Entities.Room.prototype.toString = function () {
        return "[Room: " + this.name + ", Id: " + this.id + ", Group id: " + this.groupId + "]";
    };
    SmartFox.Entities.Room.prototype.getUserCount = function () {
        return this.isJoined ? (this.isGame ? this.getPlayerList().length : this._userManager.getUserCount()) : this._userCount;
    };
    SmartFox.Entities.Room.prototype.getSpectatorCount = function () {
        return this.isJoined ? (!this.isGame ? 0 : this.getSpectatorList().length) : this._specCount;
    };
    SmartFox.Entities.Room.prototype.getCapacity = function () {
        return this.maxUsers + this.maxSpectators;
    };
    SmartFox.Entities.Room.prototype.getUserByName = function (a) {
        return this._userManager.getUserByName(a);
    };
    SmartFox.Entities.Room.prototype.getUserById = function (a) {
        return this._userManager.getUserById(a);
    };
    SmartFox.Entities.Room.prototype.containsUser = function (a) {
        return this._userManager.containsUser(a);
    };
    SmartFox.Entities.Room.prototype.getUserList = function () {
        return this._userManager.getUserList();
    };
    SmartFox.Entities.Room.prototype.getPlayerList = function () {
        let a = [];
        var  b = this._userManager.getUserList();
        for (let c = 0; c < b.length; c++) {
            var d = b[c];
            let isPlayer = d.isPlayerInRoom(this);
            if(isPlayer){
                a.push(d);
            }
        }
        return a;
    };
    SmartFox.Entities.Room.prototype.getSpectatorList = function () {
        for (var a = [], b = this._userManager.getUserList(), c = 0; c < b.length; c++) {
            var d = b[c];
            d.isSpectatorInRoom(this) && a.push(d);
        }
        return a;
    };
    SmartFox.Entities.Room.prototype.getMaxUsers = function(){
        return this.maxUsers;
    }
    SmartFox.Entities.Room.prototype.getRoomManager = function () {
        return this._roomManager;
    };
    SmartFox.Entities.Room.prototype._setVariable = function(a){
        a.isNull() ? delete this.variables[a.name] : this.variables[a.name] = a.value;
    }
    SmartFox.Entities.Room.prototype.getVariable = function(a){
        return this.variables[a];
    }
    SmartFox.Entities.Room.prototype.getVariables = function(){
        return SmartFox.Utils.ArrayUtil.objToArray(this.variables);
    }
    SmartFox.Entities.Room.prototype._addUser = function (a) {
        this._userManager._addUser(a);
    };
    SmartFox.Entities.Room.prototype._removeUser = function (a) {
        if(this.owner == a){
            this.owner = null;
        }
        this._userManager._removeUser(a);
    };
    SmartFox.Entities.Room.prototype._setRoomManager = function (a) {
        if (null != this._roomManager) throw new SmartFox.Exceptions.Error("Room Manager already assigned to Room " + this.toString());
        this._roomManager = a;
    };
    SmartFox.Entities.Room.prototype._merge = function (a) {
        this.variables = [];
        for (var b in a.variables) this.variables[b] = a.variables[b];
        this._userManager._clearAll();
        a = a.getUserList();
        for (var b = 0; b < a.length; b++) {
            this._userManager._addUser(a[b]);
        }
    };
    SmartFox.Entities.User = function (a, b, c) {
        this.id = a;
        this.name = b;
        this.isItMe = null != c ? c : !1;
        this.privilegeId = 0;
        this.variables = {};
        this._playerIdByRoomId = {};
        this._userManager = null;
        this.isSuper = false;
    };
    SmartFox.Entities.User.fromArray = function (a, b) {
        var c = new SmartFox.Entities.User(a.get(0).getObject(), a.get(1).getObject());
        c.privilegeId = a.get(2).getObject();
        null != b && c._setPlayerId(a.get(3).getObject(), b);
        let d = a.get(4).getObject();
        if(null != d){
            for(let e = 0; e < d.size(); e++){
                let f = SmartFox.Entities.Variables.UserVariable.fromArray(d.get(e).value);
                c._setVariable(f);
            }
        }
        return c;
    };
    SmartFox.Entities.User.prototype.toString = function () {
        return "[User: " + this.name + ", Id: " + this.id + ", Is me: " + this.isItMe + "]";
    };
    SmartFox.Entities.User.prototype.isJoinedInRoom = function (a) {
        return a.containsUser(this);
    };
    SmartFox.Entities.User.prototype.isPlayer = function () {
        return this.isPlayerInRoom(this._userManager._smartFox.lastJoinedRoom);
    };
    SmartFox.Entities.User.prototype.isSpectator = function () {
        return this.isSpectatorInRoom(this._userManager._smartFox.lastJoinedRoom);
    };
    SmartFox.Entities.User.prototype.getPlayerId = function (a) {
        var b = -1;
        null != this._playerIdByRoomId[a.id] && (b = this._playerIdByRoomId[a.id]);
        return b;
    };
    SmartFox.Entities.User.prototype.isPlayerInRoom = function (a) {
        return null != a && a.isGame ? 0 < this._playerIdByRoomId[a.id] : !1;
    };
    SmartFox.Entities.User.prototype.isSpectatorInRoom = function (a) {
        return null != a && a.isGame ? 0 > this._playerIdByRoomId[a.id] : !1;
    };
    SmartFox.Entities.User.prototype.getUserManager = function () {
        return this._userManager;
    };
    SmartFox.Entities.User.prototype._setPlayerId = function (a, b) {
        this._playerIdByRoomId[b.id] = a;
    };
    SmartFox.Entities.User.prototype._removePlayerId = function (a) {
        delete this._playerIdByRoomId[a.id];
    };
    SmartFox.Entities.User.prototype._setVariable = function(a){
        a.isNull() ? delete this.variables[a.name] : this.variables[a.name] = a
    }
    SmartFox.Entities.User.prototype._setVariables = function(a){
        for (var b in a) this._setVariable(a[b])
    }
    SmartFox.Entities.User.prototype.getVariable = function(a){
        return this.variables[a]
    }
    SmartFox.Entities.User.prototype.getVariables = function(a){
        return SmartFox.Utils.ArrayUtil.objToArray(this.variables)
    }
    SmartFox.Entities.User.prototype.containsVariable = function(a){
        return null != this.variables[a]
    }
    SmartFox.Entities.User.prototype._setUserManager = function (a) {
        if (null != this._userManager) throw new SmartFox.Exceptions.Error("User Manager already assigned to user " + this.toString());
        this._userManager = a;
    };
    SmartFox.Entities.Match = {};
    SmartFox.Entities.Match.MatchExpression = function (a, b, c) {
        this.varName = a;
        this.condition = b;
        this.value = c;
        this._parent = this.next = this.logicOp = null
    };
    SmartFox.Entities.Match.MatchExpression.chainedMatchExpression = function (a, b, c, d, e) {
        a = new SmartFox.Entities.Match.MatchExpression(a, b, c);
        a.logicOp = d;
        a._parent = e;
        return a
    };
    SmartFox.Entities.Match.MatchExpression.prototype.and = function (a, b, c) {
        return this.next = SmartFox.Entities.Match.MatchExpression.chainedMatchExpression(a, b, c, SmartFox.Entities.Match.LogicOperator.AND, this)
    };
    SmartFox.Entities.Match.MatchExpression.prototype.or = function (a, b, c) {
        return this.next = SmartFox.Entities.Match.MatchExpression.chainedMatchExpression(a, b, c, SmartFox.Entities.Match.LogicOperator.OR, this)
    };
    SmartFox.Entities.Match.MatchExpression.prototype.hasNext = function () {
        return null != this.next
    };
    SmartFox.Entities.Match.MatchExpression.prototype.rewind = function () {
        for (var a = this;;) if (null != a._parent) a = a._parent;
        else break;
        return a
    };
    SmartFox.Entities.Match.MatchExpression.prototype.toString = function () {
        for (var a = this.rewind(), b = a._asString(); a.hasNext();) a = a.next, b += a._asString();
        return b
    };
    SmartFox.Entities.Match.MatchExpression.prototype._asString = function () {
        var a = "";
        null != this.logicOp && (a += " " + this.logicOp.id + " ");
        a = a + "(" + (this.varName + " " + this.condition.symbol + " " + ("string" == typeof this.value ? "'" + this.value + "'" : this.value));
        return a + ")"
    };
    SmartFox.Entities.Match.MatchExpression.prototype._toArray = function () {
        var a = this.rewind(),
            b = [];
        for (b.push(a._expressionAsArray()); a.hasNext();) a = a.next, b.push(a._expressionAsArray());
        return b
    };
    SmartFox.Entities.Match.MatchExpression.prototype._expressionAsArray = function () {
        var a = [];
        null != this.logicOp ? a.push(this.logicOp.id) : a.push(null);
        a.push(this.varName);
        a.push(this.condition.type);
        a.push(this.condition.symbol);
        a.push(this.value);
        return a
    };
    SmartFox.Entities.Match.MatchExpression.prototype.toNArray = function(){
        let array = this._toArray();
        let nArray = SArray.newInstance();
        for(let i = 0; i < array.length;i++){
            let item = array[i];
            let nItem = SArray.newInstance();
            if(item[0] == null){
                nItem.addNull();
            }else{
                nItem.addUtfString(item[0]);
            }
            nItem.addUtfString(item[1]);
            nItem.addByte(item[2]);
            nItem.addUtfString(item[3]);
            let value = item[4];
            if("string" === typeof value) nItem.addUtfString(value);
            if("number" === typeof value) nItem.addDouble(value);
            if("boolean" === typeof value) nItem.addBool(value);
            if(SObject === typeof value) nItem.addNObject(value);
            nArray.addNArray(nItem)
        }
        return nArray;
    }
    SmartFox.Entities.Match.LogicOperator = function (a) {
        this.id = a
    };
    SmartFox.Entities.Match.LogicOperator.AND = new SmartFox.Entities.Match.LogicOperator("AND");
    SmartFox.Entities.Match.LogicOperator.OR = new SmartFox.Entities.Match.LogicOperator("OR");
    SmartFox.Entities.Match.BoolMatch = function (a) {
        this.type = 0;
        this.symbol = a
    };
    SmartFox.Entities.Match.BoolMatch.EQUALS = new SmartFox.Entities.Match.BoolMatch("==");
    SmartFox.Entities.Match.BoolMatch.NOT_EQUALS = new SmartFox.Entities.Match.BoolMatch("!=");
    SmartFox.Entities.Match.NumberMatch = function (a) {
        this.type = 1;
        this.symbol = a
    };
    SmartFox.Entities.Match.NumberMatch.EQUALS = new SmartFox.Entities.Match.NumberMatch("==");
    SmartFox.Entities.Match.NumberMatch.NOT_EQUALS = new SmartFox.Entities.Match.NumberMatch("!=");
    SmartFox.Entities.Match.NumberMatch.GREATER_THAN = new SmartFox.Entities.Match.NumberMatch(">");
    SmartFox.Entities.Match.NumberMatch.GREATER_THAN_OR_EQUAL_TO = new SmartFox.Entities.Match.NumberMatch(">=");
    SmartFox.Entities.Match.NumberMatch.LESS_THAN = new SmartFox.Entities.Match.NumberMatch("<");
    SmartFox.Entities.Match.NumberMatch.LESS_THAN_OR_EQUAL_TO = new SmartFox.Entities.Match.NumberMatch("<=");
    SmartFox.Entities.Match.StringMatch = function (a) {
        this.type = 2;
        this.symbol = a
    };
    SmartFox.Entities.Match.StringMatch.EQUALS = new SmartFox.Entities.Match.StringMatch("==");
    SmartFox.Entities.Match.StringMatch.NOT_EQUALS = new SmartFox.Entities.Match.StringMatch("!=");
    SmartFox.Entities.Match.StringMatch.CONTAINS = new SmartFox.Entities.Match.StringMatch("contains");
    SmartFox.Entities.Match.StringMatch.STARTS_WITH = new SmartFox.Entities.Match.StringMatch("startsWith");
    SmartFox.Entities.Match.StringMatch.ENDS_WITH = new SmartFox.Entities.Match.StringMatch("endsWith");
    SmartFox.Entities.Match.RoomProperties = {};
    SmartFox.Entities.Match.RoomProperties.NAME = "${N}";
    SmartFox.Entities.Match.RoomProperties.GROUP_ID = "${G}";
    SmartFox.Entities.Match.RoomProperties.MAX_USERS = "${MXU}";
    SmartFox.Entities.Match.RoomProperties.MAX_SPECTATORS = "${MXS}";
    SmartFox.Entities.Match.RoomProperties.USER_COUNT = "${UC}";
    SmartFox.Entities.Match.RoomProperties.SPECTATOR_COUNT = "${SC}";
    SmartFox.Entities.Match.RoomProperties.IS_GAME = "${ISG}";
    SmartFox.Entities.Match.RoomProperties.IS_PRIVATE = "${ISP}";
    SmartFox.Entities.Match.RoomProperties.HAS_FREE_PLAYER_SLOTS = "${HFP}";
    SmartFox.Entities.Match.RoomProperties.IS_TYPE_SFSGAME = "${IST}";
    SmartFox.Entities.Match.UserProperties = {};
    SmartFox.Entities.Match.UserProperties.NAME = "${N}";
    SmartFox.Entities.Match.UserProperties.IS_PLAYER = "${ISP}";
    SmartFox.Entities.Match.UserProperties.IS_SPECTATOR = "${ISS}";
    SmartFox.Entities.Match.UserProperties.IS_NPC = "${ISN}";
    SmartFox.Entities.Match.UserProperties.PRIVILEGE_ID = "${PRID}";
    SmartFox.Entities.Match.UserProperties.IS_IN_ANY_ROOM = "${IAR}";
    SmartFox.Entities.Variables.VariableType = {
        _typeStrings: "Null Bool Int Double String Object Array".split(" "),
        NULL: 0,
        BOOL: 1,
        INT: 2,
        DOUBLE: 3,
        STRING: 4,
        OBJECT: 5,
        ARRAY: 6
    };
    SmartFox.Entities.Variables.VariableType.getTypeName = function (a) {
        return this._typeStrings[a]
    };
    SmartFox.Entities.Variables.VariableType.getTypeIdFromName = function (a) {
        return this._typeStrings.indexOf(a)
    };
    SmartFox.Entities.Variables.UserVariable = vcClass.Class.extend({
        ctor(a, b, c){
            this.name = a;
            this.value = b;
            this._setType(c);
        },
        toString(){
            return "[UserVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]"
        },
        isNull: function () {
            return SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.NULL
        },
        toArray(){
            return [this.name, SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type), this.value]
        },
        toNArray(){
            let nArray = SArray.newInstance();
            nArray.addUtfString(this.name);
            nArray.addBool(true);
            if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.NULL){
                nArray.addNull();
            }else  if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.BOOL){
                nArray.addBool(this.value)
            }else if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.INT){
                nArray.addInt(this.value);
            }else if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.DOUBLE){
                nArray.addDouble(this.value);
            }else if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.STRING){
                nArray.addUtfString(this.value)
            }else if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.OBJECT){
                nArray.addNObject(this.value)
            } else if(SmartFox.Entities.Variables.VariableType.getTypeIdFromName(this.type) == SmartFox.Entities.Variables.VariableType.ARRAY){
                nArray.addNArray(this.value)
            }
            return nArray;
        },
        _setType(a){
            null == a && (a = -1); - 1 < a ? this.type = this.getTypeName(a) : null == this.value ? this.type = this.getTypeName(SmartFox.Entities.Variables.VariableType.NULL) : (a = typeof this.value, "boolean" == a ? this.type = this.getTypeName(SmartFox.Entities.Variables.VariableType.BOOL) : "number" == a ? this.type = this.value === +this.value && this.value === (this.value | 0) ? this.getTypeName(SmartFox.Entities.Variables.VariableType.INT) : this.getTypeName(SmartFox.Entities.Variables.VariableType.DOUBLE) : "string" == a ? this.type = this.getTypeName(SmartFox.Entities.Variables.VariableType.STRING) :
                "object" == a && (this.type = this.value instanceof Array ? this.getTypeName(SmartFox.Entities.Variables.VariableType.ARRAY) : this.getTypeName(SmartFox.Entities.Variables.VariableType.OBJECT)))
        },
        getTypeName(a){
            return SmartFox.Entities.Variables.VariableType.getTypeName(a);
        }
    });
    SmartFox.Entities.Variables.UserVariable.fromArray = function(a){
        return new SmartFox.Entities.Variables.UserVariable(a.get(0).value, a.get(2).value, a.get(1).value);
    }
    SmartFox.Entities.Variables.RoomVariable = SmartFox.Entities.Variables.UserVariable.extend({
        ctor(a, b, c){
            this._super(a, b, c);
            this.isPersistent = this.isPrivate = !1
        },
        toString: function () {
            return "[RoomVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Is private: " + this.isPrivate + "]"
        },
        toArray: function () {
            var a = this._super();
            a.push(this.isPrivate);
            a.push(this.isPersistent);
            return a
        },
        toNArray(){
            let a = this._super();
            a.addBool(this.isPrivate);
            a.addBool(this.isPersistent);
            return a;
        }
    });
    SmartFox.Entities.Variables.RoomVariable.fromArray = function(a){
        return new SmartFox.Entities.Variables.RoomVariable(a.get(0).getObject(), a.get(2), a.get(1).getObject());
    }
    SmartFox.Managers = {};
    SmartFox.Managers.UserManager = vcClass.Class.extend({
        ctor: function ctor(a) {
            this._smartFox = a;
            this._usersById = new Utils.HashTable();
            this._usersByName = new Utils.HashTable();
            this._log = new Logger();
        },
        containsUserName: function containsUserName(a) {
            return this._usersByName.hasItem(a);
        },
        containsUserId: function containsUserId(a) {
            return this._usersById.hasItem(a);
        },
        containsUser: function containsUser(a) {
            return this._usersById.hasItem(a.id);
        },
        getUserById: function getUserById(a) {
            return this._usersById.getItem(a);
        },
        getUserByName: function getUserByName(a) {
            return this._usersByName.getItem(a);
        },
        getUserCount: function getUserCount() {
            return this._usersById.length;
        },
        getUserList: function getUserList() {
            return this._usersById.values();
        },
        _addUser: function _addUser(a) {
            if (!this._usersById.hasItem(a.id)) {
                this.__addUser(a);
            }
        },
        __addUser: function __addUser(a) {
            this._usersByName.setItem(a.name, a);
            this._usersById.setItem(a.id, a);
        },
        _removeUser: function _removeUser(a) {
            this._usersById.removeItem(a.id);
            this._usersByName.removeItem(a.name);
        },
        _removeUserById: function _removeUserById(a) {
            this._usersById.removeItem(a.id);
            this._usersByName.removeItem(a.name);
        },
        _clearAll: function _clearAll() {
            this._usersById.clear();
            this._usersByName.clear();
        }
    });
    SmartFox.Managers.GlobalUserManager = SmartFox.Managers.UserManager.extend({
        ctor: function ctor(a) {
            this._super(a);
            this._roomRefCount = [];
        },
        _addUser: function _addUser(a) {
            null == this._roomRefCount[a] ? this._roomRefCount[a] = 1 : this._roomRefCount[a]++;
            this.__addUser(a);
        },
        _removeUser: function _removeUser(a) {
            null != this._roomRefCount ? 1 > this._roomRefCount[a] ? this._log.warn("GlobalUserManager RefCount is already at zero. User: " + a) : (this._roomRefCount[a]--, 0 == this._roomRefCount[a] && (this._removeUser(a), delete this._roomRefCount[a])) : this._log.warn("Can't remove User from GlobalUserManager. RefCount missing. User: " + a);
        }
    });
    SmartFox.Managers.RoomManager = function (a) {
        this._smartFox = a;
        this._ownerZone = null;
        this._groups = [];
        this._roomsById = new Utils.HashTable();
        this._roomsByName = new Utils.HashTable();
    };
    SmartFox.Managers.RoomManager.prototype.getRoomGroups = function () {
        return this._groups;
    };
    SmartFox.Managers.RoomManager.prototype.containsGroup = function (group) {
        return -1 < this._groups.indexOf(group);
    };
    SmartFox.Managers.RoomManager.prototype.containsRoom = function (a) {
        return "number" == typeof a ? this._roomsById.hasItem(a) : this._roomsByName.hasItem(a);
    };
    SmartFox.Managers.RoomManager.prototype.containsRoomInGroup = function (a, b) {
        var c = this.getRoomListFromGroup(b),
            d = !1,
            e = "number" == typeof a,
            f;
        for (f in c) {
            var g = c[f];
            if (e) {
                if (g.id == a) {
                    d = !0;
                    break;
                }
            } else if (g.name == a) {
                d = !0;
                break;
            }
        }
        return d;
    };
    SmartFox.Managers.RoomManager.prototype.getRoomById = function (a) {
        return this._roomsById.getItem(a);
    };
    SmartFox.Managers.RoomManager.prototype.getRoomByName = function (a) {
        return this._roomsByName.getItem(a);
    };
    SmartFox.Managers.RoomManager.prototype.getRoomList = function () {
        return this._roomsById.values();
    };
    SmartFox.Managers.RoomManager.prototype.getRoomCount = function () {
        return this._roomsById.length;
    };
    SmartFox.Managers.RoomManager.prototype.getRoomListFromGroup = function (a) {
        var b = [],
            c;
        for (c in this._roomsById.items) {
            if (this._roomsById.hasItem(c)) {
                var d = this._roomsById.items[c];
                d.groupId == a && b.push(d);
            }
        }return b;
    };
    SmartFox.Managers.RoomManager.prototype.getJoinedRooms = function () {
        var a = [],
            b;
        for (b in this._roomsById.items) {
            if (this._roomsById.hasItem(b)) {
                var c = this._roomsById.items[b];
                c.isJoined && a.push(c);
            }
        }return a;
    };
    SmartFox.Managers.RoomManager.prototype.getUserRooms = function (a) {
        var b = [],
            c;
        for (c in this._roomsById.items) {
            if (this._roomsById.hasItem(c)) {
                var d = this._roomsById.items[c];
                d.containsUser(a) && b.push(d);
            }
        }return b;
    };
    SmartFox.Managers.RoomManager.prototype._addRoom = function (a, b) {
        null == b && (b = !0);
        this._roomsById.setItem(a.id, a);
        this._roomsByName.setItem(a.name, a);
        b ? this.containsGroup(a.groupId) || this._addGroup(a.groupId) : a._isManaged = !1;
    };
    SmartFox.Managers.RoomManager.prototype._replaceRoom = function (a, b) {
        null == b && (b = !0);
        var c = this.getRoomById(a.id);
        if (null != c) return c._merge(a), c;
        this._addRoom(a, b);
        return a;
    };
    SmartFox.Managers.RoomManager.prototype._removeRoom = function (a) {
        this._roomsById.removeItem(a.id);
        this._roomsByName.removeItem(a.name);
    };
    SmartFox.Managers.RoomManager.prototype._removeRoomById = function (a) {
        a = this.getRoomById(a);
        null != a && this._removeRoom(a);
    };
    SmartFox.Managers.RoomManager.prototype._removeRoomByName = function (a) {
        a = this.getRoomByName(a);
        null != a && this._removeRoom(a);
    };
    SmartFox.Managers.RoomManager.prototype._changeRoomName = function (a, b) {
        var c = a.name;
        a.name = b;
        this._roomsByName.setItem(b, a);
        this._roomsByName.removeItem(c);
    };
    SmartFox.Managers.RoomManager.prototype._changeRoomPasswordState = function (a, b) {
        a.isPasswordProtected = b;
    };
    SmartFox.Managers.RoomManager.prototype._changeRoomCapacity = function (a, b, c) {
        a.maxUsers = b;
        a.maxSpectators = c;
    };
    SmartFox.Managers.RoomManager.prototype._addGroup = function (a) {
        this._groups.push(a);
    };
    SmartFox.Managers.RoomManager.prototype._removeGroup = function (a) {
        Utils.ArrayUtil.removeItem(this._groups, a);
        var a = this.getRoomListFromGroup(a),
            b;
        for (b in a) {
            var c = a[b];
            c.isJoined ? c._isManaged = !1 : this._removeRoom(c);
        }
    };
    SmartFox.Managers.RoomManager.prototype._removeUser = function (a) {
        for (var b in this._roomsById.items) {
            if (this._roomsById.hasItem(b)) {
                var c = this._roomsById.items[b];
                c.containsUser(a) && c._removeUser(a);
            }
        }
    };
    let TransportType = {};
    TransportType.TCP = "tcp";
    TransportType.UDP = "upd";

    windown.SmartFoxSDK = {};
    function newInstance(config){
        return new SmartFox(config);
    }
    let instance = null;
    let getInstance = function(){
        if(instance == null){
            instance = new SmartFox();
        }
        return instance;
    };
    let VLogger = new Logger();
    VLogger.setLevel(Logger.LogLevel.DEBUG);
    SmartFoxSDK.Instance = getInstance();
    SmartFoxSDK.newInstance = newInstance;
    SmartFoxSDK.SmartFox = {};
    SmartFoxSDK.SmartFox.Event = SmartFox.Event;
    SmartFoxSDK.SmartFox.Requests = SmartFox.Requests;
    SmartFoxSDK.SmartFox.Entities = SmartFox.Entities;
    SmartFoxSDK.SmartFox.ClientDisconnectionReason = SmartFox.ClientDisconnectionReason;
    SmartFoxSDK.MessagePack = MessagePack;
    SmartFoxSDK.ByteArray = ByteArray;
    SmartFoxSDK.SObject = SObject;
    SmartFoxSDK.SArray = SArray;
    SmartFoxSDK.Logger = Logger;
    SmartFoxSDK.debug = false;
    SmartFoxSDK.Host = HOST;
    SmartFoxSDK.Port = PORT;
    SmartFoxSDK.Class = vcClass.Class;
})(window, undefined);
