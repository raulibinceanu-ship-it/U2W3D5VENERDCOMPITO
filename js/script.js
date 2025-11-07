const API_URL = "https://striveschool-api.herokuapp.com/api/product/";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlYmY0YmQ0NzAwMTU4NWIxZDMiLCJpYXQiOjE3NjI1MDI4OTEsImV4cCI6MTc2MzcxMjQ5MX0.cDdrkqp7bLCpP1wtQ5BgoJjOVicYxty8mFR0-I09-ug";

function preloadSalumi() {
  const salumi = [
    {
      name: "Prosciutto Crudo di Parma",
      brand: "Parma DOP",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.salsamenteriadiparma.com%2Fprosciutto-parma-storia%2F&psig=AOvVaw3B3_iJs22ZvO7cqQo8Er0W&ust=1762615424080000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjWiaSs4JADFQAAAAAdAAAAABAE",
      price: 14,
      description: "Prosciutto dolce stagionato 12 mesi.",
    },
    {
      name: "Salame Milano",
      brand: "Rovagnati",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lacucinaitaliana.it%2Fstorie%2Fpiatti-tipici%2Fla-vera-storia-del-salame-di-milano%2F&psig=AOvVaw0JJKSnBsb3pEalr4RlEzfE&ust=1762615460647000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjCyrWs4JADFQAAAAAdAAAAABAE",
      price: 8,
      description: "Salame dal gusto morbido e raffinato.",
    },
    {
      name: "Speck Alto Adige",
      brand: "Südtirol",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.speck.it%2Fit%2F&psig=AOvVaw1XhdueZQIwNABYctHxGsYz&ust=1762615500488000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCp58ms4JADFQAAAAAdAAAAABAE",
      price: 12,
      description: "Speck affumicato tipico delle Dolomiti.",
    },
  ];

  salumi.forEach((p) => {
    fetch(API_URL, {
      method: "POST",
      headers: { Authorization: TOKEN, "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
  });
}

//Hompage list
function getProducts() {
  fetch(API_URL, { headers: { Authorization: TOKEN } })
    .then((res) => res.json())
    .then((products) => {
      const list = document.getElementById("product-list");
      list.innerHTML = "";
      products.forEach((p) => {
        list.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="${p.imageUrl}" class="card-img-top">
          <div class="card-body">
            <h5>${p.name}</h5>
            <p>${p.brand}</p>
            <p class="text-danger fw-bold">${p.price}€</p>
            <a href="detail.html?id=${p._id}" class="btn btn-primary btn-sm">Scopri di più</a>
            <a href="backoffice.html?id=${p._id}" class="btn btn-warning btn-sm">Modifica</a>
          </div>
        </div>
      </div>`;
      });
    });
}

// BACKOFFICE
function preloadSalumi() {
  const salumi = [
    {
      name: "Prosciutto Crudo di Parma",
      brand: "Parma DOP",
      imageUrl:
        "https://www.salumipasini.com/wp-content/uploads/2020/11/prosciutto-crudo-di-parma-dop_02.jpg",
      price: 14,
      description: "Prosciutto dolce stagionato 12 mesi.",
    },
    {
      name: "Salame Milano",
      brand: "Rovagnati",
      imageUrl:
        "https://www.salumipasini.com/wp-content/uploads/2020/07/salame-milano_03.jpg",
      price: 8,
      description: "Salame dal gusto morbido e raffinato.",
    },
    {
      name: "Speck Alto Adige",
      brand: "Südtirol",
      imageUrl:
        "https://www.salumipasini.com/wp-content/uploads/2020/07/speck-kg_03.jpg",
      price: 12,
      description: "Speck affumicato delle Dolomiti.",
    },
  ];

  salumi.forEach((p) => {
    fetch(API_URL, {
      method: "POST",
      headers: { Authorization: TOKEN, "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
  });
}

// DETTAGLIO
function showDetail() {
  const id = new URLSearchParams(location.search).get("id");

  fetch(API_URL + id, { headers: { Authorization: TOKEN } })
    .then((res) => res.json())
    .then((p) => {
      document.getElementById("detail").innerHTML = `
    <div class="card mx-auto" style="max-width:600px;">
      <img src="${p.imageUrl}" class="card-img-top">
      <div class="card-body">
        <h2>${p.name}</h2>
        <h4>${p.brand}</h4>
        <p>${p.description}</p>
        <p class="text-danger fs-3">${p.price}€</p>
        <a href="index.html" class="btn btn-dark">⬅ Torna indietro</a>
      </div>
    </div>`;
    });
}
