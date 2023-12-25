const mylist = document.querySelector('ul')

const list = document.querySelector('.show-all')

const desconto = document.querySelector('.map-all')

const total = document.querySelector('.reduce-all')

const vegana = document.querySelector('.filter-all')


function showAll(itemArray) {
    let myLi = ''

    itemArray.forEach((product) => {
        myLi += `
        
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="price">R$ ${product.price}</p>
            </li>
        
        `

    })

    mylist.innerHTML = myLi
}


function mapAllItens() {
    const discount = menuOptions.map((item) => ({

        ...item,
        price: item.price * 0.9,

    }))
    showAll(discount)
}

function reduce() {

    const soma = menuOptions.reduce((a, b) => a + b.price, 0)

    mylist.innerHTML = `
    <li>
        
        <p> O valor Total sem desconto é: R$ ${soma}</p>
    </li>
    
    `
}

function filtrar() {

    const option = menuOptions.filter((product) => product.vegan === true) 
   showAll(option)
}



list.addEventListener('click', () => showAll(menuOptions))

desconto.addEventListener('click', mapAllItens)

total.addEventListener('click', reduce)

vegana.addEventListener('click', filtrar)