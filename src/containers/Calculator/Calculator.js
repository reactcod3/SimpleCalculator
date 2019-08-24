import React, { Component } from 'react';
import Display from '../../components/Display/Display';
import styles from './Calculator.module.css';
import Buttons from '../../components/Buttons/Buttons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Calculator extends Component{
    state={result:"0"}
    buttonType
    buttonClick = (btnType)=>{
        if(['1','2','3','4','5','6','7','8','9','0', '+','-','/', '*'].includes(btnType)){
            
            if (this.state.result === "0"){
                this.setState({result: btnType});
            }
            
            else{
                this.setState({result: this.state.result + btnType});
            }
        }
        else if (btnType === "clear"){
            this.setState({result: "0"});
        }
        else if (btnType === "="){
            this.setState({result: eval(this.state.result)});
        }
    }

    render(){
        return(
           
                    <div className={['container-fluid', styles.Calculator].join(' ')}>
                        <div className={['row', styles.row].join(' ')}>
                            <div className="col-12">
                                <Display result={this.state.result}></Display>
                            </div>
                        </div>
                        <div className={['row', styles.row].join(' ')}>
                            <div className="col-12">
                            <Buttons clicked={this.buttonClick}/>
                            </div>
                        </div>   
                    </div>
                
            
        );
    }


}

export default Calculator;