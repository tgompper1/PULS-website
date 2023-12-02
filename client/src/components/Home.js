import React from "react";
import '../styles/home.css'
import './twelve_column_grid.css'


export default function Home() {
 return (
    <div>
        <figure class="image">
            <img src="images\montreal.jpg" alt="montreal" class='cropped-image none-image position-60-50 header-image'></img>
            <figcaption>PHYSIOLOGY <br></br>UNDERGRADUATE <br></br>LEAGUE OF <br></br> STUDENTS</figcaption>
        </figure>
        <div class='row'>
            <div class="col-3"></div>
            <div class="col-5 col-s-12">
                <h1 className='page-title'>Welcome home.</h1>
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