import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import {Dropdown} from 'react-bootstrap'
import {ModuleExpandTickets} from './index';
import { Breadcrumb } from 'antd';


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

function ModuleExpandDAPA() {
    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [download, setdownload] = useState(false);
    const [colourOptions, setcolor] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [chartoption, setchartoption] = useState("da");
    // table
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);

    const [chartdata, setchartdata] = useState([]);
    const [chartdataCompetitor, setchartdatacomp] = useState([]);
    const [timeperiod, settimeperiod] = useState("Weekly");
    const [show,setshow]= useState(false);
 
    useEffect(()=>{
        var data=[];
        var color=[];
        for(let i=1;i<6;i++){
            data.push({
                key:i,
                url:`www.myntra${i}.com`,
                da:"28",
                pa:"21",
                spam:"2%",
                date:"02/05/2021"
            });
            color.push({
                value:`www.myntra${i}.com`,
                label:`www.myntra${i}.com`
            })
        }
        setcolor(color)
        setteamList(data);
        const columns = [
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
        setteamcol(columns);
          data=[
            ['x', 'values'],
            ["week 1", 0],
            ["week 2", 10],
            ["week 3", 23],
            ["week 4", 17],
            ["week 5", 18],
        ];
        setchartdata(data);
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
    function handlePeriodChange(e){
        console.log(e.target.value)
        var data=[];
        settimeperiod(e.target.value);
        data=[
            ['x', 'values'],
            [`${e.target.value} 1`, 0],
            [`${e.target.value} 2`, 10],
            [`${e.target.value} 3`, 23],
            [`${e.target.value} 4`, 17],
            [`${e.target.value} 5`, 18],
        ];
        setchartdata(data)
    }
    function handleModal(){
        setshow(!show);
    }
    return (
        <>
            <section class="outer-wrapper module-expand-da">
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
                                <span class="profile-name">M.Subash</span>
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

            {/* <div class="sidebar-nav-bar">
                <ul class="list-unstyled side-menu">
                    <li><a href="dashboard.html"><i class="fa fa-columns"></i> Dashboard</a></li>

                    <li><a href=""><i class="fa fa-users"></i> Customers</a></li>
                </ul>
            </div> */}
            <div class="content-wrapper">
                <div class="dashboard-wrapper">
                    <div class="sidebar-nav-bar">
                        <ul class="list-unstyled side-menu">
                        <li><a href="module-expand-da">DA/ PA Checker</a></li>
                            <li><a href="module-expand-google-trends">Google Trends</a></li>
                            <li><a href="module-expand-page-speed">Page Speed and Core Web Vitals</a></li>
                            <li><a href="module-expand-click-share">Click Share</a></li>
                            <li><a href="module-expand-rank-tracking">Rank Tracking</a></li>
                            <li><a href="module-expand-site-uptime">Site Uptime Monitor</a></li>
                            <li><a href="module-expand-gsc">GSC Data Extractor</a></li>
                            <li><a href="module-expand-organic-research">Organic Research module</a></li>
                            <li><a href="module-expand-roi">ROI Calculator (Paid vs. Organic)</a></li>
                            <li><a href="content-word-count">Content Word Count on a Page</a></li>
                            <li><a href="module-expand-backlinks">BackLinks (SEMRush)</a></li>
                            <li><a href="module-expand-keyword-research">Keyword Research(Permission Pending from Google)</a></li>
                            <li><a href="module-expand-seo-volatality">SEO Volatality</a></li>
                            <li><a href="module-expand-google-analytics">Google Analytics</a></li>
                            <li><a href="module-expand-seo-audit">SEO Audit</a></li>

                        </ul>
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-da">DA/ PA Checker</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>DA / PA Checker</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            {/* <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    <div class="main-title">DA / PA Checker</div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    <a href="#" class="outline-btn">Export</a>
                                </div>
                            </div> */}
                            <div class="row da-pa-top-select">
                                <div class="col-sm-5 pad-lzero" style={{display:"flex"}}>
                                    <span class="main-title">DA / PA Results</span>
                                    <span style={{width:50+'%',marginLeft:24+'px'}}>
                                    </span>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    {/* <a href="#" style={{marginRight:24+"px"}} class="outline-btn">Export</a>
                                    <select name="" id="" onChange={handlePeriodChange}>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weeklt</option>
                                        <option value="Fornightly">Fornightly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div style={{display:"flex"}} class="add-new-btnw">
                                        <label htmlFor="" style={{marginRight:24+'px'}}>Select Url</label>
                                        <ReactSelect
                                            className="da-pa-search"
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
                                        <a href="#" style={{marginLeft:24+"px", height:40+'px'}} class="outline-btn">Generate Report</a>

                                    </div>
                                </div>
                                {/* <div className="col-md-7 add-new-btnw" style={{textAlign:"end"}}> */}
                                <div class="col-sm-4 add-new-btnw">
                                    <a href="#" style={{marginRight:24+"px"}} class="outline-btn">Export</a>
                                    {/* <select name="" id="dailychange" onChange={handlePeriodChange}>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Fornightly">Fornightly</option>
                                    </select> */}
                                </div>
                                {/* </div> */}
                            </div>
                            
                            <div>
                                
                                <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            </div>
                            <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    <div class="main-title">Chart Results</div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    {/* <a href="#" class="outline-btn">Export</a> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{display:"flex", marginBottom:24+'px'}}>
                                    <label htmlFor="" style={{marginRight:24+"px",marginTop:8+'px'}}>Select URL</label>
                                    <select name="" id="url-module-expand" placeholder="Select Url" style={{marginRight:48+'px'}}>
                                        <option value="">ww.myntra.com</option>
                                        <option value="">www.infi.com</option>
                                    </select>
                                    
                                    <label htmlFor="" style={{marginRight:24+"px",marginTop:8+'px'}}>Select Competitor</label>
                                    <select name="" id="url-module-expand" placeholder="Select Url">
                                        <option value="">https://www.ezrankings.org/</option>
                                        <option value="">https://www.ezrankings.org/seo-packages.html</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="score-maintain">
                                
                                <div className="pa-da">
                                    <button class={chartoption == "da"?"blue":""} onClick={()=>{setchartoption("da")}}>DA Score</button>
                                    <button class={chartoption == "pa"?"blue":""} onClick={()=>{setchartoption("pa")}}>PA Score</button>
                                    <button class={chartoption == "spam"?"blue":""} onClick={()=>{setchartoption("spam")}}>Spam%</button>
                                </div>
                                <a style={{color:"white",marginRight:24+"px"}} class="outline-btn" onClick={()=>handleModal()}>Custom</a>
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
                            {/* <Chart
                                className="line-graph"
                                width={'600px'}
                                height={'400px'}
                                chartType="LineChart"
                                data={chartdata}
                                
                                options={{
                                    hAxis: {
                                    title: timeperiod,
                                    baselineColor:"red"
                                    },
                                    vAxis: {
                                    title: chartoption,
                                    },
                                    
                                }}
                                rootProps={{ 'data-testid': '1' }}
                                /> */}



                            {/* <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    <div class="main-title">Competitor Comparison</div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    <a href="#" class="outline-btn">Export</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="score-maintain">
                                    <a style={{color:"white",marginRight:24+"px"}} class="outline-btn" onClick={()=>handleModal()}>Custom</a>
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
                            </div> */}
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
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal">  
            <Modal.Header closeButton>Choose Data Range</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>From Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

                                <div class="form-wrappers">
                                    <label>To Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            <Button onClick={()=>handleModal()}>Close</Button>  
            <Button onClick={()=>handleModal()}>Save</Button>  
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

export default ModuleExpandDAPA;
