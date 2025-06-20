import{S as P,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q="50706028-1c89dce29f588a1d4e8ec62d3",E="https://pixabay.com/api/";function y(t,o=1,s=15){const i={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o};return axios.get(E,{params:i}).then(e=>{const{hits:r}=e.data;if(r.length===0)throw new Error("No images found");return r}).catch(e=>{throw console.error("Error loading images:",e.message||e),e})}const v=document.querySelector(".gallery");function S(){v.innerHTML=""}function w(t){v.insertAdjacentHTML("beforeend",t.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:L})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${i}" loading="lazy" />
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
            <p>${L}</p>
          </div>
        </div>
      </li>
    `).join(""))}function u(t){t.classList.remove("hidden")}function p(t){t.classList.add("hidden")}const h=document.querySelector(".form"),d=document.querySelector(".load-more"),m=document.querySelector(".loader");let f=1,b="",g=0,l=0;const $=15;let O=new P(".gallery a",{captionsData:"alt",captionDelay:250});function c(t){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${t}`,color:"#EF4040",maxWidth:"432px"}}h.addEventListener("submit",async t=>{t.preventDefault();const o=h.elements.query.value.trim();if(h.reset(),!o){n.show(c("Please enter a search query!"));return}S(),u(m),f=1,l=0;try{const s=await y(o,f,$);if(g=s.length,!s.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}l+=s.length,w(s),O.refresh(),l<g&&u(d)}catch{n.show(c("Something went wrong. Please try again later."))}finally{p(m)}});d.addEventListener("click",async()=>{f+=1,p(d),u(m);try{const t=await y(b,f);l+=t.length,w(t);const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),l>=g?n.show(c("We're sorry, but you've reached the end of search results.")):u(d)}catch{n.show(c("Failed to load more images."))}finally{p(m)}});
//# sourceMappingURL=index.js.map
