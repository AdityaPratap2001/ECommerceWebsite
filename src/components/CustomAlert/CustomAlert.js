import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import './CustomAlert.css';

const CustomAlert = (props) => {
  const [visible, setVisible] = useState(true);

  // const onDismiss = () => setVisible(false);
  const onDismiss = () => {
    props.hidePop();
  }


  return (
    <Alert className='customAlert' color={props.color} isOpen={visible} toggle={onDismiss}>
      {props.content}
    </Alert>
  );
}

export default CustomAlert;