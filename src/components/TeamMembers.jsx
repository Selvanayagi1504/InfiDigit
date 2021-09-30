// import React, { useState, useEffect } from "react";
// // import $ from 'jquery';
import {Dropdown} from 'react-bootstrap'


// import {Link} from 'react-router-dom';
// import {useHistory} from "react-router-dom";
// import "antd/dist/antd.css";
// import { Table, Input,  Row,  Col } from "antd";
// import { Breadcrumb } from 'antd';



// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//   };

// function TeamMembers() {
//     const [teamlist, setteamList] = useState([]);
//     const [selectionType, setSelectionType] = useState('checkbox');
//     const [teamcol,setteamcol] = useState([]);
//     const [searchdata,setsearch] = useState([]);
//     useEffect(()=>{
//         const data = [];
//         var filterdesig=[], filterdpmt=[], filtersrsupervisor=[], filtersupervisor=[];
//         var k="N/A";
//         data.push({
//             key: "0",
//             tmcode:"1001",
//             name: "Ankit",
//             tmdesignation: "SEO",
//             department: "Operations",
//             tmjoinigdate:"01/02/2000",
//             tmsupervisor:"Ravi",
//             tmsrsupervisor:"Kiran",
//             dob:"15/04/1997",
//             phone:"8796541230",
//             email:"ankit@infidigit.com",
//             salary:"######",
//             tmstatus:<button class="active">Active</button>,
//             accntactivation:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
//             lastwrkdate:k
//         });
//         filterdesig.push({
//             text:"SEO",
//             value:"SEO"
//         })
//         filterdpmt.push({
//             text:"Operations",
//             value:"Operations"
//         })
//         filtersupervisor.push({
//             text:"Ravi",
//             value:"Ravi"
//         })
//         filtersrsupervisor.push({
//             text:"Kiran",
//             value:"Kiran"
//         })
//         for (let i = 1; i < 100; i++) {
//           var  k=<input type="date" value="2021-08-26" />;
//         data.push({
//             key: i,
//             tmcode:<Link to={{pathname: '/edit-employee', search: `?id=${i}`,state: { detail: "1" }}}> {i} </Link>,
//             name: `Edrward ${i}`,
//             tmdesignation: `Man ${i}`,
//             department: `department ${i}`,
//             tmjoinigdate:"01/02/2000",
//             tmsupervisor:"Kiran ",
//             tmsrsupervisor:"kaushal",
//             dob:"15/04/1997",
//             phone:"9022568981",
//             email:"edward@infidigit.com",
//             salary:"######",
//             tmstatus:<button class="deactivate">Resigned</button>,
//             accntactivation:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
//             lastwrkdate: k
//         });
//         filterdesig.push({
//             text:`Man ${i}`,
//             value:`Man ${i}`
//         })
//         filterdpmt.push({
//             text:`department ${i}`,
//             value:`department ${i}`
//         })
//         filtersupervisor.push({
//             text:"Kiran",
//             value:"Kiran"
//         })
//         filtersrsupervisor.push({
//             text:"Kaushal",
//             value:"kaushal"
//         })
//         }
//         // [...new Map(array.map((x) => [x[key], x])).values()];
//         filterdesig = [... new Set(filterdesig.map(JSON.stringify))].map(JSON.parse)
//         filterdpmt = [... new Set(filterdpmt.map(JSON.stringify))].map(JSON.parse)
//         filtersupervisor = [... new Set(filtersupervisor.map(JSON.stringify))].map(JSON.parse)
//         filtersrsupervisor = [... new Set(filtersrsupervisor.map(JSON.stringify))].map(JSON.parse)
//         setsearch(data);
//         setteamList(data);
//         const columns = [
//             {
//               title: "TM Code",
//               dataIndex: "tmcode",
//               key: "tmcode"
//             },
//             {
//               title: "Name",
//               dataIndex: "name",
//               key: "name"
//             },
//             {
//                 title:"TM Designation",
//                 dataIndex:"tmdesignation",
//                 key:"tmdesignation",
//                 filters:filterdesig,
//                 filterSearch: true,
//                 onFilter: (value, record) => record.tmdesignation.indexOf(value) === 0
//             },
//             {
//                 title:"Department",
//                 dataIndex:"department",
//                 key:"department",
//                 filters:filterdpmt,
//                 filterSearch: true,
//                 onFilter: (value, record) => record.department.indexOf(value) === 0
//             },
//             {
//                 title:"TM Joining Date",
//                 dataIndex:"tmjoinigdate",
//                 key:"tmjoinigdate",
//             },
//             {
//                 title:"TM Supervisor",
//                 dataIndex:"tmsupervisor",
//                 key:"tmsupervisor",
//                 filters:filtersupervisor,
//                 filterSearch: true,
//                 onFilter: (value, record) => record.tmsupervisor.indexOf(value) === 0
//             },
//             {
//                 title:"TM Sr. Supervisor",
//                 dataIndex:"tmsrsupervisor",
//                 key:"tmsrsupervisor",
//                 filters:filtersrsupervisor,
//                 filterSearch: true,
//                 onFilter: (value, record) => record.tmsrsupervisor.indexOf(value) === 0
//             },
//             {
//                 title:"Date Of Birth",
//                 dataIndex:"dob",
//                 key:"dob"
//             },
//             {
//                 title:"Phone Number",
//                 dataIndex:"phone",
//                 key:"phone"
//             },
//             {
//                 title:"Email ID",
//                 dataIndex:"email",
//                 key:"email"
//             },
//             {
//                 title:"Salary",
//                 dataIndex:"salary",
//                 key:"salary"
//             },
//             {
//                 title:"TM Status",
//                 dataIndex:"tmstatus",
//                 key:"tmstatus"
//             },
//             {
//                 title:"Account Activation",
//                 dataIndex:"accntactivation",
//                 key:"accntactivation"
//             },
//             {
//                 title:"Last Working Date",
//                 dataIndex:"lastwrkdate",
//                 key:"lastwrkdate"
//             },
//           ];
//           setteamcol(columns);
//     },[]);
//     const history = useHistory();
//     function editemp(a){
//         history.push({
//             pathname: "/edit-employee",
//             state: {
//               val: "helo"
//             }
//           });
//     }
//     const [sidenav,setsidenav] = useState(false);
// return (
// <>
//     <section class="outer-wrapper team-members">
//         <div class="top-nav-bar">
//             <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
//             <div class="nav-bar-center">&nbsp;</div>
//             <div class="nav-bar-right">
//                 <ul class="list-unstyled nav-right-menu">
//                 <li>
//                     <Dropdown id="notification-dropdown">
//                         <Dropdown.Toggle id="dropdown-basic">
//                         <i class="fa fa-bell"></i>
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                             <Dropdown.Item href="">
//                                 <div className="notification-item">
//                                     <h4>Raj - Welcome here!!</h4>
//                                     <p>21 hours ago..</p>
//                                 </div>
//                             </Dropdown.Item>
//                             <hr />
//                             <Dropdown.Item href="">
//                                 <div className="notification-item">
//                                     <h4>Raj - You are</h4>
//                                     <p>8 hours ago..</p>
//                                 </div>
//                             </Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                     </li>

