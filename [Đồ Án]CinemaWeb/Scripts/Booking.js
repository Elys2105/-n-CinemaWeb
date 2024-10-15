document.addEventListener("DOMContentLoaded", function () {
    const selectionOptions = document.querySelectorAll(".selection-option");

    // Ẩn tất cả các dropdown-content trừ mục đầu tiên
    for (let i = 1; i < selectionOptions.length; i++) {
        selectionOptions[i].querySelector(".dropdown-content").style.display = "none";
        selectionOptions[i].setAttribute("data-locked", "true"); // Khóa các lựa chọn con
    }

    // Thêm sự kiện click cho các lựa chọn
    selectionOptions.forEach((option, index) => {
        const links = option.querySelectorAll(".dropdown-content a");

        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Ngăn chặn chuyển hướng ngay lập tức

                // Lưu thông tin đã chọn
                const selectedValue = this.innerText;
                console.log("Đã chọn: " + selectedValue);

                // Ẩn dropdown-content của mục đã chọn
                option.querySelector(".dropdown-content").style.display = "none";
                option.querySelector(".tooltip").style.display = "none"; // Ẩn tooltip

                // Mở khóa mục tiếp theo nếu có
                if (index < selectionOptions.length - 1) {
                    selectionOptions[index + 1].querySelector(".dropdown-content").style.display = "block"; // Hiện dropdown tiếp theo
                    selectionOptions[index + 1].removeAttribute("data-locked"); // Bỏ khóa
                } else {
                    // Chuyển hướng đến trang đặt vé khi đã chọn suất chiếu
                    window.location.href = "booking.html"; // Chuyển đến trang booking.html
                }
            });
        });

        // Hiện tooltip khi di chuột vào
        option.addEventListener("mouseenter", function () {
            if (option.getAttribute("data-locked") === "true") { // Chỉ mở khi đang bị khóa
                const infoText = option.getAttribute("data-info");
                option.querySelector(".tooltip").innerText = infoText; // Thiết lập nội dung cho tooltip
                option.querySelector(".tooltip").style.display = "block"; // Hiện tooltip
            } else {
                this.querySelector(".dropdown-content").style.display = "block"; // Hiện dropdown nếu không bị khóa
            }
        });

        // Ẩn tooltip khi di chuột ra ngoài
        option.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-content").style.display = "none"; // Ẩn khi rời chuột
            this.querySelector(".tooltip").style.display = "none"; // Ẩn tooltip
        });
    });
});
