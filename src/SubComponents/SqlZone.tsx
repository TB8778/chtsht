import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Code from '../Code';
import React from 'react';

export function SqlZone() {
  const lang = 'sql';

  const code1 = `INSERT [dbo].[TableToInsert] ([Name], [Description], [CreatedBy], [CreatedOn])
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

  const code2 = '';
  return (
    <React.Fragment>
      <h4 id="SQL-anchor">SQL</h4>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>INSERT UNION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Code code={code1} language={lang} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Code code={code2} language={lang} />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}
