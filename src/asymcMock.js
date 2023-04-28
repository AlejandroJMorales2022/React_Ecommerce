

const products = [
    {
        id:1,
        name:'salamandra 14000kcal',
        price:14000,
        category: 'premium',
        img:'../premium14000.png',
        stock:12,
        descripcion: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:2,
        name:'salamandra 18000kcal',
        price:32000,
        category: 'premium',
        img:'./components/assets/images/premium/campana27000.png',
        stock:20,
        descripcion: 'salamandra de alto rendimiento de 18kcal para calefaccionar hasta 100m2'
    },
    {
        id:3,
        name:'salamandra 23000kcal',
        price:56000,
        category: 'premium',
        img:'./assets/images/premiun/premium11000.png',
        stock:8,
        descripcion: 'salamandra de alto rendimiento de 23kcla para calefaccionar hasta 140m2'
    }
]

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
    
}