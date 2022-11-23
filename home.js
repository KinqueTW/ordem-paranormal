const containerPontos = document.querySelectorAll(".pontos")

const nameDado = document.querySelector("#nome-dado")
const dadoValue = document.querySelector("#dado")
const sucesso = document.querySelector("#sucesso")
const valorAtributos = document.querySelectorAll("#atributo-valor")

const select = document.querySelector("#select")
const msgDado = document.querySelector(".msg-dado")
const msgCombat = document.querySelector(".msg-combat")
const msgInventory = document.querySelector(".msg-inventory")
const msgMoney = document.querySelector(".msg-money")
const msgPontos = document.querySelector(".msg-pontos")

const pontosAtuaisTotais = document.querySelectorAll("#pontos-atuais-totais")
const pontosMaximosTotais = document.querySelectorAll("#pontos-maximos-totais")

const pontosAtuais = document.querySelector('#pontos-atuais')
const pontosMaximos = document.querySelector('#pontos-maximos')

let typePontos = ""
const handleClickPontos = (namePontos) => {
    const tituloPontos = document.querySelector("#titulo-pontos")
    if (namePontos == "vida") {
        typePontos = "vida"
        pontosAtuais.value = pontosAtuaisTotais[0].value
        pontosMaximos.value = pontosMaximosTotais[0].value

    } else if (namePontos == "sanidade") {
        typePontos = "sanidade"
        pontosAtuais.value = pontosAtuaisTotais[1].value
        pontosMaximos.value = pontosMaximosTotais[1].value

    } else if (namePontos == "ocultismo") {
        typePontos = "ocultismo"
        pontosAtuais.value = pontosAtuaisTotais[2].value
        pontosMaximos.value = pontosMaximosTotais[2].value

    }
    msgPontos.classList.add('add-msg-pontos')
    tituloPontos.innerHTML = `Mudar ${namePontos}`
}

const addPontos = () => {

    if (typePontos == "vida") {
        pontosAtuaisTotais[0].value = pontosAtuais.value
        pontosMaximosTotais[0].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[0].value) * 100) / Number(pontosMaximosTotais[0].value)
        const barLife = document.querySelector(".vida")
        barLife.style.width = `${callBarra}%` 

    } else if (typePontos == "sanidade") {
        pontosAtuaisTotais[1].value = pontosAtuais.value
        pontosMaximosTotais[1].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[1].value) * 100) / Number(pontosMaximosTotais[1].value)
        const barSanidade = document.querySelector(".sanidade")
        barSanidade.style.width = `${callBarra}%` 

    } else if (typePontos == "ocultismo") {
        pontosAtuaisTotais[2].value = pontosAtuais.value
        pontosMaximosTotais[2].value = pontosMaximos.value
        const callBarra = (Number(pontosAtuaisTotais[2].value) * 100) / Number(pontosMaximosTotais[2].value)
        const barOcultismo = document.querySelector(".ocultismo")
        barOcultismo.style.width = `${callBarra}%` 
    }
    msgPontos.classList.remove("add-msg-pontos")
}


//-------------------------------------//

const revelarResultado = (valorAtributo, valorDado, nome) => {
    const normal = valorAtributo / 1
    const bom = valorAtributo / 2
    const extremo = valorAtributo / 5

    const valorExtremo = 21 - extremo 
    const valorBom = 21 - bom
    const valorNormal = 21 - normal

    dadoValue.innerHTML = valorDado
    nameDado.innerHTML = `Rolagem do dado (${nome})`

    if (valorDado >= valorExtremo) {
        sucesso.innerHTML = "Extremo"

    } else if (valorDado >= valorBom) {
        sucesso.innerHTML = "Sucesso Bom"

    } else if (valorDado >= valorNormal) {
        sucesso.innerHTML = "Sucesso Normal"

    } else {
        sucesso.innerHTML = "Fracasso"
    }
}

