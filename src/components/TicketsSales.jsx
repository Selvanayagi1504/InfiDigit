// import React from "react";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import {Dropdown} from 'react-bootstrap'

// import { DatePicker } from "antd";
// import Cloud from "./assets/cloud-arrow-up-fill.svg";
// import Clock from "./assets/clock.svg";
// import { Table, Input, Row, Col, Space, Tag } from "antd";
// import { FilePicker } from "react-file-picker";

// function TicketsSales() {
//   const [startDate, setStartDate] = useState(new Date());
//   const [phonecode, setphonecode] = useState("+91");
//   const [countrycodes, setcountrycodes] = useState([]);
//   const [ticketid, setticketid] = useState("");
//   const [value, setvalue] = useState("default");
//   const search = useLocation().search;
//   const id = new URLSearchParams(search).get("id");

//   useEffect(() => {
//     var data = [
//       {
//         country: "India",
//         code: "+91",
//       },
//       {
//         country: "USA",
//         code: "+1",
//       },
//     ];
//     setcountrycodes(data);

//     setticketid(id);
//   }, []);

//   function setcountry(e) {
//     var c = e.target.value;
//     countrycodes.map((i) => {
//       if (i.country == c) {
//         setphonecode(i.code);
//       }
//     });
//   }
//   function onChange1(date, dateString) {
//     console.log(date, dateString);
//   }

//   const [sidenav, setsidenav] = useState(false);
//   const [filelist, setfilelist] = useState([]);

//   function updateList() {
//     var input = document.getElementById("myfile");
//     const a = [];
//     for (var i = 0; i < input.files.length; ++i) {
//       a.push(input.files.item(i).name);
//     }
//     setfilelist(a);
//   }
//   function removeItem(i) {
//     var list = filelist;
//     setfilelist(list.filter((item) => item !== i));
//   }

//   return (
//     <>
//       <section class="outer-wrapper">
//         <div class="top-nav-bar">
//           <div class="logo">
//             <a href="">
//               <img src="images/infidigit-logo.png" />
//             </a>{" "}
//             <span>Growth</span>
//           </div>
//           <div class="nav-bar-center">&nbsp;</div>
//           <div class="nav-bar-right">
//             <ul class="list-unstyled nav-right-menu">
//             <li>
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

//               <li class="dropdown">
//                 <button
//                   onClick={() => {
//                     console.log("hiii");
//                     setsidenav(!sidenav);
//                   }}
//                   class="btn btn-default dropdown-toggle"
//                   type="button"
//                   id="dropdownMenu1"
//                 >
//                   <span class="profile-pic">
//                     <img src="images/profile-pic.jpeg" alt="" />
//                   </span>
//                   <span class="profile-name">M.Subash</span>
//                 </button>

//                 <ul
//                   style={{ display: sidenav ? "block" : "none" }}
//                   class="dropdown-menu"
//                   aria-labelledby="dropdownMenuLink"
//                 >
//                   <li>
//                     <a href="">Profile</a>
//                   </li>

//                   <li>
//                     <a href="/">Log Out</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div class="clearfix"></div>
//         </div>

//         <div class="sidebar-nav-bar">
//           <ul class="list-unstyled side-menu">
//             <li>
//               <a href="dashboard.html">
//                 <i class="fa fa-columns"></i> Dashboard
//               </a>
//             </li>

//             <li>
//               <a href="">
//                 <i class="fa fa-users"></i> Customers
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div class="content-wrapper">
//           <div class="dashboard-wrapper">
//             <div class="row">
//               <div class="col-sm-5 pad-lzero">
//                 <div class="main-title">Ticket {ticketid}</div>
//               </div>
//               <div class="col-sm-7 add-new-btnw"></div>
//             </div>

//             <div class="common-wrapper">
//               <div class="common-wcard">
//                 <div class="common-form-fields">
//                   <div class="add-user-ticketsSales">
//                     <div style={{ display: "flex" }}>
//                       <div class="form-wrappers">
//                         <label>Ticket Type</label>
//                         <br />
//                         <select placeholder="Ticket type">
//                           <option value="" disabled selected hidden>
//                             Ticket Type
//                           </option>
//                           <option value="Alert">Alert</option>
//                           <option value="CompetitorAlert">
//                             Competitor Alert
//                           </option>
//                           <option value="ChangeRequest">Change Request</option>
//                           <option value="Warning">Warning</option>
//                         </select>
//                       </div>

