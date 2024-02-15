import { Grid } from 'semantic-ui-react';
import CONSTANTS from '../../constants.js';
import resumePdf from '../../assets/resume.pdf';
import { Document, Page } from 'react-pdf';
import './CV.scss';

const CV = () => (
  // <Grid
  //   stackable
  //   textAlign='center'
  // >
  //     <Grid.Column >
  //       <iframe
  //         id='iframe-pdf'
  //         title='resume'
  //         type='application/pdf'
  //         src={resumePdf}
  //         allow='fullscreen'
  //       />
  //       <a href={CONSTANTS.LINKED_IN_URL}>
  //         <img
  //           title="Ren Burnett's Resume"
  //           alt="Ren Burnett's Resume"
  //           id='pdf-png'
  //           src={resumePng}
  //         />
  //       </a>
  //     </Grid.Column>
  //   </Grid>
  // TODO: fixme
  <Grid
    stackable
    textAlign='center'
  >
      <Grid.Column >
        <a href={CONSTANTS.LINKED_IN_URL}>
          <Document file={resumePdf}>
            <Page pageNumber={1} />
          </Document>
        </a>
      </Grid.Column>
    </Grid>
);

export default CV;