$(function () {
    // const uuidInput = document.querySelector('input#uuid');

    function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    if (localStorage.getItem("uuid") === null) {
        localStorage.setItem("uuid", guid());
    }
    // uuidInput.value = localStorage.getItem("uuid");
    // console.log("local.uuid:" + localStorage.getItem("uuid"));
    // console.log("input.value:" + uuidInput.value);
});

$(function () {
    $.ajax({
        type: 'GET', // GET방식으로 요청
        url: 'http://localhost:8080/room?id=3&uuid=asdf', // Request보낼 URL
        success: function (data) { // 성공적으로 수행 시 response를 data라는 인자로 받는다.
            alert("AJAX Success!");

            //자바스크립트 객체에 data의 0번째 배열에서 content에 해당하는 텍스트값을 저장
            console.log(data);

        },
        error: function () { // 실패시
            alert("AJAX Failed!");
        }
    });
});
function addUuidToButtonLink(button) {
    let id = 'button-link-' + button.value;
    let ref = document.getElementById(id).href;
    document.getElementById(id).href = ref + '/user/' + localStorage.getItem("uuid");
    console.log("link.href:" + document.getElementById(id).href);
}
