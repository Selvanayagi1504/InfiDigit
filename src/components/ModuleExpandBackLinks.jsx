import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import Item from "antd/lib/list/Item";
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

const rowSelection1 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection2 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection3 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection4 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ModuleExpandBackLinks() {
    const [sidenav,setsidenav] = useState(false);
    const [inputData,setInputData] = useState([{
        id:"1"
    }])
    //tab 1
    // refering domain table
    const [tablelist1, settableList1] = useState([]);
    const [selectionType1, setSelectionType1] = useState('checkbox');
    const [tablecol1,settablecol1] = useState([]);
    //backlist table
    const [tablelist2, settableList2] = useState([]);
    const [selectionType2, setSelectionType2] = useState('checkbox');
    const [tablecol2,settablecol2] = useState([]);
    //backlist table 2
    const [tablelist3, settableList3] = useState([]);
    const [selectionType3, setSelectionType3] = useState('checkbox');
    const [tablecol3,settablecol3] = useState([]);
    //tab 2
    //table
    const [tablelist4, settableList4] = useState([]);
    const [selectionType4, setSelectionType4] = useState('checkbox');
    const [tablecol4,settablecol4] = useState([]);
    useEffect(()=>{
        //refering domain table
        var data1 =[{
            types:"Dofollow",
            count: 493
        },{
            types:"Governmental",
            count: 0
        },{
            types:"Educational",
            count: 3

        },{
            types:".gov",
            count: 0
        },{
            types:".edu",
            count: 3
        },{
            types:".com",
            count: 616
        },{
            types:".net",
            count: 37
        },{
            types:".org",
            count: 29
        }];
        settableList1(data1);
    
        const columns1 = [
            {
              title: "Types of Ref. domains",
              dataIndex: "types",
              key: "types",
              width: "20%"
            },
            {
              title: "",
              dataIndex: "count",
              key: "count",
              width: "10%"
            },
            {
                title: "",
                dataIndex: "",
                key: "",
                width: "70%" 
            }
          ];
        settablecol1(columns1);
        //backlist table
        var data2 =[{
            types:"Dofollow",
            count: 5805
        },{
            types:"Nofollow",
            count: 2088
        },{
            types:"UGC",
            count: 3

        },{
            types:"Sponsored",
            count: 5
        },{
            types:"Text",
            count: 7893
        },{
            types:"Redirect",
            count: 113
        },{
            types:"Image",
            count: 1054
        },{
            types:"Form",
            count: 0
        },{
            types:"Governmental",
            count: 0
        },{
            types:"Educational",
            count: 9
        }];
        settableList2(data2);
    
        const columns2 = [
            {
              title: "Types of Backlinks",
              dataIndex: "types",
              key: "types",
              width: "20%"
            },
            {
              title: "",
              dataIndex: "count",
              key: "count",
              width: "10%"
            },
            {
                title: "",
                dataIndex: "",
                key: "",
                width: "70%" 
            }
          ];
        settablecol2(columns2);
        //backlinks table 2
        
        var data3 =[{
            refering: "https://learningseo.io/",
            dr: 47,
            domain: "1.3k",
            referingDomains: 448,
            linkedDomains: 240,
            ext: 736,
            pageTrafic: "1.2k",
            kw: 1219,
            url: "https://www/infidigit.com/blog/seo-budget",
            seen: "14 Jul 2021 / 7 h ago"

        },{
            refering: "https://dealhack.com/30-most-influential-e-commerce/",
            dr: 60,
            domain: "97.3k",
            referingDomains: 73,
            linkedDomains: 41,
            ext: 103,
            pageTrafic: 885,
            kw: 1103,
            url: "https://www/infidigit.com/",
            seen: "23 Mar 2021 / 9 h ago"

        },{
            refering: "https://neilpatel.com/blog/algorithm-seo-updates/",
            dr: 91,
            domain: "3.4M",
            referingDomains: 92,
            linkedDomains: 25,
            ext: 40,
            pageTrafic: 95,
            kw: 156,
            url: "https://www/infidigit.com/blog/panda-update",
            seen: "29 Jun 2021 / 7 Sep 2021"

        },{
            refering: "https://prnewswire.com/in/news-releases/infidigit-wins-best-search-marketing-campaign-at-the-mcube-awards-2021-867974459",
            dr: 91,
            domain: "3.3M",
            referingDomains: 13,
            linkedDomains: 11,
            ext: 27,
            pageTrafic: "36",
            kw: 13,
            url: "https://www/infidigit.com/",
            seen: "30 Aug 2021 / 1 d ago "

        }];
        settableList3(data3);
    
        const columns3 = [
            {
              title: "Referring page",
              dataIndex: "refering",
              key: "refering",
              width: "5%"
            },
            {
              title: "DR",
              dataIndex: "dr",
              key: "dr",
              width: "5%"
            },
            {
              title: "Domain Traffic",
              dataIndex: "domain",
              key: "domain",
              width: "5%"
            },
            {
              title: "Referring Domains",
              dataIndex: "referingDomains",
              key: "referingDomains",
              width: "5%"
            },
            {
              title: "Linked Domains",
              dataIndex: "linkedDomains",
              key: "linkedDomains",
              width: "5%"
            },
            {
              title: "Ext",
              dataIndex: "ext",
              key: "ext",
              width: "5%"
            },
            {
              title: "Page Trafic",
              dataIndex: "pageTrafic",
              key: "pageTrafic",
              width: "5%"
            },
            {
              title: "Kw",
              dataIndex: "kw",
              key: "kw",
              width: "5%"
            },
            {
              title: "Anchor and Target Url",
              dataIndex: "url",
              key: "url",
              width: "5%"
            },
            {
              title: "First Seen / Last Seen",
              dataIndex: "seen",
              key: "seen",
              width: "2%"
            }
            
          ];
        settablecol3(columns3);
        //tab 2
        //table
        var data4 =[{
            dr: 91,
            rank: 578,
            intersect: 3,
            amazon: 7,
            flipkart: 2,
            youtube: "777k"
        },{
            dr: 90,
            rank: 650,
            intersect: 3,
            amazon: 34,
            flipkart: 2,
            youtube: "156k"
        },{
            dr: 89,
            rank: 1574,
            intersect: 3,
            amazon: 3,
            flipkart: 1,
            youtube: "1.5k"
        },{
            dr: 88,
            rank: 1912,
            intersect: 3,
            amazon: 555,
            flipkart: 75,
            youtube: "354k"
        },{
            dr: 87,
            rank: 2313,
            intersect: 3,
            amazon: 309,
            flipkart: 18,
            youtube: "41k"
        },{
            dr: 85,
            rank: 3761,
            intersect: 3,
            amazon: 3,
            flipkart: 1,
            youtube: "27k"
        }];
        settableList4(data4);
    
        const columns4 = [
            {
              title: "DR",
              dataIndex: "dr",
              key: "dr"
            },
            {
              title: "Ahrefs Rank",
              dataIndex: "rank",
              key: "rank"
            },
            {
                title: "Intersect",
                dataIndex: "intersect",
                key: "intersect"
            },
            {
                title: "www.amazon.in/",
                dataIndex: "amazon",
                key: "amazon" 
            },
            {
                title: "www.flipkart.in/",
                dataIndex: "flipkart",
                key: "flipkart" 
            },{
                title: "www.youtube.in/",
                dataIndex: "youtube",
                key: "youtube"
            }
          ];
        settablecol4(columns4);
    },[])
    
    function addData(){
        // var temp=inputData;
        // var tempLength=temp.length+1;
        // temp.push({id:tempLength});
        // setInputData(temp);
        // console.log(inputData)
        var data = JSON.parse(JSON.stringify(inputData));
        var x = inputData.length + 1;
        data.push({id:x});
        setInputData(data);
    }

    return (
        <>
            <section class="outer-wrapper ModuleExpandBacklinks">
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
                        <a href="/module-expand-backlinks">BackLinks</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Count of Backlinks</Tab>
                            <Tab>Link Intersect</Tab>
                            <Tab>Tickets</Tab>

                        </TabList>

                        <TabPanel>
                        
                            <div className="row" style={{marginTop:48+'px'}}>
                                <div className="col-lg-4 my-2">
                                    <label style={{marginRight:40+'px'}}>Select Type</label>
                                    <select>
                                        <option value="URL">URL</option>
                                        <option value="Prefix">Prefix</option>
                                        <option value="Domain/*">Domain/*</option>
                                        <option value="*.domain/*">*.domain/*</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-2">
                                    <label  style={{marginRight:50+'px'}}>Url</label>
                                    <input  className="  ms-sm-5 ms-lg-0" type="text" />
                                </div>
                                <div className="col-lg-2 my-2"></div>
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn ">Generate</button>
                                </div>
                            </div>
                        <hr/>
                            <div className="row mt-5 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Referring Domains Count</label>
                                    <input  className="  ms-sm-5 ms-lg-0" style={{width:70+'px'}} type="text" disabled value="931" />
                                    
                                </div>
                                
                                <div className="col-lg-2 my-2"></div>
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn" style={{height:40+'px'}}>Export</button>
                                </div>
                            </div>
                            
                            <Table id="sample-module-expand"  columns={tablecol1} dataSource={tablelist1} rowSelection={{type: selectionType1,...rowSelection1,}} pagination={{position:["topLeft", "bottomRight"]}} />

                            <div className="row mt-2 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Referring Backlinks Count</label>
                                    <input  className="  ms-sm-5 ms-lg-0" style={{width:70+'px'}} type="text" disabled value="8028" />
                                </div>
                            </div>
                            <Table id="sample-module-expand"  columns={tablecol2} dataSource={tablelist2} rowSelection={{type: selectionType2,...rowSelection2,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            <div className="row mt-2 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Backlinks</label>
                                    
                                </div>
                            </div>
                            <Table id="sample"  columns={tablecol3} dataSource={tablelist3} rowSelection={{type: selectionType3,...rowSelection3,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            
                            
                        </TabPanel>
                        <TabPanel>
                            <h4>Add Competitors</h4>
                            <div className="row">
                                {
                                    
                                   
                                   inputData.map(item=>{
                                       return(
                                           <>
                                           <div id={item.id} className="col-lg-4 my-2">
                                                <label style={{marginRight:40+'px'}}>Select Type</label>
                                                <select>
                                                    <option value="URL">URL</option>
                                                    <option value="Prefix">Prefix</option>
                                                    <option value="Domain/*">Domain/*</option>
                                                    <option value="*.domain/*">*.domain/*</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 my-2">
                                                <label  style={{marginRight:50+'px'}}>Url</label>
                                                <input  className="  ms-sm-5 ms-lg-0" type="text" />
                                            </div>
                                            <div className="col-lg-2 my-2"></div>
                                           </>
                                       )
                                   })
                                    
                                }
                                
                                
                                
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn ">Generate</button>
                                </div>
                            </div>
                            
                                <button className="outline-btn" onClick={()=>addData()}>add</button>
                                <hr/>
                            <div className="row">
                                <Table id="sample-module-expand"  columns={tablecol4} dataSource={tablelist4} rowSelection={{type: selectionType4,...rowSelection4,}} pagination={{position:["topLeft", "bottomRight"]}} />

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

export default ModuleExpandBackLinks;