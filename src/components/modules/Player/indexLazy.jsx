import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const FullPlayerLazy = Loadable({
  loader: () => import('./index'),
  loading: LoaderComponent,
});
