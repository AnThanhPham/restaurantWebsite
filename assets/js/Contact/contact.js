function Form() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let textarea = document.querySelector("textarea").value;
  if (name === "") {
    alert(`bạn chưa nhập vào tên`);
    return false;
  }
  if (email === "") {
    alert(`bạn chưa nhập vào email`);
    return false;
  }
  if (textarea === "") {
    alert(`bạn chưa viết phản hồi`);
    return false;
  } else {
    alert(`phản hồi của bạn đã được gửi đến nhà hàng `);
    return true;
  }
}

document.querySelector("form").addEventListener("submit", Form);
