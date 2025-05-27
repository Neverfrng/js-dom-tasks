import escapeHtml from 'escape-html';

// BEGIN
export default function setupFeedbackForm() {
  const form = document.querySelector('form');

  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const name = form.elements.name.value;
    const comment = form.elements.comment.value;

    const safeEmail = escapeHtml(email);
    const safeName = escapeHtml(name);
    const safeComment = escapeHtml(comment);

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${safeEmail}</div>
      <div>Name: ${safeName}</div>
      <div>Comment: ${safeComment}</div>
    `;

    form.replaceWith(resultDiv);
  });
}
// END