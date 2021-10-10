import React, { useState, useEffect } from "react";
import {Dropdown} from 'react-bootstrap'

// import $ from 'jquery';

import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Breadcrumb } from "antd";
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

function TeamMembersSalesDir() {
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filterdesig=[], filterdpmt=[], filtersrsupervisor=[], filtersupervisor=[];
        var k="N/A";
        data.push({
            key: 0,
            name: <Link to={{pathname: '/edit-employee-dir', state: { detail: "1" }}}>Edrward 0</Link>,
            tmcode:0,
            tmdesignation: `Man 0`,
            department:"SEO"
        });
        data.push({
            key: 1,
            name: "Edrward 1",
            tmcode:1,
            tmdesignation: `Man 1`,
            department:"HR"
        });
        filterdesig.push({
            text:"SEO",
            value:"SEO"
        })
        for (let i = 2; i < 100; i++) {
          var  k=<input type="date" value="2021-08-26" />;
        data.push({
            key: i,
            name: <Link to={{pathname: '/project-sales-dir', search: `?id=${i}`,state: { detail: "1" }}}>Edrward {i}</Link>,
            tmcode:i,
            tmdesignation: `Man ${i}`,
            department:"Sales"
           
        });
        filterdesig.push({
            text:`Man ${i}`,
            value:`Man ${i}`
        })
        }
        filterdesig = [... new Set(filterdesig.map(JSON.stringify))].map(JSON.parse);
        setsearch(data);
        setteamList(data);
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                width:"10%"
            },
            {
              title: "Emp Code",
              dataIndex: "tmcode",
              key: "tmcode",
              width:"10%"
            },
            {
                title:"TM Designation",
                dataIndex:"tmdesignation",
                key:"tmdesignation",
                filters:filterdesig,
                filterSearch: true,
                onFilter: (value, record) => record.tmdesignation.indexOf(value) === 0,
                width:"15%"
            },
            {
                title:"Deparrment",
                dataIndex:"department",
                key:"department",
                filters:[{text:"SEO",value:"SEO"},{text:"Sales",value:"Sales"},{text:"HR",value:"HR"}],
                filterSearch: true,
                onFilter: (value, record) => record.department.indexOf(value) === 0,
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"50%"
            }

          ];
          setteamcol(columns);
    },[]);
    const history = useHistory();
    function editemp(a){
        history.push({
            pathname: "/edit-employee",
            state: {
              val: "helo"
            }
          });
    }
    const [sidenav,setsidenav] = useState(false);
    const [sidenavToggle, setSidenavToggle] = useState(true);
return (
<>
    <section class="outer-wrapper team-members">
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

        <div className="custom-row-dashboard-seo">
            <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                <div class="sidebar-nav-bar">
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
                <Breadcrumb.Item>
                <a href="/dashboard">Dashboard</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/team-members-sales-dir">Team Members</a>
                </Breadcrumb.Item>
               
            </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">TEAM MEMBERS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
                </div>

                
                        <div className="row">
                            <div className="col-sm-5"></div>
                            <div className="col-sm-7 add-new-btnw">
                            <div class="search" style={{marginLeft:0+'px', width:100+'%'}}>
                                <div class="input-group" style={{display:"block"}}>
                            <Input.Search
                                allowClear
                                placeholder="Search By name"
                                onSearch={nameSearch =>
                                    {setteamList(
                                        searchdata.filter(person =>
                                        person.name.includes(nameSearch)
                                        )
                                    );console.log(nameSearch)}
                                }
                                id="input-s"
                                />
                                 </div>
                                </div>
                            </div>
                        </div>
                   

                

                <div class="common-table" >
                <div class="row">
                    <div class="col-md-5">
                    <span class="data-per-page">Data Per page</span>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-8">
                                <div class="data-export">
                                    
                                    
                                    <span class="export">
                                        <button class="ms-5 outline-btn ">Import</button>
                                    </span>
                                    <span class="export" style={{marginRight:0+'px'}}>
                                        
                                                <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Export
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-content" href="#">Excel</a>
                                                    <a class="dropdown-content" href="#">CSV</a>
                                                    <a class="dropdown-content" href="#">Sheets</a>
                                                </div>
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                </div>
            </div>
        </div>
       

    </section>
</>
);
}

export default TeamMembersSalesDir;