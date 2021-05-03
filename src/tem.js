const x = document.getElementsByClassName("hestia-title");
const img = document.createElement("img");
const div = document.createElement("div");
img.src =
  "https://inholding.eu/wp-content/uploads/2021/05/cropped-cropped-Bildschirmfoto_2021-05-02_um_21.48.49-removebg-preview.png";
x[0].innerHTML = "";
div.appendChild(img);
div.style = { background: "white" };
x[0].appendChild(div);

div.classList.add("logo-background");
