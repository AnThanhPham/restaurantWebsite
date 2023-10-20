
var namee = document.querySelector(".name");
var emaill = document.querySelector(".email");
var textareaa = document.querySelector("textarea");
var formm = document.querySelector('form')

// khi bị lối nhập 
function showError(input,message){
  //input.value = input.value.trim()
  let parent = input.parentElement;
  let small = parent.querySelector('small')

  //thêm class error
  parent.classList.add('error')
  small.innerText = message
}

// khi nhập vào
function showSuccess(input){
  let parent = input.parentElement;
  let small = parent.querySelector('small')

  //xóa class error
  parent.classList.remove('error')
  small.innerText =``
}

// check rỗng
function checkEmpty(listInput){
  let isEmptyError = false;
  // duyệt từng phần tử
  listInput.forEach(input => {
    // xóa khoảng trắng
    input.value = input.value.trim()

    // nếu k có thông tin
    if(!input.value){
      isEmptyError = true;
      showError(input,"cannot be blank")
    }
    else showSuccess(input)
  });

  return isEmptyError
}

// dùng regex check email
function checkEmail(input){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  input.value = input.value.trim()

  // đặt biến 
  let isEmailError = !emailRegex.test(input.value)
  // kiểm tra email xem bị lỗi không
  if(emailRegex.test(input.value)){
    showSuccess(input)
  }
  else showError(input,"Email Invalid")

  return isEmailError
}

// khi ấn button
formm.addEventListener('submit',function(e){
  // click vào sẽ k bị lỗi trang
  e.preventDefault()

  let isEmptyError = checkEmpty([namee,emaill,textareaa])
  let isEmailError = checkEmail(emaill)

  if(!isEmailError && !isEmptyError){
    alert(`Your response has been sent`)
    namee.value=``
    emaill.value=``
    textareaa.value= ``
  }
})