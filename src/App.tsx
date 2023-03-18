import * as React from 'react';
import Entry from './pages/entry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ready from './pages/ready';
import { PATH } from './routes/path';
import Quiz from './pages/quiz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.entry} element={<Entry />} />
        <Route path={PATH.ready} element={<Ready />} />
        <Route path={PATH.quiz} element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
