import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NavTabs from "./components/NavTabs/NavTabs";
import Search from "./components/Pages/Search";
import Saved from "./components/Pages/Saved";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Pages from './components/Pages';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>   
//       </div>
//     );
//   }
// }

// export default App;
