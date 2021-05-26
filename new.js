const previousBtn=document.getElementById('previousBtn');
    const nextBtn=document.getElementById('nextBtn');
    const finishBtn=document.getElementById('finishBtn');
    const content=document.getElementById('content');
    const bullet=[...document.querySelectorAll('.bullet')];
    const MAX_STEPS=4;
    let currentStep=1;
    nextBtn.addEventListener('click',()=> {
      const currentBullet=bullet[currentStep-1];
      currentBullet.classList.add('completed');
      currentStep++;
      previousBtn.disabled=false;
      if(currentStep==MAX_STEPS) {
        nextBtn.disabled=true;
        finishBtn.disabled=false;
      }
      content.innerText='Step Number ${currentStep}';
    });

previousBtn.addEventListener('click',()=> {
  const previousBullet=bullets[currentStep-2];
  previousBullet.classList.remove('completed');
  currentStep--;
  nextBtn.disabled=false;
  finishBtn.disabled=true;
  if(currentStep==1) {
    previous.disabled=true;
  }
  content.innerText='Step Number ${currentStep}';
});
finishBtn.addEventListener('click',()=> {
  location.reload();
});