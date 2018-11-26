import React from 'react';
import { ThumbWrap } from 'common/Thumb/elems/Wrap/ThumbWrap';
import { ThumbInfo } from 'common/Thumb/elems/Info/ThumbInfo';

export class SerialThumb extends React.PureComponent {
  render() {
    return <ThumbWrap {...this.props} href={`/serial/${this.props.id}/`}>
      <ThumbInfo {...this.props} />
    </ThumbWrap>;
  }
}
