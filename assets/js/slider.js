class Slider {
  constructor(imageArr, startingIndex) {
    this._images = imageArr;
    this._currentIndex = startingIndex;
  }

  //Получить массив картинок
  get images() {
    return this._images;
  }

  //Получить текущий индекс картинки
  get currentIndex() {
    return this._currentIndex;
  }

  //Записать текущий индекс картинки
  set currentIndex(newIndex) {
    if (typeof newIndex !== "number") {
      throw new TypeError();
    }
    this._currentIndex = newIndex;
  }

  //Получить картинку по текущему индексу
  get currentSlide() {
    return this.images[this.currentIndex];
  }

  //Получить следующий индекс слайда
  next() {
    /*% - для того, чтобы не выйти за границы массива. Текущий индекс = 2 + 1 = 3 % 3 = 0 (переходит на нулевой индекс) */
    return (this._currentIndex + 1) % this.images.length;
  }

  //Получить предыдущий индекс слайда
  prev() {
    return (this._currentIndex - 1 + this.images.length) % this.images.length;
  }
}
