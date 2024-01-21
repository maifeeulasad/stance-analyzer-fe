import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { CustomLayout } from './layout/CustomLayout';
import { LazyLanding } from './component/landing/LazyLanding';

const App = () => (
  <BrowserRouter>
    <CustomLayout>
      <Routes>
        <Route path="/landing" element={<LazyLanding />} />
        <Route
          path="*"
          element={<Navigate to="/landing" replace />}
        />
      </Routes>
    </CustomLayout>
  </BrowserRouter >
);

// eslint-disable-next-line import/no-default-export
export default App;
