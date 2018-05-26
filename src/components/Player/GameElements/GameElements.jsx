import React from 'react';
import {observer, inject} from "mobx-react";
import s from './GameElements.sass';
import { GameHeader } from 'player/GameElements/GameHeader/GameHeader';
import { GameChoice } from 'player/GameElements/GameChoice/GameChoice';
import { Spinner } from 'common/Spinner/Spinner';
import { GameTypesData } from 'constants/GameTypes';
import { GameNavBar } from 'player/GameElements/GameNavBar/GameNavBar';

@inject('store')
@observer
export class GameElements extends React.Component {
  constructor(...args) {
    super(...args);
    
    const gameType = this.props.store.gameType;
  
    this.state = {
      isGameComponentLoaded: gameType && !!GameTypesData[gameType].component
    };
  }
  
  componentWillReact() {
    const gameType = this.props.store.gameType;
    
    // Если игра не выбрана не делаем ничего
    if (!gameType) {
      // Сбрасываем состояние загрузки компонента
      // Поскольку может быть выбрана новая игра, и будет необходимо загружать новый компонент
      this.setState({ isGameComponentLoaded: false });
      
      return;
    }
    
    // Если компонент уже загружен и игра выбрана - ничего не делаем
    if (this.state.isGameComponentLoaded) {
      return;
    }
    
    // Если у выбранной игры уже загружен компонент, сразу показываем игру
    if (GameTypesData[gameType].component) {
      this.gameHasLoaded();
    } else {
      let hasOneEvent = false;
      
      // Делаем загрузку не сразу, дабы элемент погрузки был виден пользователю
      // Иначе с нормальным интернетом не видно спиннера, а просто мерцание
      setTimeout(() => {
        if (hasOneEvent) {
          this.gameHasLoaded();
        }
        hasOneEvent = true;
      }, 1000);
      
      // Асинхронно грузим каждую игру, и затем пишем в общий словарь игр, чтобы не грузить еще раз
      import(`games/${gameType}/${gameType}`)
        .then(gameComponent => {
          GameTypesData[gameType].component = gameComponent[gameType];
          
          if (hasOneEvent) {
            this.gameHasLoaded();
          }
          hasOneEvent = true;
        });
    }
  }
  
  gameHasLoaded() {
    this.setState({ isGameComponentLoaded: true }, this.props.store.repeatCurrentSubs);
  }
  
  renderGame() {
    const Game = GameTypesData[this.props.store.gameType].component;
    
    return this.state.isGameComponentLoaded ?<React.Fragment>
      <GameHeader />
  
      <div className={s.game}>
        <Game />
      </div>
    </React.Fragment> : <Spinner />;
  }

  render() {
    return this.props.store.isGameMod ? <div className={s.gameElements}>
      <GameNavBar />
      {this.props.store.gameType ? this.renderGame() : <GameChoice />}
    </div> : null;
  }
}
