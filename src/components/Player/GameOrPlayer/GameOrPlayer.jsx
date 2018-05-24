import * as React from "react";
import {observer, inject} from "mobx-react";

@inject('store')
@observer
export class GameOrPlayer extends React.Component {
  render() {
    const {gameEl: GameEl, playerEl: PlayerEl} = this.props;
    
    return this.props.store.isGameMod ? <GameEl /> : <PlayerEl />;
  }
}
