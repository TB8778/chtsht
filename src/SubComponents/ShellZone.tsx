import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Code from '../Code';

export function ShellZone() {
  const lang = 'shell';

  const code1 = `
  while read line do
    if [[ $line =~ $regex ]]; then
          # work here
    fi
  done < file.txt
`;
  return (
    <React.Fragment>
      <h4 id="Shell-anchor">Shell</h4>
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
