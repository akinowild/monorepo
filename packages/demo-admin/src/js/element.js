class MyElement extends  HTMLBRElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
        <style>
        :host{
            display:block;
            background:red;
            color:white;
            padding:10px;
        }
        </style>
        <slot></slot>
        `
    }
}
customElements.define('my-element',MyElement)
