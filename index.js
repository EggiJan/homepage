import email from './scripts/email';
import bindRouter from './scripts/navi';
import './less/style.less';


document.addEventListener('DOMContentLoaded', () => {
  bindRouter();
  const emailButton = document.getElementById('contact-mail');
  emailButton.onclick = (ev) => email.setEmail(ev.target);
});