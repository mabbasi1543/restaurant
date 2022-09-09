import createElement from "./utility"
const menu = [
    {
        name: "gyros",
        rank: 1,
        img: "https://cdn.tasteatlas.com/images/dishes/254a002208804e0fa92fa354655fdaac.jpg?mw=1300",
        url: "https://www.tasteatlas.com/gyros",
    },
    {
        name: "souvlaki",
        rank: 2,
        img: "https://cdn.tasteatlas.com//images/dishes/90c413e6606d4c69af350324c8e69835.jpg?w=905&h=510",
        url: "https://www.tasteatlas.com/souvlaki",
    },
    {
        name: "shawarma",
        rank: 3,
        img: "https://cdn.tasteatlas.com//images/dishes/a2a68bb8904548639a51bbb609c50821.jpg?w=905&h=510",
        url: "https://www.tasteatlas.com/shawarma",
    },
    {
        name: "doner kebab",
        rank: 4,
        img: "https://cdn.tasteatlas.com//images/dishes/1681a82d605f4791963eb268acf0978d.jpg?w=905&h=510",
        url: "https://www.tasteatlas.com/doner-kebab",
    },
    {
        name: "adana kebab",
        rank: 5,
        img: "https://cdn.tasteatlas.com//images/dishes/3ab81ec46f604f85bcc3cc51fd17c446.jpg?w=905&h=510",
        url: "https://www.tasteatlas.com/adana-kebab",
    },

]
const renderMenu = (parent) => {
    const box = createElement(parent, "div", "", "boxGrid")
    menu.forEach(element => {
        const item = createElement(box, "div", "", "gridEl")
        const img = createElement(item, "img")
        img.src = element.img;
        createElement(item, "br");
        createElement(item, "h3", `#${element.rank}`)
        createElement(item, "h3", element.name)
        const a = createElement(item, "a", "info")
        a.href = element.url;
    });

}

export default renderMenu;