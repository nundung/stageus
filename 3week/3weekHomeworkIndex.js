// 체 기법

// js 명령어 중에, list내에서 특정 값 n개를 뽑아주는 명령어 : splice()

// 반복문 While

var randomNumbers = [];

for(var i=0; i<3;) {
    var n = Math.floor(Math.random() * 9 + 1)
    if (!randomNumbers.includes(n)) {
        randomNumbers.push(n)
        i++
    }
}

console.log(randomNumbers)

// for (var index=1; index<10; index++) {
//     var numberButton = document.createElement("button")
//     numberButton.innerHTML = (index)
//     numberButton.className = "numberButton"
//     numberButton.addEventListener("click", addEvent)
//     document.getElementById("buttons").appendChild(numberButton)
// }
// var removeButton = document.createElement("button")
// removeButton.id = "removeButton"
// removeButton.innerHTML = "←"
// removeButton.addEventListener("click", removeEvent)
// document.getElementById("buttons").appendChild(removeButton)



var selectNumbers=[];

function removeEvent() {
    if (selectNumbers.length > 0) {
        selectNumbers.pop(); 
        document.getElementById("nowInsert").innerHTML = selectNumbers.join(" ");
    }
}

function addEvent(e) {
    var n= parseInt(e.target.innerHTML)
    if (!selectNumbers.includes(n)) {
        selectNumbers.push(n)
        document.getElementById("nowInsert").innerHTML = selectNumbers.join(" ")
        document.getElementById("nowResult").innerHTML = ""
    }
    if (selectNumbers.length == 3) {
        calculate()
        clear()
    }
    
}

function clear() {
    selectNumbers = [];
    document.getElementById("nowInsert").innerHTML = ""
}

function calculate() {
    var ball = 0;
    var strike = 0;
    var out = 0;
    for (var i=0; i<3; i++) {
        if(randomNumbers.includes(selectNumbers[i])) {
            if(randomNumbers[i] == selectNumbers[i]) {
                strike++
            }
            else {
            ball++
            }
        }
        else {
            out++
        }
    }
    if (strike == 3) {
        console.log(strike)
        document.getElementById("sucess").innerHTML = "☆성공했습니다☆"
    }
    document.getElementById("nowResult").innerHTML = selectNumbers.join(" ") + " : " + ball + " ball" + " " + strike+ "strike" + " " + out + "out"
    document.getElementById("historyBox").innerHTML += selectNumbers.join(" ") + " : " + ball + "ball" + " " + strike + "strike" + " " + out + "out<br>"
}


