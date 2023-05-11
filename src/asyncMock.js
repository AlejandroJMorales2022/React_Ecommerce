

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
        description: 'salamandra de alto rendimiento de 27kcal para calefaccionar hasta 140m2'
    },
    {
        id:12,
        name:'Salamandra Central 39000kcal',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/premium/central39000.png',
        stock:8,
        description: 'salamandra de alto rendimiento de 39kcal para calefaccionar hasta 180m2'
    },
    {
        id:13,
        name:'Parrilla Barbacoa',
        price:109200,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_barbacoa.png',
        stock:11,
        description: 'Parrilla modelo Barbacoa móvil – Ideal para disfrutar al aire libre. Las parrillas Lepen están fabricadas con los mejores standares de producción nacional. Parrilla tipo barbacoa para patios, jardines y terrazas. Dimnsiones: Ancho 135cm - Alto 52cm Prof. 42cm'
    },
    {
        id:14,
        name:'Parrilla New WeekEnd',
        price:59690,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_new_weekend.png',
        stock:12,
        description: 'Medidas: Ancho 93cm - Profundidad 49cm Alto 93cm. Parrilla de 63 x 43 cm. Brasero 24 x 41cm (desmontable). Pies de parrilla plegables. Parrilla – Mantera regulable en diferentes alturas. Piso reforzado y con ladrillos refractarios.'
    },
    {
        id:15,
        name:'Parrilla Fast Food',
        price:81200,
        category: 'Gourmet',
        img:'/assets/images/parrillas/parrilla_fast_food.png',
        stock:14,
        description: 'Tus mejores asados en mucho menos tiempo. Super fácil de usar. Incluye ruedas. Pies desmontables para su traslado.  Medidas: Alto 104cm - Ancho 93cm - Profundidad 49cm. Parrilla 68cm x 48cm. Bracero 24cm x 48cm. DE REGALO!!! Atizador premium.'
    },
    {
        id:16,
        name:'Fogonero Circular 80cm',
        price:71090,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/fogonero_circular_80cm.png',
        stock:15,
        description: 'Medidas: Alto 40cm - Diámetro: 80cm. Incluye mantera, parrilla y plancha bifera. Todos sus accesorios son desmontables. No apto para grandes fogatas, producto de uso gourmet.'
    },
    {
        id:17,
        name:'Fogonero Parrillero Premium',
        price:124290,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/fogonero_parrillero_premium.png',
        stock:10,
        description: 'Medidas: Ancho 1.10cm. 2 Parrillas. 1 Plancha Bifera. 1 Mantera para lechon – cordero. 1 brasero. Todos los accesorios regulables en altura en tres distintas posiciones. Materiales: acero industrial 5mm. De regalo!! pala de 89 cm de largo. No apto para grandes fogatas, producto de uso gourmet.'
    },
    {
        id:18,
        name:'Good Meat',
        price:57490,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/good_meat.jpg',
        stock:10,
        description: 'Medidas: Alto 77cm - Diámetro 60cm - Incluye parrilla circular. Todos sus accesorios son desmontables. No apto para grandes fogatas, producto de uso gourmet.'
    },
    {
        id:19,
        name:'Good Meat con Plancha Disco y Parrilla',
        price:69880,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/good_meat_con_plancha.jpg',
        stock:10,
        description: 'Medidas: Alto 81cm - Diámetro: 60cm - Incluye parrilla circular y plancha bifera circular. Todos sus accesorios son desmontables. No apto para grandes fogatas, producto de uso gourmet.'
    },
    {
        id:20,
        name:'Wordl Champions',
        price:57490,
        category: 'Gourmet',
        img:'/assets/images/fogoneros/wordl_champions.png',
        stock:10,
        description: 'Medidas: Alto 81cm - Diámetro 60cm. Incluye parrilla circular. Sus accesorios son desmontables. No apto para grandes fogatas, producto de uso gourmet.'
    },
    {
        id:21,
        name:'Horno Pizzero',
        price:21490,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/horno-pizzero-general.jpg',
        stock:10,
        description: 'Horno izzero, con indicador de temperatura - Dimnsiones: 37 x 32 x 12cm'
    },
    {
        id:22,
        name:'Puerta para Horno de Barro',
        price:23990,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/puerta_horno_de_barro.png',
        stock:12,
        description: 'Puerta para Horno de Barro. Vitroceramico resistente hasta 900°, Pirómetro, Control de entrada de oxígeno, Cenicero. Medidas: Ancho: 50cm Alto: 30cm. Vidrio: 18 cm x 9 cm'
    },
    {
        id:23,
        name:'Mantera Reforzada',
        price:21990,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/mantera-reforzada.png',
        stock:12,
        description: 'Mantera Giratoria y Regulable en 5 posiciones. Alto Máximo: 110cm (64cm mínimo) - Ancho: 48.5cm'
    },
    {
        id:24,
        name:'Plancha Bifera con Doble Tapa',
        price:9390,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/plancha-con-tapa-abierta.png',
        stock:12,
        description: 'Plancha Bifera con doble tapa. Medidas: Ancho 31cm - Alto 2.5cm - Largo 50cm'
    },
    {
        id:25,
        name:'Plancha Bifera Provoleta',
        price:5750,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/provoletera-bifera.jpg',
        stock:12,
        description: 'Plancha Bifera Provoletera si tapa. Medidas: Ancho 6.5cm - Largo 26.5cm'
    },
    {
        id:26,
        name:'Plancha Bifera',
        price:5750,
        category: 'Gourmet',
        img:'/assets/images/accesorios/gourmet/plancheta.png',
        stock:12,
        description: 'Plancha Bifera si tapa. Medidas: Ancho 31cm - Largo 47cm - Alto 5cm'
    },
    {
        id:27,
        name:'Round 7000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/round7000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:28,
        name:'Premium 12000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium12000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:29,
        name:'Premium 17000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium17000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:30,
        name:'Premium 27000 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/premium27000h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:31,
        name:'Cassette Nro4 con Horno',
        price:216890,
        category: 'Calefaccion',
        img:'/assets/images/con_horno/cassette_n4h.png',
        stock:10,
        description: 'salamandra de alto rendimiento de 39kcla para calefaccionar hasta 180m2'
    },
    {
        id:32,
        name:'Kit Encamisado Acero Inoxidable',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_encamisado_acero.png',
        stock:30,
        description: 'Kit Encamisado para techo con Tapacielo de Acero Inoxidable. - Caño Galvanizado 8", Reduccion de 8" a 6" Tapacielo de Acero Inoxidable 6" - '
    },
    {
        id:33,
        name:'Kit Acero Inoxidable 6" (de pared)',
        price:30750,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit-acero-inox.png',
        stock:30,
        description: 'Kit Acero Inoxidable de 6" para pared - Incluye: Tres Caños, Dos Curvas, Un Sombrero pintado'
    },
    {
        id:34,
        name:'Kit Enlozado 6" (de pared)',
        price:29030,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_enlozado.png',
        stock:30,
        description: 'Kit Enlozado de 6" para pared - Incluye: Tres Caños Enlozados, Dos Curvas Enlozadas, Un Sombrero pintado'
    },
    {
        id:35,
        name:'Kit Galvanizado 6" (de pared)',
        price:18770,
        category: 'Accesorios',
        img:'/assets/images/accesorios/kit_galvanizado.png',
        stock:30,
        description: 'Kit Galvanizado de 6" para pared - Incluye: Tres Caños, Dos Curvas, Un Sombrero pintado'
    },
    {
        id:36,
        name:'Caño Enlozado Doble 6"',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/canio_enlozado_doble.png',
        stock:14,
        description: 'Caño de Enlozado 6 pulgadas - Calibre 25 - Un metro de largo'
    },
    {
        id:37,
        name:'Caño Galvanizado 6"',
        price:216890,
        category: 'Accesorios',
        img:'/assets/images/accesorios/canio-galvanizado.png',
        stock:14,
        description: 'Caño Galvanizado 6 pulgadas - Calibre 25 - Un metro de largo'
    },
    {
        id:38,
        name:'Curva Acero Inoxidable 6"',
        price:2930,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_acero_inoxidable.png',
        stock:14,
        description: 'Curva de Acero Inoxidable de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:39,
        name:'Curva Enlozada 6"',
        price:2930,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_enlozada.png',
        stock:14,
        description: 'Curva Enlozada de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:40,
        name:'Curva Galvanizada 6"',
        price:1490,
        category: 'Accesorios',
        img:'/assets/images/accesorios/curva_galvanizada.png',
        stock:14,
        description: 'Curva EGalvanizada de 6" - Calibre 25 - Dimensiones 30 x 15 x 20cm'
    },
    {
        id:41,
        name:'Sombrero Acero Inoxidable 6"',
        price:6280,
        category: 'Accesorios',
        img:'/assets/images/accesorios/sombrero_acero.png',
        stock:14,
        description: 'Sombrero de Acero Inoxidable de 6" - Dimensiones 30 x 30 x 30cm'
    },
    {
        id:42,
        name:'Sombrero Enlozado 6"',
        price:6280,
        category: 'Accesorios',
        img:'/assets/images/accesorios/sombrero_enlozado.png',
        stock:14,
        description: 'Sombrero Enlozado de 6" - Dimensiones 30 x 30 x 30cm'
    },
    {
        id:43,
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