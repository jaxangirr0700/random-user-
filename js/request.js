// const { rejects } = require("assert");

// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

//
const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};
/////
const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      // console.log(request);
      if (request.readyState < 4) {
        loaderToggle(true);
        console.log("Loading");
      } else if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        // console.log(request.statusText);
        resolve(data.results);
        loaderToggle(false);
      } else if (request.request == 4) {
        loaderToggle(false);
        reject("Error !!!");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
// getData(API);
const reload = () => {
  getData(API)
  .then((data)=>{
    updateUI(data);
    
  }).catch((err)=>{
    console.log(err);
    
  })
};
document.addEventListener('DOMContentLoaded',reload())