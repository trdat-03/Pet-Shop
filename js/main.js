let currentSlide = 0;

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
