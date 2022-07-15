import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import ListExample from './pages/list-example';
import FormExample from './pages/form-example';
import GraficExample from './pages/grafic-example';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact="true" path="/" element={<ListExample />} />
          <Route exact="true" path="/new" element={<FormExample />} />
          <Route exact="true" path="/grafics" element={<GraficExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
