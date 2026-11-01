const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function icons(r=document){$$('u[i]',r).forEach(u=>{const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('class','i '+u.className);if(u.getAttribute('style'))s.setAttribute('style',u.getAttribute('style'));s.innerHTML='<use href="#i-'+u.getAttribute('i')+'"/>';u.replaceWith(s)})}
let tt;function toast(m){const t=$('#toast');t.innerHTML=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1800)}
function drawer(o){$('#app').classList.toggle('dr',!!o)}
function cp(){try{navigator.clipboard.writeText('2960634130')}catch(e){}toast('PNR copied')}
const T=[{p:'2960634130',n:'14854 (MARUDHAR EXP)',d:'Thu, 2 Nov 26',a:'JAIPUR JN.',b:'JODHPUR JN.',h:'5h:0m',s:'u'}];
const TB={u:['Upcoming','#ee9f3d'],c:['Completed','#198149'],x:['Cancelled','#e5484d'],a:['All','#0067fe']};
let tab='u';
function list(){
 const L=T.filter(t=>tab=='a'||t.s==tab);$('#bsub').hidden=!L.length;
 $('#bl').innerHTML=L.length?'<div class="bhd" style="color:'+TB[tab][1]+'">'+TB[tab][0]+' ('+L.length+')<button onclick="toast(\'Refreshed\')"><u i="sync"></u></button></div>'+L.map(t=>'<div class="tk"><div class="a"><div class="r"><span class="chip">Reserved</span><b>PNR: '+t.p+'</b></div><div class="r" style="margin:0"><div><small>Train No.</small><b>'+t.n+'</b></div><div style="text-align:right"><small>Journey Date</small><b>'+t.d+'</b></div></div><div class="r" style="margin:10px 0 0;align-items:center"><b>'+t.a+'</b><small>—'+t.h+'—</small><b>'+t.b+'</b></div></div><div class="b"><button onclick="toast(\'Book Again\')">Book Again</button><span></span><button onclick="location.hash=\'ticket\'">View Details</button></div></div>').join(''):'<div class="em"><u i="tkt"></u><p>No Tickets Found. Swipe down to refresh.</p></div>';
 icons($('#bl'));$$('.bt button').forEach(b=>b.classList.toggle('on',b.dataset.t==tab));
}
$$('.bt button').forEach(b=>b.onclick=()=>{tab=b.dataset.t;list()});
function go(){
 const h=location.hash.slice(1),p=$('[data-p="'+h+'"]')?h:'home';
 $$('.page').forEach(e=>e.classList.toggle('on',e.dataset.p==p));
 $('#app').dataset.view=p;drawer(0);
 $$('#nav button[data-g]').forEach(b=>b.classList.toggle('on',b.dataset.g==p));
 if(p=='bookings')list();
}
const WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],MO=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],ST={JP:'JAIPUR JN.',JU:'JODHPUR JN.'};
const dt=n=>{const d=new Date();d.setDate(d.getDate()+n);return d};
const fd=(d,p)=>WD[d.getDay()]+', '+(p?String(d.getDate()).padStart(2,'0'):d.getDate())+' '+MO[d.getMonth()];
let q={f:'JP',t:'JU',d:0,c:'All'};
function rz(){
 $('#rf').textContent=q.f+' - '+ST[q.f];$('#rt').textContent=q.t+' - '+ST[q.t];$('#rd').textContent=fd(dt(q.d));
 $$('#dc button').forEach(b=>b.classList.toggle('on',+b.dataset.d==q.d));
 $$('#cc button').forEach(b=>b.classList.toggle('on',b.textContent==q.c));
}
$('#dc').innerHTML=[1,2,3].map(n=>'<button data-d="'+n+'">'+dt(n).getDate()+' '+MO[dt(n).getMonth()]+'</button>').join('');
$('#cc').innerHTML=['All','2S','VS','SL','CC','VC','EC','EV','3A','3E','2A','1A','FC'].map(c=>'<button>'+c+'</button>').join('');
$('#dc').onclick=e=>{const b=e.target.closest('button');if(b){q.d=q.d==+b.dataset.d?0:+b.dataset.d;rz()}};
$('#cc').onclick=e=>{const b=e.target.closest('button');if(b){q.c=b.textContent;rz()}};
$('#rr').textContent=fd(dt(1),1);
function swp(){[q.f,q.t]=[q.t,q.f];rz()}
function rec(){q.f='JP';q.t='JU';q.d=1;rz()}
function fav(i){const F=[['JU','JP','SL'],['JP','JU','CC']][i];q.f=F[0];q.t=F[1];q.c=F[2];rz()}
function rsearch(){toast('Searching '+q.f+' → '+q.t+' · '+fd(dt(q.d))+' · '+q.c+' (demo)')}
rz();
icons();addEventListener('hashchange',go);go();
