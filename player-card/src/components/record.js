import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function Record(){
    return(
        <>
            <div className="tabRec">
                <MDBTable responsive borderless className='text-white'>
                    <MDBTableHead light>
                        <tr >
                            <th colspan="2">Premier League Record</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody >
                        <tr>
                            <td>Appearances</td>
                            <td>130</td>
                        </tr>
                        <tr>
                            <td>Goals</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Assists</td>
                            <td>26</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </>
    )
}

export default Record;