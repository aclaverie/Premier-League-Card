import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function Awards(){
    return(
        <>
            <div className="tabRec">
                <MDBTable responsive borderless className='text-white'>
                    <MDBTableHead light>
                        <tr >
                            <th colspan="2">Honours & Awards</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody >
                        <tr>
                            <td>Player of the Month</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td colspan="2">March 2023</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </>
    )
}

export default Awards;