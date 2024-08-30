document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle');
  const circleColor = document.getElementById('circle-element');

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');

      if (document.body.classList.contains('dark')) {
          localStorage.setItem('dark', 'enabled');
          toggleButton.textContent = '🌙';
          document.documentElement.style.setProperty('--circle-color', 'green');
      } else {
          localStorage.removeItem('dark');
          toggleButton.textContent = '☀️';
          document.documentElement.style.setProperty('--circle-color', '#ffb100');
      }
  });
});

let redirectURL = '';

const redirectPage = function (url) {
redirectURL = url;
location.assign(url);
};
