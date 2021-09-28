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

function ModuleExpandROI() {
    const [KeywordSelected, setKeywordSelected] = useState(null);
    function handleChangeKeyword(selected){
        setKeywordSelected(selected);
        
    };
    const [KeywordOption, setKeywordOption] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [PaidCPCTable, setPaidCPCTable] = useState([]);
    const [PaidCTCCol, setPaidCTCCol] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [methodROI, setmethodROI] = useState("GSC");
    const [GSCTable, setGSCTable] = useState([]);
    const [GSCCol, setGSCCol] = useState([]);
    const [selectionTypeGSC, setSelectionTypeGSC] = useState('checkbox');
    const [ClickShareTable, setClickShareTable] = useState([]);
    const [ClickShareCol, setClickShareCol] = useState([]);
    const [selectionTypeClickShare, setSelectionTypeClickShare] = useState('checkbox');
    const [chartdata, setchartdata] = useState([]);
    const [show,setshow]= useState(false);
    const [showGSC, setshowGSC] = useState(false);
    const [showClickShare, setshowClickShare] = useState(false);
    useEffect(()=>{
        var data = [];
        data = [
            {label:"Shoes", value:"Shoes"},
            {label:"Formal Shoes", value:"Formal Shoes"},
            {label:"Casual Shoes", value:"Casual Shoes"},
            {label:"Shoes for Men", value:"Shoes for Men"},
        ]
        setKeywordOption(data);
        data = [
            {
                title:"Keyword List",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"Search Volume",
                dataIndex:"volume",
                key:"volume",
                width:"10%"
            },
            {
                title:"CPC",
                dataIndex:"ctc",
                key:"ctc",
                width:"20%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"60%"
            }
        ];
        setPaidCTCCol(data);
        data = [
            {
                key:"1",
                keyword:"Soes",
                volume:"33100",
                ctc:"3.1"
            },
            {
                key:"2",
                keyword:"Shoes for Men",
                volume:"5400",
                ctc:"2.5"
            },
            {
                key:"3",
                keyword:"Mens for Women",
                volume:"27100",
                ctc:"6.8"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                volume:"12400",
                ctc:"50.2"
            }
        ]
        setPaidCPCTable(data);
        data = [
            {
                title:"Keywords",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"Clicks",
                dataIndex:"click",
                key:"click",
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"80%"
            }
        ]
        setGSCCol(data);
        data = [
            {
                title:"Keywords",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"EStd. Organic Traffic",
                dataIndex:"organictraffic",
                key:"organictraffic",
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"80%"
            }
        ];
        setClickShareCol(data);
        data = [
            {
                key:"1",
                keyword:"Shoes for Men",
                click:"984"
            },
            {
                key:"2",
                keyword:"Shoes",
                click:"564"
            },
            {
                key:"3",
                keyword:"Shoes for Women",
                click:"872"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                click:"1250"
            },
        ];
        setGSCTable(data);
        data = [
            {
                key:"1",
                keyword:"Shoes for Men",
                organictraffic:"784"
            },
            {
                key:"2",
                keyword:"Shoes",
                organictraffic:"2200"
            },
            {
                key:"3",
                keyword:"Shoes for Women",
                organictraffic:"11000"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                organictraffic:"2400"
            },
        ]
        setClickShareTable(data);
        data=[
            ['x', 'ROI'],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            
        ];
        setchartdata(data);
    },[])
    
    function handleModal(){
        setshow(!show);
    }
    function handleModalGSC(){
        setshowGSC(!showGSC);
    }
    function handleModalClickShare(){
        setshowClickShare(!showClickShare);
    }
    function openModal(a){
        if(a == "GSC"){
            handleModalGSC();
        }
        else{
            handleModalClickShare();
        }
    }
    function generateROI(){
        var a = document.getElementById('roi-choose-method').value;
        if(a == "GSC"){
            setmethodROI("GSC");
        }
        else{
            setmethodROI("ClickShare")
        }
    }
    return (
        <>
            <section class="outer-wrapper ROI">
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
                            <Tab>ROI</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="row">
                                <div className="col-md-4" style={{display:"flex"}}>
                                    <label>Choose Keyword</label>
                                    <ReactSelect
                                        className="da-pa-search"
                                        options={KeywordOption}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeKeyword}
                                        allowSelectAll={true}
                                        value={KeywordSelected}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label>Revenue Generated</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col-md-4">
                                    <label>Total Leads</label>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Choose Location</label>
                                    <select>
                                        <option value="India">India</option>
                                        <option value="US">US</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>Choose Language</label>
                                    <select>
                                        <option value="English">English</option>
                                        <option value="Tamil">Tamil</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>Data Source</label>
                                    <select>
                                        <option value="Google">Google</option>
                                        <option value="Sheets">Sheets</option>
                                    </select>
                                </div>
                            </div>
                            <div class="main-title ">Organic CPC</div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>SEO Cost</label>
                                    <input type="text" />
                                </div>
                                <div className="col-md-4">
                                    <label>Choose Method</label>
                                    <select id="roi-choose-method" onChange={()=>{openModal(document.getElementById('roi-choose-method').value)}}>
                                        <option value="GSC">GSC</option>
                                        <option value="ClickShare">Click Share</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <button class="outline-btn" onClick={()=>{generateROI()}}>Generate</button>
                                </div>
                            </div>
                            <div className="add-new-btnw">
                                <button class="outline-btn">Export</button>
                            </div>
                            <Table id="sample-module-expand" columns={PaidCTCCol} dataSource={PaidCPCTable} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                            {
                                methodROI == "GSC"
                                ?
                                    <>
                                        <div class="main-title ">GSC</div>
                                        <Table id="sample-module-expand" columns={GSCCol} dataSource={GSCTable} rowSelection={{type: selectionTypeGSC,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                    </>
                                :
                                    <>
                                        <div class="main-title ">Click Share</div>
                                        <Table id="sample-module-expand" columns={ClickShareCol} dataSource={ClickShareTable} rowSelection={{type: selectionTypeClickShare,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                    </>
                            }
                            <div className="ROI-outer">
                                <div className="ROI-inner">
                                    <h4>ROI</h4>
                                    <p>3</p>
                                </div>
                                <div className="ROI-inner">
                                    <h4>ROAS</h4>
                                    <p>8</p>
                                </div>
                                <div className="ROI-inner">
                                    <h4>Cost Per Lead</h4>
                                    <p>$245k</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Select Metric</label>
                                    <select>
                                        <option value="ROI">ROI</option>
                                        
                                    </select>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-6">
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
                            <Chart
                                className="line-graph"
                                width={'600px'}
                                height={'400px'}
                                chartType="LineChart"
                                data={chartdata}
                                
                                options={{
                                    hAxis: {
                                    title: "Dates",
                                    },
                                    vAxis: {
                                    title: "",
                                    ticks:[10,20,30,40,50]
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
        <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal ROI-modal">  
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
        <Modal show={showGSC} onHide={()=>handleModalGSC()} className="edit-employee-modal ROI-modal">  
            <Modal.Header closeButton>GSC</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>Select URL</label>
                                    <select>
                                        <option value="URL 1">URL 1</option>
                                        <option value="URL 2">URL 2</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Countrye</label>
                                    <select name="" id="">
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Search Type</label>
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            
            <Button onClick={()=>handleModalGSC()}>Set</Button>  
            </Modal.Footer>  
        </Modal>
        <Modal show={showClickShare} onHide={()=>handleModalClickShare()} className="edit-employee-modal ROI-modal">  
            <Modal.Header closeButton>Click Share</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>Organic Share %</label>
                                    <input type="text" />
                                </div>

                                

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            
            <Button onClick={()=>handleModalClickShare()}>Set</Button>  
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

export default ModuleExpandROI;
