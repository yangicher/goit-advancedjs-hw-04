import{S as m,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50706028-1c89dce29f588a1d4e8ec62d3",h="https://pixabay.com/api/";function g(i){const o={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return axios.get(h,{params:o}).then(t=>{const{hits:s}=t.data;if(s.length===0)throw new Error("No images found");return s}).catch(t=>{throw console.error("Error loading images:",t.message||t),t})}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(){d.innerHTML=""}function v(i){d.innerHTML=i.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:a,downloads:f})=>`
      <li class="gallery-item">
        <a href="${t}">
          <img src="${o}" alt="${s}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${r}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${f}</p>
          </div>
        </div>
      </li>
    `).join("")}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const l=document.querySelector(".form");let q=new m(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${i}`,color:"#EF4040",maxWidth:"432px"}}l.addEventListener("submit",async i=>{i.preventDefault();const o=l.elements.query.value.trim();if(l.reset(),!o){n.show(c("Please enter a search query!"));return}y(),L();try{const t=await g(o);if(!t.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}v(t),q.refresh()}catch{n.show(c("Something went wrong. Please try again later."))}finally{w()}});
//# sourceMappingURL=index.js.map