//                     <li class="dropdown">
//                         <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
//                             <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
//                             <span class="profile-name">M.Subash</span>
//                         </button>



//                         <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                             <li><a href="">Profile</a></li>

//                             <li><a href="/">Log Out</a></li>
//                         </ul>

//                     </li>
//                 </ul>
//             </div>
//             <div class="clearfix"></div>
//         </div>

//         <div class="sidebar-nav-bar">
//             <ul class="list-unstyled side-menu">
//                 <li><a href="dashboard.html"><i class="fa fa-columns"></i> Dashboard</a></li>

//                 <li><a href=""><i class="fa fa-users"></i> Team Members</a></li>
//             </ul>
//         </div>
//         <div class="content-wrapper">
//             <div class="dashboard-wrapper">
//         {/* <Row type="flex" gutter={10}>
//           <Col>
//             <Typography>Auto Complete Search</Typography>
//           </Col>
//           <Col>
//             <AutoComplete dataSource={teamlist.map(person => person.name)}>
//               <Input.Search
//                 allowClear
//                 onSearch={nameSearch =>
//                   setteamList(
//                     teamlist.filter(person =>
//                       person.name.includes(nameSearch)
//                     )
//                   )
//                 }
//               />
//             </AutoComplete>
//           </Col>
//         </Row> */}
//             <Breadcrumb>
//               <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
//               <Breadcrumb.Item>
//               <a href="/team-members">Team Members</a>
//               </Breadcrumb.Item>
//           </Breadcrumb>
//                 <div class="row">
//                     <div class="col-sm-5 pad-lzero">
//                         <div class="main-title">TEAM MEMBERS</div>
//                     </div>
//                     <div class="col-sm-7 add-new-btnw">
//                         {/* <a href="#" class="outline-btn">Add New</a> */}
//                     </div>
//                 </div>

//                 <div class="search">
//                     <div class="input-group">
//                         <Row type="flex" gutter={10} style={{ marginBottom: 10 }}>
//                             <Col>
                                
//                             </Col>
//                             <Col>
//                                 <Input.Search
//                                 allowClear
//                                 placeholder="Search By name"
//                                 onSearch={nameSearch =>
//                                     {setteamList(
//                                         searchdata.filter(person =>
//                                         person.name.includes(nameSearch)
//                                         )
//                                     );console.log(nameSearch)}
//                                 }
//                                 id="input-s"
//                                 />
//                             </Col>
//                         </Row>
//                     </div>
//                 </div>

                

