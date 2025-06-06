const btn = document.getElementById('accessibility-btn');
const panel = document.getElementById('accessibility-panel');
const closeBtn = document.getElementById('daccheac');

btn.addEventListener('click', () => {
  const isOpen = panel.classList.toggle('open');
  panel.setAttribute('aria-hidden', !isOpen);
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
});

// Section toggle logic
document.querySelectorAll('.section-toggle').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
  });
});

// Position select logic
document.getElementById('position-select').addEventListener('change', function() {
  const widget = document.getElementById('accessibility-widget');
  if (this.value === 'left') {
    widget.style.right = '';
    widget.style.left = '32px';
  } else {
    widget.style.left = '';
    widget.style.right = '32px';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      content.hidden = expanded;
    });
  });
});
