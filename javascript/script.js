//Gestione dell'icona di conferma sottoscrizione alla newsletter
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

//Carosello stanze
class roomPreview {
    constructor(firstImgSrc, secondImgSrc, title, description) {
        this.firstImgSrc = firstImgSrc;
        this.secondImgSrc = secondImgSrc;
        this.title = title;
        this.description = description;
    }
}

let superiorTwinDescription = "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city.Stylish interior design and comfortable beds will make your stay cozy and pleasant";
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let superiorTwin = new roomPreview("../assets/superior_twin_1.png", "../assets/superior_twin_2.png", "Superior Twin", superiorTwinDescription)
let suite2 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 2", loremIpsum)
let suite3 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 3", loremIpsum)
let suite4 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 4", loremIpsum)

let roomsArray = [superiorTwin, suite2, suite3, suite4];

function changeRoom(direction) {
    let newRoom;
    let roomNumber = Number(document.getElementById("room-preview-state").textContent) - 1;

    if (direction == "previous") {
        if (roomNumber == 0)
            roomNumber = roomsArray.length;

        roomNumber--;
        newRoom = roomsArray[roomNumber];
    }
    else if (direction == "next") {
        if (roomNumber == roomsArray.length - 1)
            roomNumber = -1;

        roomNumber++;
        newRoom = roomsArray[roomNumber];
    }
    document.getElementById("superior-twin-1").src = newRoom.firstImgSrc;
    document.getElementById("superior-twin-2").src = newRoom.secondImgSrc;
    document.getElementById("room-preview-title").innerText = newRoom.title;
    document.getElementById("room-preview-description").innerText = newRoom.description;
    document.getElementById("room-preview-state").innerText = "0" + (roomNumber + 1);
}

let previousRoomButton = document.getElementById("previous-room-button");
let nextRoomButton = document.getElementById("next-room-button");

previousRoomButton.addEventListener("click", () => {
    changeRoom("previous")
});
nextRoomButton.addEventListener("click", () => {
    changeRoom("next")
});

// -------------------------------------------------------------------------------------------------------------

// Hamburger menu switch
function switchHamburger() {
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("nav-main-link").classList.toggle("hidden");
}

// -------------------------------------------------------------------------------------------------------------

function updateImageSrc() {
    const imgElement = document.getElementById("best-room");
    const width = window.innerWidth;

    if (width <= 700) {
        imgElement.src = '../assets/best_room_alt.png';
    } else {
        imgElement.src = '../assets/best_room.png';
    }
}

// Chiama la funzione all'inizio per impostare l'immagine corretta
updateImageSrc();

// Event listener per aggiornare l'immagine quando la finestra viene ridimensionata
window.addEventListener('resize', updateImageSrc);

// -------------------------------------------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

gsap.from("#navbar", { y: "-90%", duration: 1.3, ease: "bounce" });
gsap.from(".nav-item ", { y: "-70%", duration: 1.3, ease: "elastic", stagger: 0.1 });

function createScrollAnimation(triggerElement, fromProps, toProps) {
    gsap.fromTo(triggerElement, fromProps, {
        ...toProps,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "play reverse play reverse",
            end: "bottom 60%",
        }
    });
}

const toAnimationProps = {
    opacity: "100%",
    duration: 1,
    ease: "power1"
};

createScrollAnimation("#header", { opacity: "0%", y: "-20%" }, { ...toAnimationProps, y: "0%" });
createScrollAnimation("#rooms-and-apartments", { opacity: "0%", y: "20%" }, { ...toAnimationProps, y: "0%" });
createScrollAnimation("#our-facilities", { opacity: "0%", y: "20%" }, { ...toAnimationProps, y: "0%" });
createScrollAnimation("#rooms", { opacity: "0%", y: "20%" }, { ...toAnimationProps, y: "0%" });
createScrollAnimation("#contacts", { opacity: "0%", y: "20%" }, { ...toAnimationProps, y: "0%", pin: true });

// -------------------------------------------------------------------------------------------------------------
