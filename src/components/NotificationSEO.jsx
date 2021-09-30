import {Dropdown} from 'react-bootstrap'

import React from 'react';

function NotificationSEO(){
    return(
        <Dropdown id="notification-dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                <i class="fa fa-bell"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="">
                        <div className="notification-item">
                            <h4>Notification 1!!</h4>
                            <p>21 hours ago..</p>
                        </div>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="" style={{backgroundColor:"#85C1E9"}}>
                        <div className="notification-item" >
                            <h4>Notification 2!!</h4>
                            <p>8 hours ago..</p>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}
export default NotificationSEO;