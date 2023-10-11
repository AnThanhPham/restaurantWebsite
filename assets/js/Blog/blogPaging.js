let currentPage = 1;

function nextPage() {
  // Ẩn trang hiện tại
  document.getElementById(`page${currentPage}`).style.display = "none";

  // Tăng số trang hiện tại
  currentPage++;

  // Nếu đã hết trang, quay lại trang đầu tiên
  if (currentPage > 3) {
    currentPage = 1;
  }

  // Hiển thị trang mới
  document.getElementById(`page${currentPage}`).style.display = "block";
}

function prePage() {
  // Ẩn trang hiện tại
  document.getElementById(`page${currentPage}`).style.display = "none";

  // Giam số trang hiện tại
  currentPage--;

  // Nếu trang nho hon 1, quay lại trang đầu tiên
  if (currentPage < 1) {
    currentPage = 1;
  }

  // Hiển thị trang mới
  document.getElementById(`page${currentPage}`).style.display = "block";
}

// Number page pagination

document.addEventListener("DOMContentLoaded", function () {
  const prevPageBtn = document.getElementById("prevPageBtn");
  const prevSvgBtn = document.getElementById("prevSvgBtn");

  prevPageBtn.addEventListener("click", function () {
    changePage("prev");
  });

  prevSvgBtn.addEventListener("click", function () {
    changePage("prev");
  });

  const nextPageBtn = document.getElementById("nextPageBtn");
  const nextSvgBtn = document.getElementById("nextSvgBtn");

  nextPageBtn.addEventListener("click", function () {
    changePage("next");
  });

  nextSvgBtn.addEventListener("click", function () {
    changePage("next");
  });

  function changePage(direction) {
    const activePage = document.querySelector(".page-number-link.active");
    let targetPage;

    if (direction === "prev") {
      targetPage = activePage.previousElementSibling;
    } else {
      targetPage = activePage.nextElementSibling;
    }

    if (targetPage) {
      activePage.classList.remove("active");
      targetPage.classList.add("active");
    } else {
      const newPage =
        direction === "prev"
          ? document.querySelector(".page-number-link:last-child")
          : document.querySelector(".page-number-link:first-child");
      activePage.classList.remove("active");
      newPage.classList.add("active");
    }
  }

  // Cuộn lên đầu trang
});
