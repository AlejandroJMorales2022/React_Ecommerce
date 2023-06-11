<a id=volver><a/>
#### **Proyecto de Ecommerce desarrollado por Alejandro Javier Morales** - com43190

Tecnologías Utilizadas:

- *React JS* (create_react_app) como Framework de JavaScript,

- *React Bootstrap*, *Bootstrap* y *CSS* para la incorporación de estilos y maquetado,

- *Firebase* y sus servicios *Firestore Database*, *Storage* y *Authentication* para almacenamiento de datos, imágenes y administración de usuarios.

  

  INDICE

  1. [Listar Productos](#item1)
  2. [Detalle de Producto](#item2)
  3. [Barra de Búsqueda](#item3)
  4. [Carro de Compras](#item4)
  5. [Carro de Compras Persistente](#item5)
  6. [Orden de Pedido](#item6)
  7. [Autenticación de usuario](#item7)
  8. [Cuenta de usuario](#item8)
  9. [Variables de Entorno](#item9)

  
  

   


<a id=item1><a/>
- **Listar** los **productos** existentes en la base de datos. 
  En el Home trae sólo los primeros 20 encontrados. Desde el menú productos se mostrarán de acuerdo a la categoría de producto seleccionada.
  Las categorías son dinámicas y de agregar más alternativas a la colección de Firestore, aparecerán automáticamente en el menú de opciones.


  ![listado de productos](./public/assets/doc_images/home.jpg)

  

<a id=item2><a/>
- Ver el **Detalle un Producto** seleccionado, y agregarlo al Carrito de Compras, previa selección de la cantidad deseada.

  ![detalle producto](./public/assets/doc_images/detalle_producto.jpg)

  

<a id=item3><a/>
- **Barra de Búsqueda de Productos**. Se puede acceder a la misma desde el Home. Haciendo clic una vez sobre la lupa que aparece a la derecha de la barra de navegación se mostrará y un segundo clic la ocultará. La búsqueda es inmediata  la medida que se tipea dentro de la misma. Borrando lo escrito en dicha barra se vuelven a mostrar los primeros 20 productos del home. 


  ![barra de busqueda](./public/assets/doc_images/barra_de_busqueda.jpg)

  
  

<a id=item4><a/>
- **Carro de Compras**. El mismo está disponible durante toda la experiencia en la barra de navegación de la aplicación, indicando la cantidad de ítems incorporados al mismo. También se puede acceder al mismo desde el botón "ir al carrito" en el detalle del producto.
  El Carro lista los ítems incorporados al mismo y permite las opciones de "Seguir Comprando" que navega al Home para continuar la experiencia de compra, "Borrar Carrito" o "Eliminar Producto" desde el icono a la derecha de cada ítem de la lista.

  ​	Si al mostrar en Carro de Compras el Usuario no ha iniciado sesión, aparecerá una leyenda "Por Favor ingrese sus datos para confirmar su compra..." y un botón que navegara al Login.
  ​	Si por e contrario el Usuario tiene iniciada la sesión, se mostrara la leyenda con el nombre del usuario, y el botón para "Confirmar Compra" que navegará a la Orden de Pedido.


  ![carrito de compras](./public/assets/doc_images/cart1.jpg)

  

<a id=item5><a/>
- **Carro de Compras Persistente**.  En caso que el usuario haya agregado productos al carrito de compras y  cierre la aplicación o finalice sesión sin confirmar la compra, al volver a ingresar, si inicia sesión antes de agregar productos al carrito, se recuperarán todos los ítems cargados en su experiencia anterior. 
  Si inicia sesión luego de haber agregado productos al carrito y confirmar su compra, no se cargarán los datos anteriores, dando prioridad a su compra actual. (Los datos del carrito de  compras quedan almacenados en Local Storage).


  ![session carrito de compras](./public/assets/doc_images/cart.jpg)

  

<a id=item6><a/>
- **Orden de Pedido**. A la misma se llega luego de "Confirmar su Compra" desde el Carro de Compras. Esta mostrará el Número de Orden de Pedido y la identificación generada por Firestore, debajo la identificación del Usuario, el Detalle del Pedido con todos los ítems y el Precio Total correspondiente.
  Debajo se visualizarán los datos completos del Usuario.
  Finalmente el botón "Cerrar Orden" termina el proceso de compra, navegando al Home.


  ![nota de pedido](./public/assets/doc_images/pedido.jpg)

  

<a id=item7><a/>
- **Autenticación de Usuario**. Desde la barra de navegación, al ingresar a la aplicación se visualiza el icono de Usuario indicando que no tiene sesión iniciada. En cualquier momento de la experiencia, el Usuario, podrá hacer clic para acceder al Login correspondiente, o bien, la aplicación lo solicitará antes de confirmar la compra.
  Iniciada la sesión, la misma estará indicada con el icono de la barra de navegación, desde el cual podrá ingresar a su Cuenta.
  Si el usuario no estuviera registrado, desde Login tendrá la posibilidad de "Registrarse", o bien de recuperar su contraseña en caso de haberla olvidado.  


  ![login](./public/assets/doc_images/login.jpg)

  ![registro de usuario](./public/assets/doc_images/registrar.jpg)

  

<a id=item8><a/>
- **Cuenta de usuario**. Una vez iniciada sesión por el usuario, el mismo podrá acceder a su cuenta desde el incono correspondiente en la barra de navegación.
Una vez  en la misma, podrá ver sus *Datos de Perfil*, donde podrá agregar o editar una imagen de perfil y modificar sus datos personales. La otra opción del menú le permitirá acceder al su Historial de Compras Realizadas. Aquí se visualizará el detalle de compras resumido en fecha, número de pedido, monto total de la orden y un icono para navegar al Detalle de cada compra.
Haciendo click en el icono "Ver Detalle" de una compra, visualizara el detalle de la misma. En esta ventana se  mostrará el botón "Volver a Comprar", a traves del cual se cargarán los items de la compra en el carrito y navegará al mismo para poder concretarla.

  

  ![perfil de usuario](./public/assets/doc_images/user_perfil.jpg)
  

  ![mis compras](./public/assets/doc_images/user_compras.jpg)

  ![detalle de compra](./public/assets/doc_images/user_compras_detalle.jpg)




<a id=item9><a/>
### Variables de Entorno

apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
storageBucket: process.env.REACT_APP_FIREBASE_PROJECTID_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_FIREBASE_APP_ID

REACT_APP_FIREBASE_APIKEY=AIzaSyBQhrP7cb2w_qbYb5RxGm_prVeFQqyurpU
REACT_APP_FIREBASE_AUTHDOMAIN=ecommerce-coder-ea8b3.firebaseapp.com
REACT_APP_FIREBASE_PROJECTID=ecommerce-coder-ea8b3
REACT_APP_FIREBASE_PROJECTID_STORAGE_BUCKET=ecommerce-coder-ea8b3.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=641905754485
REACT_APP_FIREBASE_APP_ID=1:641905754485:web:2690dfe538410b91e0533c




- **Importante!**. El proyecto tiene fines exclusivamente educativos.



  [Volver](#volver)

  

  

  

  