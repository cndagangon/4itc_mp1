import React from "react";
import DP from './images/Gradpic.jpg';
import CN from './images/contact.jpg';
import Email from './images/email.jpg';

class PersonalInformation extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>
                            <img src={DP}
                                alt="pic"
                                Width="166"
                                hieght="399"
                                style={{ alignSelf: 'center' }} />
                        </th>
                        <th>
                            <h1>Carl Nathaniel B. Dagañgon</h1>
                            <h3>BS Information Technology Major in Web and Mobile Application Development</h3>
                            <tr>
                                <th><img src= {CN} alt="pic" align="left" Width="50" hieght="50"/></th>
                                <th><h5 align="left" >09684323428</h5></th>
                            </tr>
                        <tr>
                            <th><img src= {Email} alt="pic" align="left" Width="50" hieght="50"/></th>
                            <th><h5 align="left" >carlnathaniel.dagangon.iics@ust.edu.ph</h5></th>
                        </tr>
                        </th>
                    </tr>
                    <tr> 
                        <td colSpan={3}><p align="center">Birthdate: June 25, 2000 | 21 Years old</p></td>
                    </tr>
                </table>
            </div>
                )
            }}
export default PersonalInformation; 