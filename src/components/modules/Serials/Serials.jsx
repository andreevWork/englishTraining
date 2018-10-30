import React from 'react';
import { ThumbWrap } from 'common/Thumb/Wrap/ThumbWrap';
import { SerialsLoaderContainer } from 'modules/LoaderContainer/Serials/LoaderContainer.Serials';
import autobind from 'autobind-decorator';

export class Serials extends React.PureComponent {
  @autobind
  renderSerials({ items }) {
    return items.values().map(serial => <ThumbWrap
      key={serial.id}
      posterSrc={serial.posterSrc}
      href={`/episodes/${serial.id}`}
    />);
  }
  
  render() {
    return <SerialsLoaderContainer>
      {this.renderSerials}
    </SerialsLoaderContainer>;
  }
}

