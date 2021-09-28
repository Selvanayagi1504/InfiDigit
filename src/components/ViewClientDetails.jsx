import React from "react";
import {useState, useEffect} from "react";
import { Button,Modal} from 'react-bootstrap';  
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Switch,Drawer, Breadcrumb } from "antd";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import {Dropdown} from 'react-bootstrap'
import Chart from "react-google-charts";


const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

function ViewClientDetails() {
    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [colourOptions, setcolor] = useState([
        { value: "Ankit", label: "Ankit" },
        { value: "Monal", label: "Monal" },
        { value: "Rahul", label: "Rahul" },
        { value: "Ravi", label: "Ravi" },
        
    ])

    const [optionSelectedmodule, setoptionSelectedmodulw] = useState(null);
    function handleChangemodule(selected){
        console.log(selected)
        setoptionSelectedmodulw(selected);
        console.log(optionSelectedmodule);
    };
    const [colourOptionsmodule, setcolormodule] = useState([
        { value: "DA/PA Checker", label: "DA/PA Checker" },
        { value: "Google Trends", label: "Google Trends" },
        { value: "Page Speed and Core Web Vitals", label: "Page Speed and Core Web Vitals" },
        { value:"Click Share", label:"Click Share" },
        { value:"Rank Tracking", label:"Rank Tracking" },
        { value:"Site Uptime Monitor", label:"Site Uptime Monitor" },
        { value:"GSC Data Extractor", label:"GSC Data Extractor" },
        { value:"Organic Research Module", label:"Organic Research Module" },
        { value:"ROI Calculator", label:"ROI Calculator" },
        { value:"Content Word Count On page", label:"Content Word Count On page" },
        { value:"Backlinks Count", label:"Backlinks Count" },
        { value:"Keywords Research", label:"Keywords Research" },
        { value:"SEO Volatality", label:"SEO Volatality" },
        { value:"SEO Manual Audit", label:"SEO Manual Audit" },
        { value:"Google Analytics Data Extractor", label:"Google Analytics Data Extractor" },
    ])

    const [sidenav,setsidenav] = useState(false);
    const [active,setactive] = useState(false);
    const [show,setshow]= useState(false);
    const [teamlist, setteamList] = useState([]); //team members list
    const [selectionType, setSelectionType] = useState('checkbox'); //team members selection checkbox
    const [teamcol,setteamcol] = useState([]); //team members column details
    const [searchdata,setsearch] = useState([]); //team members search box
    const [reportgentable, setreportgentable] = useState([]);
    const [reportgencol, setreportgencol] = useState([]);
    const [selectionTypeReport, setSelectionTypeReport] = useState('checkbox');
    const [reportgenurl, setreportgenurl] = useState("");
    const [chartdataCompetitor, setchartdatacomp] = useState([]);
    const [chartoption, setchartoption] = useState("da");
    const [timeperiod, settimeperiod] = useState("Weekly");
    function handleModal(){
        setshow(!show);
    }
    const [notes,setnotes] = useState([]);
    
    useEffect(()=>{
        var data=[];
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
        var columns = [
            {
                title: "Team Member",
                dataIndex: "teammember",
                key: "teammember",
                width:"20%"
            },
            {
                title: "Date Added",
                dataIndex: "date",
                key: "date",
                width:"20%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"50%"
            },
            {
                title:"Action",
                dataIndex:"delete",
                key:"delete",
                width:"10%"
            },
            
        ];
        setteamcol(columns);
        columns = [
            {
              title: "URL",
              dataIndex: "url",
              key: "url"
            },
            {
              title: "DA",
              dataIndex: "da",
              key: "da"
            },
            {
                title:"PA",
                dataIndex:"pa",
                key:"pa",
            },
            {
                title:"Spam %",
                dataIndex:"spam",
                key:"spam",
            },
            {
                title:"Date Updated",
                dataIndex:"date",
                key:"date"
            }
        ];
        setreportgencol(columns);
        data=[
            ['x', 'myntra', 'Indya'],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]
        setchartdatacomp(data)
    },[])
    function assign(){
        var data=[];
        optionSelected.map((i)=>{
            data.push({
                teammember:`${i.value}`,
                date:"02/05/2021",
                delete:<a href=""><i class="fa fa-trash"></i></a>
            })
        })
        setteamList(data)
    }
    function handleurlInput() {
        var url = document.getElementById('inputurl-view-clinet').value;
        if(url==""){
            alert("please enter a url!!")
        }
        else{
        var data = [];
        data.push({
            url:`${url}`,
            da:"28",
            pa:"21",
            spam:"2%",
            date:"02/05/2021"
        })
        console.log(data)
        setreportgentable(data);
        console.log(reportgentable)
        setreportgenurl(url)
        document.getElementById('inputurl-view-clinet').value = "";
        }
    }
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
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
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
                <li><a href="dashboard.html"><i class="fa fa-columns"></i> Dashboard</a></li>

                <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
            </ul>
        </div>
        <div class="content-wrapper">
            <div class="dashboard-wrapper">
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/dashboard-seo">Dashboard</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/client-list">Clients</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/project-list">Projects</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="/view-client-details">Client Details</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">CLIENT DETAILS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                    </div>
                </div>

                <div className="row view-client">
                    <div className="col-md-4">
                        <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        <div class="form-wrappers">
                                            <label>Client</label>
                                            <input type="text" name="" placeholder="Enter Client" value="Myntra" disabled />
                                        </div>

                                        

                                        {/* <div class="form-wrappers">
                                            <label>Organization</label>
                                            <input type="text" name="" placeholder="Enter Organization" value="Myntra" disabled />
                                        </div> */}

                                        {/* <div class="form-wrappers">
                                            <label>Assign Team Member</label>
                                            <select>
                                                <option>Lead</option>
                                                <option>Infi</option>
                                            </select>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        {/* <div class="form-wrappers">
                                            <label>Phone Number</label>
                                            <input type="text" name="" placeholder="Enter Phone Number" value="9005678412" disabled />
                                        </div> */}
                                        <div class="form-wrappers">
                                            <label>Client Code</label>
                                            <input type="text" name="" placeholder="Enter Client Code" value="10020" disabled />
                                        </div>

                                        {/* <div class="form-wrappers">
                                            <label>POC</label>
                                            <input type="text" name="" placeholder="Enter POC" value="Raj" disabled />
                                        </div> */}

                                        {/* <div class="form-wrappers">
                                            <label>Location</label>
                                            <input type="text" name="" placeholder="Enter Location" value="Bangalore" disabled />
                                        </div> */}

                                        {/* <div class="form-wrappers">
                                            <label>Schedule Remainder</label>
                                            <label class="switch"><input type="checkbox" id="toggle2" onClick={()=>{setactive(!active)}} /><span class="slider round"></span></label>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-4">
                    <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        {/* <div class="form-wrappers">
                                            <label>Phone Number</label>
                                            <input type="text" name="" placeholder="Enter Phone Number" value="9005678412" disabled />
                                        </div> */}
                                        

                                        <div class="form-wrappers">
                                            <label>POC</label>
                                            <input type="text" name="" placeholder="Enter POC" value="Raj" disabled />
                                        </div>

                                        {/* <div class="form-wrappers">
                                            <label>Location</label>
                                            <input type="text" name="" placeholder="Enter Location" value="Bangalore" disabled />
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                        {/* <a href="">Edit Client</a> */}
                    
                        {/* <a style={{color:"#0d6efd"}} onClick={()=>handleModal()}>View / Add Notes</a> */}
                </div>

                <Tabs className="tabs-inner-page-speed">
                    <TabList style={{padding:"unset",marginBottom:24+'px'}}>
                        <Tab>Project Details</Tab>
                        <Tab>Team Members</Tab>
                        <Tab>Report Generator</Tab>
                    </TabList>
                    <TabPanel>
                        <div class="row">
                            <div class="col-sm-5 pad-lzero">
                                <div class="main-title">PROJECT DETAILS</div>
                            </div>
                            <div class="col-sm-7 add-new-btnw">
                                <a style={{color:"#0d6efd"}} onClick={()=>handleModal()}>View / Add Notes</a>
                            </div>
                        </div>

                        <div class="common-wrapper">

                            <div class="common-wcard">

                                <div class="common-form-fields">

                                    <div class="add-user">
                                        <div class="form-wrappers">
                                            <label>Project Code</label>
                                            <input type="text" name="" placeholder="Enter Project Code" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Customer Name</label>
                                            <select>
                                                <option>Myntra</option>
                                                <option>Infi</option>
                                            </select>
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Start Date</label>
                                            <input type="date" name="" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Estimated Completion Date</label>
                                            <input type="date" name="" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Domain Name</label>
                                            <input type="text" name="" placeholder="Enter Domain Name" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Cost</label>
                                            <input type="text" name="" placeholder="Enter Cost" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Location</label>
                                            <input type="text" name="" placeholder="Enter Location" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>POC</label>
                                            <input type="text" name="" placeholder="Enter POC" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Contact</label>
                                            <input type="text" name="" placeholder="Enter Contact" />
                                        </div>

                                        <div class="form-wrappers">
                                            <label>Schedule Remainder</label><br/>
                                            <label class="switch"><input type="checkbox" id="toggle2" onClick={()=>{setactive(!active)}} /><span class="slider round"></span></label>
                                        </div>

                                        {active?<><div class="row">
                                            <div class="col-sm-5 pad-lzero">
                                                <div class="main-title">REMAINDER DETAILS</div>
                                            </div>
                                            <div class="col-sm-7 add-new-btnw">
                                            </div>
                                        </div>
                                        {/* <div className="row view-client">
                                            <div className="col-md-4"> */}
                                                <div class="common-wrapper">

                                                    <div class="common-wcard">

                                                        <div class="common-form-fields">

                                                            <div class="add-user">
                                                                <div class="form-wrappers">
                                                                    <label>Remainder Time</label>
                                                                    {/* <input type="date" name="" placeholder="Enter Date and time" /> */}
                                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                                                                </div>

                                                                <div class="form-wrappers">
                                                                <label class="">Remainder Reason</label>
                                                                <input type="text" id="remainder-reason" name="" placeholder="Enter remainder reason" />
                                                            </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </>:<></>
                                        }

                                    </div>
                                </div>
                            </div>


                            <ul class="form-action-wrapper">
                                <li><a href="#" class="ol-btn">Cancel</a></li>
                                <li><a href="#" class="outline-btn">Save</a></li>
                            </ul>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div class="row">
                            <div class="col-sm-5 pad-lzero">
                                <div class="main-title">ASSIGN TEAM MEMBERS</div>
                            </div>
                            <div class="col-sm-7 add-new-btnw">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <ReactSelect
                                    options={colourOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                />
                            </div>
                            <div className="col-md-3">
                            <button onClick={()=>assign()}  class="outline-btn">Assign</button>
                            </div>
                        </div>
                        <hr />
                        



                        
                            
                            {teamlist && teamlist.length>0 
                                ? 
                                    <>
                                        <div class="add-new-btnw" style={{textAlign:"left"}}>
                                            <button  class="outline-btn">Edit</button>
                                        </div>

                                        <div class="search" style={{marginTop:-67+'px'}}>
                                            <div class="input-group">
                                                <Row type="flex" gutter={10} style={{ marginBottom: 10 }}>
                                                    <Col>
                                                        
                                                    </Col>
                                                    <Col>
                                                        <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                                                            {setteamList(
                                                            searchdata.filter(person =>
                                                            person.teammember.includes(nameSearch)
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
                                                    <div class="data-export" style={{textAlign:"end",marginLeft:"unset"}}>
                                                        {/* <span class="data-per-page">Data Per page</span>
                                                        <span class="count-drop" style={{width:100+'px'}}>
                                                        </span> */}
                                                        <span class="export">
                                                        <select id="export" name="export">
                                                            <option value="Export">Export</option>
                                                            <option value="PDF">Excel</option>
                                                            <option value="WORD">CSV</option>
                                                            <option value="Sheets">Sheets</option>
                                                        </select>
                                                        </span>
                                                        <span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Table id="sample" columns={teamcol} dataSource={teamlist}
                                                rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                                        </div>
                                    </> 
                                :
                                    <></>
                            }
                        
                    </TabPanel>
                    <TabPanel>
                        <div class=" pad-lzero" style={{display:"flex"}}>
                            <span class="main-title">DA / PA Checker</span>
                            <span style={{width:50+'%',marginLeft:24+'px'}}>
                            </span>
                        </div>
                        <div className="row" style={{marginBottom:24+'px'}}>
                            <div className="col-sm-9">
                                <div style={{display:"flex"}} class="add-new-btnw">
                                <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select Module</label>
                                <div style={{width:25+"em"}}>
                                <ReactSelect
                                        
                                        placeholder="Select or search module"
                                        options={colourOptionsmodule}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={true}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangemodule}
                                        allowSelectAll={true}
                                        value={optionSelectedmodule}
                                    />
                                    </div>
                                </div>
                                <br/>
                                <div style={{display:"flex"}} class="add-new-btnw">
                                    <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Url</label>
                                    <input type="text" placeholder="Enter Url" id="inputurl-view-clinet" />
                                    <a onClick={handleurlInput} href="#" style={{marginLeft:24+"px"}} class="outline-btn">Generate Report</a>

                                </div>
                            </div>
                            <div class="col-sm-3 add-new-btnw">
                                <a href="#" style={{marginRight:24+"px"}} class="outline-btn">Export</a>
                            </div>
                        </div>
                        {reportgentable && reportgentable.length>0 
                            ?
                                <>
                                    <Table id="sample-module-expand" columns={reportgencol} dataSource={reportgentable} rowSelection={{type: selectionTypeReport,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
                                    <div class="row">
                                        <div class="col-sm-5 pad-lzero">
                                            <div class="main-title">Chart Results</div>
                                        </div>
                                        <div class="col-sm-7 add-new-btnw">
                                            {/* <a href="#" class="outline-btn">Export</a> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label htmlFor="" style={{marginRight:24+"px",marginTop:8+'px'}}>Select URL</label>
                                            <input type="text" value={reportgenurl} disabled/>
                                            <br/><br/>
                                            <label htmlFor="" style={{marginRight:24+"px",marginTop:8+'px'}}>Select Competitor</label>
                                            <select name="" id="url-module-expand" placeholder="Select Url">
                                                <option value="">https://www.ezrankings.org/</option>
                                                <option value="">https://www.ezrankings.org/seo-packages.html</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="score-maintain">
                                                <div className="pa-da">
                                                    <button class={chartoption == "da"?"blue":""} onClick={()=>{setchartoption("da")}}>DA Score</button>
                                                    <button class={chartoption == "pa"?"blue":""} onClick={()=>{setchartoption("pa")}}>PA Score</button>
                                                    <button class={chartoption == "spam"?"blue":""} onClick={()=>{setchartoption("spam")}}>Spam%</button>
                                                </div>
                                                
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                    <i className="fa fa-download"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="">Download All Charts</Dropdown.Item>
                                                        <Dropdown.Item href="">Download this only</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataCompetitor}
                                        
                                        options={{
                                            hAxis: {
                                            title: timeperiod,
                                            },
                                            vAxis: {
                                            title: chartoption,
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </> 
                            :
                                <></>
                        }
                    </TabPanel>
                </Tabs>

                

                
                

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
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
    <div className="notes-input-box" id="notes-input-box">
                <div>
                    <textarea rows="4" cols="45" id="notes-input" placeholder="Enter notes..."></textarea>
                </div>
                <div>
                    <div class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></div>
                    <button class="send-button" onClick={()=>{addnote()}}><i class="fa fa-send"></i></button>
                </div>
            </div>
            {notes.map((i, index)=>{
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
      </Drawer>
</>
);
}

export default ViewClientDetails;