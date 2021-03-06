import * as React from "react";
import { createIcon } from 'common/Icons/Icon';

const OptionsIconSvg = () => <g>
  <path d="M38 0C17 0 0 17 0 38s17 38 38 38 38-17 38-38S59 0 38 0zM38 72C19.2 72 4 56.8 4 38S19.2 4 38 4s34 15.2 34 34S56.8 72 38 72zM38 31c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S41.9 31 38 31zM38 41c-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3s3 1.3 3 3C41 39.6 39.7 41 38 41zM58 31c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S61.9 31 58 31zM58 41c-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3s3 1.3 3 3C61 39.6 59.7 41 58 41zM18 31c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S21.9 31 18 31zM18 41c-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3s3 1.3 3 3C21 39.6 19.7 41 18 41z"/>
</g>;

export const OptionsIcon = createIcon(
  OptionsIconSvg,
  {
    viewBox: "0 0 76 76"
  }
);
