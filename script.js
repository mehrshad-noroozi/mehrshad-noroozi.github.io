const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');const progress=document.getElementById('progress');menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?window.scrollY/h*100:0)+'%'});document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}}));

// Certificate verification links
(()=>{
  const list=document.querySelector('.course-list');
  if(!list)return;
  const certificates=[
    ['آموزش جامع صدور بیمه شخص ثالث ایران','دوره تخصصی','https://www.maktabkhooneh.org/certificates/MK-03LWON/'],
    ['مدیریت شکایات و خدمات پس از فروش','دوره تخصصی','https://www.maktabkhooneh.org/certificates/MK-YL4GPB/'],
    ['قدرت کلمات در ارتباطات','دوره آموزشی','https://www.maktabkhooneh.org/certificates/MK-SW258E/'],
    ['۱۰ مهارت مهم در مراکز تماس و پشتیبانی','دوره آموزشی','https://faradars.org/verify/E8AD4B9D']
  ];
  const style=document.createElement('style');
  style.textContent=`.certificate-link{display:inline-flex;align-items:center;justify-content:center;gap:7px;margin-top:10px;padding:7px 12px;border:1px solid rgba(139,124,255,.35);border-radius:10px;background:rgba(139,124,255,.08);color:#b9b4ff;font-size:10px;font-weight:700;transition:.2s}.certificate-link:hover{transform:translateY(-2px);border-color:rgba(139,124,255,.65);background:rgba(139,124,255,.14);color:#fff}.certificate-title{margin:22px 0 2px;padding-top:18px;border-top:1px solid var(--line);font-size:11px;color:#aaa1ff;font-weight:800}.certificate-card{position:relative}.certificate-card small{margin-top:2px}`;
  document.head.appendChild(style);

  const existing=[...list.children];
  certificates.forEach(([title,type,url])=>{
    let card=existing.find(el=>el.querySelector('b')?.textContent.trim()===title);
    if(!card){
      card=document.createElement('div');
      card.className='certificate-card';
      card.innerHTML=`<b>${title}</b><small>${type}</small>`;
      list.appendChild(card);
    }
    if(!card.querySelector('.certificate-link')){
      const link=document.createElement('a');
      link.className='certificate-link';
      link.href=url;
      link.target='_blank';
      link.rel='noopener noreferrer';
      link.innerHTML='مشاهده و استعلام گواهینامه ↗';
      card.appendChild(link);
    }
  });
})();
