import * as React from "react";
import { createIcon } from 'common/Icons/Icon';

const LeftArrowSvg = () => <g>
 <path d="M97.1 225.9c0-8.1 3.1-16.2 9.3-22.4L300.7 9.3c12.4-12.4 32.4-12.4 44.8 0 12.4 12.4 12.4 32.4 0 44.7L173.5 225.9l171.9 171.9c12.4 12.4 12.4 32.4 0 44.7 -12.4 12.4-32.4 12.4-44.7 0l-194.3-194.3C100.2 242.1 97.1 234 97.1 225.9z"/>
</g>;

export const LeftArrow = createIcon(
  LeftArrowSvg,
  {
    viewBox: "0 0 452 452"
  }
);
