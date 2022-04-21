import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'employeeTracker',
      description: 'An employee database tracker',
      title: 'Employee Database Tracker',
      ghLink: 'https://github.com/dannyramirezgd/cms-employee-tracker',
    },
    {
      name: 'frontEnd',
      description: 'A complete front end app',
      title: 'Karaoke Made Easy',
      ghLink: 'https://github.com/dannyramirezgd/karaoke-web-app',
      deployedApp: 'https://dannyramirezgd.github.io/karaoke-web-app/',
    },
    {
      name: 'fullStack',
      description: 'A full stack application called Wag!',
      title: 'Wag! A Dog Walking App',
      ghLink: 'https://github.com/dannyramirezgd/wag-dog-walker-app',
      deployedApp: 'https://secure-savannah-19572.herokuapp.com/',
    },
    {
      name: 'weatherDashboardApp',
      description: 'Weather forecast by City and State',
      title: 'Weather Dashboard App',
      ghLink: 'https://github.com/dannyramirezgd/weather-dashboard-app',
      deployedApp: 'https://dannyramirezgd.github.io/weather-dashboard-app/',
    },
    {
      name: 'pwaBudgetTracker',
      description: 'PWA implementation',
      title: 'PWA Budget Tracker',
      ghLink: 'https://github.com/dannyramirezgd/PWA-budget-tracker',
      deployedApp: 'https://nameless-depths-49959.herokuapp.com/',
    },
    {
      name: 'techBlog',
      description: 'A functional blog site',
      title: 'Sample Tech Blog',
      ghLink: 'https://github.com/dannyramirezgd/tech-blog',
      deployedApp: 'https://hidden-meadow-59387.herokuapp.com/',
    },
  ]);
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {projects.map((image) => (
        <div className={styles.card}>
          <Card className="m-1 card-content" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/images/${image.name}.png`)}
            />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>{image.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={image.ghLink}>GitHub</Card.Link>
              {image.deployedApp && (
                <Card.Link href={image.deployedApp}>Deployed App</Card.Link>
              )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}


export default Portfolio;
