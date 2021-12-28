function show_password_text(target) {
  let temp = target.previousSibling;
  let input = temp.previousSibling; 

  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}