//                 <div class="common-table" >
//                 <div class="row">
//                     <div class="col-md-5">
//                         <div class="data-per-page">Data Per page</div>
//                     </div>
//                     <div class="col-md-7">
//                         <div class="row">
//                             <div class="col-md-4"></div>
//                             <div class="col-md-8">
//                                 <div class="data-export">
                                    
//                                     <span class="count-drop" style={{width:100+'px'}}>
//                                     </span>
//                                     <span class="export">
//                                         <select id="export" name="export">
//                                             <option value="Export">Export</option>
//                                             <option value="PDF">Excel</option>
//                                             <option value="WORD">CSV</option>
//                                             <option value="Sheets">Sheets</option>
//                                         </select>
//                                     </span>
//                                     <span>
//                                         <button class="Import">Import</button>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                     <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
//                 </div>

//             </div>
//         </div>


//     </section>
// </>
// );
// }

// export default TeamMembers;




import React, { useState, useEffect } from "react";
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

function TeamMembers() {
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filterdesig=[], filterdpmt=[], filtersrsupervisor=[], filtersupervisor=[];
        var k=<input type="date" value="2021-08-26" />;
        data.push({
            key: "0",
            tmcode:"1001",
            name: "Ankit",
            tmdesignation: "SEO",
            department: "Operations",
            tmjoinigdate:"01/02/2000",
            tmsupervisor:"Ravi",
            tmsrsupervisor:"Kiran",
            dob:"15/04/1997",
            phone:"8796541230",
            email:"ankit@infidigit.com",
            salary:"######",
            tmstatus:<button class="deactivate">Resigned</button>,
            accntactivation:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
            lastwrkdate:k
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
          var  k="N/A";
        data.push({
            key: i,
            tmcode:<Link to={{pathname: '/edit-employee', search: `?id=${i}`,state: { detail: "1" }}}> {i} </Link>,
            name: `Edrward ${i}`,
            tmdesignation: `Man ${i}`,
            department: `department ${i}`,
            tmjoinigdate:"01/02/2000",
            tmsupervisor:"Kiran ",
            tmsrsupervisor:"kaushal",
            dob:"15/04/1997",
            phone:"9022568981",
            email:"edward@infidigit.com",
            salary:"######",
            tmstatus:<button style={{width:"130px"}} class="active">Active</button>,
            accntactivation:<label  class="switch"><input data-onstyle="success" type="checkbox" /><span  class="slider round"></span></label>,
            lastwrkdate: k
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
              title: "TM Code",
              dataIndex: "tmcode",
              key: "tmcode"
            },
            {
              title: "Name",
              dataIndex: "name",
              key: "name"
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
                title:"Department",
                dataIndex:"department",
                key:"department",
                filters:filterdpmt,
                filterSearch: true,
                onFilter: (value, record) => record.department.indexOf(value) === 0
            },
            {
                title:"TM Joining Date",
                dataIndex:"tmjoinigdate",
                key:"tmjoinigdate",
            },
            {
                title:"TM Supervisor",
                dataIndex:"tmsupervisor",
                key:"tmsupervisor",
                filters:filtersupervisor,
                filterSearch: true,
                onFilter: (value, record) => record.tmsupervisor.indexOf(value) === 0
            },
            {
                title:"TM Sr. Supervisor",
                dataIndex:"tmsrsupervisor",
                key:"tmsrsupervisor",
                filters:filtersrsupervisor,
                filterSearch: true,
                onFilter: (value, record) => record.tmsrsupervisor.indexOf(value) === 0
            },
            {
                title:"Date Of Birth",
                dataIndex:"dob",
                key:"dob"
            },
            {
                title:"Phone Number",
                dataIndex:"phone",
                key:"phone"
            },
            {
                title:"Email ID",
                dataIndex:"email",
                key:"email"
            },
            {
                title:"Salary",
                dataIndex:"salary",
                key:"salary"
            },
            {
                title:"TM Status",
                dataIndex:"tmstatus",
                key:"tmstatus"
            },
            {
                title:"Account Activation",
                dataIndex:"accntactivation",
                key:"accntactivation"
            },
            {
                title:"Last Working Date",
                dataIndex:"lastwrkdate",
                key:"lastwrkdate"
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
                            <span class="profile-name">HR</span>
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
               <li><a href="dashboard.html"><i class="fa fa-columns"></i> Dashboard</a></li>
                <li><a href=""><i class="fa fa-users"></i> Team Members</a></li>
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
                    <div class="col-md-5">
                        <div class="data-per-page">Data Per page</div>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-8">
                                <div class="data-export">
                                    
                                    <span class="count-drop" style={{width:100+'px'}}>
                                    </span>
                                    <span class="export">
                                        <button class="ms-5 outline-btn ">Import</button>
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

export default TeamMembers;