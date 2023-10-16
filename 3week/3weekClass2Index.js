console.log("스테이") //값을 호출하는 함수
console.log("스테이")
console.log("스테이")
console.log("스테이")


//1 기본적인 함수
function printMessage() {
    console.log("지어스")
}

function printMessage2() {
    console.log("태은")
}

printMessage()
printMessage()
printMessage2()
printMessage()
printMessage()

function volumeOfSphere() {
    console.log(4 / 3 * 3.14 * 8 * 8 * 8)
}

volumeOfSphere()

function power1() {
    console.log(3 * 3) 
}

power1()


//2 매개변수 함수
function power2(num) {
    console.log(num * num) //=number 
}

power2(56)


//3 계산해주는 매개변수 함수
function power3(number) {
    return number * number //계산만 해주는 함수
}

console.log(power3(8))


//3 계산해주는 함수
function power4() {
    return(7*7)
}

console.log(power4())

function power5() {
    console.log(7*7)
}
power5()


//변수 (임시로 값을 저장해두는 것, 몇 번이든 재활용 가능)
var number = 10

console.log(number)
console.log(number * number)

number = 20 //중간에 변수값을 바꿀수도 있음

console.log(number)


//변수-자료형(data type)
//(어떠한 형태의 데이터가 저장되어 있는것)

var number1 = 10    //숫자(interger)
var number2 = "10"  //문자(string)

console.log(number1 + number1)
console.log(number2 + number2)



//지역변수, 전역변수 (중괄호 안에 있는 것만 지역변수, 중괄호 안에서만 유효함.)

var number=10 //전역변수 
//이 페이지가 닫힐 때 까지 계속 남음.(많이 쓸수록 메모리가 낭비 됨.)
//이 파일 아무곳에서 접근 가능한 함수
//모든 변수를 전역변수로 쓰면 메모리가 많이 소비 된다.

console.log(number)

function printMessage() {
    var message = "스테이지어스" //지역변수 
    //(함수가 호출될 때 실행 됨.) 
    //함수가 종료될 때 없어짐.
    console.log(message)
    console.log(message)
}

printMessage()


function addEvent() {
    console.log("눌림")
}
