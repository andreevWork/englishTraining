import React from 'react';
import cn from 'classnames';
import autobind from 'autobind-decorator';

import s from './WithKey.sass';

export class WithKey extends React.PureComponent {
  
  static KeyCodes = {
    Space: 32,
    Enter: 13,
    F: 70,
    Esc: 27,
    S: 83,
    Z: 90,
    X: 88,
    C: 67,
    '◄': 37,
    '►': 39,
    R: 82
  };
  
  state = {
    animated: false
  };
  
  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  }
  
  @autobind
  onKeyUp(event) {
    if (WithKey.KeyCodes[this.props.name] === event.keyCode && !this.props.disabled) {
      setTimeout(this.props.action, 300);
      
      this.setState({
        animated: true
      })
    }
  }
  
  @autobind
  animationEnd() {
    this.setState({
      animated: false
    })
  }
  
  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
  }
  
  render() {
    return <span
      onClick={!this.props.disabled ? this.props.action : undefined}
      className={cn(s.wrap, this.props.className)}
    >
      {React.cloneElement(React.Children.only(this.props.children), { disabled: this.props.disabled })}
      
      <div
        className={cn(
          s.key,
          this.state.animated && s.anim,
          this.props.withMargin && s.withMargin,
          this.props.disabled && s.disabled
        )}
        onAnimationEnd={this.animationEnd}
      >
        {this.props.name}
      </div>
    </span>;
  }
}
