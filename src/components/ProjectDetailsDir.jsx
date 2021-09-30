import React from "react";
import {useState, useEffect} from "react";
import { Button,Modal} from 'react-bootstrap';  
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "antd/dist/antd.css";
// import { Table, Input,  Row,  Col, Switch,Drawer } from "antd";
// import { default as ReactSelect } from "react-select";
// import { components } from "react-select";
import {Dropdown} from 'react-bootstrap'
// import Chart from "react-google-charts";
import {Breadcrumb} from 'antd'



function ProjectDetailsDir() {
    

    const [sidenav,setsidenav] = useState(false);
    const [active,setactive] = useState(false);
    const [show,setshow]= useState(false);
    function handleModal(){
        setshow(!show);
    }
    const [notes,setnotes] = useState([]);
    
    useEffect(()=>{
        var data=[];
        for(let i=0;i<2;i++){
            data.push({
                id:i,
                name:"Raj",
                date:"17/05/2021",
                time:"16:57",
                description:`description ${i}`
            })
        }
        setnotes(data);
    },[])
  
    
    function addnote(){
        var note = document.getElementById('notes-input').value;
        var data = [];
        var id = 0;
        notes.map((i)=>{
            data.push(i);
            id+=1;
        })
        data.push({
            id:id,
            name:"Raj",
            date:"17/05/2021",
            time:"16:57",
            description:`${note}`
        })
        setnotes(data);
        console.log(notes);
        document.getElementById('notes-input').value = "";
    }
    const [visible, setVisible] = useState(false);

    
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
                            <span class="profile-name">Director</span>
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
            <li><a href="/dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
      <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
      <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
      <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
            </ul>
        </div>
        <div class="content-wrapper">
            <div class="dashboard-wrapper">
            <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/dashboard">Dashboard</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/team-members-sales-dir">Team Members</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/project-sales-dir">Projects</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/project-details-dir">Projects Details</a>
                    </Breadcrumb.Item>
                </Breadcrumb>

                

                
                        <div class="row">
                            <div class="col-sm-5 pad-lzero">
                                <div class="main-title">PROJECT DETAILS</div>
                            </div>
                            <div class="col-sm-7 add-new-btnw">
                                <a style={{color:"#0d6efd"}} onClick={()=>handleModal()}>View / Add Notes</a>
                            </div>
                        </div>

                        <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        <div class="form-wrappers">
                                            <label>Project Code</label>
                                            <input type="text" name="" placeholder="Enter Project Code" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Customer Name</label>
                                            <select>
                                                <option>Myntra</option>
                                                <option>Infi</option>
                                            </select>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Start Date</label>
                                            <input type="date" name="" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Estimated Completion Date</label>
                                            <input type="date" name="" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Domain Name</label>
                                            <input type="text" name="" placeholder="Enter Domain Name" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Cost</label>
                                            <input type="text" name="" placeholder="Enter Cost" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Location</label>
                                            <input type="text" name="" placeholder="Enter Location" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>POC</label>
                                            <input type="text" name="" placeholder="Enter POC" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Contact</label>
                                            <input type="text" name="" placeholder="Enter Contact" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Schedule Remainder</label><br/>
                                            <label class="switch"><input type="checkbox" id="toggle2" onClick={()=>{setactive(!active)}} /><span class="slider round"></span></label>
                                        </div>

                                        {active?<><div class="row">
                                            <div class="col-sm-5 pad-lzero">
                                                <div class="main-title">REMAINDER DETAILS</div>
                                            </div>
                                            <div class="col-sm-7 add-new-btnw">
                                            </div>
                                        </div>
                                        {/* <div className="row view-client">
                                            <div className="col-md-4"> */}
                                                <div class="common-wrapper">

                                                    <div class="common-wcard">

                                                        <div class="common-form-fields">

                                                            <div class="add-user">
                                                                <div class="form-wrappers">
                                                                    <label>Remainder Time</label>
                                                                    {/* <input type="date" name="" placeholder="Enter Date and time" /> */}
                                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                                                </div>

                                                                <div class="form-wrappers">
                                                                <label class="">Remainder Reason</label>
                                                                <input type="text" id="remainder-reason" name="" placeholder="Enter remainder reason" />
                                                            </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </>:<></>
                                        }

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
    <Modal show={show} onHide={()=>handleModal()} className="edit-notes">  
        <Modal.Header closeButton>View / Add Notes</Modal.Header>  
        <Modal.Body>
            <div className="notes-input-box" id="notes-input-box">
                <div>
                    <textarea rows="4" cols="45" id="notes-input" placeholder="Enter notes..."></textarea>
                </div>
                <div>
                    <div class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></div>
                    <button class="send-button" onClick={addnote}><i class="fa fa-send"></i></button>
                </div>
            </div>
            {notes && notes.map((i, index)=>{
                return(
                    <div className="notes-list ">
                        <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                        <span class="notes-name">{i.name} - </span>
                        <span class="notes-date">{i.date} </span>
                        <span class="notes-time"> {i.time}</span>
                        <div className="description">
                            {i.description}
                        </div>
                    </div>
                )
            })}

        </Modal.Body>    
    </Modal> 
   
</>
);
}

export default ProjectDetailsDir;