console.log("soy el archivo main !!");

fetch("./global/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./global/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

function init() {
  const HEADER__SEARCH = document.getElementById("search__show");
  const CONTAINER__MAIN = document.getElementById("container__main");
  const BTN_SEARCH = document.getElementById("btn__search");

  function showSearch() {
    HEADER__SEARCH.style.display = "block";
    CONTAINER__MAIN.style.background = "rgba(0,0,0,0.8)";
  }

  BTN_SEARCH.onclick = showSearch;

  CONTAINER__MAIN.onclick = function () {
    HEADER__SEARCH.style.display = "none";
    CONTAINER__MAIN.style.background = "";
  };
}

setTimeout(function () {
  init();
}, 1000);
