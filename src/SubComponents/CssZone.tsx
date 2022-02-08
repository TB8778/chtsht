import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Code from '../Code';

export function CssZone() {
  const lang = 'css';
  const code1 = ``;
  return (
    <React.Fragment>
      <h4 id="CSS-anchor">CSS</h4>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>INSERT UNION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Code code={code1} language={lang} />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}
