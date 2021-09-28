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
import SearchBar from "./searchBar";
import Collapse from 'react-bootstrap/Collapse'
import  Card  from "react-bootstrap/Card";
import { DropDownTreeComponent,CheckBoxSelection, Inject,MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
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
        
        
    };
    
    

    const [searched,setSearched] = useState([]);

    const [download, setdownload] = useState(false);
    const [sidenav,setsidenav] = useState(false);
    const [chartoption, setchartoption] = useState("da");
    // table
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [teamcolHidden,setteamcolHidden] = useState([]);


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
            keyword:"Shoe for men",
            volume: 6000,
            competition: "High",
            bids: "₹5.42"
        },{
            keyword:"Mens shoes",
            volume: 9000,
            competition: "Medium",
            bids: "₹2.84"
        },{
            keyword:"Comfortable shoes for men",
            volume: 3500,
            competition: "High",
            bids: "₹10.38"
        }];
        


        setteamList(data);
        const columnsHidden = [
            {
            //   title: "KEYWORD",
              dataIndex: "keyword",
            //   key: "keyword"
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
                        <li><i class="fa fa-bell"></i></li>

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



{/* //////////////////////////////////////////// */}
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
                                    <div className="col-md-3 my-2">
                                        <div style={{display:"flex"}} class="add-new-btnw float-left">
                                            
                                            <label style={{marginRight:24+'px'}}>Search</label>
                                                
                                            <SearchBar onSearch={setSearchValue} value={searchValue} />
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 my-2">
                                        <div style={{display:"flex"}} class="add-new-btnw float-left">
                                            
                                        <label htmlFor="" style={{marginRight:24+'px'}}>Location</label>
                                            <select>
                                                <option value="All">All</option>
                                                <option value="Contains">Bangalore</option>
                                                <option>Coimbatore</option>
                                                <option>Chennai</option>
                                                <option value="regex">Mumbai</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 my-2">
                                        <div style={{display:"flex"}} class="add-new-btnw float-left">
                                            
                                        <label htmlFor="" style={{marginRight:24+'px'}}>Language</label>
                                            <select>
                                                <option value="All">All</option>
                                                <option value="Contains">English</option>
                                                <option>Tamil</option>
                                                <option>Hindi</option>
                                                <option value="regex">Telugu</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 my-2">
                                            <div style={{display:"flex"}} class="add-new-btnw float-left">
                                                
                                            <label htmlFor="" style={{marginRight:24+'px'}}>Data Source</label>
                                            <select>
                                                <option value="All">All</option>
                                                <option value="Contains">Contains</option>
                                                <option>Does not Contain</option>
                                                <option>Exact match</option>
                                                <option value="regex">Regex</option>
                                             </select>
                                                
                                            </div>
                                        </div>
                                   
                                            
                                        
                                
                                
                            </div>
                           
                            <div className="row">
                                        
                                        <div className="col-md-3 my-2">
                                            <div style={{display:"flex"}} class="add-new-btnw">
                                            <label style={{marginRight:24+'px'}}>Select Date Range</label>
                                                <input style={{marginRight:24+'px'}} type="date"/>
                                                
                                                <input type="date"/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-3 my-2 ms-3">
                                            <div style={{display:"flex"}} class="add-new-btnw">
                                            <button className="outline-btn-boderless"
                                                onClick={() => setOpen(!open)}
                                                // aria-controls="example-collapse-text"
                                                // aria-expanded={open}
                                            >
                                                Add Condition &nbsp; &nbsp; &nbsp;   <i class="fa fa-chevron-down drop"></i>
                                            </button>
                                            </div>
                                        </div>
                                        <div className="col-md-1 my-2 keyword-filter">
                                            <div style={{display:"flex"}} class="add-new-btnw float-left">
                                            {/* <div className="row"> */}
                                                {/* <div className="col-6"> */}
                                                <label style={{marginRight:24+'px'}}>Filter</label>
                                                {/* </div> */}
                                                {/* <div className="col-3 "> */}
                                                <MultiSelectComponent id="mtselement" popupHeight='200px' fields={fields} dataSource={productData} placeholder="Select  Keywords" mode="CheckBox" enableGroupCheckBox="true" allowFiltering="true" showSelectAll="true" filterBarPlaceholder="Search keywords">
                                                    <Inject services={[CheckBoxSelection]} />
                                                </MultiSelectComponent>
                                                {/* </div> */}
                                            </div>
                                            
                                            
                                            {/* </div> */}
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
                                                <Card body className="keyword-card text-center " style={{width: '800px'}}>
                                                <label htmlFor="" className=" me-5">Metric Type</label>
                                                <select>
                                                        <option value="All">All</option>
                                                        <option value="Contains">Bangalore</option>
                                                        <option>Coimbatore</option>
                                                        <option>Chennai</option>
                                                        <option value="regex">Mumbai</option>
                                                </select>
                                                <label htmlFor="" className="ms-5 me-5">Expression</label>
                                                <select>
                                                        <option value="All">All</option>
                                                        <option value="Contains">Bangalore</option>
                                                        <option>Coimbatore</option>
                                                        <option>Chennai</option>
                                                        <option value="regex">Mumbai</option>
                                                </select>
                                                <br />
                                                <br />
                                                <label className=" me-5">Value</label>
                                                    <input type="text" placeholder="enter value"/>
                                                <label htmlFor="" className="ms-5 me-5">Type of match</label>
                                                <select>
                                                        <option value="All">All</option>
                                                        <option value="Contains">Bangalore</option>
                                                        <option>Coimbatore</option>
                                                        <option>Chennai</option>
                                                        <option value="regex">Mumbai</option>
                                                </select>
                                                </Card>
                                            </div></>:<></>}
                                            
                                            {/* </Collapse> */}
                                        </div>
                                        
                                </div>
                                <div className="col-2">
                                        <button className="outline-btn float-right" onClick={generate}>Generate</button>
                                        
                                        </div>
                            </div>
                            <br/>
                            
                            
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
                                width={'1200px'}
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
                                <h2 className="mt-4">Keyword Ideas</h2>
                                {
                                        searched.length===0?<>
                                        <div>
                                            <Table id="sample-module-expand"  columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                                        </div>
                                        </>
                                        :
                                        <>
                                        <div>
                                            
                                            <Table id="sample-module-expand" columns={teamcolHidden} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
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