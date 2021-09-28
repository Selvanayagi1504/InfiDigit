import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb} from "antd";
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


function ModuleExpandPageSpeed() {

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
    const [pagespeedtable, setpagespeedtable] = useState([]);
    const [selectionTypePageSpeed, setSelectionTypePageSpeed] = useState('checkbox');
    const [PageSpeedCol,setPageSpeedCol] = useState([]);
    const [URL, setURL] = useState("https://www.infidigit.com/");
    
    function keytableRecord(a){
        var data = keytablelist;
        if(a.length+1 == keytablelist.length-1){
            data = [
                {
                    key:0,
                    url:`${URL}`,
                    datatype:'Score',
                    aug1:"25",
                    aug2:"36",
                    aug3:"47",
                    aug4:"32",
                    aug5:"20",
                    aug6:"57"
                }
            ];
            for(let i=0;i<a.length;i++){
                data.push({
                    key:i,
                    url:`${URL}`,
                    datatype:`${a[i].value}`,
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
                key:0,
                url:`${URL}`,
                datatype:`${a[a.length-1].value}`,
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
        if(a.length>=1){
            data=[];
            var sample=['x','score',a[0].value];
            data=[
                sample,
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
        if(a.length==0){
            data=[
                ['x', 'score'],
                ["Aug 1", 25],
                ["Aug 2", 36],
                ["Aug 3", 47],
                ["Aug 4", 32],
                ["Aug 5", 20],
                ["Aug 6", 57],
            ];
            setchartdata(data);
        }
    }

    useEffect(()=>{
        var b=[
            {
                url:`${URL}`,
                datatype:'Score',
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            }
        ]
        setkeytablelist(b)
        var data=[
            {key:0,url:"https://www.infidigit.com/", fcp:"2.4", fid:"204", lcp:"3.1", cls:"0.07", performscore:"76"},
            {key:1,url:"https://www.infidigit.com/seo-search-engine-optimization/", fcp:"2.6", fid:"1.5", lcp:"2.1", cls:"0.09", performscore:"65"},
            {key:2,url:"https://www.infidigit.com/digital-marketing-services/", fcp:"3", fid:"204", lcp:"4.1", cls:"0.06", performscore:"54"},
            {key:3,url:"https://www.ezrankings.org/", fcp:"3.4", fid:"164", lcp:"3.5", cls:"0.08", performscore:"89"},
            {key:4,url:"https://www.ezrankings.org/seo-packages.html", fcp:"4", fid:"156", lcp:"2.1", cls:"0.05", performscore:"44"},
        ];
        var color=[
            { value: "https://www.infidigit.com/", label: "https://www.infidigit.com/" },
            { value: "https://www.infidigit.com/seo-search-engine-optimization/", label: "https://www.infidigit.com/seo-search-engine-optimization/" },
            { value: "https://www.infidigit.com/digital-marketing-services/", label: "https://www.infidigit.com/digital-marketing-services/" },
            { value: "https://www.ezrankings.org/", label: "https://www.ezrankings.org/" },
            { value: "https://www.ezrankings.org/seo-packages.html", label: "https://www.ezrankings.org/seo-packages.html" }
        ];
        setcolor(color)
        color = [
            {value:"FCP", label:"FCP"},
            {value:"FID", label:"FID"},
            {value:"LCP", label:"LCP"},
            {value:"CLS", label:"CLS"},
            {value:"Score", label:"Score"},
        ]
        setcolor1(color)
        setteamList(data);
        var columns = [
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
              title: "FCP",
              dataIndex: "fcp",
              key: "fcp",
            },
            {
                title:"FID",
                dataIndex:"fid",
                key:"fid"
            },
            {
                title:"LCP",
                dataIndex:"lcp",
                key:"lcp"
            },
            {
                title:"CLS",
                dataIndex:"cls",
                key:"cls"
            },
            {
                title:"Performance Score",
                dataIndex:"performscore",
                key:"performscore"
            },
          ];
          setteamcol(columns);
          columns = [
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"Data Type",
                dataIndex:"datatype",
                key:"datatype"
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
          columns =[
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"FCP",
                dataIndex:"fcp",
                key:"fcp"
            },
            {
                title:"Speed Index",
                dataIndex:"speedindex",
                key:"speedindex"
            },
            {
                title:"Time to Interactive",
                dataIndex:"timetointeract",
                key:"timetointeract"
            },
            {
                title:"First Meaningful Paint",
                dataIndex:"frstpaint",
                key:"frstpaint"
            },
            {
                title:"Total Blocking TIme",
                dataIndex:"totalblocktime",
                key:"totalblocktime"
            },
            {
                title:"Server Response Time",
                dataIndex:"serverresponse",
                key:"serverresponse"
            }
          ]
          setPageSpeedCol(columns);
          data = [
              {key:0,url:"https://www.infidigit.com/", fcp:"5.6", speedindex:"14", timetointeract:"20.3", frstpaint:"1.3", totalblocktime:"109", serverresponse:"0.154"},
              {key:1,url:"https://www.ezrankings.org/", fcp:"4.2", speedindex:"12", timetointeract:"18.6", frstpaint:"1.9", totalblocktime:"269", serverresponse:"0.256"},
              {key:2,url:"https://www.infidigit.com/seo-search-engine-optimization/", fcp:"3.3", speedindex:"20", timetointeract:"17.3", frstpaint:"1.2", totalblocktime:"309", serverresponse:"0.354"},
          ]
          setpagespeedtable(data)
          data=[
            ['x', 'score'],
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
    function handleURLChange(e){
        setURL(e.target.value)
        console.log(e.target.value)
        setkeytablelist([
            {
                key:0,
                url:e.target.value,
                datatype:'Score',
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            }
        ]);
        setoptionSelected1([])
        console.log(keytablelist)
        var data=[
            ['x', 'score'],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            ["Aug 4", 32],
            ["Aug 5", 20],
            ["Aug 6", 57],
        ];
        setchartdata(data);
    }
    return (
        <>
            <section class="outer-wrapper page-speed-main">
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
                        <a href="/module-expand-page-speed">Page Speed & Core Vitals</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Page Speed</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div style={{display:"flex", marginTop:24+'px'}}>
                                <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select URL's</label>
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
                                <label style={{marginLeft:24+'px',marginTop:5+'px',marginRight:24+'px'}}>Device Type</label>
                                <select name="" id="device-type">
                                    <option value="Mobile">Mobile</option>
                                    <option value="Desktop">Desktop</option>
                                    <option value="both">Both</option>
                                </select>
                                <a href="#" style={{marginLeft:24+"px", height:40+'px'}} class="outline-btn">Search</a>
                            </div>
                            
                            <hr />
                            <Tabs className="tabs-inner-page-speed">
                                <div class="row">
                                    <div class="col-sm-10 pad-lzero">
                                        <TabList>
                                            <Tab>Core Web Vitals</Tab>
                                            <Tab>Page Speed</Tab>
                                        </TabList>
                                    </div>
                                    <div class="col-sm-2 add-new-btnw">
                                        <a href="#" class="outline-btn">EXPORT</a>
                                    </div>
                                </div>
                                <TabPanel>
                                    <div>
                                        <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <Table id="sample-module-expand" columns={PageSpeedCol} dataSource={pagespeedtable} rowSelection={{type: selectionTypePageSpeed,...rowSelection,}} pagination={{position:[]}} />  
                                </TabPanel>
                            </Tabs>
                            <hr/>
                            <div class="row" style={{marginTop:24+'px',marginLeft:5+'px',marginBottom:24+'px'}}>
                                <div class="col-sm-9 pad-lzero">
                                    <div style={{display:"flex"}}>
                                        <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select URL</label>
                                        <select id="select-url-page-speed" onChange={handleURLChange}>
                                            <option value="https://www.infidigit.com/">https://www.infidigit.com/</option>
                                            <option value="https://www.ezrankings.org/">https://www.ezrankings.org/</option>
                                        </select>
                                        <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Choose Data Type</label>
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
                                <div class="col-sm-3 add-new-btnw">
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
                            
                            {/* {optionSelected1 && optionSelected1.length>0
                                ?
                                    <> */}
                                        <Table id="sample-module-expand" className="page-speed-second" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
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
                                    {/* </> */}
                                {/* :
                                    <></>
                            } */}
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

export default ModuleExpandPageSpeed;
