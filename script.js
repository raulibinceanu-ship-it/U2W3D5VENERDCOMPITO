const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlYmY0YmQ0NzAwMTU4NWIxZDMiLCJpYXQiOjE3NjI1MDI4OTEsImV4cCI6MTc2MzcxMjQ5MX0.cDdrkqp7bLCpP1wtQ5BgoJjOVicYxty8mFR0-I09-ug";

function preloadSalumi() {
  const salumi = [
    {
      name: "Prosciutto Crudo di Parma",
      brand: "Parma DOP",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Prosciutto_di_Parma_12_mesi.jpg",
      price: 14,
      description: "Prosciutto dolce stagionato 12 mesi.",
    },
    {
      name: "Salame Milano",
      brand: "Rovagnati",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Salame_milano.jpg",
      price: 8,
      description: "Salame dal gusto morbido e raffinato.",
    },
    {
      name: "Speck Alto Adige",
      brand: "Südtirol",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/South_Tyrolean_Speck.jpg",
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
