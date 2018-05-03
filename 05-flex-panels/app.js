const panels = document.querySelectorAll('.panel');

function toggleClass() {
  const currentOpen = document.querySelector('.open');
  if (currentOpen) currentOpen.classList.remove('open');

  if (currentOpen !== this) this.classList.add('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleClass));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));