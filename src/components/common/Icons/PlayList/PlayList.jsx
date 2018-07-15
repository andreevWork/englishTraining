import * as React from "react";
import { createIcon } from 'common/Icons/Icon';

const PlayListIconSvg = () => <g>
  <rect x="56" y="136" width="16" height="16"/>
  <rect x="24" y="136" width="16" height="16"/><rect x="88" y="136" width="16" height="16"/><rect x="120" y="136" width="16" height="16"/><rect x="152" y="136" width="16" height="16"/><rect x="184" y="136" width="16" height="16"/><rect x="216" y="136" width="16" height="16"/><rect x="248" y="136" width="16" height="16"/><rect x="280" y="136" width="16" height="16"/><rect x="312" y="136" width="16" height="16"/><rect x="344" y="136" width="16" height="16"/><rect x="376" y="136" width="16" height="16"/><rect x="408" y="136" width="16" height="16"/><rect x="440" y="136" width="16" height="16"/><rect x="56" y="392" width="16" height="16"/><rect x="24" y="392" width="16" height="16"/><rect x="88" y="392" width="16" height="16"/><rect x="120" y="392" width="16" height="16"/><rect x="152" y="392" width="16" height="16"/><rect x="184" y="392" width="16" height="16"/><rect x="216" y="392" width="16" height="16"/><rect x="248" y="392" width="16" height="16"/><rect x="280" y="392" width="16" height="16"/><rect x="312" y="392" width="16" height="16"/><rect x="344" y="392" width="16" height="16"/><rect x="376" y="392" width="16" height="16"/><rect x="408" y="392" width="16" height="16"/><rect x="440" y="392" width="16" height="16"/><path d="M472 104h-32V80c0-4.4-3.6-8-8-8h-32V48c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v24H48c-4.4 0-8 3.6-8 8v24H8c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8h464c4.4 0 8-3.6 8-8V112C480 107.6 476.4 104 472 104zM96 56h288v16H96V56zM56 88h368v16H56V88zM464 424H16V120h448V424z"/><path d="M200 346.5c0 4.4 3.6 8 8 8 1.6 0 3.2-0.5 4.6-1.4l106.5-74.5c0.8-0.5 1.4-1.2 2-2 2.5-3.6 1.7-8.6-2-11.1l-106.5-74.5c-1.3-0.9-2.9-1.4-4.6-1.4 -4.4 0-8 3.6-8 8V346.5zM216 212.8L300.6 272 216 331.2V212.8z"/>
</g>;

export const PlayListIcon = createIcon(
  PlayListIconSvg,
  {
    viewBox: "0 0 480 480"
  }
);
