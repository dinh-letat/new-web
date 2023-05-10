
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })


let shoesProduct = [
    {
        id: 1,
        name: 'Fresh Foam X 1080v12',
        image: 'g1.jpg',
        price: 159.99
    },
    {
        id: 2,
        name: '574 Core',
        image: 'g2.webp',
        price: 84.99
    },
    {
        id: 3,
        name: 'FuelCell SuperComp Elite v3',
        image: 'g3.webp',
        price: 229.99
    },
    {
        id: 4,
        name: 'Fresh Foam X 1080v12 Lounge Around',
        image: 'g4.webp',
        price: 159.99
    },
    {
        id: 5,
        name: 'FuelCell SuperComp Trainer',
        image: 'g5.webp',
        price: 179.99
    },
    {
        id: 6,
        name: 'FuelCell Propel v4',
        image: 'g6.webp',
        price: 109.99
    },
    {
        id: 7,
        name: 'FuelCell Rebel v3',
        image: 'g7.webp',
        price: '109.99 - 129.99'
    },
    {
        id: 8,
        name: 'Name 8',
        image: 'g8.webp',
        price: 180000
    },
    {
        id: 9,
        name: 'Fresh Foam X 860v13',
        image: 'g9.webp',
        price: 139.99
    },
    {
        id: 10,
        name: 'Fresh Foam X 880v13',
        image: 'g10.webp',
        price: 139.99
    },
    {
        id: 11,
        name: 'Made in USA 990v6',
        image: 'g11.webp',
        price: 199.99
    },
    {
        id: 12,
        name: '550',
        image: 'g12.webp',
        price: 109.99
    },
    {
        id: 13,
        name: '928v3',
        image: 'g13.webp',
        price: 154.99
    },
    {
        id: 14,
        name: 'Fresh Foam X More v4',
        image: 'g14.webp',
        price: 149.99
    },
    {
        id: 15,
        name: '1540v3',
        image: 'g15.webp',
        price: 179.99
    },
    {
        id: 16,
        name: '574',
        image: 'g16.webp',
        price: 84.99
    },
    {
        id: 17,
        name: 'Fresh Foam Roav',
        image: 'g17.webp',
        price: 84.99
    },
    {
        id: 18,
        name: 'Name 18',
        image: 'g18.webp',
        price: 180000
    },
    {
        id: 19,
        name: 'Name 19',
        image: 'g19.webp',
        price: 190000
    },
    {
        id: 20,
        name: 'Name 20',
        image: 'g20.webp',
        price: 1200000
    },
    {
        id: 21,
        name: 'Name 21',
        image: 'g21.webp',
        price: 110000
    },
    {
        id: 22,
        name: 'Name 22',
        image: 'g22.webp',
        price: 120000
    },
    {
        id: 23,
        name: 'Name 23',
        image: 'g23.webp',
        price: 130000
    },
    {
        id: 24,
        name: 'Name 24',
        image: 'g24.webp',
        price: 140000
    },
    {
        id: 25,
        name: 'Name 25',
        image: 'g25.webp',
        price: 150000
    },
    {
        id: 26,
        name: 'Name 26',
        image: 'g26.webp',
        price: 160000
    },
    {
        id: 27,
        name: 'Name 27',
        image: 'g27.webp',
        price: 170000
    },
    {
        id: 28,
        name: 'Name 28',
        image: 'g28.webp',
        price: 180000
    }
];

let clothesProduct = [
    {
        id: 1,
        name: 'Impact Run Luminous Tank',
        image: 'c1.webp',
        price: 49.99
    },
    {
        id: 2,
        name: 'Impact Run Luminous 3 Inch Short',
        image: 'c2.jpg',
        price: 49.99
    },
    {
        id: 3,
        name: 'Accelerate Short Sleeve Top',
        image: 'c3.webp',
        price: 49.99
    },
    {
        id: 4,
        name: 'Accelerate 5 inch Short',
        image: 'c4.webp',
        price: 49.99
    },
    {
        id: 5,
        name: 'Q Speed Jacquard Short Sleeve',
        image: 'c5.webp',
        price: 49.99
    },
    {
        id: 6,
        name: 'Q Speed Short',
        image: 'c6.webp',
        price: 49.99
    },
    {
        id: 7,
        name: 'Q Speed Jogger',
        image: 'c7.webp',
        price: 49.99
    },
    {
        id: 8,
        name: 'NB Essentials Stacked Logo Tee',
        image: 'c8.webp',
        price: 49.99
    },
    {
        id: 9,
        name: 'Essentials FT Sweatpant',
        image: 'c9.webp',
        price: 49.99
    },
    {
        id: 10,
        name: 'Uni-ssentials Warped Classics Cotton J…',
        image: 'c10.webp',
        price: 49.99
    },
    {
        id: 11,
        name: 'Uni-ssentials Cotton T-Shirt',
        image: 'c11.webp',
        price: 49.99
    },
    {
        id: 12,
        name: 'Uni-ssentials French Terry Hoodie',
        image: 'c12.webp',
        price: 49.99
    }
];

let accessProduct = [
    {
        id: 1,
        name: 'Flat Knit No Show Socks 6 Pack',
        image: 'a1.webp',
        price: 17.89
    },
    {
        id: 2,
        name: 'Coolmax Low Cut Socks 2 Pack',
        image: 'a2.webp',
        price: 13.99
    },
    {
        id: 3,
        name: 'Brooklyn Half 5 Panel Laser Run Hat',
        image: 'a3.webp',
        price: 27.79
    },
    {
        id: 4,
        name: 'Brooklyn Half Speed Run Trucker',
        image: 'a4.webp',
        price: 49.99
    },
    {
        id: 5,
        name: 'NB Essential Tie Dye Midcalf 2 Pack',
        image: 'a5.webp',
        price: 49.99
    },
    {
        id: 6,
        name: 'Running Accelerate Midcalf Tab 3 Pack',
        image: 'a6.webp',
        price: 49.99
    },
    {
        id: 7,
        name: 'Running Accelerate Midcalf Tab 3 Pack',
        image: 'a7.webp',
        price: 29.99
    },
    {
        id: 8,
        name: 'Legacy Commuter Backpack',
        image: 'a8.webp',
        price: 89.99
    }
]

let listCards = [];
function initApp() {
    shoesProduct.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                    <a href="/pages/">
                        <img width="250px" height="250px" src="/assets/img/shoes/${value.image}"/>
                    </a>
                    <div class="title"><h4>${value.name}</h4></div>
                    <div class="price">$${value.price.toLocaleString()}</div>
                    <a href="/pages/productDetail.html">
                        <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>
                    </a>
        `;
        list.appendChild(newDiv)
    })

    clothesProduct.forEach((value, key) => {
        let newDiv = document.createElement('span');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                    <a href="/assets/img/clothes/${value.image}">
                        <img width="250px" height="250px" src="/assets/img/clothes/${value.image}"/>
                    </a>
                    <div class="title"><h4>${value.name}</h4></div>
                    <div class="price">$${value.price.toLocaleString()}</div>
                    <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>
        `;
        list.appendChild(newDiv)
    })

    accessProduct.forEach((value, key) => {
        let newDiv = document.createElement('span');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                    <a href="/assets/img/accories/${value.image}">
                        <img width="250px" height="250px" src="/assets/img/accories/${value.image}"/>
                    </a>
                    <div class="title"><h4>${value.name}</h4></div>
                    <div class="price">$${value.price.toLocaleString()}</div>
                    <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>
        `;
        list.appendChild(newDiv)
    })
}
initApp();

