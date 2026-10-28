class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="global-header">
        <nav id="navbar">
        <a href="/">Home</a> <span style="color:white">|</span>
        <a href="/about/">About me</a> <span style="color:white">|</span>
        <a href="/about/contact/">Contact me</a> <span style="color:white">|</span>
        <a href="/about/contact/socials">Social medias</a> <span style="color:white">|</span>
        <a href="/about/faq">Frequently asked questions</a> <span style="color:white">|</span>
        </nav>
        </header>
        `;
    }
}
class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="global-footer">
        <div class="foot">
        <p>All content under CC-BY-SA license unless otherwise specified, <a href="/copyright">more information here</a>.</p>
        </div>
        </footer>
        `;
    }
}

customElements.define('global-header', GlobalHeader);
customElements.define('global-footer', GlobalFooter);
