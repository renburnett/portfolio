import React, { useEffect, useState } from 'react';
import { Card, Image, Header, CardContent, Button, Icon} from 'semantic-ui-react';
import rubyLogo from '../images/rubyLogo.png';
import jsLogo from '../images/jsLogo.png';
import pythonLogo from '../images/pythonLogo.png';
import githubDefault from '../images/githubDefault.png';
import tsLogo from '../images/tsLogo.png';

const Project = props =>  {
  const [ languageLogo, setLanguageLogo ] = useState(null);
  const { primaryLanguage } = props.project;

  useEffect(() => {
    switch(primaryLanguage) {
      case 'JavaScript':
        setLanguageLogo(jsLogo);
        break;
      case 'TypeScript':
        setLanguageLogo(tsLogo);
        break;
      case 'Ruby':
        setLanguageLogo(rubyLogo);
        break;
      case 'Python':
        setLanguageLogo(pythonLogo);
        break;
      default:
        setLanguageLogo(githubDefault);
    }
  }, [primaryLanguage]);

  return (
    <Card href={props.project.url} style={{maxWidth: '35vh'}}>
      <Image src={languageLogo} wrapped ui={false} />
      <Header as="h3" color="teal">{props.project.name}</Header>
      <CardContent>{props.project.description}</CardContent>
      {props.project.homepageUrl ? 
        <Button animated href={props.project.homepageUrl} secondary>
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

export default Project;