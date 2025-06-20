import{S as L,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const P="50706028-1c89dce29f588a1d4e8ec62d3",q="https://pixabay.com/api/";function g(t,o=1,i=15){const s={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:o};return axios.get(q,{params:s}).then(e=>{const{hits:r}=e.data;if(r.length===0)throw new Error("No images found");return r}).catch(e=>{throw console.error("Error loading images:",e.message||e),e})}const y=document.querySelector(".gallery");document.querySelector(".loader");function E(){y.innerHTML=""}function v(t){y.innerHTML=t.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:r,comments:a,downloads:w})=>`
      <li class="gallery-item">
        <a href="${i}">
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
            <p>${w}</p>
          </div>
        </div>
      </li>
    `).join("")}function u(t){t.classList.remove("hidden")}function h(t){t.classList.add("hidden")}const f=document.querySelector(".form"),d=document.querySelector(".load-more");let m=1,S="",p=0,l=0;const b=15;let $=new L(".gallery a",{captionsData:"alt",captionDelay:250});function c(t){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${t}`,color:"#EF4040",maxWidth:"432px"}}f.addEventListener("submit",async t=>{t.preventDefault();const o=f.elements.query.value.trim();if(f.reset(),!o){n.show(c("Please enter a search query!"));return}E(),u(loader),m=1,l=0;try{const i=await g(o,m,b);if(p=i.length,!i.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}l+=i.length,v(i),$.refresh(),l<p&&u(d)}catch{n.show(c("Something went wrong. Please try again later."))}finally{h(loader)}});d.addEventListener("click",async()=>{m+=1,h(d),u(loader);try{const t=await g(S,m);l+=t.length,v(t);const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),l>=p?n.show(c("We're sorry, but you've reached the end of search results.")):u(d)}catch{n.show(c("Failed to load more images."))}finally{h(loader)}});
//# sourceMappingURL=index.js.map
