import React from "react";
import {useState} from "react";
import $, { event } from 'jquery';
import {Dropdown} from 'react-bootstrap'
import {Breadcrumb} from 'antd'
import {SideNavBarCustom, SideNavBarCustomClosed} from './index'

function EditClient() {
  const [sidenavToggle, setSidenavToggle] = useState(true);
    const [sidenav,setsidenav] = useState(false);
    const [filelist,setfilelist] = useState([]);
    function updateList() {
        var input = document.getElementById('myfile');
        var output = document.getElementById('fileList');
        var data=[];
        var children = "";
        for (var i = 0; i < input.files.length; ++i) {
            children += '<li id=filename'+i+'>' + input.files.item(i).name + '<i class="fa fa-trash" id="filenametrash'+i+'"></i></li>';
            data.push(input.files.item(i).name);
        }
        setfilelist(data);
        output.innerHTML = '<ul>'+children+'</ul>';
    }
    function removeItem(event){
        console.log(event)
    }
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
                            <span class="profile-name">Sales</span>
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

        <div className="custom-row-dashboard-seo">
            <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                <div class="sidebar-nav-bar sidebar-sales">
                {sidenavToggle 
                    ?
                    <>
                    
                <SideNavBarCustom/>
                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                <i class="fa fa-angle-right"></i>
                </button>
                    </>
                    :
                    <>
                
                <SideNavBarCustomClosed/>
                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                <i class="fa fa-angle-right"></i>
                </button>
                    </>
                }        
                </div>
            </div>
            <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard":"custom-column-90-dashboard-seo main-dashboard"}>
            <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/dashboard-sales">Dashboard</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/client-list">Customers</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/edit-client">Edit Customers</a>
                </Breadcrumb.Item>
            </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">EDIT CUSTOMERS</div>
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
                                    <input type="text" name="" placeholder="Myntra" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Client Code</label>
                                    <input type="text" name="" placeholder="10001" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Organization</label>
                                    <input type="text" name="" placeholder="Myntra" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Key Point of Contact</label>
                                    <input type="text" name="" placeholder="Raj" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Status</label>
                                    <select value="Active" disabled>
                                        <option>Active</option>
                                        <option>Lead</option>
                                        <option value="">Prospect</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Country</label>
                                    <select value="India" disabled >
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>State</label>
                                    <input type="text" name="" placeholder="Karnataka" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>City</label>
                                    <input type="text" name="" placeholder="Bangalore" disabled />
                                </div>


                                <div class="form-wrappers">
                                    <label>Phone Number</label>
                                    <br />
                                    <div style={{display:"flex"}}>
                                        <input type="text" value="+91" style={{width:10+'%', marginRight:16+'px'}} />
                                        <input type="text" name="" placeholder="8905675841" disabled />
                                    </div>
                                </div>

                                <div class="form-wrappers">
                                    <label>Created By</label>
                                    <input type="text" name="" placeholder="Rahul" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Document Upload</label>
                                    <br />
                                    <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>
                                </div>
                                <div id="fileList">
                                    <ul>
                                    {filelist && filelist.map((i, index)=>{
                                        return(
                                            <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
                                        )
                                    })}
                                    </ul>
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
        {/* <div class="content-wrapper">
            <div class="dashboard-wrapper">
            
               
            </div>
        </div> */}
    </section>
</>
);
}

export default EditClient;