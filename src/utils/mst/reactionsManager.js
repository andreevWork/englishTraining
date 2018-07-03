export function reactionsManager(reactions) {
  return Component => class extends Component {
    
    _reactions;
    
    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      
      this._reactions = reactions
        .map(ReactionClass => new ReactionClass())
        .map(reactionInstance => reactionInstance.run());
    }
  
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount();
      
      this._reactions.forEach(reactionInstance => reactionInstance.destroy());
    }
  }
}
