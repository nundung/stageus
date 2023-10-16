var color = null

// 드래그 시작 이벤트
// 드래그 시작된 태그의 배경색을 저장
// 매개변수 e로 받음
function dragStartEvent(e) {
    // console.log(e.target)
    // var color = e.target.style.backgroundcolor 얘는 안에 쓴거에다가 적는거
    color = window.getComputedStyle(e.target).backgroundColor //외부로 빠진 css쓰는 거.
    console.log(color)
}

//드래그가 된 상태로 마우스가 올라가 있는 상태
// 필수적인 이벤트
function dragOverEvent(e) {
    // 현재 이 이벤트외에 다른 이벤트는 무시해 달라 ( 이벤트 충돌을 막기 위해)
    e.preventDefault()
}

// 드롭 이벤트
// 저장된 배경색을 dest에 입혀주기
function dropEvent(e) {
    // 굳이 document.getelement 안 해도 됨.
    e.target.style.backgroundColor = color
    
}