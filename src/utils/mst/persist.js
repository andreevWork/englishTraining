import { onSnapshot, applySnapshot } from 'mobx-state-tree';

export const persist = (store, name) => {
  const data = localStorage.getItem(name);
  
  if (data) {
    const snapshot = JSON.parse(data);
    
    applySnapshot(store, snapshot);
  }
  
  setTimeout(() => {
    onSnapshot(store, snapshot => {
      localStorage.setItem(name, JSON.stringify(snapshot));
    });
  }, 500);
};
