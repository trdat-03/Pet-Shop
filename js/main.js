let currentSlide = 0;
console.log(123);
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Đảm bảo chỉ số nằm trong khoảng từ 0 đến totalSlides - 1
  if (index >= totalSlides) {
    currentSlide = 0; // Nếu lớn hơn số slide, quay về đầu
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // Nếu nhỏ hơn 0, quay về cuối
  } else {
    currentSlide = index; // Nếu chỉ số hợp lệ
  }

  const offset = -currentSlide * 100; // Tính toán offset
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Mở form đăng nhập
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
  document.getElementById("registerModal").style.display = "none"; // Đảm bảo form đăng ký ẩn đi
}

// Mở form đăng ký
function openRegister() {
  document.getElementById("registerModal").style.display = "flex";
  document.getElementById("loginModal").style.display = "none"; // Đảm bảo form đăng nhập ẩn đi
}

// Đóng form đăng nhập
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// Đóng form đăng ký
function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}

// Đóng form khi nhấn bên ngoài form
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }

  if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
};

// xử lí phân trang

function showProductGrid(tabNumber) {
  const productGrids = document.querySelectorAll(".productshop-grid");
  productGrids.forEach((grid) => {
    grid.style.display = "none";
  });

  const selectedGrid = document.querySelector(
    `.productshop-grid[tab="${tabNumber}"]`
  );
  if (selectedGrid) {
    selectedGrid.style.display = "grid";
  }

  const pageButtons = document.querySelectorAll(".page-btn");
  pageButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("tab") === tabNumber.toString()) {
      btn.classList.add("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  showProductGrid(1);
  const pageButtons = document.querySelectorAll(".page-btn[tab]");
  pageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabNumber = btn.getAttribute("tab");
      showProductGrid(parseInt(tabNumber));
    });
  });

  const prevBtn = document.querySelector(".prev-btn");
  prevBtn.addEventListener("click", () => {
    const currentTab = document.querySelector(".page-btn.active");
    const currentTabNumber = parseInt(currentTab.getAttribute("tab"));
    if (currentTabNumber > 1) {
      showProductGrid(currentTabNumber - 1);
    }
  });
  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", () => {
    const currentTab = document.querySelector(".page-btn.active");
    const currentTabNumber = parseInt(currentTab.getAttribute("tab"));
    const maxTab = 3; // Số lượng tab hiện có
    if (currentTabNumber < maxTab) {
      showProductGrid(currentTabNumber + 1);
    }
  });
});
