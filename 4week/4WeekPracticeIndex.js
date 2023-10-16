
var puzzleList0 = []
var puzzleList1 = []
var puzzleList2 = []
var ImageList = ["image/sponge0.jpg", "image/sponge1.jpg", "image/sponge2.jpg"]
var puzzleLists = [puzzleList0, puzzleList1, puzzleList2]

for (var i=0; i<9; i++) {
    puzzleList0.push("image/pz0_"+[i]+".jpg")
}
for (var i=0; i<12; i++) {
    puzzleList1.push("image/pz1_"+[i]+".jpg")
}
for (var i=0; i<20; i++) {
    puzzleList2.push("image/pz2_"+[i]+".jpg")
}

var j = null
function levelSelectEvent(clickedNum) {
    console.log(clickedNum)
    if (j == null) {
        j = clickedNum
        makeGame()
    }
    else {
        j = clickedNum
        resetGame()
    }
}

var randomNumList = [];
var puzzleBox = document.getElementById("puzzleBox")
var resultBox = document.getElementById("resultBox")
var head = document.getElementById("head")
var puzzleOriginalImage = document.createElement("img")

function makeGame() {
    //상단 예시용 퍼즐 완성 그림
    puzzleOriginalImage.src = ImageList[j]
    puzzleOriginalImage.id = "puzzleOriginalImage"
    head.appendChild(puzzleOriginalImage)

    for (var i=0; i < (puzzleLists[j]).length;) {
        var n = Math.floor (Math.random() * (puzzleLists[j]).length);
        var puzzleImage = document.createElement("img")
        var puzzleDiv = document.createElement("div")
        //랜덤숫자 n을 만들어서 중복수가 아닌 경우 그 숫자에 해당하는 배열을 뽑아서 src로 씀
        if (!randomNumList.includes(n)) {
            randomNumList.push(n)
            puzzleImage.id =[n]
            puzzleImage.src = (puzzleLists[j])[n]
            i++;

            puzzleBox.className = "puzzleBox"+j

            puzzleImage.className = "images" 
            puzzleImage.draggable = true
            puzzleImage.addEventListener("dragstart", dragStartEvent)
            // console.log(puzzleBox.className)

            puzzleDiv.className = "puzzles"
            puzzleDiv.addEventListener("dragover", dragOverEvent)
            puzzleDiv.addEventListener("drop", dropEvent)
            puzzleDiv.appendChild(puzzleImage)
            puzzleBox.appendChild(puzzleDiv)
        }
    }
    //HTML 속성인 ondragstart를 JavaScript에서 addEventListener를 
    //사용하여 할당할 때 ondragstart 이벤트명 앞에 "on"을 제거해야 함 
    for (var i=0; i<(puzzleLists[j]).length; i++) {
        var puzzleDiv = document.createElement("div")
        var puzzleImage = document.createElement("img")
        puzzleImage.src ="image/transparent.png"
        puzzleDiv.className = "puzzles"
        puzzleImage.className = "transparent"
        resultBox.className = "resultBox"+j
        puzzleDiv.addEventListener("dragover", dragOverEvent)
        puzzleDiv.addEventListener("drop", dropEvent)
        resultBox.appendChild(puzzleDiv)
        puzzleDiv.appendChild(puzzleImage)
    }
}


var dragstartItem = null
var dragStartLocation = null
var dragEndItem = null
var dragEndLocation =null

function dragStartEvent(e) {
    dragStartLocation = e.target.parentElement
    dragstartItem = e.target
}

function dragOverEvent(e) {
    e.preventDefault()
}

var resultCollection = document.getElementsByClassName("puzzles")
var resultChildren = null
var imageTag = null
var imageId = null
var success = document.getElementById("success")

function dropEvent(e) {
    dragEndItem = e.target
    dragEndLocation = e.target.parentElement
    dragEndLocation.appendChild(dragstartItem)
    dragStartLocation.appendChild(dragEndItem)

    var startIndex = (puzzleLists[j]).length; // 시작 인덱스
    var endIndex = ((puzzleLists[j]).length)*2; // 종료 인덱스
    var resultIndex = Array.from(resultCollection).slice(startIndex, endIndex);
    
    for (var i=0; i<(puzzleLists[j]).length;) {
        resultChildren = resultIndex[i].children
        imageTag = resultChildren[0]
        console.log(imageTag)
        imageId = imageTag.id
        console.log(imageId)
        if (imageId == i) {
            i++
        }
        else {// imgeTag의 Id=[i] 가 아닐경우
            return;// 함수 실행 중지
        }
    }
    if (i == (puzzleLists[j]).length) {
        if (j == puzzleLists.length - 1) {
            success.innerHTML = "☆성공했습니다☆"
        }
        else {
            var nextLevelButton = document.createElement("button")
            nextLevelButton.innerHTML = "다음단계"
            nextLevelButton.className = "levelSelectButton"
            nextLevelButton.clickedNum = j + 1;
            nextLevelButton.addEventListener("click", function(event) {
            levelSelectEvent(event.target.clickedNum);})
            success.appendChild(nextLevelButton)
        }
    }
}

