import React from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import s from './Bar.sass';

export class Bar extends React.PureComponent {
  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.close} className={cn(s.bar, this.props.isOpen && s.show)}>
        <div className={s.content}>
          <Link to="/history/translate" className={s.button}>
            History of translate
          </Link>
          <div className={s.button}>
            Close
          </div>
        </div>
      </div>,
      document.getElementById('app')
    );
  }
}
