import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

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

        <div class="sidebar-nav-bar">
            <ul class="list-unstyled side-menu">
            <li><a href="/dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
      <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
      <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
      <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
      <li><a href="configuration">Configuration</a></li>
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
                </Breadcrumb>
                {/* <Tabs>
                    <TabList>
                        <Tab>Projects</Tab>
                        <Tab>Team Members</Tab>
                    </TabList>
                    <TabPanel> */}
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
                    {/* </TabPanel>
                    <TabPanel>
                    <div class="row">
                            <div class="col-sm-5 pad-lzero">
                                <div class="main-title">ASSIGN TEAM MEMBERS</div>
                            </div>
                            <div class="col-sm-7 add-new-btnw">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <ReactSelect
                                    options={colourOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                />
                            </div>
                            <div className="col-md-3">
                            <button onClick={()=>assign()}  class="outline-btn">Assign</button>
                            </div>
                        </div>
                        <hr />
                        {teamlist1 && teamlist1.length>0 
                            ? 
                                <>
                                    <div class="add-new-btnw" style={{textAlign:"left"}}>
                                        <button  class="outline-btn">Edit</button> 
                                    </div>
                                    <div class="common-table">
                                        <div class="row">
                                            <div class="col-md-5">

                                            </div>
                                            <div class="col-md-7">
                                                <div class="data-export" style={{textAlign:"end",marginLeft:"unset"}}>
                                                    <span style={{marginRight:24+'px'}}>
                                                    <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                                                        {setteamList1(
                                                        searchdata1.filter(person =>
                                                        person.teammember.includes(nameSearch)
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
                                        <Table id="sample" columns={teamcol1} dataSource={teamlist1}
                                            rowSelection={{type: selectionType1,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                                    </div>
                                </> 
                            :
                                <></>
                        } */}
                    {/* </TabPanel>
                </Tabs> */}

            </div>
        </div>
    </section>
    </>
  );
}

export default ProjectSalesDir;
