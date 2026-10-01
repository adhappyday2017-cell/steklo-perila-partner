import{t as e}from"./partners.UaIlYv2q.js";var t=new URL(window.location.href).searchParams.get(`p`);t&&localStorage.setItem(`spr_partner`,t.toUpperCase());var n=e(t||localStorage.getItem(`spr_partner`))||e(`DEMO`);document.querySelector(`[data-partner-name]`).textContent=`${n.name} · ${n.code}`,document.querySelector(`[data-partner-ava]`).textContent=n.person.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase(),document.querySelectorAll(`[data-keep]`).forEach(e=>{e.href=`${e.getAttribute(`href`)}?p=${n.code}`});var r=e=>e.toLocaleString(`ru-RU`)+` ₽`,i=document.querySelector(`[data-list]`),a=[[`new`,`Новый расчёт`],[`sent`,`Отправлен клиенту`],[`measure`,`Назначен замер`],[`deal`,`Договор подписан`],[`done`,`Объект сдан`],[`lost`,`Клиент отказался`]];function o(){let e=JSON.parse(localStorage.getItem(`spr_saved`)||`[]`);document.querySelector(`[data-empty]`).hidden=e.length>0,document.querySelector(`[data-k-count]`).textContent=String(e.length),document.querySelector(`[data-k-sum]`).textContent=r(e.reduce((e,t)=>e+(t.sum||0),0)),document.querySelector(`[data-k-fee]`).textContent=r(e.filter(e=>e.status!==`lost`).reduce((e,t)=>e+(t.fee||0),0)),i.innerHTML=e.map((e,t)=>{let n=new Date(e.at).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`}),i=e.status||`new`,o=a.map(([e,t])=>`<option value="${e}"${e===i?` selected`:``}>${t}</option>`).join(``);return`<article class="card item" data-i="${t}">
          <div class="item__main">
            <h3>${e.title}</h3>
            <p>${e.client?`<b>${e.client}</b> · `:``}${e.spec}</p>
            <p class="muted sm">сохранён ${n}</p>
          </div>
          <div class="item__money">
            <div class="price">${e.sum?r(e.sum):`по запросу`}</div>
            <div class="fee">${e.fee?`вам `+r(e.fee):``}</div>
          </div>
          <div class="item__acts">
            <select class="status" data-status>${o}</select>
            <a class="mini" href="${e.link}">Открыть расчёт</a>
            <button class="mini mini--del" type="button" data-del>Удалить</button>
          </div>
        </article>`}).join(``),i.querySelectorAll(`[data-status]`).forEach(e=>{e.addEventListener(`change`,()=>{let t=Number(e.closest(`[data-i]`).dataset.i),n=JSON.parse(localStorage.getItem(`spr_saved`)||`[]`);n[t].status=e.value,localStorage.setItem(`spr_saved`,JSON.stringify(n)),o()})}),i.querySelectorAll(`[data-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.closest(`[data-i]`).dataset.i),n=JSON.parse(localStorage.getItem(`spr_saved`)||`[]`);n.splice(t,1),localStorage.setItem(`spr_saved`,JSON.stringify(n)),o()})})}o();