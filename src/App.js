import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthProvider from './context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
