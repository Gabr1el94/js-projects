class CardNews extends HTMLElements {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }


    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href=this.getAttribute("link");


        const description = document.createElement("p");
        description.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(description);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const image = document.createElement("img");
        image.src= this.getAttribute("photo");
        image.alt="Foto da notícia";
        cardRight.appendChild(image);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() { }
}

customElements.define('card-news', CardNews);