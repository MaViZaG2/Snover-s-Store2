let productos = [];

// Agregamos productos con push
productos.push(
  {
    nombre: "Peluche de Mimikyu",
    categoria: "peluche",
    precio: 20,
    descripcion: "Peluche de Mimikyu de 15cm de alto",
    imagen: "https://i.postimg.cc/ZnTy4KbM/IMG-20250831-WA0206.jpg"
  },
  {
    nombre: "Monedero de rana",
    categoria: "accesorio",
    precio: 18,
    descripcion: "Monedero de rana del anime Naruto y Naruto Shippuden",
    imagen: "https://i.postimg.cc/zv5TvFjp/IMG-20250826-WA0124.jpg"
  },
  {
    nombre: "Billetera de Un Show Más",
    categoria: "accesorio",
    precio: 30,
    descripcion: "Billetera grande de la serie animada Un Show Más",
    imagen: "https://i.postimg.cc/gkqy1jp8/Billetera-un-show-mas.jpg"
  },
  {
    nombre: "Armable de Riolu",
    categoria: "juguete",
    precio: 30,
    descripcion: "Juguete de armable del Pokémon bebé Riolu",
    imagen: "https://i.postimg.cc/j5yzRFzL/Imagen-de-Whats-App-2025-08-31-a-las-19-11-21-42541eec.jpg"
  },
  {
    nombre: "Armable de eevee",
    categoria: "juguete",
    precio: 30,
    descripcion: "Juguete de armable del Pokémon evolución eevee",
    imagen: "https://i.postimg.cc/7PMgcjHR/IMG-20250830-WA0455.jpg"
  },
  {
    nombre: "Armable de Sprigatito",
    categoria: "juguete",
    precio: 30,
    descripcion: "Juguete de armable del Pokémon inicial tipo plante de Palde Sprigatito",
    imagen: "https://i.postimg.cc/Qx8prSVd/IMG-20250830-WA0456.jpg"
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
