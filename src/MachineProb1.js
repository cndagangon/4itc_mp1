import React from 'react';
import Personalnformation from './PersonalInformation.js';
import Skills from './Skills.js';
import Education from './Education.js';
import TrainingSeminars from './TrainingSeminars.js';
import Ojt from './Ojt.js';
class MachineProb1 extends React.Component{
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <table>
                    <tr>
                        <Personalnformation/>
                    </tr>
                    <tr>
                        <Skills/>
                    </tr>
                    <tr>
                        <Education/>
                    </tr>
                    <tr>
                        <TrainingSeminars/>
                    </tr>
                    <tr>
                        <Ojt/>
                    </tr>
                    </table>
                </div>
        );
    
    }
}
export default MachineProb1;
