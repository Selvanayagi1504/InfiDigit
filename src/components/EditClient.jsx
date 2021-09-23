import React from "react";
import {useState} from "react";
import $, { event } from 'jquery';
function EditClient() {
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
                    <li><i class="fa fa-bell"></i></li>

                    <li class="dropdown">
                        <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                            <span class="profile-name">M.Subash</span>
                        </button>



                            <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a href="">Profile</a></li>

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

                <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
            </ul>
        </div>
        <div class="content-wrapper">
            <div class="dashboard-wrapper">
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">CREATE NEW CLIENT</div>
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
                                    <input type="text" name="" placeholder="101" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Organization</label>
                                    <input type="text" name="" placeholder="Myntra" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Key Point of Contact</label>
                                    <input type="text" name="" placeholder="Raj" />
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
                                    <select>
                                        <option>India</option>
                                        <option>USA</option>
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
                                    <input type="text" name="" placeholder="Enter Phone Number" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Created By</label>
                                    <input type="text" name="" placeholder="Rahul" disabled />
                                </div>

                                <div class="form-wrappers">
                                    <label>Document Upload</label>
                                    <br />
                                    <input type="file" id="myfile" name="myfile" multiple onChange={updateList} />
                                </div>
                                <div id="fileList"></div>
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

export default EditClient;