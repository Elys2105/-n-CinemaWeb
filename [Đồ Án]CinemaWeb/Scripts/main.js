﻿
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const images = document.querySelectorAll(".slider-wrapper img");
    const totalImages = images.length;
    let currentIndex = 0; // Ảnh đầu tiên
    let autoSlideInterval;

    // Cập nhật vị trí slider để hiển thị đúng ảnh hiện tại
    function updateSliderPosition() {
        const imageWidth = images[0].clientWidth; // Lấy chiều rộng của ảnh đầu tiên (vì tất cả đều bằng nhau)
        sliderWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Chuyển sang ảnh tiếp theo
    function slideNext() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Quay lại ảnh đầu tiên
        }
        updateSliderPosition();
    }

    // Quay lại ảnh trước
    function slidePrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Nếu nhỏ hơn ảnh đầu tiên thì quay lại ảnh cuối cùng
        }
        updateSliderPosition();
    }

    // Nút qua trái
    document.querySelector(".slide-left").addEventListener("click", function () {
        slidePrev();
        resetAutoSlide(); // Đặt lại thời gian tự động khi nhấn nút
    });

    // Nút qua phải
    document.querySelector(".slide-right").addEventListener("click", function () {
        slideNext();
        resetAutoSlide(); // Đặt lại thời gian tự động khi nhấn nút
    });

    // Tự động chuyển ảnh sau 3 giây
    function startAutoSlide() {
        autoSlideInterval = setInterval(slideNext, 3000);
    }

    // Reset lại việc tự động chuyển ảnh khi người dùng nhấn nút
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Xóa interval hiện tại
        startAutoSlide(); // Bắt đầu lại tự động chuyển ảnh
    }

    // Bắt đầu việc tự động chuyển ảnh
    startAutoSlide();

    // Cập nhật kích thước khi resize
    window.addEventListener('resize', updateSliderPosition);
});
//// Đoạn mã JavaScript cho slider
//const sliderWrapper = document.querySelector('.slider-wrapper');
//const slideLeftButton = document.querySelector('.slide-left');
//const slideRightButton = document.querySelector('.slide-right');
//let currentSlide = 0;

//slideRightButton.addEventListener('click', () => {
//    currentSlide = (currentSlide + 1) % sliderWrapper.children.length;
//    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
//});

//slideLeftButton.addEventListener('click', () => {
//    currentSlide = (currentSlide - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
//    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
//});
//var mySwiper = new Swiper('.swiper-container', {
//    slidesPerView: 5,
//    loop: true,
//    centeredSlides: true,
//    effect: 'coverflow',
//    coverflowEffect: {
//        rotate: 0,
//        stretch: 50,
//        depth: 90,
//        modifier: 1,
//        slideShadows: false,
//    },
//    navigation: {
//        prevEl: ".swiper-button-prev",
//        nextEl: ".swiper-button-next"
//    },
//    pagination: {
//        el: ".swiper-pagination",
//        type: 'bullets',
//        clickable: true
//    },

//});
