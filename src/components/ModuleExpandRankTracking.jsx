
import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect, createFilter } from "react-select";
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
  const filterOption = createFilter({});

function ModuleExpandRankTracking() {

    const [allOptions, setallOptions] = useState([]);
    const filterAllOptions = (rawInput) => {
    const filteredOptions = allOptions.filter((o) => filterOption(o, rawInput));

        if (filteredOptions.length === 0) {
            filteredOptions.push({ value: rawInput, label: rawInput });
        }

        setcolor(filteredOptions);
    };

    const [urlSelectbottom, seturlSelectbottom] = useState(null);
    function handleChangeURLSelectedBottom(selected){
        seturlSelectbottom(selected);
    };
    const [UrloptionBottom, setUrloptionBottom] = useState([]);

    const [DomainUrlSelected, setDomainUrl] = useState(null);
    function handleChangeDomainUrl(selected){
        setDomainUrl(selected);
    };
    const [DomainUrlOption, setDomainUrlOption] = useState([]);

    const [optionSelected1, setoptionSelected1] = useState(null);
    function handleChange1(selected){
        setoptionSelected1(selected);
        setDomainUrlOption(selected);
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
    const [URL, setURL] = useState([]);
    const [displayTable, setDisplayTable] = useState(false);
    
    

    useEffect(()=>{
        var data=[]
        var color=[
            { value: "Shoes", label: "Shoes" },
            { value: "Rainy Shoes", label: "Rainy Shoes" },
            { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
            { value: "Casual Shoes", label: "Casual Shoes" }
        ];
        setallOptions(color);
        setcolor(color);
        setUrloptionBottom(color);
        color = [
            { value: "https://www.metroshoes.net/", label: "https://www.metroshoes.net/" },
            { value: "https://www.mochishoes.com/", label: "https://www.mochishoes.com/" },
            { value: "https://www.myntra.com/", label: "https://www.myntra.com/" },
            { value: "https://www.amazon.in/", label: "https://www.amazon.in/" }
        ]
        setcolor1(color);
        var columns = [
            {
                title:"List of Keywords",
                dataIndex:"keyword",
                key:"keyword"
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
                title:"1 Aug",
                dataIndex:"aug1",
                key:"aug1"
            },
            {
                title:"8 Aug",
                dataIndex:"aug8",
                key:"aug8"
            },
            {
                title:"16 Aug",
                dataIndex:"aug16",
                key:"aug16"
            },
            
          ]
          setkeyTableCol(columns);
          
          data=[
            ['x', 'Shoes'],
            ["Aug 1", 1],
            ["Aug 8", 3],
            ["Aug 16", 5],
            
        ];
        setchartdata(data);
        setteamList([{
            key:0,
            keyword:"Shoes"
        }])
        setkeytablelist([{
            url:"Shoes",
            aug1:"25",
            aug8:"36",
            aug16:"47",
            
        }])
        setDisplayTable(true);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereport1(){
        if(optionSelected1 && optionSelected){
            var a = [{
                title:"List of Keywords",
                dataIndex:"keyword",
                key:"keyword",
                width:"1%"
            }];
            var b = [];
            
            seturlSelectbottom(optionSelected);
            optionSelected1.map((i)=>{
                a.push({
                    title:`Position - ${i.value}`,
                    dataIndex:i.value,
                    key:i.value,
                    width:"5%"
                });
                
            })
            var x = (optionSelected1.length*5)+1;
            if(x < 100){
                x = 100-x;
            }
            else{
                x=5;
            }
            a.push({
                title:"",
                dataIndex:"",
                key:"",
                width:x+'%'
            })
            setteamcol(a);
            var data=[];
            optionSelected.map((i, index)=>{
                data.push({
                    key:index,
                    keyword:i.value
                })
                b.push({
                    url:i.value,
                    aug1:"25",
                    aug8:"36",
                    aug16:"47",
                    
                });  
            })
            data.map((i,index)=>{
                optionSelected1.map((j)=>{
                    var x = j.value; 
                    var m = DomainUrlSelected.filter(item => item.value !== x)[0];
                    if(m != undefined){
                        data[index][x] = <div>5 <i class="fa fa-info-circle" title={`${j.value}/${data[index].keyword}`}></i></div>;
                    }
                    else{
                        data[index][x] = <div>5</div>;
                    } 
                })  
            })
            setkeytablelist(b)
            setteamList(data);
            setDisplayTable(true);
            // if(optionSelected.length == 1){
            //     data=[
            //         ['x', 'score'],
            //         ["Aug 1", 25],
            //         ["Aug 2", 36],
            //         ["Aug 3", 47],
            //         ["Aug 4", 32],
            //         ["Aug 5", 20],
            //         ["Aug 6", 57],
            //     ];
            //     setchartdata(data);
            // }
            // else if(optionSelected.length > 1){
            //     var sample=['x','score',optionSelected[0].value];
            //     data=[
            //         sample,
            //         [0, 0, 0],
            //         [1, 10, 5],
            //         [2, 23, 15],
            //         [3, 17, 9],
            //         [4, 18, 10],
            //         [5, 9, 5],
            //         [6, 11, 3],
            //         [7, 27, 19],
            //     ];
            //     setchartdata(data);
            // }
        }
        else{
            alert("please choose url and fields")
        }
        
    }
    function generatereport2(){
        var b= [];
        urlSelectbottom.map((i)=>{
            b.push({
                url:i.value,
                aug1:"25",
                aug8:"36",
                aug16:"47",
                
            });
        })
        setkeytablelist(b);
        console.log(b)
        var data= []
        // if(urlSelectbottom.length == 1){
        //     data=[
        //         ['x', 'score'],
        //         ["Aug 1", 25],
        //         ["Aug 2", 36],
        //         ["Aug 3", 47],
        //         ["Aug 4", 32],
        //         ["Aug 5", 20],
        //         ["Aug 6", 57],
        //     ];
        //     setchartdata(data);
        // }
        // else if(urlSelectbottom.length > 1){
        //     var sample=['x','score',urlSelectbottom[0].value];
        //     data=[
        //         sample,
        //         [0, 0, 0],
        //         [1, 10, 5],
        //         [2, 23, 15],
        //         [3, 17, 9],
        //         [4, 18, 10],
        //         [5, 9, 5],
        //         [6, 11, 3],
        //         [7, 27, 19],
        //     ];
        //     setchartdata(data);
        // }
    }
    const [fre,setfre] = useState(false);
    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime module-rank">
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
                        <a href="/module-expand-rank-tracking">Rank Tracking</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Rank Tracking</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            
                            <div style={{display:"flex",float:"right", marginBottom:24+'px'}}>
                                <label style={{marginRight:24+'px',marginTop:5+'px'}}>Update Frequency</label>
                                <select name="" id="device-type" style={{marginRight:24+'px'}} disabled>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Fornightly">Fornightly</option>
                                </select>
                                <i class="fa fa-edit" style={{marginTop:10+'px', marginRight:24+'px'}} onClick={()=>{document.getElementById('device-type').disabled=!fre;setfre(!fre)}}></i>
                                <div>
                                    <select id="export" name="export">
                                        <option value="Export">Export</option>
                                        <option value="PDF">Excel</option>
                                        <option value="WORD">CSV</option>
                                        <option value="Sheets">Sheets</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row rank-tracking-top-select" style={{marginTop:48+"px"}}>
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6" style={{display:"flex"}}>
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Select Keywords</label>
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
                                        filterOption={() => true}
                                        onInputChange={(e) => filterAllOptions(e)}
                                    />
                                </div>
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6" style={{display:"flex"}}>
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Select Competitors</label>
                                    <ReactSelect
                                        className="da-pa-search"
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
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6">
                                    <label>Device Type</label>
                                    <select name="" id="device-type" className="device-type-rank-choose"> 
                                        <option value="Mobile">Mobile</option>
                                        <option value="Desktop">Desktop</option>
                                        <option value="both">Both</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row rank-tracking-top-select" >
                                
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6">
                                    <label>Location</label>
                                    <select name="" id="device-type" className="device-type-rank-choose">
                                        <option value="Chennai">Chennai</option>
                                        <option value="Bangalore">Bangalore</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6" style={{display:"flex"}}>
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Domain url</label>
                                    <ReactSelect
                                        className="da-pa-search"
                                        options={DomainUrlOption}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeDomainUrl}
                                        allowSelectAll={true}
                                        value={DomainUrlSelected}
                                    />
                                </div>
                                <div className="col-lg-4 my-2 col-sm-6 col-md-6">
                                    <button style={{ height:38+'px'}} class="outline-btn" onClick={generatereport1}>Generate</button>
                                </div>
                            </div>
                            <hr/>
                            
                            {
                                displayTable
                                ? 
                                    <>
                                        <div class="add-new-btnw">
                                            <a href="#" class="outline-btn">EXPORT</a>
                                        </div>
                                        <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div style={{display:"flex", marginTop:24+'px'}}>
                                                    <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select Keyword</label>
                                                    <ReactSelect
                                                        className="da-pa-search"
                                                        options={UrloptionBottom}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        onChange={handleChangeURLSelectedBottom}
                                                        allowSelectAll={true}
                                                        value={urlSelectbottom}
                                                    />
                                                     <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px', marginLeft:24+'px'}}>Select Competitor</label>
                                                    <select>
                                                        <option value="https://www.metroshoes.net/">https://www.metroshoes.net/</option>
                                                        <option value="https://www.mochishoes.com/">https://www.mochishoes.com/</option>
                                                        <option value="https://www.myntra.com/">https://www.myntra.com/</option>
                                                        <option value="https://www.amazon.in/">https://www.amazon.in/</option>
                                                    </select>
                                                    <button style={{marginLeft:24+"px", height:38+'px'}} class="outline-btn" onClick={generatereport2}>Generate</button>
                                                </div>
                                                {/* <div style={{display:"flex", marginTop:24+'px'}}>
                                                    <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Select Competitor</label>
                                                    <select>
                                                        <option value="https://www.metroshoes.net/">https://www.metroshoes.net/</option>
                                                        <option value="https://www.mochishoes.com/">https://www.mochishoes.com/</option>
                                                        <option value="https://www.myntra.com/">https://www.myntra.com/</option>
                                                        <option value="https://www.amazon.in/">https://www.amazon.in/</option>
                                                    </select>
                                                    <button style={{marginLeft:24+"px", height:38+'px'}} class="outline-btn" onClick={generatereport2}>Generate Report</button>
                                                </div> */}
                                            </div>
                                            
                                        </div>
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
                                        <br/>
                                        <Table id="sample-module-expand" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
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
                                                        title: "metroshoes.net",
                                                        baselineColor:"red"
                                                        },
                                                        vAxis: {
                                                        title: "Shoes",
                                                        minValue:0,
                                                        maxValue:100
                                                        },
                                                        
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                />
                                            </div>
                                            <div className="col-md-6" style={{textAlign:"end"}}>
                                                
                                            </div>
                                        </div>
                                    </> 
                                : 
                                    <>
                                    </>
                            }
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

export default ModuleExpandRankTracking;
