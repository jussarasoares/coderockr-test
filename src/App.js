import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalProvider } from 'react-modal-hook';

import './styles.css';

import TopBar from './components/TopBar';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <TopBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/new-post" exact component={NewPost} />
          <Route component={NotFound} />
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
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
