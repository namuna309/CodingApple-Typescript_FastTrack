var nm = 'kim';
var nms = ['kim', 'park'];
var nmo = { n: 'kim' };
// 다양한 타입이 들어올 수 있게 하려면
var nud = 123;
var nt = 123;
// 함수에 타입 지정 가능
function func(x) {
    return x * 2;
}
var john = [1, true];
var john2 = { name: 'kim' };
var john3 = { name: 'kim' };
// class 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
