import{a as S,S as b,i as n}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const E="50706028-1c89dce29f588a1d4e8ec62d3",P="https://pixabay.com/api/";function y(t,r=1,o=15){const i={key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:r};return S.get(P,{params:i}).then(e=>e.data).catch(e=>{throw console.error("Error loading images:",e.message||e),e})}const v=document.querySelector(".gallery");function q(){v.innerHTML=""}function w(t){v.insertAdjacentHTML("beforeend",t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:L})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${r}" alt="${i}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${s}</p>
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
    `).join(""))}function u(t){t.classList.remove("hidden")}function g(t){t.classList.add("hidden")}const p=document.querySelector(".form"),d=document.querySelector(".load-more"),f=document.querySelector(".loader");let h=1,$="",m=0,l=0;const I=15;let O=new b(".gallery a",{captionsData:"alt",captionDelay:250});function c(t){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${t}`,color:"#EF4040",maxWidth:"432px"}}p.addEventListener("submit",async t=>{t.preventDefault(),console.error("submit");const r=p.elements.query.value.trim();if(p.reset(),!r){n.show(c("Please enter a search query!"));return}q(),u(f),h=1,l=0;try{console.error("Submit:",r);const o=await y(r,h,I);if(console.error("RES:",o.hits||error),m=o.totalHits,console.error("totalImages: ",m),!o.hits.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}l+=o.hits.length,w(o.hits),O.refresh(),l<m&&u(d)}catch(o){console.error("SubmitError: ",o.message),n.show(c("Something went wrong. Please try again later."))}finally{g(f)}});d.addEventListener("click",async()=>{h+=1,g(d),u(f);try{const t=await y($,h);l+=t.length,w(t);const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),l>=m?n.show(c("We're sorry, but you've reached the end of search results.")):u(d)}catch(t){console.error("Failed to load more images: ",t.message),n.show(c("Failed to load more images."))}finally{g(f)}});
//# sourceMappingURL=index.js.map
