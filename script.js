// Swipe لمسح النوت على الموبايل
function addSwipeDelete(note){
  let startX, startY, moved=false;
  note.addEventListener('touchstart', e=>{ startX=e.touches[0].clientX; startY=e.touches[0].clientY; });
  note.addEventListener('touchmove', e=>{
    let dx=e.touches[0].clientX-startX;
    if(Math.abs(dx)>30){ moved=true; note.style.transform=`translateX(${dx}px)`; }
  });
  note.addEventListener('touchend', e=>{
    if(moved && Math.abs(parseInt(note.style.transform.replace('translateX(','').replace('px)','')))>100){
      note.remove(); saveNotes();
    } else{ note.style.transform='translateX(0px)'; }
    moved=false;
  });
}

// طبق على كل النوتات بعد إنشائها
function makeDraggableMobile(el){
  makeDraggable(el);
  addSwipeDelete(el);
}

// استبدل داخل addNote و addTodo و Stopwatch
// بدل makeDraggable(n); استخدم makeDraggableMobile(n);
