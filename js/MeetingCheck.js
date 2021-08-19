function MeetingNCheck(){//MeetingNumber check
    theForm = document.MeetingNumber.MeetingInvite;
    if (theForm.value == "") {
        alert("미팅 번호를 입력하세요.");
    }
    
    if(false){//생성된 미팅 번호중에 있는걸로 입력했는지 확인해서 처리해야됨
        return;
    }
}

function CheckUserFace() {
    //opencv를 통해서 얼굴 확인되면 해당 이미지로 변경되게 하기
    //if문을 통해 true면 check_on으로 false면 check_off로
      document.getElementById("FCheck").src = "image/check_on.png";
}