import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Social(){
    return(
        <>
            <div className="social">
                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>
                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
            </div>
        </>
    )
}
export default Social;