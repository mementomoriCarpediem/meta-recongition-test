import * as React from 'react';
import Entry from './pages/entry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ready from './pages/ready';
import { PATH } from './routes/path';
import Quiz from './pages/quiz';
import Guess from './pages/guess';
import Submit from './pages/submit';
import Result from './pages/result';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.entry} element={<Entry />} />
        <Route path={PATH.ready} element={<Ready />} />
        <Route path={PATH.quiz} element={<Quiz />} />
        <Route path={PATH.guess} element={<Guess />} />
        <Route path={PATH.submit} element={<Submit />} />
        <Route path={PATH.result} element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
