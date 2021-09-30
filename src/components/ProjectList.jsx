import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import {Dropdown} from 'react-bootstrap'
import {Breadcrumb} from 'antd'



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ProjectList() {

    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filtercity=[], filterstatus=[];
        data.push({
          key: 0,
          id:0,
          projcode:`0`,
          poc:`Raj 0`,
          startdate: "03/05/2020",
          closedate: "03/05/2021",
          status:`Active`,
          view:<a href="view-client-details">View</a>
        });
        filtercity.push({
            text:"Chennai",
            value:"Chennai"
        })
        filterstatus.push({
            text:"Active",
            value:"Active"
        })
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            id:i,
            projcode:`1234${i}`,
            poc:`Raj ${i}`,
            startdate: "03/05/2020",
            closedate: "03/05/2021",
            status:`Completed`,
            view:<a href="view-client-details">View</a>
        });
        filtercity.push({
          text:"Bangalore",
          value:"Bangalore"
        })
        filterstatus.push({
            text:`Completed${i}`,
            value:`Completed${i}`
        })
        }
        // [...new Map(array.map((x) => [x[key], x])).values()];
        filtercity = [... new Set(filtercity.map(JSON.stringify))].map(JSON.parse)
        filterstatus = [... new Set(filterstatus.map(JSON.stringify))].map(JSON.parse)
        setsearch(data);
        setteamList(data);
        const columns = [
            {
              title: "#",
              dataIndex: "id",
              key: "id"
            },
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
    },[]);
    const [sidenav,setsidenav] = useState(false);
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

        <div class="sidebar-nav-bar">
            <ul class="list-unstyled side-menu">
                <li><a href="dashboard-sales"><i class="fa fa-columns"></i> Dashboard</a></li>

                <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
            </ul>
        </div>
        <div class="content-wrapper">
            <div class="dashboard-wrapper">
            <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/client-list">Customers</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/project-list">Projects</a>
                </Breadcrumb.Item>
            </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">PROJECTS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        <a href="create-project" class="outline-btn">Add New Project</a>
                    </div>
                </div>


                

                <div class="common-table" >
                    <div class="row">
                        <div class="col-md-5">
                        <div class="data-per-page-client">Data Per page</div>
                        </div>
                        <div class="col-md-7">
                            {/* <div class="row">
                                <div class="col-md-0"></div>
                                <div class="col-md-12"> */}
                                    <div class="data-export-client">
                                        
                                        <span class="count-drop">
                                        </span>
                                        <span class="export-client">
                                            <select id="export-client" name="export">
                                                <option value="Export">Export</option>
                                                <option value="PDF">Excel</option>
                                                <option value="WORD">CSV</option>
                                                <option value="Sheets">Sheets</option>
                                            </select>
                                        </span>
                                        <span>
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
                                    </div>
                                {/* </div>
                            </div> */}
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

export default ProjectList;
