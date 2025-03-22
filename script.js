let list = document.querySelectorAll('.item'); //toda vez que for se referenciar ao html no js, precisa usar o "Document". o querySelectorAll serve para procurar todos os itens de alguma coordenada que for proposto.
let next = document.getElementById('next') //Serve para capturar algo pelo id
let prev = document.getElementById('prev')

let count = list.length //retorna os valores de uma variavel
let active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.active')
        0
        
    activeOld.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1  : active - 1
    list[active].classList.add('active')

}