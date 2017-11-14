import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import { createLogger }                 from 'redux-logger';
import reducers                         from '../reducers';
import { loadState }                    from '../utils';

const { devToolsExtension } = window;
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore (persistedState = loadState()) {
return createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  persistedState,
  devToolsExtension && devToolsExtension()
  )
}
