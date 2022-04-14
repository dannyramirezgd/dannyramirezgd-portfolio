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
      <h2 className='mx-4'>Proficiencies</h2>
      <ListGroup className='d-flex flex-row flex-wrap justify-content-between align-items-center'>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require(`../../assets/images/jsIcon.png`)}
            alt="javascript icon"
          />
          <p className="text-center col-12">Javascript</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/bootstrapIcon.png')}
            alt="bootstrap icon"
          />
          <p className="text-center col-12">Bootstrap</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/cssIcon.png')}
            alt="css icon"
          />
          <p className="text-center col-12">CSS</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/mysqlIcon.png')}
            alt="MySQL icon"
          />
          <p className="text-center col-12">MySQL</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/nosqlIcon.png')}
            alt="noSQL icon"
          />
          <p className="text-center col-12">noSQL</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/nodejsIcon.png')}
            alt="Node.JS icon"
          />
          <p className="text-center col-12">Node.js</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/mongodbIcon.png')}
            alt="mongodb icon"
          />
          <p className="text-center col-12">MongoDB</p>
        </ListGroup.Item>
        <ListGroup.Item className='imgs m-auto d-flex align-items-center justify-content-around flex-wrap'>
          <img
            src={require('../../assets/images/restapiIcon.png')}
            alt="RestAPIs icon"
          />
          <p className="text-center col-12">Rest APIs</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Resume;