const callDados = (atributo, dado) => {
    msgDado.classList.add("add-msg-dado")
    
    const calc = Math.floor(Math.random() * dado + 1)
    
    switch (atributo) {
        case "sanidade":
            const exp = Number(document.querySelector("#exp").value)
            dadoValue.innerHTML = calc
            nameDado.innerHTML = "Rolagem de dado (Sanidade)"
            if (calc > exp) {
                sucesso.innerHTML = "Fracasso"
            } else {
                sucesso.innerHTML = "Sucesso"
            }
            break;

        case "força":
            revelarResultado(Number(valorAtributos[0].value), calc, "Força")
            break;

        case "constituiçao":
            revelarResultado(Number(valorAtributos[1].value), calc, "Constituição")
            break;

        case "destreza":
            revelarResultado(Number(valorAtributos[2].value), calc, "Destreza")
            break;

        case "aparencia":
            revelarResultado(Number(valorAtributos[3].value), calc, "Aparência")
            break;

        case "educaçao":
            revelarResultado(Number(valorAtributos[4].value), calc, "Educação")
            break;

        case "inteligencia":
            revelarResultado(Number(valorAtributos[5].value), calc, "Inteligencia")
            break;

        case "poder":
            revelarResultado(Number(valorAtributos[6].value), calc, "Poder")
            break;

        case "sorte":
            revelarResultado(Number(valorAtributos[7].value), calc, "Sorte")
            break;
    
        default:
            break;
    }
}

const sair = () => {
    msgDado.classList.remove("add-msg-dado")
    msgCombat.classList.remove("add-msg-combat")
    msgInventory.classList.remove("add-msg-inventory")
    msgMoney.classList.remove("add-msg-money")
    msgPontos.classList.remove("add-msg-pontos")
}

//------------------------------------------------

const add = () => {
    msgCombat.classList.add("add-msg-combat")
}

const weapons = document.querySelector("#weapons")
const weaponCharacteristics = document.querySelectorAll("#weapon-characteristics");

const addWeapon = () => {
    if (weaponCharacteristics[0].value != "" && weaponCharacteristics[2].value != "") {
        let tr = document.createElement("tr")
        weapons.appendChild(tr);
    
        const td = document.createElement('td')
        const button = document.createElement("button")
    
        button.classList.add("button-delete")
    
        td.appendChild(button)
        button.innerHTML = "🗑"
        tr.appendChild(td)
    
        for (var cont = 0; cont <= 2; cont++) {
            const td = document.createElement("td")
            tr.appendChild(td)
            td.innerHTML = weaponCharacteristics[cont].value
        }
    //----------munição(ammunition)------------
        for (var cont = 3; cont <= 4; cont++) {
            const td = document.createElement("td")
            const ammunition = document.createElement("input")
            tr.appendChild(td)
            td.appendChild(ammunition)
            ammunition.value = weaponCharacteristics[cont].value
        }
    //-----------------------------------------
        for (var cont = 5; cont <= 8; cont++) {
            const td = document.createElement("td")
            tr.appendChild(td)
            td.innerHTML = weaponCharacteristics[cont].value
        }
    
        let buttonDel = document.querySelectorAll(".button-delete")
    
        for (let del of buttonDel) {
            del.addEventListener('click', delWeapon)
        }
    
        msgCombat.classList.remove("add-msg-combat")

    }
}

const delWeapon = (e) => {
    e.composedPath()[2].remove()
}

//------------------------------------------------------

let pericias = document.querySelectorAll(".pericias");

const quickSkills = document.querySelector(".container-pericias-rapidas")

const HandleAddQuickAcess = (e) => {
    if (e.composedPath()[0].checked == true) {
        const quickSkill = document.createElement("div")
        const valueQuickSkill = document.createElement("input")
        const nameQuickSkill = document.createElement("p")

        quickSkill.classList.add("pericias", "quick-skill")
        
        valueQuickSkill.value = e.composedPath()[1].childNodes[3].value
        nameQuickSkill.append(e.composedPath()[1].childNodes[5].textContent)

        quickSkill.appendChild(valueQuickSkill)
        quickSkill.appendChild(nameQuickSkill)

        quickSkills.appendChild(quickSkill)
        
    } else {
        const removeQuickSkill = document.querySelectorAll(".quick-skill")
        //------observando pericia por pericia----------------
        for (let contagem = 0; contagem < removeQuickSkill.length; contagem++) {
            if (e.composedPath()[1].innerText == removeQuickSkill[contagem].innerText) {
                removeQuickSkill[contagem].remove()
            }
        }
    }

    pericias = document.querySelectorAll(".pericias");
    resetSkills()
}

