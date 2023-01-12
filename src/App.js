import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './routers';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { setIsLoggedIn, setProfile } from './sections/user';

export default function App() {
  const dispatch = useDispatch();

  const getProfile = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    dispatch(setIsLoggedIn(Boolean(isLoggedIn)));
    dispatch(setProfile({ username }));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
