

function saving() {
    document.querySelector('savings-card').setAttribute('total', '3400');
    
} 

let numbers = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710, 240, 770];
//let thisWeek = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var thisWeek = 0

function ramdomNumber () {
    const random = Math.floor(Math.random() * numbers.length);
    document.querySelector('savings-card').setAttribute('saving',numbers[random]);
}

function thisweek () {
    document.querySelector('savings-card').setAttribute('thisweek', ++thisWeek);
}



ramdomNumber()
thisweek()
saving()


class savingsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ["saving", "total", "chart", "thisweek"];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "saving") {
            this.saving = newVal;
        }
        if(attr === "total") {
            this.total = newVal;
        }
        if(attr === "chart") {
            this.chart = newVal;
        }
        if(attr === "thisweek") {
            this.thisweek = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section class="card">
                <h4>Ahorrar esta semana:</h4>
                <h2 class="saving">${this.saving}</h2>

                <div class="chart">
                    <p class="subtitle">Total hasta ahora:</p>
                    <h2 class="total">${this.total}</h2>
                </div>  

                <div class="week">
                    <p>Semana:</p>
                    <p class="thisweek">${this.thisweek}</p>
                    <p class="totalweek">/26</p>
                </div>
            </sections>
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
            }
            section {
                background: var(--primary-color);
                border-radius: 20px;
                padding: 25px;
                box-sizing: border-box;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

            }
            h2 {
                font-size: var(--heading-primary);
                color: var(--terceary-color);
                font-weight: 600;
            }
            h4 {
                font-size: var(--heading-secondary);
                color: var(--text-color);
                font-weight: 600;
                margin: 0;
                font-size: 16px;
            }
            p {
                font-size: var(--text-primary);
                color: var(--fourth-color);
                font-weight: 400;
                margin: 0;
            }
            .week {
                display: flex;
                align-items: center;
                
            }
            .thisweek {
                color: var(--terceary-color);
                margin-left: .8rem;
                font-weight: 600;
            }
            .totalweek {
                font-size: .6rem;
                margin-left: .2rem;
            }
            .chart {
                box-sizing: border-box;
                border-radius: 100%;
                width: 200px;
                height: 200px;
                margin: 25px;

                border: 8px solid #828282;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .saving{
                margin: 0;
            }
            .total {
                margin: 0;
                color: var(--text-color);
            }
            .subtitle {
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
customElements.define("savings-card", savingsCard); 