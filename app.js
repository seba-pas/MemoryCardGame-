

const mazo = [
    {
        nombre: 'fritas',
        img: 'img/fries.png'

    },
    {
        nombre: 'cheeseburger',
        img: 'img/cheeseburger.png'

    },
    {
        nombre: 'hotdog',
        img: 'img/hotdog.png'

    },
    {
        nombre: 'ice-cream',
        img: 'img/ice-cream.png'

    },
    {
        nombre: 'milkshake',
        img: 'img/milkshake.png'

    },
    {
        nombre: 'pizza',
        img: 'img/pizza.png'

    },
    {
        nombre: 'fritas',
        img: 'img/fries.png'

    },
    {
        nombre: 'cheeseburger',
        img: 'img/cheeseburger.png'

    },
    {
        nombre: 'hotdog',
        img: 'img/hotdog.png'

    },
    {
        nombre: 'ice-cream',
        img: 'img/ice-cream.png'

    },
    {
        nombre: 'milkshake',
        img: 'img/milkshake.png'

    },
    {
        nombre: 'pizza',
        img: 'img/pizza.png'

    }
]

mazo.sort(() => 0.5 - Math.random())

const mostrador = document.querySelector('#grid')
let cartasElegidas = []
let cartasElegidasKey = []
let cartasMatcheadas = []
let resultado = document.querySelector('#resultado')

function crearMesa () {
    for(let i = 0; i < mazo.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('key', i)
        card.addEventListener('click', girarCarta)
        mostrador.appendChild(card)

    }

}

crearMesa()

function match() {
    const cards = document.querySelectorAll('img')
    if(cartasElegidas[0] == cartasElegidas[1]){
        alert('bien querido!')
        cards[cartasElegidasKey[0]].setAttribute('src', './img/white.png')
        cards[cartasElegidasKey[1]].setAttribute('src', './img/white.png')
        cards[cartasElegidasKey[1]].removeEventListener('click', girarCarta)
        cards[cartasElegidasKey[0]].removeEventListener('click', girarCarta)
        cartasMatcheadas.push(cartasElegidas)
    }else {
        cards[cartasElegidasKey[0]].setAttribute('src', './img/blank.png')
        cards[cartasElegidasKey[1]].setAttribute('src', './img/blank.png')

    }
    resultado.innerHTML = cartasMatcheadas.length * 100
    cartasElegidas = []
    cartasElegidasKey = []
    if(cartasMatcheadas.length === mazo.length/2){
        resultado.innerHTML = 'Ganaste'
    }
}

function girarCarta() {    
    const cardKey = this.getAttribute('key')
    cartasElegidas.push(mazo[cardKey].nombre)
    cartasElegidasKey.push(cardKey)
 
    this.setAttribute('src', mazo[cardKey].img)
    if(cartasElegidas.length ===2){
        setTimeout(match, 500)
    }
}