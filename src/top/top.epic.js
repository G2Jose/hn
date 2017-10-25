import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import { fetchTopStories, receivedTopStories } from 'top/top.actions';

const fetchTopStoriesEpic = action$ =>
  action$
    .ofType(fetchTopStories().type)
    .mergeMap(action =>
      ajax
        .getJSON(
          `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
        )
        .mergeMap(arrayOfIds => Observable.from(arrayOfIds))
        .mergeMap(id =>
          ajax.getJSON(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          )
        )
        .reduce((x, y) => [...x, y], [])
    )
    .map(receivedTopStories);

export default fetchTopStoriesEpic;
