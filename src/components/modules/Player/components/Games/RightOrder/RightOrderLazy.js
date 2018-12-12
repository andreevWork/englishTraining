import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const RightOrderLazy = Loadable({
  loader: () => import('./RightOrder'),
  loading: LoaderComponent,
});
