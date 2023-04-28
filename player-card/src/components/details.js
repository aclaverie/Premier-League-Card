import React from "react";
import {
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText
  } from 'mdb-react-ui-kit';


function Details(){
    return(
        <>
            <div className="details">
                <MDBCardTitle>Bukayo Saka</MDBCardTitle>
                <MDBCardSubTitle>Midfielder</MDBCardSubTitle>
                <MDBCardText>Arsenal</MDBCardText>
            </div>
        </>
    )
}

export default Details;