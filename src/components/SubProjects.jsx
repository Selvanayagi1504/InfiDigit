import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import {Dropdown} from 'react-bootstrap'

import { Breadcrumb } from 'antd';
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

function SubProjects() {

  

  const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filterservice=[], filterprojtype=[], filterprojassigned=[];
        data.push({
          key: 0,
          clientname:`Myntra`,
            clientcode:`10`,
            service:`website`,
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            projtype: "Seller",
            projassigned:`Ankit`,
            projpoc:"Rahul",
            edit:<div><a href="edit-project"><i class="fa fa-cog"></i></a><a style={{marginLeft:24+'px'}} href="/module-expand-da">View Report</a></div>
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
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            clientname:`Myntra ${i}`,
            clientcode:`10${i}`,
            service:`website ${i}`,
            contractstart: "03/05/2020",
            contractend:"03/05/2021",
            projtype: "Retainer",
            projassigned:`Ankit ${i}`,
            projpoc:"Rahul",
            edit:<div><a href="edit-project"><i class="fa fa-cog"></i></a><a style={{marginLeft:24+'px'}} href="/module-expand-da">View Report</a></div>

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
        }
        // [...new Map(array.map((x) => [x[key], x])).values()];
        filterservice = [... new Set(filterservice.map(JSON.stringify))].map(JSON.parse)
        filterprojtype = [... new Set(filterprojtype.map(JSON.stringify))].map(JSON.parse)
        filterprojassigned = [... new Set(filterprojassigned.map(JSON.stringify))].map(JSON.parse)

        setsearch(data);
        setteamList(data);
        const columns = [
            {
              title: "Client Name",
              dataIndex: "clientname",
              key: "clientname"
            },
            {
              title: "Client Code",
              dataIndex: "clientcode",
              key: "clientcode"
            },
            {
                title:"Service Offered",
                dataIndex:"service",
                key:"service",
                filters:filterservice,
                filterSearch: true,
                onFilter: (value, record) => record.service.indexOf(value) === 0
            },
            {
                title:"Contract Start Date",
                dataIndex:"contractstart",
                key:"contractstart",
            },
            {
                title:"Contract End Date",
                dataIndex:"contractend",
                key:"contractend",
            },
            {
                title:"Project Type",
                dataIndex:"projtype",
                key:"projtype",
                filters:filterprojtype,
                filterSearch: true,
                onFilter: (value, record) => record.projtype.indexOf(value) === 0
            },
            {
                title:"Project Assigned To",
                dataIndex:"projassigned",
                key:"projassigned",
                filters:filterprojassigned,
                filterSearch: true,
                onFilter: (value, record) => record.projassigned.indexOf(value) === 0
            },
            {
              title:"Project POC",
              dataIndex:"projpoc",
              key:"projpoc",
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
                    <span class="profile-name">SEO</span>
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
            <li>
              <UncontrolledButtonDropdown className="uncontrolled">
                <DropdownToggle caret size="md" >
                  Dashboard <i class="fa fa-angle-right"  aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <div className="main">Clients</div>
                  <span><a href="dashboard-seo?id=Myntra"> Myntra </a></span>
                  <DropdownItem href="dashboard-seo?id=Myntra-Shoes">Myntra Shoes</DropdownItem>
                  <DropdownItem href="dashboard-seo?id=Myntra-Loafers">Myntra Loafers</DropdownItem>
                  <span ><a href="dashboard-seo?id=Amazon"> Amazon </a></span>
                  <DropdownItem href="dashboard-seo?id=Amazon - Fashion">Fashion</DropdownItem>
                  <DropdownItem href="dashboard-seo?id=Amazon - Jewellery">Jewellery</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </li>
            <li><a href="sub-projects"><i class="fa fa-tasks"></i> Projects</a></li>
            <li><a href="ticketslist"><i class="fa fa-ticket"></i>Tickets</a></li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
          <Breadcrumb>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/dashboard-seo">Dashboard</a></Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/sub-projects">Projects</a>
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
                <div class="data-per-page">Data Per page</div>
                </div>
                <div class="col-md-7">
                  {/* <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8"> */}
                      <div class="data-export">
                        
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

export default SubProjects;