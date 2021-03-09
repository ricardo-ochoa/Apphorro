class savingsCal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ["saving", "week", "thisweek"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "saving") {
            this.saving = newVal;
        }
        if(attr === "week") {
            this.week = newVal;
        }
        // if(attr === "thisweek") {
        //     this.thisweek = newVal;
        // }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `

                    <div class="square">
                        <p class="square-week">${this.week}</p>
                        <p class="square-saving">${this.saving}</p>
                    </div>

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

            
            .square {
                border: 1px solid #292932;
                border-radius: 8px;
                width: 40px;
                height: 40px;
                text-align: center; 
                margin-right: 8px;
                margin-top: 8px;
                
            }
            .square-week {
                margin-top: 3px;
            }
            .square-saving {
                color: #6fcf97;
            }
            
            h5 {
                font-size: var(--heading-secondary);
                color: var(--text-color);
                font-weight: 600;
                margin: 0;
                font-size: 14px;
                align-self: flex-start;
                
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
customElements.define("savings-cal", savingsCal);