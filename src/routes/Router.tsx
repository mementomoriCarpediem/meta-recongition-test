import React from 'react';
import Ready from '../pages/ready';
import Entry from '../pages/entry';
import Guess from '../pages/guess';
import Submit from '../pages/submit';
import { Route, Routes } from 'react-router-dom';
import Result from '../pages/result';
import { PATH } from './path';
import Quiz from '../pages/quiz';
import { useRouteChangeTracker } from '../hooks/useRouteChangeTracker';

export function Router() {
  useRouteChangeTracker();
  return (
    <Routes>
      <Route path={PATH.entry} element={<Entry />} />
      <Route path={PATH.ready} element={<Ready />} />
      <Route path={PATH.quiz} element={<Quiz />} />
      <Route path={PATH.guess} element={<Guess />} />
      <Route path={PATH.submit} element={<Submit />} />
      <Route path={PATH.result} element={<Result />} />
    </Routes>
  );
}
