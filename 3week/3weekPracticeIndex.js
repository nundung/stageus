

function random() {
    let num = [];
    let i = 0;
    while (i < 3) {
        let n = Math.floor (Math.random() * 10);
        if (!num.includes(n)) { // 중복된 숫자가 아닌 경우에만 추가
            num.push(n);
            i++;
        }
    }
    return num;
}
const str = random();
console.log(str);

let selectNum = [];

let n = 0;
function removeEvent() {
    if (selectNum.length > 0) {
        selectNum.pop(); 
        document.getElementById("nowInsert").innerHTML = selectNum.join(" ");
    }
}

function addEvent(e) {
    var s = parseInt(e.target.innerHTML) 

    if (!(selectNum.includes(s))) {
        selectNum.push(s);
        console.log(s)
        document.getElementById("nowInsert").innerHTML = selectNum.join(" "); 
        document.getElementById("nowResult").innerHTML = ""
    }
    // else {
    //     return;
    // }
    if (selectNum.length == 3) {
        n++
        calculate();
        clear();
    }
    if (n == 9) {
        clear();
    }
    console.log(n)
}

function clear() {
    selectNum = [];
    document.getElementById("nowInsert").innerHTML = ""
}


function calculate() {
    const first_num = str[0];
    const second_num = str[1];
    const last_num = str[2];
        
    var one = selectNum[0];
    var two = selectNum[1];
    var three = selectNum[2];
    
    let strike = 0;
    let boll = 0;
    let out = 0;
    
    if(!(str.includes(one))) {
        out++;
    }
    else if (str.includes(one)) {
        if(!(one==first_num)) {
            boll++;
        }
        else if (one==first_num) {
            strike++;
        }
    }
    if(!(str.includes(two))) {
        out++;
    }
    else if (str.includes(two)) {
        if(!(two==second_num)) {
            boll++;
        }
        else if (two==second_num) {
            strike++;
        }
    }
    if(!(str.includes(three))) {
        out++;
    }
    else if (str.includes(three)) {
        if(!(three==last_num)) {
            boll++;
        }
        else if (three==last_num) {
            strike++;
        }
    }
    if (strike == 3) {
        alert ("축하합니다!")
    }
    document.getElementById("nowResult").innerHTML = selectNum.join(" ") + " : " + boll + "boll" + " " + strike + "strike" + " " + out + "out<br>"
    document.getElementById("historyBox").innerHTML += selectNum.join(" ") + " : " + boll + "boll" + " " + strike + "strike" + " " + out + "out<br>"
}








