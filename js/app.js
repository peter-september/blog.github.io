const container = document.querySelector(".container");
const coffees = [
  {
    name: "Blog1",
    image: "images/blog1.png"
  },
  {
    name: "Blog2",
    image: "images/blog2.png"
  },
  {
    name: "Blog3",
    image: "images/blog3.png"
  },
  {
    name: "Blog4",
    image: "images/blog4.png"
  },
  {
    name: " Blog5",
    image: "images/blog5.png"
  },
  {
    name:  "Blog6",
    image: "images/blog6.png"
  },
  {
    name: "Blog7",
    image: "images/blog7.png"
  },
  {
    name: "Blog8",
    image: "images/blog8.png"
  },
  {
    name: "Blog9",
    image: "images/blog9.png"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Blog Page</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}