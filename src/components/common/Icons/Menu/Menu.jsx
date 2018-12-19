import * as React from "react";
import { createIcon } from 'common/Icons/Icon';

const MenuIconSvg = () => <g>
  <path d="M28 0C12.6 0 0 12.6 0 28s12.6 28 28 28 28-12.6 28-28S43.4 0 28 0zM28 54C13.7 54 2 42.3 2 28S13.7 2 28 2s26 11.7 26 26S42.3 54 28 54z"/><path d="M40 16H16c-0.6 0-1 0.4-1 1s0.4 1 1 1h24c0.6 0 1-0.4 1-1S40.6 16 40 16z"/><path d="M40 27H16c-0.6 0-1 0.4-1 1s0.4 1 1 1h24c0.6 0 1-0.4 1-1S40.6 27 40 27z"/><path d="M40 38H16c-0.6 0-1 0.4-1 1s0.4 1 1 1h24c0.6 0 1-0.4 1-1S40.6 38 40 38z"/>
</g>;

export const MenuIcon = createIcon(
  MenuIconSvg,
  {
    viewBox: "0 0 56 56"
  }
);
