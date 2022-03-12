import React from "react";
class Education extends React.Component{
    render(){
        return(
            <div>
                <h4 align="center"><b>Education Attainment</b></h4>
                <table>
                    <tr>
                        <th>Year Graduated </th>
                        <th>Course</th>
                        <th>School</th>
                    </tr>
                    <tr>
                        <th>2022 </th>
                        <th>BS Information Technology </th>
                        <th>University of Santo Tomas</th>
                    </tr>
                    <tr>
                        <th>2018</th>
                        <th>Senior High School </th>
                        <th>San Sebastian College Recoletos Manila</th>
                    </tr>
                    <tr>
                        <th>2016</th>
                        <th>Junior High School </th>
                        <th>National College of Business and Arts</th>
                    </tr>
                </table>
            </div>
        )
    }}
export default Education;