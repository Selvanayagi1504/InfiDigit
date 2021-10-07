import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Button, Menu,Checkbox, Dropdown as Drop,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
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

  const pieOptions = {
    title: "",
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "right",
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 20,
      top: 100,
      width: "80%",
      height: "80%"
    },
  };

function ModuleExpandClickShare() {
    const [ClickShareWebsite, setClickShareWebsite] = useState(null);
    function handleChangeWebsite(selected){
        setClickShareWebsite(selected);
        changeGraph(selected);
    };
    const [WebsiteOption, setWebsiteOption] = useState([]);
    const [ClickShareKeywordSelected, setClickShareKeywordSelected] = useState(null);
    function handleChangeKeyword(selected){
        setClickShareKeywordSelected(selected);
        
    };
    const [KeywordOption, setKeywordOption] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [piedata, setpiedata] = useState([]);
    const [chartdata, setchartdata] = useState([]);
    const [WebsiteTable, setWebsiteTable] = useState([]);
    const [WebsiteCol, setWebsiteCol] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [visibleMenuSettings, setvisibleMenuSettings] = useState(false);
    const [checkedColumns, setcheckedColumns] = useState([]);;
    const [initialColumns, setinitialColumns] = useState([]);
    const onChange = (e) => {
        var checkedColumnsLocal = checkedColumns;
        if(e.target.checked){
            checkedColumnsLocal = checkedColumnsLocal.filter(id => {return id !== e.target.id})
        }
        else if(!e.target.checked){
            console.log(checkedColumnsLocal);
            checkedColumnsLocal.push(e.target.id)
        }
    
        var filtered = initialColumns;
        for(var i =0;i< checkedColumnsLocal.length; i++)
        filtered = filtered.filter(el => {return el.dataIndex !== checkedColumnsLocal[i]})
        setWebsiteCol(filtered);
        setcheckedColumns(checkedColumnsLocal);
      }
      const handleVisibleChange = flag => {
        setvisibleMenuSettings(flag)
      };
    
    useEffect(()=>{
        const a=[
            ['Task', 'Hours per Day'],
            ['Utilised', 6],
            ['Not utilised', 4]
         ];
         setpiedata(a);
        var data = [];
        data = [
            ['x', 'Website1'],
            ["week 1", 0],
            ["week 2", 10],
            ["week 3", 23],
            ["week 4", 17],
            ["week 5", 18],
        ];
        setchartdata(data);
        data = [
            {label:"Website1", value:"Website1"},
            {label:"Website2", value:"Website2"},
            {label:"Website3", value:"Website3"},
            {label:"Website4", value:"Website4"},
            {label:"Website5", value:"Website5"},
        ];
        setWebsiteOption(data);
        data = [
            {label:"Keyword1", value:"Keyword1"},
            {label:"Keyword2", value:"Keyword2"},
            {label:"Keyword3", value:"Keyword3"},
            {label:"Keyword4", value:"Keyword4"},
            {label:"Keyword5", value:"Keyword5"},
        ];
        setKeywordOption(data);
        data = [
            {
                title:"List of Keywords",
                dataIndex:"keywordlist",
                key:"keywordlist"
            },
            {
                title:"Website 1",
                dataIndex:"website1",
                key:"website1"
            },
            {
                title:"Website 2",
                dataIndex:"website2",
                key:"website2"
            },
            {
                title:"Website 3",
                dataIndex:"website3",
                key:"website3"
            },
            {
                title:"Website 4",
                dataIndex:"website4",
                key:"website4"
            },
            {
                title:"Website 5",
                dataIndex:"website5",
                key:"website5"
            },
        ];
        setWebsiteCol(data);
        setinitialColumns(data);
        // setcheckedColumns(data);
        data = [
            {
                key:"1",
                keywordlist:"Shoes",
                website1:"33100",
                website2:"33100",
                website3:"33100",
                website4:"33100",
                website5:"33100",
            },
            {
                key:"2",
                keywordlist:"Shoes for Men",
                website1:"5600",
                website2:"5600",
                website3:"5600",
                website4:"5600",
                website5:"5600",
            },
            {
                key:"3",
                keywordlist:"Formal Shoes",
                website1:"27100",
                website2:"27100",
                website3:"27100",
                website4:"27100",
                website5:"27100",
            },
            {
                key:"4",
                keywordlist:"Casual Shoes",
                website1:"12400",
                website2:"12400",
                website3:"12400",
                website4:"12400",
                website5:"12400",
            }
        ]
        setWebsiteTable(data);
    },[])
    function changeGraph(a){
        var data = [];
        var b = ['x'];
        a.map((i)=>{
            b.push(i.value);
        })
        data.push(b);
        b = [];
        var vaxiz = [{value:"Week 1"},{value:"Week 2"},{value:"Week 3"},{value:"Week 4"},{value:"Week 5"}];
        vaxiz.map((i)=>{
            b=[];
            b.push(i.value);
            var total = 0;
            a.map((j, index)=>{
                
                if((index+1)%2==0){
                    total += 2;
                }
                else{
                    total += 5;
                }
                b.push(total);
            })
            data.push(b);
        })
        setchartdata(data);
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
    return (
        <>
            <section class="outer-wrapper module-expand-click-share dashboard-seo">
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
                        <a href="/module-expand-click-share">Click Share</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Click Share</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="row common-mb-24">
                                <div className="col-lg-3 col-md-6">
                                    <label>Organic Share %</label>
                                    <input type="text" />
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label htmlFor="">Frequency</label>
                                    <select name="" id="click-share-frequency">
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6 common-flex-div">
                                <label htmlFor="">Choose Keywords</label>
                                    <ReactSelect
                                        className="da-pa-search Click-Share-Keyword"
                                        options={KeywordOption}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeKeyword}
                                        allowSelectAll={true}
                                        value={ClickShareKeywordSelected}
                                    />
                                </div>
                                <div className="col-lg-2 col-md-6 add-new-btnw">
                                <button class="outline-btn">Generate</button>
                                </div>
                            </div>
                            <hr/>
                            <div className="row website-main">
                                <div className="col-md-6">
                                    <label htmlFor="">Date Range</label>
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
                                <div className="col-md-6 website">
                                    <label>Website</label>
                                    <ReactSelect
                                        className="da-pa-search"
                                        options={WebsiteOption}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeWebsite}
                                        allowSelectAll={true}
                                        value={ClickShareWebsite}
                                    />
                                </div>
                            </div>
                            <div className="row click-share-charts">
                                <div className="col-md-6">
                                    <Chart chartType="PieChart" data={piedata} options={pieOptions} graph_id="PieChart" width={"100%"} height={"400px"} legend_toggle/>
                                </div>
                                <div className="col-md-6">
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdata}
                                        
                                        options={{
                                            hAxis: {
                                            title: "",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            legend:{position:"bottom"}
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-show-hide">
                                                Show / Hide Columns
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="">
                                                    <Menu>  
                                                        <Menu.ItemGroup title="Columns" >
                                                            {initialColumns.map((i,index)=>{
                                                                return(
                                                                    <Menu.Item key={index}><Checkbox id={i.key} onChange={onChange} defaultChecked>{i.title}</Checkbox></Menu.Item>
                                                                )
                                                            })}
                                                        </Menu.ItemGroup>
                                                    </Menu>
                                                </Dropdown.Item>
                                            
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="add-new-btnw">
                                            <button class="outline-btn">Export</button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                <Table id="sample-module-expand" columns={WebsiteCol} dataSource={WebsiteTable} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
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

export default ModuleExpandClickShare;
