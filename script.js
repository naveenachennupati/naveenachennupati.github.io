(()=>{const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const active=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!active));toggle.setAttribute('aria-label',active?'Open navigation':'Close navigation');nav.classList.toggle('open',!active)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}document.querySelectorAll('#year').forEach(x=>x.textContent=String(new Date().getFullYear()));document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{const val=b.getAttribute('data-copy');try{await navigator.clipboard.writeText(val);const prev=b.textContent;b.textContent='Email copied ✓';setTimeout(()=>b.textContent=prev,1800)}catch(e){location.href='mailto:'+val}}));})();

;(()=>{
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
 if(reduce.matches || !fine.matches) return;
 const elements=[...document.querySelectorAll('[data-tilt]')];
 elements.forEach(el=>{
   let raf=0;
   const isHero=el.dataset.tilt==='hero';
   const xvar=isHero?'--rx':'--card-rx';
   const yvar=isHero?'--ry':'--card-ry';
   const max=isHero?7:2.6;
   el.addEventListener('pointermove',e=>{
     const rect=el.getBoundingClientRect();
     const px=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));
     const py=Math.max(0,Math.min(1,(e.clientY-rect.top)/rect.height));
     if(raf) cancelAnimationFrame(raf);
     raf=requestAnimationFrame(()=>{
       el.style.setProperty(xvar,((.5-py)*max).toFixed(2)+'deg');
       el.style.setProperty(yvar,((px-.5)*max).toFixed(2)+'deg');
     });
   },{passive:true});
   el.addEventListener('pointerleave',()=>{
     if(raf) cancelAnimationFrame(raf);
     el.style.setProperty(xvar,'0deg');
     el.style.setProperty(yvar,'0deg');
   });
 });
})();
