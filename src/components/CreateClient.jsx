import React from "react";
import {useState, useEffect} from "react";
import {Dropdown} from 'react-bootstrap'
import {SideNavBarCustom, SideNavBarCustomClosed} from './index'
import {Breadcrumb} from 'antd'

import { FilePicker } from 'react-file-picker'
function CreateClient() {
    const [phonecode, setphonecode] = useState("+91");
    const [countrycodes, setcountrycodes] = useState([]);
  const [sidenavToggle, setSidenavToggle] = useState(true);
    
    useEffect(()=>{
        var data = [
            {
                country:"India",
                code:"+91"
            },
            {
                country:"USA",
                code:"+1"
            }
        ];
        setcountrycodes(data);
    },[])

    function setcountry(e){
        var c = e.target.value;
        countrycodes.map((i)=>{
            if(i.country == c){
                setphonecode(i.code)
            }
        })
    }

    const [sidenav,setsidenav] = useState(false);
    const [filelist,setfilelist] = useState([]);
    function updateList() {
        var input = document.getElementById('myfile');
        const a = []
        for (var i = 0; i < input.files.length; ++i) {
            a.push(input.files.item(i).name);
        }
        setfilelist(a);
    }
    function removeItem(i){
        var list = filelist;
        setfilelist(list.filter(item => item !== i))
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
                <a href="/create-client">Create new Customers</a>
                </Breadcrumb.Item>
            </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">CREATE NEW Customers</div>
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
                                    <input type="text" name="" placeholder="Enter Client" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Client Code</label>
                                    <input type="text" name="" placeholder="Enter Client Code" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Organization</label>
                                    <input type="text" name="" placeholder="Enter Organization" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Key Point of Contact</label>
                                    <input type="text" name="" placeholder="Enter Key Point of Contact" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Status</label>
                                    <select>
                                        <option>Active</option>
                                        <option>Lead</option>
                                        <option value="">Prospect</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Country</label>
                                    <select onChange={setcountry} >
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>State</label>
                                    <input type="text" name="" placeholder="Enter State" />
                                </div>

                                <div class="form-wrappers">
                                    <label>City</label>
                                    <input type="text" name="" placeholder="Enter City" />
                                </div>


                                <div class="form-wrappers">
                                    <label>Phone Number</label>
                                    <br />
                                    <div style={{display:"flex"}}>
                                        <input type="text" value={phonecode} style={{width:10+'%', marginRight:16+'px'}} />
                                        <input type="text" name="" placeholder="Enter Phone Number" />
                                    </div>
                                </div>

                                <div class="form-wrappers">
                                    <label>Created By</label>
                                    <input type="text" name="" placeholder="Rahul" disabled />
                                </div>

                                <div className="form-wrappers">
                                            <label>Account Activation</label>
                                            <br />
                                            <label  class="switch"><input data-onstyle="success" type="checkbox" /><span  class="slider round"></span></label>
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

export default CreateClient;