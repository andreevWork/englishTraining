import * as React from "react";

import { observer, inject } from "mobx-react";
import { ProgressBarBase } from 'player/PlayerElements/controls/ProgressBar/ProgressBar';

@inject('player', 'episodes', 'subtitles')
@observer
export class ProgressBarPlayer extends ProgressBarBase {}
