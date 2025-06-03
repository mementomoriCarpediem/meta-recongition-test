import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';

export default function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Router />
    </BrowserRouter>
  );
}
