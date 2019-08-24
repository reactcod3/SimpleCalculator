import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Buttons.module.css';


const useStyles = makeStyles(theme => ({
    button: {
        color: 'white',
        backgroundColor: 'primary',
        width:"100%",
        height:"80%",
        marginTop: "5px !important",
        marginBottom: "5px !important"
    }
    }));

const Buttons = (props)=>{

    //console.log(props.clicked("7"));
    const classes = useStyles();

    return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <Button onClick={()=>{props.clicked("clear")}} variant="outlined" color="primary" className={styles.Button}>
                    clear
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("*")}} variant="outlined" color="primary" className={styles.operatorButton}>
                    *
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("/")}} variant="outlined" color="primary" className={styles.operatorButton}>
                    /
                </Button>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <Button onClick={()=>{props.clicked("7")}} variant="outlined" color="primary" className={styles.Button}>
                    7
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("8")}} variant="outlined" color="primary" className={styles.Button}>
                    8
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("9")}} variant="outlined" color="primary" className={styles.Button}>
                    9
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("-")}} variant="outlined" color="primary" className={styles.operatorButton}>
                    -
                </Button>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <Button onClick={()=>{props.clicked("4")}} variant="outlined" color="primary" className={styles.Button}>
                   4
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("5")}} variant="outlined" color="primary" className={styles.Button}>
                    5
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("6")}} variant="outlined" color="primary" className={styles.Button}>
                    6
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("+")}} variant="outlined" color="primary" className={styles.operatorButton}>
                    +
                </Button>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <Button onClick={()=>{props.clicked("1")}} variant="outlined" color="primary" className={styles.Button}>
                    1
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("2")}} variant="outlined" color="primary" className={styles.Button}>
                    2
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("3")}} variant="outlined" color="primary" className={styles.Button}>
                    3
                </Button>
            </div>
            <div className="col-3">
                <Button onClick={()=>{props.clicked("=")}} variant="outlined" color="primary" className={styles.Button}>
                    =
                </Button>
            </div>
        </div>
    </div>
)};

export default Buttons;