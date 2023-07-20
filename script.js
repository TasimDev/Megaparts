const hamburgerBtn = document.querySelector("#hamburger-menu-btn");
const mobileNav = document.querySelector("#mobile .container")

hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
    if (!hamburgerBtn.classList.contains('active')) {
        hamburgerBtn.innerHTML = `<span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
            <path d="M1 1H26M1 9H26M1 17H26" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
    </span>`
    } else {
        hamburgerBtn.innerHTML = `<span class="icon text-white text-2xl font-bold cursor-pointer"> &#10005;</span>`
    }
})

