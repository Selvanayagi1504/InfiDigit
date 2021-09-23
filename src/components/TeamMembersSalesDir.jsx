import React, { useState, useEffect } from "react";
import {Dropdown} from 'react-bootstrap'

// import $ from 'jquery';

import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";


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
            name: <Link to={{pathname: '/project-sales-dir', state: { detail: "1" }}}>Edrward 0</Link>,
            tmcode:0,
            tmdesignation: `Man 0`,
            dob:"sample",
            phone:"samp",
            email:"samp",
        });
        filterdesig.push({
            text:"SEO",
            value:"SEO"
        })
        filterdpmt.push({
            text:"Operations",
            value:"Operations"
        })
        filtersupervisor.push({
            text:"Ravi",
            value:"Ravi"
        })
        filtersrsupervisor.push({
            text:"Kiran",
            value:"Kiran"
        })
        for (let i = 1; i < 100; i++) {
          var  k=<input type="date" value="2021-08-26" />;
        data.push({
            key: i,
            name: <Link to={{pathname: '/project-sales-dir', search: `?id=${i}`,state: { detail: "1" }}}>Edrward {i}</Link>,
            tmcode:i,
            tmdesignation: `Man ${i}`,
            dob:"sample",
            phone:"samp",
            email:"samp",
        });
        filterdesig.push({
            text:`Man ${i}`,
            value:`Man ${i}`
        })
        filterdpmt.push({
            text:`department ${i}`,
            value:`department ${i}`
        })
        filtersupervisor.push({
            text:"Kiran",
            value:"Kiran"
        })
        filtersrsupervisor.push({
            text:"Kaushal",
            value:"kaushal"
        })
        }
        // [...new Map(array.map((x) => [x[key], x])).values()];
        filterdesig = [... new Set(filterdesig.map(JSON.stringify))].map(JSON.parse)
        filterdpmt = [... new Set(filterdpmt.map(JSON.stringify))].map(JSON.parse)
        filtersupervisor = [... new Set(filtersupervisor.map(JSON.stringify))].map(JSON.parse)
        filtersrsupervisor = [... new Set(filtersrsupervisor.map(JSON.stringify))].map(JSON.parse)
        setsearch(data);
        setteamList(data);
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            {
              title: "Emp Code",
              dataIndex: "tmcode",
              key: "tmcode"
            },
            {
                title:"TM Designation",
                dataIndex:"tmdesignation",
                key:"tmdesignation",
                filters:filterdesig,
                filterSearch: true,
                onFilter: (value, record) => record.tmdesignation.indexOf(value) === 0
            },
            {
                title:"",
                dataIndex:"dob",
                key:"dob"
            },
            {
                title:"",
                dataIndex:"phone",
                key:"phone"
            },
            {
                title:"",
                dataIndex:"email",
                key:"email"
            },

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

return (
<>
    <section class="outer-wrapper team-members">
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
                <li><a href="dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
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
        {/* <Row type="flex" gutter={10}>
          <Col>
            <Typography>Auto Complete Search</Typography>
          </Col>
          <Col>
            <AutoComplete dataSource={teamlist.map(person => person.name)}>
              <Input.Search
                allowClear
                onSearch={nameSearch =>
                  setteamList(
                    teamlist.filter(person =>
                      person.name.includes(nameSearch)
                    )
                  )
                }
              />
            </AutoComplete>
          </Col>
        </Row> */}
            
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">TEAM MEMBERS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
                </div>

                <div class="search">
                    <div class="input-group">
                        <Row type="flex" gutter={10} style={{ marginBottom: 10 }}>
                            <Col>
                                
                            </Col>
                            <Col>
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
                            </Col>
                        </Row>
                    </div>
                </div>

                

                <div class="common-table" >
                <div class="row">
                    <div class="col-md-5"></div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-8">
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
                                        <button class="Import">Import</button>
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