
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
import {DatePicker} from 'react-datepicker';

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


function ModuleExpandGSC() {
    //Dimensions GSC Tab
    const [dimensionsSelected, setdimensionsSelected] = useState(null);
    function handleChangeDimensions(selected){
        setdimensionsSelected(selected);
    };
    const [DimensionsOptions, setDimensionsOptions] = useState([]);

    //Query GSC Tab
    const [QueryGSCSelected, setQueryGSCSelected] = useState(null);
    function handleChangeQueryGSCTab(selected){
        setQueryGSCSelected(selected);
    };
    const [QueryGSCTabOptions, setQueryGSCTabOptions] = useState([]);

    const [sidenav,setsidenav] = useState(false);
    const [show,setshow]= useState(false);
    const [gsctabtable, setgsctabtable] = useState([]);
    const [selectionTypeGSCTab, setSelectionTypeGSCTab] = useState('checkbox');
    const [GSCTableCol,setGSCTableCol] = useState([]);
    const [gscQueryTable, setgscQueryTable] = useState([]);
    const [selectionTypeGSCQueryTable, setSelectionTypeGSCQueryTable] = useState('checkbox');
    const [GSCQueryTableCol,setGSCQueryTableCol] = useState([]);
    const [gscPageTable, setgscPageTable] = useState([]);
    const [selectionTypeGSCPageTable, setSelectionTypeGSCPageTable] = useState('checkbox');
    const [GSCPageTableCol,setGSCPageTableCol] = useState([]);
    const [chooseintoption, setchooseintoption] = useState("External");
    const [GSCmodal , setGSCmodal] = useState([{value:"1"}]);
    const [GSCmodallength, setGSCmodallength] = useState([]);

    useEffect(()=>{
        var data = [
            {label:"Query", value:"Query"},
            {label:"Page", value:"Page"},
            {label:"Country", value:"Country"},
            {label:"Device", value:"Device"},
            {label:"Search Appearence", value:"Search Appearence"},
            {label:"Date", value:"Date"},
        ];
        setDimensionsOptions(data);
        setQueryGSCTabOptions(data);
        var columns = [
            {
                title:"Query",
                dataIndex:"query",
                key:"query"
            },
            {
                title:"Clicks",
                dataIndex:"clicks",
                key:"clicks"
            },
            {
                title:"Impressions",
                dataIndex:"impression",
                key:"impression"
            },
            {
                title:"CTR",
                dataIndex:"ctr",
                key:"ctr"
            },
            {
                title:"Position",
                dataIndex:"position",
                key:"position"
            }
        ]
        setGSCTableCol(columns);
        data = [
            {
                query:"Cult Fit",
                clicks:"5174",
                impression:"15750",
                ctr:"32.85%",
                position:"1.0"
            },
            {
                query:"Curefit",
                clicks:"1385",
                impression:"5033",
                ctr:"27.52%",
                position:"1.0"
            },
            {
                query:"cult",
                clicks:"1384",
                impression:"10731",
                ctr:"12.05%",
                position:"2.1"
            },
            {
                query:"Gym near me",
                clicks:"1326",
                impression:"110531",
                ctr:"1.18%",
                position:"1.6"
            },
        ]
        setgsctabtable(data);
        columns = [
            {
                title:"Top Queries",
                dataIndex:"query",
                key:"query",
                width:"70%"
            },
            {
                title:<div>Clicks<br/>Last 7 days</div>,
                dataIndex:"clicklast7",
                key:"clicklast7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Previous 7 days</div>,
                dataIndex:"clickprev7",
                key:"clickprev7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Difference</div>,
                dataIndex:"diff",
                key:"diff",
                width:"10%"
            },
        ]
        setGSCQueryTableCol(columns);
        data = [
            {
                query:"Top google Searches 2021",
                clicklast7:"120",
                clickprev7:"104",
                diff:"16"
            },
            {
                query:"InfiDigit",
                clicklast7:"83",
                clickprev7:"74",
                diff:"9"
            },
            {
                query:"Most searched thing on Google 2021",
                clicklast7:"72",
                clickprev7:"57",
                diff:"15"
            },
            {
                query:"Types of SEO",
                clicklast7:"70",
                clickprev7:"56",
                diff:"14"
            },
            {
                query:"Most searched topics on Youtube 2021",
                clicklast7:"63",
                clickprev7:"77",
                diff:"-14"
            },
            {
                query:"most Searched keywords on Youtube",
                clicklast7:"60",
                clickprev7:"39",
                diff:"21"
            },
        ]
        setgscQueryTable(data);
        columns = [
            {
                title:"Top Pages",
                dataIndex:"pages",
                key:"pages",
                width:"70%"
            },
            {
                title:<div>Clicks<br/>Last 7 days</div>,
                dataIndex:"clicklast7",
                key:"clicklast7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Previous 7 days</div>,
                dataIndex:"clickprev7",
                key:"clickprev7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Difference</div>,
                dataIndex:"diff",
                key:"diff",
                width:"10%"
            },
        ]
        setGSCPageTableCol(columns);
        data = [
            {
                pages:"https://www.infidigit.com/news/youtube-searches/",
                clicklast7:"2649",
                clickprev7:"1668",
                diff:"681"
            },
            {
                pages:"https://www.infidigit.com/blog/google",
                clicklast7:"632",
                clickprev7:"452",
                diff:"157"
            },
            {
                pages:"https://www.infidigit.com/blog/youtube-search",
                clicklast7:"600",
                clickprev7:"400",
                diff:"200"
            },
        ]
        setgscPageTable(data);
        var a = GSCmodal.length - 1;
        setGSCmodallength(a)
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereportgsc(){
        // var data = gsctabtable;
        var data = JSON.parse(JSON.stringify(gsctabtable));
        dimensionsSelected.map((i)=>{
            data.push({
                query:i.value,
                clicks:"1550",
                impression:"102",
                ctr:"32.25%",
                position:"3.0"
            })
        })
        setgsctabtable(data);
    }
    function handleMOdalSet(a){
        console.log(a)
    }
    function addModal(){
        var data = JSON.parse(JSON.stringify(GSCmodal));
        var x = GSCmodal.length + 1;
        data.push({value:x});
        setGSCmodal(data);
        setGSCmodallength(x+2);
        var a = "plus"+(x-1);
        console.log(a);
        document.getElementById(a).classList.add('none')
    }
    return (
        <>
            <section class="outer-wrapper module-expand-gsc">
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
            <div class="content-wrapper">
                <div class="dashboard-wrapper">
                    <div class="sidebar-nav-bar">
                        <ul class="list-unstyled side-menu">
                            <li><a href="module-expand-da">DA/ PA Checker</a></li>
                            <li><a href="module-expand-google-trends">Google Trends</a></li>
                            <li><a href="">Page Speed and Core Web Vitals</a></li>
                            <li><a href="">Click Share</a></li>
                            <li><a href="module-expand-rank-tracking">Rank Tracking</a></li>
                            <li><a href="module-expand-site-uptime">Site Uptime Monitor</a></li>
                            <li><a href="">GSC Data Extractor</a></li>
                            <li><a href="">Organic Research module</a></li>
                            <li><a href="content-word-count">Content Word Count</a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>GSC</Tab>
                            <Tab>Queries / Pages</Tab>
                            <Tab>Internal / External /Index</Tab>
                            <Tab>Enhancements</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            
                            <div className="row" style={{marginBottom:24+'px'}}>
                                <div className="col-md-3">
                                    <label style={{marginRight:24+'px'}}>Website</label>
                                    <input type="text"/>
                                </div>
                                <div className="col-md-6">
                                    <label style={{marginRight:24+'px'}}>Select Date Range</label>
                                    <input style={{marginRight:24+'px'}} type="date"/>
                                    <input type="date"/>
                                </div>
                                <div className="col-md-3">
                                    <label style={{marginRight:24+'px'}}>Search Type</label>
                                    <select>
                                        <option value="Web">Web</option>
                                        <option value="Video">Video</option>
                                        <option>Image</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3" style={{display:"flex"}}>
                                    <label style={{marginRight:24+'px'}}>Dimensions</label>
                                    <ReactSelect
                                        className="gsc-multiselect"
                                        options={DimensionsOptions}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeDimensions}
                                        allowSelectAll={true}
                                        value={dimensionsSelected}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label style={{marginRight:24+'px'}}>Expression</label>
                                    <select>
                                        <option value="All">All</option>
                                        <option value="Contains">Contains</option>
                                        <option>Does not Contain</option>
                                        <option>Exact match</option>
                                        <option value="regex">Regex</option>
                      9              </select>
                                </div>
                                <div className="col-md-3" style={{display:"flex"}}>
                                <label style={{marginRight:24+'px', marginTop:5+'px'}}>Filter</label>
                                <button class="outline-btn" onClick={()=>handleModal()}>Filter</button>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:24+'px'}}>
                                <div className="col-md-3">
                                    <label style={{marginRight:24+'px'}}>Aggregation Type</label>
                                    <select>
                                        <option value="By Property">By Property</option>
                                        <option value="By Page">By Page</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button class="outline-btn" onClick={()=>generatereportgsc()}>Generate Report</button>
                                </div>
                                <div className="col-md-2">
                                    
                                </div>
                                <div className="col-md-4" style={{textAlign:"end"}}>
                                    <button class="outline-btn">Export</button>
                                </div>
                            </div>
                            <div>
                                <Table id="sample-module-expand" columns={GSCTableCol} dataSource={[...gsctabtable]} rowSelection={{type: selectionTypeGSCTab,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Tabs className="tabs-inner-page-speed">
                                <div class="row">
                                    <div class="col-sm-10 pad-lzero">
                                        <TabList>
                                            <Tab>Query</Tab>
                                            <Tab>Pages</Tab>
                                        </TabList>
                                    </div>
                                    <div class="col-sm-2 add-new-btnw">
                                        <a href="#" class="outline-btn">EXPORT</a>
                                    </div>
                                </div>
                                <TabPanel>
                                    <div>
                                        <Table id="sample-module-expand" columns={GSCQueryTableCol} dataSource={gscQueryTable} rowSelection={{type: selectionTypeGSCQueryTable,...rowSelection,}} pagination={{position:[]}} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <   Table id="sample-module-expand" columns={GSCPageTableCol} dataSource={gscPageTable} rowSelection={{type: selectionTypeGSCPageTable,...rowSelection,}} pagination={{position:[]}} />
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                                <div className="col-md-6">
                                    <label style={{marginRight:24+'px'}}>Choose Type</label>
                                    <select id="choose-type-inex" value={chooseintoption} onChange={()=>{setchooseintoption(document.getElementById('choose-type-inex').value)}}>
                                        <option value="External">External</option>
                                        <option value="Internal">Internal</option>
                                        <option value="Index">Index</option>
                                    </select>
                                </div>
                                <div className="col-md-6 add-new-btnw">
                                    <a href="#" class="outline-btn">EXPORT</a>
                                </div>
                            </div>
                            <hr/>
                            { chooseintoption == "External" 
                                ?
                                <>
                                    <div className="gsc-ex-title">External Total:</div>
                                    <div className="box-gsc">
                                        <a href="">Show more</a>
                                    </div>
                                    <div class="add-new-btnw">
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
                                    <div className="chart-inex">
                                        <Chart
                                            className="line-graph"
                                            width={'800px'}
                                            height={'500px'}
                                            chartType="Bar"
                                            data={[
                                                ['External links dropped by 20%', 'External links'],
                                                ["Feb '21", 32627],
                                                ["Mar '21", 31843],
                                                ["Apr '21", 33191],
                                                ["May '21", 32154],
                                                ["Jun '21", 33195],
                                                ["Jul '21", 34323],
                                                ["Aug '21", 27345]
                                            ]}
                                            
                                            options={{
                                                hAxis: {
                                                title: "External links dropped by 20%",
                                                baselineColor:"red"
                                                },
                                                vAxis: {
                                                title: "",
                                                minValue:"0",
                                                maxValue:"40,000"
                                                },
                                                
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    </div>
                                </>
                                :
                                <></>
                            }
                            { chooseintoption == "Internal" 
                                ?
                                <>
                                    <div className="gsc-ex-title">Internal Total:</div>
                                    <div className="box-gsc">
                                        <a href="">Show more</a>
                                    </div>
                                    <div class="add-new-btnw">
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
                                    <div className="chart-inex">
                                        <Chart
                                            className="line-graph"
                                            width={'800px'}
                                            height={'500px'}
                                            chartType="Bar"
                                            data={[
                                                ['Internal links improved by 8%', 'Internal links'],
                                                ["Feb '21", 1453513],
                                                ["Mar '21", 1874841],
                                                ["Apr '21", 2317148],
                                                ["May '21", 2277080],
                                                ["Jun '21", 2792648],
                                                ["Jul '21", 3342819],
                                                ["Aug '21", 3596717]
                                            ]}
                                            
                                            options={{
                                                hAxis: {
                                                title: "Internal links dropped by 20%",
                                                baselineColor:"red"
                                                },
                                                vAxis: {
                                                title: "",
                                                minValue:"0",
                                                maxValue:"40,000"
                                                },
                                                
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    </div>
                                </>
                                :
                                <></>
                            }
                            { chooseintoption == "Index" 
                                ?
                                <>
                                    <div className="gsc-ex-title">Index Total:</div>
                                    <div className="box-gsc">
                                        <a href="">Show more</a>
                                    </div>
                                    <div class="add-new-btnw">
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
                                    <div className="chart-inex">
                                        <Chart
                                            className="line-graph"
                                            width={'800px'}
                                            height={'500px'}
                                            chartType="Bar"
                                            data={[
                                                ['Index pages improved by 9%', 'Index links'],
                                                ["Jan '21", 20216],
                                                ["Feb '21", 22204],
                                                ["Mar '21", 23647],
                                                ["Apr '21", 25670],
                                                ["May '21", 28501],
                                                ["Jun '21", 33620],
                                                ["Jul '21", 36757],
                                                ["Aug '21", 40195]
                                            ]}
                                            
                                            options={{
                                                hAxis: {
                                                title: "Index links dropped by 20%",
                                                baselineColor:"red"
                                                },
                                                vAxis: {
                                                title: "",
                                                minValue:"0",
                                                maxValue:"40,000"
                                                },
                                                
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    </div>
                                </>
                                :
                                <></>
                            }
                        </TabPanel>
                        <TabPanel>
                            <Enhancements />
                        </TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={()=>handleModal()} className="module-expand-modal">  
            <Modal.Header closeButton>Filter</Modal.Header>  
            <Modal.Body>
                {GSCmodal.map((i)=>{
                    
                    return(
                        <div className="row" style={{marginBottom:24+'px'}}>
                            <div className="col-md-3" style={{display:"flex"}}>
                                <span style={{marginRight:16+'px', marginTop:5+'px'}}>{i.value}</span>
                                <ReactSelect
                                    id = {`GSCModalMulti${i.value}`}
                                    className="da-pa-search"
                                    options={QueryGSCTabOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChangeQueryGSCTab}
                                    allowSelectAll={true}
                                    value={QueryGSCSelected}
                                />
                            </div>
                            <div className="col-md-3">
                                <select id={`GscModalCondition${i.value}`}>
                                    <options>Conditions</options>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id={`GSCModalInput${i.value}`} style={{height:38+'px'}} />
                            </div>
                            <div className="col-md-2">
                                <button class="outline-btn" onClick={()=>{handleMOdalSet(i.value)}}>Set</button>
                            </div>
                            <div className="col-md-1">
                                {(i.value != GSCmodallength && QueryGSCTabOptions.length != i.value)? <i id={`plus${i.value}`} class="fa fa-plus" onClick={()=>{addModal()}}></i>  :<></>}
                            </div>
                            
                        </div>
                    )
                })}
            </Modal.Body>  
            <Modal.Footer>  
             
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

function Enhancements(props){
    const [enhanceactive, setenhanceactive] = useState("FAQ");
    const [chartdataError, setchartdataError] = useState([]);
    const [chartdataValidWithWarn, setchartdataValidWithWarn] = useState([]);
    const [chartdataInvalid, setchartdataInvalid] = useState([]);
    const [chartdataImpressions, setchartdataImpressions] = useState([]);

    useEffect(()=>{
        var data=[
            ['x', 'Error'],
            ["2021-06-23", 0],
            ["2021-06-24", 0],
            ["2021-06-25", 0],
            ["2021-06-26", 0],
            ["2021-06-27", 0],
            ["2021-06-28", 0],
            ["2021-06-29", 0]
        ];
        setchartdataError(data);
        var data=[
            ['x', 'InValid'],
            ["2021-06-23", 91],
            ["2021-06-24", 95],
            ["2021-06-25", 75],
            ["2021-06-26", 85],
            ["2021-06-27", 98],
            ["2021-06-28", 81],
            ["2021-06-29", 65]
        ];
        setchartdataInvalid(data);
        var data=[
            ['x', 'Valid With Warn'],
            ["2021-06-23", 0],
            ["2021-06-24", 0],
            ["2021-06-25", 0],
            ["2021-06-26", 0],
            ["2021-06-27", 0],
            ["2021-06-28", 0],
            ["2021-06-29", 0]
        ];
        setchartdataValidWithWarn(data);
        var data=[
            ['x', 'Valid With Warn'],
            ["2021-06-23", 8944],
            ["2021-06-24", 9505],
            ["2021-06-25", 7996],
            ["2021-06-26", 7110],
            ["2021-06-27", 8045],
            ["2021-06-28", 7419],
            ["2021-06-29", 7943]
        ];
        setchartdataImpressions(data);
    },[])
    function chooseenhancelist(a){
        var x = enhanceactive;
        x = x.replace(/\s/g, '');
        document.getElementById(x).classList.remove('bold-active-enhance')
        setenhanceactive(a);
        a = a.replace(/\s/g,'');
        document.getElementById(a).classList.add('bold-active-enhance')
    }
    return(
        <>
            <div className="row">
                <div className="col-md-2 enhance-sidebar">
                    <ul className="list-enhace-headings">
                        <li><a id="BreadCrumbs" onClick={()=>chooseenhancelist("BreadCrumbs")}>BreadCrumbs</a></li>
                        <li><a id="FAQ" class="bold-active-enhance" onClick={()=>chooseenhancelist("FAQ")}>FAQ</a></li>
                        <li><a id="Howto" onClick={()=>chooseenhancelist("How to")}>How to</a></li>
                        <li><a id="JobPostings" onClick={()=>chooseenhancelist("Job Postings")}>Job Postings</a></li>
                        <li><a id="Logos" onClick={()=>chooseenhancelist("Logos")}>Logos</a></li>
                        <li><a id="Products" onClick={()=>chooseenhancelist("Products")}>Products</a></li>
                        <li><a id="ReviewSnippets" onClick={()=>chooseenhancelist("Review Snippets")}>Review Snippets</a></li>
                        <li><a id="SitelineSearchbox" onClick={()=>chooseenhancelist("Siteline Searchbox")}>Siteline Searchbox</a></li>
                    </ul>
                </div>
                <div className="col-md-10 enhance-active-content">
                    <div className="row">
                        <div className="col-md-10">
                            <div class="main-title">{enhanceactive}</div>
                            <Tabs className="tabs-inner-page-speed module-expand-gsc-tabs-inner">
                                <TabList>
                                    <Tab>
                                        <p>Error</p>
                                        <h5>0</h5>
                                        <p>No issues</p>
                                    </Tab>
                                    <Tab>
                                        <p>Valid with warn</p>
                                        <h5>0</h5>
                                        <p>No issues</p>
                                    </Tab>
                                    <Tab>
                                        <p style={{marginTop:31+'px'}}>Invalid</p>
                                        <h5>92</h5>
                                        {/* <br /> */}
                                    </Tab>
                                    <Tab>
                                        <p style={{marginTop:32+'px'}}>Impressions</p>
                                        <br/>
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataError}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataValidWithWarn}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataInvalid}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataImpressions}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="col-md-2 add-new-btnw">
                            <a href="#" class="outline-btn">Export</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleExpandGSC;
