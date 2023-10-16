
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

var randomNumList = []
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
// 랜덤숫자 n을 만들어서 중복수가 아닌 경우 그 숫자에 해당하는 배열을 뽑아서 src로 씀
        var n = Math.floor (Math.random() * (puzzleLists[j]).length);
        var puzzleDiv = document.createElement("div")
        var resultDiv = document.createElement("div")
        puzzleBox.className = "puzzleBox"+j
        resultBox.className = "puzzleBox"+j
        puzzleDiv.className = "puzzles"
        resultDiv.className = "results"

        if (!randomNumList.includes(n)) {
            i++;
            var puzzleImage = document.createElement("img")
            var transparentImage = document.createElement("img")
            randomNumList.push(n)
            puzzleImage.id =[n]
            puzzleImage.className = "images"
            puzzleImage.src = (puzzleLists[j])[n]
            
            puzzleImage.addEventListener("dragstart", dragStartEvent)
            puzzleImage.addEventListener("dragover", dragOverEvent)
            puzzleImage.addEventListener("drop", dropEvent)
//HTML 속성인 ondragstart를 JavaScript에서 addEventListener를 
//사용하여 할당할 때 ondragstart 이벤트명 앞에 "on"을 제거해야 함 
            transparentImage.src ="image/transparent.png"
            transparentImage.className = "transparent"
            transparentImage.addEventListener("dragover", dragOverEvent)
            transparentImage.addEventListener("drop", dropEvent)

            resultDiv.appendChild(transparentImage)
            puzzleDiv.appendChild(puzzleImage)
            puzzleBox.appendChild(puzzleDiv)
            resultBox.appendChild(resultDiv)
        }
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

var resultChildren = null
var imageTag = null
var imageId = null
var success = document.getElementById("success")

function dropEvent(e) {
    dragEndItem = e.target
    dragEndLocation = e.target.parentElement
    dragEndLocation.appendChild(dragstartItem)
    dragStartLocation.appendChild(dragEndItem)
    var resultCollection = document.getElementsByClassName("results")

    for (var i=0; i<(puzzleLists[j]).length;) {
        console.log(resultCollection)
        resultChildren = resultCollection[i].children
        imageTag = resultChildren[0]
        console.log(resultChildren)
        console.log(imageTag)
        imageId = imageTag.id
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







