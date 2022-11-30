class TituloDinamico extends HTMLElements {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        //base component
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'My news';

        //styling component
        const style = document.createElement('style');
        style.textContent = `
            h1{
                color:red;
            }
        `;

        // send for shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);