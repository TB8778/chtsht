import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div>
            <a href={'#HTML-anchor'}>HTML</a>
            <a href={'#CSS-anchor'}>CSS</a>
            <a href={'#JS-anchor'}>JS</a>
          </div>
          <div>
            <a href={'#Angular-anchor'}>Angular</a>
          </div>
          <div>
            <a href={'#NET-anchor'}>.NET</a>
          </div>
          <div>
            <a href={'#Shell-anchor'}>Shell</a>
            <a href={'#Docker-anchor'}>Docker</a>
          </div>
        </nav>
      </header>

      <div className="content">
        <h1 id="HTML-anchor">HTML</h1>
        <h1 id="CSS-anchor">CSS</h1>
        <h1 id="JS-anchor">JS</h1>
        <h1 id="Angular-anchor">Angular</h1>
        <h1 id="NET-anchor">.NET</h1>
        <h1 id="Shell-anchor">Shell</h1>
        <h1 id="Docker-anchor">Docker</h1>
      </div>
    </div>
  );
}

export default App;
