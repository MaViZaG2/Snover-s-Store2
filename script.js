let productos = [];

// Agregamos productos con push
productos.push(
  {
    nombre: "Peluche de Mimikyu",
    categoria: "figura",
    precio: 120,
    descripcion: "Peluche de Mimikyu de 15cm de alto",
    imagen: "https://i.postimg.cc/ZnTy4KbM/IMG-20250831-WA0206.jpg"
  },
  {
    nombre: "Monedero de rana",
    categoria: "ropa",
    precio: 18,
    descripcion: "Monedero de rana del anime Naruto y Naruto Shippuden",
    imagen: "https://i.postimg.cc/zv5TvFjp/IMG-20250826-WA0124.jpg"
  },
  {
    nombre: "Billetera de Un Show Más",
    categoria: "ropa",
    precio: 30,
    descripcion: "Billetera grande de la serie animada Un Show Más",
    imagen: "https://i.postimg.cc/zv5TvFjp/IMG-20250826-WA0124.jpg"
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
