import color from './color.png';
import DDD from './DDD.png';
import lacquer from './lacquer.png';
import volumetric from './volumetric.png';
import white from './white.png';

export default {
  white: {
    value: 'white',
    name: 'Печать белым',
    mainImg: white,
    photos: ['/img/printing/white/1.jpg', '/img/printing/white/2.jpg', '/img/printing/white/3.jpg'],
    description: 'Подойдет: цветные, черные и прозрачные чехлы из любого материала.',
    points: [
      'Невысокая стоимость тиража',
      'Стойкая несмываемая печать',
      'Четкие линии',
      'Тираж от 1 шт.',
    ],
  },
  color: {
    value: 'color',
    name: 'Цветная печать',
    mainImg: color,
    photos: ['/img/printing/color/1.jpg', '/img/printing/color/2.jpg', '/img/printing/color/3.jpg'],
    description: 'Подойдет: цветные, черные и прозрачные чехлы из любого материала.',
    points: [
      'Невысокая стоимость тиража',
      'Стойкая несмываемая печать',
      'Полноцветное изображение, четкие линии',
      'Тираж от 1 шт.',
    ],
  },
  lacquer: {
    value: 'lacquer',
    name: 'Печать лаком',
    mainImg: lacquer,
    photos: [
      '/img/printing/lacquer/1.jpg',
      '/img/printing/lacquer/2.jpg',
      '/img/printing/lacquer/3.jpg',
    ],
    description: 'Подойдет: чехлы любого цвета и из любого материала.',
    points: [
      'Невысокая стоимость тиража',
      'Стойкая несмываемая печать',
      'Полноцветное изображение, четкие линии',
      'Тираж от 1 шт.',
    ],
  },
  volumetric: {
    value: 'volumetric',
    name: 'Объемная печать',
    mainImg: volumetric,
    photos: [
      '/img/printing/volumetric/1.jpg',
      '/img/printing/volumetric/2.jpg',
      '/img/printing/volumetric/3.jpg',
    ],
    description: 'Подойдет: чехлы любого цвета и из любого материала.',
    points: [
      'Печать визуально и тактильно ощущается',
      'Стойкая несмываемая печать',
      'Полноцветное изображение, четкие линии',
      'Тираж от 1 шт.',
    ],
  },
  DDD: {
    value: 'DDD',
    name: '3D печать',
    submame: 'Объемная печать + печать лаком',
    mainImg: DDD,
    photos: ['/img/printing/DDD/1.jpg', '/img/printing/DDD/2.jpg', '/img/printing/DDD/3.jpg'],
    description: 'Совмещение двух технологий печати (объемная печать и печать лаком) . Премиум сегмент.',
    points: [
      'Визуально и тактильно',
      'Стойкая несмываемая печать',
      'Полноцветное изображение',
      'Тираж от 1 шт.',
    ],
  },
};
