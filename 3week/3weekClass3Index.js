

//html에 작성한 숫자 가져오기
function add() {
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    //계산
    var result = parseInt(number1) + parseInt(number2)

    console.log(result)

    //계산된 결과를 화면에 반영
    document.getElementById("result_box").innerHTML = result
}






//과정 축약버전
function addEvent( ) {

    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    document.getElementById("result_box").innerHTML = number1 + number2
}   

function subEvent() {
    
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    document.getElementById("result_box").innerHTML = number1 - number2
}

function gEvent() {
    
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    document.getElementById("result_box").innerHTML = number1 * number2
}

function nEvent() {
    
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    document.getElementById("result_box").innerHTML = number1 / number2
}

function compareEvent() {
    
    var number1 = parseInt(document.getElementById("num1").value)
    var number2 = parseInt(document.getElementById("num2").value)

    var result = ""
    if (number1 > number2) {
        result = "1번 숫자가 더 큼"
    }
    else if (number1 < number2) {
        result = "2번 숫자가 더 큼"
    }
    else if (number1 == number2) {
        result = "서로 같음"
    }
    else if (number1 <= number2) {
        result = "2번이 크거나 같음"
    }
    else {
        result = "님 뭐 잘못 입력한 것 같음"
    }
    
    
    document.getElementById("result_box").innerHTML = result
}

