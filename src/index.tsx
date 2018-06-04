import { Formio } from 'formiojs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { FieldCustomText } from './customComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

Formio.registerComponent(FieldCustomText.ComponentKey, FieldCustomText);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
