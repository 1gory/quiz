import silicone from './silicone.jpg';
import plastic from './plastic.jpg';
import softtouch from './softtouch.jpg';
import photo from './photo/photo.jpg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.jpg';

export default {
  silicone: {
    value: 'silicone',
    name: 'Силикон',
    mainImg: silicone,
    photos: [photo, photo2, photo3],
    description: 'Удобные силиконовые чехлы приятно держать в руке. Мягкий и гибкий материал отлично предохраняет телефон от царапин и защищает корпус во время падений. Силиконовые чехлы бывают не только полностью прозрачные, но и цветные.',
    points: [
      'Neque porro quisquam estem eius',
      'Qui dolorem ipsum quia',
      'Adipisci velit, sed quia non numquam',
    ],
  },
  plastic: {
    value: 'plastic',
    name: 'Пластик',
    mainImg: plastic,
    photos: [photo, photo2, photo3],
    description: 'На складе всегда есть большое количество пластиковых чехлов под нанесение логотипа уф печатью на все модели iPhone от iPhone 5 до iPhone XS.',
    points: [
      'Neque porro quisquam estem eius',
      'Qui dolorem ipsum quia',
      'Adipisci velit, sed quia non numquam',
    ],
  },
  softtouch: {
    name: 'Soft-Touch',
    value: 'softtouch',
    mainImg: softtouch,
    photos: [photo, photo2, photo3],
    description: 'Обратите внимание на возможность заказа пластиковых чехлов с покрытием Soft Touch ( Софт Тач ). По стоимости они примерно одинаковые, а по качеству, Soft Touch на ощупь гораздо приятнее: обладает похожим на резину покрытием, которое хочется держать в руках.',
    points: [
      'Neque porro quisquam estem eius',
      'Qui dolorem ipsum quia',
      'Adipisci velit, sed quia non numquam',
    ],
  },
};
