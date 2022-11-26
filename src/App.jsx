import React from 'react'
import './App.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostsContainer from './components/PostsContainer/PostsContainer';
import WorkplaceContainer from './components/WorkplaceContainer/WorkplaceContainer';
import AboutContainer from './components/AboutContainer/AboutContainer';
import ContactContainer from './components/ContactContainer/ContactContainer';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutContainer />
      <WorkplaceContainer />
      <PostsContainer />
      {/* <ContactContainer /> */}
      <Footer />
    </div>
  )
}

export default App
