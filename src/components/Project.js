import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Project extends Component {
  render() {
    return (
      <Card style={{maxWidth: '35vh'}}>
        <Image src='http://pngimg.com/uploads/dinosaur/dinosaur_PNG16575.png' wrapped ui={false} />
      </Card>
    )
  }
}

export default Project;