import React, { useState, useEffect, Suspense } from 'react';
import AllPlayersList from './AllPlayersList.jsx';
import Header from './Header.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <AllPlayersList />
      </div>
    )
  }
  }


  export default App;