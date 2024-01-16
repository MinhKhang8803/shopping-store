import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Other components or pages can be added here */}
        <Navbar />
      </div>
    </Provider>
  );
};

export default App;