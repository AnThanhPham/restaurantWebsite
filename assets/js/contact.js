<<<<<<< HEAD
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
=======
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
  alert(`Your review has been submitted`);
  document.getElementById("name").value = ``;
  document.getElementById("email").value = ``;
  document.getElementById("review").value = ``;
});
>>>>>>> 466304f0f9dac6ac54ef83f3ef6c2852e1c3340b
