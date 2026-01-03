init()

function init() {

    selectCard()
    setEquipamentosInput()
    addNewCall()

    console.log(equipamentos)

    const button = document.querySelector('#new-solicitation form button')
    const dateField = document.querySelector('#new-solicitation input[type=date]');
    const currentyDate = new Date();
    let day = currentyDate.getDate().toString();
    let mounth = (currentyDate.getMonth() + 1).toString();
    const fullYear = currentyDate.getFullYear();

    console.log(day.length)
    console.log(day)
    day = day.length == 1 ? "0".concat(day) : day;
    mounth = mounth.length == 1 ? "0".concat(mounth) : mounth;

    console.log(day)

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

    console.log(tabs)

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

function setEquipamentosInput(){
    const inputEquipamentos = document.querySelector("#equipamentos");
    equipamentos.map(equipamento => {
        inputEquipamentos.innerHTML += `
        <option id="${equipamento.id}" value="${equipamento.nome}">${equipamento.nome} -- 
        ${equipamento.categoria}
        </option>
        `
    })
}

function verifyForm(form){
    const inputForm = form
    for(let i = 0; i < 5; i++){
        if(inputForm[i].value === ""){
            inputForm[i].classList.add('invalid-value');
        }else{
            inputForm[i].classList.remove('invalid-value');
        }
        console.log(inputForm[i])
    }
    console.log(inputForm.length);
}

function addNewCall(){
    const inputForm = document.querySelector("form");
    inputForm.addEventListener('submit', e => {
        e.preventDefault();
        
        verifyForm(inputForm)
    })
}