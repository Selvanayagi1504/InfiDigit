import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb,Input, } from "antd";


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};
function DashboardAdmin() {
  const [sidenav,setsidenav] = useState(false);
  const [teamlist, setteamList] = useState([]);
  const [selectionType, setSelectionType] = useState('checkbox');
  const [teamcol,setteamcol] = useState([]);
  const [searchdata,setsearch] = useState([]);

  useEffect(()=>{
    var columns = [
        {
            title:"Audit Module",
            dataIndex:"modulename",
            key:"modulename",
            width:"15%"
        },
        {
            title:"Actions",
            dataIndex:"actions",
            key:"actions",
            width:"10%"
        },
        {
            title:"",
            dataIndex:"",
            key:"",
            width:"75%"
        }
    ]
    setteamcol(columns);
    var data = [
        {
            key:"1",
            modulename:"Audit Module 1",
            actions:<div><Link class="common-mr-24" to={{pathname: '/admin-audit-update', search: `?id=1`,state: { detail: "1" }}}> View </Link><i class="fa fa-trash"></i></div>
        },
        {
            key:"2",
            modulename:"Audit Module 2",
            actions:<div><Link class="common-mr-24" to={{pathname: '/admin-audit-update', search: `?id=2`,state: { detail: "2" }}}> View </Link><i class="fa fa-trash"></i></div>
        },
        {
            key:"3",
            modulename:"Audit Module 3",
            actions:<div><Link class="common-mr-24" to={{pathname: '/admin-audit-update', search: `?id=3`,state: { detail: "3" }}}> View </Link><i class="fa fa-trash"></i></div>
        },
        {
            key:"4",
            modulename:"Audit Module 4",
            actions:<div><Link class="common-mr-24" to={{pathname: '/admin-audit-update', search: `?id=4`,state: { detail: "4" }}}> View </Link><i class="fa fa-trash"></i></div>
        }
    ]
    setteamList(data);
    setsearch(data)
  },[])
  
  
return (
<>
<section class="outer-wrapper">
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
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Admin</span>
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
        <li><a href="/dashboard-admin"> Audit</a></li>
        <li><a href="/access-permissions-admin">Access Permissions</a></li>
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
        <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/dashboard-admin">Audit</a>
            </Breadcrumb.Item>
            
        </Breadcrumb>
      
        <div class="row">
            <div class="col-sm-5 pad-lzero">
                <div class="main-title">Audit</div>
            </div>
            <div class="col-sm-7 add-new-btnw">
                <a href="admin-audit-update" class="outline-btn">Add New Module</a>
            </div>
        </div>        

        <div class="common-table" >
            <div class="row common-mb-24">
                <div class="col-md-5">
                </div>
                <div class="col-md-7">
                    <div class="data-export-client">
                        <span class="count-drop">
                        </span>
                        <span class="common-mr-24">
                        <Input.Search
                            allowClear
                            placeholder="Search By name"
                            onSearch={nameSearch =>
                                {setteamList(
                                    searchdata.filter(person =>
                                    person.modulename.includes(nameSearch)
                                    )
                                );console.log(nameSearch)}
                            }
                            id="input-s"
                        />
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
            <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
        </div>

        
        
      
    </div>
  </div>

  
</section>
</>
);
}
function MyFDate() {
  var myCurrentDate = new Date();
  var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate();
  let a =new Date(date)
  let longMonth = a.toLocaleString('en-us', { month: 'long' });
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  date = days[myCurrentDate.getDay()]+', ' +myCurrentDate.getDate()+' ' + longMonth;
  const newCurrentDate =date;
  return (
    <p>{newCurrentDate}</p>
  );
}
export default DashboardAdmin;