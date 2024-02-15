import { Grid } from 'semantic-ui-react';
import resumePdf from '../../assets/resume.pdf';
import resumePng from '../../assets/resume.png';
import CONSTANTS from '../../constants';
import './CV.scss';

const CV = () => (
  <Grid
    stackable
    textAlign='center'
  >
      <Grid.Column >
        <iframe
          id='iframe-pdf'
          title='resume'
          src={resumePdf}
          allow='fullscreen'
        />
        <a href={CONSTANTS.LINKED_IN_URL}>
          <img
            title="Ren Burnett's Resume"
            alt="Ren Burnett's Resume"
            id='pdf-png'
            src={resumePng}
          />
        </a>
      </Grid.Column>
    </Grid>
);

export default CV;