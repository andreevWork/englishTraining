import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const BottomBarLazy = Loadable({
  loader: () => import('./BottomBar'),
  loading: LoaderComponent,
});
