import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const JustShowLazy = Loadable({
  loader: () => import('./JustShow'),
  loading: LoaderComponent,
});
