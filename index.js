import{a as S,S as b,i as l}from"./assets/vendor-C9vNCoLC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q="50706028-1c89dce29f588a1d4e8ec62d3",E="https://pixabay.com/api/";async function w(t,o=1,s=15){const a={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o};try{const r=(await S.get(E,{params:a})).data;if(r.hits.length===0)throw new Error("No images found");return r}catch(e){throw e}}const v=document.querySelector(".gallery");function $(){v.innerHTML=""}function L(t){v.insertAdjacentHTML("beforeend",t.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:P})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${a}" loading="lazy" />
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
            <p>${n}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${P}</p>
          </div>
        </div>
      </li>
    `).join(""))}function c(t){t.classList.remove("hidden")}function f(t){t.classList.add("hidden")}const p=document.querySelector(".form"),i=document.querySelector(".load-more"),h=document.querySelector(".loader");let d=1,g="",y=0,u=0;const O=15;let x=new b(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${t}`,color:"#EF4040",maxWidth:"432px"}}p.addEventListener("submit",async t=>{t.preventDefault();const o=p.elements.query.value.trim();if(p.reset(),!o){l.show(m("Please enter a search query!"));return}$(),c(h),g=o,d=1,u=0;try{const s=await w(g,d,O);if(y=s.totalHits,!s.hits.length){l.show(m("Sorry, there are no images matching your search query. Please try again!"));return}u+=s.hits.length,L(s.hits),x.refresh(),u<y?c(i):f(i)}catch(s){console.error("SubmitError: ",s.message),l.show(m("Something went wrong. Please try again later."))}finally{f(h)}});i.addEventListener("click",async()=>{d+=1,f(i),c(h);try{const t=await w(g,d);u+=t.hits.length,L(t.hits);const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),u>=y?l.show(m("We're sorry, but you've reached the end of search results.")):c(i)}catch(t){console.error("Failed to load more images: ",t.message),l.show(m("Failed to load more images.")),d-=1,c(i)}finally{f(h)}});
//# sourceMappingURL=index.js.map
