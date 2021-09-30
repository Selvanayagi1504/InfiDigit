import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import {ModuleExpandTickets} from './index';



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


function ModuleExpandGoogleTrends() {

    const [optionSelected1, setoptionSelected1] = useState(null);
    function handleChange1(selected){
        setoptionSelected1(selected);
        keytableRecord(selected);
    };
    const [colourOptions1, setcolor1] = useState([]);

    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [colourOptions, setcolor] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [show,setshow]= useState(false);
    const [keytablelist, setkeytablelist] = useState([]);
    const [selectionTypeKeyTable, setSelectionTypeKeyTable] = useState('checkbox');
    const [keyTableCol,setkeyTableCol] = useState([]);
    const [chartdata, setchartdata] = useState([]);
    
    function keytableRecord(a){
        var data = keytablelist;
        if(a.length+1 == keytablelist.length){
            data = [];
            for(let i=0;i<a.length;i++){
                data.push({
                    keyword:`${a[i].value}`,
                    aug1:"25",
                    aug2:"36",
                    aug3:"47",
                    aug4:"32",
                    aug5:"20",
                    aug6:"57"
                });
            }
            setkeytablelist(data);
            data=[];
            var sample=['x'];
            for(let i=0;i<a.length;i++){
                sample.push(a[i].value);
            }
            data.push(sample);
        }
        else{
            data.push({
                keyword:`${a[a.length-1].value}`,
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            });
            setkeytablelist(data);
            data=[];
            var sample=['x'];
            for(let i=0;i<a.length;i++){
                sample.push(a[i].value);
            }
            data.push(sample);
        }
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
        ];
        setchartdata(data);
    }

    useEffect(()=>{
        var data=[
            {keywords:"Shoes", datetrend:"25"},
            {keywords:"Rainy Shoes", datetrend:"30"},
            {keywords:"Formal Shoes for Men", datetrend:"26"},
            {keywords:"Casual Shoes", datetrend:"40"},
        ];
        var color=[
            { value: "Shoes", label: "Shoes" },
            { value: "Rainy Shoes", label: "Rainy Shoes" },
            { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
            { value: "Casual Shoes", label: "Casual Shoes" }
        ];
        setcolor(color)
        setcolor1(color)
        data = [
            {key:"0",keywords:"Shoes", datetrend:"25"},
            {key:"1",keywords:"Rainy Shoes", datetrend:"30"},
            {key:"2",keywords:"Formal Shoes for Men", datetrend:"26"},
            {key:"3",keywords:"Casual Shoes", datetrend:"40"},
        ]
        
        setteamList(data);
        var columns = [
            {
              title: "List of Keywords",
              dataIndex: "keywords",
              key: "keywords",
              width:"25%"
            },
            {
              title: "Current Date Trend Score",
              dataIndex: "datetrend",
              key: "datetrend",
              width:"25%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"50%"
            }
          ];
          setteamcol(columns);

          columns = [
            {
                title:"Keyword",
                dataIndex:"keyword",
                key:"keyword"
            },
            {
                title:"1 Aug",
                dataIndex:"aug1",
                key:"aug1"
            },
            {
                title:"2 Aug",
                dataIndex:"aug2",
                key:"aug2"
            },
            {
                title:"3 Aug",
                dataIndex:"aug3",
                key:"aug3"
            },
            {
                title:"4 Aug",
                dataIndex:"aug4",
                key:"aug4"
            },
            {
                title:"5 Aug",
                dataIndex:"aug5",
                key:"aug5"
            },
            {
                title:"6 Aug",
                dataIndex:"aug6",
                key:"aug6"
            },
          ]
          setkeyTableCol(columns);
          data=[
            ['x', ''],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            ["Aug 4", 32],
            ["Aug 5", 20],
            ["Aug 6", 57],
        ];
        setchartdata(data);
    },[])
    function handleModal(){
        setshow(!show);
    }
    return (
        <>
            <section class="outer-wrapper module-expand-GT">
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
                        </ul>
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-google-trends">Google Trends</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Google Trends</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div style={{display:"flex", marginTop:24+'px'}}>
                                <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select Keyword</label>
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
                                <a href="#" style={{marginLeft:24+"px", height:40+'px'}} class="outline-btn">Generate</a>
                            </div>
                            
                            <div className="row">
                                <div className="col-lg-4" style={{paddingLeft:12+"px"}}>
                                    <div className="multiselect-google-trends">
                                        <label>Location</label>
                                        <select name="" id="">
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Chennai">Chennai</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{paddingLeft:12+"px"}}>
                                    <div className="multiselect-google-trends">
                                        <label>Type of Search</label>
                                        <select name="" id="">
                                            <option value="WebSearch">Web Search</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4" style={{paddingLeft:12+"px"}}>
                                    <div className="multiselect-google-trends">
                                        <label>Category</label>
                                        <select name="" id="">
                                            <option value="FootWear">Footwear</option>
                                            <option value="Dress">Dress</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    <a href="#" class="outline-btn">EXPORT</a>
                                </div>
                            </div>
                            <div>
                                <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                            </div>

                            <div class="row" style={{marginTop:24+'px',marginLeft:5+'px',marginBottom:24+'px'}}>
                                <div class="col-sm-5 pad-lzero">
                                    <div style={{display:"flex"}}>
                                        <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select Keyword</label>
                                        <ReactSelect
                                            className="da-pa-search custom-gogle-trends"
                                            options={colourOptions1}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{
                                                Option
                                            }}
                                            onChange={handleChange1}
                                            allowSelectAll={true}
                                            value={optionSelected1}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    <div className="score-maintain">
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
                                </div>
                            </div>
                            
                            {optionSelected1 && optionSelected1.length>0
                                ?
                                    <>
                                        <Table id="sample-module-expand" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
                                    </>
                                :
                                    <></>
                            }
                            <div className="row">
                                <div className="col-md-6">
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdata}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Keyword",
                                            baselineColor:"red"
                                            },
                                            vAxis: {
                                            title: "Shoes",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="col-md-6" style={{textAlign:"end"}}>
                                    
                                </div>
                            </div>
                            {/* 
                            <div class="row">
                                <div class="col-sm-5 pad-lzero">
                                    <div class="main-title">Competitor Comparison</div>
                                </div>
                                <div class="col-sm-7 add-new-btnw">
                                    
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
                                /> */}
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

export default ModuleExpandGoogleTrends;
