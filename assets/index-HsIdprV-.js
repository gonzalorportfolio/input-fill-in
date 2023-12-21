(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const n=t=>document.querySelector(t),c=async t=>{try{const e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){console.error("Error fetching data:",e)}},l=(t,e)=>e.filter(s=>{const i=new RegExp(t,"gi");return s.city.match(i)||s.state.match(i)}),d=(t,e)=>{n(t).addEventListener("change",e),n(t).addEventListener("keyup",e)},u="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",f=()=>{n("#app").innerHTML=`
    <form class="search-form">
        <input id='search' type="text" class="search" placeholder="City or State">
        <ul class="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
        </ul>
    </form>
 `},p=(t,e)=>{t.preventDefault();const s=l(t.target.value,e).map(i=>`
      <li>
          <span id='${i.rank}' class='name'>${i.city}, ${i.state}</span>
      </li>
    `).join("");n(".suggestions").innerHTML=n("#search").value?s:"<li>Filter for a city</li><li>or a state</li>"},m=(t,e)=>{const s=e.filter(r=>r.rank===t.target.id),i=document.createElement("div");i.className="modal-bg",i.style.display="flex",i.innerHTML=` 
    <div class="cityCard" style="display: block; color: blue; background-color: rgb(240, 248, 255); padding: 1em; margin: 1em; max-width: 50vw; border-radius: 1em;">
      ${s[0].city} is a city that can be found in the state of ${s[0].state}:
      <div id="${s[0].city}" class="gameInfo">
        <p class="cityText">Ranked:# ${s[0].rank}</p>
        <p class="cityText">Growth: ${s[0].growth_from_2000_to_2013} </p>
        <p class="cityText">Population ${s[0].population}</p>
      </div>
      <input class='close' type="submit" value="Close" >
      <h3>${s[0].city}, ${s[0].state}</h3>
    </div>`,n("#app").appendChild(i),n(".close").addEventListener("click",r=>i.parentNode.removeChild(i))},y=t=>{t.preventDefault()},g=async()=>{const t=await c(u);f(),d("#search",e=>p(e,t)),n(".search-form").addEventListener("submit",y),n("ul").addEventListener("click",e=>m(e,t))};g();
