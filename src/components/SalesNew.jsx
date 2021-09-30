import React from "react";
import {Dropdown} from 'react-bootstrap'

import {useState} from "react"
function SalesNew() {
    const [sidenav,setsidenav] = useState(false);
  return (
    <>
        <section class="outer-wrapper">
        <div class="top-nav-bar">
            <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
            <div class="nav-bar-center">&nbsp;</div>
            <div class="nav-bar-right">
                <ul class="list-unstyled nav-right-menu">
                <li>
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


                    </li>

                    <li class="dropdown">
                        <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                            <span class="profile-name">M.Subash</span>
                        </button>



                        <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a href="/profile">Profile</a></li>

                            <li><a href="/">Log Out</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="sidebar-nav-bar">
            <ul class="list-unstyled side-menu">
                <li><a href="dashboard.html"><i class="fa fa-columns"></i> Dashboard</a></li>

                <li><a href="sales-list"><i class="fa fa-users"></i> Customers</a></li>
            </ul>
        </div>
        <div class="content-wrapper">
            <div class="dashboard-wrapper">
            <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">ADD NEW DEAL</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                    </div>
                </div>

                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>Client</label>
                                    <input type="text" name="" placeholder="Client Name"  />
                                </div>

                                <div class="form-wrappers">
                                    <label>Client Code</label>
                                    <input type="text" name="" placeholder="Client Code" />
                                </div>

                                <div class="form-wrappers">
                                    <label>POC</label>
                                    <input type="text" name="" placeholder="POC" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Phone Number</label>
                                    <input type="text" name="" placeholder="Phone Number" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Status</label>
                                    <select>
                                        <option>Lead</option>
                                        <option>Active</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Location</label>
                                    <input type="text" name="" placeholder="Location" />
                                </div>
                               
                            </div>
                        </div>
                    </div>


                    <ul class="form-action-wrapper">
                        <li><a href="#" class="ol-btn">Cancel</a></li>
                        <li><a href="#" class="outline-btn">Save</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    </>
  );
}

export default SalesNew;
