"use strict";const collapsableDesign=document.querySelector(".js-collapsable-design"),collapsableFill=document.querySelector(".js-collapsable-fill"),collapsableShare=document.querySelector(".js-collapsable-share"),arrows=document.querySelectorAll(".js-arrow");function collapsable(e){const t=e.target.parentElement.nextElementSibling;collapsableDesign.classList.add("collapsable-hidden"),collapsableFill.classList.add("collapsable-hidden"),collapsableShare.classList.add("collapsable-hidden"),t.classList.remove("collapsable-hidden")}function handlerCollapsable(e){collapsable(e)}for(let e of arrows)e.addEventListener("click",handlerCollapsable);const paletteElement=document.querySelector(".collapsable-design__colors"),cardDataNameColor=document.querySelector(".preview__card-data--name"),cardDataProfColor=document.querySelector(".preview__card-data--jobTitle"),cardDataSocialColor=document.querySelectorAll(".preview__card-socials--items"),cardDataBorderColor=document.querySelector(".preview__card-data"),cardDataPallet=[cardDataNameColor,cardDataProfColor,cardDataBorderColor,cardDataSocialColor],colorsPalette1=["changeNameColor1","changeProfColor1","changeBorderColor1","changeSocialColor1"],colorsPalette2=["changeNameColor2","changeProfColor2","changeBorderColor2","changeSocialColor2"],colorsPalette3=["changeNameColor3","changeProfColor3","changeBorderColor3","changeSocialColor3"];function setColor(e,t,a,l){for(let o=0;o<e.length;o++){let r=e[o];r.length>1?(r.forEach(e=>e.classList.add(t[o])),r.forEach(e=>e.classList.remove(a[o],l[o]))):(e[o].classList.add(t[o]),e[o].classList.remove(a[o],l[o]))}}function changePaletteColor(e){switch(e.target.id){case"palette1":setColor(cardDataPallet,colorsPalette1,colorsPalette2,colorsPalette3);break;case"palette2":setColor(cardDataPallet,colorsPalette2,colorsPalette1,colorsPalette3);break;case"palette3":setColor(cardDataPallet,colorsPalette3,colorsPalette1,colorsPalette2)}}paletteElement.addEventListener("change",changePaletteColor);const form=document.querySelector(".js-data"),nameInput=document.querySelector(".js-nameInput"),previewName=document.querySelector(".js-name"),nameDefault="Nombre y Apellido",jobInput=document.querySelector(".js-job"),previewJob=document.querySelector(".js-jobTitle"),jobDefault="Front-end developer",emailInput=document.querySelector(".js-email"),defaultEmail="mailto:",previewEmail=document.querySelector(".js-buttonEm"),telephoneInput=document.querySelector(".js-telephone"),defaultTelephone="tel:",previewTel=document.querySelector(".js-buttonTel"),linkedInInput=document.querySelector(".js-linkedin"),defaultUrlLinkedin="https://www.linkedin.com/in/",previewLinkedIn=document.querySelector(".js-buttonLink"),githubInput=document.querySelector(".js-github"),defaultUrlGitHub="https://github.com/",previewGit=document.querySelector(".js-buttonGit"),previewImg=document.querySelector(".js__profile-image"),previewMiniImg=document.querySelector(".js__profile-preview"),resetButton=document.querySelector(".js-reset");let data={name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:"",palette:""};function dataForm(e){const t=e.target.name,a=e.target.value;data[t]=a}function previewCard(){previewName.innerHTML=""===data.name?nameDefault:data.name,previewJob.innerHTML=""===data.job?jobDefault:data.job,previewEmail.href=""===data.email?"mailto:":"mailto:"+data.email,previewTel.href=""===data.phone?"tel:":"tel:"+data.phone,previewLinkedIn.href=""===data.linkedin?defaultUrlLinkedin:defaultUrlLinkedin+data.linkedin,previewGit.href=""===data.github?defaultUrlGitHub:defaultUrlGitHub+data.github}function handlerData(e){dataForm(e),previewCard()}form.addEventListener("keyup",handlerData);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function fakeFileClick(){fileField.click()}function setlocalHost(){console.log(data),localStorage.setItem("dataLocal",JSON.stringify(data))}function getLocalStorage(){let e=JSON.parse(localStorage.getItem("dataLocal"));console.log(e),null!=e&&(nameInput.value=e.name,jobInput.value=e.job,emailInput.value=e.email,telephoneInput.value=e.phone,linkedInInput.value=e.linkedin,githubInput.value=e.github,previewImg.value=e.photo)}fileField.addEventListener("change",getImage),form.addEventListener("change",setlocalHost),getLocalStorage();const shareButton=document.querySelector(".js-share-button");function showLinkShare(){document.querySelector(".js-link-share").classList.remove("share-hidden"),shareButton.classList.add("button-share-click")}function resetImg(){previewImg.setAttribute("style","background-image: url('./assets/images/card-pic.jpg')"),previewMiniImg.setAttribute("style","background-image: url()")}function resetForm(){data={name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:""}}function handlerReset(){resetForm(),form.reset(),previewCard(),resetImg(),localStorage.clear("dataLocal")}shareButton.addEventListener("click",showLinkShare),resetButton.addEventListener("click",handlerReset);