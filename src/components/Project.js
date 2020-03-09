import React, { Component } from 'react';
import { Card, Image, Header, CardContent, Button, Icon} from 'semantic-ui-react';
import rubyLogo from '../images/rubyLogo.png';
import jsLogo from '../images/jsLogo.png';
import pythonLogo from '../images/pythonLogo.png';
import githubDefault from '../images/githubDefault.png';
import tsLogo from '../images/tsLogo.png';
import cLogo from '../images/cLogo.png';
import reactLogo from '../images/reactLogo.png';

class Project extends Component {

  state = {
    languageLogo: null
  }

  componentDidMount() { 
    const { primaryLanguage } = this.props.project;

    switch(primaryLanguage) {
      case 'JavaScript':
        this.setState({languageLogo: jsLogo})
        break;
      case 'TypeScript':
        this.setState({languageLogo: tsLogo})
        break;
      case 'Ruby':
        this.setState({languageLogo: rubyLogo})
        break;
      case 'Python':
        this.setState({languageLogo: pythonLogo})
        break;
      default:
        this.setState({languageLogo: githubDefault})
    }
  }

  render() {
    return (
      <Card href={this.props.project.url} style={{maxWidth: '35vh'}}>
        <Image src={this.state.languageLogo} wrapped ui={false} />
        <Header as="h3" color="teal">{this.props.project.name}</Header>
        <CardContent>{this.props.project.description}</CardContent>
        {this.props.project.homepageUrl ? 
          <Button animated href={this.props.project.homepageUrl} secondary>
            <Button.Content visible>live project</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
            : 
          <Button animated secondary>
            <Button.Content visible>project not live yet</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button> }
      </Card>
    )
  }
}

export default Project;