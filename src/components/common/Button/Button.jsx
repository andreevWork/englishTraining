import React from 'react';
import cn from 'classnames';

import s from './Button.sass';

export class Button extends React.PureComponent {
  render() {
    const className = cn(
      s.button,
      this.props.className,
      this.props.disabled && s.disabled
    );
    
    return <div
      onClick={this.props.onClick}
      className={className}
    >
      {this.props.children}
    </div>;
  }
}
