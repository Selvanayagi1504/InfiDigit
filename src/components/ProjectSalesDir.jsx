import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { SideNavBarCustom, SideNavBarCustomClosed } from '.';


const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ProjectSalesDir() {
    const [sidenavToggle, setSidenavToggle] = useState(true);

    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [colourOptions, setcolor] = useState([
        { value: "Ankit", label: "Ankit" },
        { value: "Monal", label: "Monal" },
        { value: "Rahul", label: "Rahul" },
        { value: "Ravi", label: "Ravi" },
        
    ])
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    const [teamlist1, setteamList1] = useState([]);
    const [selectionType1, setSelectionType1] = useState('checkbox');
    const [teamcol1,setteamcol1] = useState([]);
    const [searchdata1,setsearch1] = useState([]);
    useEffect(()=>{
        const data = [];
        var filtercity=[], filterstatus=[];
        data.push({
          key: 0,
          projcode:<a href="view-client-sales-dir">0</a>,
          poc:`Raj 0`,
          client:"Myntra",
          startdate: "03/05/2020",
          closedate: "03/05/2021",
          status:`Active`,
          
        });
        filterstatus.push({
            text:"Active",
            value:"Active"
        })
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            projcode:<a href="view-client-sales-dir">1234{i}</a>,
            poc:`Raj ${i}`,
            client:"Cultfit",
            startdate: "03/05/2020",
            closedate: "03/05/2021",
            status:`Completed`,
            
        });
        }
        filterstatus.push({
            text:`Completed`,
            value:`Completed`
        })
        filterstatus = [... new Set(filterstatus.map(JSON.stringify))].map(JSON.parse)
        setsearch(data);
        setteamList(data);
        var columns = [
            
            {
              title: "Project Code",
              dataIndex: "projcode",
              key: "projcode"
            },
            {
                title:"POC",
                dataIndex:"poc",
                key:"poc",
            },
            {
                title:"Client",
                dataIndex:"client",
                key:"client",
                filters:[{text:"Myntra",value:"Myntra"},{text:"Cultfit",value:"Cultfit"}],
                filterSearch: true,
                onFilter: (value, record) => record.client.indexOf(value) === 0
            },
            {
                title:"Start Date",
                dataIndex:"startdate",
                key:"startdate",
            },
            {
                title:"Estimated Deal Closure Date",
                dataIndex:"closedate",
                key:"closedate",
            },
            {
                title:"Status",
                dataIndex:"status",
                key:"status",
                filters:filterstatus,
                filterSearch: true,
                onFilter: (value, record) => record.status.indexOf(value) === 0
            },
            {
                title:"",
                dataIndex:"view",
                key:"view"
            }
          ];
        setteamcol(columns);
        columns = [
            {
                title: "Team Member",
                dataIndex: "teammember",
                key: "teammember",
                width:"20%"
            },
            {
                title: "Date Added",
                dataIndex: "date",
                key: "date",
                width:"20%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"50%"
            },
            {
                title:"Action",
                dataIndex:"delete",
                key:"delete",
                width:"10%"
            },
            
        ];
        setteamcol1(columns);
    },[]);
    const [sidenav,setsidenav] = useState(false);
    function assign(){
        var data=[];
        optionSelected.map((i)=>{
            data.push({
                teammember:`${i.value}`,
                date:"02/05/2021",
                delete:<a href=""><i class="fa fa-trash"></i></a>
            })
        })
        setteamList1(data);
        setsearch1(data)
    }
  return (
    <>
    <section class="outer-wrapper client-list">
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
            <   Breadcrumb>
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
                </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">PROJECTS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        
                    </div>
                </div>
                <div class="common-table" >
                    <div class="row">
                        <div class="col-md-5">
                            <span class="data-per-page-client">Data Per page</span>
                        </div>
                        <div class="col-md-7">
                            <div class="data-export-client">
                                <span class="count-drop">
                                </span>
                                <span style={{marginRight:24+'px'}}>
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
                                </span>
                                <span class="export">
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
                    <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                </div>
            </div>
        </div>
        
    </section>
    </>
  );
}

export default ProjectSalesDir;
