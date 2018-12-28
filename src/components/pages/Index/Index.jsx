import React from 'react';
import s from './Index.sass';
import autobind from 'autobind-decorator';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';
import { SerialThumb } from 'common/Thumb/SerialThumb/SerialThumb';
import { PageTitle } from 'common/PageTitle/PageTitle';

export class Index extends React.Component {
  @autobind
  renderSerials({ items }) {
    return items.values().map(serial => <SerialThumb key={serial.id} {...serial} />);
  }
  
  render() {
    return <React.Fragment>
      <PageTitle>
        TV Series
      </PageTitle>
      <div className={s.serials}>
        <SerialsLoaderContainer>
          {this.renderSerials}
        </SerialsLoaderContainer>
      </div>
    </React.Fragment>;
  }
}
