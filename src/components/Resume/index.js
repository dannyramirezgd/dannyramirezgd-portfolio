import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import downloadResume from '../../assets/files/Resume.pdf';
import styles from './Resume.module.css';

function Resume() {
  return (
    <div>
      <h1 className={styles.resume}>
        <a href={downloadResume} className='text-decoration-none' target="_blank" rel="noreferrer">
          Download My Resume Here
        </a>
      </h1>
      <h2>Proficiencies</h2>
      <ListGroup horizontal>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require(`../../assets/images/jsIcon.png`)}
            alt="javascript icon"
          />
          <p className="text-center">Javascript</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/bootstrapIcon.png')}
            alt="bootstrap icon"
          />
          <p className="text-center">Bootstrap</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/cssIcon.png')}
            alt="css icon"
          />
          <p className="text-center">CSS</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/mysqlIcon.png')}
            alt="MySQL icon"
          />
          <p className="text-center">MySQL</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/nosqlIcon.png')}
            alt="noSQL icon"
          />
          <p className="text-center">noSQL</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/nodejsIcon.png')}
            alt="Node.JS icon"
          />
          <p className="text-center">Node.js</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/mongodbIcon.png')}
            alt="mongodb icon"
          />
          <p className="text-center">MongoDB</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <img
            class="imgs"
            src={require('../../assets/images/restapiIcon.png')}
            alt="RestAPIs icon"
          />
          <p className="text-center">Rest APIs</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Resume;
