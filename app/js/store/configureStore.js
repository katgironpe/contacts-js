import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import { createLogger }                 from 'redux-logger';
import reducers                         from '../reducers';

const { devToolsExtension } = window;
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore() {
return createStore(
    reducers,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}
