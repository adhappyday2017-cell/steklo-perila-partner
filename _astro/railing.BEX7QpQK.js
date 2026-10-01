var e={w:1e3,hStairs:640,hFlat:400},t=[[`0%`,`#EDEFEF`],[`18%`,`#C6CBCC`],[`42%`,`#9EA5A6`],[`58%`,`#B7BDBE`],[`82%`,`#8E9596`],[`100%`,`#D5D9DA`]];function n(e,n=!0){let r=t.map(([e,t])=>`<stop offset="${e}" stop-color="${t}"/>`).join(``);return`<linearGradient id="${e}" ${n?`x1="0" y1="0" x2="0" y2="1"`:`x1="0" y1="0" x2="1" y2="0"`}>${r}</linearGradient>`}function r(e){let t=-330/700,n=(700-14*(e-1))/e,r=[];for(let i=0;i<e;i++){let e=112+i*(n+14),a=e+n,o=556+t*(e-112),s=556+t*(a-112);r.push({xa:e,ya:o,xb:a,yb:s,top:200})}return{x0:112,y0:556,run:700,rise:330,slope:t,H:200,panels:r,pw:n,gap:14}}function i(e){let t=(776-14*(e-1))/e,n=[];for(let r=0;r<e;r++){let e=112+r*(t+14);n.push({xa:e,ya:300,xb:e+t,yb:300,top:208})}return{x0:112,y0:300,run:776,rise:0,slope:0,H:208,panels:n,pw:t,gap:14}}function a(e){if(!e.rise){let t=e.x0-52,n=e.x0+e.run+52;return`<path d="M ${t} ${e.y0+13} H ${n} V ${e.y0+31} H ${t} Z"
              fill="var(--rl-struct)" opacity=".26"/>
            <path d="M ${t} ${e.y0+13} H ${n}" stroke="var(--rl-struct)"
              stroke-width="2.4" fill="none" stroke-linecap="square"/>`}let t=e.run/8,n=e.rise/8,r=[[e.x0-52,e.y0+16],[e.x0,e.y0+16]],i=e.x0,a=e.y0+16;for(let e=0;e<8;e++)a-=n,r.push([i,a]),i+=t,r.push([i,a]);r.push([i+52,a]);let o=r.map((e,t)=>`${t?`L`:`M`} ${e[0].toFixed(1)} ${e[1].toFixed(1)}`).join(` `);return`<path d="${o} ${r.slice().reverse().map(e=>`L ${e[0].toFixed(1)} ${(e[1]+30).toFixed(1)}`).join(` `)} Z" fill="var(--rl-struct)" opacity=".26"/>
          <path d="${o}" stroke="var(--rl-struct)" stroke-width="2.4" fill="none"
                stroke-linejoin="miter" stroke-linecap="square"/>`}function o(e,t,n){let r=`${e.xa},${e.ya} ${e.xb},${e.yb} ${e.xb},${e.yb-e.top} ${e.xa},${e.ya-e.top}`,i=e.xb-e.xa,a=e.xa+i*.14,o=Math.max(18,i*.12),s=`${a},${e.ya} ${a+o},${e.ya} ${a+o+30},${e.ya-e.top} ${a+30},${e.ya-e.top}`,c=e.xa+i*.56,l=Math.max(9,i*.05);return`<g class="rl-panel" style="--d:${n}ms" clip-path="url(#rl-clip-${t})">
    <clipPath id="rl-clip-${t}"><polygon points="${r}"/></clipPath>
    <polygon points="${r}" fill="var(--rl-glass)" fill-opacity="var(--rl-alpha)"/>
    <polygon points="${r}" fill="url(#rl-depth)"/>
    <polygon points="${s}" fill="#FFFFFF" opacity=".22"/>
    <polygon points="${`${c},${e.ya} ${c+l},${e.ya} ${c+l+30},${e.ya-e.top} ${c+30},${e.ya-e.top}`}" fill="#FFFFFF" opacity=".11"/>
  </g>
  <polygon class="rl-panel rl-edge" style="--d:${n}ms" points="${r}"
    fill="none" stroke="var(--rl-edge)" stroke-width="1.6" stroke-opacity=".85"/>
  <line class="rl-panel" style="--d:${n}ms" x1="${e.xa}" y1="${e.ya-e.top}" x2="${e.xb}" y2="${e.yb-e.top}"
    stroke="var(--rl-edge)" stroke-width="2.6" stroke-opacity=".95"/>`}function s(e,t){if(t.handrail===`none`)return``;let n=t.handrail===`flat15`?8:17,r=e.x0-16,i=e.x0+e.run+16,a=e.y0-e.H+e.slope*(r-e.x0),o=e.y0-e.H+e.slope*(i-e.x0),s=t.metal?`url(#rl-metal)`:`var(--rl-rail)`;return`<g class="rl-rail-g">
    <polygon points="${`${r},${a} ${i},${o} ${i},${o-n} ${r},${a-n}`}" fill="${s}"/>
    <polygon points="${`${r},${a-n+1.6} ${i},${o-n+1.6} ${i},${o-n+3.4} ${r},${a-n+3.4}`}" fill="#FFFFFF" opacity="${t.metal?`.5`:`.2`}"/>
    <line x1="${r}" y1="${a}" x2="${i}" y2="${o}" stroke="#000" stroke-opacity=".22" stroke-width="1"/>
  </g>`}function c(e,t){let n=[];if(t.mount===`point`)e.panels.forEach((t,r)=>{let i=t.xb-t.xa;[.17,.83].forEach(a=>{let o=t.xa+i*a,s=t.ya+e.slope*(o-t.xa);n.push(`<g class="rl-fix" style="--d:${420+r*60}ms">
          <rect x="${o-9}" y="${s-7}" width="18" height="15" rx="2.5" fill="url(#rl-metal)"/>
          <rect x="${o-9}" y="${s-7}" width="18" height="15" rx="2.5" fill="none" stroke="#000" stroke-opacity=".16"/>
          <rect x="${o-3.5}" y="${s+7}" width="7" height="12" fill="url(#rl-metal)"/>
        </g>`)})});else if(t.mount===`posts`){let r=[e.x0-6];e.panels.forEach(t=>r.push(t.xb+e.gap/2)),r[r.length-1]=e.x0+e.run+6,r.forEach((r,i)=>{let a=e.y0+e.slope*(r-e.x0)+14,o=e.y0-e.H+e.slope*(r-e.x0)-(t.handrail===`none`?0:4);n.push(`<g class="rl-fix" style="--d:${400+i*55}ms">
        <rect x="${r-6}" y="${o}" width="12" height="${a-o}" rx="1.5" fill="url(#rl-metal)"/>
        <rect x="${r-10}" y="${a-7}" width="20" height="9" rx="1.5" fill="url(#rl-metal)"/>
        <rect x="${r-6}" y="${o}" width="12" height="${a-o}" rx="1.5" fill="none" stroke="#000" stroke-opacity=".14"/>
      </g>`)})}else{let t=e.x0-10,r=e.x0+e.run+10,i=e.y0+e.slope*(t-e.x0),a=e.y0+e.slope*(r-e.x0),o=`${t},${i-20} ${r},${a-20} ${r},${a+6} ${t},${i+6}`,s=`${t},${i-20+2} ${r},${a-20+2} ${r},${a-20+5} ${t},${i-20+5}`;n.push(`<g class="rl-fix" style="--d:400ms">
      <polygon points="${o}" fill="url(#rl-metal)"/>
      <polygon points="${s}" fill="#FFFFFF" opacity=".45"/>
      <polygon points="${o}" fill="none" stroke="#000" stroke-opacity=".16"/>
    </g>`)}return n.join(``)}function l(e){return[e.object,e.mount,e.handrail,e.metal?`m`:`x`,e.panels].join(`|`)}function u(t){let l=t.object===`stairs`?r(t.panels):i(t.panels),u=l.panels.map((e,t)=>o(e,t,120+t*90)).join(``),d=t.object===`stairs`?e.hStairs:e.hFlat,f=l.y0+(l.rise?30:26);return`<svg class="rl" viewBox="0 0 ${e.w} ${d}" width="${e.w}" height="${d}" role="img"
    aria-label="Схема стеклянного ограждения: ${t.aria}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      ${n(`rl-metal`)}
      <linearGradient id="rl-depth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity=".22"/>
        <stop offset="55%" stop-color="#FFFFFF" stop-opacity="0"/>
        <stop offset="100%" stop-color="#1A1917" stop-opacity=".10"/>
      </linearGradient>
      <radialGradient id="rl-floor" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#1A1917" stop-opacity=".16"/>
        <stop offset="100%" stop-color="#1A1917" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="${l.x0+l.run/2}" cy="${f+16}" rx="${l.run/1.75}" ry="15" fill="url(#rl-floor)"/>
    ${a(l)}
    ${t.mount===`channel`?c(l,t):``}
    ${u}
    ${t.mount===`channel`?``:c(l,t)}
    ${s(l,t)}
  </svg>`}function d(e=`line`,t=``){let n={line:`M70 150 H250`,corner:`M70 150 H190 V60`,u:`M70 150 V70 H250 V150`,radius:`M70 150 C70 70 150 60 250 60`},r={line:[[70,150],[250,150]],corner:[[70,150],[190,150],[190,60]],u:[[70,150],[70,70],[250,70],[250,150]],radius:[[70,150],[250,60]]},i=n[e]||n.line,a=r[e]||r.line,o=a[a.length-1],s=a[a.length-2]||a[0],c=Math.atan2(o[1]-s[1],o[0]-s[0])*180/Math.PI;return`<svg class="plan" viewBox="0 0 320 200" width="320" height="200" role="img"
    aria-label="Вид сверху: ${t||e}">
    <rect x="28" y="24" width="264" height="152" rx="2" fill="none" stroke="#CBCAC4" stroke-width="2"/>
    <path d="M28 96 V24 H120" fill="none" stroke="var(--bg,#FBFAF7)" stroke-width="4"/>
    <text x="34" y="20" font-size="9" fill="#9A958C" font-family="system-ui,sans-serif">помещение</text>
    <path d="${i}" fill="none" stroke="var(--rl-edge,#8FA9A2)" stroke-width="7" stroke-linecap="round"
      stroke-linejoin="round" opacity=".35"/>
    <path d="${i}" fill="none" stroke="var(--accent,#016771)" stroke-width="2.4" stroke-linecap="round"
      stroke-linejoin="round" stroke-dasharray="${e===`radius`?`0`:`9 5`}"/>
    <g transform="translate(${o[0]} ${o[1]}) rotate(${c})">
      <path d="M-6 -4 L2 0 L-6 4 Z" fill="var(--accent,#016771)"/>
    </g>
    <circle cx="${a[0][0]}" cy="${a[0][1]}" r="3.4" fill="var(--accent,#016771)"/>
  </svg>`}export{u as n,l as r,d as t};