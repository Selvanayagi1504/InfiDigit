import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import SearchBar from "./searchBar";
import Collapse from 'react-bootstrap/Collapse'
import  Card  from "react-bootstrap/Card";
import { DropDownTreeComponent,CheckBoxSelection, Inject,MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import {ModuleExpandTickets} from './index';

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from 'jquery'
import { customRanges } from "./functions";
import moment from "moment";
const datePickerHandler = (event, picker) => {
    let value =
      picker.startDate.format("DD-MM-YYYY") +
      " to " +
      picker.endDate.format("DD-MM-YYYY");
    $("#date-picker").val(value);
  };
  const start = moment().subtract(1, "days");
  const minDate = moment("01-01-2017", "DD-MM-YYYY");
  const maxDate = moment();

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


function ModuleExpandKeywordResearch() {
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState(false);
    const [productData, setv] = useState([
        { product: 'Non-Brands', category: 'Non-Brands', id: 'item1' },
        { product: 'nike', category: 'Brand', id: 'item2' },
        { product: 'adidas', category: 'Brand', id: 'item3' },
        { product: 'jordans', category: 'Brand', id: 'item4' },
        { product: 'Pumpkins', category: 'Brand', id: 'item5' },
        { product: 'converse', category: 'Brand', id: 'item6' },
        { product: 'crocs', category: 'Brand', id: 'item7' },
        { product: 'skechers', category: 'Brand', id: 'item8' },
        { product: 'puma', category: 'Brand', id: 'item9' },
        { product: 'asics', category: 'Brand', id: 'item10' },
        { product: 'vans', category: 'Brand', id: 'item11' },
        { product: 'reebok', category: 'Brand', id: 'item11' }
    ]);
    const [fields, setf]=useState( { groupBy: 'category', text: 'product', value: 'id' })
    function cho(){
        var multiselectObj = document.getElementById('mtselement').ej2_instances[0];
        console.log(multiselectObj.text);
    }
    
    
    // function generate(){
    //     teamlist.filter
    // }
    
    const filterNames = ({ keyword }) => {
        return keyword.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };
    function generate(){
        console.log(`${searchValue}`)
        var search=teamlist.filter(filterNames)
        var data=[
            ['x', search[0].keyword],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 27],
            [15,24]
          ]
        setchartdatacomp(data)
        setSearched(search)
        
        data = [];
        teamlist.map((i)=>{
            var l = search.filter(item => item.keyword == i.keyword)
            
            if(l.length != 1){
                data.push(i)
            }
            else{
               
            }
        })
        setteamlistnew(data)
    };
    
    

    const [searched,setSearched] = useState([]);

    const [download, setdownload] = useState(false);
    const [sidenav,setsidenav] = useState(false);
    const [chartoption, setchartoption] = useState("da");
    // table
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [selectionTypenew, setSelectionTypenew] = useState('checkbox');

    const [teamcol,setteamcol] = useState([]);
    const [teamcolHidden,setteamcolHidden] = useState([]);
    const [teamlistnew, setteamlistnew] = useState([])

    const [chartdata, setchartdata] = useState([]);
    const [chartdataCompetitor, setchartdatacomp] = useState([]);
    const [timeperiod, settimeperiod] = useState("Monthly");
    const [show,setshow]= useState(false);
 
    useEffect(()=>{
        var data=[{
            keyword:"Shoes for men",
            volume: 5000,
            competition: "Low",
            bids: "₹1.38"
        },{
            keyword:"Women Slippers",
            volume: 6000,
            competition: "High",
            bids: "₹5.42"
        },{
            keyword:"Mens sandals",
            volume: 9000,
            competition: "Medium",
            bids: "₹2.84"
        },{
            keyword:"Casual wears",
            volume: 3500,
            competition: "High",
            bids: "₹10.38"
        }];
        


        setteamList(data);
        const columnsHidden = [
            {
            
              dataIndex: "keyword",
            },
            {
            //   title: "SEARCH VOLUME",
              dataIndex: "volume",
            //   key: "volume"
            },
            {
                // title:"COMPETITION",
                dataIndex:"competition",
                // key:"competition",
            },
            {
                // title:"TOP PAGE BIDS",
                dataIndex:"bids",
                // key:"bids",
            }
          ];
        setteamcolHidden(columnsHidden);
        const columns = [
            {
              title: "KEYWORD IDEAS",
              dataIndex: "keyword",
              key: "keyword"
            },
            {
              title: "SEARCH VOLUME",
              dataIndex: "volume",
              key: "volume"
            },
            {
                title:"COMPETITION",
                dataIndex:"competition",
                key:"competition",
            },
            {
                title:"TOP PAGE BIDS",
                dataIndex:"bids",
                key:"bids",
            }
          ];
          setteamcol(columns);
        //   data=[
        //     ['x', 'values'],
        //     ["week 1", 0],
        //     ["week 2", 10],
        //     ["week 3", 23],
        //     ["week 4", 17],
        //     ["week 5", 18],
        // ];
        // setchartdata(data);
        data=[
            ['x', 'Shoes for men'],
            
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 27],
            [12,24]
          ]
        setchartdatacomp(data)
    },[])

    function handleModal(){
        setshow(!show);
    }
    
    return (
        <>
        
        <section class="outer-wrapper module-expand-keyword">
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
                                <span class="profile-name">SEO</span>
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
                            <li><a href="module-expand-roi">ROI Calculator</a></li>
                            <li><a href="content-word-count">Content Word Count on a Page</a></li>
                            <li><a href="module-expand-backlinks">BackLinks</a></li>
                            <li><a href="module-expand-keyword-research">Keyword Research</a></li>
                            <li><a href="module-expand-seo-volatality">SEO Volatality</a></li>
                            <li><a href="module-expand-google-analytics">Google Analytics</a></li>
                            <li><a href="module-expand-seo-audit">SEO Audit</a></li>
                        </ul>
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-keyword-research">Keyword Research</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Keyword Research</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            
                        
                           
                        <div class="row da-pa-top-select">
                                <div class="col-sm-5 pad-lzero" style={{display:"flex"}}>
                                        <span class="main-title">Keyword Research Details</span>
                                        <span style={{width:50+'%',marginLeft:24+'px'}}>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 my-2">
                                    <label style={{marginRight:52+'px'}}>Search</label>
                                    <SearchBar class="input" onSearch={setSearchValue} value={searchValue} />
                                    {/* <i className="fa fa-search icon input_img " ></i> */}
                                </div>
                                <div className="col-lg-3 my-2">
                                    <label htmlFor="" style={{marginRight:52+'px'}}>Location</label>
                                    <select>
                                        <option value="All">All</option>
                                        <option value="Contains">Bangalore</option>
                                        <option>Coimbatore</option>
                                        <option>Chennai</option>
                                        <option value="regex">Mumbai</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 my-2">
                                <label htmlFor="" style={{marginRight:52+'px'}}>Language</label>
                                            <select>
                                                <option value="All">All</option>
                                                <option value="Contains">English</option>
                                                <option>Tamil</option>
                                                <option>Hindi</option>
                                                <option value="regex">Telugu</option>
                                            </select>
                                </div>
                                <div className="col-lg-3 my-2">
                                    <label htmlFor="" style={{marginRight:52+'px'}}>Data Source</label>
                                    <select>
                                        <option value="All">All</option>
                                        <option value="Contains">Contains</option>
                                        <option>Does not Contain</option>
                                        <option>Exact match</option>
                                        <option value="regex">Regex</option>
                                    </select>
                                </div>
                            </div>
                            {/* /////////////////////////////////// */}
                            <div className="row" style={{marginTop:24+'px'}}>
                                <div className="col-lg-3 my-2">
                                    <label style={{marginRight:17+'px', maxWidth:133+'px'}}>Select Date Range</label>
                                    {/* <input style={{marginRight:24+'px'}} type="date"/>    */}
                                    {/* <input  type="date"/>    */}
                                    <DateRangePicker
                                        class="date-range"
                                            showDropdowns
                                            ranges={customRanges}
                                            timePickerIncrement={1}
                                        startDate={start}
                                        endDate={maxDate}
                                            minDate={minDate}
                                            maxDate={maxDate}
                                            opens="right"
                                            format="DD-MM-YYYY"
                                            autoUpdateInput={true}
                                            alwaysShowCalendars={true}
                                            linkedCalendars={true}
                                            onApply={datePickerHandler}
                                            autoApply={true}
                                            applyClass="btn btn-sm btn-primary btn-raised"
                                            cancelClass="btn btn-sm btn-flat"
                                        >
                                        <input type="text" autoComplete="off" id="date-picker" placeholder="Choose date range" />
                                    </DateRangePicker>
                                </div>
                                <div className="col-lg-3 my-2">
                                    <label htmlFor="" style={{marginRight:52+'px'}}>Condition</label>
                                        <button className="outline-btn-boderless"
                                                onClick={() => setOpen(!open)}
                                                // aria-controls="example-collapse-text"
                                                // aria-expanded={open}
                                            >
                                                Add Condition &nbsp; &nbsp; &nbsp;   <i class="fa fa-chevron-down drop"></i>
                                            </button>
                                </div>
                                <div className="col-lg-3 my-2">
                                    {/* <div style={{display:"flex"}} class=""> */}
                                            <div className="row">
                                                <div className="col-2 col-lg-1" style={{minWidth:100+'px'}}>
                                                <label style={{marginRight:22+'px'}}>Filter</label>
                                                </div>
                                                <div className="col-lg-6 ms-sm-5" style={{width:205+'px', marginLeft:0.4+'rem'}}>
                                                <MultiSelectComponent id="mtselement" popupHeight='200px' fields={fields} dataSource={productData} placeholder="Select  Keywords" mode="CheckBox" enableGroupCheckBox="true" allowFiltering="true" showSelectAll="true" filterBarPlaceholder="Search keywords">
                                                    <Inject services={[CheckBoxSelection]} />
                                                </MultiSelectComponent>
                                            </div>
                                            </div>
                                </div>
                                <div className="col-lg-3 my-2">
                                <button className="outline-btn" onClick={generate}>Generate</button>
                                </div>
                            </div>
                            
                            
                            <br/>
                            <div className="row">
                                <div className="col-10">
                                {/* <label htmlFor="" style={{marginRight:24+'px'}}>drop</label> */}
                                            {/* <select >
                                                <option value="All">Add Condition</option>
                                                
                                             </select> */}
                                       
                                        <div >
                                            {/* <Collapse in={open} dimension="width"> */}
                                            {open?<><div id="example-collapse-text">
                                            <Card body className="keyword-card text-center mt-5" style={{width: "70%",minWidth: "250px"}}>
                                                    <div className="row">
                                                        <div className="col-md-6 my-2">
                                                        <label htmlFor="" className=" me-2">Metric Type</label>
                                                        <select>
                                                                <option value="All">All</option>
                                                                <option value="Contains">Bangalore</option>
                                                                <option>Coimbatore</option>
                                                                <option>Chennai</option>
                                                                <option value="regex">Mumbai</option>
                                                        </select>
                                                        </div>
                                                        <div className="col-md-6 my-2">
                                                        <label htmlFor="" className=" me-2">Expression</label>
                                                        <select>
                                                                <option value="All">All</option>
                                                                <option value="Contains">Bangalore</option>
                                                                <option>Coimbatore</option>
                                                                <option>Chennai</option>
                                                                <option value="regex">Mumbai</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 my-2">
                                                            <label className=" me-2">Value</label>
                                                            <input type="text" placeholder="enter value"/>
                                                        </div>
                                                        <div className="col-md-6 my-2">
                                                        <label htmlFor="" className=" me-2 ">Type of match</label>
                                                        <select>
                                                                <option value="All">All</option>
                                                                <option value="Contains">Bangalore</option>
                                                                <option>Coimbatore</option>
                                                                <option>Chennai</option>
                                                                <option value="regex">Mumbai</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div></>:<></>}
                                            
                                            {/* </Collapse> */}
                                        </div>
                                        
                                </div>
                                <div className="col-2">
                                        
                                        
                                        </div>
                            </div>
                            <hr/>
                            
                            
{/* /////////////////////////////////////////////////////////////////// */}
                                <div className="score-maintain">
                                
                                    <a style={{color:"white",marginRight:24+"px"}} class="outline-btn" onClick={()=>handleModal()}>Export</a>
                                
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
                                <Chart
                                className="line-graph mt-5"
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
                                {
                                        searched.length===0?<>
                                        
                                        </>
                                        :
                                        <>
                                        <div>
                                            <Table id="sample-module-expand" columns={teamcol} dataSource={searched} rowSelection={{type: selectionType,...rowSelection,}} pagination={false} />
                                        </div>
                                        </>
                                } 
                                <h2 className="mt-4 keyword-idea-title">Keyword Ideas</h2>
                                {
                                        searched.length===0?<>
                                        <div>
                                            <Table id="sample-module-expand"  columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                                        </div>
                                        </>
                                        :
                                        <>
                                        <div>
                                            
                                            <Table id="sample-module-expand-hidden" columns={teamcolHidden} dataSource={teamlistnew} rowSelection={{type: selectionTypenew,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                        </div>
                                         </>
                                }
                                
                            
                            <div class="row">
                                
                            </div>
                            
                            

                            

                        {/* <button onClick={()=>{cho()}}>graph</button> */}
                            
                        
                            
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
                            
        </section>

        





        </>
    );
}

export default ModuleExpandKeywordResearch;