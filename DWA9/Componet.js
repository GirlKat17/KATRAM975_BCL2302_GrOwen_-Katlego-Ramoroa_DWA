const template = document.createElement("template");

template.innerHTML = `
<style>
    .preview {
        border-width: 0;
        width: 100%;
        font-family: Roboto, sans-serif;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-align: left;
        border-radius: 8px;
        border: 1px solid rgba(var(--color-dark), 0.15);
        background: rgba(var(--color-light), 1);
    }
    
    @media (min-width: 60rem) {
        .preview {
            padding: 1rem;
        }
    }
    
    .preview_hidden {
        display: none;
    }
    
    .preview:hover {
        background: rgba(var(--color-blue), 0.05);
    }
    
    .preview__image {
        width: 48px;
        height: 70px;
        object-fit: cover;
        background: grey;
        border-radius: 2px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    }
    
    .preview__info {
        padding: 1rem;
    }
    
    .preview__title {
        margin: 0 0 0.5rem;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: rgba(var(--color-dark), 0.8);
    }
    
    .preview__author {
        color: rgba(var(--color-dark), 0.4);
    }
</style>

<dialog class="overlay" data-list-active>
    <div class="overlay__preview">
        <img class="overlay__blur" data-list-blur src=""/>
        <img class="overlay__image" data-list-image src=""/>
    </div>
    <div class="overlay__content">
        <h3 class="overlay__title" data-list-title></h3>
        <div class="overlay__data" data-list-subtitle></div>
        <p class="overlay__data overlay__data_secondary" data-list-description></p>
    </div>

    <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
    </div>
</dialog>
`;

class BookPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
        this.shadowRoot.querySelector(".overlay__title").innerText = this.getAttribute("overlay__title");
        this.shadowRoot.querySelector(".overlay__data").innerText = this.getAttribute("overlay__data");
        this.shadowRoot.querySelector(".overlay__data_secondary").innerText = this.getAttribute("overlay__data overlay__data_secondary");
        this.shadowRoot.querySelector(".overlay__image").src = this.getAttribute("data-list-image");
    }

    connectedCallback() {
        document.querySelector("body > main > div.list__items > button:nth-child(1)").addEventListener('click', ()=>{
            // this.handleBookItemClick.bind();
        this.shadowRoot.querySelector('[class="overlay"]').open = true;
        this.shadowRoot.querySelector(".overlay__title").innerText = this.getAttribute("overlay__title");
        this.shadowRoot.querySelector(".overlay__data").innerText = this.getAttribute("overlay__data");
        this.shadowRoot.querySelector(".overlay__data_secondary").innerText = this.getAttribute("overlay__data overlay__data_secondary");
        this.shadowRoot.querySelector(".overlay__image").src = this.getAttribute("data-list-image");
        }) ;
    }
    

    handleBookItemClick(event) {
        const pathArray = Array.from(event.path || event.composedPath());
        let active = null;
        for (const node of pathArray) {
            if (active) break;
            if (node?.dataset?.preview) {
                let result = null;
    
                for (const singleBook of books) {
                    if (result) break;
                    if (singleBook.id === node?.dataset?.preview) result = singleBook;
                }
                active = result;
            }
        }
    
        if (active) {
            document.querySelector('[data-list-active]').open = true;
            document.querySelector('[data-list-blur]').src = active.image;
            document.querySelector('[data-list-image]').src = active.image;
            document.querySelector('[data-list-title]').innerText = active.title;
            document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
            document.querySelector('[data-list-description]').innerText = active.description;
        }
    }
}

customElements.define("book-preview", BookPreview);

export default BookPreview;
