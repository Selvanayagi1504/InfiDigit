import React from "react";
import {useState, useEffect} from "react";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'





function AccessPermissionsAdmin() {
    const [sidenav,setsidenav] = useState(false);
    const [option, setoption] = useState('Director');
    const [data,setData]= useState(
    [
        {
            designation: "Director",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "HR",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "Sales",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "SEO",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: true
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        }
        
    ])
    
    useEffect(()=>{
        
    },[])
    
    function checkbox(){
        console.log(data)
    }
    

    return (
        <>
            <section class="outer-wrapper ModuleExpandDesignation">
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
                                <span class="profile-name">Admin</span>
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

            
            <div class="content-wrapper">
                <div class="dashboard-wrapper">
                    <div class="sidebar-nav-bar">
                        <ul class="list-unstyled side-menu">
                            <li><a href="/dashboard-admin"> Audit</a></li>
                            <li><a href="">Access Permissions</a></li>
                        </ul>
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/dashboard-admin">Audit</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/access-permissions-admin">Access Permissions</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="row ">
                        <div className="col-md-3 my-3 my-md-0"><h2>Access Permissions</h2></div>
                        <div className="col-md-5 "></div>
                        <div className="col-md-4 add-new-btnw">
                            <select id="choose" onChange={()=>{setoption(document.getElementById('choose').value)}} class="common-mr-24">
                                <option value="Director">Director</option>
                                <option value="HR">HR</option>
                                <option value="Sales">Sales</option>
                                <option value="SEO">SEO</option>
                            </select>
                            <button className="outline-btn" onClick={checkbox}>Save</button>
                        </div>
                        
                    </div>
                    <div className="designation-box mt-5">
                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-2 ">
                                <h4>Client</h4>
                            </div>
                    {
                        data.map(item=>{
                            if(item.designation==option){
                                return(
                                    item.clientDataFields.map(item=>{
                                        return(
                                        <div className="col-md-2">
                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}}  style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                        
                                        </div>
                                        )
                                    })     
                                )     
                            } 
                        }) 
                    }
                    
                    </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Team Member</h4>
                            </div>
                            {
                        data.map(item=>{
                            if(item.designation==option){
                                return(
                                    item.teamMemberDataFields.map(item=>{
                                        return(
                                        <div className="col-md-2">
                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                        </div>
                                        )
                                    })     
                                )     
                            } 
                        }) 
                    }
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Modules</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.modulesDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Projects</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.projectsDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Project Configurations</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.projectConfigDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                    }
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>

                        </div>
                    </div>
                           
                        
                </div>
            </div>
        </section>
       
        </>
    );
}

export default AccessPermissionsAdmin;