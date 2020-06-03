class CopyRight extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.nama = this.getAttribute("nama") || null;
        this.link = this.getAttribute("link") || null;
        this.render();  
    }
    render(){
        this.innerHTML = `
            <a href="${this.link}">
                <img src="${this.src}" alt="${this.alt}" width="45px">
            </a>
            <p class="copy mt-2">Made with <i class="fas fa-heart"></i> by <a href="${this.link}" title="${this.nama}">${this.nama}</a></p>
        `;
    }

}
    
customElements.define("copy-right", CopyRight);