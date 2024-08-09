let newsletterButton = document.getElementById("newsletter-subscribe");
newsletterButton.addEventListener("click", () => {
    document.getElementById("email").value = "";
    let arrowImg = document.getElementById("newsletter-subscribe-button")
    arrowImg.src = "../assets/checkmark.svg";
    setTimeout(() => {
        arrowImg.src = "../assets/arrow.svg";
    }, 2000);
})

// -------------------------------------------------------------------------------------------------------------

let previousRoomButton = document.getElementById("previous-room-button");
let nextRoomButton = document.getElementById("next-room-button");

previousRoomButton.addEventListener("click", )
