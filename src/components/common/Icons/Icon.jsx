import * as React from "react";
import cn from "classnames";

export function createIcon(IconSvgCode, { className, ...svgProps }) {
  
  return class extends React.PureComponent {
    static defaultProps = {
      onClick: () => {}
    };
  
    render() {
      const classNames = cn(
        'icon',
        'hover',
        className,
        this.props.className,
        this.props.disabled && 'icon-disabled'
      );
      
      return <svg
        className={classNames}
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
        onClick={this.props.onClick}
      >
        <IconSvgCode />
      </svg>;
    }
  }
}

