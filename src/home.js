import createElement from "./utility"

const renderHome = (parent) => {
    const box = createElement(parent, "div", "", "box")
    const img = createElement(box, "img")
    img.src = "https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-2.jpg?resize=650,975";
    createElement(box, "br");
    createElement(box, "h3", "Welcome to kebabland")
    createElement(box, "h5", "Hope you enjoy our food")
}

export default renderHome;