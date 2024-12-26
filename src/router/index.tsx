import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Home from '@@pages/Home';
import Lecture from '@@pages/Lecture';
import Login from '@@pages/Login';
import MyPage from '@@pages/MyPage';
import Purchase from '@@pages/Purchase';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.AUTH)} element={<Login />} />
      {/* <Route path={pathGenerator(PAGES.AUTH) + '/register'} element={<Register />} /> */}

      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />
      <Route path={pathGenerator(PAGES.LECTURE)} element={<Lecture />} />
      <Route path={pathGenerator(PAGES.MY_PAGE)} element={<MyPage />} />

      <Route path={pathGenerator(PAGES.PURCHASE)} element={<Purchase />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