//                       <div class="form-wrappers" style={{ marginLeft: "15%" }}>
//                         <label>Project</label>
//                         <br />
//                         <select>
//                           <option value="" disabled selected hidden>
//                             Project
//                           </option>
//                           <option value="MyntraShoes">Myntra Shoes</option>
//                           <option value="AmazonMerchandise">
//                             Amazon Merchandise
//                           </option>
//                           <option value="MyntraFashion">Myntra Fashion</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div class="form-wrappers" style={{ width: "25%" }}>
//                       <label>Module</label>
//                       <br />
//                       <select placeholder="Raised On">
//                         <option value="" disabled selected hidden>
//                           Module
//                         </option>
//                         <option value="da/pachecker">DA/PA Checker</option>
//                         <option value="googletrends">Google Trends</option>
//                         <option value="pagespeedandcorewebvitals">
//                           Page speed and core web vitals
//                         </option>
//                         <option value="clickshare">Click Share</option>
//                         <option value="ranktracking">Rank Tracking</option>
//                         <option value="siteuptimemonitor">
//                           Site Uptime Monitor
//                         </option>
//                         <option value="gscdataextractor">
//                           GSC Data Extractor
//                         </option>
//                         <option value="organicresearch">
//                           Organic Research
//                         </option>
//                         <option value="roicalculator">Roi Calculator</option>
//                         <option value="contentword">Content Word</option>
//                         <option value="backlinkcount">Backlinks Count</option>
//                         <option value="keywordsearch">Keyword Search</option>
//                         <option value="seovolatality">SEO Volatality</option>
//                         <option value="seomanualaudit">SEO Manual Audit</option>
//                         <option value="googleanalyticedataextractor">
//                           Google Analytics Data Extractor
//                         </option>
//                       </select>
//                     </div>

//                     <div class="form-wrappers" style={{ width: "35%" }}>
//                       <label>Subject</label>
//                       <br />
//                       <input
//                         type="text"
//                         name=""
//                         placeholder="shoes site down"
//                       />
//                     </div>

//                     <div class="container">
//                       <div class="row">
//                         <div class="col">
//                           <label>Summary</label>
//                           <br />
//                           <textarea
//                             class="summarytextarea"
//                             style={{ padding: "60px 220px", color: "grey" }}
//                           >
//                             Site down from 3:30 pm, sent via mail
//                           </textarea>
//                         </div>

//                         <div class="col" style={{ marginLeft: "50px" }}>
//                           <label>Document Upload</label>
//                           <br />
//                           <label for="file-input">
//                             <img
//                               src={Cloud}
//                               onChange={updateList}
//                               alt="cloud"
//                               class="cloudimage"
//                               style={{ cursor: "pointer" }}
//                             />
//                           </label>
//                           <label class="filebutton">
//                             <span>
//                               <input
//                                 type="file"
//                                 id="file-input"
//                                 // name="myfile"
//                                 multiple
//                                 onChange={updateList}
//                               />
//                             </span>
//                           </label>

//                           <label id="fileLabel">
//                             {filelist.length > 0
//                               ? `${filelist.length} files`
//                               : ""}
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* status */}
//                     <div class="container">
//                       <div style={{ display: "flex" }}>
//                         <div>
//                           <label>Status</label>
//                           <select>
//                             <option value="" disabled selected hidden>
//                               Select status
//                             </option>
//                             <option value="open">Open</option>
//                             <option value="inprogress">Inprogress</option>
//                             <option value="resolved">Resolved</option>
//                             <option value="reopen">Reopen</option>
//                             <option value="closed">Closed</option>
//                             <option value="overdue">Overdue</option>
//                           </select>
//                         </div>

//                         <div style={{ marginLeft: "15%" }}>
//                           <label>Raised On</label>
//                           <br />
//                           <Space direction="vertical">
//                             <DatePicker
//                               placeholder="Raised On"
//                               onChange={onChange1}
//                               // style={{ width: "100px" }}
//                             />
//                           </Space>
//                         </div>
//                       </div>

//                       {/* <div class="w-100"></div> */}

