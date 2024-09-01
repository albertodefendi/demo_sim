// Newsletter section

const alertPlaceholder = document.getElementById('newsletter')
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div")
    wrapper.classList += "max-width-40";
    wrapper.id = "success-message"
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible round-corners" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const newsletterButton = document.getElementById("newsletter-button");
newsletterButton.addEventListener("click", () => {

    newsletterButton.disabled = true;
    document.getElementById("email").value = "";
    appendAlert('Successfully subscribed! (Just kidding this is just a mockup)', 'success')
    
    setTimeout(() => {
        document.getElementById("success-message").remove();
        newsletterButton.disabled = false;
    }, 2000);
})

// -------------------------------------------------------------------------------------------------------------
// Dark mode toggler

document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("navbar-logo").src = "../assets/logo_black.svg"
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("navbar-logo").src = "../assets/logo_white.svg"
    }
});

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);

// -------------------------------------------------------------------------------------------------------------
//Buttons animations

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const tl = gsap.timeline();

        tl.to(button, { scale: 0.85, duration: 0.1 })
            .to(button, { scale: 1, duration: 0.1 });
    });
});

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("mouseenter", () => {
        gsap.to(anchor, { scale: 1.05, duration: 0.3 });
    });
    
    anchor.addEventListener("mouseleave", () => {
        gsap.to(anchor, { scale: 1, duration: 0.3 });
    });
});

// -------------------------------------------------------------------------------------------------------------
// Hamburger menu switch

function switchHamburger() {
    document.getElementById("hamburger").classList.toggle("change");
}