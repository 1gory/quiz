import color from './color.png';
import DDD from './DDD.png';
import lacquer from './lacquer.png';
import volumetric from './volumetric.png';
import white from './white.png';
import photo from './photo/photo.jpg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.jpg';

export default {
  white: {
    value: 'white',
    name: 'Печать белым',
    mainImg: white,
    photos: [photo, photo2, photo3],
    description: 'Подойдет: цветные, черные и прозрачные чехлы из любого материала',
    points: [
      'Невысокая стоимость тиража',
      'Стойкая несмываемая печать',
      'Полноцветное изображение, четкие линии',
      'Тираж от 1 шт.',
    ],
  },
  color: {
    value: 'color',
    name: 'Цветная печать',
    mainImg: color,
    photos: [photo, photo2, photo3],
    description: 'Подойдет: цветные, черные и прозрачные чехлы из любого материала',
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
    photos: [photo, photo2, photo3],
    description: 'Подойдет: чехлы любого цвета и из любого материала',
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
    photos: [photo, photo2, photo3],
    description: 'Подойдет: чехлы любого цвета и из любого материала',
    points: [
      'Невысокая стоимость тиража',
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
    photos: [photo, photo2, photo3],
    description: 'Впервые в России уникальная авторская разработка принт на чехле как будто "оживает"',
    points: [
      'Визуально и тактильно',
      'Стойкая несмываемая печать',
      'Полноцветное изображение',
      'Тираж от 1 шт.',
    ],
  },
};