const callPericias = (e) => {
    const calc = Math.floor(Math.random() * 20 + 1)

//--------pericias normais-----------------
    if (e.composedPath()[0].childNodes.length == 7) {
        const valuePericia = e.target.childNodes[3].value
        const namePericia = e.composedPath()[0].innerText
        revelarResultado(valuePericia, calc, namePericia)
        msgDado.classList.add("add-msg-dado")

//-------pericias rapidas-------------------
    } else if (e.composedPath()[0].childNodes.length == 2) {
        const valuePericia = e.target.childNodes[0].value
        const namePericia = e.target.childNodes[1].textContent
        revelarResultado(valuePericia, calc, namePericia)
        msgDado.classList.add("add-msg-dado")

    }
    
}

const resetSkills = () => {
    for (let pericia of pericias) {
        pericia.addEventListener("click", callPericias)
    }
}

resetSkills()

const addQuickAcess = document.querySelectorAll("#add-quick-acess");

for (let quickAcess of addQuickAcess) {
    quickAcess.addEventListener("click", HandleAddQuickAcess)
}

//-------------inventory-----------------------------

const addInventory = () => {
    msgInventory.classList.add("add-msg-inventory")
}

const inventory = document.querySelector(".container-inventory")

const peso = []
const handleClickDelete = (e) => {
    e.composedPath()[1].remove()

    //this was the solution i was able to find
    for (let contagem = 0; contagem < peso.length; contagem++) {
        if (e.composedPath()[1].childNodes[2].value == peso[contagem]) {
            console.log(peso)
            peso.splice(contagem, 1)
            contagem = peso.length
        }
    }

    handleWeight()
}

const strongValue = Number(valorAtributos[0].value)
let cargaMaxima = 0

if (strongValue >= 10) {
    cargaMaxima = 19
} else {
    cargaMaxima = 18
}
const weight = () => {
    let soma = 0
    for (let contagem = 0; contagem < peso.length; contagem++) {
        soma = peso[contagem] + soma
    }
    return soma
}

const handleWeight = () => {
    pesoTotal.innerHTML = `Peso Total: ${weight()} / ${cargaMaxima}`
}

const pesoTotal = document.querySelector("#peso-total")
const addItems = () => {
    const nameItemValue = document.querySelector("#name-item");
    const pesoItemValue = document.querySelector("#peso-item");
    if (weight() + Number(pesoItemValue.value) <= cargaMaxima) {

        if (nameItemValue.value != "" && pesoItemValue != "") {
    
            const items = document.createElement("div")
            items.classList.add("items")
        
            const del = document.createElement("button")
            const nameItem = document.createElement("input")
            const pesoItem = document.createElement("input")
        
            del.classList.add("del-buttons")
        
            del.innerHTML = "🗑"
            nameItem.value = nameItemValue.value
            pesoItem.value = pesoItemValue.value
            
            peso.unshift(Number(pesoItem.value)) 
            console.log(peso)
            
            handleWeight()
            
            items.append(del)
            items.append(nameItem)
            items.append(pesoItem)
            inventory.appendChild(items)
            
            msgInventory.classList.remove("add-msg-inventory")
            let delButtons = document.querySelectorAll(".del-buttons")
            
            for (let delButton of delButtons) {
                delButton.addEventListener("click", handleClickDelete)
            }
            nameItemValue.value = ""
            pesoItemValue.value = ""
            
        }
    } else {
        window.alert("Você excedeu a sua carga maxima")
    }
}
pesoTotal.innerHTML = `Peso Total: 0 / ${cargaMaxima}`

const addContainerMoney = () => {
    msgMoney.classList.add("add-msg-money")
}

const money = document.querySelector("#money")
const addMoney = () => {
    const moneyValue = document.querySelector("#money-value")
    console.log(moneyValue.value)
    money.innerHTML = `Dinheiro: ${moneyValue.value}R$`
    msgMoney.classList.remove("add-msg-money")
}
money.innerHTML = `Dinheiro: 00R$`

