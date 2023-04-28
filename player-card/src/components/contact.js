import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


function Contact(){
    return(
        <>
            <div className="contactBtn">
                <MDBBtn href='#' size='sm' className='text-dark' color='light'>
                    <MDBIcon icon='envelope' /> Email
                </MDBBtn>
                <MDBBtn size='sm' style={{ backgroundColor: '#55acee' }} href='#'>
                    <MDBIcon  fab icon='linkedin' /> LinkedIn
                </MDBBtn>
            </div>
        </>
    )
}

export default Contact;