//                       <div style={{ display: "flex" }}>
//                         <div>
//                           <label>Assigned To</label>
//                           <select>
//                             <option value="" disabled selected hidden>
//                               Assigned To
//                             </option>
//                             <option value="emp1">Emp 1</option>
//                             <option value="emp2">Emp 2</option>
//                             <option value="emp3">Emp 3</option>
//                           </select>
//                         </div>

//                         <div style={{ marginLeft: "12.5%" }}>
//                           <label>Priority</label>
//                           <select>
//                             <option value="" disabled selected hidden>
//                               Priority
//                             </option>
//                             <option value="low">Low</option>
//                             <option value="medium">Medium</option>
//                             <option value="high">High</option>
//                           </select>
//                         </div>
//                       </div>

//                       {/* <div class="w-100"></div> */}
//                       <div style={{ display: "flex" }}>
//                         <div>
//                           <label>Raised By</label>
//                           <select>
//                             <option value="" disabled selected hidden>
//                               Raised By
//                             </option>
//                             <option value="customer">Customer</option>
//                             <option value="bot">Bot</option>
//                             <option value="self">Self</option>
//                           </select>
//                         </div>

//                         <div style={{ marginLeft: "15%" }}>
//                           <label>Reported via</label>
//                           <select>
//                             <option value="" disabled selected hidden>
//                               Reported via
//                             </option>
//                             <option value="call">Call</option>
//                             <option value="email">Email</option>
//                             <option value="contact">Contact</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                     {/* end */}

//                     <br />
//                     <div class="form-wrappers">
//                       <label style={{ marginRight: "10px" }}>Due On</label>
//                       <br />
//                       <Space direction="vertical">
//                         <DatePicker
//                           placeholder="Due On"
//                           onChange={onChange1}
//                           // style={{ width: "100px" }}
//                         />
//                       </Space>
//                     </div>

//                     <div class="form-wrappers">
//                       <label>Note</label>
//                       <br />
//                       <div style={{ display: "flex" }}>
//                         <textarea
//                           class="notetextarea"
//                           style={{
//                             padding: "60px 220px",
//                             color: "grey",
//                           }}
//                         >
//                           Site down from 4:00 pm ,sent via mail
//                         </textarea>
//                         <div style={{ marginLeft: "30px" }}>
//                           <div>
//                             <textarea class="textbox1">
//                               Changes the Assigned from Raj to Rutht
//                             </textarea>
//                             <img
//                               src={Clock}
//                               alt="clock"
//                               class="clockimg"
//                               style={{ width: "10px" }}
//                             />
//                           </div>
//                           <br />
//                           <textarea class="textbox2">
//                             Changed the priority of the issue 16/09/2021 t
//                           </textarea>
//                           <img
//                             src={Clock}
//                             alt="clock"
//                             class="clockimg"
//                             style={{ width: "10px" }}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div id="fileList">
//                       <ul>
//                         {filelist &&
//                           filelist.map((i, index) => {
//                             return (
//                               <li id={i}>
//                                 {i}{" "}
//                                 <i
//                                   class="fa fa-trash"
//                                   onClick={() => {
//                                     removeItem(i);
//                                   }}
//                                 ></i>
//                               </li>
//                             );
//                           })}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <ul class="form-action-wrapper">
//                 <li>
//                   <a href="#" class="ol-btn">
//                     Cancel
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" class="outline-btn">
//                     Save
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default TicketsSales;







