var Suit = {};
Suit.Heart = 0;
Suit.Diamond = 1;
Suit.Spade = 2;
Suit.Club = 3;
let SuitName = 'heart,diamond,spade,club'.split(',');
var A2_10JQK = '2,3,4,5,6,7,8,9,10,11,12,13,1'.split(',');
function Card(id) {
    Object.defineProperties(this, {
        point: {
            value: id % 13,
            writable: false
        },
        suit: {
            value: Math.floor(id / 13),
            writable: false
        },
        id: {
            value: id,
            writable: false
        },
        pointName: {
            get: function () {
                return A2_10JQK[this.point];
            }
        },
        suitName: {
            get: function () {
                return SuitName[this.suit];
            }
        },
        nameFile: {
            get: function () {
                return parseInt(this.pointName) + 13 * this.suit;
            }
        },
        color: {
            get: function () {
                if(this.suit == Suit.Diamond || this.suit == Suit.Heart){
                    return cc.Color.RED;
                }else{
                    return cc.Color.BLACK;
                }
            }
        }
    })
};
Card.prototype.toString = function () {
    return this.pointName + ' '+ this.suitName;
};
module.exports = {
    Card: Card,
    Suit: Suit
}