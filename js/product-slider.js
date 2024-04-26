// Получаем элементы
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image img');

// Добавляем обработчик события для каждой миниатюры
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    // Удаляем активный класс у всех миниатюр
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    });

    // Добавляем активный класс для текущей миниатюры
    this.classList.add('active');

    // Заменяем основное изображение на изображение, связанное с миниатюрой
    const imageSrc = this.getAttribute('data-image');
    const altText = this.getAttribute('alt');
    mainImage.setAttribute('src', imageSrc);
    mainImage.setAttribute('alt', altText);
  });
});