import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button,Modal} from 'react-bootstrap';  
import {Dropdown} from 'react-bootstrap'
import { DatePicker } from "antd";
import { Breadcrumb } from 'antd';
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function TicketsSales() {
  const [startDate, setStartDate] = useState(new Date());
  const [phonecode, setphonecode] = useState("+91");
  const [countrycodes, setcountrycodes] = useState([]);
  const [ticketid, setticketid] = useState("");
  const [value, setvalue] = useState("default");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [show,setshow]= useState(false);

  function handleModal(){
    setshow(!show);
}
const [notes,setnotes] = useState([]);
  useEffect(() => {
    var data = [
      {
        country: "India",
        code: "+91",
      },
      {
        country: "USA",
        code: "+1",
      },
    ];
    setcountrycodes(data);
    
    setticketid(id);
    data = []
    for(let i=0;i<2;i++){
      data.push({
          id:i,
          name:"Raj",
          date:"17/05/2021",
          time:"16:57",
          description:`description ${i}`
      })
  }
  setnotes(data);
  }, []);
  function addnote(){
    var note = document.getElementById('notes-input').value;
    var data = [];
    var id = 0;
    notes.map((i)=>{
        data.push(i);
        id+=1;
    })
    data.push({
        id:id,
        name:"Raj",
        date:"17/05/2021",
        time:"16:57",
        description:`${note}`
    })
    setnotes(data);
    console.log(notes);
    document.getElementById('notes-input').value = "";
}
  function setcountry(e) {
    var c = e.target.value;
    countrycodes.map((i) => {
      if (i.country == c) {
        setphonecode(i.code);
      }
    });
  }
  function onChange1(date, dateString) {
    console.log(date, dateString);
  }

  const [sidenav, setsidenav] = useState(false);
  const [filelist, setfilelist] = useState([]);

  function updateList() {
    var input = document.getElementById("myfile");
    const a = [];
    for (var i = 0; i < input.files.length; ++i) {
      a.push(input.files.item(i).name);
    }
    setfilelist(a);
  }
  function removeItem(i) {
    var list = filelist;
    setfilelist(list.filter((item) => item !== i));
  }

  return (
    <>
      <section class="outer-wrapper">
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
              <Breadcrumb.Item>
              <a href="/ticketslist-sales">Tickets</a>
              </Breadcrumb.Item>
              {!ticketid ? 
              <Breadcrumb.Item>
              <a href="/tickets-sales">Create New Tickets</a>
              </Breadcrumb.Item>
              :
              <Breadcrumb.Item>
              <a href="/tickets-sales">Edit Tickets</a>
              </Breadcrumb.Item>
              }
          </Breadcrumb>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                {!ticketid ? <div class="main-title">Create New Ticket </div> : <div class="main-title">Ticket {ticketid} </div>}
                
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>

                 







            <div class="common-wrapper">
              <div class="common-wcard">
                <div class="common-form-fields">
                  <div class="add-user-tickets">
                      <div className="add-new-btnw">
                      <a style={{color:"#0d6efd"}} onClick={()=>handleModal()}>View / Add Notes</a>
                      </div>
                      <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>
                        <label>Ticket Type</label>
                        <br />
                        <select placeholder="Ticket type">
                          <option value="" disabled selected hidden>
                            Ticket Type
                          </option>
                          <option value="Alert">Alert</option>
                          <option value="CompetitorAlert">
                            Competitor Alert
                          </option>
                          <option value="ChangeRequest">Change Request</option>
                          <option value="Warning">Warning</option>
                        </select>
                      </div>

                      <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }} >
                        <label>Project</label>
                        <br />
                        <select>
                          <option value="" disabled selected hidden>
                            Project
                          </option>
                          <option value="MyntraShoes">Myntra Shoes</option>
                          <option value="AmazonMerchandise">
                            Amazon Merchandise
                          </option>
                          <option value="MyntraFashion">Myntra Fashion</option>
                        </select>
                      </div>
                    

                    <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>
                      <label>Module</label>
                      <br />
                      <select placeholder="Raised On">
                        <option value="" disabled selected hidden>
                          Module
                        </option>
                        <option value="da/pachecker">DA/PA Checker</option>
                        <option value="googletrends">Google Trends</option>
                        <option value="pagespeedandcorewebvitals">
                          Page speed and core web vitals
                        </option>
                        <option value="clickshare">Click Share</option>
                        <option value="ranktracking">Rank Tracking</option>
                        <option value="siteuptimemonitor">
                          Site Uptime Monitor
                        </option>
                        <option value="gscdataextractor">
                          GSC Data Extractor
                        </option>
                        <option value="organicresearch">
                          Organic Research
                        </option>
                        <option value="roicalculator">Roi Calculator</option>
                        <option value="contentword">Content Word</option>
                        <option value="backlinkcount">Backlinks Count</option>
                        <option value="keywordsearch">Keyword Search</option>
                        <option value="seovolatality">SEO Volatality</option>
                        <option value="seomanualaudit">SEO Manual Audit</option>
                        <option value="googleanalyticedataextractor">
                          Google Analytics Data Extractor
                        </option>
                      </select>
                    </div>

                    <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>
                      <label>Subject</label>
                      <br />
                      <input
                        type="text"
                        name=""
                        placeholder="shoes site down"
                      />
                    </div>

                    
                      <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>
                        
                          <label>Summary</label>
                          <br />
                          <textarea
                            class="summarytextarea"
                            style={{ padding: "70px 100px", color: "grey" }}
                          >
                            Site down from 3:30 pm, sent via mail
                          </textarea>
                        
                      </div>
                      <div class="form-wrappers row">
                          <label>Document Upload</label>
                          <br />
                          <input style={{width:"120px"}} type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>
                      </div>
                      <div id="fileList">
                          <ul>
                          {filelist && filelist.map((i, index)=>{
                              return(
                                  <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
                              )
                          })}
                          </ul>
                      </div>
                        
                      
                    

                    {/* status */}
                    
                      <div class="form-wrappers row " style={{width: "40%",minWidth:"300px" }}>
                        
                          <label>Status</label>
                          <select>
                            <option value="" disabled selected hidden>
                              Select status
                            </option>
                            <option value="open">Open</option>
                            <option value="inprogress">Inprogress</option>
                            <option value="resolved">Resolved</option>
                            <option value="reopen">Reopen</option>
                            <option value="closed">Closed</option>
                            <option value="overdue">Overdue</option>
                          </select>
                        </div>
                        <div class="form-wrappers row " style={{width: "40%",minWidth:"300px" }}>

                       
                          <label>Raised On</label>
                          <br />
                          
                            <DatePicker
                              placeholder="Raised On"
                              onChange={onChange1}
                             
                            />
                          
                        </div>
                      

                      {/* <div class="w-100"></div> */}

                      <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>
                        
                          <label>Assigned To</label>
                          <select>
                            <option value="" disabled selected hidden>
                              Assigned To
                            </option>
                            <option value="emp1">Emp 1</option>
                            <option value="emp2">Emp 2</option>
                            <option value="emp3">Emp 3</option>
                          </select>
                        </div>
                        <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>

                        
                          <label>Priority</label>
                          <select>
                            <option value="" disabled selected hidden>
                              Priority
                            </option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>

                      {/* <div class="w-100"></div> */}
                      <div class="form-wrappers row" style={{width: "40%",minWidth:"300px" }}>

                          <label>Raised By</label>
                          <select>
                            <option value="" disabled selected hidden>
                              Raised By
                            </option>
                            <option value="customer">Customer</option>
                            <option value="bot">Bot</option>
                            <option value="self">Self</option>
                          </select>
                        </div>
                        <div class=" form-wrappers row" style={{width: "40%",minWidth:"300px" }}>

                        
                          <label>Reported via</label>
                          <select>
                            <option value="" disabled selected hidden>
                              Reported via
                            </option>
                            <option value="call">Call</option>
                            <option value="email">Email</option>
                            <option value="contact">Contact</option>
                          </select>
                        </div>

                    {/* end */}

                    
                    <div class="row form-wrappers" style={{width: "40%",minWidth:"300px" }}>

                       
                          <label>Due On</label>
                          <br />
                          
                            <DatePicker
                              placeholder="Due On"
                              onChange={onChange1}
                             
                            />
                          
                        </div>

                        
                      

                    <div id="fileList">
                      <ul>
                        {filelist &&
                          filelist.map((i, index) => {
                            return (
                              <li id={i}>
                                {i}{" "}
                                <i
                                  class="fa fa-trash"
                                  onClick={() => {
                                    removeItem(i);
                                  }}
                                ></i>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="form-action-wrapper">
                <li>
                  <a href="#" class="ol-btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a href="#" class="outline-btn">
                    Save
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={()=>handleModal()} className="edit-notes">  
        <Modal.Header closeButton>View / Add Notes</Modal.Header>  
        <Modal.Body>
            <div className="notes-input-box" id="notes-input-box">
                <div>
                    <textarea rows="4" cols="45" id="notes-input" placeholder="Enter notes..."></textarea>
                </div>
                <div>
                    <div class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></div>
                    <button class="send-button" onClick={addnote}><i class="fa fa-send"></i></button>
                </div>
            </div>
            {notes && notes.map((i, index)=>{
                return(
                    <div className="notes-list ">
                        <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                        <span class="notes-name">{i.name} - </span>
                        <span class="notes-date">{i.date} </span>
                        <span class="notes-time"> {i.time}</span>
                        <div className="description">
                            {i.description}
                        </div>
                    </div>
                )
            })}

        </Modal.Body>    
    </Modal> 
    </>
  );
}

export default TicketsSales;