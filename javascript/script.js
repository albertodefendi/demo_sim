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
let suite2 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
let suite3 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
let suite4 = new roomPreview("../assets/placeholder.svg", "../assets/placeholder.svg", "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

let roomsArray = [superiorTwin, suite2, suite3, suite4];

function changeRoom(direction) 
{   
    let newRoom;
    let roomNumber = document.getElementById("room-preview-state").textContent;

    if (direction == "previous")
    {
        if (roomNumber == 1)
            roomNumber = roomsArray.length + 1;
        
        roomNumber--;
        newRoom = roomsArray[roomNumber]
    }
    else if (direction == "next")
    {
        if (roomNumber == roomsArray.length)
            roomNumber = -1;
        
        roomNumber++;
        newRoom = roomsArray[roomNumber]
    }
    document.getElementById("room-preview-img-1").src = newRoom.firstImgSrc;
    document.getElementById("room-preview-img-2").src = newRoom.secondImgSrc;
    document.getElementById("room-preview-title").innerText = newRoom.title;
    document.getElementById("room-preview-description").innerText = newRoom.description;
}

let previousRoomButton = document.getElementById("previous-room-button");
let nextRoomButton = document.getElementById("next-room-button");

// previousRoomButton.addEventListener("click", changeRoom("previous"))
// nextRoomButton.addEventListener("click", changeRoom("next"))

previousRoomButton.addEventListener("click", () => {
    let newRoom;
    let roomNumber = document.getElementById("room-preview-state").textContent;

    if (roomNumber == 1)
        roomNumber = roomsArray.length + 1;
    
    roomNumber--;
    newRoom = roomsArray[roomNumber]

    document.getElementById("room-preview-img-1").src = newRoom.firstImgSrc;
    document.getElementById("room-preview-img-2").src = newRoom.secondImgSrc;
    document.getElementById("room-preview-title").innerText = newRoom.title;
    document.getElementById("room-preview-description").innerText = newRoom.description;
})

nextRoomButton.addEventListener("click", () => {
    let newRoom;
    let roomNumber = document.getElementById("room-preview-state").textContent;

    if (roomNumber == roomsArray.length)
        roomNumber = -1;
    
    roomNumber++;
    newRoom = roomsArray[roomNumber]

    document.getElementById("room-preview-img-1").src = newRoom.firstImgSrc;
    document.getElementById("room-preview-img-2").src = newRoom.secondImgSrc;
    document.getElementById("room-preview-title").innerText = newRoom.title;
    document.getElementById("room-preview-description").innerText = newRoom.description;
})
