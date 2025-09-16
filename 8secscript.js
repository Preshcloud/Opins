const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const toggle = item.querySelector('.faq-toggle');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Close all
    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-toggle').textContent = '+';
    });

    // Open clicked one
    if (!isOpen) {
      item.classList.add('active');
      toggle.textContent = '−'; // Unicode minus sign
    }
  });
});
