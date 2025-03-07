import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {useEffect} from 'react'
import LoggedIn from './LoggedIn';
import RequireLogin from './RequireLogin';
import Kudos from './features/kudos/Kudos';
import ErrorBoundary from './components/error/ErrorBoundary';
import Maintenance from './Maintenance';
import NotFound from './not-found';
import Navbar from './components/nav/Navbar';
import { changeLogin, verifyUser } from './features/login/loginSlice';
import { useDispatch } from 'react-redux';
import KudosGiver from './features/kudos/KudosGiver';
import Logout from './features/login/Logout';


const Login = lazy(() => import ('./features/login/Login'))

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   
    const token = sessionStorage.getItem('token')
    const refresh = sessionStorage.getItem('refresh')
    if(token && refresh){
      dispatch(verifyUser());
   
    }
    else{
        dispatch(changeLogin(false))
    }
   
    }, [])

  return (
    <Router>
    <ErrorBoundary>
        <Routes>
        
            <Route path='/login' element=<LoggedIn><Login/></LoggedIn>/>
            <Route path='/logout' element=<RequireLogin><Logout/></RequireLogin>/>
            <Route path='/kudos' element=<RequireLogin><Navbar/><Kudos/></RequireLogin>/>
            <Route path='/kudos-giver' element=<RequireLogin><Navbar/><KudosGiver/></RequireLogin>/>
            <Route path='/maintenance' element={<Maintenance />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
    </Router>
  );
}

export default App;
