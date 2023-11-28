// import React, { useState } from "react";
// import { useNavigate } from "react-router";
import './about.css'
import '../twelve_column_grid.css'

export default function About() {
  // This following section will display 
 return (
   <div>
      <div class='row'><div class='col-12 col-s-12'></div></div>
      <div class='row'>
        <div class='col-3'></div>
        <div class='col-3'>
          <button class="puls-button" >Current Council</button>
        </div>
        <div class='col-3'>
          <button class="puls-button">Past Councils</button>
        </div>
        <div class='col-3'></div>
      </div>
      <div class='row'>
        <div class='col-1'></div>
        <div class='col-10'>
          <h1>In-Person Office Hours</h1>
          <p>PULS hosts weekly office hours in the PULS office (room 1017 of the McIntyre Building!) 
            Refer to the schedule below and feel free to stop by during our allotted times between 10:30am 
            and 3:30pm from Monday to Friday (Note some times may be subject to closure.) This schedule remains
             the same every week. At least one council member will be available to sell NTCS, clothing orders and 
             answer any questions you may have about PULS or PHGY.
          </p>
          <table>
            office hours table
          </table>
        </div>
        <div class='col-1'></div>
      </div>
   </div>
 );
}