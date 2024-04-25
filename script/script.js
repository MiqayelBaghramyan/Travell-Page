document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function (carousel) {
        const nextBtn = carousel.querySelector(".next");
        const prevBtn = carousel.querySelector(".prev");

        let counter = 0;
        const items = carousel.querySelectorAll(".countrys, .countrys2, .countrys4,._box");
        const itemCount = items.length;

        function updateCarousel() {
            items.forEach(function (item) {
                item.style.display = "none";
            });
            items[counter].style.display = "flex";
        }

        nextBtn.addEventListener("click", function () {
            counter++;
            if (counter > itemCount - 1) {
                counter = 0;
            }
            updateCarousel();
        });

        prevBtn.addEventListener("click", function () {
            counter--;
            if (counter < 0) {
                counter = itemCount - 1;
            }
            updateCarousel();
        });

        updateCarousel();

        checkWindowWidth();


        window.addEventListener('resize', checkWindowWidth);

        function checkWindowWidth() {
            const windowWidth = window.innerWidth;
            if (windowWidth > 800) {
                items.forEach(function (item) {
                    item.style.display = "flex";
                });
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
            } else {
                updateCarousel();
                nextBtn.style.display = "block";
                prevBtn.style.display = "block";
            }
        }
    });
});




let closeIcon = document.getElementById("closeIcon");

closeIcon.addEventListener("click", () => {
    togglePopup(false);
});

function togglePopup(open) {
    let popup = document.getElementById("booking-popup");
    let body = document.querySelector("body");
    if (open) {
        popup.style.display = "block";
        body.style.overflow = "hidden"; 
    } else {
        popup.style.display = "none";
        body.style.overflow = "auto"; 
    }
}

function openPopup() {
    togglePopup(true);
}

document.querySelector(".book_nowbtn").addEventListener("click", openPopup);

document.querySelectorAll(".buy-now").forEach(function(button) {
    button.addEventListener("click", openPopup);
});

document.addEventListener("click", function (e) {
    let popup = document.getElementById("booking-popup");
    let button = document.querySelector(".book_nowbtn");
    if (!popup.contains(e.target) && e.target !== button && !Array.from(document.querySelectorAll(".buy-now")).includes(e.target)) {
        togglePopup(false);
    }
});



document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let isValid = true;

    let namePattern = /^[A-Z][a-z]*$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    let nameError = document.getElementById("name-error");
    if (!name.match(namePattern)) {
        nameError.innerText = "Please enter a valid name,first letter capitalized";
        isValid = false;
    } else {
        nameError.innerText = "";
    }

    // Validate email
    let emailError = document.getElementById("email-error");
    if (!email.match(emailPattern)) {
        emailError.innerText = "Please enter a valid email address";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

    // Validate destination
    let destinationError = document.getElementById("destination-error");
    if (destination.trim() === "") {
        destinationError.innerText = "Please enter your destination";
        isValid = false;
    } else {
        destinationError.innerText = "";
    }

    // Validate date
    let dateError = document.getElementById("date-error");
    if (date.trim() === "") {
        dateError.innerText = "Please select a travel date";
        isValid = false;
    } else {
        dateError.innerText = "";
    }


    if (isValid) {
        setTimeout(() => {
            const messageElement = document.getElementById("message");
            messageElement.textContent = "Booking successful! We will contact you shortly.";
            event.target.reset();
            togglePopup(true);
        }, 1000);
    }
});




const buttons = document.querySelectorAll(".tiper button");


buttons.forEach(el => {
    el.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = "white";
            btn.style.color = "#071952";
        });
        el.style.backgroundColor = "#071952";
        el.style.color = "white"
    });
});