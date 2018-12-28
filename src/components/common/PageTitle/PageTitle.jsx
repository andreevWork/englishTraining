import React from 'react';
import { Helmet } from "react-helmet";
import s from './PageTitle.sass';

export class PageTitle extends React.Component {
  render() {
    return <div className={s.title}>
      <Helmet>
        <title>Englishsubs.ru - {this.props.children}</title>
      </Helmet>
      {this.props.children}
    </div>;
  }
}
