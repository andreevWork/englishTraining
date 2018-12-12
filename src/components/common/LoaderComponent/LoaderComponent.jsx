import React from 'react';

import s from './LoaderComponent.sass';
import { Spinner } from 'common/Spinner/Spinner';

export const LoaderComponent = () => <div className={s.container}>
  <Spinner />
</div>;
