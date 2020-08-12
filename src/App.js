import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopBar from './components/TopBar';
import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />
        <Route path="/contact" exact component={Contact} />

        {/* <Route component={Default} /> */}
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
