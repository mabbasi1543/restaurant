import createElement from "./utility"

const renderContact = (parent) => {
    const box = createElement(parent, "div", "", "box")
    createElement(box, "p", "contact info:");
    createElement(box, "br");
    createElement(box, "p", "+1 123 123 1234");
    createElement(box, "p", "contact@test.com");
}

export default renderContact;