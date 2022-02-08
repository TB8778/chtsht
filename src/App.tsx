import React from 'react';
import './App.css';

import { ImportHighlightJs } from './ImportHighlightJs';
import { SqlZone } from './SubComponents/SqlZone';
import { DockerZone } from './SubComponents/DockerZone';
import { HtmlZone } from './SubComponents/HtmlZone';
import { CssZone } from './SubComponents/CssZone';
import { JsZone } from './SubComponents/JsZone';
import { AngularZone } from './SubComponents/AngularZone';
import { DotnetZone } from './SubComponents/DotnetZone';
import { ShellZone } from './SubComponents/ShellZone';
import { PowerShellZone } from './SubComponents/PowerShellZone';

function App() {
  return (
    <div className="App">
      <ImportHighlightJs></ImportHighlightJs>
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
            <a href={'#SQL-anchor'}>SQL</a>
          </div>
          <div>
            <a href={'#Shell-anchor'}>Shell</a>
            <a href={'#PowerShell-anchor'}>PowerShell</a>
            <a href={'#Docker-anchor'}>Docker</a>
          </div>
        </nav>
      </header>

      <div className="content">
        <HtmlZone></HtmlZone>
        <CssZone></CssZone>
        <JsZone></JsZone>
        <AngularZone></AngularZone>
        <DotnetZone></DotnetZone>
        <ShellZone></ShellZone>
        <PowerShellZone></PowerShellZone>
        <DockerZone></DockerZone>
        <SqlZone></SqlZone>
      </div>
    </div>
  );
}

export default App;
