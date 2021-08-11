"use strict";

//Получили картинку
const img = document.querySelector(".slider-img");

//NodeList. Получили все кнопки.
const btns = document.querySelectorAll(".button");

//Деструктуризация массова кнопок
const [prevBtn, nextBtn] = btns;

/*То же самое
const [prevBtn, nextBtn] = documents.querySelectorAll(
  ".slider-container>button"
);*/

//Массив картинок
const sliderImages = [
  "assets/img/1.jpg",
  "assets/img/2.jpg",
  "assets/img/3.jpg",
];

//Создали объект слайдер, атрибуты: массив картинок, текущий индекс
const slider = new Slider(sliderImages, 0);

//Обновляет отображение страницы
function updateView() {
  //Достали текущий слайд
  const { currentSlide } = slider;
  //Добавили атрибут картинке
  img.setAttribute("src", currentSlide);
}

//Обработчик события для кнопки prevBtn
prevBtn.addEventListener("click", () => {
  //В текущий индекс записали предыдущий индекс
  slider.currentIndex = slider.prev();
  //Обновили отображение страницы
  updateView();
});

//Обработчик события для кнопки nextBtn
nextBtn.addEventListener("click", () => {
  //В текущий индекс записали следующий индекс
  slider.currentIndex = slider.next();
   //Обновили отображение страницы
  updateView();
});

//Обновили отображение страницы
updateView();
