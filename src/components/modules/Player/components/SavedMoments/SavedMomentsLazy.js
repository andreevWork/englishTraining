import Loadable from 'react-loadable';
import { LoaderComponent } from 'common/LoaderComponent/LoaderComponent';

export const SavedMomentsLazy = Loadable({
  loader: () => import('./SavedMoments'),
  loading: LoaderComponent,
});
