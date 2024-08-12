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

class roomPreview {
    constructor(firstImgSrc, secondImgSrc, title, description) {
        this.firstImgSrc = firstImgSrc;
        this.secondImgSrc = secondImgSrc;
        this.title = title;
        this.description = description;
    }
}

let superiorTwin = new roomPreview("../assets/superior_twin_1.png", "../assets/superior_twin_2.png", "Superior Twin", "The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city.Stylish interior design and comfortable beds will make your stay cozy and pleasant")
let suite2 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
let suite3 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
let suite4 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

let roomsArray = [superiorTwin, suite2, suite3, suite4];

function changeRoom(direction) 
{   
    let newRoom;
    let roomNumber = Number(document.getElementById("room-preview-state").textContent) - 1;

    if (direction == "previous")
    {
        if (roomNumber == 0)
            roomNumber = roomsArray.length;
        
        roomNumber--;
        newRoom = roomsArray[roomNumber];
    }
    else if (direction == "next")
    {
        if (roomNumber == roomsArray.length - 1)
            roomNumber = -1;
        
        roomNumber++;
        newRoom = roomsArray[roomNumber];
    }
    document.getElementById("room-preview-img-1").childNodes[1].src = newRoom.firstImgSrc;
    document.getElementById("room-preview-img-2").childNodes[1].src = newRoom.secondImgSrc;
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
