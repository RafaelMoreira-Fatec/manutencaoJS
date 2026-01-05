init()

function init() {

    selectCard()
    setEquipamentosInput()
    addNewCall()
    renderCalls()

    const button = document.querySelector('#new-solicitation form button')
    const dateField = document.querySelector('#new-solicitation input[type=date]');
    const currentyDate = new Date();
    let day = currentyDate.getDate().toString();
    let mounth = (currentyDate.getMonth() + 1).toString();
    const fullYear = currentyDate.getFullYear();

    day = day.length == 1 ? "0".concat(day) : day;
    mounth = mounth.length == 1 ? "0".concat(mounth) : mounth;

    dateField.value = `${fullYear}-${mounth}-${day}`

    // button.addEventListener('click', e => {
    //     console.log('teste')
    //     let form = document.querySelector('#new-solicitation form')

    //     for (i = 0; i < (form.length - 1); i++) {
    //         console.log(form[i])
    //     }
    // })
}


function selectCard() {

    const sectionCards = [...document.querySelectorAll('.section-card')]

    const tabs = [...document.querySelectorAll("li")]
    const tabsObeject = {}

    let currentyTab;

    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            currentyTab = tab.dataset.tab;

            tab.classList.add('active')

            sectionCards.forEach((card, i) => {
                currentyTab
                if (currentyTab == card.dataset.section) {
                    card.classList.remove('hide-section');
                } else {
                    card.classList.add('hide-section');
                    tabs[i].classList.remove('active')
                }
            })
        })
    })

}

function setEquipamentosInput() {
    const inputEquipamentos = document.querySelector("#equipamentos");
    equipamentos.forEach(equipamento => {
        inputEquipamentos.innerHTML += `
        <option id="${equipamento.id}" value="${equipamento.nome}">${equipamento.nome} -- 
        ${equipamento.categoria}
        </option>
        `
    })
}

function verifyForm(form) {
    const inputForm = form

    const regexDate = /^\d{4}-\d{2}-\d{2}$/

    const hasError = [];
    const dados = {};

    for (let i = 0; i < 5; i++) {

        if (inputForm[i].value === "" && inputForm[i].type !== "date") {
            inputForm[i].classList.add('invalid-value');
            hasError[i] = true;
        } else {
            inputForm[i].classList.remove('invalid-value');
            hasError[i] = false;
            dados[i] = inputForm[i].value
        }

        if (inputForm[i].type === "date") {
            if (!validadeInput(inputForm[i].value, regexDate)) {
                inputForm[i].classList.add('invalid-value');
                hasError[i] = true;
            } else {
                inputForm[i].classList.remove('invalid-value');
                hasError[i] = false;
            }

        }

    }

    return { error: hasError.includes(true), dados }

}

function addNewCall() {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener('submit', e => {
        e.preventDefault();
        const { error, dados } = verifyForm(inputForm);
        if (error) alert("Há algum campo vazio ou preenchido incorretamente");
        else {
            const call = new Calls(dados[0], dados[1], dados[2], dados[3], dados[4]);
            call.addCall()
        }
        inputForm.reset();
        renderCalls()
    })

}

function validadeInput(value, regex) {
    // value = value.toString().match(regex)[0];
    return regex.test(value);
}

function renderCalls() {
    const calls = new Calls();

    let openCalls = [];
    let doingCalls = [];
    let doneCalls = [];

    calls && calls.getCalls().forEach(call => {
        if (call.status === "Em aberto") openCalls.push(call);
        if (call.status === "Em andamento") doingCalls.push(call);
        if (call.status === "Feito") doneCalls.push(call);
    });

    render(openCalls, 'open');
    render(doingCalls, 'doing');
    render(doneCalls, 'done')
}

function render(calls, section) {
    const callsSection = document.querySelector("#".concat(section));

    callsSection.innerHTML = "";

    if (calls) {
        calls.forEach(call => {
            callsSection.innerHTML += `
            <div class="item-card" id="${call.id}">
            <p><span>Equipamento: </span>${call.equipamento}</p>
            <p><span>Descrição: </span>${call.descricao}</p>
            <p><span>Prioridade: </span>${call.prioridade}</p>
            <p><span>Status: </span>${call.status}</p>
            <p><span>Data de abertura: </span>${call.data}</p>
            
            ${section === "open" ? 
            `<div class="row">
            <div class="col-4">
            <input type="text" placeholder="Responsavel" id="input_${call.id}"/>
            </div>
            <div class="col-4">
            <button onclick="updateStatus('${call.id}', 'input')">Prosseguir</button>
            </div>
            </div>` 
            : ""}
            
            ${section === "doing" ? 
            `
            <p><span>Responsavel: </span>${call.responsavel}</p>
            <div class="row">
            <div class="col-4">
            <textarea type="text" placeholder="Relatório" id="textarea_${call.id}"></textarea>
            </div>
            <div class="col-4">
            <button onclick="updateStatus('${call.id}', 'textarea')">Finalizar</button>
            </div>
            </div>` 
            : ""}

            ${
                section === "done" ? 
                `
                <p><span>Responsavel: </span>${call.responsavel}</p>
                <p><span>Relatorio: </span>${call.relatorio}</p>
                `
                : ""
            }
            
            </div>
            `;

        })
    }

}

function updateStatus(id, value) {

    const elementInput = document.querySelector(`#${value}_`.concat(id));

    if (elementInput.value === "") {
        elementInput.classList.add('invalid-value');
        alert("Valor invalido!");

    } else {
        elementInput.classList.remove('invalid-value');
        const calls = new Calls();
        const callsArray = calls.getCalls()
        const filterCall = callsArray.filter(c => c.id == id)
        if(value === 'input') filterCall[0].responsavel = elementInput.value;
        if(value === 'textarea') filterCall[0].relatorio = elementInput.value;

        if(value === 'input') filterCall[0].status = "Em andamento";
        if(value === 'textarea') filterCall[0].status = "Feito";
        const callIndex = callsArray.findIndex(call => call.id === id)

        console.log(filterCall[0])

        
        callsArray[callIndex] = filterCall[0];
        calls.updateCalls(callsArray);
    }

    renderCalls()
    // let element = "#".concat(call.id).concat(" input");

    // let inputElement = document.querySelector(element);

    // console.log(inputElement.value)

}