function resetGame() {
    puzzleBox.innerHTML = ""
    resultBox.innerHTML = ""
    puzzleOriginalImage.remove()
    success.innerHTML = ""
    randomNumList = [];
    dragstartItem = null;
    dragStartLocation = null;
    dragEndItem = null;
    dragEndLocation = null;
    makeGame()
}















// var puzzleList = ["image/pz1_1.jpg", "image/pz1_2.jpg", "image/pz1_3.jpg", "image/pz1_4.jpg", "image/pz1_5.jpg", "image/pz1_6.jpg", "image/pz1_7.jpg", "image/pz1_8.jpg", "image/pz1_9.jpg"]
// var randomNumberList = []

// var puzzleBox = document.getElementById("puzzleBox")

// for(var i=0; i<puzzleList.length;) {
//     var puzzleDiv = document.createElement("div")
//     var puzzleImage = document.createElement("img")
//     var n = Math.floor(Math.random()* (puzzleList.length))
//     if (!randomNumberList.includes(n)) {
//         randomNumberList.push(n)
//         console.log(puzzleList[n])
//         puzzleImage.src = puzzleList[n]
//         puzzleImage.id = n
//         puzzleImage.className = "puzzleImage"
//         puzzleDiv.className = "puzzleDiv"

//         puzzleBox.appendChild(puzzleDiv)
//         puzzleDiv.appendChild(puzzleImage)

        // puzzleList.splice(n, 1, n) 
        //splice를 사용하면 puzzleList.length가 줄어듦으로 n번째자리에 
        //대신 n을 넣어놓음 근데 splice하나 마나 똑같음 동작은
        // i++

    // var randomIndex = Math.floor(Math.random() * puzzleList.length);
    // var selectedImage = puzzleList[randomIndex];
    // puzzleList.splice(randomIndex,1)
    // 이렇게하면 length가 줄어들어서 id부여하기 어렵다.
//     }
// }

// var resultBox = document.getElementById("resultBox")

// for(var i=0; i<puzzleList.length;) {
//     var resultDiv = document.createElement("div")
//     resultDiv.id = i
//     resultDiv.className = "resultDiv"
//     resultBox.appendChild(resultDiv)
//     i++
// }






























// for (var i=0; i<puzzleList1.length;) {
//     var puzzleDiv = document.createElement("div")
//     var puzzleImage = document.createElement("image")
//     let n = Math.floor (Math.random() * puzzleList1.length)
//     if (!randomList1.includes(n)) {
//         randomList1.push(n)
//         puzzleImage.src = puzzleList1[i]
//         puzzleImage.id = [i] 
//         puzzleImage.className = "images"
//         puzzleImage.draggable = true
//         puzzleImage.addEventListener("dragstart", dragStartEvent)
//         puzzleDiv.appendChild(puzzleImage)
//         puzzleDiv.className = "puzzles"
//         puzzleDiv.addEventListener("dragover", dragOverEvent)
//         puzzleDiv.addEventListener("drop", dropEvent)
//         document.getElementById("puzzleBox").appendChild(puzzleDiv)
//         i++
//     }
// }

// for (var i=0; i<puzzleList1.length; i++) {
//     var resultDiv = document.createElement("div")
//     resultDiv.className = "results"
//     resultDiv.addEventListener("dragover", dragOverEvent)
//     resultDiv.addEventListener("drop", dropEvent)
//     document.getElementById("resultBox").appendChild(resultDiv)
// }


// var dragStarItem = null
// var dragStartLoction = null








// var dragStartBox = null
// var dragStartLocation = null
// var dragEndBox = null
// var dragEndLocation = null
// function dragStartEvent(e) {
//     dragStartBox = e.target
//     dragStartLocation = e.target.parentElement
//     console.log(dragStartBox)
//     console.log(dragStartLocation)
// }

// function dragOverEvent(e) {
//     e.preventDefault()
// }

