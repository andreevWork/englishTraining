import React from 'react';
import {observer, inject} from "mobx-react";
import s from './JustShow.sass';
import { TextWithDictionary } from 'modules/Player/components/TextWithDictionary/TextWithDictionary';

@inject('subtitles')
@observer
export default class JustShow extends React.Component {
  
  prevSubIndex = this.props.subtitles.index;
  prevWordsRef = React.createRef();
  currentWordsRef = React.createRef();
  
  componentDidUpdate() {
    const { index } = this.props.subtitles;
    const prevWordsRef = this.prevWordsRef.current;
    const currentWordsRef = this.currentWordsRef.current;
    
    if (this.prevSubIndex < index && prevWordsRef && currentWordsRef) {
      this.animateSubs();
    }
    
    if (currentWordsRef) {
      currentWordsRef.style.transform = '';
      currentWordsRef.style.opacity = '';
      currentWordsRef.style.transition = 'none';
    }
    
    if (prevWordsRef) {
      prevWordsRef.style.transform = '';
      prevWordsRef.style.opacity = '';
      prevWordsRef.style.transition = 'none';
    }
    
    this.prevSubIndex = index;
  }
  
  onClickWrap(e) {
    if (e.target.classList && e.target.classList.contains('word-translate')) {
      const word = e.target.textContent;
      
      console.log(word);
    }
  }
  
  componentWillReact() {
    const {subtitles: subs} = this.props;
    
    if (subs.index === subs.startIndex) {
      this.prevSubIndex = undefined;
    }
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
  
  getText(isPrev) {
    const {subtitles: subs} = this.props;
    const text = subs.getSub(isPrev ? subs.index - 1 : undefined).text;
    
    return isPrev ? text : <TextWithDictionary text={text} />;
  }
  
  renderOneSub() {
    return  <div className={s.words} ref={this.currentWordsRef}>
      {this.getText()}
    </div>;
  }
  
  renderTwoSubs() {
    return <React.Fragment>
      <div className={s.words} ref={this.prevWordsRef}>
        {this.getText(true)}
      </div>
      
      <div className={s.words} ref={this.currentWordsRef}>
        {this.getText()}
      </div>
    </React.Fragment>;
  }
  
  render() {
    const {subtitles: subs} = this.props;
    
    return <div onClick={this.onClickWrap} className={s.wrap}>
      {this.prevSubIndex < subs.index ? this.renderTwoSubs() : this.renderOneSub()}
    </div>;
  }
}
