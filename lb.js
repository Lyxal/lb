;(_=>{
let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
,tcs='<-←xx×:-÷*O⍟[-⌹-]⌹OO○77⌈FF⌈ll⌊LL⌊|_⊥TT⊤-|⊣|-⊢=/≠<=≤<_≤>=≥>_≥==≡=_≡/_≢vv∨^^∧^~⍲v~⍱^|↑v|↓((⊂(_⊆))⊃[|⌷|]⌷A|⍋V|⍒ii⍳i_⍸ee∊e_⍷'+
'uu∪UU∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴O|⌽O-⊖O\\⍉::¨~:⍨*:⍣oo∘o:⍤[\'⍞\']⍞[]⎕[:⍠:]⍠[=⌸=]⌸[<⌺>]⌺o_⍎oT⍕<>⋄on⍝aa⍺ww⍵VV∇--¯0~⍬'+
'^-∆^=⍙[?⍰?]⍰:V⍢||∥ox¤)_⊇_)⊇O:⍥:O⍥V~⍫'
,lbs=['←ASSIGN',' ','+conjugate\nplus','-negate\nminus','×direction\ntimes','÷reciprocal\ndivide','*exponential\npower','⍟natural logarithm\nlogarithm',
'⌹matrix inverse\nmatrix divide','○pi times\ncircular','!factorial\nbinomial','?roll\ndeal',' ','|magnitude\nresidue',
'⌈ceiling\nmaximum','⌊floor\nminimum','⊥decode','⊤encode','⊣same\nleft','⊢same\nright',' ','=equal','≠not equal',
'≤less than or equal to','<less than','>greater than','≥greater than or equal to','≡depth\nmatch','≢tally\nnot match',' ','∨greatest common divisor/or',
'∧leat common multiple/and','⍲nand','⍱nor',' ','↑mix\ntake','↓split\ndrop','⊂enclose\npartioned enclose','⊃first\npick','⊆nest\npartition\n','⌷index','⍋grade up\ngrade up',
'⍒grade down\ngrade down','⍳indices\nindices of','⍸where\ninterval index','∊enlist\nmember of','⍷find','∪unique\nunion','∩intersection','~not\nwithout',' ',
'/replicate\nReduce','\\expand\nScan','⌿replicate first\nReduce First','⍀expand first\nScan First',' ',',enlist\ncatenate/laminate',
'⍪table\ncatenate first/laminate','⍴shape\nreshape','⌽reverse\nrotate','⊖reverse first\nrotate first',
'⍉transpose\nreorder axes',' ','¨Each','⍨Selfie\nSwap','⍣Repeat','.Outer Product (∘.)\nInner Product',
'∘OUTER PRODUCT (∘.)\nCurry\nCompose','⍤Rank','@At',' ','⍞STDIN\nSTDERR','⎕EVALUATED STDIN\nSTDOUT','⍠Variant',
'⌸Index Key\nKey\n','⌺Stencil','⌶I-Beam','⍎execute','⍕format',' ','⋄STATEMENT SEPARATOR','⍝COMMENT','→ABORT\nBRANCH','⍵RIGHT ARGUMENT','⍺LEFT ARGUMENT',
'∇recursion','&Spawn',' ','¯NEGATIVE','⍬EMPTY NUMERIC VECTOR','∆IDENTIFIER CHARACTER','⍙IDENTIFIER CHARACTER']
,bqk=' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g,'')
,bqv='`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰W⍷⍷⍨YU⍸⍥⍣⊣ASDF⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g,'')
,tc={},bqc={} //tab completions and ` completions
for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
let lbh='';for(let i=0;i<lbs.length;i++){
  let ks=[]
  for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\n'+tcs[j]+' '+tcs[j+1]+' <tab>')
  for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\n` '+bqk[j])
  lbh+='<b title="'+he(lbs[i].slice(1))+(ks.length?'\n'+ks.join(''):'')+'">'+lbs[i][0]+'</b>'
}
let d=document,el=d.createElement('div');el.innerHTML=
`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>@font-face{font-family:"Apl385 Unicode";src:url(Apl385.woff)format('woff');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"Apl385 Unicode",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal;float:left}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer}
  .ngn_x:hover{color:#f00}
 </style>`
d.body.appendChild(el)
let t,ts=[],lb=el.firstChild,bqm=0 //t:textarea or input, lb:language bar, bqm:backquote mode
let pd=x=>x.preventDefault()
let ev=(x,t,f,c)=>x.addEventListener(t,f,c)
ev(lb,'mousedown',x=>{
  if(x.target.classList.contains('ngn_x')){lb.hidden=1;upd();pd(x);return}
  if(x.target.nodeName==='B'&&t){
    let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
    if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
    pd(x);return
  }
})
let fk=x=>{
  let t=x.target
  if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;d.body.classList.remove('ngn_bq')}
          if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x);return!1}}
  switch(x.ctrlKey+2*x.shiftKey+4*x.altKey+8*x.metaKey+100*x.which){
    case 19200:bqm=1;d.body.classList.add('ngn_bq');pd(x);break //`
    case   900:{let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)] //tab
                if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1;pd(x)}
                break}
  }
}
let ff=x=>{
  let t0=x.target,nn=t0.nodeName.toLowerCase()
  if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
  t=t0;if(!t.ngn){t.ngn=1;ts.push(t);ev(t,'keydown',fk)}
}
let upd=_=>{d.body.style.marginTop=lb.clientHeight+'px'}
upd();ev(window,'resize',upd)
ev(d,'focus',ff,!0);let ae=d.activeElement;ae&&ff({type:'focus',target:ae})
})();
