function IdOverlapCheck() {
  //중복 확인후, 중복이면 true, 아니면 false return
}

function FormCheck() {
  theForm = document.joinInfo;
  if (theForm.IdCode.value == "") {
    alert("ID를 입력해주세요.");
  }
  else if (IdOverlapCheck()) {

  }
  else if (theForm.PwCode.value == "") {
      alert("Password를 입력해주세요.");
  }
  else if (theForm.PwCheck.value == "") {
    alert("Password를 한 번 더 입력해주세요.");
  }
  else if (theForm.UserName.value == "") {
    alert("이름을 입력해주세요.");
  }
  else if (theForm.UserMajor.value == "") {
    alert("학과를 입력해주세요.");
  }
  else if (theForm.UserStudentId.value == "") {
    alert("학번을 입력해주세요.");
  }
  else if (theForm.Face.value == "") {
    alert("정면 사진을 등록해주세요.");
  }
  else if (theForm.LeftSide.value == "") {
    alert("왼쪽 측면 사진을 등록해주세요.");
  }
  else if (theForm.RightSide.value == "") {
    alert("오른쪽 측면 사진을 등록해주세요.");
  }
}