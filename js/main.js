// nav toggle para mobile e smooth scroll + comportamento de abrir/fechar história do modelo
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');

  toggle && toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Smooth scroll para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
    });
  });

  // ACCORDION: abrir/fechar histórias ao clicar na imagem
  const toggles = document.querySelectorAll('.model-toggle');

  toggles.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', function () {
      const card = this.closest('.model-card');
      const story = card.querySelector('.model-story');

      const isOpen = card.classList.contains('open');

      // Se quiser fechar o aberto ao abrir outro (comportamento exclusivo), descomente este bloco:
      // document.querySelectorAll('.model-card.open').forEach(openCard => {
      //   if (openCard !== card) toggleClose(openCard);
      // });

      if (isOpen) {
        // fechar
        toggleClose(card);
      } else {
        // abrir
        toggleOpen(card);
      }
    });
  });

  function toggleOpen(card) {
    const story = card.querySelector('.model-story');
    // compute exact height for smooth transition
    story.style.display = 'block';
    const height = story.scrollHeight;
    story.style.maxHeight = '0px';
    // force repaint
    story.offsetHeight;
    story.style.transition = 'max-height 400ms ease';
    story.style.maxHeight = height + 'px';
    card.classList.add('open');
    // accessibility
    const btn = card.querySelector('.model-toggle');
    btn.setAttribute('aria-expanded', 'true');
    story.setAttribute('aria-hidden', 'false');

    // after transition, remove inline max-height so content can grow naturally
    story.addEventListener('transitionend', function handler() {
      story.style.maxHeight = 'none';
      story.removeEventListener('transitionend', handler);
    });
  }

  function toggleClose(card) {
    const story = card.querySelector('.model-story');
    // set max-height to current height for transition
    story.style.maxHeight = story.scrollHeight + 'px';
    // force repaint
    story.offsetHeight;
    story.style.transition = 'max-height 350ms ease';
    story.style.maxHeight = '0px';
    card.classList.remove('open');
    const btn = card.querySelector('.model-toggle');
    btn.setAttribute('aria-expanded', 'false');
    story.setAttribute('aria-hidden', 'true');
    // optional: hide after closed
    story.addEventListener('transitionend', function handler() {
      if (story.style.maxHeight === '0px') {
        story.style.display = '';
      }
      story.removeEventListener('transitionend', handler);
    });
  }
});