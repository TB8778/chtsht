import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Code from '../Code';

export function JsZone() {
  const lang = 'javascript';

  const code1 = ``;
  return (
    <React.Fragment>
      <h4 id="JS-anchor">JS</h4>
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
