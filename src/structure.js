import createElement from "./utility"
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

const containerEl = document.getElementById("container")
const header = () => {
    const headerEl = createElement(containerEl, "header");

    const homeEl = createElement(headerEl, "button", "home", "nav")
    homeEl.addEventListener("click", () => middle("home"))

    const menuEl = createElement(headerEl, "button", "menu", "nav")
    menuEl.addEventListener("click", () => middle("menu"))

    const contactEl = createElement(headerEl, "button", "contact", "nav")
    contactEl.addEventListener("click", () => middle("contact"))

}

const middle = (hrefString = "home") => {

    if (document.getElementsByClassName("middle").length == 0) {
        createElement(containerEl, "section", "", "middle")
    }
    let middle = document.getElementsByClassName("middle")[0];
    middle.innerHTML = "";

    console.log(hrefString)
    switch (hrefString) {
        case "home":
            renderHome(middle);
            break;
        case "menu":
            renderMenu(middle);
            break;
        case "contact":
            renderContact(middle);
            break;
        default:
            renderHome(middle);

    }
}

const footer = () => {
    createElement(containerEl, "footer", "Designed by SottaByte")

}
const structure = () => {
    console.log('loading ... ')
    header()
    middle()
    footer()

};

export default structure;