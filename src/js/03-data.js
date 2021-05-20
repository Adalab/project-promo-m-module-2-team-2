/* eslint-disable no-console */
/* eslint-disable strict */
//formulario
const form = document.querySelector(".js-data");

//nombre
const nameInput = document.querySelector(".js-nameInput");
const previewName = document.querySelector(".js-name");
const nameDefault = "Nombre y Apellido";

//cargo
const jobInput = document.querySelector(".js-job");
const previewJob = document.querySelector(".js-jobTitle");
const jobDefault = "Front-end developer";

//email
const emailInput = document.querySelector(".js-email");
const defaultEmail = "mailto:";
const previewEmail = document.querySelector(".js-buttonEm");

//teléfono
const telephoneInput = document.querySelector(".js-telephone");
const defaultTelephone = "tel:";
const previewTel = document.querySelector(".js-buttonTel");

//linkedin
const linkedInInput = document.querySelector(".js-linkedin");
const defaultUrlLinkedin = "https://www.linkedin.com/in/";
const previewLinkedIn = document.querySelector(".js-buttonLink");

//github
const githubInput = document.querySelector(".js-github");
const defaultUrlGitHub = "https://github.com/";
const previewGit = document.querySelector(".js-buttonGit");

//photoCard
const previewImg = document.querySelector(".js__profile-image");

//photoMini
const previewMiniImg = document.querySelector(".js__profile-preview");

//reset
const resetButton = document.querySelector(".js-reset");

//objeto
let data = {
  palette: "1",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "url('../images/card-pic.jpg')",
};

//funciones
function dataForm(ev) {
  const inputAttribute = ev.target.name;
  const userValue = ev.target.value;
  data[inputAttribute] = userValue;
}

function previewCard() {
  previewName.innerHTML = data.name === "" ? nameDefault : data.name;
  previewJob.innerHTML = data.job === "" ? jobDefault : data.job;
  previewEmail.href =
    data.email === "" ? defaultEmail : defaultEmail + data.email;
  previewTel.href =
    data.phone === "" ? defaultTelephone : defaultTelephone + data.phone;
  previewLinkedIn.href =
    data.linkedin === ""
      ? defaultUrlLinkedin
      : defaultUrlLinkedin + data.linkedin;
  previewGit.href =
    data.github === "" ? defaultUrlGitHub : defaultUrlGitHub + data.github;
}

function imagePreview() {
  previewImg.setAttribute(
    "style",
    "background-image: url('./assets/images/card-pic.jpg')"
  );
}

function handlerData(ev) {
  dataForm(ev);
  previewCard();
  setlocalHost();
}

//eventos
form.addEventListener("keyup", handlerData);
imagePreview();
