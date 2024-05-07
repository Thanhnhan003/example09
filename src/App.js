import logo from './logo.svg';
import './App.css';
import "./assets/sass/app.scss";
// import "./assets/js/script.js"
// import './assets/js/script.js'

import Header from './Layouts/Header';
import Home from './Layouts/Home';
import Footer from './Layouts/Footer';
import { Outlet } from 'react-router-dom';
import Overlay from './Layouts/Overlay';
import Main from './Layouts/Main';
import Notification from './Layouts/Notification';
import Modal from './Layouts/Modal';

function App() {

  return (
    <div>
      <Modal />
      <Overlay />
      <Notification />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
