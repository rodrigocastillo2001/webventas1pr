const params = new URLSearchParams(window.location.search);
const categoria = params.get("categorie");
const products = [
    {
        id: 1,
        nombre: "Peugeot 106 Verde",
        precio: 5000,
        categoria: "Autos",
        descripcion: "Auto compacto en buen estado",
        img: "https://thumbs.dreamstime.com/z/antiguo-peque%C3%B1o-y-verde-coche-supermini-peugeot-tres-puertas-elegante-metal-bien-conservado-super-mini-auto-hatchback-versi%C3%B3n-249060954.jpg?ct=jpeg"
        
    },
    
    {
        id: 2,
        nombre: "Renault Kwid",
        precio: 1000,
        categoria: "Autos",
        descripcion: "Auto compacto en buen estado",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtx7zG-SAkUc7-AsW1a_oIyOp6k6V_hwM6SEMOrkS-rg7P9E0JhJRhmC49biHSpPM0S8rDY_mmNPzVyi4z8UZCzOeZFSWDWBZgB5pZOdHfpZV7u7Y5nmtijL8u9B1u0wK3UkzEvzDUg-8c0ztN1Pwz_TICDJAXKE5l4Acyk4wJeKWULfAha_n60iyA/s1801/Lanzamiento:%20Renault%20Kwid%20MY2022%20Autoblog%20Uruguay%20Precios%200km%2020222.jpg"
        
    },
    {
        id: 3,
        nombre: "1969 Ford Mustang",
        precio: 10000,
        categoria: "Autos",
        descripcion: "Auto potente",
        img: "https://cdn.dealeraccelerate.com/noreserve/1/627/16007/1920x1440/1969-ford-mustang.webp"
        
    }
];

let filtrados;

if (categoria) {
  filtrados = products.filter(p => p.categoria === categoria);
} else {
  filtrados = products;
}   

const container = document.querySelector(".container");

products.forEach(producto =>{
    container.innerHTML += `
    <div class="card">
    <img src="${producto.img}">
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio}</p>
    </div>
  `;  
});