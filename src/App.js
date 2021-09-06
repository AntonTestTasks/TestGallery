import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import PhotosContainer from './components/Photos/PhotosContainer';
import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import NavContainer from './components/Nav/NavContainer';
import PhotoContainer from './components/Photo/PhotoContainer';
function App() {
  return (<BrowserRouter>
  <div className="app-wrapper">
    <NavContainer></NavContainer>
    <Redirect to="/photos"/>
    <div className="content">
      {/* <Route path="/search" render={() => <Search />} /> */}
      <Route path="/photos" render={() => <PhotosContainer />} />
      <Route path="/photo" render={() => <PhotoContainer/>} />
    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
