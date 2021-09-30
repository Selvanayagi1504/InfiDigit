import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect, createFilter } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
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

function ModuleExpandContentWordCount() {

    const [allOptions, setallOptions] = useState([]);
    const filterAllOptions = (rawInput) => {
    const filteredOptions = allOptions.filter((o) => filterOption(o, rawInput));

        if (filteredOptions.length === 0) {
            filteredOptions.push({ value: rawInput, label: rawInput });
        }

        setcolor1(filteredOptions);
    };


    const [optionSelected1, setoptionSelected1] = useState(null);
    function handleChange1(selected){
        setoptionSelected1(selected);
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
    const [totalwordcount, settotalwordcount] = useState([]);
    const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
    const [show,setshow]= useState(false);
    

    useEffect(()=>{
        var data=[]
        var color=[
            { value: "Shoes", label: "Shoes" },
            { value: "Rainy Shoes", label: "Rainy Shoes" },
            { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
            { value: "Casual Shoes", label: "Casual Shoes" }
        ];
        
        setcolor(color);
        
        color = [
            { value: "https://www.metroshoes.net/", label: "https://www.metroshoes.net/" },
            { value: "https://www.mochishoes.com/", label: "https://www.mochishoes.com/" },
            { value: "https://www.myntra.com/", label: "https://www.myntra.com/" },
            { value: "https://www.amazon.in/", label: "https://www.amazon.in/" }
        ]
        setcolor1(color);
        setallOptions(color);
        color = [
            {keyword:"Shoes" , count:"2000"},
            {keyword:"Rainy Shoes", count:"2500"},
            {keyword:"Formal Shoes for Men",count:"2364"},
            {keyword:"Casual Shoes", count:"1964"}
        ]
        settotalwordcount(color);
        var columns = [
            {
                title:"",
                children:[
                   { title:"List of Keywords",
                    dataIndex:"keyword",
                    key:"keyword"}
                ]
            },
          ];
          setteamcol(columns);
        setteamList([{
            key:0,
            keyword:"Shoes"
        }])
        var data=[
            ['x', 'https://www.amazon.in/'],
            ["Jan", 0.5],
            ["Feb", 0.75],
            ["Mar", 0.6],
        ];
        setchartdataContentWordCount(data);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereport1(){
        if(optionSelected1 && optionSelected){
            var a = [{
                title:"",
                children:[
                   { title:"List of Keywords",
                    dataIndex:"keyword",
                    key:"keyword",
                    width:"1%"
                    }
                ]
            }];
            var b = ['x'];
            
            console.log(optionSelected1)
            optionSelected1.map((i)=>{
                a.push({
                    title:`${i.value}`,
                    children:[
                        {
                            title:"Word Count",
                            dataIndex:"wordcount",
                            key:"wordcount"
                        },
                        {
                            title:"Keyword Density",
                            dataIndex:"keywordense",
                            key:"keywordense"
                        }
                    ],
                    width:"10%"
                });
                b.push(i.value);
            })
            var data = [];
            data.push(b);
            var vaxiz = [{value:"Jan"},{value:"Feb"},{value:"Mar"}];
            vaxiz.map((i)=>{
                var m = [];
                m.push(i.value);
                optionSelected1.map((j, index)=>{
                    var total = ((index+1)*2/2000)*100;
                    m.push(total);
                })
                data.push(m);
            })
            console.log(data)
            setchartdataContentWordCount(data)
            var x = (optionSelected1.length*10)+1;
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
            })
            data.map((i,index)=>{
                optionSelected1.map((j)=>{
                    var x = totalwordcount.filter(item => item.keyword == i.keyword);
                    var total = x[0].count;
                    total = (5/total)*100;
                    data[index].wordcount = <div>5</div>;
                    data[index].keywordense = <div>{"("}{total}{")"}</div>;

                    
                })  
            })
            setteamList(data);
        }
        else{
            alert("please choose url and fields")
        }
        
    }
    

    return (
        <>
            <section class="outer-wrapper module-expand-site-uptime content-word-count">
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
                                <span class="profile-name">M.Subash</span>
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
                        <a href="/content-word-count">Content Word Count</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>Content Word Count</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="row rank-tracking-top-select">
                                <div className="col-md-5">
                                    <label htmlFor="" style={{marginTop:5+'px'}}>Select Url</label>
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
                                        onInputChange={(e) => filterAllOptions(e)}
                                    />
                                    
                                </div>
                                <div className="col-md-5">
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
                                        
                                    />
                                </div>
                                <div className="col-md-2">
                                    <button style={{marginLeft:24+"px", height:38+'px'}} class="outline-btn" onClick={generatereport1}>Generate</button>
                                </div>
                            </div>
                            <div class="add-new-btnw">
                                <a href="#" class="outline-btn">EXPORT</a>
                            </div>
                            <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                            <div className="chart-content-word-count">
                                {/* <div class="add-new-btnw">
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
                                </div> */}
                                {/* <Chart
                                    className="line-graph"
                                    width={'600px'}
                                    height={'400px'}
                                    chartType="ColumnChart"
                                    data={chartdataContentWordCount}
                                    
                                    options={{
                                        hAxis: {
                                        title: "Months",
                                        },
                                        vAxis: {
                                        title: "Months",
                                        },
                                        
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                /> */}
                            </div>
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

export default ModuleExpandContentWordCount;
