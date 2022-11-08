import { Grid } from 'semantic-ui-react';
import resumePdf from '../../assets/resume.pdf';
import resumePng from '../../assets/resume.png';
import CONSTANTS from '../../constants';
import './ResumePage.scss';

const ResumePage = () => (
  <Grid
    stackable
    textAlign='center'
  >
      <Grid.Column >
        <iframe
          id='iframe-pdf'
          title='resume'
          type='application/pdf'
          src={resumePdf}
          allow='fullscreen'
        />
        <a href={CONSTANTS.LINKED_IN_URL}>
          <img id='pdf-png' src={resumePng}/>
        </a>
      </Grid.Column>
    </Grid>
);

export default ResumePage;