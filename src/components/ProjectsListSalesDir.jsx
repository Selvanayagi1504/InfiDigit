import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import { Breadcrumb } from 'antd';
import {Dropdown} from 'react-bootstrap'




const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

function ProjectsListSalesDir() {

  

  const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filterservice=[], filterprojtype=[], filterprojassigned=[], filterclient=[];
        data.push({
            key: 0,
            projcode:<a href="edit-project-dir">Proj 0</a>,
            client:`Myntra`,
            projpoc:"Rahul",
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            status:"completed",
            edit:<div><a href="/module-expand-da">View Report</a></div>
        });
        filterclient.push({
            text:"Myntra",
            value:"Myntra"
        })
        data.push({
          key: 0,
          projcode:<a href="view-client-sales-dir">Proj 1</a>,
          client:`Myntra`,
          projpoc:"Rahul",
          contractstart: "03/05/2020",
          contractend:"03/05/2021",
          status:"Lead",
          edit:<div></div>
        });
        data.push({
          key: 0,
          projcode:<a href="view-client-sales-dir">Proj 2</a>,
          client:`Myntra`,
          projpoc:"Rahul",
          contractstart: "03/05/2020",
          contractend:"03/05/2021",
          status:"Prospect",
          edit:<div></div>
      });
        for (let i = 3; i < 100; i++) {
        data.push({
            key: i,
            projcode:<a href="edit-project-dir">proj {i}</a>,
            client:`Cultfit`,
            projpoc:"Rahul",
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            status:"active",
            edit:<div><a href="/module-expand-da">View Report</a></div>

        });
        filterclient.push({
            text:`CultFit`,
            value:`CultFit`
        })
        }
        filterclient = [... new Set(filterclient.map(JSON.stringify))].map(JSON.parse)


        setsearch(data);
        setteamList(data);
        const columns = [
            {
              title: "Project Code",
              dataIndex: "projcode",
              key: "projcode"
            },
            {
                title: "Client",
                dataIndex: "client",
                key: "client",
                filters:filterclient,
                filterSearch: true,
                onFilter: (value, record) => record.client.indexOf(value) === 0
            },
            {
                title:"POC",
                dataIndex:"projpoc",
                key:"projpoc",
              },
            {
                title:"Start Date",
                dataIndex:"contractstart",
                key:"contractstart",
            },
            {
                title:"Estimated Closure Date",
                dataIndex:"contractend",
                key:"contractend",
            },
            {
                title:"Status",
                dataIndex:"status",
                key:"status",
                filters:[{text:"active", value:"active"},{text:"completed",value:"completed"},{text:"Lead",value:"Lead"},{text:"Prospect",value:"Prospect"}],
                filterSearch: true,
                onFilter: (value, record) => record.status.indexOf(value) === 0
            },
            {
              title:"Actions",
              dataIndex:"edit",
              key:"edit",
            },
          ];
          setteamcol(columns);
    },[]);
const [sidenav,setsidenav] = useState(false);
  return (
    <>
      <section class="outer-wrapper sub-projects">
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
          <li><a href="/dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
      <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
      <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
      <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>

          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
          <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/dashboard">Dashboard</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/project-list-sales-dir">Projects</a>
              </Breadcrumb.Item>
          </Breadcrumb>

            <div class="search">
              <div class="input-group">
                <Row type="flex" gutter={10} style={{ marginBottom: 10 }}>
                  <Col>

                  </Col>
                  <Col>
                  <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                    {setteamList(
                    searchdata.filter(person =>
                    person.clientname.includes(nameSearch)
                    )
                    );console.log(nameSearch)}
                    }
                    id="input-s"
                    />
                    </Col>
                </Row>
              </div>
            </div>



            <div class="common-table">
              <div class="row">
                <div class="col-md-5">
                <span class="data-per-page">Data Per page</span>
                </div>
                <div class="col-md-7">
                  {/* <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8"> */}
                      <div class="data-export">
                       
                        <span class="count-drop" style={{width:100+'px'}}>
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
                          {/* <button class="Import">Import</button> */}
                        
                      {/* </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <Table id="sample" columns={teamcol} dataSource={teamlist}
                rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
            </div>

          </div>
        </div>


      </section>
    </>
  );
}

export default ProjectsListSalesDir;