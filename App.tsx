import React from 'react';
import Root from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Root /> 
    </Provider>
  );
}

export default App;
