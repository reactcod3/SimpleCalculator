import React from 'react';
import styles from './Display.module.css';

const Display = (props)=>(
    <div className="container">
        <div className="row">
            <div className="col-12">
            <div className={styles.Display}>{props.result}</div>
            </div>
        </div>
    </div>
    
);

export default Display;