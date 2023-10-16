function gugudanEvent() {
    var number = parseInt(document.getElementById("number").value)
    // document.getElementById("result1").innerHTML = number * 1
    // document.getElementById("result2").innerHTML = number * 2
    // document.getElementById("result3").innerHTML = number * 3
    // document.getElementById("result4").innerHTML = number * 4
    // document.getElementById("result5").innerHTML = number * 5
    // document.getElementById("result6").innerHTML = number * 6
    // document.getElementById("result7").innerHTML = number * 7
    // document.getElementById("result8").innerHTML = number * 8
    // document.getElementById("result9").innerHTML = number * 9

    for(var index= 0; index < 9; index++) {
    //변수에 0을 넣고 조건에 만족하는지를 확인하고 index를 증가시킴 : 이게 반복문임
    //반복문 안에서 index를 활용할 수 있음
    var tmp = document.createElement("p") //js에서 HTML태그를 만드는 명령어
    tmp.innerHTML = number * (index + 1)
    document.getElementById("result_box").appendChild(tmp) // HTML에 자식으로 태그를 넣는 명령어
        // document.getElementById("result" + (index + 1)).innerHTML = number * (index + 1)
    }  
}

//동적으로 태그를 만드는 법
// var tmp = document.createElement("p")
// tmp.innerHTML = "스테이지어스"
// tmp.id = "box"
// tmp.className = "style"

// document.getElementById("").appendChild(tmp) 




// list 

var num1 = 10
var num2 = 20
var num3 = 30

console.log(num1)
console.log(num2)
console.log(num3)

// for (var index = 0; index < 3; index++) {
// console.log(num + (index + 1))
// }이건 안 됨


//변수를 묶어서 관리하는게 list
var numList = [10, 20, 30]

numList[2] ////30
console.log(numList[3]) ////error
console.log(numList[0])
numList.push(50)
numList.push(60)


for (var index = 0; index < numList.length; index++) { //inex < 3; 안 됨
    console.log(numList[index])
}




