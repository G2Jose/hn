import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

const epicCreator = (
  actionToListenFor,
  urlToFetchIds,
  urlCreator,
  actionToDispatch
) => action$ =>
  action$.ofType(actionToListenFor().type).switchMap(() =>
    ajax
      .getJSON(urlToFetchIds)
      .mergeMap(arrayOfIds => Observable.from(arrayOfIds))
      .take(10)
      .mergeMap(id => ajax.getJSON(urlCreator(id)))
      .map((item, index) => actionToDispatch({ item, index }))
  );

export default epicCreator;
