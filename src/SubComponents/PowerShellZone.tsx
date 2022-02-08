import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Code from '../Code';

export function PowerShellZone() {
  const lang = 'powershell';

  const code1 = `
  foreach($line in Get-Content .\\file.txt) {
    if($line -match $regex){
        # Work here
    }
  }
`;
  return (
    <React.Fragment>
      <h4 id="PowerShell-anchor">PowerShell</h4>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Foreach line in file</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Code code={code1} language={lang} />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}
