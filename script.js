function getDayInfo() {
  let currentdate = new Date(2023,04,22);
  let oneJan = new Date(currentdate.getFullYear(),0,1);
  let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
  let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  let textNode = `${currentdate.toLocaleDateString('ru-RU', options)} ${result} нед.`;
  let pit = document.querySelectorAll('.dat').forEach(pit => {
      pit.innerText = textNode;
  });
}
window.onload = getDayInfo();

const btnUp = {
    el: document.querySelector('.uper'),
    show() {
      this.el.classList.remove('uper_hide');
    },
    hide() {
      this.el.classList.add('uper_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.uper').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();

function buy() {
  alert("Спасибо за покупку")
}

function out() {
  let closer = document.getElementById('form');
  closer.style.display = 'none'
}

function buyForm() {
let showForm = document.getElementById('form');
showForm.style.display = 'flex';
}

const btn = document.querySelector(".changeTheme");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});