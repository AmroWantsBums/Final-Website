const Options = [
    {name : "Home", href:"../index.html"},
    {name : "Shopping", href:"../BuyPage/BuyPage.html"},
    {name : "Cart", href:"../ShoppingCart/Cart.html"}
]

export function CreateNavigationBar(PageName){
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    Options.forEach(option => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        if (PageName == option.name){
            li.innerText = option.name;
            li.style.textDecoration = "underline";
        }
        else{
            const a = document.createElement("a");
            a.innerText = option.name;
            a.setAttribute("href", option.href);
            li.appendChild(a);
            a.style.textDecoration = "none";
            a.style.color = "black";
        }
        ul.appendChild(li);
    });    
    nav.appendChild(ul);
    ul.classList.add("NavigationBar");
}

