import React from 'react';
import autobind from 'autobind-decorator';

import s from './Counter.sass';

export class Counter extends React.PureComponent {
  
  static defaultProps = {
    min: 0,
    max: Infinity
  };
  
  constructor(...args) {
    super(...args);
    
    this.state = {
      value: this.props.value
    }
  }
  
  @autobind
  onClickAdd() {
    this.onChange(this.state.value + 1);
  }
  
  @autobind
  onClickReduce() {
    this.onChange(this.state.value - 1);
  }
  
  onChange(newState) {
    this.setState({
      value: newState
    }, () => {
      this.props.onChange(this.state.value);
    });
  }
  
  render() {
    return <div className={s.container}>
      {this.state.value > this.props.min && <div onClick={this.onClickReduce} className={s.control}>
        -1
      </div>}
      <div className={s.value}>
        {this.state.value}
      </div>
      {this.state.value < this.props.max && <div onClick={this.onClickAdd} className={`${s.control} ${s.controlMinus}`}>
        +1
      </div>}
    </div>;
  }
}
