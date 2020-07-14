import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { Document, Page, pdfjs } from 'react-pdf';
import ResumeJan20 from '../../src/FullstackJuly20.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class Resume extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }

  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Grid stackable textAlign='center' verticalAlign='middle'>
        <Grid.Column>
          <Grid.Row>
            <Container as={Link} to={ResumeJan20} target="_blank" download>
              <Document
                file={ResumeJan20}
                onLoadSuccess={this.onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                <Page pageNumber={pageNumber}></Page>
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </Container>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Resume;