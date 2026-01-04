init()

function init() {

    selectCard()
    setEquipamentosInput()
    addNewCall()

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
    })
}

function validadeInput(value, regex) {
    value = value.toString().match(regex)[0];
    return value.match(regex) || false
}