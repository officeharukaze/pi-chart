import { createElement as ele } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from "react-redux";
import registerServiceWorker from './lib/registerServiceWorker';
import './styles/index.css';

const getReducer = () => {
  const reducers = require('./reducers').default;
  return combineReducers({
    ...reducers,
  });
}
const store = createStore(
  getReducer(),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
const renderApp = () => {
  const App = require('./components/App.js').default;
  render(ele(Provider, { store }, ele(App)), document.getElementById('root'));
};

renderApp();
registerServiceWorker();
