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

// search space

const products = [
    { id: 1, name: "Beefsteak", image: "./assets/img/shopping/Beefsteak.jpg", type: "Dinner", price: 19 },
    { id: 2, name: "Breakfast Sandwiches", image: "./assets/img/shopping/Breakfast Sandwiches (2).png", type: "Dinner", price: 70 },
    { id: 3, name: "Breakfast Sandwiches", image: "./assets/img/shopping/Breakfast Sandwiches.jpg", type: "Dinner", price: 10 },
    { id: 4, name: "Breakfast Sandwiches", image: "./assets/img/shopping/Breakfast Sandwiches.png", type: "Dinner", price: 24 },
    { id: 5, name: "Cascades", image: "./assets/img/shopping/Cascades.png", type: "Dinner", price: 44 },
    { id: 6, name: "Chicken And Haloumi Skewers", image: "./assets/img/shopping/Chicken And Haloumi Skewers.jpg", type: "Dinner", price: 40 },
    { id: 7, name: "Clever Carb", image: "./assets/img/shopping/Clever Carb.png", type: "Dinner", price: 55 },
    { id: 8, name: "Coconut Pancakes", image: "./assets/img/shopping/Coconut Pancakes.jpg", type: "Dinner", price: 22 },
    { id: 9, name: "Crumbed Fish Balls", image: "./assets/img/shopping/Crumbed Fish Balls.jpg", type: "Dinner", price: 50 },
    { id: 10, name: "Fermented Pork Roll", image: "./assets/img/shopping/Fermented Pork Roll.jpg", type: "Dinner", price: 5 },
    { id: 11, name: "Foie Gras", image: "./assets/img/shopping/Foie Gras.jpg", type: "Dinner", price: 59 },
    { id: 12, name: "Glass Noodle Spring Rolls", image: "./assets/img/shopping/Glass Noodle Spring Rolls.jpg", type: "Dinner", price: 39 },
    { id: 13, name: "Memphis Banana Bread", image: "./assets/img/shopping/Memphis Banana Bread.jpg", type: "Dinner", price: 26 },
    { id: 14, name: "Miso Croque Madame", image: "./assets/img/shopping/Miso Croque Madame.png", type: "Dinner", price: 29 },
    { id: 15, name: "Mixed Vegetables", image: "./assets/img/shopping/Mixed Vegetables.png", type: "Dinner", price: 29 },
    { id: 16, name: "Oysters", image: "./assets/img/shopping/Oysters.jpg", type: "Dinner", price: 50 },
    { id: 17, name: "Pea,Pecorino Frittata", image: "./assets/img/shopping/Pea,Pecorino Frittata.png", type: "Dinner", price: 24 },
    { id: 18, name: "Pork Dumplings", image: "./assets/img/shopping/Pork Dumplings.jpg", type: "Dinner", price: 44 },
    { id: 19, name: "Ricotta Hotcakes", image: "./assets/img/shopping/Ricotta Hotcakes.jpg", type: "Dinner", price: 19 },
    { id: 20, name: "Roll Salmon Eggs", image: "./assets/img/shopping/Roll Salmon Eggs.jpg", type: "Dinner", price: 25 },
    { id: 21, name: "Sallad", image: "./assets/img/shopping/Sallad.jpg", type: "Dinner", price: 5 },
    { id: 22, name: "Shrimp Cocktail", image: "./assets/img/shopping/Shrimp Cocktail.png", type: "Dinner", price: 35 },
    { id: 23, name: "Sturgeon Eggs Nd Bread", image: "./assets/img/shopping/Sturgeon Eggs Nd Bread.jpg", type: "Dinner", price: 18 },
    { id: 24, name: "Supper Burgers", image: "./assets/img/shopping/Supper Burgers.png", type: "Dinner", price: 42 },


    // ... (Thêm các sản phẩm khác)
];

function displayProducts(productArray) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Xóa nội dung hiện tại

    // Hiển thị sản phẩm
    productArray.forEach(product => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-2");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Tạo nút "Add to cart" với sự kiện tương ứng
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to cart";
        addToCartButton.classList.add("btn", "btn-primary");
        addToCartButton.onclick = function() {
            addToCart(product.id); // Thay id bằng thuộc tính id thực của sản phẩm
        };

        // Tạo cấu trúc card
        cardDiv.innerHTML = `
            <img src='${product.image}' class='card-img-top' alt='' type='${product.type}'>
            <div class='card-body'>
                <h5 class='card-title'>${product.name}</h5>
                <div class='d-flex'>
                    <p class='card-text' style='margin-left: auto;'>$ ${product.price}</p>
                </div>
            </div>
        `;

        // Thêm nút "Add to cart"
        const cardBody = cardDiv.querySelector(".card-body");
        cardBody.appendChild(addToCartButton);
        addToCartButton.style.marginTop = "-35px";

        // Thêm card vào cột và cột vào danh sách sản phẩm
        colDiv.appendChild(cardDiv);
        productList.appendChild(colDiv);
    });
}

// function searchProducts() {
//     const searchInput = document.getElementById("search-text");
//     const searchTerm = searchInput.value.toLowerCase();

//     // Lọc sản phẩm theo chữ cái nhập vào
//     const filteredProducts = products.filter(product => product.name.toLowerCase().startsWith(searchTerm));

//     // Hiển thị kết quả
//     displayProducts(filteredProducts);
// }

function searchProducts() {
    const searchInput = document.getElementById("search-text");
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Nếu ô tìm kiếm trống, hiển thị tất cả sản phẩm
    if (!searchTerm) {
        displayProducts(products);
        return;
    }

    // Lọc sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Hiển thị kết quả
    displayProducts(filteredProducts);
}




document.getElementById("search-box").addEventListener("submit", function(event) {
event.preventDefault(); // Ngăn chặn gửi form mặc định
searchProducts();
});