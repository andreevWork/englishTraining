import * as React from "react";
import { createIcon } from 'common/Icons/Icon';

const SubtitlesIconSvg = () => <path d="M384 42.7H42.7C19.2 42.7 0 61.9 0 85.3v256C0 364.8 19.2 384 42.7 384H384c23.5 0 42.7-19.2 42.7-42.7v-256C426.7 61.9 407.5 42.7 384 42.7zM42.7 213.3H128V256H42.7V213.3zM256 341.3H42.7v-42.7H256V341.3zM384 341.3h-85.3v-42.7H384V341.3zM384 256H170.7v-42.7H384V256z"/>;

export const SubtitlesIcon = createIcon(
  SubtitlesIconSvg,
  {
    viewBox: "0 0 426.7 426.7"
  }
);
