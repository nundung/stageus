
function toggleMenu() {
    var openmenu = document.getElementById("openmenu");
    var main = document.getElementById("main");
    var overlay = document.getElementById("overlay");
    var mainwidth = parseInt(window.getComputedStyle(main).width)
    
    //화면 크기별로 다른 애니메이션 효과 적용
    if (mainwidth >= 1300) { 

        // display = ""이거나 "none"일 때 (|| = or)
        if (getComputedStyle(openmenu).left === "-230px") {  
        //== (동등 연산자, Equal Operator): ==는 값의 동등성을 비교
        //=== (일치 연산자, Strict Equal Operator): ===는 값의 동등성 및 데이터 형식(타입)도 비교
            openmenu.style.left = "0px"; 
            main.style.marginLeft = "245px";
        } 

        // 이외의 경우 (display = "block"일 때)
        else { 
            openmenu.style.left = "-230px";
            main.style.marginLeft = "85px";
            overlay.style.display = "none";
        }
    }
    else { 
        if (getComputedStyle(openmenu).left === "-230px") {
            openmenu.style.left = "0px";
            overlay.style.display = "block";
            main.style.marginLeft = "85px";
        } 
        else{
            openmenu.style.left = "-230px";
            overlay.style.display = "none";
            main.style.marginLeft = "85px";
        }
    }
}