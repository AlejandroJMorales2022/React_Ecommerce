

const products = [
    {
        id:1,
        name:'Salamandra Round 7000kcal',
        price:47490,
        category: 'premium',
        img:'../assets/images/premium/round7000.png',
        stock:9,
        description: 'salamandra de alto rendimiento de 7kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión.'
    
    },
    {
        id:2,
        name:'Salamandra Premium 7000kcal',
        price:79190,
        category: 'premium',
        img:'../assets/images/premium/premium7000.png',
        stock:19,
        description: 'salamandra de alto rendimiento de 7kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión.'
    
    },
    {
        id:3,
        name:'Salamandra Moquehue 8000kcal',
        price:51390,
        category: 'premium',
        img:'../assets/images/premium/moquehue8000.jpg',
        stock:30,
        description: 'salamandra de alto rendimiento de 8kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión. (Ecológico y seguro)'
    
    },
    {
        id:4,
        name:'Salamandra Premium 11000kcal',
        price:94990,
        category: 'premium',
        img:'../assets/images/premium/premium11000.png',
        stock:30,
        description: 'salamandra de alto rendimiento de 11kcal para calefaccionar hasta 70m2. Doble cámara y doble combustión. (Ecológico y seguro)'
    
    },
    {
        id:5,
        name:'Salamandra Moquehue 13500kcal',
        price:81190,
        category: 'premium',
        img:'../assets/images/premium/moquehue13500.png',
        stock:12,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:6,
        name:'Salamandra Premium 14000kcal Alta',
        price:121990,
        category: 'premium',
        img:'../assets/images/premium/premium14000.png',
        stock:12,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:7,
        name:'Salamandra Premium 14000kcal Baja',
        price:121990,
        category: 'premium',
        img:'../assets/images/premium/premium14000baja.png',
        stock:18,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:8,
        name:'Salamandra Premium 14000kcal con Base',
        price:129690,
        category: 'premium',
        img:'../assets/images/premium/premium_con_base14000.png',
        stock:15,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:9,
        name:'Salamandra Premium 27000kcal',
        price:192990,
        category: 'premium',
        img:'../assets/images/premium/premium27000.png',
        stock:20,
        description: 'salamandra de alto rendimiento de 27kcal para calefaccionar hasta 140m2'
    },
    {
        id:10,
        name:'Salamandra Campana 27000kcal',
        price:216890,
        category: 'premium',
        img:'../assets/images/premium/campana27000.jpg',
        stock:20,
        description: 'salamandra de alto rendimiento de 27kcal para calefaccionar hasta 140m2'
    },
    {
        id:11,
        name:'Salamandra Campana Doble Puerta 27000kcal',
        price:216890,
        category: 'premium',
        img:'../assets/images/premium/campana27000.jpg',
        stock:8,
        description: 'salamandra de alto rendimiento de 27kcla para calefaccionar hasta 140m2'
    },
    {
        id:12,
        name:'Salamandra Central 39000kcal',
        price:216890,
        category: 'premium',
        img:'../assets/images/premium/central39000.png',
        stock:8,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    }
]

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
    
}

export const getProductsById = (productId)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },1000)
    })
}