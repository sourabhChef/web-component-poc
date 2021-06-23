import React, { useContext, useState, useRef, Fragment} from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
import { RootRef, Modal, Button } from '@material-ui/core';

const App = (props) => {haan 
  const [anchorEL, setAnchorEl] = useState(false);
  const handlePopoverClick = event => {
    setAnchorEl();
  }
  const openPopOver = Boolean(anchorEL);
  const domRef = useRef();

  const renderSampleList = props.sampleList.map((sample) => (
    <div key={sample} className='sample-text'>
      → {sample}
    </div>
  ));

  return (
    <Fragment>
    <Button onClick={handlePopoverClick}>Button</Button>
    <Styled styles={styles}>
      
      <div>
    <RootRef rootRef={domRef}>
      <Modal
        open={anchorEL}
        container={domRef.current}
      >
        <div style={{textAlign: 'center', backgroundColor: 'white', marginTop: '100px', marginLeft: '50%', transform: 'translateX(-50%)', width: '50%'}}>
          <h2 style={{color: 'black'}}>Text in a modal</h2>
          <button onClick={handlePopoverClick}>Close</button>
        </div>
      </Modal>
    </RootRef>
  </div>
    </Styled>
  </Fragment>
  );
};

App.defaultProps = {
  componentTitle: 'V Test',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;
