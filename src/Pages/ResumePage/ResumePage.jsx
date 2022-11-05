import { Grid } from 'semantic-ui-react';
import resume from '../../assets/resume.pdf';

// Create Document Component
const ResumePage = () => (
  <Grid className='resume-grid' stackable textAlign='center'>
      <Grid.Column >
        <iframe id="iframepdf" src={resume}></iframe>
      </Grid.Column>
    </Grid>
);

export default ResumePage;