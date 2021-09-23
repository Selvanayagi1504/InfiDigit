import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input, Row, Col } from "antd";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

// function ViewClientDetails() {
//   const [optionSelected, setoptionSelected] = useState(null);
//   function handleChange(selected) {
//     setoptionSelected(selected);
//   }
//   const [colourOptions, setcolor] = useState([
//     { value: "Ankit", label: "Ankit" },
//     { value: "Monal", label: "Monal" },
//     { value: "Rahul", label: "Rahul" },
//     { value: "Ravi", label: "Ravi" },
//   ]);
//   const [teamlist, setteamList] = useState([]); //team members list
//   function assign() {
//     var data = [];
//     optionSelected.map((i) => {
//       data.push({
//         teammember: `${i.value}`,
//         date: "02/05/2021",
//         delete: (
//           <a href="">
//             <i class="fa fa-trash"></i>
//           </a>
//         ),
//       });
//     });
//     setteamList(data);
//   }
function TicketsList() {
  const [teamlist, setteamList] = useState([]);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [teamcol, setteamcol] = useState([]);
  const [searchdata, setsearch] = useState([]);
  
  useEffect(() => {
    const data = [];
    var filtercity = [],
      filterstatus = [];
    data.push({
      key: 0,
      id: 0,
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: "overDue",
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    data.push({
      key: 0,
      id: 0,
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: "Resolved",
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    filtercity.push({
      text: "Chennai",
      value: "Chennai",
    });
    filterstatus.push({
      text: "Active",
      value: "Active",
    });
    for (let i = 1; i < 9; i++) {
      data.push({
        key: i,
        id: i,
        type: "Competitor Alert",
        subject: "Myntra show page down",
        priority: "High",
        status: "In Progress",
        raisedby: "BOT",
        raisedon: "03/05/2020",
        duedate: "03/05/2021",
        assignedto: "Manav",
        project: "Myntra:shoes",
        module: "",
        lastupdate: "RAJ",
        view: <a href="view-client-details">View</a>,
      });
      filtercity.push({
        text: "Bangalore",
        value: "Bangalore",
      });
      filterstatus.push({
        text: `Completed${i}`,
        value: `Completed${i}`,
      });
    }
    filtercity = [...new Set(filtercity.map(JSON.stringify))].map(JSON.parse);
    filterstatus = [...new Set(filterstatus.map(JSON.stringify))].map(
      JSON.parse
    );
    setsearch(data);
    setteamList(data);
    const columns = [
      {
        title: "Ticket #",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Subject",
        dataIndex: "subject",
        key: "subject",
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Raised By",
        dataIndex: "raisedby",
        key: "raisedby",
      },
      {
        title: "Raised On",
        dataIndex: "raisedon",
        key: "raisedon",
      },
      {
        title: "Due Date",
        dataIndex: "duedate",
        key: "duedate",
      },
      {
        title: "Assigned To",
        dataIndex: "assignedto",
        key: "assignedto",
      },
      {
        title: "Project",
        dataIndex: "project",
        key: "project",
      },
      {
        title: "Module",
        dataIndex: "module",
        key: "module",
      },
      {
        title: "Last Update",
        dataIndex: "lastupdate",
        key: "lastupdate",
      },
    ];
    setteamcol(columns);
  }, []);
  function addticket() {
    var a = document.getElementById("newticket").value;
    var data = JSON.parse(JSON.stringify(teamlist));
    var i = teamlist.length;
    data.push({
      key: i,
      id: i,
      type: "Alert",
      subject: a,
      priority: "High",
      status: "In",
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    setteamList(data);
    document.getElementById("newticket").value="";
  }
  const [sidenav, setsidenav] = useState(false);
  return (
    <>
      <section class="outer-wrapper client-list">
        <div class="top-nav-bar">
          <div class="logo">
            <a href="">
              <img src="images/infidigit-logo.png" />
            </a>{" "}
            <span>Growth</span>
          </div>
          <div class="nav-bar-center">&nbsp;</div>
          <div class="nav-bar-right">
            <ul class="list-unstyled nav-right-menu">
              <li>
                <i class="fa fa-bell"></i>
              </li>

              <li class="dropdown">
                <button
                  onClick={() => {
                    console.log("hiii");
                    setsidenav(!sidenav);
                  }}
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                >
                  <span class="profile-pic">
                    <img src="images/profile-pic.jpeg" alt="" />
                  </span>
                  <span class="profile-name">M.Subash</span>
                </button>

                <ul
                  style={{ display: sidenav ? "block" : "none" }}
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a href="">Profile</a>
                  </li>

                  <li>
                    <a href="/">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="sidebar-nav-bar">
          <ul class="list-unstyled side-menu">
            <li>
              <a href="dashboard.html">
                <i class="fa fa-columns"></i> Dashboard
              </a>
            </li>

            <li>
              <a href="client-list">
                <i class="fa fa-users"></i> Customers
              </a>
            </li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">

          <div style={{ display: "flex" }}>
              <label>add</label>
              <input type="text" id="newticket" />
              <button onClick={addticket}>Add</button>
            </div>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">TICKET</div>
              </div>
              <div class="col-sm-7 add-new-btnw">
                <a href="create-project" class="outline-btn">
                  Add New Project
                </a>
              </div>
            </div>
            {/* 
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">ASSIGN TEAM MEMBERS</div>
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <ReactSelect
                  options={colourOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  components={{
                    Option,
                  }}
                  onChange={handleChange}
                  allowSelectAll={true}
                  value={optionSelected}
                />
              </div>
              <div className="col-md-3">
                <button onClick={() => assign()} class="outline-btn">
                  Assign
                </button>
              </div>
            </div>
            <hr /> */}

            <div class="common-table">
              <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  {/* <div class="row">
                                <div class="col-md-0"></div>
                                <div class="col-md-12"> */}
                  <div class="data-export-client">
                    <span class="data-per-page-client">Data Per page</span>
                    <span class="count-drop"></span>
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
                        onSearch={(nameSearch) => {
                          setteamList(
                            searchdata.filter((person) =>
                              person.name.includes(nameSearch)
                            )
                          );
                          console.log(nameSearch);
                        }}
                        id="input-s"
                      />
                    </span>
                  </div>
                  {/* </div>
                            </div> */}
                </div>
              </div>
              <Table id="sample" columns={teamcol} dataSource={[...teamlist]} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketsList;