import React from 'react';
import './assets/styles/base.scss';
import Navigation from './components/Navigation'
import PageRenderer from './page-renderer'
import PostRenderer from './post-renderer'
import CreatePost from './components/blog-components/create-post'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const user = {
    firstName : "Ram",
    lastName : "Petla"
  }
  
  return (
    <Router>
      <Navigation user = {user}/>
      <Switch>
        <Route path="/blog/post-view/:postId" component={PostRenderer} /> 
        <Route path="/blog/my-posts/create-post" component={CreatePost} />
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render= {() => <Redirect to="/home" />} />
        <Route component = {() => 404} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
