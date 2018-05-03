const panels = document.querySelectorAll('.panel');

const toggleClass = (e) => {
  const target = e.target.classList.contains('panel') ? e.target : e.target.parentElement;

  const currentOpen = document.querySelector('.open');
  if (currentOpen) currentOpen.classList.remove('open');

  if (currentOpen !== target) target.classList.add('open');
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleClass);
})