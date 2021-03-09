class historialWeeks extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ["ahorro", "semana", "thisweek"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "ahorro" && oldVal !== newVal) {
            this.ahorro = newVal;
        }
        if(attr === "semana" && oldVal !== newVal) {
            this.semana = newVal;
        }
        // if(attr === "thisweek") {
        //     this.thisweek = newVal;
        // }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <historial-weeks>

            <div class="squares">
                       
                <div class="square">
                    <p>${this.semana}</p>
                    <p>${this.ahorro}</p>
                </div>
            
            </div>

            </historial-weeks>
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return`
        <style>
            :host{
                --primary-color: #1C1C24;
                --secondary-color: #292932;
                --terceary-color: #F2C94C;
                --fourth-color: #B5B5BE;
                --text-color: #fff;
                --heading-primary: 30px;
                --heading-secondary: 25px;
                --text-primary: 14px;
                --text-secondary: 11px;
            }
            
            
            .squares{
                margin-top: 8px; 
                display: flex;
                flex-flow: wrap; 
            }

            .square {
                border: 1px solid #292932;
                border-radius: 8px;
                width: 40px;
                height: 40px;
                text-align: center; 
                margin-right: 8px;
                margin-top: 8px;
            }
            .square-thisweek{
                color: var(--terceary-color);
            }
            
            p {
                font-size: var(--text-secondary);
                color: var(--fourth-color);
                font-weight: 400;
                margin: 0;
            }

        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("historial-weeks", historialWeeks);