import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {
  return (
    <Card className='h-100 shadow' style={{ margin: '10px', width: '300px' }}>
      <Card.Img variant='top' src={props.projectImage} />
      <Card.Body>
        <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{props.projectName}</Card.Title>
        <Card.Text>{props.projectDesc}</Card.Text>
        <div>
        <Button className='shadow me-2' variant='primary' href={props.projectLink} target="_blank" onMouseOver={(e) => {e.target.style.background = '#DCFFF8'; e.target.style.color = '#3B3B58' }} onMouseOut={(e) => {e.target.style.color = ''; e.target.style.background = ''}}>Ver Proyecto</Button>
                <Button className='shadow' variant='secondary' href={props.projectGit} target="_blank" onMouseOver={(e) => {e.target.style.background = '#DCFFF8'; e.target.style.color = '#3B3B58'}} onMouseOut={(e) => {e.target.style.background = ''; e.target.style.color = ''}}>Ver GitHub</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
