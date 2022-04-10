import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'

const StyledAccordion = styled.div` 
    margin: 16px 0;
    
    .accordion-container {
        margin: 16px 0;

        p {
          line-height: 30px;
        }
    }
`

export default function SimpleAccordion({ title, content }) {
  return (
    <StyledAccordion>
      <Accordion className='accordion-container'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <h3>{title}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>{content}</p>
        </AccordionDetails>
      </Accordion>
    </StyledAccordion>
  );
}
