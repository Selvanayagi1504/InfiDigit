import React from 'react';
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb} from "antd";
import {Dropdown} from 'react-bootstrap';
import {ModuleExpandTickets} from './index';



//import { ModuleExpandOrganicResearch } from '.';


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


function ModuleExpandOrganicResearch() {

    const [QueryORTabOptions, setQueryORTabOptions] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    //const [show,setshow]= useState(false);
    const [ORtabtable, setORtabtable] = useState([]);
    const [selectionTypeORTab, setSelectionTypeORTab] = useState('checkbox');
    const [ORTableCol,setORTableCol] = useState([]);
    const [gscQueryTable, setORQueryTable] = useState([]);
    const [selectionTypeGSCQueryTable, setSelectionTypeGSCQueryTable] = useState('checkbox');
    const [GSCQueryTableCol,setGSCQueryTableCol] = useState([]);

    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);

    useEffect(()=>{
        var data = [
            {label:"Query", value:"Query"},
            {label:"Page", value:"Page"},
            {label:"Country", value:"Country"},
            {label:"Device", value:"Device"},
            {label:"Search Appearence", value:"Search Appearence"},
            {label:"Date", value:"Date"},
        ];
        data=[
            {
                url:"https://www.infidigit.com/news/youtube-searches-2021",
                traffic:"370",
                traff:"17.02",
                keywords:"359",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/list-of-search-engines",
                traffic:"215",
                traff:"9.89",
                keywords:"256",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/news/top-youtube-searches",
                traffic:"205",
                traff:"9.43",
                keywords:"134",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                traffic:"160",
                traff:"7.36",
                keywords:"56",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/importance-of-website/",
                traffic:"97",
                traff:"4.46",
                keywords:"79",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/top-google-searches/",
                traffic:"96",
                traff:"4.41",
                keywords:"201",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/website-structure/",
                traffic:"62",
                traff:"2.85",
                keywords:"49",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/url-structure/",
                traffic:"59",
                traff:"2.71",
                keywords:"37",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/cloaking",
                traffic:"50",
                traff:"2.30",
                keywords:"22",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/what-is-digital-marketing",
                traffic:"48",
                traff:"2.20",
                keywords:"160",
                ads:"0"
            }
        ]
        setteamList(data);
        const col = [
            {
              title: "URL",
              dataIndex: "url",
              key: "url"
            },
            {
              title: "Traffic",
              dataIndex: "traffic",
              key: "traffic"
            },
            {
                title:"Traffic %",
                dataIndex:"traff",
                key:"traff",
            },
            {
                title:"Keywords",
                dataIndex:"keywords",
                key:"keywords",
            },
            {
                title:"Ads Keywords",
                dataIndex:"ads",
                key:"ads"
            }
          ];
        setteamcol(col);
         
    
        
        setQueryORTabOptions(data);
        var columns = [
            {
                title:"Keyword",
                dataIndex:"keyword",
                key:"keyword"
            },
            {
                title:"SF",
                dataIndex:"sf",
                key:"sf"
            },
            {
                title:"Pos.",
                dataIndex:"pos",
                key:"pos"
            },
            {
                title:"Diff.",
                dataIndex:"diff",
                key:"diff"
            },
            {
                title:"Traffic%",
                dataIndex:"traffic",
                key:"traffic"
            },
            {
                title:"Volume",
                dataIndex:"volume",
                key:"volume"
            },
            {
                title:"KD%",
                dataIndex:"kd",
                key:"kd"
            },
            {
                title:"CPC (USD)",
                dataIndex:"cpc",
                key:"cpc"
            },
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"SERP",
                dataIndex:"serp",
                key:"serp"
            },
            {
                title:"Upd.",
                dataIndex:"upd",
                key:"upd"
            }

        ]
        setORTableCol(columns);
        data = [
            {
                keyword:"most subscribed youtubers",
                sf:"+2",
                pos:"17 → 19",
                diff:"↓2",
                traffic:"4.55",
                volume:"33,100",
                kd:"81",
                cpc:"2.3",
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                serp:"",
                upd:"Sep 20"
            },
            {
                keyword:"search engine list",
                sf:"+3",
                pos:"12 → 12",
                diff:"0",
                traffic:"3.91",
                volume:"6,600",
                kd:"83",
                cpc:"3.7",
                url:"https://www.infidigit.com/blog/list-of-search-engines",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"top searches on youtube",
                sf:"+4",
                pos:"4 → 5",
                diff:"↓1",
                traffic:"1.65",
                volume:"720",
                kd:"73",
                cpc:"62.1",
                url:"https://www.infidigit.com/news/youtube-searches-2021",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"top searches on youtube",
                sf:"+4",
                pos:"0 → 6",
                diff:"new",
                traffic:"1.65",
                volume:"720",
                kd:"73",
                cpc:"62.1",
                url:"https://www.infidigit.com/news/top-youtube-searches",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"most subscribed youtube channel",
                sf:"+3",
                pos:"23 → 19",
                diff:"↑4",
                traffic:"1.65",
                volume:"12,100",
                kd:"79",
                cpc:"1.3",
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                serp:"",
                upd:"Sep 20"
            },
            {
                keyword:"website structure",
                sf:"+5",
                pos:"7 → 7",
                diff:"0",
                traffic:"1.61",
                volume:"880",
                kd:"59",
                cpc:"4.8",
                url:"https://www.infidigit.com/blog/website-structure/",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"popular searches",
                sf:"+2",
                pos:"0 → 7",
                diff:"new",
                traffic:"1.61",
                volume:"880",
                kd:"86",
                cpc:"2",
                url:"https://www.infidigit.com/news/youtube-searches-2021/",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"link building services singapore",
                sf:"+2",
                pos:"1 → 1",
                diff:"0",
                traffic:"1.47",
                volume:"70",
                kd:"9",
                cpc:"0",
                url:"https://www.infidigit.com/sg/link-building/",
                serp:"",
                upd:"Sep 02"
            },
        ]
        setORtabtable(data);
    },[])
    
    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime module-organic-research">
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
                        <a href="/module-expand-organic-research">Organic Research</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Organic Research</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>
                        <TabPanel>
                        <div className="row" style={{marginBottom:24+'px'}}>
                                <div className="col-md-4">
                                    <label style={{marginRight:24+'px'}}>Search Type</label>
                                    <select style={{width:200+'px'}}>
                                        <option>URL</option>
                                        <option>Prefix</option>
                                        <option>Domain/*</option>
                                        <option>*.domain/*</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label style={{marginRight:24+'px'}}>Domain URL</label>
                                    <input type="text" style={{width:200+'px'}}/>
                                </div>
                                <div className="col-md-4">
                                    <label style={{marginRight:24+'px'}}>Device Type</label>
                                    <select style={{width:200+'px'}}>
                                        <option>Desktop</option>
                                        <option>Mobile</option>                                                                               
                                    </select>
                                </div>                            
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label style={{marginRight:24+'px'}}>  Currency  </label>
                                    <select style={{width:200+'px'}}>
                                        <option>INR</option>
                                        <option>USD</option>                                                                               
                                    </select>
                                </div>  
                                <div className="col-md-4">
                                    <label style={{marginRight:24+'px'}}>Select Date</label>
                                    <input style={{width:200+'px'}} type="date"/>
                                    
                                </div>
                                <div className="col-md-4">
                                    <button style={{height:38+'px'}} class="outline-btn" onClick={{}}>GENERATE</button>
                                </div>
                            </div>
                            <br />
                            <div class="add-new-btnw">
                                <a href="#" class="outline-btn">EXPORT</a>
                            </div>
                            <div></div>
                            <div>
                             <hr />   
                            <div class="container">
                                <div className="col-md-2">
                                    Keywords
                                    <h1><strong>5.9K</strong></h1>
                                    <p style={{color:'green'}}>5.81%</p>
                                    
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Traffic
                                    <h1><strong>2.2K</strong></h1>
                                    <p style={{color:'green'}}>9.91%</p>
                                    
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Traffic Cost
                                    <h1><strong>$22.8K</strong></h1>
                                    <p style={{color:'red'}}>-32.36%</p>
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Branded traffic
                                    <h1><strong>0</strong></h1>
                                    <p style={{color:'green'}}>0.0%</p>
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Non-Branded traffic
                                    <h1><strong>2.2K</strong></h1>
                                    <p style={{color:'green'}}>9.91%</p>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div>
                                <br />
                                <h4>Keywords</h4>
                            </div>
                            <div>
                                <Table id="or-module-expand" columns={ORTableCol} dataSource={[...ORtabtable]} rowSelection={{type: selectionTypeORTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                            </div>
                            <div>
                                <h4>Organic Pages</h4>
                                
                            </div>
                            <div>
                                <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                            </div>
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

export default ModuleExpandOrganicResearch;