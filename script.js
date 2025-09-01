let productos = [];

// Agregamos productos con push
productos.push(
  {
    nombre: "Figura de Goku SSJ",
    categoria: "figura",
    precio: 120,
    descripcion: "Figura detallada de Goku en Super Saiyajin. ¡Nivel de poder over 9000!",
    imagen: "https://postimg.cc/S2NXrV1h"
  },
  {
    nombre: "Monedero de rana",
    categoria: "ropa",
    precio: 18,
    descripcion: "Monedero de rana del anime Naruto y Naruto Shippuden",
    imagen: "https://mavizag2.github.io/Snover-s-Store/fotosxd/monedero_rana"
  },
  {
    nombre: "Collar de Inuyasha",
    categoria: "accesorio",
    precio: 45,
    descripcion: "Collar perla espiritual como el de Inuyasha. ¡Kawaii y con estilo retro anime!",
    imagen: "https://i.imgur.com/x8h2D8g.jpeg"
    
  },
  {
    nombre: "Peluche de mimikyu",
    categoria: "peluche",
    precio: 20,
    descripcion: "Figura detallada de Goku en Super Saiyajin. ¡Nivel de poder over 9000!",
    imagen: "https://i.imgur.com/nZ1Qh1o.jpeg"
  },
    {
    nombre: "polo de naruto",
    categoria: "figura",
    precio: 120,
    descripcion: "Figura detallada de Goku en Super Saiyajin. ¡Nivel de poder over 9000!",
    imagen: "https://i.imgur.com/nZ1Qh1o.jpeg"
  },
);

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  lista.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="card" onclick="mostrarDetalle(${index})">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>S/ ${p.precio}</p>
      </div>
    `;
  });
}

function filtrarProductos(categoria) {
  if (categoria === "todos") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);
  }
}

function mostrarDetalle(index) {
  const p = productos[index];
  const detalle = document.getElementById("detalle");
  detalle.innerHTML = `
    <div class="detalle-content">
      <img src="${p.imagen}" alt="${p.nombre}">
      <h2>${p.nombre}</h2>
      <p><strong>Precio:</strong> S/ ${p.precio}</p>
      <p>${p.descripcion}</p>
      <button onclick="cerrarDetalle()">Cerrar</button>
    </div>
  `;
  detalle.style.display = "flex";
}

function cerrarDetalle() {
  document.getElementById("detalle").style.display = "none";
}

// Mostrar todos los productos al cargar
mostrarProductos(productos);
