import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Dropdown} from 'react-bootstrap'
import { Table, Input, Row, Col, Space, Tag } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";
import Barchart from "../components/barchart";
import Filter from "./assets/funnel-fill.svg";
import "antd/dist/antd.css";
import { Breadcrumb } from 'antd';
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

// filter by dropdown
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

//antd calendar
function onChange1(date, dateString) {
  console.log(date, dateString);
}

function TicketsListSales() {
  const [teamlist, setteamList] = useState([]);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [teamcol, setteamcol] = useState([]);
  const [searchdata, setsearch] = useState([]);
  const [showApplyFilter, setShowApplyFilter] = useState(false);
  function addticket() {
    var a = document.getElementById("newticket").value;
    var data = JSON.parse(JSON.stringify(teamlist));
    var i = teamlist.length;
    data.push({
      key: i,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=${i}`,
            state: { detail: "1" },
          }}
        >
          {" "}
          {i}{" "}
        </Link>
      ),
      type: "Alert",
      subject: a,
      priority: "High",
      status: <Tag color="#f50">Over Due</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Emp1",
      project: "Myntra Shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    setteamList(data);
    document.getElementById("newticket").value = "";
  }
  useEffect(() => {
    const data = [];
    var filtercity = [];

    var filtertype = [],
      filterpriority = [],
      filterstatus = [],
      filterassignedto = [],
      filterproject = [];

    // data.push({
    //   key: 0,
    //   id: (
    //     <Link
    //       to={{
    //         pathname: "/Tickets",
    //         search: `?id=0`,
    //         state: { detail: "1" },
    //       }}
    //     >
    //       {" "}
    //       0{" "}
    //     </Link>
    //   ),
    //   type: "Alert",
    //   subject: "Myntra show page down",
    //   priority: "High",
    //   status: <Tag color="#f50">Over Due</Tag>,
    //   raisedby: "BOT",
    //   raisedon: "03/05/2020",
    //   duedate: "03/05/2021",
    //   assignedto: "sample",
    //   project: "Myntra:shoes",
    //   module: "DA/PA Checker",
    //   lastupdate: "RAJ",
    //   view: <a href="view-client-details">View</a>,
    // });
    // filtertype.push({
    //   text: "Alert",
    //   value: "Alert",
    // });
    // filterpriority.push({
    //   text: "High",
    //   value: "High",
    // });
    // // filterstatus.push({
    // //   text: "Over Due",
    // //   value: "Over Due",
    // // });
    // filterassignedto.push({
    //   text: "Emp1",
    //   value: "Emp1",
    // });
    // filterproject.push({
    //   text: "Myntra shoes",
    //   value: "Myntra shoes",
    // });
    data.push({
      key: 0,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=0`,
            state: { detail: "1" },
          }}
        >
          {" "}
          0{" "}
        </Link>
      ),
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: <Tag color="#2db7f5">In Progress</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Emp1",
      project: "Myntra shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    filtertype.push({
      text: "Alert",
      value: "Alert",
    });
    filterpriority.push({
      text: "High",
      value: "High",
    });
    // filterstatus.push({
    //   text: "In Progress",
    //   value: "In Progress",
    // });
    filterassignedto.push({
      text: "Emp1",
      value: "Emp1",
    });
    filterproject.push({
      text: "Myntra shoes",
      value: "Myntra shoes",
    });
    filtercity.push({
      text: "Chennai",
      value: "Chennai",
    });
    // filterstatus.push({
    //   text: "Active",
    //   value: "Active",
    // });
    // datapush
    // data.push({
    //   key: 0,
    //   id: (
    //     <Link
    //       to={{
    //         pathname: "/Tickets",
    //         search: `?id=0`,
    //         state: { detail: "1" },
    //       }}
    //     >
    //       {" "}
    //       0{" "}
    //     </Link>
    //   ),
    //   type: "Alert",
    //   subject: "Myntra show page down",
    //   priority: "High",
    //   status: <Tag color="#87d068">Resolved</Tag>,
    //   raisedby: "BOT",
    //   raisedon: "03/05/2020",
    //   duedate: "03/05/2021",
    //   assignedto: "Manav",
    //   project: "Myntra:shoes",
    //   module: "DA/PA Checker",
    //   lastupdate: "RAJ",
    //   view: <a href="view-client-details">View</a>,
    // });
    // filtertype.push({
    //   text: "Alert",
    //   value: "Alert",
    // });
    // filtercity.push({
    //   text: "Chennai",
    //   value: "Chennai",
    // });
    // filterstatus.push({
    //   text: "Active",
    //   value: "Active",
    // });
    for (let i = 1; i < 100; i++) {
      data.push({
        key: i,

        id: (
          <Link
            to={{
              pathname: "/Tickets",
              search: `?id=${i}`,
              state: { detail: "1" },
            }}
          >
            {" "}
            {i}{" "}
          </Link>
        ),
        type: "Competitor Alert",
        subject: "Myntra show page down",
        priority: "Low",
        status: <Tag color="#87d068">Resolved</Tag>,
        raisedby: "BOT",
        raisedon: "03/05/2020",
        duedate: "03/05/2021",
        assignedto: "Emp2",
        project: "Myntra Fashion",
        module: "",
        lastupdate: "RAJ",
        view: <a href="view-client-details">View</a>,
      });
      filtertype.push({
        text: "Competitor Alert",
        value: "Competitor Alert",
      });
      filterpriority.push({
        text: "Low",
        value: "Low",
      });
      // filterstatus.push({
      //   text: "Resolved",
      //   value: "Resolved",
      // });
      filterassignedto.push({
        text: "Emp2",
        value: "Emp2",
      });
      filterproject.push({
        text: "Myntra Fashion",
        value: "Myntra Fashion",
      });
      filtercity.push({
        text: "Bangalore",
        value: "Bangalore",
      });
      // filterstatus.push({
      //   text: `Completed${i}`,
      //   value: `Completed${i}`,
      // });
    }

    //// [...new Map(array.map((x) => [x[key], x])).values()];
    filtertype = [...new Set(filtertype.map(JSON.stringify))].map(JSON.parse);
    filterpriority = [...new Set(filterpriority.map(JSON.stringify))].map(
      JSON.parse
    );
    // filterstatus = [...new Set(filterstatus.map(JSON.stringify))].map(
    //   JSON.parse
    // );
    filterassignedto = [...new Set(filterassignedto.map(JSON.stringify))].map(
      JSON.parse
    );
    filterproject = [...new Set(filterproject.map(JSON.stringify))].map(
      JSON.parse
    );
    filtercity = [...new Set(filtercity.map(JSON.stringify))].map(JSON.parse);
    // filterstatus = [...new Set(filterstatus.map(JSON.stringify))].map(
    //   JSON.parse
    // );
    setsearch(data);
    setteamList(data);
    const columns = [
      {
        title: "Ticket",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: filtertype,
        filterSearch: true,
        onFilter: (value, record) => record.type.indexOf(value) === 0,
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
        filters: filterpriority,
        filterSearch: true,
        onFilter: (value, record) => record.priority.indexOf(value) === 0,
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
        filters: filterassignedto,
        filterSearch: true,
        onFilter: (value, record) => record.assignedto.indexOf(value) === 0,
      },
      {
        title: "Project",
        dataIndex: "project",
        key: "project",
        filters: filterproject,
        filterSearch: true,
        onFilter: (value, record) => record.project.indexOf(value) === 0,
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
  const [sidenav, setsidenav] = useState(false);
  const history = useHistory();
  const addticketnew = () => {
    history.push("/tickets-sales");
  };
  return (
    <>
      <section class="outer-wrapper client-list ticket-list">
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
                  <span class="profile-name">SEO</span>
                </button>

                <ul
                  style={{ display: sidenav ? "block" : "none" }}
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a href="/profile">Profile</a>
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
          <li><a href="dashboard-sales"><i class="fa fa-columns"></i> Dashboard</a></li>
        <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
          <Breadcrumb>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/dashboard-sales">Dashboard</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/client-list">Customers</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/ticketslist-sales">Tickets</a></Breadcrumb.Item>
          </Breadcrumb>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">TICKET</div>
              </div>
              {/* <div class="col-sm-7 add-new-btnw">
                <a href="create-project" class="outline-btn">
                  Add New Ticket
                </a>
              </div> */}
              <div class="col-sm-7 add-new-btnw">
                <button
                  type="button"
                  class="outline-btn"
                  onClick={addticketnew}
                >
                  Add New Ticket
                </button>
              </div>
            </div>
            <div
              class="top-ticket-frame"
            >
              <div className="row">
                <div className="col-sm-3">
                <label
                style={{
                  
                  
                  fontSize: "18px",
                  marginTop: "5px",
                  marginLeft: "5px",
                }}
              >
                Ticket - 25
              </label>
                </div>
                <div className="col-sm-9 add-new-btnw">
                <span
                class="export-client"
                style={{  marginTop: "5px" }}
              >
                <select id="export-client" name="export">
                  <option value="Export">Export</option>
                  <option value="PDF">Excel</option>
                  <option value="WORD">CSV</option>
                  <option value="Sheets">Sheets</option>
                </select>
              </span>
              <select
                style={{ width: "15%", marginTop: "5px", marginLeft: "10px" }}
              >
                <option value="" disabled selected hidden>
                  Assignee
                </option>
                <option value="emp1">Emp 1</option>
                <option value="emp2">Emp 2</option>
                <option value="emp3">Emp 3</option>
              </select>

              <button
                type="button"
                class="outline-btn"
                onClick={addticket}
               
                style={{
                  
                  marginLeft: "15px",

                  
                  height: "40px",
                  
                }}
              >
                Assign
              </button>
              <img
                src={Filter}
                alt="filter"
                onClick={() => setShowApplyFilter((prev) => !prev)}
                class="filterimage"
              />
                </div>
              </div>
            </div>
            <br />


            {showApplyFilter && (
              <div className="apply-filter">
                <div>
                  
                </div>
                <span>
                  <Input.Search
                    style={{ width: 200, margin: "12px" }}
                    allowClear
                    placeholder="Ticket"
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

                <span>
                  <Select
                    showSearch
                    style={{ width: 200, margin: "12px" }}
                    placeholder="Ticket Type"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Alert">Alert</Option>
                    <Option value="CompetitorAlert">Competitor Alert</Option>
                    <Option value="ChangeRequest">Change Request</Option>
                    <Option value="Warning">Warning</Option>
                  </Select>
                </span>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Project"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="MyntraShoes">Myntra Shoes</Option>
                  <Option value="AmazonMerchandise">Amazon Merchandise</Option>
                  <Option value="MyntraFashion">Myntra Fashion</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Module"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="da/pachecker">DA/PA Checker</Option>
                  <Option value="googletrends">Google Trends</Option>
                  <Option value="pagespeedandcorewebvitals">
                    Page speed and core web vitals
                  </Option>
                  <Option value="clickshare">Click Share</Option>
                  <Option value="ranktracking">Rank Tracking</Option>
                  <Option value="siteuptimemonitor">Site Uptime Monitor</Option>
                  <Option value="gscdataextractor">GSC Data Extractor</Option>
                  <Option value="organicresearch">Organic Research</Option>
                  <Option value="roicalculator">Roi Calculator</Option>
                  <Option value="contentword">Content Word</Option>
                  <Option value="backlinkcount">Backlinks Count</Option>
                  <Option value="keywordsearch">Keyword Search</Option>
                  <Option value="seovolatality">SEO Volatality</Option>
                  <Option value="seomanualaudit">SEO Manual Audit</Option>
                  <Option value="googleanalyticedataextractor">
                    Google Analytics Data Extractor
                  </Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Priority"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="low">Low</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="high">High</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Status"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="open">Open</Option>
                  <Option value="inprogress">Inprogress</Option>
                  <Option value="resolved">Resolved</Option>
                  <Option value="reopen">Reopen</Option>
                  <Option value="closed">Closed</Option>
                  <Option value="overdue">Overdue</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Assigned"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="emp1">Emp 1</Option>
                  <Option value="emp2">Emp 2</Option>
                  <Option value="emp3">Emp 3</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Raised By"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="customer">Customer</Option>
                  <Option value="bot">Bot</Option>
                  <Option value="self">Self</Option>
                </Select>
                <Space
                  style={{ margin: "12px" }}
                  className="create-cal"
                  direction="vertical"
                >
                  <DatePicker placeholder="Created On" onChange={onChange1} />
                </Space>
                <Space style={{ margin: "12px" }} direction="vertical">
                  <DatePicker placeholder="Due On" onChange={onChange1} />
                </Space>
                <span>
                  <Input.Search
                    style={{ width: 200, margin: "12px" }}
                    allowClear
                    placeholder="Key word search"
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
                <div class="add-new-btnw" style={{marginRight:10+'px',marginBottom:10+'px'}}>
                    <button class="outline-btn" onClick={() => setShowApplyFilter((prev) => !prev)}>Apply</button>
                </div>
              </div>
            )}
            <br />
            <div style={{ width: "50%", marginLeft: "22%" }}>
              <Barchart />
            </div>

           
            <div class="common-table">
              <div class="row">
                <div class="col-md-5">
                  <div class="data-per-page">Data Per page</div>
                </div>
                <div class="col-md-7">
                  <div class="add-new-btnw">
                    <button class="outline-btn">Export</button>
                  </div>
                </div>
              </div>

              <Table
                id="sample"
                columns={teamcol}
                dataSource={[...teamlist]}
                rowSelection={{ type: selectionType, ...rowSelection }}
                pagination={{ position: ["topLeft", "bottomRight"] }}
                // style={{ border: "2px solid grey" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketsListSales;
