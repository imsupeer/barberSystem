document.getElementById('y').textContent = new Date().getFullYear();

const toggle = document.getElementById('togglePeriod');
const plans = document.querySelectorAll('.plan .price');
const periodEls = document.querySelectorAll('.plan .period');

function updatePrices() {
  const yearly = toggle.checked;
  plans.forEach((p) => {
    const m = p.getAttribute('data-price-month');
    const y = p.getAttribute('data-price-year');
    p.textContent = 'R$ ' + (yearly ? y : m);
  });
  periodEls.forEach((el) => (el.textContent = yearly ? '/ mês (anual)' : '/ mês'));
}
toggle.addEventListener('change', updatePrices);
updatePrices();

document.querySelectorAll('.faq .q').forEach((q) => {
  q.addEventListener('click', () => {
    const a = q.querySelector('.a');
    const open = a.style.display === 'block';
    document.querySelectorAll('.faq .a').forEach((x) => (x.style.display = 'none'));
    a.style.display = open ? 'none' : 'block';
  });
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
