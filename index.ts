let nm : string = 'kim';
let nms : string[] = ['kim', 'park'];
let nmo : { n : string} = { n : 'kim'}

// 다양한 타입이 들어올 수 있게 하려면
let nud : string | number = 123;
// 타입은 변수에 담아 쓸 수 있음
type myType = string | number;
let nt: myType = 123;

// 함수에 타입 지정 가능
function func(x : number) :number {
    return x * 2;
}

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [1, true];

// object 타입 지정
type Member2 = {
    name: string
}
let john2:Member2 = { name : 'kim' }

// objct에 타입 지정해야할 속성이 너무 많으면
type Member3 = {
    [key: string] : string,
}
let john3 = { name: 'kim'}

// class 타입 지정 가능
class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}