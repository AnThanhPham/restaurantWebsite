/* header
let menuNav = document.querySelector("#menu-nav")
let menuMobile = document.querySelector("#navbar-mobile")


menuNav.onclick = function(){
    menuMobile.classList.toggle("appear")
}

let menuList = Array.from(document.querySelectorAll(".menu__list__item"))
let menuNavButton = Array.from(document.querySelectorAll(".menu__navbar button"))



function filterProduct(element){
    console.log(element)
    let elementType = element.getAttribute("type").toUpperCase()
    menuNavButton.forEach(menuNavButtonItem=>{
        let typeButton = menuNavButtonItem.getAttribute("type")
        if(typeButton.toUpperCase() == elementType){
            element.classList.add("mainColor")
        }else {
            menuNavButtonItem.classList.remove("mainColor")
        }
    })
    menuList.forEach(item=>{
        console.log(item)
        let menuItemImg = item.querySelector(".list__item-about-img img")
        let categoryImg = menuItemImg.getAttribute("type").toUpperCase();
        if(elementType=="ALL" || categoryImg == elementType){
            item.parentElement.classList.remove("hide")
        }else {
            item.parentElement.classList.add("hide")
        }
    })
}
*/

// kiểm tra lưu trữ giỏ hàng - có lấy ra - k trả về rỗng 
let productInCart = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")) : []

// lọc sản phẩm
let menuList = Array.from(document.querySelectorAll(".card"))
let menuNavButton = Array.from(document.querySelectorAll(".control button"))

function filterProduct(element){
    console.log(element)
    let elementType = element.getAttribute("type").toUpperCase()
    menuNavButton.forEach(menuNavButtonItem=>{
        let typeButton = menuNavButtonItem.getAttribute("type")
        if(typeButton.toUpperCase() == elementType){
            element.classList.add("active")
        }else {
            menuNavButtonItem.classList.remove("active")
        }
    })
    menuList.forEach(item=>{
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
function addToCart(id){
    // kiểm tra id đã tồn tại chưa
    let checkProduct = productInCart.some(value => value.id ===id)

    // nếu chưa tồn tại in tìm kiếm thông tin của id đó
    if(!checkProduct){
        let product = products.find(value=> value.id ===id)
        // chưa tồn tại - thêm vào đầu giỏ hàng 
        productInCart.unshift({
            // thêm tất cả thông tin của product với số lượng 1
            ...product,
            quantity: 1
        })

        // lưu lại trên trình duyệt
        localStorage.setItem('products',JSON.stringify(productInCart))
    }
    else{
        // lấy ra vị trí mà sản phẩm đang đứng trong giỏ hàng và lấy toàn bộ dữ liệu
        let getIndex = productInCart.findIndex(value => value.id===id)
        let product = productInCart.find(value => value.id===id)

        productInCart[getIndex] = {
            ...product,
            // tăng biến của phần tử đã ấn
            quantity:++product.quantity
        }
        localStorage.setItem('products',JSON.stringify(productInCart))
    }
}


function calculatorTotal(){
    document.getElementById('total').innerHTML=productInCart.length
}