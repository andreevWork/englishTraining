export const GameTypesData = {
  JustShow: {
    name: 'Показ',
    component: null,
    key: 'X',
    comingSoon: false
  },
  
  RightOrder: {
    name: 'Правильный порядок',
    component: null,
    key: 'C',
    comingSoon: false
  },
  
  TypeWords: {
    name: 'Ввод с клавиатуры',
    component: null,
    key: 'V',
    comingSoon: true
  }
};

export const GameTypes = Object.keys(GameTypesData);
