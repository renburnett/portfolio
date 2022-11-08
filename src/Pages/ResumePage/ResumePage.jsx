import { Grid } from 'semantic-ui-react';
import resume from '../../assets/resume.pdf';
import './ResumePage.scss';

const ResumePage = () => (
  <Grid
    stackable
    textAlign='center'
  >
      <Grid.Column >
        <iframe
          id="iframe-pdf"
          title="resume"
          type="application/pdf"
          src={resume}
        />
      </Grid.Column>
    </Grid>
);

export default ResumePage;