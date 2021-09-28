import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import {Dropdown} from 'react-bootstrap'



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ClinetsSalesDir() {

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
          name:<Link to={{pathname: '/edit-client', search: `?id=0`,state: { detail: "1" }}}> Myntra 0 </Link>,
          clientid:`100`,
          poc:`Raj 0`,
          date: "03/05/2020",
          city: "Chennai",
          status:`Lead`,
          actde:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
            view:<div><i class="fa fa-trash" style={{marginRight:24+'px', color:"#0d6efd"}}></i><a href="project-sales-dir">View Project</a></div>
        });
        filtercity.push({
            text:"Chennai",
            value:"Chennai"
        })
        filterstatus.push({
            text:"Lead",
            value:"Lead"
        })
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            id:i,
            name:<Link to={{pathname: '/edit-client', search: `?id=${i}`,state: { detail: "1" }}}> Myntra {i} </Link>,
            clientid:`10${i}`,
            poc:`Raj ${i}`,
            date: "03/05/2020",
            city: "Bangalore",
            status:`Laed${i}`,
            actde:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
            view:<div><i class="fa fa-trash" style={{marginRight:24+'px', color:"#0d6efd"}}></i><a href="project-sales-dir">View Project</a></div>
        });
        filtercity.push({
          text:"Bangalore",
          value:"Bangalore"
        })
        filterstatus.push({
            text:`Lead${i}`,
            value:`Lead${i}`
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
              title: "Name",
              dataIndex: "name",
              key: "name"
            },
            {
                title:"Client ID",
                dataIndex:"clientid",
                key:"clientid",
            },
            {
                title:"POC",
                dataIndex:"poc",
                key:"poc",
            },
            {
                title:"Date",
                dataIndex:"date",
                key:"date",
            },
            {
                title:"City",
                dataIndex:"city",
                key:"city",
                filters:filtercity,
                filterSearch: true,
                onFilter: (value, record) => record.city.indexOf(value) === 0
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
                title:"Activate / Deactivate",
                dataIndex:"actde",
                key:"actde"
            },
            {
                title:"Action",
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
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">CLIENTS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        <a href="create-client" class="outline-btn">Add New</a>
                    </div>
                </div>


                

                <div class="common-table" >
                    <div class="row">
                        <div class="col-md-5"></div>
                        <div class="col-md-7">
                            {/* <div class="row">
                                <div class="col-md-0"></div>
                                <div class="col-md-12"> */}
                                    <div class="data-export-client">
                                        <span class="data-per-page-client">Data Per page</span>
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

export default ClinetsSalesDir;
