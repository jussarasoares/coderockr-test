import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />

        {/* <Route component={Default} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
