import * as React from "react";
import {observer, inject} from "mobx-react";

@inject('store')
@observer
export class GameOrPlayer extends React.Component {
  render() {
    const {gameEl: GameEl, playerEl: PlayerEl, momentsEl: MomentsEl} = this.props;
    
    if (this.props.store.isMomentsPopup() && MomentsEl) {
      return <MomentsEl />
    }
    
    return this.props.store.isGameMod() ? <GameEl /> : <PlayerEl />;
  }
}