// function dropEvent(e) {
//     console.log(e.target)
//     console.log(e.target.className)
//     if (e.target.className == "dropBox" || e.target.className == "dragBox") {
//         dragEndLocation = e.target
//         dragEndLocation.appendChild(dragStartBox)
//     }
//     else {
//         dragEndBox = e.target
//         dragEndLocation = e.target.parentElement
//         dragEndLocation.appendChild(dragStartBox)
//         dragStartLocation.appendChild(dragEndBox)
//     }
    
//     console.log(dragEndLocation)
//     console.log(dragStartLocation)
// }





























// var puzzleList0 = ["image/pz1_1.jpg", "image/pz1_2.jpg", "image/pz1_3.jpg", "image/pz1_4.jpg", "image/pz1_5.jpg", "image/pz1_6.jpg", "image/pz1_7.jpg", "image/pz1_8.jpg", "image/pz1_9.jpg"]
// var puzzleList1 = ["image/pz2_1.jpg","image/pz2_2.jpg","image/pz2_3.jpg","image/pz2_4.jpg","image/pz2_5.jpg","image/pz2_6.jpg","image/pz2_7.jpg","image/pz2_8.jpg","image/pz2_9.jpg", "image/pz2_10.jpg", "image/pz2_11.jpg", "image/pz2_12.jpg"]

// var puzzleLists = [puzzleList0, puzzleList1]
// var ranNumList = [];

// var j = null
// function levelSelectEvent(clickedNum) {
//     j = clickedNum
//     console.log(puzzleLists[j])
//     e.preventDefault


// for (var i=0; i < (puzzleLists[j]).length;) {
//     var puzzleDiv = document.createElement("div")
//     var puzzleImage = document.createElement("img")
//     let n = Math.floor (Math.random() * (puzzleLists[j]).length);
//     if (!ranNumList.includes(n)) { //splice를 사용하면 puzzleList.length가 줄어듦으로 적절하지 않음
//         ranNumList.push(n)
//         puzzleImage.id =[n]
//         puzzleImage.src = (puzzleLists[j])[n]
//         console.log(n)
//         i++;
        
//         puzzleImage.className = "images"  
//         puzzleImage.draggable = true
//         puzzleImage.addEventListener("dragstart", dragStartEvent)
//         puzzleDiv.appendChild(puzzleImage)
        
//         puzzleDiv.className = "puzzles" 
//         puzzleDiv.addEventListener("dragover", dragOverEvent)
//         puzzleDiv.addEventListener("drop", dropEvent)
//         document.getElementById("puzzleBox").appendChild(puzzleDiv)
//     }
// }

// //HTML 속성인 ondragstart를 JavaScript에서 addEventListener를 
// //사용하여 할당할 때 ondragstart 이벤트명 앞에 "on"을 제거해야 함 


// for (var i=0; i<(puzzleLists[j]).length; i++) {
//     var resultDiv = document.createElement("div")
//     resultDiv.className = "results"
//     resultDiv.addEventListener("dragover", dragOverEvent)
//     resultDiv.addEventListener("drop", dropEvent)
//     document.getElementById("resultBox").appendChild(resultDiv)
// }




// var dragstartItem = null
// var dragStartLocation = null
// var dragEndItem = null
// var dragEndLocation =null


// function dragStartEvent(e) {
//     dragStartLocation = e.target.parentElement
//     dragstartItem = e.target
// }


// function dragOverEvent(e) {
//     e.preventDefault()
// }


// var resultCollection = document.getElementsByClassName("results")
// var resultChildren = null
// var imageTag = null
// var imageId = null

// function dropEvent(e) {
//     if (e.target.className == "results" || e.target.className == "puzzles") {
//         e.target.appendChild(dragstartItem) 
//     } 
//     else { 
//         dragEndItem = e.target
//         dragEndLocation = e.target.parentElement
//         dragEndLocation.appendChild(dragstartItem)
//         dragStartLocation.appendChild(dragEndItem)
//     }
//     for (var i=0; i<puzzleList.length;) {
//         resultChildren = resultCollection[i].children
//         console.log(resultCollection)
//         console.log(resultChildren)
//         imageTag = resultChildren[0]
//         if(imageTag !== undefined) {
//             // imageId 요소가 존재해야 그 안에 id 요소를 가져올 수 있음
//             imageId = imageTag.id
//             if (imageId == i) {
//                 i++
//             }
//             else { //imgeTag의 Id=[i]이지 않을 경우
//                 return;
//             }
//         }
//         else {
//             // imageId 요소가 존재하지 않을 경우
//             return;
//         }
//         if (i == puzzleList.length - 1) {
//         document.getElementById("success").innerHTML = "☆성공했습니다☆"
//         i++
//         }
//         }
//     }







// }











