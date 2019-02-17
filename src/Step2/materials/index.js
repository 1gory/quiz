import silicone from './silicone.jpg';
import plastic from './plastic.jpg';
import softtouch from './softtouch.jpg';

export default {
  silicone: {
    value: 'silicone',
    name: 'Силикон',
    mainImg: silicone,
    photos: [
      '/img/materials/silicone/1.jpg',
      '/img/materials/silicone/2.jpg',
      '/img/materials/silicone/3.jpg',
    ],
    description: 'Силиконовый чехол надежно защищает устройство от падений и механических повреждений. Телефон плотно сидит в силиконовом чехле, закрытый со всех сторн.',
    points: [
      'Защищает все грани телефона',
      'Вся цветовая гамма',
      'Не скользит в руке',
      'Не царапается',
    ],
  },
  plastic: {
    value: 'plastic',
    name: 'Пластик',
    mainImg: plastic,
    photos: [
      '/img/materials/plastic/1.jpg',
      '/img/materials/plastic/2.jpg',
      '/img/materials/plastic/3.jpg',
    ],
    description: 'Пластик матовый или глянцевый. Изображение на такой чехол наносится на весь корпус включая боковые грани смартфона. Изображение продолжается на краях чехла.',
    points: [
      'Изображение не выцветает',
      'Полная запечатка',
      'Гладкая поверхность',
    ],
  },
  softtouch: {
    name: 'Soft-Touch',
    value: 'softtouch',
    mainImg: softtouch,
    photos: [
      '/img/materials/softtouch/1.jpg',
      '/img/materials/softtouch/2.jpg',
      '/img/materials/softtouch/3.jpg',
    ],
    description: 'Sof-touch пластик хорошо защищает корпус телефона от сколов и царапин. Матовое софт тач покрытие исключает блики и создает эффект теплоты на поверхности всего чехла.',
    points: [
      'Не гнется',
      'Не скользит в руке',
      'Приятный на ощупь',
      'Вся цветовая гамма',
    ],
  },
};
