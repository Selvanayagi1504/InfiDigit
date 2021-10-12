import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
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
import {ModuleExpandTickets, SideNavBarCustom, SideNavBarCustomClosed} from './index';

import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"

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
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
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
    const [values, setValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [headValues, setHeadValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [open1, setOpen1] = useState(false);
    const [head1,setHead1]= useState(headValues[0].format())
    const [head2,setHead2]= useState(headValues[1].format())
    const [checkBoxValue,setCheckBoxValue]= useState(false)
    function setheadvalues(){
        setHead1(values[0].format())
        setHead2(values[1].format())
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (open1 && ref.current && !ref.current.contains(e.target)) {
            setOpen1(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])
    return (
        <>
        
        <section class="outer-wrapper module-expand-keyword dashboard-seo">
        {
                usertype == "SEO" ?<div class="top-nav-bar">
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
                {/* <div class="nav-bar-center">&nbsp;</div> */}
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
            </div> :
             <div class="top-nav-bar">
             <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
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
                   <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                   <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                   <span class="profile-name">Director</span>
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
            }

            <div className="custom-row-dashboard-seo">
                <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                    <div class="sidebar-nav-bar">
                        {sidenavToggle 
                            ?
                            <>
                                {/* <ul class="list-unstyled side-menu">
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
                                </ul> */}
                                <SideNavBarCustom />
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                            :
                            <>
                                {/* <ul class="list-unstyled side-menu">
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
                                </ul> */}
                                <SideNavBarCustomClosed />
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
                        <a href="/module-expand-keyword-research">Keyword Research</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div ref={ref} class="calendar-main">
                        <div className="add-new-btnw">
                            <button className="outline-btn-boderless" style={{width:"250px"}} onClick={() => setOpen1(!open1)} >
                                {head1}&nbsp;-&nbsp;{head2}&nbsp;&nbsp;
                                <i class="fa fa-chevron-down drop"></i>
                            </button>
                        </div>
                        
                        {open1 && (
                            <div id="example-collapse-text-calendar">
                                <Card body className="daterange-picker-card  mt-2">
                                    <div className="row">
                                    
                                        <div className="col-lg-8 calendar-col">
                                            <Calendar
                                                className="custom-calendar"
                                                value={values}
                                                onChange={(e)=>{
                                                    setValues(e)
                                                }}
                                                range
                                                numberOfMonths={3}
                                                className="custom-calendar"
                                                showOtherDays
                                            />
                                        </div>
                                        <div className="col-lg-4 mt-3 mt-lg-0 text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label >Date Range</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">custom</option>
                                                        <option value="Contains">today</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3 text-center">
                                                <div className="col-5">
                                                    <input type="text" value={values[0].format()}/>
                                                </div>
                                                <div className="col-1">
                                                
                                                </div>
                                                <div className="col-5">
                                                    {
                                                        values.length==2?
                                                        <input type="text" value={values[1].format()}/> : <input type="text" value={"select"}/>
                                                    }
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6 ">
                                                    <input type="checkbox" onChange={()=>{setCheckBoxValue(!checkBoxValue)}}/>
                                                    <label className="lable-compare">Compare to</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">previous period</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            {
                                            checkBoxValue?
                                                <div className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                :
                                                <div  className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" disabled value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    <h6 className="pt-2">-</h6>
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" disabled value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            }
                                            <hr/>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <button onClick={()=>{setheadvalues();setOpen1(!open1)}}
                                                    className="outline-btn" >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                <buton onClick={() => setOpen1(!open1)}
                                                className="outline-btn">
                                                        Cancel
                                                </buton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        
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
                                {/* <div className="col-lg-3 my-2">
                                    <label style={{marginRight:17+'px', maxWidth:133+'px'}}>Select Date Range</label>
                                    
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
                                </div> */}
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
                                <div className="row" style={{marginTop:64+'px'}}>
                                    <div className="col-md-6">
                                        <Chart
                                            className="line-graph mt-5"
                                            
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
                                                legend:{
                                                    position:"bottom"
                                                }
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        {
                                            searched.length===0?<>
                                            
                                            </>
                                            :
                                            <>
                                            <div>
                                                <Table id="sample" columns={teamcol} dataSource={searched} rowSelection={{type: selectionType,...rowSelection,}} pagination={false} />
                                            </div>
                                            </>
                                        } 
                                        <h2 className="mt-4 keyword-idea-title">Keyword Ideas</h2>
                                        {
                                                searched.length===0?<>
                                                <div>
                                                    <Table id="sample"  columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                                                </div>
                                                </>
                                                :
                                                <>
                                                <div>
                                                    
                                                    <Table id="sample" columns={teamcolHidden} dataSource={teamlistnew} rowSelection={{type: selectionTypenew,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                                </div>
                                                </>
                                        }
                                    </div>
                                </div>
                                
                                
                                <hr/>
                            
                            
                            
                        
                            
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