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
      const license=list.querySelector('.license');
      if(license) list.insertBefore(card,license); else list.appendChild(card);
    }
    if(!card.querySelector('.certificate-link')){
      const link=document.createElement('a');link.className='certificate-link';link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.innerHTML='مشاهده و استعلام گواهینامه ↗';card.appendChild(link);
    }
  });
})();

// Official license verification button
(()=>{
  const license=document.querySelector('.license');
  if(!license||license.querySelector('.license-link'))return;
  const style=document.createElement('style');
  style.textContent=`.license-link{display:inline-flex;align-items:center;justify-content:center;margin-top:10px;padding:7px 12px;border:1px solid rgba(139,124,255,.35);border-radius:10px;background:rgba(139,124,255,.08);color:#b9b4ff;font-size:10px;font-weight:700;text-decoration:none;transition:.2s}.license-link:hover{transform:translateY(-2px);border-color:rgba(139,124,255,.65);background:rgba(139,124,255,.14);color:#fff}`;
  document.head.appendChild(style);
  const link=document.createElement('a');link.className='license-link';link.href='https://qr.mojavez.ir/track/I12951113';link.target='_blank';link.rel='noopener noreferrer';link.textContent='مشاهده و استعلام مجوز ↗';license.appendChild(link);
})();

// SEO metadata and structured data
(()=>{
  const head=document.head;
  const add=(name,content,property=false)=>{const attr=property?'property':'name';let el=head.querySelector(`meta[${attr}="${name}"]`);if(!el){el=document.createElement('meta');el.setAttribute(attr,name);head.appendChild(el)}el.setAttribute('content',content)};
  add('robots','index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
  add('author','مهرشاد نوروزی');
  add('og:type','profile',true);add('og:title','مهرشاد نوروزی | Customer Support & CRM',true);add('og:description','پورتفولیوی حرفه‌ای مهرشاد نوروزی؛ کارشناس امور مشتریان، پشتیبانی و مراکز تماس با بیش از ۷ سال تجربه.',true);add('og:url','https://www.mehrshadnoroozi.ir/',true);add('og:site_name','مهرشاد نوروزی',true);add('og:locale','fa_IR',true);add('og:image','https://www.mehrshadnoroozi.ir/profile.png',true);add('og:image:alt','مهرشاد نوروزی',true);
  add('twitter:card','summary_large_image');add('twitter:title','مهرشاد نوروزی | Customer Support & CRM');add('twitter:description','پورتفولیوی حرفه‌ای مهرشاد نوروزی؛ کارشناس امور مشتریان و پشتیبانی.');add('twitter:image','https://www.mehrshadnoroozi.ir/profile.png');
  if(!head.querySelector('link[rel="canonical"]')){const c=document.createElement('link');c.rel='canonical';c.href='https://www.mehrshadnoroozi.ir/';head.appendChild(c)}
  if(!head.querySelector('script[data-seo-schema]')){
    const s=document.createElement('script');s.type='application/ld+json';s.dataset.seoSchema='true';s.textContent=JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"https://www.mehrshadnoroozi.ir/#person","name":"مهرشاد نوروزی","url":"https://www.mehrshadnoroozi.ir/","image":"https://www.mehrshadnoroozi.ir/profile.png","jobTitle":"کارشناس امور مشتریان و پشتیبانی","description":"کارشناس امور مشتریان و پشتیبانی با بیش از ۷ سال تجربه در مراکز تماس، CRM، مدیریت شکایات و فروش تلفنی.","sameAs":["https://www.linkedin.com/in/mehrshad-noroozi-60b160277"]},{"@type":"WebSite","@id":"https://www.mehrshadnoroozi.ir/#website","url":"https://www.mehrshadnoroozi.ir/","name":"مهرشاد نوروزی | Customer Support & CRM","inLanguage":"fa-IR","publisher":{"@id":"https://www.mehrshadnoroozi.ir/#person"}},{"@type":"ProfilePage","@id":"https://www.mehrshadnoroozi.ir/#profilepage","url":"https://www.mehrshadnoroozi.ir/","name":"مهرشاد نوروزی | Customer Support & CRM","mainEntity":{"@id":"https://www.mehrshadnoroozi.ir/#person"}}]});head.appendChild(s)
  }
})();
