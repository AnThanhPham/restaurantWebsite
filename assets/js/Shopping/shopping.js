// header 
let menuNav = document.querySelector("#menu-nav")
let menuMobile = document.querySelector("#navbar-mobile")

menuNav.onclick = function(){
    menuMobile.classList.toggle("appear")
}

//localStorage.clear();
// lọc sản phẩm
let menuListCart = Array.from(document.querySelectorAll(".card"))
let menuNavButtonCart = Array.from(document.querySelectorAll(".control button"))

function filterProduct(element){
    console.log(element)
    let elementType = element.getAttribute("type").toUpperCase()
    menuNavButtonCart.forEach(menuNavButtonItem=>{
        let typeButton = menuNavButtonItem.getAttribute("type")
        if(typeButton.toUpperCase() == elementType){
            element.classList.add("active")
        }else {
            menuNavButtonItem.classList.remove("active")
        }
    })
    menuListCart.forEach(item=>{
        console.log(item)
        let menuItemImg = item.querySelector(".card img")
        let categoryImg = menuItemImg.getAttribute("type").toUpperCase();
        if(elementType=="ALL" || categoryImg == elementType){
            item.parentElement.classList.remove("hide")
        }else {
            item.parentElement.classList.add("hide")
        }
    })
}

// tạo mảng chứa thông tin sản phẩm
const cards = document.querySelectorAll('.card')
const products = []

cards.forEach(card =>{
    const product = {}
    product.name = card.querySelector('.card-title').textContent
    product.price = card.querySelector('.card-text').textContent
    product.id = card.querySelector('.card-img-top').getAttribute('id')
    product.src = card.querySelector('.card-img-top').getAttribute('src')
    products.push(product);
})

console.log(products)

// kiểm tra lưu trữ giỏ hàng - có lấy ra - k trả về rỗng 
let productInCart = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) : []

function addToCart(value) {
    var idCard = value
    let checkProduct = productInCart.some(value => value.id === idCard);

    if (!checkProduct) {
      let product = products.find(value => value.id === idCard);
      productInCart.unshift({
        ...product,
        quantity: 1
      });
    } 
    else {
      let getIndex = productInCart.findIndex(value => value.id === idCard);
      let product = productInCart.find(value => value.id === idCard);
      productInCart[getIndex] = {
        ...product,
        quantity: ++product.quantity
      };
    }
    localStorage.setItem('products', JSON.stringify(productInCart));
    calculatorTotal()
  }

// số sản phẩm có trong giỏ hàng 
function calculatorTotal(){
    document.getElementById('total').innerHTML=productInCart.length
}