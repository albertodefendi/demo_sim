let checkIn = document.getElementById("check-in");
checkIn.addEventListener("mouseenter", function() { openMenu("check-in"); });

let checkOut = document.getElementById("check-out");
checkOut.addEventListener("mouseenter", function() { openMenu("check-out"); });

let bookRoom = document.getElementById("book-room");
bookRoom.addEventListener("mouseenter", function() { openMenu("book-room"); });

function openMenu(operation) {
    let quickActionsMenu = document.getElementById("quick-actions");
    quickActionsMenu.style.display = "block";
    quickActionsMenu.style.height = "100%";
    switch(operation) {
        case "check-in":
            console.log("Opening check-in menu");
            break;
        case "check-out":
            console.log("Opening check-out menu");
            break;
        case "book-room":
            console.log("Opening book-room menu");
            break;
        default:
            console.log("Unknown operation");
    }
}

// Opzionalmente, per nascondere il menu quando il mouse esce dall'elemento:
document.getElementById("quick-actions").addEventListener("mouseleave", function() {
    let quickActionsMenu = document.getElementById("quick-actions");
    quickActionsMenu.style.display = "none";
    quickActionsMenu.style.height = "10%";
});
