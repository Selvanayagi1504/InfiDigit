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
            projcode:`proj 0`,
            client:`Myn`,
            projpoc:"Rahul",
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            status:"completed",
            edit:<div><a href="view-client-sales-dir"><i class="fa fa-cog"></i></a><a style={{marginLeft:24+'px'}} href="/module-expand-da">View Report</a></div>
        });
        filterprojtype.push({
          text:"Seller",
          value:"Seller"
        })
        filterprojassigned.push({
          text:`Ankit`,
          value:`Ankit`
      })
        filterservice.push({
            text:`website`,
            value:`website`
        })
        filterclient.push({
            text:"Myn",
            value:"Myn"
        })
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            projcode:`proj ${i}`,
            client:`Myntra ${i}`,
            projpoc:"Rahul",
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            status:"active",
            edit:<div><a href="view-client-sales-dir"><i class="fa fa-cog"></i></a><a style={{marginLeft:24+'px'}} href="/module-expand-da">View Report</a></div>

        });
        filterprojtype.push({
          text:"Retainer",
          value:"Retainer"
        })
        filterprojassigned.push({
          text:`Ankit ${i}`,
          value:`Ankit ${i}`
        })
        filterservice.push({
            text:`website ${i}`,
            value:`website ${i}`
        })
        filterclient.push({
            text:`Myntra ${i}`,
            value:`Myntra ${i}`
        })
        }
        // [...new Map(array.map((x) => [x[key], x])).values()];
        filterservice = [... new Set(filterservice.map(JSON.stringify))].map(JSON.parse)
        filterprojtype = [... new Set(filterprojtype.map(JSON.stringify))].map(JSON.parse)
        filterprojassigned = [... new Set(filterprojassigned.map(JSON.stringify))].map(JSON.parse)
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
                filters:[{text:"active", value:"active"},{text:"completed",value:"completed"},{text:"unallocated",value:"unallocated"}],
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
                                    <h4>Raj - Welcome here!!</h4>
                                    <p>21 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="">
                                <div className="notification-item">
                                    <h4>Raj - You are</h4>
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
            <li><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
            <li>
                <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="drop-dire">
                Sales <i class="fa fa-angle-right side-dropdown"  aria-hidden="true"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="team-members-sales-dir">Team Members</Dropdown.Item>
                    <Dropdown.Item href="clinets-sales-dir">Clients</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </li>
            <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>

          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
          <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/edit-project">SEO</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/module-expand-da">View Report</a>
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
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  {/* <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8"> */}
                      <div class="data-export">
                        <span class="data-per-page">Data Per page</span>
                        <span class="count-drop" style={{width:100+'px'}}>
                        </span>
                        <span class="export">
                          <select id="export" name="export">
                            <option value="Export">Export</option>
                            <option value="PDF">Excel</option>
                            <option value="WORD">CSV</option>
                            <option value="Sheets">Sheets</option>
                          </select>
                        </span>
                        <span>
                          {/* <button class="Import">Import</button> */}
                        </span>
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