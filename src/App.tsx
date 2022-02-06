import React from 'react';
import './App.css';
import Code from './Code';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ImportHighlightJs } from './ImportHighlightJs';

const code = `INSERT [dbo].[TableToInsert] ([Name], [Description], [CreatedBy], [CreatedOn])
SELECT x.[Name], x.[Description], 1, GETUTCDATE()
FROM (
    SELECT  N'My name 1' AS 'Name', N'My description 1' AS 'Description'
    UNION
    SELECT  N'My name 2', N'My description 2'
    UNION
    SELECT  N'My name 3', N'My description 3'
) x
LEFT JOIN [dbo].[TableToInsert] t ON t.[Name] = x.[Name]
WHERE t.[Name] IS NULL
`;

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
        <h1 id="SQL-anchor">SQL</h1>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>INSERT UNION</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Code code={code} language="sql" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
