
import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
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

    const [allOptions1, setallOptions1] = useState([]);
    const filterAllOptions1 = (rawInput) => {
    const filteredOptions = allOptions1.filter((o) => filterOption(o, rawInput));

        if (filteredOptions.length === 0) {
            filteredOptions.push({ value: rawInput, label: rawInput });
        }

        setcolor1(filteredOptions);
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
        setallOptions1(color)
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
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title:"Myntra",
      projects:[
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
      ]
    },
    {
      title:"Amazon",
      projects:[
        {
          projname:"Amazon - Fashion"
        },
        {
          projname:"Amazon - Jewellery"
        }
      ]
    }
  ])
  function showProjects(a){
    var proj = projectslisttop.filter(item => item.title == a);
    console.log(proj[0].projects)
    setclientchosen(proj[0].projects)
  }
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    const [sidenavToggle, setSidenavToggle] = useState(true);
    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime module-rank dashboard-seo">
            <div class="top-nav-bar">
                <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
                <div className="wrapper dashboard-seo-dropdown" ref={ref}>
                    <button
                        className="button"
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                    >
                        All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                    {isMenuOpen && (
                    <div className="row">
                        <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                            
                            <ul className="Clients-list">
                            <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                            <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                        <ul class="projectsList">
                        {clientchosen.map((i)=>{
                            return(
                            <li onClick={()=>{setIsMenuOpen(false)}}><a style={{color:"inherit"}} href={`dashboard-seo?id=${i.projname}`}>{i.projname}</a></li>
                            )
                        })}
                        </ul>
                        </div>
                    </div>

                    )}
                    </div> 
                </div>
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
            <div className="custom-row-dashboard-seo">
                <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                    <div class="sidebar-nav-bar">
                        {sidenavToggle 
                            ?
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i>Home</a></li>
                                <li><a href="module-expand-da"><span class="icon"><i class="fa fa-check"></i></span><span>DA/ PA Checker</span></a></li>
                                <li><a href="module-expand-google-trends"><span class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></span><span>Google Trends</span></a></li>
                                <li><a href="module-expand-page-speed"><span class="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span><span>Page Speed and Core Web Vitals</span></a></li>
                                <li><a href="module-expand-click-share"><span class="icon"><i class="fa fa-share"></i></span><span>Click Share</span></a></li>
                                <li><a href="module-expand-rank-tracking"><span class="icon"><i class="fa fa-trophy"></i></span><span>Rank Tracking</span></a></li>
                                <li><a href="module-expand-site-uptime"><span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span><span>Site Uptime Monitor</span></a></li>
                                <li><a href="module-expand-gsc"><span class="icon"><i class="fa fa-database" aria-hidden="true"></i></span><span>GSC Data Extractor</span></a></li>
                                <li><a href="module-expand-organic-research"><span class="icon"><i class='fa fa-flask' aria-hidden="true"></i></span><span>Organic Research module</span></a></li>
                                <li><a href="module-expand-roi"><span class="icon"><i class="fa fa-calculator" aria-hidden="true"></i></span><span>ROI Calculator</span></a></li>
                                <li><a href="content-word-count"><span class="icon"><i class="fa fa-file" aria-hidden="true"></i></span><span>Content Word Count on a Page</span></a></li>
                                <li><a href="module-expand-backlinks"><span class="icon"><i class="fa fa-external-link" aria-hidden="true"></i></span><span>BackLinks</span></a></li>
                                <li><a href="module-expand-keyword-research"><span class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></span><span>Keyword Research</span></a></li>
                                <li><a href="module-expand-seo-volatality"><span class="icon"><i class="fa fa-building-o"></i></span><span>SEO Volatality</span></a></li>
                                <li><a href="module-expand-google-analytics"><span class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i></span><span>Google Analytics</span></a></li>
                                <li><a href="module-expand-seo-audit"><span class="icon"><i class="fa fa-pagelines"></i></span><span>SEO Audit</span></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i>Tickets</a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i>Configuration</a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                            :
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i></a></li>
                                <li><a href="module-expand-da"><i class="fa fa-check"></i></a></li>
                                <li><a href="module-expand-google-trends"><i class="fa fa-line-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-page-speed"><i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-click-share"><i class="fa fa-share"></i></a></li>
                                <li><a href="module-expand-rank-tracking"><i class="fa fa-trophy"></i></a></li>
                                <li><a href="module-expand-site-uptime"><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-gsc"><i class="fa fa-database" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-organic-research"><i class='fa fa-flask' aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-roi"><i class="fa fa-calculator" aria-hidden="true"></i></a></li>
                                <li><a href="content-word-count"><i class="fa fa-file" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-backlinks"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-keyword-research"><i class="fa fa-keyboard-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-volatality"><i class="fa fa-building-o"></i></a></li>
                                <li><a href="module-expand-google-analytics"><i class="fa fa-bar-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-audit"><i class="fa fa-pagelines"></i></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i></a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i></a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                        }        
                    </div>
                </div>
                <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard":"custom-column-90-dashboard-seo main-dashboard"}>
                    
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
                                        filterOption={() => true}
                                        onInputChange={(e) => filterAllOptions1(e)}
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
                                        <div className="row">
                                            <div className="col-md-6">
                                                
                                                <div style={{display:"flex", marginTop:24+'px'}}>
                                                    <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px'}}>Keyword</label>
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
                                                    <label htmlFor="" style={{marginRight:24+'px',marginTop:5+'px', marginLeft:24+'px'}}>Competitor</label>
                                                    <select>
                                                        <option value="https://www.metroshoes.net/">https://www.metroshoes.net/</option>
                                                        <option value="https://www.mochishoes.com/">https://www.mochishoes.com/</option>
                                                        <option value="https://www.myntra.com/">https://www.myntra.com/</option>
                                                        <option value="https://www.amazon.in/">https://www.amazon.in/</option>
                                                    </select>
                                                    
                                                </div>
                                                    
                                                  
                                                <div className="row common-mt-24">
                                                    <div className="col-md-6">
                                                        <button style={{ height:38+'px'}} class="outline-btn" onClick={generatereport2}>Generate</button>
                                                    </div>
                                                    <div className="col-md-5 add-new-btnw">
                                                        
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
                                                    <div className="col-md-1"></div>
                                                </div>
                                                <Chart
                                                    className="line-graph"
                                                    
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
                                                        legend:{
                                                            position:"bottom"
                                                        }
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                />
                                            </div>
                                            <div className="col-md-6 table-graph-modules">
                                                <Table id="sample" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="add-new-btnw">
                                            <a href="#" class="outline-btn">EXPORT</a>
                                        </div>
                                        <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
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
