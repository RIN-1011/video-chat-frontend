function LoginFormCheck() {
    theForm = document.loginInfo;
    if (theForm.IdCode.value == "") {
      alert("ID를 입력해주세요.");
    }
    else if (theForm.PwCode.value == "") {
      alert("Password를 입력해주세요.");
    }
  }
//https://www.codingfactory.net/12175
//미리 회원가입된 정보를 DB에서 찾아, 입력한 ID, PW와 일치하는지 확인하고, 로그인 시켜준다.
  function LoginCheckDB()
  {

  }