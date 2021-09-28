import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Button, Menu,Checkbox, Dropdown as Drop } from "antd";
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
    return (
        <>
            <section class="outer-wrapper module-expand-click-share">
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
                            <Tab>Click Share</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="row" style={{marginBottom:24+'px'}}>
                                <div className="col-lg-3">
                                    <label>Organic Share %</label>
                                    <input type="text" />
                                </div>
                                <div className="col-lg-3">
                                    <label htmlFor="">Frequency</label>
                                    <select name="" id="click-share-frequency">
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                </div>
                                <div className="col-lg-4" style={{display:"flex"}}>
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
                                <div className="col-lg-2 add-new-btnw">
                                <button class="outline-btn">Generate</button>
                                </div>
                            </div>
                            {/* <div className="row" style={{marginBottom:24+'px'}}>
                                <div className="col-md-4" style={{display:"flex"}}>
                                    
                                </div>
                                <div className="col-md-4">
                                    
                                </div>
                                <div className="col-md-4"></div>
                            </div> */}
                            <div className="row website-main">
                                <div className="col-md-6">
                                    <label htmlFor="">Date Range</label>
                                    <input type="date" />
                                    <input type="date" />
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
