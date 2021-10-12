import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown, Card} from 'react-bootstrap'
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


function ModuleExpandGoogleAnalytics() {
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [SegmentGASelected, setSegmentGASelected] = useState(null);
    function handleChangeSegmentGATab(selected){
        setSegmentGASelected(selected);
    };
    const [SegmentGATabOptions, setSegmentGATabOptions] = useState([]);
    const [GraphGASelected, setGraphGASelected] = useState(null);
    function handleChangeGraphGATab(selected){
        setGraphGASelected(selected);
        changegraphsingle(selected);
    };
    const [GraphGATabOptions, setGraphGATabOptions] = useState([]);
    const [BottomSegmentSelected, setBottomSegmentSelected] = useState(null);
    function handleChangeBottomSegment(selected){
        setBottomSegmentSelected(selected);
    };
    const [BottomSegmentOptions, setBottomSegmentOptions] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [show,setshow]= useState(false);
    const [daterange2, setdaterenge2] = useState(false);
    const [daterange2withGraph, setdaterange2withGraph] = useState(false);

    const [GATable, setGATable] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [GACol,setGACol] = useState([]);
    const [chartdata, setchartdata] = useState([]);
    const [chartdataOptions, setchartdataOptions] = useState({legend:{position:"bottom"}});
    const [color, setcolor] = useState(['#4e73df', '#008000', '#ffc107', '#dc3545', '#a52a2a', '#deb887', '#5f9ea0','#8b008b', '#e9967a', '#c71585']);
    const [startDate1, setStartDate1] = useState("");
    const [startDate2, setStartDate2] = useState("");
    const [EndDate1, setEndDate1] = useState("");
    const [EndDate2, setEndDate2] = useState("");
 
    useEffect(()=>{
      var data = [
        {label:"All users", value:"All users"},
        {label:"Desktop Visits", value:"Desktop Visits"},
        {label:"Mobile & Tablet Visits", value:"Mobile & Tablet Visits"},
      ]
      setSegmentGATabOptions(data);
      setBottomSegmentOptions(data);
      var columns = [
        {
            title:"Channel",
            dataIndex:"channel",
            key:"channel"
        },
        {
            title:"Sessions",
            dataIndex:"sessions",
            key:"sessions"
        },
        {
            title:"Users",
            dataIndex:"users",
            key:"users"
        },
        {
            title:"New Users",
            dataIndex:"newusers",
            key:"newusers"
        },
        {
            title:"Revenue",
            dataIndex:"revenue",
            key:"revenue"
        },
        {
            title:"Bounce Rate",
            dataIndex:"bouncerate",
            key:"bouncerate"
        },
        {
            title:"Ecommerce Conversion Rate",
            dataIndex:"ecommerecerate",
            key:"ecommerecerate"
        }
      ]
      setGACol(columns);
      data = [
          {
            key:0,
              channel:"Overall",
              sessions:"1655",
              users:"1255",
              newusers:"2729",
              revenue:"175800",
              bouncerate:"27%",
              ecommerecerate:"18%"
          },
          {
            key:1,
            channel:"Organic Research",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        },
        {
            key:2,
            channel:"Direct",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        },
        {
            key:3,
            channel:"Social",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        },
        {
            key:4,
            channel:"Paid Search",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        },
        {
            key:5,
            channel:"Referral",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        },
        {
            key:6,
            channel:"Others",
            sessions:"1655",
            users:"1255",
            newusers:"2729",
            revenue:"175800",
            bouncerate:"27%",
            ecommerecerate:"18%"
        }
      ];
      setGATable(data);
      data = [
          {label:"Sessions", value:"Sessions"},
          {label:"Users", value:"Users"},
          {label:"Bounce Rate", value:"Bounce Rate"},
          {label:"Page/Session", value:"Page/Session"},
          {label:"Any Session Duration", value:"Any Session Duration"}
      ];
      setGraphGATabOptions(data);
      data=[
        ['x', 'users'],
        ["Sept 1", 0],
        ["Sept 2", 10],
        ["Sept 3", 23],
        ["Sept 4", 17],
        ["Sept 5", 18],
    ];
    setchartdata(data);
    },[])
  
    function handleModal(){
        setshow(!show);
    }
    function generatereportga(){
        if(daterange2){
            var c = [];
            var l=2;
            
            var options  = {
                color:c,
                legend:{position:"none"}
            }
            
            setchartdataOptions(options);
            setdaterange2withGraph(true);
            data=[
                ['x', 'users', 'users'],
                ["Sept 1", 0,5],
                ["Sept 2", 10,15],
                ["Sept 3", 23,25],
                ["Sept 4", 17,20],
                ["Sept 5", 18,30],
            ];
            setchartdata(data);
            if(document.getElementById('start-date-2').value != "" && document.getElementById('end-date-2').value !="" && SegmentGASelected){
                setBottomSegmentSelected(SegmentGASelected)
                var start1 = document.getElementById('start-date-1').value;
                var end1 = document.getElementById('end-date-1').value;
                var start2 = document.getElementById('start-date-2').value;
                var end2 = document.getElementById('end-date-2').value;
                setStartDate1(start1);
                setStartDate2(start2);
                setEndDate1(end1);
                setEndDate2(end2);
                var columns = [
                    {
                        title:"Channel",
                        dataIndex:"channel",
                        key:"channel"
                    },
                    {
                        title:"Segment",
                        dataIndex:"segment",
                        key:"segment"
                    },
                    {
                        title:"Sessions",
                        dataIndex:"sessions",
                        key:"sessions"
                    },
                    {
                        title:"Users",
                        dataIndex:"users",
                        key:"users"
                    },
                    {
                        title:"New Users",
                        dataIndex:"newusers",
                        key:"newusers"
                    },
                    {
                        title:"Revenue",
                        dataIndex:"revenue",
                        key:"revenue"
                    },
                    {
                        title:"Bounce Rate",
                        dataIndex:"bouncerate",
                        key:"bouncerate"
                    },
                    {
                        title:"Ecommerce Conversion Rate",
                        dataIndex:"ecommerecerate",
                        key:"ecommerecerate"
                    }
                ];
                setGACol(columns);
                var data = [];
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Overall</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Organic Search</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Direct</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Social</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Paid Search</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Refferal</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                SegmentGASelected.map((i)=>{
                    data.push(
                        {
                            key:i,
                            channel:<div><div class="inner-table-ga">Others</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                            segment:<div><div class="inner-table-ga">{i.value}</div><div class="inner-table-ga"></div><div class="inner-table-ga"></div><div class="inner-table-ga"></div></div>,
                            sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                            users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                            newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                            revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                            bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                            ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                        }
                    )
                })
                setGATable(data);
            }
            else if(document.getElementById('start-date-2').value != "" && document.getElementById('end-date-2').value !=""){
                var start1 = document.getElementById('start-date-1').value;
                var end1 = document.getElementById('end-date-1').value;
                var start2 = document.getElementById('start-date-2').value;
                var end2 = document.getElementById('end-date-2').value;
                setStartDate1(start1);
                setStartDate2(start2);
                setEndDate1(end1);
                setEndDate2(end2);
                var columns = [
                    {
                        title:"Channel",
                        dataIndex:"channel",
                        key:"channel"
                    },
                    {
                        title:"Sessions",
                        dataIndex:"sessions",
                        key:"sessions"
                    },
                    {
                        title:"Users",
                        dataIndex:"users",
                        key:"users"
                    },
                    {
                        title:"New Users",
                        dataIndex:"newusers",
                        key:"newusers"
                    },
                    {
                        title:"Revenue",
                        dataIndex:"revenue",
                        key:"revenue"
                    },
                    {
                        title:"Bounce Rate",
                        dataIndex:"bouncerate",
                        key:"bouncerate"
                    },
                    {
                        title:"Ecommerce Conversion Rate",
                        dataIndex:"ecommerecerate",
                        key:"ecommerecerate"
                    }
                ];
                setGACol(columns);
                var data = [
                    {
                        key:0,
                        channel:<div><div class="inner-table-ga">Overall</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                        sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                        users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                        newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                        revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                        bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                        ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                    },
                    {
                        key:1,
                        channel:<div><div class="inner-table-ga">Organic Search</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                        sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                        users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                        newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                        revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                        bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                        ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  },
                  {
                    key:2,
                    channel:<div><div class="inner-table-ga">Direct</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                    sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                    users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                    newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                    revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                    bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                    ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  },
                  {
                    key:3,
                    channel:<div><div class="inner-table-ga">Social</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                    sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                    users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                    newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                    revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                    bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                    ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  },
                  {
                    key:4,
                    channel:<div><div class="inner-table-ga">Paid Search</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                    sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                    users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                    newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                    revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                    bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                    ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  },
                  {
                    key:5,
                    channel:<div><div class="inner-table-ga">Refferal</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                    sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                    users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                    newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                    revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                    bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                    ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  },
                  {
                    key:6,
                    channel:<div><div class="inner-table-ga">Others</div><div class="inner-table-ga">{start1} - {end1}</div><div class="inner-table-ga">{start2} - {end2}</div><div class="inner-table-ga">%change</div></div>,
                    sessions:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1655</div><div class="inner-table-ga">1722</div><div class="inner-table-ga">12.01%</div></div>,
                    users:<div><div class="inner-table-ga"></div><div class="inner-table-ga">1255</div><div class="inner-table-ga">1622</div><div class="inner-table-ga">12.01%</div></div>,
                    newusers:<div><div class="inner-table-ga"></div><div class="inner-table-ga">2726</div><div class="inner-table-ga">2589</div><div class="inner-table-ga">12.01%</div></div>,
                    revenue:<div><div class="inner-table-ga"></div><div class="inner-table-ga">175800</div><div class="inner-table-ga">159800</div><div class="inner-table-ga">12.01%</div></div>,
                    bouncerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">27%</div><div class="inner-table-ga">25%</div><div class="inner-table-ga">2%</div></div>,
                    ecommerecerate:<div><div class="inner-table-ga"></div><div class="inner-table-ga">18%</div><div class="inner-table-ga">16%</div><div class="inner-table-ga">2%</div></div>,
                  }
                ]
                setGATable(data);
            }
            else{
                console.log("helo")
            }
        }
        else if(SegmentGASelected){
            setBottomSegmentSelected(SegmentGASelected)
            var columns = [
                {
                    title:"Channel",
                    dataIndex:"channel",
                    key:"channel"
                },
                {
                    title:"Segment",
                    dataIndex:"segment",
                    key:"segment"
                },
                {
                    title:"Sessions",
                    dataIndex:"sessions",
                    key:"sessions"
                },
                {
                    title:"Users",
                    dataIndex:"users",
                    key:"users"
                },
                {
                    title:"New Users",
                    dataIndex:"newusers",
                    key:"newusers"
                },
                {
                    title:"Revenue",
                    dataIndex:"revenue",
                    key:"revenue"
                },
                {
                    title:"Bounce Rate",
                    dataIndex:"bouncerate",
                    key:"bouncerate"
                },
                {
                    title:"Ecommerce Conversion Rate",
                    dataIndex:"ecommerecerate",
                    key:"ecommerecerate"
                }
            ];
            setGACol(columns);
            var data = []
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Overall",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Organic Research",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Direct",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Social",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Paid Search",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Referral",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            SegmentGASelected.map((i)=>{
                data.push(
                    {
                        key:i,
                        channel:"Others",
                        segment:i.value,
                        sessions:"1655",
                        users:"1255",
                        newusers:"2729",
                        revenue:"175800",
                        bouncerate:"27%",
                        ecommerecerate:"18%"
                    }
                )
            })
            setGATable(data);
        }
    }
    function changegraphsingle(GraphData){
        if(daterange2){
            var c = ['#4e73df', '#008000'];
            var l= GraphGASelected.length*2;
            color.map((i,index)=>{
                if(index<l){
                    c.push(i)
                }
            })
            var options  = {
                color:c,
                legend:{position:"none"}
            }
            
            setchartdataOptions(options);
            setdaterange2withGraph(true);
            var b = ['x'];
            var data = [];
            GraphGASelected.map((i)=>{
                var x = `${i.value}`;
                b.push(x);
            })
            GraphGASelected.map((i)=>{
                var x = `${i.value}`;
                b.push(x);
            })
            data.push(b);
            var vaxiz = [{value:"Sept 1"},{value:"Sept 2"},{value:"Sept 3"},{value:"Sept 4"},{value:"Sept 5"}];
            vaxiz.map((i)=>{
                var m = [];
                m.push(i.value);
                var total = 0;
                var total1=1;
                GraphGASelected.map((j, index)=>{
                    
                    if((index+1)%2==0){
                        total += 2;
                        total1 += 5;
                    }
                    else{
                        total += 5;
                        total1 +=2;
                    }
                    m.push(total);
                    m.push(total1);
                })
                data.push(m);
            })
            setchartdata(data);
        }
        else{
            var b = ['x'];
            var data = [];
            
            GraphData.map((i)=>{
                b.push(i.value);
            })
            data.push(b);
            var vaxiz = [{value:"Sept 1"},{value:"Sept 2"},{value:"Sept 3"},{value:"Sept 4"},{value:"Sept 5"}];
            vaxiz.map((i)=>{
                var m = [];
                m.push(i.value);
                GraphData.map((j, index)=>{
                    var total = 0;
                    if((index+1)%2==0){
                        total = 2*index;
                    }
                    else{
                        total = 5*index;
                    }
                    m.push(total);
                })
                data.push(m);
            })
            console.log(data)
            setchartdata(data);
        }
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
    const [open, setOpen] = useState(false);
    const [head1,setHead1]= useState(headValues[0].format())
    const [head2,setHead2]= useState(headValues[1].format())
    const [checkBoxValue,setCheckBoxValue]= useState(false)
    function setheadvalues(){
        setHead1(values[0].format())
        setHead2(values[1].format())
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])
    return (
        <>
            <section class="outer-wrapper module-expand-ga dashboard-seo">
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
                                <SideNavBarCustom/>
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
                        <a href="/module-expand-google-analytics">Google Analytics</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div ref={ref} class="calendar-main">
                        <div className="add-new-btnw">
                            <button className="outline-btn-boderless" style={{width:"250px"}} onClick={() => setOpen(!open)} >
                                {head1}&nbsp;-&nbsp;{head2}&nbsp;&nbsp;
                                <i class="fa fa-chevron-down drop"></i>
                            </button>
                        </div>
                        
                        {open && (
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
                                                    <button onClick={()=>{setheadvalues();setOpen(!open)}}
                                                    className="outline-btn" >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                <buton onClick={() => setOpen(!open)}
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
                            <Tab>Google Analytics</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            
                            <div className="row google-analytics-top-label">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <label>URL</label>
                                        </div>
                                        <div className="col-md-10">
                                            <input style={{width:93+'%'}} type="text" value="wwww.myntra.com" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <label>Segment</label>
                                        </div>
                                        <div className="col-md-10">
                                            <ReactSelect
                                                className="da-pa-search"
                                                options={SegmentGATabOptions}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{
                                                    Option
                                                }}
                                                onChange={handleChangeSegmentGATab}
                                                allowSelectAll={true}
                                                value={SegmentGASelected}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <button class="outline-btn" style={{marginLeft:-23+'%'}} onClick={()=>generatereportga()}>Generate</button>
                                </div>
                            </div>
                            {/* <div className="row google-analytics-top-label">
                                <div className="col-md-6">
                                    
                                </div>
                                <div className="col-md-3">
                                    
                                </div>
                                
                            </div> */}
                            {/* <div className="row common-mt-24">
                                
                                <div className="col-md-12">
                                <label htmlFor="" class="common-mr-24">Date Range</label>
                                    <input id="start-date-1" type="date" style={{marginRight:24+'px'}} />
                                    <input id="end-date-1" style={{marginBottom:24+'px'}} type="date" />
                                    <br/>
                                    {!daterange2 
                                        ? 
                                            <>
                                                <a style={{color:"blue"}} onClick={()=>{setdaterenge2(!daterange2)}}>Compare with date range</a>
                                            </> 
                                        : 
                                            <>
                                                <input id="start-date-2" type="date" style={{marginRight:24+'px'}} />
                                                <input id="end-date-2" style={{marginRight:24+'px'}} type="date" />
                                                <i class="fa fa-close" onClick={()=>{setdaterenge2(!daterange2)}}></i>
                                            </>
                                    }
                                </div>
                            </div> */}
                            <hr/>
                            
                            <div className="ga-chart">
                                <div className="row">
                                    <div className="col-md-8" style={{display:"flex"}}>
                                        <ReactSelect
                                            className="multiselect-graph-ga"
                                            options={GraphGATabOptions}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{
                                                Option
                                            }}
                                            onChange={handleChangeGraphGATab}
                                            allowSelectAll={true}
                                            value={GraphGASelected}
                                        />
                                        <ReactSelect
                                            className="multiselect-graph-ga"
                                            options={BottomSegmentOptions}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{
                                                Option
                                            }}
                                            onChange={handleChangeBottomSegment}
                                            allowSelectAll={true}
                                            value={BottomSegmentSelected}
                                        />
                                         <select name="" id="device-type" style={{marginRight:24+'px'}}>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Fornightly">Fornightly</option>
                                        </select>
                                        {/* <button style={{ height:40+'px'}} class="outline-btn" onClick={()=>changegraphsingle()}>Generate Graph</button> */}
                                    </div>
                                    <div className="col-md-4">
                                        <div className="score-maintain">
                                            {/* <a style={{color:"white",marginRight:24+"px", height:40+'px'}} class="outline-btn" onClick={()=>handleModal()}>Custom</a> */}
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
                                {daterange2withGraph ? 
                                    <div className="dates">
                                        <div className="date-inner">
                                            <div>{startDate1} - {EndDate1}</div>
                                            {GraphGASelected && GraphGASelected.map((i,index)=>{
                                                return(
                                                    <>
                                                        <div className="date-legend-circle" style={{backgroundColor:`${color[index]}`}}></div>
                                                        <div className="date-legend-title">{i.value}</div>
                                                    </>
                                                )
                                            })}
                                            {!GraphGASelected ? 
                                                    <>
                                                        <div className="date-legend-circle" style={{backgroundColor:`${color[0]}`}}></div>
                                                        <div className="date-legend-title">Users</div>
                                                    </>
                                                 :<></>}                                        
                                        </div>
                                        <div className="date-inner">
                                            <div>{startDate2} - {EndDate2}</div>
                                            {GraphGASelected && GraphGASelected.map((i,index)=>{
                                                return(
                                                    <>
                                                        <div className="date-legend-circle" style={{backgroundColor:`${color[index+GraphGASelected.length]}`}}></div>
                                                        <div className="date-legend-title">{i.value}</div>
                                                    </>
                                                )
                                            })}
                                            {!GraphGASelected ? 
                                                    <>
                                                        <div className="date-legend-circle" style={{backgroundColor:`${color[1]}`}}></div>
                                                        <div className="date-legend-title">Users</div>
                                                    </>
                                                 :<></>}
                                        </div>
                                    </div> 
                                :<></>}
                                <Chart
                                    className="line-graph"
                                    // width={'600px'}
                                    height={'400px'}
                                    chartType="LineChart"
                                    data={chartdata}
                                    
                                    options={chartdataOptions}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                            <hr/>
                            <div className="add-new-btnw">
                                    <button class="outline-btn">Export</button>
                                </div>
                            <div className="ga-table">
                                <Table id="sample-module-expand" columns={GACol} dataSource={GATable} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
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

export default ModuleExpandGoogleAnalytics;
