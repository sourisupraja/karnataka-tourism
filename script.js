
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
 if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('open'));
 document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
 const lb=document.querySelector('.lightbox'); const lbImg=lb?.querySelector('img');
 document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{if(lb&&lbImg){lbImg.src=btn.dataset.lightbox;lb.classList.add('open')}}));
 lb?.addEventListener('click',e=>{if(e.target===lb||e.target.matches('button'))lb.classList.remove('open')});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')lb?.classList.remove('open')});
 const form=document.querySelector('#bookingForm');
 if(form){form.addEventListener('submit',e=>{e.preventDefault(); let ok=true; form.querySelectorAll('[required]').forEach(x=>{if(!x.value.trim()){ok=false;x.style.borderColor='#dc2626'}else{x.style.borderColor='#cbd5e1'}}); const msg=document.querySelector('.success'); if(ok){msg.style.display='block';form.reset();msg.scrollIntoView({behavior:'smooth',block:'nearest'})} });}
});
