$(document).ready(function () {
    $('.amy-movie-list').slick({
        infinite: true,
        slidesToShow: 3, // Hiển thị 3 mục phim cùng lúc
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,  // Thêm tính năng tự động chạy
        autoplaySpeed: 3000  // Chạy sau mỗi 3 giây
    });
});
$(document).ready(function () {
    $('.singer-movie-list').slick({
        infinite: true,
        slidesToShow: 3, // Hiển thị 3 mục phim cùng lúc
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,  // Thêm tính năng tự động chạy
        autoplaySpeed: 2000,  // Chạy sau mỗi 3 giây
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.movies-banner-list').slick({
        infinite: true,
        slidesToShow: 3, // Hiển thị 3 mục phim cùng lúc
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,  // Tự động chạy
        autoplaySpeed: 2000,  // Chạy sau mỗi 3 giây
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
