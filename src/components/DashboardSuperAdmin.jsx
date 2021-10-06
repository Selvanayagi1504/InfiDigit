import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import "antd/dist/antd.css";
import { Table, Breadcrumb, Input } from "antd";
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};





function DashboardSuperAdmin() {
    const [sidenav,setsidenav] = useState(false);
    const [sidenavsales, setsidenavsales] = useState(false);
    const [OrganizationTable, setOrganizationTable] = useState([]);
    const [OrganizationCol, setOrganizationCol] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        var columns = [];
        columns = [
            {
                title: "Company Name",
                dataIndex: "companyname",
                key: "companyname",
                width:"10%"
            },
            {
                title:"Super Admin",
                dataIndex:"superadmin",
                key:"superadmin",
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"80%"
            },
        ]
        setOrganizationCol(columns);
        var data = [
            {
                key:"0",
                companyname:"Amazon",
                superadmin:"hr@amazon.in"
            },
            {
                key:"1",
                companyname:"Myntra",
                superadmin:"hr@myntra.in"
            },
            {
                key:"2",
                companyname:"CureFit",
                superadmin:"hr@cure.in"
            },
        ]
        setOrganizationTable(data);
        setsearch(data);
    },[])
return (
<>
<section class="outer-wrapper dashboard-sales">
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
                    <span class="profile-name">Super Admin</span>
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
      <li><a href="">Organization</a></li>
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
        <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/dashboard-super-admin">Organizations</a>
            </Breadcrumb.Item>
        </Breadcrumb>
        <div class="row">
            <div class="col-sm-5 pad-lzero">
            <div class="main-title">Organization</div>
            </div>
            <div className="col-sm-7 add-new-btnw">
            <button class="outline-btn">Add new Organization</button>
            </div>
        </div>
        
        <div class="common-table" >
            <div class="row">
                <div class="col-md-5">
                
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
                                {setOrganizationTable(
                                    searchdata.filter(person =>
                                    person.companyname.includes(nameSearch)
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
            <Table id="sample-module-expand" columns={OrganizationCol} dataSource={OrganizationTable} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
        </div>
    </div>
  </div>

  
</section>
</>
);
}

export default DashboardSuperAdmin;