import React from 'react';
import {observer, inject} from "mobx-react";
import s from './JustShow.sass';

@inject('subtitles')
@observer
export class JustShow extends React.Component {
  
  prevSubIndex = this.props.subtitles.index;
  prevWordsRef = React.createRef();
  currentWordsRef = React.createRef();
  
  componentDidUpdate() {
    const { index } = this.props.subtitles;
    const prevWordsRef = this.prevWordsRef.current;
    
    if (this.prevSubIndex < index && prevWordsRef) {
      this.animateSubs();
    }
    
    if (prevWordsRef) {
      this.resetSubsStyle();
    }
    
    this.prevSubIndex = index;
  }
  
  animateSubs() {
    const prevWordsRef = this.prevWordsRef.current;
    const currentWordsRef = this.currentWordsRef.current;
    
    requestAnimationFrame(() => {
      const {height: heightCurrent} = this.currentWordsRef.current.getBoundingClientRect();
      const {height: heightPrev} = prevWordsRef.getBoundingClientRect();
      // Чтобы правильно определить высоту субтитра, нельзя сразу его скейлить
      // сначала забираем высоту, а потом начинаем анимацию
      const translateY = heightPrev < heightCurrent ? heightCurrent : heightPrev;
    
      // Устанавливаем начальное значение для текущего субтитра
      currentWordsRef.style.transform = `translate(-50%, -50%) scale(0.01)`;
    
      // И затем на следуещем кадре анимируем субтитры
      requestAnimationFrame(() => {
        prevWordsRef.style.transition = 'all 300ms ease-in';
        prevWordsRef.style.transform = `translate(-50%, -50%) translateY(-${translateY}px) scale(.8)`;
        prevWordsRef.style.opacity = '.7';
      
        currentWordsRef.style.transition = 'all 300ms ease-in';
        currentWordsRef.style.transform = `translate(-50%, -50%) scale(1)`;
      });
    });
  }
  
  resetSubsStyle() {
    const prevWordsRef = this.prevWordsRef.current;
    const currentWordsRef = this.currentWordsRef.current;
    
    prevWordsRef.style.transform = '';
    prevWordsRef.style.opacity = '';
    prevWordsRef.style.transition = 'none';
    currentWordsRef.style.transform = '';
    currentWordsRef.style.transition = 'none';
  }
  
  renderOneSub() {
    const {subtitles: subs} = this.props;
    
    return  <div className={s.words}>
      {subs.getSub().text}
    </div>;
  }
  
  renderTwoSubs() {
    const {subtitles: subs} = this.props;
    
    return <React.Fragment>
      <div className={s.words} ref={this.prevWordsRef}>
        {subs.getSub(subs.index - 1).text}
      </div>
      
      <div className={s.words} ref={this.currentWordsRef}>
        {subs.getSub().text}
      </div>
    </React.Fragment>;
  }
  
  render() {
    const {subtitles: subs} = this.props;
    
    return <div className={s.wrap}>
      {this.prevSubIndex < subs.index ? this.renderTwoSubs() : this.renderOneSub()}
    </div>;
  }
}
