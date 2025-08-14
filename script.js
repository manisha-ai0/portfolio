// Create a performant starfield (no heavy shadows / gradients per star)
(function makeStars(){
  const wrap = document.getElementById('stars');
  const count = Math.min(220, Math.floor((window.innerWidth*window.innerHeight)/5000)); // scale with screen
  const rand = (min,max)=>Math.random()*(max-min)+min;
  const frag = document.createDocumentFragment();
  for(let i=0;i<count;i++){
    const s=document.createElement('div');
    s.className='star';
    const size = Math.random()<0.12 ? 2.5 : 2; // a few brighter stars
    s.style.width = size+'px';
    s.style.height= size+'px';
    s.style.left  = rand(0, window.innerWidth)+'px';
    s.style.top   = rand(0, window.innerHeight)+'px';
    s.style.animationDelay = rand(0,2.2)+'s';
    frag.appendChild(s);
  }
  wrap.appendChild(frag);
})();

// Subtle parallax on mouse move for planets layer
(function parallax(){
  const orbits = document.querySelectorAll('.orbit');
  let cx = window.innerWidth/2, cy = window.innerHeight/2;
  window.addEventListener('mousemove', e=>{
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    orbits.forEach((o,idx)=>{
      const depth = (idx+1)*2; // different layers
      o.style.transform = `translate(calc(-50% + ${dx*depth*6}px), calc(-50% + ${dy*depth*4}px)) rotate(0deg)`;
    });
  }, {passive:true});
})();
