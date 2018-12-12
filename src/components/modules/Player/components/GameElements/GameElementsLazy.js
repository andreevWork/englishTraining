import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const GameElementsLazy = Loadable({
  loader: () => import('./GameElements'),
  loading: LoaderComponent,
});
