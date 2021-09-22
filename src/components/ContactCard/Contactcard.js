import React from 'react';
import Card from 'react-bootstrap/Card';
import './Contactcard.scss';
import PropTypes from 'prop-types';

const Contactcard = (props) => {
    return (
      <div>
          <Card className='card' onDoubleClick={()=>props.editContact(props.contactInfo.id)}>
              <div className='header'>{props.contactInfo.name}</div>
              <div className='body'>
                  <span>{props.contactInfo.email}</span>
                  <span>{props.contactInfo.city}</span>
                  <span>{props.contactInfo.phone}</span>
                  <span>{props.contactInfo.website}</span>
                  <span>{props.contactInfo.companyName}</span>
              </div>
              </Card>
      </div>
    );
}

Contactcard.propTypes={
    contactInfo:PropTypes.object,
    editContact:PropTypes.func
}

export default Contactcard;