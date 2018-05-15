export const GameTypesData = {
  JustShow: {
    name: 'Показ',
    component: null,
    comingSoon: false
  },
  
  RightOrder: {
    name: 'Правильный порядок',
    component: null,
    comingSoon: false
  },
  
  TypeWords: {
    name: 'Ввод с клавиатуры',
    component: null,
    comingSoon: true
  }
};

export const GameTypes = Object.keys(GameTypesData);
