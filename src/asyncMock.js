

const products = [
    {
        id:1,
        name:'Salamandra Round 7000kcal',
        price:47490,
        category: 'pipo',
        img:'/assets/images/premium/round7000.png',
        stock:9,
        description: 'salamandra de alto rendimiento de 7kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión.'
    
    },
    {
        id:2,
        name:'Salamandra Premium 7000kcal',
        price:79190,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium7000.png',
        stock:19,
        description: 'salamandra de alto rendimiento de 7kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión.'
    
    },
    {
        id:3,
        name:'Salamandra Moquehue 8000kcal',
        price:51390,
        category: 'Calefaccion',
        img:'/assets/images/premium/moquehue8000.jpg',
        stock:30,
        description: 'salamandra de alto rendimiento de 8kcal para calefaccionar hasta 50m2. Doble cámara y doble combustión. (Ecológico y seguro)'
    
    },
    {
        id:4,
        name:'Salamandra Premium 11000kcal',
        price:94990,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium11000.png',
        stock:30,
        description: 'salamandra de alto rendimiento de 11kcal para calefaccionar hasta 70m2. Doble cámara y doble combustión. (Ecológico y seguro)'
    
    },
    {
        id:5,
        name:'Salamandra Moquehue 13500kcal',
        price:81190,
        category: 'Calefaccion',
        img:'/assets/images/premium/moquehue13500.png',
        stock:12,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:6,
        name:'Salamandra Premium 14000kcal Alta',
        price:121990,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium14000.png',
        stock:12,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:7,
        name:'Salamandra Premium 14000kcal Baja',
        price:121990,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium14000baja.png',
        stock:18,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:8,
        name:'Salamandra Premium 14000kcal con Base',
        price:129690,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium_con_base14000.png',
        stock:15,
        description: 'salamandra de alto rendimiento de 14kcal para calefaccionar hasta 70m2'
    },
    {
        id:9,
        name:'Salamandra Premium 27000kcal',
        price:192990,
        category: 'Calefaccion',
        img:'/assets/images/premium/premium27000.png',
        stock:20,
        description: 'salamandra de alto rendimiento de 27kcal para calefaccionar hasta 140m2'
    },
    {
        id:10,
        name:'Salamandra Campana 27000kcal',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/premium/campana27000.jpg',
        stock:20,
        description: 'salamandra de alto rendimiento de 27kcal para calefaccionar hasta 140m2'
    },
    {
        id:11,
        name:'Salamandra Campana Doble Puerta 27000kcal',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/premium/campana27000.jpg',
        stock:8,
        description: 'salamandra de alto rendimiento de 27kcla para calefaccionar hasta 140m2'
    },
    {
        id:12,
        name:'Salamandra Central 39000kcal',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/premium/central39000.png',
        stock:8,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:13,
        name:'Parrilla Barbacoa',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_barbacoa.png',
        stock:11,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:14,
        name:'Parrilla New WeekEnd',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_new_weekend.png',
        stock:12,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:15,
        name:'Parrilla Fast Food',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_fast_food.png',
        stock:14,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:16,
        name:'Fogonero Circular 80cm',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/fogonero_circular_80cm.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:17,
        name:'Fogonero Parrillero Premium',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/fogonero_parrillero_premium.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:18,
        name:'Good Meat',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/good_meat.jpg',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:19,
        name:'Good Meat con Plancha',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/good_meat_con_plancha.jpg',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:20,
        name:'Wordl Champions',
        price:216890,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/wordl_champions.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:21,
        name:'Round 7000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/round7000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:22,
        name:'Premium 12000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium12000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:23,
        name:'Premium 17000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium17000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:24,
        name:'Premium 27000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium27000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:25,
        name:'Cassette Nro4 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/cassette_n4h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:26,
        name:'Kit Encamisado Acero Inoxidable',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_encamisado_acero.png',
        stock:30,
        description: 'Kit Encamisado para techo con Tapacielo de Acero Inoxidable. - Caño Galvanizado 8", Reduccion de 8" a 6" Tapacielo de Acero Inoxidable 6" - '
    },
    {
        id:27,
        name:'Kit Acero Inoxidable 6" (de pared)',
        price:30750,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit-acero-inox.png',
        stock:30,
        description: 'Kit Acero Inoxidable de 6" para pared - Incluye: Tres Caños, Dos Curvas, Un Sombrero pintado'
    },
    {
        id:28,
        name:'Kit Enlozado 6" (de pared)',
        price:29030,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_enlozado.png',
        stock:30,
        description: 'Kit Enlozado de 6" para pared - Incluye: Tres Caños Enlozados, Dos Curvas Enlozadas, Un Sombrero pintado'
    },
    {
        id:29,
        name:'Kit Galvanizado 6" (de pared)',
        price:18770,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_galvanizado.png',
        stock:30,
        description: 'Kit Galvanizado de 6" para pared - Incluye: Tres Caños, Dos Curvas, Un Sombrero pintado'
    },
    {
        id:30,
        name:'Caño Enlozado Doble 6"',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/canio_enlozado_doble.png',
        stock:14,
        description: 'Caño de Enlozado 6 pulgadas - Calibre 25 - Un metro de largo'
    },
    {
        id:31,
        name:'Caño Galvanizado 6"',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/canio-galvanizado.png',
        stock:14,
        description: 'Caño Galvanizado 6 pulgadas - Calibre 25 - Un metro de largo'
    },
    {
        id:32,
        name:'Curva Acero Inoxidable 6"',
        price:2930,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_acero_inoxidable.png',
        stock:14,
        description: 'Curva de Acero Inoxidable de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:33,
        name:'Curva Enlozada 6"',
        price:2930,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_enlozada.png',
        stock:14,
        description: 'Curva Enlozada de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:34,
        name:'Curva Galvanizada 6"',
        price:1490,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_galvanizada.png',
        stock:14,
        description: 'Curva EGalvanizada de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:35,
        name:'Sombrero Acero Inoxidable 6"',
        price:6280,
        category: 'Accesorios',
        img:'/assets/images/accesorios/sombrero_acero.png',
        stock:14,
        description: 'Sombrero de Acero Inoxidable de 6" - Dimensiones 30 x 30 x 30cm'
    },
    {
        id:36,
        name:'Sombrero Enlozado 6"',
        price:6280,
        category: 'Accesorios',
        img:'/assets/images/accesorios/sombrero_enlozado.png',
        stock:14,
        description: 'Sombrero Enlozado de 6" - Dimensiones 30 x 30 x 30cm'
    },
    {
        id:37,
        name:'Sombrero Galvanizado 6"',
        price:6280,
        category: 'Accesorios',
        img:'/assets/images/accesorios/sombrero_galvanizado.png',
        stock:14,
        description: 'Sombrero Galvanizado de 6" - Dimensiones 30 x 30 x 30cm'
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

export const getProductsByCategory = (category)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
           
            resolve(products.filter(prod => prod.category === category))
            
        },1000)
    })
    
}