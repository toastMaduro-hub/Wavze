import React from 'react';
import { render } from 'react-dom';
import App from './src/components/App.jsx';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);



// import React from 'react';
// import { render } from 'react-dom';
// import App from './src/components/App.jsx';

// render(<App />, document.getElementById('root'));


