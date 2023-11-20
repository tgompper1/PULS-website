import React from "react";
import './home.css'
import '../twelve_column_grid.css'


export default function Home() {
 return (
    <div>
        <div class='row'>
            <div class="col-12 col-s-12">
                <figure class="image">
                    <img src="images\montreal.jpg" alt="montreal" class='cropped-image none-image position-60-50'></img>
                    <figcaption>PHYSIOLOGY <br></br>UNDERGRADUATE <br></br>LEAGUE OF <br></br> STUDENTS</figcaption>
                </figure>
            </div>
        </div>
        <div class='row'>
            <div class="col-3"></div>
            <div class="col-4 col-s-12">
                <h1>Welcome home.</h1>
                <p>Since its inception, the Physiology Undergraduate League of Students
                    has been the elected student society at the service of undergraduate 
                    students in the Physiology Department at McGill University.
                </p>
            </div>
            <div class="col-5"></div>
        </div>
    </div>
 );
}