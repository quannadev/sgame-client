(function(e) {
let t = {
defineGetterSetter: function(e, t, s, r, n, i) {
if (e.__defineGetter__) {
s && e.__defineGetter__(t, s);
r && e.__defineSetter__(t, r);
} else {
if (!Object.defineProperty) throw new Error("browser does not support getters");
var o = {
enumerable: !1,
configurable: !0
};
s && (o.get = s);
r && (o.set = r);
Object.defineProperty(e, t, o);
}
if (!n && !i) for (var a = null != s, u = null != r, _ = Object.getOwnPropertyNames(e), h = 0; h < _.length; h++) {
var l = _[h];
if ((e.__lookupGetter__ ? !e.__lookupGetter__(l) : !Object.getOwnPropertyDescriptor(e, l)) && "function" == typeof e[l]) {
var c = e[l];
if (a && c === s) {
n = l;
if (!u || i) break;
}
if (u && c === r) {
i = l;
if (!a || n) break;
}
}
}
var R = e.constructor;
if (n) {
R.__getters__ || (R.__getters__ = {});
R.__getters__[n] = t;
}
if (i) {
R.__setters__ || (R.__setters__ = {});
R.__setters__[i] = t;
}
},
clone: function(e) {
var s = e.constructor ? new e.constructor() : {};
for (var r in e) {
var n = e[r];
"object" !== ("undefined" == typeof n ? "undefined" : _typeof(n)) || !n || n instanceof t.Node || n instanceof HTMLElement ? s[r] = n : s[r] = t.clone(n);
}
return s;
},
inject: function(e, t) {
for (var s in e) t[s] = e[s];
}
};
var s = {
id: 0 | 998 * Math.random(),
instanceId: 0 | 998 * Math.random(),
getNewID: function() {
return this.id++;
},
getNewInstanceId: function() {
return this.instanceId++;
}
};
(function() {
var e = /\b_super\b/;
t.Class = function() {};
t.Class.extend = function(r) {
var n, i = this.prototype, o = Object.create(i), a = {
writable: !0,
enumerable: !1,
configurable: !0
};
n = function(e, t, r, n, i) {
this.__instanceId = s.getNewInstanceId();
if (this.ctor) switch (arguments.length) {
case 0:
this.ctor();
break;

case 1:
this.ctor(e);
break;

case 2:
this.ctor(e, t);
break;

case 3:
this.ctor(e, t, r);
break;

case 4:
this.ctor(e, t, r, n);
break;

case 5:
this.ctor(e, t, r, n, i);
break;

default:
this.ctor.apply(this, arguments);
}
};
a.value = s.getNewID();
Object.defineProperty(o, "__pid", a);
n.prototype = o;
a.value = n;
Object.defineProperty(o, "constructor", a);
this.__getters__ && (n.__getters__ = t.clone(this.__getters__));
this.__setters__ && (n.__setters__ = t.clone(this.__setters__));
for (var u = 0, _ = arguments.length; u < _; ++u) {
var h = arguments[u];
for (var l in h) {
var c = "function" == typeof h[l], R = "function" == typeof i[l], p = e.test(h[l]);
if (c && R && p) {
a.value = function(e, t) {
return function() {
var s = this._super;
this._super = i[e];
var r = t.apply(this, arguments);
this._super = s;
return r;
};
}(l, h[l]);
Object.defineProperty(o, l, a);
} else if (c) {
a.value = h[l];
Object.defineProperty(o, l, a);
} else o[l] = h[l];
if (c) {
var m, E, g;
if (this.__getters__ && this.__getters__[l]) {
g = this.__getters__[l];
for (var d in this.__setters__) if (this.__setters__[d] === g) {
E = d;
break;
}
t.defineGetterSetter(o, g, h[l], h[E] ? h[E] : o[E], l, E);
}
if (this.__setters__ && this.__setters__[l]) {
g = this.__setters__[l];
for (var d in this.__getters__) if (this.__getters__[d] === g) {
m = d;
break;
}
t.defineGetterSetter(o, g, h[m] ? h[m] : o[m], h[l], m, l);
}
}
}
}
n.extend = t.Class.extend;
n.implement = function(e) {
for (var t in e) o[t] = e[t];
};
return n;
};
})();
let r = {
NULL: 0,
BOOL: 1,
BYTE: 2,
SHORT: 3,
INT: 4,
LONG: 5,
FLOAT: 6,
DOUBLE: 7,
UTF_STRING: 8,
BOOL_ARRAY: 9,
BYTE_ARRAY: 10,
SHORT_ARRAY: 11,
INT_ARRAY: 12,
LONG_ARRAY: 13,
FLOAT_ARRAY: 14,
DOUBLE_ARRAY: 15,
UTF_STRING_ARRAY: 16,
N_ARRAY: 17,
N_OBJECT: 18,
CLASS: 19,
TEXT: 20
};
function n(e, t) {
this.id = e;
this.value = t;
this.type = "UNKNOW";
null != t && null != t || (this.id = e = r.NULL);
e == r.NULL ? this.type = "NULL" : e == r.BOOL ? this.type = "BOOL" : e == r.BYTE ? this.type = "BYTE" : e == r.SHORT ? this.type = "SHORT" : e == r.INT ? this.type = "INT" : e == r.LONG ? this.type = "LONG" : e == r.FLOAT ? this.type = "FLOAT" : e == r.DOUBLE ? this.type = "DOUBLE" : e == r.UTF_STRING ? this.type = "UTF_STRING" : e == r.BOOL_ARRAY ? this.type = "BOOL_ARRAY" : e == r.BYTE_ARRAY ? this.type = "BYTE_ARRAY" : e == r.SHORT_ARRAY ? this.type = "SHORT_ARRAY" : e == r.INT_ARRAY ? this.type = "INT_ARRAY" : e == r.LONG_ARRAY ? this.type = "LONG_ARRAY" : e == r.FLOAT_ARRAY ? this.type = "FLOAT_ARRAY" : e == r.DOUBLE_ARRAY ? this.type = "DOUBLE_ARRAY" : e == r.UTF_STRING_ARRAY ? this.type = "UTF_STRING_ARRAY" : e == r.N_OBJECT ? this.type = "N_OBJECT" : e == r.CLASS ? this.type = "CLASS" : e == r.TEXT ? this.type = "TEXT" : e == r.N_ARRAY && (this.type = "N_ARRAY");
}
n.prototype.getDump = function() {
let e = "";
if (this.id == r.N_OBJECT) e += this.value.getDump(); else if (this.id == r.BYTE_ARRAY) {
e += "[" + this.value + "]";
e += " (" + this.type + ")\n";
} else {
e += this.value;
e += " (" + this.type + ")\n";
}
return e;
};
n.prototype.getTypeId = function() {
return this.id;
};
n.prototype.getObject = function() {
return this.value;
};
let i = {
object2binary: function(e) {
let t = new l();
t.writeByte(r.N_OBJECT);
t.writeShort(e.getSize());
return i.obj2bin(e, t);
},
array2binary: function(e) {
let t = new l();
t.writeByte(r.N_ARRAY);
t.writeShort(e.size());
return i.arr2bin(e, t);
},
arr2bin: function(e, t) {
for (let s = 0; s < e._dataHolder.length; s++) {
let r = e._dataHolder[s];
t = i.encodeObject(t, r.getTypeId(), r.getObject());
}
return t;
},
obj2bin: function(e, t) {
let s = e.getKeys();
for (let r = 0; r < s.length; r++) {
let n = s[r], o = e.getKey(n), a = o.getObject();
t = i.encodeNObjectKey(t, n);
t = i.encodeObject(t, o.getTypeId(), a);
}
return t;
},
encodeNObjectKey: function(e, t) {
e.writeString(t);
return e;
},
binEncode_NULL: function(e) {
e.writeByte(r.NULL);
return e;
},
binEncode_BOOL: function(e, t) {
e.writeByte(r.BOOL);
e.writeByte(t);
return e;
},
binEncode_BYTE: function(e, t) {
e.writeByte(r.BYTE);
e.writeByte(t);
return e;
},
binEncode_SHORT: function(e, t) {
e.writeByte(r.SHORT);
e.writeShort(t);
return e;
},
binEncode_INT: function(e, t) {
e.writeByte(r.INT);
e.writeInt(t);
return e;
},
binEncode_LONG: function(e, t) {
e.writeByte(r.LONG);
e.writeLong(t);
return e;
},
binEncode_FLOAT: function(e, t) {
e.writeByte(r.FLOAT);
e.writeFloat(t);
return e;
},
binEncode_DOUBLE: function(e, t) {
e.writeByte(r.DOUBLE);
e.writeDouble(t);
return e;
},
binEncode_UTF_STRING: function(e, t) {
e.writeByte(r.UTF_STRING);
e.writeString(t);
return e;
},
binEncode_TEXT: function(e, t) {
e.writeByte(r.TEXT);
e.writeText(t);
return e;
},
binEncode_BOOL_ARRAY: function(e, t) {
e.writeByte(r.BOOL_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeByte(t[s] ? 1 : 0);
return e;
},
binEncode_BYTE_ARRAY: function(e, t) {
e.writeByte(r.BYTE_ARRAY);
e.writeBytes(t);
return e;
},
binEncode_SHORT_ARRAY: function(e, t) {
e.writeByte(r.SHORT_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeShort(t[s]);
return e;
},
binEncode_INT_ARRAY: function(e, t) {
e.writeByte(r.INT_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeInt(t[s]);
return e;
},
binEncode_LONG_ARRAY: function(e, t) {
e.writeByte(r.LONG_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeLong(t[s]);
return e;
},
binEncode_FLOAT_ARRAY: function(e, t) {
e.writeByte(r.FLOAT_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeFloat(t[s]);
return e;
},
binEncode_DOUBLE_ARRAY: function(e, t) {
e.writeByte(r.DOUBLE_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeDouble(t[s]);
return e;
},
binEncode_UTF_STRING_ARRAY: function(e, t) {
e.writeByte(r.UTF_STRING_ARRAY);
e.writeShort(t.length);
for (let s = 0; s < t.length; s++) e.writeString(t[s]);
return e;
},
encodeObject: function(e, t, s) {
switch (t) {
case r.NULL:
return i.binEncode_NULL(e);

case r.BOOL:
return i.binEncode_BOOL(e, s);

case r.BYTE:
return i.binEncode_BYTE(e, s);

case r.SHORT:
return i.binEncode_SHORT(e, s);

case r.INT:
return i.binEncode_INT(e, s);

case r.LONG:
return i.binEncode_LONG(e, s);

case r.FLOAT:
return i.binEncode_FLOAT(e, s);

case r.DOUBLE:
return i.binEncode_DOUBLE(e, s);

case r.UTF_STRING:
return i.binEncode_UTF_STRING(e, s);

case r.TEXT:
return i.binEncode_TEXT(e, s);

case r.BOOL_ARRAY:
return i.binEncode_BOOL_ARRAY(e, s);

case r.BYTE_ARRAY:
return i.binEncode_BYTE_ARRAY(e, s);

case r.SHORT_ARRAY:
return i.binEncode_SHORT_ARRAY(e, s);

case r.INT_ARRAY:
return i.binEncode_INT_ARRAY(e, s);

case r.LONG_ARRAY:
return i.binEncode_LONG_ARRAY(e, s);

case r.FLOAT_ARRAY:
return i.binEncode_FLOAT_ARRAY(e, s);

case r.DOUBLE_ARRAY:
return i.binEncode_DOUBLE_ARRAY(e, s);

case r.UTF_STRING_ARRAY:
return i.binEncode_UTF_STRING_ARRAY(e, s);

case r.N_ARRAY:
let n = i.array2binary(s);
return i.addData(e, n);

case r.N_OBJECT:
{
let t = i.object2binary(s);
return i.addData(e, t);
}

case r.CLASS:
return null;
}
},
addData: function(e, t) {
for (let s = 0; s < t.getArrayWrite().length; s++) e.getArrayWrite().push(t.getArrayWrite()[s]);
return e;
},
binary2Object: function(e) {
if (!(e.length < 3)) return i.decodeNObject(e);
console.error("Cant decode an Nobject . byte data is insuficient size: " + e.length);
},
binary2array: function(e) {
if (!(e.length < 3)) return i.decodeNArray(e);
console.error("Cant decode an NArray . byte data is insuficient size: " + e.length);
},
decodeNObject: function(e) {
let t = o.newInstance(), s = e.readByte();
if (s != r.N_OBJECT) {
E.error("Invalid Data Type Expected: " + r.N_OBJECT + ", founded " + s);
return null;
}
let n = e.readShort();
if (!(n < 0)) {
for (let s = 0; s < n; s++) {
let s = e.readString(), r = i.decodeObject(e);
null != r && null != r && t.putNObject(s, r);
}
return t;
}
E.error("Cant decode NObject size is negative " + n);
},
decodeNArray: function(e) {
let t = u.newInstance(), s = e.readByte();
if (s != r.N_ARRAY) {
console.error("Invalid Data Type Expected: " + r.N_ARRAY + ", founded " + s);
return null;
}
let n = e.readShort();
if (!(n < 0)) {
for (let s = 0; s < n; s++) {
let s = i.decodeObject(e);
null != s && t.add(s);
}
return t;
}
console.error("Cant decode N_ARRAY size is negative " + n);
},
binDecode_NULL: function() {
return new n(r.NULL, null);
},
binDecode_BOOL: function(e) {
return new n(r.BOOL, e.readByte());
},
binDecode_BYTE: function(e) {
return new n(r.BYTE, e.readByte());
},
binDecode_SHORT: function(e) {
return new n(r.SHORT, e.readShort());
},
binDecode_INT: function(e) {
return new n(r.INT, e.readInt());
},
binDecode_LONG: function(e) {
return new n(r.LONG, e.readDouble());
},
binDecode_FLOAT: function(e) {
return new n(r.FLOAT, e.readFloat());
},
binDecode_DOUBLE: function(e) {
return new n(r.DOUBLE, e.readDouble());
},
binDecode_UTF_STRING: function(e) {
return new n(r.UTF_STRING, e.readString());
},
binDecode_TEXT: function(e) {
return new n(r.TEXT, e.readText());
},
getTypeArraySize: function(e) {
return e.readShort();
},
binDecode_BOOL_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readByte());
return new n(r.BOOL_ARRAY, s);
},
binDecode_BYTE_ARRAY: function(e) {
let t = e.readInt(), s = [];
for (let r = 0; r < t; r++) {
let t = e.readByte();
s.push(t);
}
return new n(r.BYTE_ARRAY, s);
},
binDecode_SHORT_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readShort());
return new n(r.SHORT_ARRAY, s);
},
binDecode_INT_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readInt());
return new n(r.INT_ARRAY, s);
},
binDecode_LONG_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readLong());
return new n(r.LONG_ARRAY, s);
},
binDecode_FLOAT_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readFloat());
return new n(r.FLOAT_ARRAY, s);
},
binDecode_DOUBLE_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readDouble());
return new n(r.DOUBLE_ARRAY, s);
},
binDecode_UTF_STRING_ARRAY: function(e) {
let t = i.getTypeArraySize(e), s = [];
for (let r = 0; r < t; r++) s.push(e.readString());
return new n(r.UTF_STRING_ARRAY, s);
},
decodeObject: function(e) {
let t = null, s = e.readByte();
if (s == r.NULL) t = i.binDecode_NULL(e); else if (s == r.BOOL) t = i.binDecode_BOOL(e); else if (s == r.BOOL_ARRAY) t = i.binDecode_BOOL_ARRAY(e); else if (s == r.BYTE) t = i.binDecode_BYTE(e); else if (s == r.BYTE_ARRAY) t = i.binDecode_BYTE_ARRAY(e); else if (s == r.SHORT) t = i.binDecode_SHORT(e); else if (s == r.SHORT_ARRAY) t = i.binDecode_SHORT_ARRAY(e); else if (s == r.INT) t = i.binDecode_INT(e); else if (s == r.INT_ARRAY) t = i.binDecode_INT_ARRAY(e); else if (s == r.LONG) t = i.binDecode_LONG(e); else if (s == r.LONG_ARRAY) t = i.binDecode_LONG_ARRAY(e); else if (s == r.FLOAT) t = i.binDecode_FLOAT(e); else if (s == r.FLOAT_ARRAY) t = i.binDecode_FLOAT_ARRAY(e); else if (s == r.DOUBLE) t = i.binDecode_DOUBLE(e); else if (s == r.DOUBLE_ARRAY) t = i.binDecode_DOUBLE_ARRAY(e); else if (s == r.UTF_STRING) t = i.binDecode_UTF_STRING(e); else if (s == r.TEXT) t = i.binDecode_TEXT(e); else if (s == r.UTF_STRING_ARRAY) t = i.binDecode_UTF_STRING_ARRAY(e); else if (s == r.N_ARRAY) {
e.setCurrentPosition(e.position() - 1);
t = new n(r.N_ARRAY, i.decodeNArray(e));
} else if (s == r.N_OBJECT) {
e.setCurrentPosition(e.position() - 1);
t = i.decodeNObject(e);
}
return t;
}
};
function o() {
this.dataHolder = new h.HashTable();
}
o.newFromBinary = function(e) {
let t = new l();
t.initWithInt8Array(e);
return i.binary2Object(t);
};
o.newInstance = function() {
return new o();
};
o.prototype.getDump = function() {
let e = "\n", t = "";
for (let s in this.dataHolder.items) {
let i = this.dataHolder.getItem(s), o = "";
if (i instanceof n) {
o = i.getDump();
i.getTypeId() == r.N_OBJECT && (t += "\t");
} else o = i;
e += t + "" + s + " : " + o;
}
return e;
};
o.prototype.toBinary = function() {
return i.object2binary(this);
};
o.prototype.isNull = function(e) {
let t = this.dataHolder.getItem(e);
if (null == t || null == t) return !1;
};
o.prototype.containsKey = function(e) {
return this.dataHolder.hasItem(e);
};
o.prototype.removeElement = function(e) {
return this.dataHolder.removeItem(e);
};
o.prototype.getKeys = function() {
return this.dataHolder.keys();
};
o.prototype.getSize = function() {
return this.getKeys().length;
};
o.prototype.get = function(e) {
let t = this.dataHolder.getItem(e);
return null == t ? null : null != t.getObject() ? t.getObject() : null;
};
o.prototype.getKey = function(e) {
return this.dataHolder.getItem(e);
};
o.prototype.putObj = function(e, t, s) {
t instanceof n ? this.dataHolder.setItem(e, t) : this.dataHolder.setItem(e, new n(s, t));
};
o.prototype._validateKeyValue = function(e, t) {
if (null == e || null == t) {
E.error("Error parameter . must be two params is key and value");
return !1;
}
return !0;
};
o.prototype.putBool = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.BOOL);
};
o.prototype.putByte = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.BYTE);
};
o.prototype.putShort = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.SHORT);
};
o.prototype.putInt = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.INT);
};
o.prototype.putLong = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.LONG);
};
o.prototype.putFloat = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.FLOAT);
};
o.prototype.putDouble = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.DOUBLE);
};
o.prototype.putUtfString = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.UTF_STRING);
};
o.prototype.putText = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.TEXT);
};
o.prototype.putNObject = function(e, t) {
this.putObj(e, t, r.N_OBJECT);
};
o.prototype.putBoolArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.BOOL_ARRAY);
};
o.prototype.putByteArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.BYTE_ARRAY);
};
o.prototype.putShortArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.SHORT_ARRAY);
};
o.prototype.putIntArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.INT_ARRAY);
};
o.prototype.putLongArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.LONG_ARRAY);
};
o.prototype.putFloatArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.FLOAT_ARRAY);
};
o.prototype.putDoubleArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.DOUBLE_ARRAY);
};
o.prototype.putNArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.N_ARRAY);
};
o.prototype.putUtfStringArray = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.UTF_STRING_ARRAY);
};
o.prototype.putUtfString = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.UTF_STRING);
};
o.prototype.putText = function(e, t) {
this._validateKeyValue(e, t) && this.putObj(e, t, r.TEXT);
};
o.prototype.putNObject = function(e, t) {
this.putObj(e, t, r.N_OBJECT);
};
o.prototype.getBool = function(e) {
return this.get(e);
};
o.prototype.getByte = function(e) {
return this.get(e);
};
o.prototype.getShort = function(e) {
return this.get(e);
};
o.prototype.getInt = function(e) {
return this.get(e);
};
o.prototype.getLong = function(e) {
return this.get(e);
};
o.prototype.getFloat = function(e) {
return this.get(e);
};
o.prototype.getDouble = function(e) {
return this.get(e);
};
o.prototype.getUtfString = function(e) {
return this.get(e);
};
o.prototype.getText = function(e) {
return this.get(e);
};
o.prototype.getSObject = function(e) {
return this.get(e);
};
o.prototype.getSArray = function(e) {
return this.get(e);
};
o.prototype.getDoubleArray = function(e) {
return this.get(e);
};
o.prototype.getIntArray = function(e) {
return this.get(e);
};
o.prototype.getByteArray = function(e) {
return this.get(e);
};
o.prototype.getUtfStringArray = function(e) {
return this.get(e);
};
function u() {
this._dataHolder = new Array();
}
u.newInstance = function() {
return new u();
};
u.newFromBinary = function(e) {
let t = new l();
t.initWithInt8Array(e);
return i.binary2array(t);
};
u.prototype.toBinary = function() {
return i.array2binary(this);
};
u.prototype.add = function(e) {
e instanceof n ? this._dataHolder.push(e) : e instanceof o && this.addNObject(e);
};
u.prototype.addObject = function(e, t) {
this._dataHolder.push(new n(t, e));
};
u.prototype.addNull = function() {
this.addObject(null, r.NULL);
};
u.prototype.addBool = function(e) {
this.addObject(e, r.BOOL);
};
u.prototype.addByte = function(e) {
this.addObject(e, r.BYTE);
};
u.prototype.addShort = function(e) {
this.addObject(e, r.SHORT);
};
u.prototype.addInt = function(e) {
this.addObject(e, r.INT);
};
u.prototype.addLong = function(e) {
this.addObject(e, r.LONG);
};
u.prototype.addFloat = function(e) {
this.addObject(e, r.FLOAT);
};
u.prototype.addDouble = function(e) {
this.addObject(e, r.DOUBLE);
};
u.prototype.addUtfString = function(e) {
this.addObject(e, r.UTF_STRING);
};
u.prototype.addNArray = function(e) {
this.addObject(e, r.N_ARRAY);
};
u.prototype.addNObject = function(e) {
this.addObject(e, r.N_OBJECT);
};
u.prototype.get = function(e) {
return this._dataHolder[e];
};
u.prototype.size = function() {
return this._dataHolder.length;
};
function _() {
this.isAvailable = null != console;
this.level = _.LogLevel.INFO;
SmartFoxSDK.debug && (this.level = _.LogLevel.DEBUG);
}
_.LogLevel = {
DEBUG: 0,
INFO: 1,
WARN: 2,
ERROR: 3
};
_.prototype.setLevel = function(e) {
e < _.LogLevel.DEBUG || e > _.LogLevel.ERROR || (this.level = e);
};
_.prototype.debug = function(e) {
this.level == _.LogLevel.DEBUG && console.log(e);
};
_.prototype.info = function(e) {
this.isAvailable && this.level <= _.LogLevel.INFO && console.log(e);
};
_.prototype.warn = function(e) {
this.isAvailable && this.level <= _.LogLevel.WARN && console.log(e);
};
_.prototype.error = function(e) {
this.level == _.Error && console.error(e);
};
let h = {
ArrayUtil: {}
};
h.ArrayUtil.objToArray = function(e) {
var t, s = [];
for (t in e) e.hasOwnProperty(t) && s.push(e[t]);
return s;
};
h.ArrayUtil.removeItem = function(e, t) {
var s = e.indexOf(t);
-1 < s && e.splice(s, 1);
};
h.HashTable = function(e) {
this.length = 0;
this.items = {};
if (null != e) for (var t in e) e.hasOwnProperty(t) && (this.items[t] = e[t], this.length++);
};
h.HashTable.prototype.setItem = function(e, t) {
var s = void 0;
this.hasItem(e) ? s = this.items[e] : this.length++;
this.items[e] = t;
return s;
};
h.HashTable.prototype.getItem = function(e) {
return this.hasItem(e) ? this.items[e] : void 0;
};
h.HashTable.prototype.hasItem = function(e) {
return this.items.hasOwnProperty(e);
};
h.HashTable.prototype.removeItem = function(e) {
let t;
if (this.hasItem(e)) return t = this.items[e], this.length--, delete this.items[e], 
t;
};
h.HashTable.prototype.keys = function() {
var e, t = [];
for (e in this.items) this.hasItem(e) && t.push(e);
return t;
};
h.HashTable.prototype.values = function() {
var e, t = [];
for (e in this.items) this.hasItem(e) && t.push(this.items[e]);
return t;
};
h.HashTable.prototype.each = function(e) {
for (var t in this.items) this.hasItem(t) && e(t, this.items[t]);
};
h.HashTable.prototype.clear = function() {
this.items = {};
this.length = 0;
};
function l() {
var e, t, s, r = 0, n = 0, i = new Array();
this.position = function() {
return r;
};
this.setCurrentPosition = function(e) {
r = e;
};
this.getTempArr = function() {
return e;
};
this.isEnd = function() {
return !(r <= s.byteLength - 1);
};
this.initWithBytes = function(r) {
let n = new ArrayBuffer(r.length);
t = new Int8Array(n);
for (let e = 0; e < r.length; e++) t[e] = r[e];
e = t.buffer;
s = new DataView(t.buffer, 0);
}, this.initWithInt8Array = function(r) {
e = r;
t = new Int8Array(r);
s = new DataView(t.buffer, 0);
};
this.Length = function() {
return n;
};
this.readString = function() {
if (!s) return null;
var t = this.readShort();
if (!t) return null;
if (r < 0 || r > s.byteLength - t) return null;
var n = u(new Uint8Array(e.slice(r, r + t)));
r += t;
return n;
};
this.readText = function() {
if (!s) return null;
var t = this.readInt();
if (!t) return null;
if (r < 0 || r > s.byteLength - t) return null;
var n = u(new Uint8Array(e.slice(r, r + t)));
r += t;
return n;
};
this.readInt = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 4) return null;
var e = s.getInt32(r);
r += 4;
return e;
};
this.readShort = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 2) return null;
var e = s.getInt16(r);
r += 2;
return e;
};
this.readLong = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 8) return null;
var e = s.getFloat64(r);
r += 8;
return e;
};
this.readDouble = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 8) return null;
var e = s.getFloat64(r);
r += 8;
return e;
};
this.readFloat = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 4) return null;
var e = s.getFloat32(r);
r += 4;
return e;
};
this.readBoolean = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 1) return null;
var e = s.getInt8(r);
r += 1;
return e > 0;
};
this.readByte = function() {
if (!s) return null;
if (r < 0 || r > s.byteLength - 1) return null;
var e = s.getInt8(r);
r += 1;
return e;
};
this.readByteArr = function(t) {
for (var s = new l(), n = [], i = 0; i < t; i++) n.push(e[r + i]);
s.initWithInt8Array(n);
r += t;
return s;
};
this.getByteArrayWithBase64 = function() {
return o(this.getArrayBuffer());
};
this.getArrayWrite = function() {
return i;
};
this.getArrayBuffer = function() {
for (var e = 0, t = i, s = 0; s < t.length; s++) {
"str" == t[s].t && (e += t[s].val.length + 2);
"int" == t[s].t && (e += 4);
"sho" == t[s].t && (e += 2);
"dou" == t[s].t && (e += 8);
"flo" == t[s].t && (e += 4);
"boo" == t[s].t && (e += 1);
"byt" == t[s].t && (e += 1);
}
var o = new ArrayBuffer(e), a = new DataView(o, 0);
r = 0;
for (s = 0; s < t.length; s++) {
if ("str" == t[s].t) {
a.setInt16(r, t[s].val.length);
r += 2;
for (var u = 0; u < t[s].val.length; u++) a.setUint8(r + u, t[s].val[u]);
r += t[s].val.length;
}
if ("txt" == t[s].t) {
a.setInt16(r, t[s].val.length);
r += 4;
for (u = 0; u < t[s].val.length; u++) a.setUint8(r + u, t[s].val[u]);
r += t[s].val.length;
}
if ("int" == t[s].t) {
a.setInt32(r, t[s].val);
r += 4;
}
if ("sho" == t[s].t) {
a.setInt16(r, t[s].val);
r += 2;
}
if ("dou" == t[s].t) {
a.setFloat64(r, t[s].val);
r += 8;
}
if ("flo" == t[s].t) {
a.setFloat32(r, t[s].val);
r += 4;
}
if ("boo" == t[s].t) {
var _ = 1 == t[s].val ? 1 : 0;
a.setInt8(r, _);
r += 1;
}
if ("byt" == t[s].t) {
a.setInt8(r, t[s].val);
r += 1;
}
}
n = r;
return a.buffer;
};
this.writeString = function(e) {
i.push({
t: "str",
val: a(e)
});
};
this.writeText = function(e) {
i.push({
t: "txt",
val: a(e)
});
};
this.writeInt = function(e) {
i.push({
t: "int",
val: e
});
};
this.writeShort = function(e) {
i.push({
t: "sho",
val: e
});
};
this.writeDouble = function(e) {
i.push({
t: "dou",
val: e
});
};
this.writeLong = function(e) {
i.push({
t: "dou",
val: e
});
};
this.writeFloat = function(e) {
i.push({
t: "flo",
val: e
});
};
this.writeBoolean = function(e) {
i.push({
t: "boo",
val: e
});
};
this.writeByte = function(e) {
i.push({
t: "byt",
val: e
});
};
this.writeBytes = function(e) {
this.writeInt(e.length);
for (var t = 0; t < e.length; t++) i.push({
t: "byt",
val: e[t]
});
};
this.UTF8toByteArray = function(e) {
return a(e);
};
function o(e) {
for (var t, s = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(e), i = n.byteLength, o = i % 3, a = i - o, u = 0; u < a; u += 3) s += r[(16515072 & (t = n[u] << 16 | n[u + 1] << 8 | n[u + 2])) >> 18] + r[(258048 & t) >> 12] + r[(4032 & t) >> 6] + r[63 & t];
1 == o ? s += r[(252 & (t = n[a])) >> 2] + r[(3 & t) << 4] + "==" : 2 == o && (s += r[(64512 & (t = n[a] << 8 | n[a + 1])) >> 10] + r[(1008 & t) >> 4] + r[(15 & t) << 2] + "=");
return s;
}
function a(e) {
for (var t = [], s = 0; s < e.length; s++) {
var r = e.charCodeAt(s);
if (r < 128) t.push(r); else if (r < 2048) t.push(192 | r >> 6, 128 | 63 & r); else if (r < 55296 || r >= 57344) t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r); else {
s++;
r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(s));
t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r);
}
}
return t;
}
function u(e) {
var t, s = "";
for (t = 0; t < e.length; t++) {
var r = e[t];
if (r < 128) s += String.fromCharCode(r); else if (r > 191 && r < 224) {
s += String.fromCharCode((31 & r) << 6 | 63 & e[t + 1]);
t += 1;
} else if (r > 223 && r < 240) {
s += String.fromCharCode((15 & r) << 12 | (63 & e[t + 1]) << 6 | 63 & e[t + 2]);
t += 2;
} else {
var n = ((7 & r) << 18 | (63 & e[t + 1]) << 12 | (63 & e[t + 2]) << 6 | 63 & e[t + 3]) - 65536;
s += String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
t += 3;
}
}
return s;
}
}
function c(e) {
this._log = new _();
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
if (null != e) {
this.config = e;
null != this.config && this.config.debug && (this.debug = !0);
this.debug = this.config.debug;
this.config.debug && this._log.setLevel(_.LogLevel.DEBUG);
}
this.lastJoinedRoom = this.mySelf = this.buddyManager = this.userManager = this.roomManager = this.sessionToken = null;
this._controllers = {};
this.groups = {};
this._initialize();
this._log.debug("SmartFox instance ready");
}
c.prototype._initialize = function() {
this._inited || (this._socketEngine = new c.SocketEngine(this), this._eventDispatcher = new c.EventDispatcher(this), 
this._eventExtensionDispatcher = new c.EventDispatcher(), this._socketEngine.addEventListener(c.SocketEvent.CONNECT, this._onSocketConnect, this), 
this._socketEngine.addEventListener(c.SocketEvent.DISCONNECT, this._onSocketDisconnect, this), 
this._socketEngine.addEventListener(c.SocketEvent.DATA, this._onSocketData, this), 
this._socketEngine.addEventListener(c.SocketEvent.IOERROR, this._onSocketIOError, this), 
this._controllers[0] = new c.Controllers.SystemController(this), this._controllers[1] = new c.Controllers.ExtensionController(this), 
this._inited = !0, this._reset());
};
c.prototype.getCurrentZone = function() {
return this._currentZone;
};
c.prototype.getLastJoinedRoom = function() {
return this.lastJoinedRoom;
};
c.prototype.getLogger = function() {
return this._log;
};
c.prototype._reset = function(e) {
this._inited = !1;
this.userManager = new c.Managers.GlobalUserManager(this);
this.roomManager = new c.Managers.RoomManager(this);
this.groups = {};
this._isJoining = !1;
this.mySelf = this.lastJoinedRoom = this._currentZone = null;
e && (this.sessionToken = null);
};
c.prototype.getGroups = function() {
return this.groups.id;
};
c.prototype._handleLogout = function() {
this._reset(!1);
};
c.prototype._handleClientDisconnection = function(e) {
this.isConnected() && this._socketEngine.disconnect(e);
};
c.prototype._handleHandShake = function(e) {
let t = e.get(c.Controllers.KEY_ERROR_CODE);
null == t ? (this.sessionToken = e.get(c.Requests.System.HandshakeRequest.KEY_SESSION_TOKEN), 
this._socketEngine._maxMessageSize = e.get(c.Requests.System.HandshakeRequest.KEY_MAX_MESSAGE_SIZE), 
this._socketEngine._isReconnecting ? this._socketEngine._isReconnecting = !1 : this._dispatchEvent(c.Event.CONNECTION, {
success: !0
})) : (e = {
success: !1,
errorMessage: c.ErrorCodes.getErrorMessage(t, e.get(c.Controllers.KEY_ERROR_PARAMS)),
errorCode: t
}, this._dispatchEvent(c.Event.CONNECTION, e));
};
c.prototype.getRoomById = function(e) {
return this.roomManager.getRoomById(e);
};
c.prototype.removeRoomById = function(e) {
this.roomManager._removeRoomById(e);
};
c.prototype.getRoomByName = function(e) {
return this.roomManager.getRoomByName(e);
};
c.prototype.getRoomList = function() {
return this.roomManager.getRoomList();
};
c.prototype.getRoomFromGroup = function(e) {
return this.roomManager.getRoomListFromGroup(e);
};
c.prototype.getRoomGroups = function() {
return this.roomManager.getRoomGroups();
};
c.prototype.getJoinedRooms = function() {
return this.roomManager.getJoinedRooms();
};
c.prototype.initConfig = function(e) {
if (null != e) {
this.config = e;
null != this.config && this.config.debug && (this.debug = !0);
this.debug = this.config.debug;
this.config.debug && this._log.setLevel(_.LogLevel.DEBUG);
}
};
c.SocketEngine = function(e) {
this._smartFox = e;
this._socket = null;
this.isConnected = !1;
this.isConnecting = !1;
this._socket = null;
this._controller = {};
this._maxMessageSize = 1e4;
this.reconnectionSeconds = 0;
this._reconnectionDelayMillis = 1e3;
this._attemptingReconnection = this._isReconnecting = !1;
this._eventDispatcher = new c.EventDispatcher();
this._disconnectionReason = c.ClientDisconnectionReason.UNKNOWN;
this._log = e._log;
};
c.SocketEngine.prototype.connect = function(e, t, s) {
var r = "ws://";
null != s && s && (r = "wss://");
var n = r + e + ":" + t + "/";
this.isConnected ? this._log.error("Connection is already active") : this.isConnecting ? this._log.error("A connection attempt is already in progress") : (this.isConnecting = !0, 
this._socket = new WebSocket(n, [], "cacert.pem"), this._socket.binaryType = "arraybuffer", 
this._socket._scope = this, this._socket.onopen = this._onSocketConnect, this._socket.onclose = this._onSocketDisconnect, 
this._socket.onmessage = this._onSocketData, this._socket.onerror = this._onSocketError);
};
c.SocketEngine.prototype._onSocketConnect = function() {
this._scope.isConnected = !0;
this._scope.isConnecting = !1;
this._scope._log.debug("SOCKET CONNECTION SUCCESS");
this._scope._eventDispatcher.dispatchEvent(c.SocketEvent.CONNECT, {
success: !0,
isReconnection: this._scope._attemptingReconnection
});
};
c.SocketEngine.prototype.disconnect = function(e) {
this._disconnectionReason = e;
this._socket && this._socket.close();
};
c.SocketEngine.prototype._onSocketData = function(e) {
this._scope._eventDispatcher.dispatchEvent(c.SocketEvent.DATA, e.data);
};
c.SocketEngine.prototype._onSocketDisconnect = function() {
this._scope.isConnected = !1;
if (this._scope.isConnecting) {
this._scope.isConnecting = !1;
var e = {
success: !1,
isReconnection: this._scope._attemptingReconnection
};
this._scope._eventDispatcher.dispatchEvent(c.SocketEvent.CONNECT, e);
} else e = {
reason: this._scope._disconnectionReason
}, this._scope._eventDispatcher.dispatchEvent(c.SocketEvent.DISCONNECT, e), this._scope._disconnectionReason = c.ClientDisconnectionReason.UNKNOWN;
};
c.SocketEngine.prototype._onSocketError = function(e) {
this._scope._eventDispatcher.dispatchEvent(c.SocketEvent.IOERROR, e.data);
};
c.SocketEngine.prototype.addEventListener = function(e, t, s) {
this._eventDispatcher.addEventListener(e, t, s);
};
c.SocketEngine.prototype.removeEventListener = function(e, t) {
this._eventDispatcher.removeEventListener(e, t);
};
c.SocketEngine.prototype.addController = function(e, t) {
null == this._controller[e] && (this._controller[e] = t);
};
c.SocketEngine.prototype.removeController = function(e) {
this._controller(e);
};
c.SocketEngine.prototype.send = function(e) {
let t = o.newInstance();
t.putByte(c.Controllers.CONTROLLER_ID, e.getTargetController());
t.putShort(c.Controllers.ACTION_ID, e.getId());
t.putNObject(c.Controllers.PARAM_ID, e._reqObj);
let s = t.toBinary().getArrayBuffer();
this._socket.send(s);
};
c.DebugHelper = {};
c.DebugHelper.getDump = function(e) {
var t = [];
(function e(t, s, r) {
var n = null;
c.DebugHelper._getTabs(r);
for (var i in t) {
var o = t[i];
if (null == o) n = "Null"; else {
var a = o.constructor, u = void 0;
a === Array || a === Object ? (n = null, u = a === Array ? "[Array]" : "[Object]", 
e(o, s, r + 1)) : n = o.constructor === Number ? "Num" : o.constructor === Boolean ? "Bool" : "SObject" === o.constructor.name ? "SObject" : o.constructor === String ? "Str" : "Unsupported";
}
let _ = " (" + n + ")";
"SObject" === n && (_ = n = o.getDump());
s.push(c.DebugHelper._getTabs(r) + i + ": " + (null == u ? o : u) + (null == n ? "" : _));
}
})(e, t, 0);
return c.DebugHelper._prettyPrint(t);
};
c.DebugHelper._getTabs = function(e) {
if (0 >= e) return "";
if (1 == e) return "\t";
for (var t = "", s = 0; s < e; s++) t += "\t";
return t;
};
c.DebugHelper._prettyPrint = function(e) {
for (var t = "", s = e.length - 1; -1 < s; s--) t += e[s] + "\n";
return t;
};
let R = 0, p = 1;
c.Requests = {};
c.Requests.Game = {};
c.Requests.Handshake = 0;
c.Requests.Login = 1;
c.Requests.Logout = 2;
c.Requests.JoinRoom = 4;
c.Requests.CreateRoom = 6;
c.Requests.GenericMessage = 7;
c.Requests.ChangeRoomName = 8;
c.Requests.ChangeRoomPassword = 9;
c.Requests.SetRoomVariables = 11;
c.Requests.SetUserVariables = 12;
c.Requests.CallExtension = 13;
c.Requests.LeaveRoom = 14;
c.Requests.SubscribeRoomGroup = 15;
c.Requests.UnsubscribeRoomGroup = 16;
c.Requests.SpectatorToPlayer = 17;
c.Requests.PlayerToSpectator = 18;
c.Requests.ChangeRoomCapacity = 19;
c.Requests.KickUser = 24;
c.Requests.BanUser = 25;
c.Requests.ManualDisconnection = 26;
c.Requests.FindRooms = 27;
c.Requests.FindUsers = 28;
c.Requests.PingPong = 29;
c.Requests.InitBuddyList = 200;
c.Requests.AddBuddy = 201;
c.Requests.BlockBuddy = 202;
c.Requests.RemoveBuddy = 203;
c.Requests.SetBuddyVariables = 204;
c.Requests.GoOnline = 205;
c.Requests.InviteUsers = 300;
c.Requests.InvitationReply = 301;
c.Requests.CreateGame = 302;
c.Requests.QuickJoinGame = 303;
c.Requests.ClientDisconnectionReason = 1005;
c.Requests.getRequestNameFromId = function(e) {
for (var t in c.Requests) if (c.Requests[t] == e) return t;
return "ActionID: " + e;
};
c.Requests.RoomSettings = t.Class.extend({
ctor(e) {
this.name = e;
this.password = "";
this.groupId = "default";
this.isGame = !1;
this.maxUsers = 10;
this.maxSpectators = 0;
this.maxVariables = 5;
this.variables = [];
this.extension = this.events = this.permissions = null;
}
});
c.Requests.Game.GameSettings = c.Requests.RoomSettings.extend({
ctor(e) {
this._super(e);
this.isPublic = !0;
this.minPlayersToStartGame = 2;
this.searchableRooms = this.invitedPlayers = null;
this.invitationExpiryTime = 15;
this.leaveLastJoinedRoom = !0;
this.notifyGameStarted = !1;
this.invitationParams = this.spectatorMatchExpression = this.playerMatchExpression = null;
}
});
c.Requests.RoomPermissions = function() {
this.allowPasswordStateChange = this.allowNameChange = !1;
this.allowPublicMessages = !0;
this.allowResizing = !1;
};
c.Requests.RoomEvents = function() {
this.allowUserVariablesUpdate = this.allowUserExit = this.allowUserEnter = this.allowUserCountChange = !1;
};
c.Requests.RoomExtension = function(e, t) {
this.id = e;
this.className = t;
this.propertiesFile = "";
};
c.Requests.System = {};
c.Exceptions = {};
c.Exceptions.Error = t.Class.extend({
ctor: function(e) {
this._message = e;
},
getMessage: function() {
return this._message;
}
});
c.Exceptions.ValidationError = c.Exceptions.Error.extend({
ctor: function(e, t) {
this._super(e);
this._errors = t;
},
getErrors: function() {
return this._errors;
}
});
c.Requests._BaseRequest = t.Class.extend({
ctor: function(e) {
this._reqObj = o.newInstance();
this._id = e;
this._idcontroller = 0;
this._targetController = R;
this._log = new _();
},
getTargetController: function() {
return this._targetController;
},
getId: function() {
return this._id;
},
getMessage: function() {
return {
a: this._id,
c: this._targetController,
p: this._reqObj
};
},
getDump: function() {
return this._reqObj.getDump();
},
validate: function() {
this._log.error("BaseRequest.validate = no child-class implementation found!");
},
execute: function() {
this._log.error("BaseRequest.execute = no child-class implementation found!");
}
});
c.Requests.System.ExtensionRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.CallExtension);
this._targetController = p;
this._extCmd = e;
this._params = null;
null != t && (this._params = t);
this._roomId = null;
null != s && (this._roomId = s);
null == this._params && (this._params = o.newInstance());
},
validate: function() {
var e = [];
(null == this._extCmd || 0 == this._extCmd.length) && e.push("Missing extension command");
if (0 < e.length) throw new c.Exceptions.ValidationError("ExtensionRequest Error", e);
},
execute: function() {
this._reqObj.putUtfString(this.constructor.KEY_CMD, this._extCmd);
null != this._roomId && this._roomId >= 0 && this._reqObj.putInt(this.constructor.KEY_ROOM, this._roomId);
null != this._params && this._reqObj.putNObject(this.constructor.KEY_PARAMS, this._params);
}
});
c.Requests.System.ExtensionRequest.KEY_CMD = "c";
c.Requests.System.ExtensionRequest.KEY_PARAMS = "p";
c.Requests.System.ExtensionRequest.KEY_ROOM = "r";
c.Requests.System.HandshakeRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t) {
this._super(c.Requests.Handshake);
this._apiVersion = e;
this._reconnectionToken = t;
this._reqObj.putUtfString(this.constructor.KEY_API, this._apiVersion);
this._reqObj.putUtfString(this.constructor.KEY_CLIENT_TYPE, "");
null != this._reconnectionToken && this._reqObj.putUtfString(this.constructor.KEY_RECONNECTION_TOKEN, this._reconnectionToken);
},
validate: function() {},
execute: function() {}
});
c.Requests.System.HandshakeRequest.KEY_SESSION_TOKEN = "tk";
c.Requests.System.HandshakeRequest.KEY_API = "api";
c.Requests.System.HandshakeRequest.KEY_COMPRESSION_THRESHOLD = "ct";
c.Requests.System.HandshakeRequest.KEY_RECONNECTION_TOKEN = "rt";
c.Requests.System.HandshakeRequest.KEY_CLIENT_TYPE = "cl";
c.Requests.System.HandshakeRequest.KEY_MAX_MESSAGE_SIZE = "ms";
c.Requests.System.LogoutRequest = c.Requests._BaseRequest.extend({
ctor: function() {
this._super(c.Requests.Logout);
},
validate: function() {},
execute: function() {}
});
c.Requests.System.LoginRequest = c.Requests._BaseRequest.extend({
ctor(e, t, s, r) {
this._super(c.Requests.Login);
this._un = e;
this._pwd = t;
this._params = r;
this._zn = s;
},
validate(e) {},
execute(e) {
e._log.debug(this._zn + this._pwd + this._un);
this._reqObj.putUtfString(this.constructor.KEY_ZONE_NAME, this._zn);
this._reqObj.putUtfString(this.constructor.KEY_USER_NAME, this._un);
this._reqObj.putUtfString(this.constructor.KEY_PASSWORD, 0 < this._pwd.length ? this._pwd : "");
null != this._params && null != this._params && this._reqObj.putNObject(this.constructor.KEY_PARAMS, this._params);
}
});
c.Requests.System.LoginRequest.KEY_ZONE_NAME = "zn";
c.Requests.System.LoginRequest.KEY_USER_NAME = "un";
c.Requests.System.LoginRequest.KEY_PASSWORD = "pw";
c.Requests.System.LoginRequest.KEY_PARAMS = "p";
c.Requests.System.LoginRequest.KEY_PRIVILEGE_ID = "pi";
c.Requests.System.LoginRequest.KEY_ID = "id";
c.Requests.System.LoginRequest.KEY_ROOMLIST = "rl";
c.Requests.System.LoginRequest.KEY_RECONNECTION_SECONDS = "rs";
c.Requests.System.JoinRoomRequest = c.Requests._BaseRequest.extend({
ctor(e, t, s, r) {
this._super(c.Requests.JoinRoom);
"string" == typeof e ? this._rName = e : "number" == typeof e ? this._rId = e : e instanceof c.Entities.Room && (this._rId = e.id, 
this._rName = e.name);
this._password = t;
this._roomIdToLeave = s;
this._asSpectator = "boolean" == typeof r && r;
},
validate: function() {
if (null == this._rId && null == this._rName) throw new c.Exceptions.ValidationError("Join Room Error", [ "Missing id or name Room" ]);
},
execute: function(e) {
e._isJoining = !0;
0 <= this._rId ? this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._rId) : null != this._rName && this._reqObj.putUtfString(this.constructor.KEY_ROOM_NAME, this._rName);
null != this._password && this._reqObj.putUtfString(this.constructor.KEY_PASS, this._password);
null != this._roomIdToLeave && this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE, this._roomIdToLeave);
this._asSpectator && this._reqObj.putBool(this.constructor.KEY_AS_SPECTATOR, this._asSpectator);
}
});
c.Requests.System.JoinRoomRequest.KEY_ROOM = "r";
c.Requests.System.JoinRoomRequest.KEY_USER_LIST = "ul";
c.Requests.System.JoinRoomRequest.KEY_ROOM_NAME = "n";
c.Requests.System.JoinRoomRequest.KEY_ROOM_ID = "i";
c.Requests.System.JoinRoomRequest.KEY_PASS = "p";
c.Requests.System.JoinRoomRequest.KEY_ROOM_TO_LEAVE = "rl";
c.Requests.System.JoinRoomRequest.KEY_AS_SPECTATOR = "sp";
c.Requests.System.LeaveRoomRequest = c.Requests._BaseRequest.extend({
ctor: function(e) {
this._super(c.Requests.LeaveRoom);
this._room = e;
},
validate: function(e) {
if (1 > e.getJoinedRooms().length) throw new c.Exceptions.ValidationError("LeaveRoomRequest Error", [ "You are not joined in any room" ]);
},
execute: function() {
null != this._room && this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id);
}
});
c.Requests.System.LeaveRoomRequest.KEY_ROOM_ID = "r";
c.Requests.System.SubscribeRoomGroup = c.Requests._BaseRequest.extend({
ctor: function(e) {
this._super(c.Requests.SubscribeRoomGroup);
this._groupId = e;
},
validate: function() {},
execute: function() {
null != this._groupId && this._reqObj.putUtfString("g", this._groupId);
}
});
c.Requests.System.UnsubscribeRoomGroupRequest = c.Requests._BaseRequest.extend({
ctor: function(e) {
this._super(c.Requests.UnsubscribeRoomGroup);
this._groupId = e;
},
validate: function() {},
execute: function() {
null != this._groupId && this._reqObj.putUtfString(this.constructor.KEY_GROUP_ID, this._groupId);
}
});
c.Requests.System.UnsubscribeRoomGroupRequest.KEY_GROUP_ID = "g";
c.Requests.System.SpectatorToPlayerRequest = c.Requests._BaseRequest.extend({
ctor(e) {
this._super(c.Requests.SpectatorToPlayer);
this._room = e;
},
validate(e) {
if (1 > e.getJoinedRooms().length) throw new c.Exceptions.ValidationError("SpectatorToPlayerRequest Error", [ "You are not joined in any room" ]);
},
execute(e) {
null == this._room && (this._room = e.lastJoinedRoom);
this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id);
}
});
c.Requests.System.SpectatorToPlayerRequest.KEY_ROOM_ID = "r";
c.Requests.System.SpectatorToPlayerRequest.KEY_USER_ID = "u";
c.Requests.System.SpectatorToPlayerRequest.KEY_PLAYER_ID = "p";
c.Requests.System.PlayerToSpectatorRequest = c.Requests._BaseRequest.extend({
ctor(e) {
this._super(c.Requests.PlayerToSpectator);
this._room = e;
},
validate(e) {
if (1 > e.getJoinedRooms().length) throw new c.Exceptions.ValidationError("PlayerToSpectatorRequest Error", [ "You are not joined in any room" ]);
},
execute(e) {
null == this._room && (this._room = e.lastJoinedRoom);
this._reqObj.putInt(this.constructor.KEY_ROOM_ID, this._room.id);
}
});
c.Requests.System.PlayerToSpectatorRequest.KEY_ROOM_ID = "r";
c.Requests.System.PlayerToSpectatorRequest.KEY_USER_ID = "u";
c.Requests.Game.QuickJoinGameRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.QuickJoinGame);
this._matchExpression = e;
this._whereToSearch = t;
this._roomToLeave = s;
},
validate: function() {
var e = [];
null == this._whereToSearch || 1 > this._whereToSearch.length ? e.push("Missing lis of Rooms or Group name where to search the game to join") : this._whereToSearch.length > this.constructor.MAX_ROOMS && e.push("Too many Rooms specified in list where to search the game to join; client limit is: " + this.constructor.MAX_ROOMS);
if (0 < e.length) throw new c.Exceptions.ValidationError("CreateSFSGameRequest Error", e);
},
execute: function() {
if ("string" == typeof this._whereToSearch[0]) this._reqObj.putUtfStringArray(this.constructor.KEY_GROUP_LIST, [ this._whereToSearch ]); else {
if (!(this._whereToSearch[0] instanceof c.Entities.Room)) throw new c.Exceptions.ValidationError("Invalid type in whereToSearch parameter");
for (var e = [], t = 0; t < this._whereToSearch.length; t++) {
var s = this._whereToSearch[t];
s instanceof c.Entities.Room && e.push(s.id);
}
this._reqObj.putIntArray(this.constructor.KEY_ROOM_LIST, e);
}
null != this._roomToLeave && this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE, this._roomToLeave.id);
null != this._matchExpression && this._reqObj.putNArray(this.constructor.KEY_MATCH_EXPRESSION, this._matchExpression.toNArray());
}
});
c.Requests.Game.QuickJoinGameRequest.KEY_ROOM_LIST = "rl";
c.Requests.Game.QuickJoinGameRequest.KEY_GROUP_LIST = "gl";
c.Requests.Game.QuickJoinGameRequest.KEY_ROOM_TO_LEAVE = "tl";
c.Requests.Game.QuickJoinGameRequest.KEY_MATCH_EXPRESSION = "me";
c.Requests.Game.QuickJoinGameRequest.MAX_ROOMS = 32;
c.Requests.System.FindRoomsRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.FindRooms);
null == s && (s = 0);
this._matchExpr = e;
this._groupId = t;
this._limit = s;
},
validate: function() {
var e = [];
null == this._matchExpr && e.push("Missing match expression");
if (0 < e.length) throw new c.Exceptions.ValidationError("FindRoomsRequest Error", e);
},
execute: function() {
this._reqObj.putNArray(this.constructor.KEY_EXPRESSION, this._matchExpr.toNArray());
null != this._groupId && this._reqObj.putUtfString(this.constructor.KEY_GROUP, this._groupId);
0 < this._limit && this._reqObj.putShort(this.constructor.KEY_LIMIT, this._limit);
}
});
c.Requests.System.FindRoomsRequest.KEY_EXPRESSION = "e";
c.Requests.System.FindRoomsRequest.KEY_GROUP = "g";
c.Requests.System.FindRoomsRequest.KEY_LIMIT = "l";
c.Requests.System.FindRoomsRequest.KEY_FILTERED_ROOMS = "fr";
c.Requests.System.FindUsersRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.FindUsers);
null == s && (s = 0);
this._matchExpr = e;
this._target = t;
this._limit = s;
},
validate: function() {
var e = [];
null == this._matchExpr && e.push("Missing match expression");
if (0 < e.length) throw new c.Exceptions.ValidationError("FindUsersRequest Error", e);
},
execute: function() {
this._reqObj.putNArray(this.constructor.KEY_EXPRESSION, this._matchExpr.toNArray());
null != this._target && (this._target instanceof c.Entities.Room ? this._reqObj.putInt(this.constructor.KEY_ROOM, this._target.id) : "string" == typeof this._target ? this._reqObj.putUtfString(this.constructor.KEY_GROUP, this._target) : this._log.warn("Unsupport target type for FindUsersRequest: " + this._target));
0 < this._limit && this._reqObj.putShort(this.constructor.KEY_LIMIT, this._limit);
}
});
c.Requests.System.FindUsersRequest.KEY_EXPRESSION = "e";
c.Requests.System.FindUsersRequest.KEY_GROUP = "g";
c.Requests.System.FindUsersRequest.KEY_ROOM = "r";
c.Requests.System.FindUsersRequest.KEY_LIMIT = "l";
c.Requests.System.FindUsersRequest.KEY_FILTERED_USERS = "fu";
c.Requests.System.PingPongRequest = c.Requests._BaseRequest.extend({
ctor: function() {
this._super(c.Requests.PingPong);
},
validate: function() {},
execute: function() {}
});
c.Requests.Game.InviteUsersRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.InviteUsers);
this._invitedUsers = e;
this._secondsForAnswer = t;
this._params = s;
null == t && (this._secondsForAnswer = this.constructor.MIN_EXPIRY_TIME);
null == s && (this._params = null);
},
validate: function() {
var e = [];
(null == this._invitedUsers || 1 > this._invitedUsers.length) && e.push("No invitation(s) to send");
this._invitedUsers.length > this.constructor.MAX_INVITATIONS_FROM_CLIENT_SIDE && e.push("Too many invitations; " + this.constructor.MAX_INVITATIONS_FROM_CLIENT_SIDE + " max are allowed from client side");
(this._secondsForAnswer < this.constructor.MIN_EXPIRY_TIME || this._secondsForAnswer > this.constructor.MAX_EXPIRY_TIME) && e.push("secondsForAnswer value is out of range (min: " + this.constructor.MIN_EXPIRY_TIME + "; max: " + this.constructor.MAX_EXPIRY_TIME + ")");
if (0 < e.length) throw new c.Exceptions.ValidationError("InviteUsersRequest Error", e);
},
execute: function(e) {
var t, s = [];
for (t in this._invitedUsers) {
var r = this._invitedUsers[t];
r instanceof c.Entities.User && r != e.mySelf && s.push(r.id);
}
this._reqObj.putIntArray(this.constructor.KEY_INVITED_USERS, s);
this._reqObj.putShort(this.constructor.KEY_TIME, this._secondsForAnswer);
null != this._params && this._reqObj.putNObject(this.constructor.KEY_PARAMS, this._params);
}
});
c.Requests.Game.InviteUsersRequest.KEY_USER = "u";
c.Requests.Game.InviteUsersRequest.KEY_USER_ID = "ui";
c.Requests.Game.InviteUsersRequest.KEY_INVITATION_ID = "ii";
c.Requests.Game.InviteUsersRequest.KEY_TIME = "t";
c.Requests.Game.InviteUsersRequest.KEY_PARAMS = "p";
c.Requests.Game.InviteUsersRequest.KEY_INVITEE_ID = "ee";
c.Requests.Game.InviteUsersRequest.KEY_INVITED_USERS = "iu";
c.Requests.Game.InviteUsersRequest.KEY_REPLY_ID = "ri";
c.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE = 8;
c.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME = 5;
c.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME = 300;
c.Requests.Game.InvitationReplyRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.InvitationReply);
this._invitation = e;
this._reply = t;
this._params = s;
},
validate: function() {
var e = [];
null == this._invitation && e.push("Missing invitation object");
if (0 < e.length) throw new c.Exceptions.ValidationError("InvitationReplyRequest Error", e);
},
execute: function() {
this._reqObj.putInt(this.constructor.KEY_INVITATION_ID, this._invitation.id);
this._reqObj.putByte(this.constructor.KEY_INVITATION_REPLY, this._reply);
null != this._params && this._reqObj.putNObject(this.constructor.KEY_INVITATION_PARAMS, this._params);
}
});
c.Requests.Game.CreateGameRequest = c.Requests._BaseRequest.extend({
init: function(e) {
this._super(c.Requests.CreateGame);
this._settings = e;
this._createRoomRequest = new c.Requests.System.CreateRoomRequest(e, !1, null);
},
validate: function(e) {
var t = [];
try {
this._createRoomRequest.validate(e);
} catch (e) {
t = e.getErrors();
}
this._settings.minPlayersToStartGame > this._settings.maxUsers && t.push("Minimum number of players to start the game can't be greater than the Room's maximum number of users");
(this._settings.invitationExpiryTime < c.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME || this._settings.invitationExpiryTime > c.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME) && t.push("Invitation expiration time value is out of range (min: " + c.Requests.Game.InviteUsersRequest.MIN_EXPIRY_TIME + "; max: " + c.Requests.Game.InviteUsersRequest.MAX_EXPIRY_TIME + ")");
null != this._settings.invitedPlayers && this._settings.invitedPlayers.length > c.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE && t.push("Can't invite more than " + c.Requests.Game.InviteUsersRequest.MAX_INVITATIONS_FROM_CLIENT_SIDE + " players from client side");
if (0 < t.length) throw new c.Exceptions.ValidationError("CreateSFSGameRequest Error", t);
},
execute: function(e) {
this._createRoomRequest.execute(e);
this._reqObj = this._createRoomRequest._reqObj;
this._reqObj.putBool(this.constructor.KEY_IS_PUBLIC, this._settings.isPublic);
this._reqObj.putInt(this.constructor.KEY_MIN_PLAYERS, this._settings.minPlayersToStartGame);
this._reqObj.putDouble(this.constructor.KEY_INVITATION_EXPIRY, this._settings.invitationExpiryTime);
this._reqObj[this.constructor.KEY_LEAVE_ROOM] = this._settings.leaveLastJoinedRoom;
this._reqObj[this.constructor.KEY_NOTIFY_GAME_STARTED] = this._settings.notifyGameStarted;
null != this._settings.playerMatchExpression && (this._reqObj[this.constructor.KEY_PLAYER_MATCH_EXP] = this._settings.playerMatchExpression._toArray());
null != this._settings.spectatorMatchExpression && (this._reqObj[this.constructor.KEY_SPECTATOR_MATCH_EXP] = this._settings.spectatorMatchExpression._toArray());
if (null != this._settings.invitedPlayers) {
var t;
e = [];
for (t in this._settings.invitedPlayers) {
var s = this._settings.invitedPlayers[t];
s instanceof c.Entities.User && e.push(s.id);
}
this._reqObj[this.constructor.KEY_INVITED_PLAYERS] = e;
}
null != this._settings.searchableRooms && (this._reqObj[this.constructor.KEY_SEARCHABLE_ROOMS] = this._settings.searchableRooms);
null != this._settings.invitationParams && (this._reqObj[this.constructor.KEY_INVITATION_PARAMS] = this._settings.invitationParams);
}
});
c.Requests.Game.CreateGameRequest.KEY_IS_PUBLIC = "gip";
c.Requests.Game.CreateGameRequest.KEY_MIN_PLAYERS = "gmp";
c.Requests.Game.CreateGameRequest.KEY_INVITED_PLAYERS = "ginp";
c.Requests.Game.CreateGameRequest.KEY_SEARCHABLE_ROOMS = "gsr";
c.Requests.Game.CreateGameRequest.KEY_PLAYER_MATCH_EXP = "gpme";
c.Requests.Game.CreateGameRequest.KEY_SPECTATOR_MATCH_EXP = "gsme";
c.Requests.Game.CreateGameRequest.KEY_INVITATION_EXPIRY = "gie";
c.Requests.Game.CreateGameRequest.KEY_LEAVE_ROOM = "glr";
c.Requests.Game.CreateGameRequest.KEY_NOTIFY_GAME_STARTED = "gns";
c.Requests.Game.CreateGameRequest.KEY_INVITATION_PARAMS = "ip";
c.Requests.System.CreateRoomRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t, s) {
this._super(c.Requests.CreateRoom);
this._settings = e;
this._autoJoin = "boolean" == typeof t && t;
this._roomToLeave = s;
},
validate: function() {
var e = [];
(null == this._settings.name || 0 == this._settings.name.length) && e.push("Missing Room name");
0 >= this._settings.maxUsers && e.push("Max number of users must be > 0");
null != this._settings.extension && ((null == this._settings.extension.className || 0 == this._settings.extension.className.length) && e.push("Missing Extension class name"), 
(null == this._settings.extension.id || 0 == this._settings.extension.id.length) && e.push("Missing Extension id"));
if (0 < e.length) throw new c.Exceptions.ValidationError("CreateRoomRequest Error", e);
},
execute: function() {
this._reqObj.putUtfString(this.constructor.KEY_NAME, this._settings.name);
this._reqObj.putUtfString(this.constructor.KEY_GROUP_ID, this._settings.groupId);
this._reqObj.putUtfString(this.constructor.KEY_PASSWORD, this._settings.password);
this._reqObj.putBool(this.constructor.KEY_ISGAME, this._settings.isGame);
this._reqObj.putShort(this.constructor.KEY_MAXUSERS, this._settings.maxUsers);
this._reqObj.putShort(this.constructor.KEY_MAXSPECTATORS, this._settings.maxSpectators);
this._reqObj.putShort(this.constructor.KEY_MAXVARS, this._settings.maxVariables);
if (null != this._settings.variables && 0 < this._settings.variables.length) {
var e = u.newInstance();
for (let s in this._settings.variables) {
var t = this._settings.variables[s];
t instanceof c.Entities.Variables.RoomVariable && e.addNArray(t.toNArray());
}
this._reqObj.putNArray(this.constructor.KEY_ROOMVARS, e);
}
null != this._settings.permissions && ((e = []).push(this._settings.permissions.allowNameChange), 
e.push(this._settings.permissions.allowPasswordStateChange), e.push(this._settings.permissions.allowPublicMessages), 
e.push(this._settings.permissions.allowResizing), this._reqObj.putBoolArray(this.constructor.KEY_PERMISSIONS, e));
null != this._settings.events && ((e = []).push(this._settings.events.allowUserEnter), 
e.push(this._settings.events.allowUserExit), e.push(this._settings.events.allowUserCountChange), 
e.push(this._settings.events.allowUserVariablesUpdate), this._reqObj.putBoolArray(this.constructor.KEY_EVENTS, e));
null != this._settings.extension && (this._reqObj.putUtfString(this.constructor.KEY_EXTID, this._settings.extension.id), 
this._reqObj.putUtfString(this.constructor.KEY_EXTCLASS, this._settings.extension.className), 
null != this._settings.extension.propertiesFile && 0 < this._settings.extension.propertiesFile.length && this._reqObj.putUtfString(this.constructor.KEY_EXTPROP, this._settings.extension.propertiesFile));
this._reqObj.putBool(this.constructor.KEY_AUTOJOIN, this._autoJoin);
null != this._roomToLeave && this._reqObj.putInt(this.constructor.KEY_ROOM_TO_LEAVE, this._roomToLeave.id);
}
});
c.Requests.System.CreateRoomRequest.KEY_ROOM = "r";
c.Requests.System.CreateRoomRequest.KEY_NAME = "n";
c.Requests.System.CreateRoomRequest.KEY_PASSWORD = "p";
c.Requests.System.CreateRoomRequest.KEY_GROUP_ID = "g";
c.Requests.System.CreateRoomRequest.KEY_ISGAME = "ig";
c.Requests.System.CreateRoomRequest.KEY_MAXUSERS = "mu";
c.Requests.System.CreateRoomRequest.KEY_MAXSPECTATORS = "ms";
c.Requests.System.CreateRoomRequest.KEY_MAXVARS = "mv";
c.Requests.System.CreateRoomRequest.KEY_ROOMVARS = "rv";
c.Requests.System.CreateRoomRequest.KEY_PERMISSIONS = "pm";
c.Requests.System.CreateRoomRequest.KEY_EVENTS = "ev";
c.Requests.System.CreateRoomRequest.KEY_EXTID = "xn";
c.Requests.System.CreateRoomRequest.KEY_EXTCLASS = "xc";
c.Requests.System.CreateRoomRequest.KEY_EXTPROP = "xp";
c.Requests.System.CreateRoomRequest.KEY_AUTOJOIN = "aj";
c.Requests.System.CreateRoomRequest.KEY_ROOM_TO_LEAVE = "rl";
c.Requests.GenericMessageType = {};
c.Requests.GenericMessageType.PUBLIC_MSG = 0;
c.Requests.GenericMessageType.PRIVATE_MSG = 1;
c.Requests.GenericMessageType.MODERATOR_MSG = 2;
c.Requests.GenericMessageType.ADMING_MSG = 3;
c.Requests.GenericMessageType.OBJECT_MSG = 4;
c.Requests.GenericMessageType.BUDDY_MSG = 5;
c.Requests.MessageRecipientMode = function(e, t) {
if (e < this.TO_USER || e > this.TO_ZONE) throw new c.Exceptions.Error("Illegal recipient mode: " + e);
this.mode = e;
this.target = t;
};
c.Requests.MessageRecipientMode.TO_USER = 0;
c.Requests.MessageRecipientMode.TO_ROOM = 1;
c.Requests.MessageRecipientMode.TO_GROUP = 2;
c.Requests.MessageRecipientMode.TO_ZONE = 3;
c.Requests.Game.InvitationReplyRequest.KEY_INVITATION_ID = "i";
c.Requests.Game.InvitationReplyRequest.KEY_INVITATION_REPLY = "r";
c.Requests.Game.InvitationReplyRequest.KEY_INVITATION_PARAMS = "p";
c.Requests.System.GenericMessageRequest = c.Requests._BaseRequest.extend({
ctor: function() {
this._super(c.Requests.GenericMessage);
this._type = -1;
this._recipient = this._params = this._message = this._user = this._room = null;
this._sendMode = -1;
},
validate: function(e) {
if (0 > this._type) throw new c.Exceptions.ValidationError("GenericMessageRequest Error", [ "Unsupported message type: " + this._type ]);
var t = [];
switch (this._type) {
case c.Requests.GenericMessageType.PUBLIC_MSG:
this._validatePublicMessage(e, t);
break;

case c.Requests.GenericMessageType.PRIVATE_MSG:
this._validatePrivateMessage(e, t);
break;

case c.Requests.GenericMessageType.OBJECT_MSG:
this._validateObjectMessage(e, t);
break;

case c.Requests.GenericMessageType.BUDDY_MSG:
this._validateBuddyMessage(e, t);
break;

default:
this._validateSuperUserMessage(e, t);
}
if (0 < t.length) throw new c.Exceptions.ValidationError("GenericMessageRequest Error", t);
},
execute: function(e) {
this._reqObj.putByte(c.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE, this._type);
switch (this._type) {
case c.Requests.GenericMessageType.PUBLIC_MSG:
this._executePublicMessage(e);
break;

case c.Requests.GenericMessageType.PRIVATE_MSG:
this._executePrivateMessage(e);
break;

case c.Requests.GenericMessageType.OBJECT_MSG:
this._executeObjectMessage(e);
break;

case c.Requests.GenericMessageType.BUDDY_MSG:
this._executeBuddyMessage(e);
break;

default:
this._executeSuperUserMessage(e);
}
},
_validatePublicMessage: function(e, t) {
(null == this._message || 0 == this._message.length) && t.push("Public message is empty");
null != this._room && !e.mySelf.isJoinedInRoom(this._room) && t.push("You are not joined in the target Room: " + this._room);
},
_validatePrivateMessage: function(e, t) {
(null == this._message || 0 == this._message.length) && t.push("Private message is empty");
0 > this._recipient && t.push("Invalid recipient id: " + this._recipient);
},
_validateObjectMessage: function(e, t) {
null == this._params && t.push("Object message is null");
},
_validateBuddyMessage: function(e, t) {
e.buddyManager.isInited || t.push("Buddy List not yet initialized; please send an InitBuddyRequest first");
0 == e.buddyManager.myOnlineState && t.push("Can't send messages while you are offline in the Buddy List system");
(null == this._message || 0 == this._message.length) && t.push("Buddy message is empty");
0 > this._recipient && t.push("Recipient is offline or not in your Buddy List");
},
_validateSuperUserMessage: function(e, t) {
(null == this._message || 0 == this._message.length) && t.push("Moderator message is empty");
switch (this._sendMode) {
case c.Requests.MessageRecipientMode.TO_USER:
this._recipient instanceof c.Entities.User || t.push("User object expected as recipient");
break;

case c.Requests.MessageRecipientMode.TO_ROOM:
this._recipient instanceof c.Entities.Room || t.push("Room object expected as recipient");
break;

case c.Requests.MessageRecipientMode.TO_GROUP:
"string" != typeof this._recipient && t.push("String object (the groupId) expected as recipient");
}
},
_executePublicMessage: function(e) {
null == this._room && (this._room = e.lastJoinedRoom);
if (null == this._room) throw new c.Exceptions.Error("User should be joined in a Room in order to send a public message");
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_ROOM_ID, this._room.id);
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_USER_ID, e.mySelf.id);
this._reqObj.putUtfString(c.Requests.System.GenericMessageRequest.KEY_MESSAGE, this._message);
null != this._params && this._reqObj.putNObject(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
},
_executePrivateMessage: function() {
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT, this._recipient);
this._reqObj.putUtfString(c.Requests.System.GenericMessageRequest.KEY_MESSAGE, this._message);
null != this._params && this._reqObj.putNObject(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
},
_executeBuddyMessage: function() {
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT, this._recipient);
this._reqObj.putUtfString(c.Requests.System.GenericMessageRequest.KEY_MESSAGE, this._message);
null != this._params && this._reqObj.putNObject(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
},
_executeSuperUserMessage: function() {
this._reqObj.putUtfString(c.Requests.System.GenericMessageRequest.KEY_MESSAGE, this._message);
null != this._params && this._reqObj.putNObject(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
this._reqObj.putByte(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT_MODE, this._sendMode);
switch (this._sendMode) {
case c.Requests.MessageRecipientMode.TO_USER:
case c.Requests.MessageRecipientMode.TO_ROOM:
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT, this._recipient.id);
break;

case c.Requests.MessageRecipientMode.TO_GROUP:
this._reqObj.putUtfStringArray(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT, this._recipient);
}
},
_executeObjectMessage: function(e) {
null == this._room && (this._room = e.lastJoinedRoom);
if (null == this._room) throw new c.Exceptions.Error("User should be joined in a Room in order to send an object message");
e = [];
if (null != this._recipient && this._recipient instanceof Array) {
var t = this._recipient;
if (t.length > this._room.capacity) throw new c.Exceptions.Error("The number of recipients is bigger than the target Room capacity: " + t.length);
for (var s in t) {
var r = t[s];
r instanceof c.Entities.User ? e.push(r.id) : this._log.warn("Bad recipient in ObjectMessage recipient list: " + typeof r + "; expected type: SFSUser");
}
}
this._reqObj.putInt(c.Requests.System.GenericMessageRequest.KEY_ROOM_ID, this._room.id);
this._reqObj.putNObject(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS, this._params);
0 < e.length && this._reqObj.putIntArray(c.Requests.System.GenericMessageRequest.KEY_RECIPIENT, e);
}
});
c.Requests.System.PublicMessageRequest = c.Requests.System.GenericMessageRequest.extend({
ctor: function(e, t, s) {
this._super();
this._type = c.Requests.GenericMessageType.PUBLIC_MSG;
this._message = e;
this._room = s;
this._params = t;
}
});
c.Requests.System.PrivateMessageRequest = c.Requests.System.GenericMessageRequest.extend({
ctor: function(e, t, s) {
this._super();
this._type = c.Requests.GenericMessageType.PRIVATE_MSG;
this._message = e;
this._recipient = t;
this._params = s;
}
});
c.Requests.System.ModeratorMessageRequest = c.Requests.System.GenericMessageRequest.extend({
ctor: function(e, t, s) {
this._super();
if (null == t) throw new c.Exceptions.Error("Recipient mode cannot be null");
this._type = c.Requests.GenericMessageType.MODERATOR_MSG;
this._message = e;
this._params = s;
this._recipient = t.target;
this._sendMode = t.mode;
}
});
c.Requests.System.AdminMessageRequest = c.Requests.System.GenericMessageRequest.extend({
ctor: function(e, t, s) {
this._super();
if (null == t) throw new c.Exceptions.Error("Recipient mode cannot be null");
this._type = c.Requests.GenericMessageType.ADMING_MSG;
this._message = e;
this._params = s;
this._recipient = t.target;
this._sendMode = t.mode;
}
});
c.Requests.System.GenericMessageRequest.KEY_ROOM_ID = "r";
c.Requests.System.GenericMessageRequest.KEY_USER_ID = "u";
c.Requests.System.GenericMessageRequest.KEY_MESSAGE = "m";
c.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE = "t";
c.Requests.System.GenericMessageRequest.KEY_RECIPIENT = "rc";
c.Requests.System.GenericMessageRequest.KEY_RECIPIENT_MODE = "rm";
c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS = "p";
c.Requests.System.GenericMessageRequest.KEY_SENDER_DATA = "sd";
c.Requests.System.SetRoomVariablesRequest = c.Requests._BaseRequest.extend({
ctor: function(e, t) {
this._super(c.Requests.SetRoomVariables);
this._roomVariables = e;
this._room = t;
},
validate: function(e) {
var t = [];
null != this._room ? this._room.containsUser(e.mySelf) || t.push("You are not joined in the target Room") : null == e.lastJoinedRoom && t.push("You are not joined in any Room");
(null == this._roomVariables || 0 == this._roomVariables.length) && t.push("No variables were specified");
if (0 < t.length) throw new c.Exceptions.ValidationError("SetRoomVariablesRequest Error", t);
},
execute: function(e) {
e = u.newInstance();
for (let t = 0; t < this._roomVariables.length; t++) e.addNArray(this._roomVariables[t].toNArray());
null == this._room && (this._room = e.lastJoinedRoom);
this._reqObj.putNArray(this.constructor.KEY_VAR_LIST, e);
this._reqObj.putInt(this.constructor.KEY_VAR_ROOM, this._room.id);
}
});
c.Requests.System.SetRoomVariablesRequest.KEY_VAR_ROOM = "r";
c.Requests.System.SetRoomVariablesRequest.KEY_VAR_LIST = "vl";
c.Requests.System.SetUserVariablesRequest = c.Requests._BaseRequest.extend({
ctor: function(e) {
this._super(c.Requests.SetUserVariables);
this._userVariables = e;
},
validate: function() {
var e = [];
(null == this._userVariables || 0 == this._userVariables.length) && e.push("No variables were specified");
if (0 < e.length) throw new c.Exceptions.ValidationError("SetUserVariablesRequest Error", e);
},
execute: function() {
var e = u.newInstance();
for (let t = 0; t < this._userVariables.length; t++) e.addNArray(this._userVariables[t].toNArray());
this._reqObj.putNArray(this.constructor.KEY_VAR_LIST, e);
}
});
c.Requests.System.SetUserVariablesRequest.KEY_USER = "u";
c.Requests.System.SetUserVariablesRequest.KEY_VAR_LIST = "vl";
c.Event = {
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
c.prototype._dispatchEventExtension = function(e, t) {
this._eventExtensionDispatcher.dispatchEvent(e, t);
};
c.prototype.addEventListener = function(e, t, s) {
this._eventDispatcher.addEventListener(e, t, s);
};
c.prototype.addEventListenerExtension = function(e, t, s) {
(null == e || null == e || e.length <= 0) && this._log.error("CMD Invalidate " + t.name);
this._eventExtensionDispatcher.addEventListener(e, t, s);
};
c.prototype.removeEventListener = function(e, t) {
this._eventDispatcher.removeEventListener(e, t);
};
c.prototype.removeEventListenerExtension = function(e, t) {
this._eventExtensionDispatcher.removeEventListener(e, t);
};
c.prototype._dispatchEvent = function(e, t) {
this._eventDispatcher.dispatchEvent(e, t);
};
c.prototype._onSocketConnect = function(e) {
e.success ? (e = new c.Requests.System.HandshakeRequest(this.version, e.isReconnection ? this.sessionToken : null), 
this.send(e)) : this._dispatchEvent(c.Event.CONNECTION, {
success: !1
});
};
c.prototype._onSocketData = function(e) {
let t = o.newFromBinary(e), s = t.get(c.Controllers.ACTION_ID), r = t.get(c.Controllers.PARAM_ID), n = t.get(c.Controllers.CONTROLLER_ID), i = "<<<<<<<---------INCOMING DATA----------" + r.getDump();
i += n == R ? "IN System > : " + c.Requests.getRequestNameFromId(s) : "";
i += "\n<<<<<<<-----------END-------------------\n";
this.getLogger().debug(i);
null == s ? this._log.error("Message rejected: Action ID is Missing") : null == n ? this._log.error("Message Rejected : Controller ID is Missing") : this._controllers[n].handleMessage(s, r);
};
c.prototype._onSocketIOError = function(e) {
this._dispatchEvent(c.Event.SOCKET_ERROR, {
message: e
});
};
c.prototype.isConnected = function() {
return null != this._socketEngine && this._socketEngine.isConnected;
};
c.prototype.disconnect = function(e) {
this._socketEngine.disconnect(e);
};
c.prototype._onSocketDisconnect = function(e) {
this._dispatchEvent(c.Event.CONNECTION_LOST, e);
this._reset(!0);
};
c.prototype.connect = function(e, t, s) {
if (this.isConnected()) this._log.warn("Already connected"); else if (this._socketEngine.isConnecting) this._log.warn("A connection attempt is already in progress"); else {
var r = null != this.config && null != this.config.host ? this.config.host : null, n = null != this.config && null != this.config.port ? this.config.port : null;
s = null != this.config && null != this.config.ssl ? this.config.ssl : null;
null != e && (r = e);
null != t && (n = t);
null == r || 0 == r.length ? this._log.error("Invalid connection host/address") : "number" != typeof n || 0 > n || 65535 < n ? this._log.error("Invalid TCP port") : this._socketEngine.connect(r, n, s);
}
};
c.prototype.send = function(e) {
if (this.isConnected()) {
if (null == e.validate || null == e.execute) this._log.error("An invalidate request"); else {
try {
e.validate(this);
e.execute(this);
} catch (e) {
if (!(e instanceof c.Exceptions.ValidationError && null != e.getMessage())) throw e;
this._log.error(e.getMessage());
return !1;
}
this._socketEngine.send(e);
let t = "------SEND DATA------\x3e>>>>>>" + e.getDump();
t += e.getTargetController() == R ? "SEND System > : " + c.Requests.getRequestNameFromId(e.getId()) : "OUT Extension > :" + e._extCmd;
t += "\n-----END----------------\x3e>>>>>>\n";
this.getLogger().debug(t);
}
return !0;
}
this._log.error("you are not connected, Request can not send");
};
c.EventDispatcher = function() {
this.listenersByEvent = {};
};
c.EventDispatcher.prototype.addEventListener = function(e, t, s) {
null == this.listenersByEvent[e] && (this.listenersByEvent[e] = []);
this.listenersByEvent[e].push({
listener: t,
scope: s
});
};
c.EventDispatcher.prototype.removeEventListener = function(e, t) {
var s = this.listenersByEvent[e];
if (null != s) for (var r = 0; r < s.length; r++) if (s[r].listener === t) {
s.splice(r, 1);
break;
}
};
c.EventDispatcher.prototype.dispatchEvent = function(e, t) {
var s = this.listenersByEvent[e];
if (s && 0 < s.length) for (var r = 0; r < s.length; r++) s[r].listener.call(s[r].scope, t);
};
c.SocketEvent = {
CONNECT: "socketConnect",
DISCONNECT: "socketDisconnect",
DATA: "data",
IOERROR: "socketIOError"
};
c.ErrorCodes = {};
c.ErrorCodes._errorsByCode = [ "Client API version is obsolete: {0}; required version: {1}", "Requested Zone {0} does not exist", "User name {0} is not recognized", "Wrong password for user {0}", "User {0} is banned", "Zone {0} is full", "User {0} is already logged in Zone {1}", "The server is full", "Zone {0} is currently inactive", "User name {0} contains bad words; filtered: {1}", "Guest users not allowed in Zone {0}", "IP address {0} is banned", "A Room with the same name already exists: {0}", "Requested Group is not available - Room: {0}; Group: {1}", "Bad Room name length -  Min: {0}; max: {1}; passed name length: {2}", "Room name contains bad words: {0}", "Zone is full; can't add Rooms anymore", "You have exceeded the number of Rooms that you can create per session: {0}", "Room creation failed, wrong parameter: {0}", "User {0} already joined in Room", "Room {0} is full", "Wrong password for Room {0}", "Requested Room does not exist", "Room {0} is locked", "Group {0} is already subscribed", "Group {0} does not exist", "Group {0} is not subscribed", "Group {0} does not exist", "{0}", "Room permission error; Room {0} cannot be renamed", "Room permission error; Room {0} cannot change password state", "Room permission error; Room {0} cannot change capacity", "Switch user error; no player slots available in Room {0}", "Switch user error; no spectator slots available in Room {0}", "Switch user error; Room {0} is not a Game Room", "Switch user error; you are not joined in Room {0}", "Buddy Manager initialization error, could not load buddy list: {0}", "Buddy Manager error, your buddy list is full; size is {0}", "Buddy Manager error, was not able to block buddy {0} because offline", "Buddy Manager error, you are attempting to set too many Buddy Variables; limit is {0}", "Game {0} access denied, user does not match access criteria", "QuickJoinGame action failed: no matching Rooms were found", "Your previous invitation reply was invalid or arrived too late" ];
c.ErrorCodes.setErrorMessage = function(e, t) {
this._errorsByCode[e] = t;
};
c.ErrorCodes.getErrorMessage = function(e, t) {
return this.stringFormat(this._errorsByCode[e], t);
};
c.ErrorCodes.stringFormat = function(e, t) {
if (null == e) return "";
if (null != t) for (var s = 0; s < t.length; s++) e = e.replace("{" + s + "}", t[s]);
return e;
};
c.ClientDisconnectionReason = {
IDLE: "idle",
KICK: "kick",
BAN: "ban",
MANUAL: "manual",
UNKNOWN: "unknown",
DUPLICATE: "duplicate"
};
c.Exceptions = {};
c.Exceptions.Error = t.Class.extend({
ctor: function(e) {
this._message = e;
},
getMessage: function() {
return this._message;
}
});
c.Exceptions.ValidationError = c.Exceptions.Error.extend({
ctor: function(e, t) {
this._super(e);
this._errors = t;
},
getError: function() {
return this._errors;
}
});
c.Controllers = {};
c.Controllers.CONTROLLER_ID = "c";
c.Controllers.ACTION_ID = "a";
c.Controllers.PARAM_ID = "p";
c.Controllers.KEY_ERROR_CODE = "ec";
c.Controllers.KEY_ERROR_PARAMS = "ep";
c.Controllers.ROOM_PARAM = "r";
c.Controllers.USER_PARAM = "u";
c.Controllers.USER_COUNT_PARAM = "uc";
c.Controllers.SPECT_COUNT_PARAM = "sc";
c.Controllers.SystemController = function(e) {
this._smartFox = e;
this._id = 0;
this._requestHandlers = {};
this._initRequestHandlers();
this._log = e._log;
};
c.Controllers.SystemController.prototype.getId = function() {
return this._id;
};
c.Controllers.SystemController.prototype._populateRoomList = function(e) {
let t = this._smartFox.roomManager;
for (var s = 0; s < e.size(); s++) {
var r = c.Entities.Room.fromArray(e.get(s).value);
t._replaceRoom(r);
}
};
c.Controllers.SystemController.prototype.handleMessage = function(e, t) {
var s = this._requestHandlers[e];
null != s ? this[s](t) : this._log.warn("Unknown message id " + e);
};
c.Controllers.SystemController.prototype._initRequestHandlers = function() {
this._requestHandlers[c.Requests.Handshake] = "_fnHandshake";
this._requestHandlers[c.Requests.Login] = "_fnLogin";
this._requestHandlers[c.Requests.Logout] = "_fnLogout";
this._requestHandlers[c.Requests.JoinRoom] = "_fnJoinRoom";
this._requestHandlers[c.Requests.CreateRoom] = "_fnCreateRoom";
this._requestHandlers[c.Requests.ChangeRoomName] = "_fnChangeRoomName";
this._requestHandlers[c.Requests.ChangeRoomPassword] = "_fnChangeRoomPassword";
this._requestHandlers[c.Requests.ChangeRoomCapacity] = "_fnChangeRoomCapacity";
this._requestHandlers[c.Requests.KickUser] = "_fnKickUser";
this._requestHandlers[c.Requests.GenericMessage] = "_fnGenericMessage";
this._requestHandlers[c.Requests.SetRoomVariables] = "_fnSetRoomVariables";
this._requestHandlers[c.Requests.SetUserVariables] = "_fnSetUserVariables";
this._requestHandlers[c.Requests.SubscribeRoomGroup] = "_fnSubscribeRoomGroup";
this._requestHandlers[c.Requests.UnsubscribeRoomGroup] = "_fnUnsubscribeRoomGroup";
this._requestHandlers[c.Requests.SpectatorToPlayer] = "_fnSpectatorToPlayer";
this._requestHandlers[c.Requests.PlayerToSpectator] = "_fnPlayerToSpectator";
this._requestHandlers[c.Requests.InitBuddyList] = "_fnInitBuddyList";
this._requestHandlers[c.Requests.AddBuddy] = "_fnAddBuddy";
this._requestHandlers[c.Requests.RemoveBuddy] = "_fnRemoveBuddy";
this._requestHandlers[c.Requests.BlockBuddy] = "_fnBlockBuddy";
this._requestHandlers[c.Requests.GoOnline] = "_fnGoOnline";
this._requestHandlers[c.Requests.SetBuddyVariables] = "_fnSetBuddyVariables";
this._requestHandlers[c.Requests.FindRooms] = "_fnFindRooms";
this._requestHandlers[c.Requests.FindUsers] = "_fnFindUsers";
this._requestHandlers[c.Requests.InviteUsers] = "_fnInviteUsers";
this._requestHandlers[c.Requests.InvitationReply] = "_fnInvitationReply";
this._requestHandlers[c.Requests.QuickJoinGame] = "_fnQuickJoinGame";
this._requestHandlers[c.Requests.PingPong] = "_fnPingPong";
this._requestHandlers[1e3] = "_fnUserEnterRoom";
this._requestHandlers[1001] = "_fnUserCountChange";
this._requestHandlers[1002] = "_fnUserLost";
this._requestHandlers[1003] = "_fnRoomLost";
this._requestHandlers[1004] = "_fnUserExitRoom";
this._requestHandlers[1005] = "_fnClientDisconnection";
};
c.Controllers.SystemController.prototype._getEvtName = function(e) {
return this._requestHandlers[e].substr(3);
};
c.Controllers.SystemController.prototype._fnHandshake = function(e) {
this._smartFox._handleHandShake(e);
};
c.Controllers.SystemController.prototype._fnClientDisconnection = function(e) {
var t = e.data;
if (e.status) {
var s = t.unPackByte();
this._smartFox._dispatchEvent(c.Event.DISCONNECT_REASON, s);
}
};
c.Controllers.SystemController.prototype._fnLogin = function(e) {
let t = e.get("ec"), s = e.get("ep");
if (null != t) this._smartFox._dispatchEvent(c.Event.LOGIN_ERROR, {
id: t,
msg: s
}); else {
this._smartFox.mySelf = new c.Entities.User(e.get("id"), e.get("un"), !0);
this._smartFox.mySelf._setUserManager(this._smartFox.userManager);
this._smartFox._currentZone = e.get("zn");
this._smartFox.groups.id = e.get("gr");
this._smartFox.userManager._addUser(this._smartFox.mySelf);
let t = {};
t.zone = e.get("zn");
t.user = this._smartFox.mySelf;
t.data = e.get("po");
this._smartFox._dispatchEvent(c.Event.LOGIN, t);
let s = e.get("token");
console.log("token", s);
}
};
c.Controllers.SystemController.prototype._fnLogout = function(e) {
this._smartFox._handleLogout();
this._smartFox._dispatchEvent(c.Event.LOGOUT, e);
};
c.Controllers.SystemController.prototype._fnJoinRoom = function(e) {
let t = this._smartFox.roomManager, s = {};
this._smartFox._isJoining = !1;
let r = e.get(c.Controllers.KEY_ERROR_CODE);
if (null == r) {
let r = e.get(c.Requests.System.JoinRoomRequest.KEY_USER_LIST), n = e.get(c.Requests.System.JoinRoomRequest.KEY_ROOM), i = c.Entities.Room.fromArray(n);
i._setRoomManager(t);
i = t._replaceRoom(i, t.containsGroup(i.groupId));
for (let e = 0; e < r.size(); e++) {
let t = r.get(e).getObject(), s = this._getOrCreateUser(t, !0, i);
s._setPlayerId(t.get(3).getObject(), i);
i._addUser(s);
}
let o = n.get(8).value;
if (o >= 0) {
let e = i.getUserById(o);
i.setOwner(e);
}
i.isJoined = !0;
this._smartFox.lastJoinedRoom = i;
s.room = i;
this._smartFox._dispatchEvent(c.Event.ROOM_JOIN, s);
} else {
this._log.error("JOIN ROOM ERROR CODE " + r);
this._smartFox._dispatchEvent(c.Event.ROOM_JOIN_ERROR, r);
}
};
c.Controllers.SystemController.prototype._fnSpectatorToPlayer = function(e) {
let t = {}, s = e.get(c.Controllers.KEY_ERROR_CODE);
if (null == s) {
let s = e.get(c.Requests.System.SpectatorToPlayerRequest.KEY_ROOM_ID), r = e.get(c.Requests.System.SpectatorToPlayerRequest.KEY_USER_ID), n = e.get(c.Requests.System.SpectatorToPlayerRequest.KEY_PLAYER_ID), i = this._smartFox.userManager.getUserById(r), o = this._smartFox.roomManager.getRoomById(s);
null != o ? null != i ? i.isJoinedInRoom(o) ? (i._setPlayerId(n, o), t.room = o, 
t.user = i, t.playerId = n, this._smartFox._dispatchEvent(c.Event.SPECTATOR_TO_PLAYER, t)) : this._log.warn("SpectatorToPlayer event, user " + i + " not joined in Room ", o) : this._log.warn("SpectatorToPlayer event, unknown User id: " + r) : this._log.warn("SpectatorToPlayer event, unknown Room id: " + s);
} else this._smartFox._dispatchEvent(c.Event.PLAYER_TO_SPECTATOR_ERROR, {
ec: s,
msg: c.ErrorCodes.getErrorMessage(s, a.get(c.Controllers.KEY_ERROR_PARAMS))
});
};
c.Controllers.SystemController.prototype._fnPlayerToSpectator = function(e) {
let t = {}, s = e.get(c.Controllers.KEY_ERROR_CODE);
if (null == s) {
let s = e.get(c.Requests.System.PlayerToSpectatorRequest.KEY_ROOM_ID), r = e.get(c.Requests.System.PlayerToSpectatorRequest.KEY_USER_ID), n = this._smartFox.userManager.getUserById(r), i = this._smartFox.roomManager.getRoomById(s);
t.playerId = n.getPlayerId(i);
null != i ? null != n ? n.isJoinedInRoom(i) ? (n._setPlayerId(-1, i), t.room = i, 
t.user = n, this._smartFox._dispatchEvent(c.Event.PLAYER_TO_SPECTATOR, t)) : this._log.warn("PlayerToSpectator event, user " + n + " not joined in Room ", i) : this._log.warn("PlayerToSpectator event, unknown User id: " + r) : this._log.warn("PlayerToSpectator event, unknown Room id: " + s);
} else this._smartFox._dispatchEvent(c.Event.PLAYER_TO_SPECTATOR_ERROR, {
ec: s,
msg: c.ErrorCodes.getErrorMessage(s, e.get(c.Controllers.KEY_ERROR_PARAMS))
});
};
c.Controllers.SystemController.prototype._fnSubscribeRoomGroup = function(e) {
let t = {};
if (null == e.get(c.Controllers.KEY_ERROR_CODE)) {
let s = e.get("g"), r = e.get("rl");
this._smartFox.roomManager.containsGroup(s) && this._log.warn("Subscribe group error Group: " + s + " already subscribed");
this._populateRoomList(r);
t.groupId = s;
t.newRooms = this._smartFox.roomManager.getRoomListFromGroup(s);
this._smartFox._dispatchEvent(c.Event.ROOM_GROUP_SUBSCRIBE, t);
}
};
c.Controllers.SystemController.prototype._fnUnsubscribeRoomGroup = function(e) {
var t = {};
if (null == e.get(c.Controllers.KEY_ERROR_CODE)) {
var s = e.get("g");
this._smartFox.roomManager.containsGroup(s) || this._log.warn("Unsubscribe Group error: Group '" + s + "' not found (maybe never subscribed, or the Room Manager doesn't contain Rooms belonging to that Group)");
this._smartFox.roomManager._removeGroup(s);
t.groupId = s;
this._smartFox._dispatchEvent(c.Event.ROOM_GROUP_UNSUBSCRIBE, t);
} else s = a.get(c.Controllers.KEY_ERROR_CODE), a = c.ErrorCodes.getErrorMessage(s, a.get(c.Controllers.KEY_ERROR_PARAMS)), 
t.errorMessage = a, t.errorCode = s, this._smartFox._dispatchEvent(c.Event.ROOM_GROUP_UNSUBSCRIBE_ERROR, t);
};
c.Controllers.SystemController.prototype._fnSetUserVariables = function(e) {
var t = e.get(c.Requests.System.SetUserVariablesRequest.KEY_USER), s = e.get(c.Requests.System.SetUserVariablesRequest.KEY_VAR_LIST), r = [];
if (null != (e = this._smartFox.userManager.getUserById(t))) {
for (t = 0; t < s.size(); t++) {
var n = c.Entities.Variables.UserVariable.fromArray(s.get(t).value);
e._setVariable(n);
r.push(n.name);
}
(s = {}).changedVars = r;
s.user = e;
this._smartFox._dispatchEvent(c.Event.USER_VARIABLES_UPDATE, s);
} else this._log.warn("UserVariablesUpdate event, unknown User id: " + t);
};
c.Controllers.SystemController.prototype._fnSetRoomVariables = function(e) {
var t = e.get(c.Requests.System.SetRoomVariablesRequest.KEY_VAR_ROOM), s = e.get(c.Requests.System.SetRoomVariablesRequest.KEY_VAR_LIST), r = [];
if (null != (e = this._smartFox.roomManager.getRoomById(t))) {
for (t = 0; t < s.size(); t++) {
var n = c.Entities.Variables.RoomVariable.fromArray(s.get(t).value);
e._setVariable(n);
r.push(n.name);
}
(s = {}).changedVars = r;
s.room = e;
this._smartFox._dispatchEvent(c.Event.ROOM_VARIABLES_UPDATE, s);
} else this._log.warn("RoomVariablesUpdate event, unknown Room id: " + t);
};
c.Controllers.SystemController.prototype._fnQuickJoinGame = function(e) {
if (null != e.get(c.Controllers.KEY_ERROR_CODE)) {
var t = e.get(c.Controllers.KEY_ERROR_CODE), s = (e = c.ErrorCodes.getErrorMessage(t, e.get(c.Controllers.KEY_ERROR_PARAMS)), 
{});
s.errorMessage = e;
s.errorCode = t;
this._smartFox._dispatchEvent(c.Event.ROOM_JOIN_ERROR, s);
}
};
c.Controllers.SystemController.prototype._fnPingPong = function() {};
c.Controllers.SystemController.prototype._fnRoomLost = function(e) {
let t = e.get(c.Controllers.ROOM_PARAM), s = this._smartFox.roomManager.getRoomById(t);
if (null != s) {
this._smartFox.roomManager._removeRoom(s);
let e = s.getUserList();
for (let t = 0; t < e.length; t++) s._removeUser(e[t]);
let t = {};
t.room = s;
this._smartFox._dispatchEvent(c.Event.ROOM_REMOVE, t);
}
};
c.Controllers.SystemController.prototype._fnUserExitRoom = function(e) {
var t = this._smartFox.roomManager.getRoomById(e.get(c.Controllers.ROOM_PARAM));
e = this._smartFox.userManager.getUserById(e.get(c.Controllers.USER_PARAM));
if (null != t && null != e) {
var s = {};
s.playerId = e.getPlayerId(t);
t._removeUser(e);
e.isItMe || this._smartFox.userManager._removeUser(e);
e.isItMe && t.isJoined && (t.isJoined = !1, 0 == this._smartFox.roomManager.getJoinedRooms().length && (this._smartFox.lastJoinedRoom = null), 
t._isManaged || this._smartFox.roomManager._removeRoom(t));
s.user = e;
s.room = t;
e._removePlayerId(t);
this._smartFox._dispatchEvent(c.Event.USER_EXIT_ROOM, s);
} else this._log.debug("Failed to handle UserExit event. Room: " + t + ", User: " + e);
};
c.Controllers.SystemController.prototype._fnUserLost = function(e) {
if (null != (e = this._smartFox.userManager.getUserById(e.get(c.Controllers.USER_PARAM)))) {
let t = this._smartFox.roomManager.getUserRooms(e);
this._smartFox.roomManager._removeUser(e);
this._smartFox.userManager._removeUser(e);
for (let s in t) {
let r = {};
r.user = e;
r.room = t[s];
r.playerId = e.getPlayerId(t[s]);
this._smartFox._dispatchEvent(c.Event.USER_EXIT_ROOM, r);
}
}
};
c.Controllers.SystemController.prototype._fnFindUsers = function(e) {
let t = e.get(c.Requests.System.FindUsersRequest.KEY_FILTERED_USERS), s = [];
for (let e = 0; e < t.size(); e++) {
let n = t.get(e).value;
var r = c.Entities.User.fromArray(n);
s.push(r);
}
this._smartFox._dispatchEvent(c.Event.USER_FIND_RESULT, s);
};
c.Controllers.SystemController.prototype._fnFindRooms = function(e) {
let t = e.get(c.Requests.System.FindRoomsRequest.KEY_FILTERED_ROOMS), s = [];
for (let e = 0; e < t.size(); e++) {
let r = t.get(e).value, n = c.Entities.Room.fromArray(r);
s.push(n);
}
this._smartFox._dispatchEvent(c.Event.ROOM_FIND_RESULT, s);
};
c.Controllers.SystemController.prototype._fnInviteUsers = function(e) {
var t = {}, s = null != e.get(c.Requests.Game.InviteUsersRequest.KEY_USER_ID) ? this._smartFox.userManager.getUserById(e.get(c.Requests.Game.InviteUsersRequest.KEY_USER_ID)) : c.Entities.User.fromArray(e.get(c.Requests.Game.InviteUsersRequest.KEY_USER)), r = e.get(c.Requests.Game.InviteUsersRequest.KEY_INVITATION_ID);
(e = new c.Entities.Invitation.NInvitation(s, this._smartFox.mySelf, e.get(c.Requests.Game.InviteUsersRequest.KEY_TIME).value, e.get(c.Requests.Game.InviteUsersRequest.KEY_PARAMS))).id = r;
t.invitation = e;
this._smartFox._dispatchEvent(c.Event.INVITATION, t);
};
c.Controllers.SystemController.prototype._fnInvitationReply = function(e) {
var t = {};
if (null == e.get(c.Controllers.KEY_ERROR_CODE)) {
var s = null, r = (s = null != e.get(c.Requests.Game.InviteUsersRequest.KEY_USER_ID) ? this._smartFox.userManager.getUserById(e.get(c.Requests.Game.InviteUsersRequest.KEY_USER_ID)) : c.Entities.User.fromArray(e.get(c.Requests.Game.InviteUsersRequest.KEY_USER)), 
e.get(c.Requests.Game.InviteUsersRequest.KEY_REPLY_ID));
e = e.get(c.Requests.Game.InviteUsersRequest.KEY_PARAMS);
t.invitee = s;
t.reply = r;
t.data = e;
this._smartFox._dispatchEvent(c.Event.INVITATION_REPLY, t);
} else s = e.get(c.Controllers.KEY_ERROR_CODE), e = c.ErrorCodes.getErrorMessage(s, e.get(c.Controllers.KEY_ERROR_PARAMS)), 
t.errorMessage = e, t.errorCode = s, this._smartFox._dispatchEvent(c.Event.INVITATION_REPLY_ERROR, t);
};
c.Controllers.SystemController.prototype._fnGenericMessage = function(e) {
switch (e.get(c.Requests.System.GenericMessageRequest.KEY_MESSAGE_TYPE)) {
case c.Requests.GenericMessageType.PUBLIC_MSG:
this._handlePublicMessage(e);
break;

case c.Requests.GenericMessageType.PRIVATE_MSG:
this._handlePrivateMessage(e);
break;

case c.Requests.GenericMessageType.BUDDY_MSG:
this._handleBuddyMessage(e);
break;

case c.Requests.GenericMessageType.MODERATOR_MSG:
this._handleModMessage(e);
break;

case c.Requests.GenericMessageType.ADMING_MSG:
this._handleAdminMessage(e);
break;

case c.Requests.GenericMessageType.OBJECT_MSG:
this._handleObjectMessage(e);
}
};
c.Controllers.SystemController.prototype._handlePublicMessage = function(e) {
var t = {}, s = e.get(c.Requests.System.GenericMessageRequest.KEY_ROOM_ID), r = this._smartFox.roomManager.getRoomById(s);
null != r ? (t.room = r, t.sender = this._smartFox.userManager.getUserById(e.get(c.Requests.System.GenericMessageRequest.KEY_USER_ID)), 
t.message = e.get(c.Requests.System.GenericMessageRequest.KEY_MESSAGE), t.data = e.get(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS), 
this._smartFox._dispatchEvent(c.Event.PUBLIC_MESSAGE, t)) : this._log.warn("Unexpected, public message target Room doesn't exist; Room id: " + s);
};
c.Controllers.SystemController.prototype._handlePrivateMessage = function(e) {
var t = {}, s = this._smartFox.userManager.getUserById(e.get(c.Requests.System.GenericMessageRequest.KEY_USER_ID));
if (null == s) {
if (null == e.get(c.Requests.System.GenericMessageRequest.KEY_SENDER_DATA)) {
this._log.warn("Unexpected, private message has no sender details");
return;
}
s = c.Entities.User.fromArray(e.get(c.Requests.System.GenericMessageRequest.KEY_SENDER_DATA));
}
t.sender = s;
t.message = e.get(c.Requests.System.GenericMessageRequest.KEY_MESSAGE);
t.data = e.get(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
this._smartFox._dispatchEvent(c.Event.PRIVATE_MESSAGE, t);
};
c.Controllers.SystemController.prototype._handleBuddyMessage = function() {
console.log("unsported buddy message");
};
c.Controllers.SystemController.prototype._handleModMessage = function(e) {
var t = {};
t.sender = c.Entities.User.fromArray(e.get(c.Requests.System.GenericMessageRequest.KEY_SENDER_DATA));
t.message = e.get(c.Requests.System.GenericMessageRequest.KEY_MESSAGE);
t.data = e.get(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
this._smartFox._dispatchEvent(c.Event.MODERATOR_MESSAGE, t);
};
c.Controllers.SystemController.prototype._handleAdminMessage = function(e) {
var t = {};
t.sender = c.Entities.User.fromArray(e.get(c.Requests.System.GenericMessageRequest.KEY_SENDER_DATA));
t.message = e.get(c.Requests.System.GenericMessageRequest.KEY_MESSAGE);
t.data = e.get(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
this._smartFox._dispatchEvent(c.Event.ADMIN_MESSAGE, t);
};
c.Controllers.SystemController.prototype._handleObjectMessage = function(e) {
var t = {};
t.sender = this._smartFox.userManager.getUserById(e.get(c.Requests.System.GenericMessageRequest.KEY_USER_ID));
t.message = e.get(c.Requests.System.GenericMessageRequest.KEY_XTRA_PARAMS);
this._smartFox._dispatchEvent(c.Event.OBJECT_MESSAGE, t);
};
c.Controllers.SystemController.prototype._getOrCreateUser = function(e, t, s) {
null == t && (t = !1);
var r = this._smartFox.userManager.getUserById(e.get(0).getObject());
if (null == r) (r = c.Entities.User.fromArray(e, s))._setUserManager(this._smartFox.userManager); else if (null != s) {
r._setPlayerId(e.get(3).getObject(), s);
let t = e.get(4).getObject();
for (let e = 0; e < t.size(); e++) r._setVariable(c.Entities.Variables.UserVariable.fromArray(t.get(e).getObject()));
}
t && this._smartFox.userManager._addUser(r);
return r;
};
c.Controllers.SystemController.prototype._fnUserEnterRoom = function(e) {
var t = this._smartFox.roomManager.getRoomById(e.get(c.Controllers.ROOM_PARAM));
if (null != t) {
e = this._getOrCreateUser(e.get(c.Controllers.USER_PARAM), !0, t);
t._addUser(e);
var s = {};
s.user = e;
s.room = t;
this._smartFox._dispatchEvent(c.Event.USER_ENTER_ROOM, s);
}
};
c.Controllers.SystemController.prototype._fnUserCountChange = function(e) {
var t = this._smartFox.roomManager.getRoomById(e.get(c.Controllers.ROOM_PARAM));
if (null != t) {
var s = e.get(c.Controllers.USER_COUNT_PARAM), r = 0;
null != e.get("sc") && (r = e.get(c.Controllers.SPECT_COUNT_PARAM));
t._userCount = s;
t._specCount = r;
(e = {}).room = t;
e.uCount = s;
e.sCount = r;
this._smartFox._dispatchEvent(c.Event.USER_COUNT_CHANGE, e);
}
};
c.Controllers.SystemController.prototype._fnKickUser = function(e) {
if (e.status) {
var t = e.data, s = {
user_id_kick: t.unPackInt(),
user_id_to_kick: t.unPackInt()
};
this._smartFox._dispatchEvent(c.Event.KICK_USER, s);
} else this._log.error(e.err);
};
c.Controllers.ExtensionController = function(e) {
this._smartFox = e;
this._id = 1;
this._log = e._log;
};
c.Controllers.ExtensionController.prototype.getId = function() {
return this._id;
};
c.Controllers.ExtensionController.prototype.handleMessage = function(e, t) {
e = t.get("c");
t = t.get("p");
this._smartFox.debug && this._log.info("IN < ExtensionResponse " + e);
this._smartFox._dispatchEventExtension(e, t);
};
c.Entities = {};
c.Entities.Variables = {};
c.Entities.Invitation = {};
c.Entities.Invitation.NInvitation = function(e, t, s, r) {
this.id = -1;
this.inviter = e;
this.invitee = t;
this.secondsForAnswer = null != s ? s : 15;
this.params = r;
};
c.Entities.Invitation.InvitationReply = {};
c.Entities.Invitation.InvitationReply.ACCEPT = 0;
c.Entities.Invitation.InvitationReply.REFUSE = 1;
c.Entities.Room = function(e, t, s) {
this.id = e;
this.name = t;
this.groupId = null != s ? s : "default";
this.isPasswordProtected = this.isGame = this.isHidden = this.isJoined = !1;
this._specCount = this._userCount = this.maxSpectators = this.maxUsers = 0;
this._userManager = new c.Managers.UserManager();
this._roomManager = null;
this.variables = {};
this.properties = {};
this.owner = null;
};
c.Entities.Room.fromArray = function(e) {
var t = new c.Entities.Room(e.get(0).getObject(), e.get(1).getObject(), e.get(2).getObject());
t.isGame = e.get(3).getObject();
t.isPasswordProtected = e.get(4).getObject();
t._userCount = e.get(5).getObject();
t.maxUsers = e.get(6).getObject();
let s = e.get(7).getObject();
if (null != s) for (let e = 0; e < s.size(); e++) {
let r = c.Entities.Variables.RoomVariable.fromArray(s.get(e).getObject());
t._setVariable(r);
}
if (t.isGame) {
t._specCount = e.get(9).getObject();
t.maxSpectators = e.get(10).getObject();
}
return t;
};
c.Entities.Room.prototype.setOwner = function(e) {
this.owner = e;
};
c.Entities.Room.prototype.getOwner = function() {
null == this.owner || this.owner.isPlayer() || (this.owner = null);
return this.owner;
};
c.Entities.Room.prototype.toString = function() {
return "[Room: " + this.name + ", Id: " + this.id + ", Group id: " + this.groupId + "]";
};
c.Entities.Room.prototype.getUserCount = function() {
return this.isJoined ? this.isGame ? this.getPlayerList().length : this._userManager.getUserCount() : this._userCount;
};
c.Entities.Room.prototype.getSpectatorCount = function() {
return this.isJoined ? this.isGame ? this.getSpectatorList().length : 0 : this._specCount;
};
c.Entities.Room.prototype.getCapacity = function() {
return this.maxUsers + this.maxSpectators;
};
c.Entities.Room.prototype.getUserByName = function(e) {
return this._userManager.getUserByName(e);
};
c.Entities.Room.prototype.getUserById = function(e) {
return this._userManager.getUserById(e);
};
c.Entities.Room.prototype.containsUser = function(e) {
return this._userManager.containsUser(e);
};
c.Entities.Room.prototype.getUserList = function() {
return this._userManager.getUserList();
};
c.Entities.Room.prototype.getPlayerList = function() {
let e = [];
var t = this._userManager.getUserList();
for (let r = 0; r < t.length; r++) {
var s = t[r];
s.isPlayerInRoom(this) && e.push(s);
}
return e;
};
c.Entities.Room.prototype.getSpectatorList = function() {
for (var e = [], t = this._userManager.getUserList(), s = 0; s < t.length; s++) {
var r = t[s];
r.isSpectatorInRoom(this) && e.push(r);
}
return e;
};
c.Entities.Room.prototype.getMaxUsers = function() {
return this.maxUsers;
};
c.Entities.Room.prototype.getRoomManager = function() {
return this._roomManager;
};
c.Entities.Room.prototype._setVariable = function(e) {
e.isNull() ? delete this.variables[e.name] : this.variables[e.name] = e.value;
};
c.Entities.Room.prototype.getVariable = function(e) {
return this.variables[e];
};
c.Entities.Room.prototype.getVariables = function() {
return c.Utils.ArrayUtil.objToArray(this.variables);
};
c.Entities.Room.prototype._addUser = function(e) {
this._userManager._addUser(e);
};
c.Entities.Room.prototype._removeUser = function(e) {
this.owner == e && (this.owner = null);
this._userManager._removeUser(e);
};
c.Entities.Room.prototype._setRoomManager = function(e) {
if (null != this._roomManager) throw new c.Exceptions.Error("Room Manager already assigned to Room " + this.toString());
this._roomManager = e;
};
c.Entities.Room.prototype._merge = function(e) {
this.variables = [];
for (var t in e.variables) this.variables[t] = e.variables[t];
this._userManager._clearAll();
e = e.getUserList();
for (t = 0; t < e.length; t++) this._userManager._addUser(e[t]);
};
c.Entities.User = function(e, t, s) {
this.id = e;
this.name = t;
this.isItMe = null != s && s;
this.privilegeId = 0;
this.variables = {};
this._playerIdByRoomId = {};
this._userManager = null;
this.isSuper = !1;
};
c.Entities.User.fromArray = function(e, t) {
var s = new c.Entities.User(e.get(0).getObject(), e.get(1).getObject());
s.privilegeId = e.get(2).getObject();
null != t && s._setPlayerId(e.get(3).getObject(), t);
let r = e.get(4).getObject();
if (null != r) for (let e = 0; e < r.size(); e++) {
let t = c.Entities.Variables.UserVariable.fromArray(r.get(e).value);
s._setVariable(t);
}
return s;
};
c.Entities.User.prototype.toString = function() {
return "[User: " + this.name + ", Id: " + this.id + ", Is me: " + this.isItMe + "]";
};
c.Entities.User.prototype.isJoinedInRoom = function(e) {
return e.containsUser(this);
};
c.Entities.User.prototype.isPlayer = function() {
return this.isPlayerInRoom(this._userManager._smartFox.lastJoinedRoom);
};
c.Entities.User.prototype.isSpectator = function() {
return this.isSpectatorInRoom(this._userManager._smartFox.lastJoinedRoom);
};
c.Entities.User.prototype.getPlayerId = function(e) {
var t = -1;
null != this._playerIdByRoomId[e.id] && (t = this._playerIdByRoomId[e.id]);
return t;
};
c.Entities.User.prototype.isPlayerInRoom = function(e) {
return !(null == e || !e.isGame) && 0 < this._playerIdByRoomId[e.id];
};
c.Entities.User.prototype.isSpectatorInRoom = function(e) {
return !(null == e || !e.isGame) && 0 > this._playerIdByRoomId[e.id];
};
c.Entities.User.prototype.getUserManager = function() {
return this._userManager;
};
c.Entities.User.prototype._setPlayerId = function(e, t) {
this._playerIdByRoomId[t.id] = e;
};
c.Entities.User.prototype._removePlayerId = function(e) {
delete this._playerIdByRoomId[e.id];
};
c.Entities.User.prototype._setVariable = function(e) {
e.isNull() ? delete this.variables[e.name] : this.variables[e.name] = e;
};
c.Entities.User.prototype._setVariables = function(e) {
for (var t in e) this._setVariable(e[t]);
};
c.Entities.User.prototype.getVariable = function(e) {
return this.variables[e];
};
c.Entities.User.prototype.getVariables = function() {
return c.Utils.ArrayUtil.objToArray(this.variables);
};
c.Entities.User.prototype.containsVariable = function(e) {
return null != this.variables[e];
};
c.Entities.User.prototype._setUserManager = function(e) {
if (null != this._userManager) throw new c.Exceptions.Error("User Manager already assigned to user " + this.toString());
this._userManager = e;
};
c.Entities.Match = {};
c.Entities.Match.MatchExpression = function(e, t, s) {
this.varName = e;
this.condition = t;
this.value = s;
this._parent = this.next = this.logicOp = null;
};
c.Entities.Match.MatchExpression.chainedMatchExpression = function(e, t, s, r, n) {
(e = new c.Entities.Match.MatchExpression(e, t, s)).logicOp = r;
e._parent = n;
return e;
};
c.Entities.Match.MatchExpression.prototype.and = function(e, t, s) {
return this.next = c.Entities.Match.MatchExpression.chainedMatchExpression(e, t, s, c.Entities.Match.LogicOperator.AND, this);
};
c.Entities.Match.MatchExpression.prototype.or = function(e, t, s) {
return this.next = c.Entities.Match.MatchExpression.chainedMatchExpression(e, t, s, c.Entities.Match.LogicOperator.OR, this);
};
c.Entities.Match.MatchExpression.prototype.hasNext = function() {
return null != this.next;
};
c.Entities.Match.MatchExpression.prototype.rewind = function() {
for (var e = this; null != e._parent; ) e = e._parent;
return e;
};
c.Entities.Match.MatchExpression.prototype.toString = function() {
for (var e = this.rewind(), t = e._asString(); e.hasNext(); ) t += (e = e.next)._asString();
return t;
};
c.Entities.Match.MatchExpression.prototype._asString = function() {
var e = "";
null != this.logicOp && (e += " " + this.logicOp.id + " ");
return (e = e + "(" + this.varName + " " + this.condition.symbol + " " + ("string" == typeof this.value ? "'" + this.value + "'" : this.value)) + ")";
};
c.Entities.Match.MatchExpression.prototype._toArray = function() {
var e = this.rewind(), t = [];
for (t.push(e._expressionAsArray()); e.hasNext(); ) e = e.next, t.push(e._expressionAsArray());
return t;
};
c.Entities.Match.MatchExpression.prototype._expressionAsArray = function() {
var e = [];
null != this.logicOp ? e.push(this.logicOp.id) : e.push(null);
e.push(this.varName);
e.push(this.condition.type);
e.push(this.condition.symbol);
e.push(this.value);
return e;
};
c.Entities.Match.MatchExpression.prototype.toNArray = function() {
let e = this._toArray(), t = u.newInstance();
for (let s = 0; s < e.length; s++) {
let r = e[s], n = u.newInstance();
null == r[0] ? n.addNull() : n.addUtfString(r[0]);
n.addUtfString(r[1]);
n.addByte(r[2]);
n.addUtfString(r[3]);
let i = r[4];
"string" == typeof i && n.addUtfString(i);
"number" == typeof i && n.addDouble(i);
"boolean" == typeof i && n.addBool(i);
o === typeof i && n.addNObject(i);
t.addNArray(n);
}
return t;
};
c.Entities.Match.LogicOperator = function(e) {
this.id = e;
};
c.Entities.Match.LogicOperator.AND = new c.Entities.Match.LogicOperator("AND");
c.Entities.Match.LogicOperator.OR = new c.Entities.Match.LogicOperator("OR");
c.Entities.Match.BoolMatch = function(e) {
this.type = 0;
this.symbol = e;
};
c.Entities.Match.BoolMatch.EQUALS = new c.Entities.Match.BoolMatch("==");
c.Entities.Match.BoolMatch.NOT_EQUALS = new c.Entities.Match.BoolMatch("!=");
c.Entities.Match.NumberMatch = function(e) {
this.type = 1;
this.symbol = e;
};
c.Entities.Match.NumberMatch.EQUALS = new c.Entities.Match.NumberMatch("==");
c.Entities.Match.NumberMatch.NOT_EQUALS = new c.Entities.Match.NumberMatch("!=");
c.Entities.Match.NumberMatch.GREATER_THAN = new c.Entities.Match.NumberMatch(">");
c.Entities.Match.NumberMatch.GREATER_THAN_OR_EQUAL_TO = new c.Entities.Match.NumberMatch(">=");
c.Entities.Match.NumberMatch.LESS_THAN = new c.Entities.Match.NumberMatch("<");
c.Entities.Match.NumberMatch.LESS_THAN_OR_EQUAL_TO = new c.Entities.Match.NumberMatch("<=");
c.Entities.Match.StringMatch = function(e) {
this.type = 2;
this.symbol = e;
};
c.Entities.Match.StringMatch.EQUALS = new c.Entities.Match.StringMatch("==");
c.Entities.Match.StringMatch.NOT_EQUALS = new c.Entities.Match.StringMatch("!=");
c.Entities.Match.StringMatch.CONTAINS = new c.Entities.Match.StringMatch("contains");
c.Entities.Match.StringMatch.STARTS_WITH = new c.Entities.Match.StringMatch("startsWith");
c.Entities.Match.StringMatch.ENDS_WITH = new c.Entities.Match.StringMatch("endsWith");
c.Entities.Match.RoomProperties = {};
c.Entities.Match.RoomProperties.NAME = "${N}";
c.Entities.Match.RoomProperties.GROUP_ID = "${G}";
c.Entities.Match.RoomProperties.MAX_USERS = "${MXU}";
c.Entities.Match.RoomProperties.MAX_SPECTATORS = "${MXS}";
c.Entities.Match.RoomProperties.USER_COUNT = "${UC}";
c.Entities.Match.RoomProperties.SPECTATOR_COUNT = "${SC}";
c.Entities.Match.RoomProperties.IS_GAME = "${ISG}";
c.Entities.Match.RoomProperties.IS_PRIVATE = "${ISP}";
c.Entities.Match.RoomProperties.HAS_FREE_PLAYER_SLOTS = "${HFP}";
c.Entities.Match.RoomProperties.IS_TYPE_SFSGAME = "${IST}";
c.Entities.Match.UserProperties = {};
c.Entities.Match.UserProperties.NAME = "${N}";
c.Entities.Match.UserProperties.IS_PLAYER = "${ISP}";
c.Entities.Match.UserProperties.IS_SPECTATOR = "${ISS}";
c.Entities.Match.UserProperties.IS_NPC = "${ISN}";
c.Entities.Match.UserProperties.PRIVILEGE_ID = "${PRID}";
c.Entities.Match.UserProperties.IS_IN_ANY_ROOM = "${IAR}";
c.Entities.Variables.VariableType = {
_typeStrings: "Null Bool Int Double String Object Array".split(" "),
NULL: 0,
BOOL: 1,
INT: 2,
DOUBLE: 3,
STRING: 4,
OBJECT: 5,
ARRAY: 6
};
c.Entities.Variables.VariableType.getTypeName = function(e) {
return this._typeStrings[e];
};
c.Entities.Variables.VariableType.getTypeIdFromName = function(e) {
return this._typeStrings.indexOf(e);
};
c.Entities.Variables.UserVariable = t.Class.extend({
ctor(e, t, s) {
this.name = e;
this.value = t;
this._setType(s);
},
toString() {
return "[UserVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + "]";
},
isNull: function() {
return c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.NULL;
},
toArray() {
return [ this.name, c.Entities.Variables.VariableType.getTypeIdFromName(this.type), this.value ];
},
toNArray() {
let e = u.newInstance();
e.addUtfString(this.name);
e.addBool(!0);
c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.NULL ? e.addNull() : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.BOOL ? e.addBool(this.value) : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.INT ? e.addInt(this.value) : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.DOUBLE ? e.addDouble(this.value) : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.STRING ? e.addUtfString(this.value) : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.OBJECT ? e.addNObject(this.value) : c.Entities.Variables.VariableType.getTypeIdFromName(this.type) == c.Entities.Variables.VariableType.ARRAY && e.addNArray(this.value);
return e;
},
_setType(e) {
null == e && (e = -1);
-1 < e ? this.type = this.getTypeName(e) : null == this.value ? this.type = this.getTypeName(c.Entities.Variables.VariableType.NULL) : "boolean" == (e = typeof this.value) ? this.type = this.getTypeName(c.Entities.Variables.VariableType.BOOL) : "number" == e ? this.type = this.value === +this.value && this.value === (0 | this.value) ? this.getTypeName(c.Entities.Variables.VariableType.INT) : this.getTypeName(c.Entities.Variables.VariableType.DOUBLE) : "string" == e ? this.type = this.getTypeName(c.Entities.Variables.VariableType.STRING) : "object" == e && (this.type = this.value instanceof Array ? this.getTypeName(c.Entities.Variables.VariableType.ARRAY) : this.getTypeName(c.Entities.Variables.VariableType.OBJECT));
},
getTypeName: e => c.Entities.Variables.VariableType.getTypeName(e)
});
c.Entities.Variables.UserVariable.fromArray = function(e) {
return new c.Entities.Variables.UserVariable(e.get(0).value, e.get(2).value, e.get(1).value);
};
c.Entities.Variables.RoomVariable = c.Entities.Variables.UserVariable.extend({
ctor(e, t, s) {
this._super(e, t, s);
this.isPersistent = this.isPrivate = !1;
},
toString: function() {
return "[RoomVar: " + this.name + ", Type: " + this.type + ", Value: " + this.value + ", Is private: " + this.isPrivate + "]";
},
toArray: function() {
var e = this._super();
e.push(this.isPrivate);
e.push(this.isPersistent);
return e;
},
toNArray() {
let e = this._super();
e.addBool(this.isPrivate);
e.addBool(this.isPersistent);
return e;
}
});
c.Entities.Variables.RoomVariable.fromArray = function(e) {
return new c.Entities.Variables.RoomVariable(e.get(0).getObject(), e.get(2), e.get(1).getObject());
};
c.Managers = {};
c.Managers.UserManager = t.Class.extend({
ctor: function(e) {
this._smartFox = e;
this._usersById = new h.HashTable();
this._usersByName = new h.HashTable();
this._log = new _();
},
containsUserName: function(e) {
return this._usersByName.hasItem(e);
},
containsUserId: function(e) {
return this._usersById.hasItem(e);
},
containsUser: function(e) {
return this._usersById.hasItem(e.id);
},
getUserById: function(e) {
return this._usersById.getItem(e);
},
getUserByName: function(e) {
return this._usersByName.getItem(e);
},
getUserCount: function() {
return this._usersById.length;
},
getUserList: function() {
return this._usersById.values();
},
_addUser: function(e) {
this._usersById.hasItem(e.id) || this.__addUser(e);
},
__addUser: function(e) {
this._usersByName.setItem(e.name, e);
this._usersById.setItem(e.id, e);
},
_removeUser: function(e) {
this._usersById.removeItem(e.id);
this._usersByName.removeItem(e.name);
},
_removeUserById: function(e) {
this._usersById.removeItem(e.id);
this._usersByName.removeItem(e.name);
},
_clearAll: function() {
this._usersById.clear();
this._usersByName.clear();
}
});
c.Managers.GlobalUserManager = c.Managers.UserManager.extend({
ctor: function(e) {
this._super(e);
this._roomRefCount = [];
},
_addUser: function(e) {
null == this._roomRefCount[e] ? this._roomRefCount[e] = 1 : this._roomRefCount[e]++;
this.__addUser(e);
},
_removeUser: function(e) {
null != this._roomRefCount ? 1 > this._roomRefCount[e] ? this._log.warn("GlobalUserManager RefCount is already at zero. User: " + e) : (this._roomRefCount[e]--, 
0 == this._roomRefCount[e] && (this._removeUser(e), delete this._roomRefCount[e])) : this._log.warn("Can't remove User from GlobalUserManager. RefCount missing. User: " + e);
}
});
c.Managers.RoomManager = function(e) {
this._smartFox = e;
this._ownerZone = null;
this._groups = [];
this._roomsById = new h.HashTable();
this._roomsByName = new h.HashTable();
};
c.Managers.RoomManager.prototype.getRoomGroups = function() {
return this._groups;
};
c.Managers.RoomManager.prototype.containsGroup = function(e) {
return -1 < this._groups.indexOf(e);
};
c.Managers.RoomManager.prototype.containsRoom = function(e) {
return "number" == typeof e ? this._roomsById.hasItem(e) : this._roomsByName.hasItem(e);
};
c.Managers.RoomManager.prototype.containsRoomInGroup = function(e, t) {
var s, r = this.getRoomListFromGroup(t), n = !1, i = "number" == typeof e;
for (s in r) {
var o = r[s];
if (i) {
if (o.id == e) {
n = !0;
break;
}
} else if (o.name == e) {
n = !0;
break;
}
}
return n;
};
c.Managers.RoomManager.prototype.getRoomById = function(e) {
return this._roomsById.getItem(e);
};
c.Managers.RoomManager.prototype.getRoomByName = function(e) {
return this._roomsByName.getItem(e);
};
c.Managers.RoomManager.prototype.getRoomList = function() {
return this._roomsById.values();
};
c.Managers.RoomManager.prototype.getRoomCount = function() {
return this._roomsById.length;
};
c.Managers.RoomManager.prototype.getRoomListFromGroup = function(e) {
var t, s = [];
for (t in this._roomsById.items) if (this._roomsById.hasItem(t)) {
var r = this._roomsById.items[t];
r.groupId == e && s.push(r);
}
return s;
};
c.Managers.RoomManager.prototype.getJoinedRooms = function() {
var e, t = [];
for (e in this._roomsById.items) if (this._roomsById.hasItem(e)) {
var s = this._roomsById.items[e];
s.isJoined && t.push(s);
}
return t;
};
c.Managers.RoomManager.prototype.getUserRooms = function(e) {
var t, s = [];
for (t in this._roomsById.items) if (this._roomsById.hasItem(t)) {
var r = this._roomsById.items[t];
r.containsUser(e) && s.push(r);
}
return s;
};
c.Managers.RoomManager.prototype._addRoom = function(e, t) {
null == t && (t = !0);
this._roomsById.setItem(e.id, e);
this._roomsByName.setItem(e.name, e);
t ? this.containsGroup(e.groupId) || this._addGroup(e.groupId) : e._isManaged = !1;
};
c.Managers.RoomManager.prototype._replaceRoom = function(e, t) {
null == t && (t = !0);
var s = this.getRoomById(e.id);
if (null != s) return s._merge(e), s;
this._addRoom(e, t);
return e;
};
c.Managers.RoomManager.prototype._removeRoom = function(e) {
this._roomsById.removeItem(e.id);
this._roomsByName.removeItem(e.name);
};
c.Managers.RoomManager.prototype._removeRoomById = function(e) {
null != (e = this.getRoomById(e)) && this._removeRoom(e);
};
c.Managers.RoomManager.prototype._removeRoomByName = function(e) {
null != (e = this.getRoomByName(e)) && this._removeRoom(e);
};
c.Managers.RoomManager.prototype._changeRoomName = function(e, t) {
var s = e.name;
e.name = t;
this._roomsByName.setItem(t, e);
this._roomsByName.removeItem(s);
};
c.Managers.RoomManager.prototype._changeRoomPasswordState = function(e, t) {
e.isPasswordProtected = t;
};
c.Managers.RoomManager.prototype._changeRoomCapacity = function(e, t, s) {
e.maxUsers = t;
e.maxSpectators = s;
};
c.Managers.RoomManager.prototype._addGroup = function(e) {
this._groups.push(e);
};
c.Managers.RoomManager.prototype._removeGroup = function(e) {
h.ArrayUtil.removeItem(this._groups, e);
var t;
e = this.getRoomListFromGroup(e);
for (t in e) {
var s = e[t];
s.isJoined ? s._isManaged = !1 : this._removeRoom(s);
}
};
c.Managers.RoomManager.prototype._removeUser = function(e) {
for (var t in this._roomsById.items) if (this._roomsById.hasItem(t)) {
var s = this._roomsById.items[t];
s.containsUser(e) && s._removeUser(e);
}
};
e.SmartFoxSDK = {};
let m = null, E = new _();
E.setLevel(_.LogLevel.DEBUG);
SmartFoxSDK.Instance = function() {
null == m && (m = new c());
return m;
}();
SmartFoxSDK.newInstance = function(e) {
return new c(e);
};
SmartFoxSDK.SmartFox = {};
SmartFoxSDK.SmartFox.Event = c.Event;
SmartFoxSDK.SmartFox.Requests = c.Requests;
SmartFoxSDK.SmartFox.Entities = c.Entities;
SmartFoxSDK.SmartFox.ClientDisconnectionReason = c.ClientDisconnectionReason;
SmartFoxSDK.MessagePack = function() {
this.byteArray = new l();
this.initBytes = function(e) {
this.byteArray = new l();
this.byteArray.initWithBytes(e);
};
this.getByteArray = function() {
return this.byteArray.getArrayBuffer();
};
this.getBytes = function() {
let e = [], t = new Int8Array(this.getByteArray());
for (let s = 0; s < t.length; s++) e.push(t[s]);
return e;
};
this.packInt = function(e) {
this.byteArray.writeInt(e);
};
this.packString = function(e) {
this.byteArray.writeString(e);
};
this.packBoolean = function(e) {
this.byteArray.writeBoolean(e);
};
this.packShort = function(e) {
this.byteArray.writeShort(e);
};
this.packByte = function(e) {
this.byteArray.writeByte(e);
};
this.packDouble = function(e) {
this.byteArray.writeDouble(e);
};
this.packFloat = function(e) {
this.byteArray.writeFloat(e);
};
this.unPackByte = function() {
return this.byteArray.readByte();
};
this.unPackBoolean = function() {
return this.byteArray.readBoolean();
};
this.unPackShort = function() {
return this.byteArray.readShort();
};
this.unPackInt = function() {
return this.byteArray.readInt();
};
this.unPackFloat = function() {
return this.byteArray.readFloat();
};
this.unPackDouble = function() {
return this.byteArray.readDouble();
};
this.unPackString = function() {
return this.byteArray.readString();
};
};
SmartFoxSDK.ByteArray = l;
SmartFoxSDK.SObject = o;
SmartFoxSDK.SArray = u;
SmartFoxSDK.Logger = _;
SmartFoxSDK.debug = !1;
SmartFoxSDK.Host = "127.0.0.1";
SmartFoxSDK.Port = 8443;
SmartFoxSDK.Class = t.Class;
})(window);