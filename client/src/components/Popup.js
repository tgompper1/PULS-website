import React from'react'
import '../styles/popup.css'

export default function Popup(props) {
    return(props.trigger) ? (
        <div class='popup'>
            <div class='popup-inner'>
                <div>
                    <h1>Admin Login</h1>
                    <form>
                        <label for="usr">Username: &ensp;</label>
                        <input type="text" id="usr" name="usr"/><br></br>
                        <br></br>
                        <label for="pass">Password:  &ensp;</label>
                        <input type="password" id="pass" name="pass"/><br></br>
                        <br></br><br></br>
                        <input type="submit" value="Submit" class='submit-btn'></input>
                    </form>
                </div>
                <button class="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                
                {props.children}
            </div>
        </div>
    ) : "";
}