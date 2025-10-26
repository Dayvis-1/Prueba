const input = document.getElementById('input');
const names = document.getElementById('name');

input.addEventListener('input', () => {
  const yourName = input.value;
  names.textContent = `Holaaaaaa ${yourName}`;
});