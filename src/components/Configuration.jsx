import React, { useState, useEffect } from "react";
import { NotificationSEO } from './index'
import { Table, Input,  Row,  Col, Switch, Breadcrumb } from 'antd';
import { default as ReactSelect, components } from "react-select";
import { Button,Modal} from 'react-bootstrap';  
import Chart from "react-google-charts";
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
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 12
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 20,
    top: 0,
    width: "100%",
  },
};

function Configuration() {
  const [optionSelected, setoptionSelected] = useState(null);
  function handleChange(selected){
      setoptionSelected(selected);
  };
  const [colourOptions, setcolor] = useState([
      { value: "Ankit", label: "Ankit" },
      { value: "Monal", label: "Monal" },
      { value: "Rahul", label: "Rahul" },
      { value: "Ravi", label: "Ravi" },
      
  ])
  const [optionSelectedmodule, setoptionSelectedmodulw] = useState(null);
    function handleChangemodule(selected){
        console.log(selected)
        setoptionSelectedmodulw(selected);
        console.log(optionSelectedmodule);
    };
    const [colourOptionsmodule, setcolormodule] = useState([
        { value: "DA/PA Checker", label: "DA/PA Checker" },
        { value: "Google Trends", label: "Google Trends" },
        { value: "Page Speed and Core Web Vitals", label: "Page Speed and Core Web Vitals" },
        { value:"Click Share", label:"Click Share" },
        { value:"Rank Tracking", label:"Rank Tracking" },
        { value:"Site Uptime Monitor", label:"Site Uptime Monitor" },
        { value:"GSC Data Extractor", label:"GSC Data Extractor" },
        { value:"Organic Research Module", label:"Organic Research Module" },
        { value:"ROI Calculator", label:"ROI Calculator" },
        { value:"Content Word Count On page", label:"Content Word Count On page" },
        { value:"Backlinks Count", label:"Backlinks Count" },
        { value:"Keywords Research", label:"Keywords Research" },
        { value:"SEO Volatality", label:"SEO Volatality" },
        { value:"SEO Manual Audit", label:"SEO Manual Audit" },
        { value:"Google Analytics Data Extractor", label:"Google Analytics Data Extractor" },
    ])
    const [optionSelectedURL, setoptionSelectedURL] = useState([]);
    // function handleChangeURL(selected){
    //     console.log(selected);
    //     setoptionSelectedURL(selected);
    //     console.log(optionSelectedURL);

    // };
    const [OptionsURL, setURL] = useState([
        { value: "www.myntra.com", label: "www.myntra.com" },
        { value: "www.infi.com", label: "www.infi.com" },
        { value: "www.grwo.com", label: "www.grwo.com" },
        { value: "www.sample.com", label: "www.sample.com" }
    ])
    const [optionSelectedComp, setoptionSelectedComp] = useState(null);
    // function handleChangeComp(selected){
    //     setoptionSelectedComp(selected);
    // };
    const [OptionsComp, setcolorComp] = useState([
        { value: "www.comp1.com", label: "www.comp1.com" },
        { value: "www.comp2.com", label: "www.comp2.com" },
        { value: "www.comp3.com", label: "www.comp3.com" }
    ])
    const [KeywordGoogleTrendsSelected, setKeywordGoogleTrendsSelected] = useState(null);
    const [KeywordsGT, setKeywordGT] = useState([
        { value: "Shoes", label: "Shoes" },
            { value: "Rainy Shoes", label: "Rainy Shoes" },
            { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
            { value: "Casual Shoes", label: "Casual Shoes" }
    ])
    const [UrlPSSelected, setUrlPSSelected] = useState(null);
    const [UrlPSList, setURlPSList] = useState([
        { value: "www.myntra.com", label: "www.myntra.com" },
        { value: "www.infi.com", label: "www.infi.com" },
        { value: "www.grwo.com", label: "www.grwo.com" },
        { value: "www.sample.com", label: "www.sample.com" }
    ])
  const [select, setSelect] = useState({
    selectedRowKeys: [],
    loading: false
  });
  const [show,setshow]= useState(false);
  function handleModal(){
      setshow(!show);
  }
  const [show1,setshow1]= useState(false);
  function handleModal1(){
      setshow1(!show1);
  }
  const { selectedRowKeys, loading } = select;

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
        setSelect({
            ...select,
            selectedRowKeys: selectedRowKeys,
            
        });
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };
  const [sidenav,setsidenav] = useState(false); //navbar
  const [client, setclient] = useState('Myntra'); //Saves Clinet names
  const [clientproj, setclientproj] = useState([]); //Saves projects of Clinets 
  const [chosenclientproj, setchosenclientproj] = useState('Myntra Project 0'); //Save chosen client project
  const [currenttab, setcurrenttab] = useState([]); // saves current tab shown 
  const [teamlist, setteamList] = useState([]); //team members list
  const [selectionType, setSelectionType] = useState('checkbox'); //team members selection checkbox
  const [teamcol,setteamcol] = useState([]); //team members column details
  const [searchdata,setsearch] = useState([]); //team members search box
  const [piedata, setpiedata] = useState([]); //pie data for modal 
  const [maindropselection, setmaindropselection] = useState("URL"); //dropdown selection for URL and Comp
  const [tabledropselection, settabledropselection] = useState("URL"); // Dropwn table sleection for URL and comp
  const [taburllist, settaburlList] = useState([]); //URL tab list
  const [selectionTypeURLTab, setSelectionTypeURLTab] = useState('checkbox'); //URL tab selection checkbox
  const [URLTabcol,setURLTabcol] = useState([]); //URL tab column details
  const [searchdataURLTab,setsearchURLTab] = useState([]); //URL tab search box
  const [tabcomplist, settabcompList] = useState([]); //Comp tab list
  const [selectionTypeCompTab, setSelectionTypeCompTab] = useState('checkbox'); //Comp tab selection checkbox
  const [CompTabcol,setCompTabcol] = useState([]); //Comp tab column details
  const [searchdataCompTab,setsearchCompTab] = useState([]); //Comp tab search box
  const [tabkeywordlist, settabkeywordList] = useState([]); //Comp tab list
  const [selectionTypeKeywordTab, setSelectionTypeKeywordTab] = useState('checkbox'); //Comp tab selection checkbox
  const [KeywordTabcol,setKeywordTabcol] = useState([]); //Comp tab column details
  const [searchdataKeywordTab,setsearchKeywordTab] = useState([]); //Comp tab search box
  const [modulelisr, setmodulelist] = useState([]); //module list
  const [modukecol,setmodulecol] = useState([]); //module column information
  useEffect(()=>{
    const a=[
      ['Task', 'Hours per Day'],
      ['Utilised', 6],
      ['Not utilised', 4]
   ];
   setpiedata(a);
    var data = [];
    for(let i=0;i<5;i++){
      data.push({value:`Myntra Project ${i}`})
    }
    setclientproj(data);
    data = [];
    for (let i = 1; i < 100; i++) {
      data.push({
          key: i,
          teammember:`Ankit`,
          allocation:"10%",
          location:"Bangalore",
          billingstart:"08/05/2020",
          billingend:"08/05/2021",
          shiftstart:"9.00AM",
          shiftend:"4.00PM",
          delete:<a href="edit-project"><i class="fa fa-trash"></i></a>

      });
      }

      setsearch(data);
      setteamList(data);
      var columns = [
          {
          title: "Team Member",
          dataIndex: "teammember",
          key: "teammember"
          },
          {
          title: "Allocation %",
          dataIndex: "allocation",
          key: "allocation"
          },
          {
              title:"Location",
              dataIndex:"location",
              key:"location",
          },
          {
              title:"Billing Start Date",
              dataIndex:"billingstart",
              key:"billingstart",
          },
          {
              title:"Billing End Date",
              dataIndex:"billingend",
              key:"billingend",
          },
          {
              title:"Shift Start Time",
              dataIndex:"shiftstart",
              key:"shiftstart",
          },
          {
              title:"Shift End Time",
              dataIndex:"shiftend",
              key:"shiftend",
          },
          {
          title:"",
          dataIndex:"delete",
          key:"delete",
          },
      ];
      setteamcol(columns);

      data=[];
        for(let i=1;i<5;i++){
            data.push({
                key:i,
                id:i,
                url:`www.myntra${i}.com`,
                delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
            })
        }
        settaburlList(data);
        setsearchURLTab(data);
        columns=[
            {
                title: "#",
                dataIndex: "id",
                key: "id",
                width:"8%"
            },
            {
                title: "URL",
                dataIndex: "url",
                key: "url",
                width:"89%"
            },
            {
                title:"",
                dataIndex:"delete",
                key:"delete",
                width:"20%"
            },
        ];
        setURLTabcol(columns);
        //prepare data for Comp
        data=[];
        for(let i=1;i<5;i++){
            data.push({
                key:i,
                id:i,
                comp:`myntra${i}`,
                delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
            })
        }
        settabcompList(data);
        setsearchCompTab(data);
        columns=[
            {
                title: "#",
                dataIndex: "id",
                key: "id",
                width:"8%"
            },
            {
                title: "Competitors",
                dataIndex: "comp",
                key: "comp",
                width:"89%"
            },
            {
                title:"",
                dataIndex:"delete",
                key:"delete",
                width:"20%"
            },
        ];
        setCompTabcol(columns);

        //set data for keywords
        data=[];
        for(let i=1;i<5;i++){
            data.push({
                key:i,
                id:i,
                keyword:`Shoe${i}`,
                delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
            })
        }
        settabkeywordList(data);
        setsearchKeywordTab(data);
        columns=[
            {
                title: "#",
                dataIndex: "id",
                key: "id",
                width:"8%"
            },
            {
                title: "Keywords",
                dataIndex: "keyword",
                key: "keyword",
                width:"89%"
            },
            {
                title:"",
                dataIndex:"delete",
                key:"delete",
                width:"20%"
            },
        ];
        setKeywordTabcol(columns);
        columns = [
          {
              title: "#",
              dataIndex: "id",
              key: "id",
              width:"8%"
          },
          {
              title: "Module Name",
              dataIndex: "modulename",
              key: "modulename",
              width:"89%"
          },
          {
              title:"Action",
              dataIndex:"delete",
              key:"delete",
              width:"20%"
          },
      ];
      setmodulecol(columns);
      data=[];
      data.push({
          key: "1",
          id:"1",
          modulename:`DA/PA Checker`,
          delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
          // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputs1"}> {urlinputslist.map((i)=>{ return( <li>{i} <i onClick={removeItem(i)} class="fa fa-trash"></i></li> ) })} </ul> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
          // description: <div> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp"+i} onClick={(e)=>openinp(i)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox"+i}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddurl"+i} onKeyPress={handleKeyPress} /></div> </div> <div ><ul id={"urlinputs"+i}></ul></div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp"+i} onClick={(e)=>opencomp(i)} ><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div className="none" id={"compinputbox"+i}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddcomp"+i} onKeyPress={handleKeyPressComp} /></div> </div> <div ><ul id="compinputs"></ul></div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
          // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user">  <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> <div style={{marginLeft:48+'px'}}><label htmlFor="" style={{marginRight:24+'px'}}>Select Frequency</label><select name="" id=""><option value="Daily">Daily</option><option value="Weekly">Weeklt</option><option value="Fornightly">Fornightly</option><option value="Monthly">Monthly</option></select></div></div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /></div> </div> <div ><ul id={"urlinputs1"}></ul></div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}><ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /></div> </div> <div ><ul id={"compinputs1"}></ul></div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
          // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Please select" defaultValue={['a10', 'c12']} > {children} </Select> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputs1"}></ul> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>
          // description:<div class="module-description">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("da")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxda"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlda"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputsda"}> </ul> </div> </div> <div class="form-wrappers"> <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label><select name="" id=""><option value="Daily">Daily</option><option value="Weekly">Weeklt</option><option value="Fornightly">Fornightly</option><option value="Monthly">Monthly</option></select> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul> </div> </div>
      });
      data.push({
          key:"2",
          id:"2",
          modulename:"Google Trends",
          delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
          // description:<div class="module-description google-trends-des">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>Set Frequency</label><br/> <select name="" id=""> <option value="Daily">Daily</option> <option value="Weekly">Weekly</option> <option value="Fornightly">Fornightly</option> <option value="Monthly">Monthly</option> </select> </div> <div class="form-wrappers"> <label>Keyword</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("gt")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxgt"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlgt"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputsgt"}> </ul> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul></div> </div> </div>  </div> </div>
      })
      data.push({
          key:"3",
          id:"3",
          modulename:"Page Speed",
          delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
          // description:<div class="module-description google-trends-des">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>Set Frequency</label><br/> <select name="" id=""> <option value="Daily">Daily</option> <option value="Weekly">Weekly</option> <option value="Fornightly">Fornightly</option> <option value="Monthly">Monthly</option> </select> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("pasp")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxpasp"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlpasp"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputspasp"}> </ul> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul></div> </div> </div>  </div> </div>
      })
      setmodulelist(data);
  },[])
  function changeclient(){
    var a = document.getElementById('clients').value;
    setclient(a);
    var data = [];
    for(let i=0;i<5;i++){
      data.push({value:`${a} Project ${i}`})
    }
    setclientproj(data);
  }
  function changechoseclientproj(){
    var a = document.getElementById('client-proj').value;
    setchosenclientproj(a);
  }
  function openTab(tabname, id){
    if(currenttab.length == 0){
      var data = [];
      if(id == 1){
        document.getElementById('main-col-2').classList.add('none');
        document.getElementById('main-col-3').classList.add('none');
        document.getElementById('main-col-1').classList.add('custom-column-30');
        document.getElementById('main-col-1').classList.remove('custom-column-33');
        document.getElementById('angle-1').classList.remove('none');
      }
      else if(id == 2){
        document.getElementById('main-col-1').classList.add('none');
        document.getElementById('main-col-3').classList.add('none');
        document.getElementById('main-col-2').classList.add('custom-column-30');
        document.getElementById('main-col-2').classList.remove('custom-column-33');
        document.getElementById('angle-2').classList.remove('none');
      }
      else if(id == 3){
        document.getElementById('main-col-2').classList.add('none');
        document.getElementById('main-col-1').classList.add('none');
        document.getElementById('main-col-3').classList.add('custom-column-30');
        document.getElementById('main-col-3').classList.remove('custom-column-33');
        document.getElementById('angle-3').classList.remove('none');
      }
      document.getElementById(tabname).classList.remove('none');
      data.push({
        currentabname:tabname,
        currentid:id,
      })
      setcurrenttab(data);
    }
    else {
      document.getElementById(currenttab[0].currentabname).classList.add('none');
      document.getElementById(tabname).classList.remove('none');
      var data = []
      data.push({
        currentabname:tabname,
        currentid:id,
      })
      setcurrenttab(data);
    }
  }
  function closeTabs(){
    document.getElementById(currenttab[0].currentabname).classList.add('none');
    document.getElementById(`main-col-${currenttab[0].currentid}`).classList.remove('custom-column-30');
    document.getElementById(`main-col-${currenttab[0].currentid}`).classList.add('custom-column-33');
    document.getElementById(`angle-${currenttab[0].currentid}`).classList.add('none');
    if(currenttab[0].currentid == 3){
      document.getElementById('main-col-2').classList.remove('none');
      document.getElementById('main-col-1').classList.remove('none');
    }
    if(currenttab[0].currentid == 1){
      document.getElementById('main-col-2').classList.remove('none');
      document.getElementById('main-col-3').classList.remove('none');
    }
    if(currenttab[0].currentid == 2){
      document.getElementById('main-col-3').classList.remove('none');
      document.getElementById('main-col-1').classList.remove('none');
    }
    setcurrenttab([])
  }
  function assign(){
    console.log("selectedRowKeys", select);
    if(optionSelected.length==1)
    handleModal();
    else
    handleModal1();
  }
  function assign1(){
      console.log("selectedRowKeys", select);
      if(select.selectedRowKeys.length==1)
      handleModal();
      else
      handleModal1();
  }
  function addmodule(){
  }
  const [ClientsList, setClientsList] = useState([
    { value: "Myntra", label: "Myntra" },
    { value: "CureFit", label: "CureFit" },
    { value: "CultFit", label: "CultFit" },
  ])
  const [ClientsSelected, setClientsSelected] = useState({ value: "Myntra", label: "Myntra" });
  function handleChangeClients(selected){
    setClientsSelected(selected);
    var a = selected.value;
    var data = [];
    for(let i=0;i<5;i++){
      data.push({value:`${a} Project ${i}`, label:`${a} Project ${i}`})
    }
    setClientsProjectChosenSelected(data)
  }
  const [ClientsProjectChosen, setClientsProjectChosen] = useState([
    { value: "Myntra Project 1", label: "Myntra Project 1" },
    { value: "Myntra Project 2", label: "Myntra Project 2" },
    { value: "Myntra Project 3", label: "Myntra Project 3" },
    { value: "Myntra Project 4", label: "Myntra Project 4" },
  ])
  const [ClientsProjectChosenSelected, setClientsProjectChosenSelected] = useState({ value: "Myntra Project 1", label: "Myntra Project 1" });
  function handleChangeClientsProjects(selected){
    setClientsProjectChosenSelected(selected);
  }
  return (
    <>
      <section class="outer-wrapper configuration">
        <div class="top-nav-bar">
          <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
          <div class="nav-bar-center">&nbsp;</div>
          <div class="nav-bar-right">
            <ul class="list-unstyled nav-right-menu">
              <li>
                <NotificationSEO/>
              </li>

              <li class="dropdown">
                <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
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

        <div class="sidebar-nav-bar">
          <ul class="list-unstyled side-menu">
            <li><a href="/dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
            <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
            <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
            <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
            <li><a href="configuration">Configuration</a></li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/dashboard">Dashboard</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
              <a href="/configuration">Configuration</a>
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="custom-row">
    
                <div className="custom-column-33 custom-borrig" id="main-col-1">
                <i className="fa fa-arrow-left none" id="angle-1" onClick={()=>closeTabs()}></i>
                    {/* <select name="" id="clients" onChange={()=>{changeclient()}}>
                    <option value="Myntra">Myntra</option>
                    <option value="CultFit">CultFit</option>
                    <option value="CureFit">CureFit</option>
                    </select> */}
                    <ReactSelect
                        className="SearchSelectMain"
                        placeholder="Select or search module"
                        options={ClientsList}
                        closeMenuOnSelect={true}
                        onChange={handleChangeClients}
                        value={ClientsSelected}
                    />
                    <ul class="configuration-tab-list">
                    <li>
                        <a onClick={()=>{openTab('account-settings',1)}}>Account Settings</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('profile',1)}}>Profile</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('admin',1)}}>Admin</a>
                    </li>
                    </ul>
                </div>
                <div className="custom-column-33 custom-borrig" id="main-col-2">
                <i className="fa fa-arrow-left none" id="angle-2" onClick={()=>closeTabs()}></i>
                    {/* <select name="" id="client-proj" onChange={()=>{changechoseclientproj()}}>
                    {clientproj.map((i)=>{
                        return(
                        <option value={i.value}>{i.value}</option>
                        )
                    })}
                    </select> */}
                    <ReactSelect
                        className="SearchSelectMain"
                        placeholder="Select or search module"
                        options={ClientsProjectChosen}
                        closeMenuOnSelect={true}
                        onChange={handleChangeClientsProjects}
                        value={ClientsProjectChosenSelected}
                    />
                    <ul class="configuration-tab-list">
                    <li>
                        <a onClick={()=>{openTab('team-members',2)}}>Team Members</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('modules',2)}}>Modules</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('url-comp',2)}}>Url and Competitors</a>
                    </li>
                    </ul>
                </div>
                <div className="custom-column-33" id="main-col-3">
                    <i className="fa fa-arrow-left none" id="angle-3" onClick={()=>closeTabs()}></i>
                    hiii
                </div>

                {/* Team Members Expand */}
                <div className="custom-column-70 none" id="team-members">
                    <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">ASSIGN TEAM MEMBERS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <ReactSelect
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
                    <div className="col-md-3">
                    <button onClick={()=>assign()}  class="outline-btn">Assign</button>
                    </div>
                    </div>
                    <hr />
                    <div class="add-new-btnw" style={{textAlign:"left"}}>
                    <button onClick={()=>assign1()}  class="outline-btn">Edit</button>
                    </div>

                    <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-7 add-new-btnw">
                        <div class="search" style={{marginLeft:0+'px', width:100+'%'}}>
                        <div class="input-group" style={{display:"block"}}>
                            <Input.Search
                            allowClear
                            placeholder="Search By name"
                            onSearch={nameSearch =>
                                {setteamList(
                                    searchdata.filter(person =>
                                    person.name.includes(nameSearch)
                                    )
                                );console.log(nameSearch)}
                            }
                            id="input-s"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    

                    <div class="common-table">
                    <div class="row">
                        <div class="col-md-5">
                        {/* <div class="data-per-page">Data Per page</div> */}
                        </div>
                        <div class="col-md-7">        
                        <div class="data-export">
                            <span class="export" style={{marginRight:0+'px'}}>
                            <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Export
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-content" href="#">Excel</a>
                                <a class="dropdown-content" href="#">CSV</a>
                                <a class="dropdown-content" href="#">Sheets</a>
                            </div>
                            </span>
                        </div>
                                
                        </div>
                    </div>
                    <Table id="sample" columns={teamcol} dataSource={teamlist}
                    rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
                    </div>
                </div>

                {/* Modules Expand */}
                <div className="custom-column-70 none" id="modules">
                    <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">UPDATE MODULES</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <ReactSelect
                            placeholder="Select or search module"
                            options={colourOptionsmodule}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={true}
                            components={{
                                Option
                            }}
                            onChange={handleChangemodule}
                            allowSelectAll={true}
                            value={optionSelectedmodule}
                        />
                    </div>
                    <div className="col-md-3">
                    <button onClick={()=>addmodule()}  class="outline-btn">ADD MODULE</button>
                    </div>
                    </div>
                    <div class="common-table tab-panel-module">
                    <table class="edit-project-modules">
                        <thead>
                            <tr>
                            <th width="1%">#</th>
                            <th width="9%">Module Name</th>
                            <th width="90%" style={{textAlign:"end"}}>Action</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {modulelisr.map((i)=>{
                                return(
                                    <>
                                        {
                                            i.modulename== "DA/PA Checker"?<><TableRowDAPA id={i.id} modulename={i.modulename} OptionsURL={OptionsURL} optionSelectedURL={optionSelectedURL} optionSelectedComp={optionSelectedComp} OptionsComp={OptionsComp}  /></>:<></>
                                        }   
                                        {
                                            i.modulename== "Google Trends"?<><TableRowGT id={i.id} modulename={i.modulename} KeywordsGT={KeywordsGT} KeywordGoogleTrendsSelected={KeywordGoogleTrendsSelected}  /></>:<></>
                                        }
                                        {
                                            i.modulename== "Page Speed"?<><TableRowPS id={i.id} modulename={i.modulename} UrlPSList={UrlPSList} UrlPSSelected={UrlPSSelected}  /></>:<></>
                                        }
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>

                {/* Url and Competitors Expand */}
                <div className="custom-column-70 none" id="url-comp">
                    <div className="row tab-panel-url">
                    <div className="col-md-2">
                        <select name="" id="select-type" value={maindropselection} onChange={()=>{setmaindropselection(document.getElementById('select-type').value)}}>
                            <option value="URL">URL</option>
                            <option value="Competitors">Competitors</option>
                            <option value="Keywords">Keywords</option>
                        </select>
                    </div>
                    <div className="col-md-10">
                        {maindropselection == "URL" ? 
                            <>
                                <div style={{display:"inline-block",width:100+"%"}}>
                                    <span style={{marginRight:24+"px"}}>
                                        <input style={{height:40+'px'}} type="text" placeholder="Enter URL" />
                                    </span>
                                    <span>
                                        <button class="outline-btn">Add</button>
                                    </span>
                                </div>
                            </> 
                            : 
                            <>
                            </>
                        }
                        {maindropselection == "Competitors" ?
                            <>
                                <div style={{display:"inline-block",width:100+"%"}}>
                                    <span style={{marginRight:24+"px"}}>
                                        <input style={{height:40+'px'}} type="text" placeholder="Enter Competitors" />
                                    </span>
                                    <span>
                                        <button class="outline-btn">Add</button>
                                    </span>
                                </div>
                            </>
                            :
                            <></>
                        }
                        {maindropselection == "Keywords" ?
                            <>
                                <div style={{display:"inline-block",width:100+"%"}}>
                                    <span style={{marginRight:24+"px"}}>
                                        <input style={{height:40+'px'}} type="text" placeholder="Enter Keywords" />
                                    </span>
                                    <span>
                                        <button class="outline-btn">Add</button>
                                    </span>
                                </div>
                            </>
                            :
                            <></>
                        }
                    </div>
                </div>
                <hr />
                {tabledropselection == "URL"
                    ?
                    <>
                        <div className="tab-panel-url-options">
                            <span>
                                <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                                    {settaburlList(
                                    searchdataURLTab.filter(person =>
                                    person.url.includes(nameSearch)
                                    )
                                    );console.log(nameSearch)}
                                    }
                                    id="input-s"
                                />
                            </span>
                            <span>
                                <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
                                    <option value="URL">URL</option>
                                    <option value="Competitors">Competitors</option>
                                    <option value="Keywords">Keywords</option>
                                    
                                </select>
                            </span>
                            <span class="export">
                            <button class="outline-btn ">Import</button>
                        </span>
                        <span class="export" style={{marginRight:0+'px'}}>
                            
                            <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Export
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-content" href="#">Excel</a>
                                <a class="dropdown-content" href="#">CSV</a>
                                <a class="dropdown-content" href="#">Sheets</a>
                            </div>
                            
                        </span>
                        </div>
                        <Table id="url" columns={URLTabcol} dataSource={taburllist}
                        rowSelection={{type: selectionTypeURLTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                    </>
                    :
                    <>
                    </>
                }
                {tabledropselection == "Competitors" ? 
                    <>
                        <div className="tab-panel-url-options">
                            <span>
                                <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                                    {settabcompList(
                                    searchdataCompTab.filter(person =>
                                    person.comp.includes(nameSearch)
                                    )
                                    );console.log(nameSearch)}
                                    }
                                    id="input-s"
                                />
                            </span>
                            <span>
                                <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
                                    <option value="URL">URL</option>
                                    <option value="Competitors">Competitors</option>
                                    <option value="Keywords">Keywords</option>
                                </select>
                            </span>
                            <span class="export">
                            <button class="outline-btn ">Import</button>
                        </span>
                        <span class="export" style={{marginRight:0+'px'}}>
                            
                                    <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Export
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-content" href="#">Excel</a>
                                        <a class="dropdown-content" href="#">CSV</a>
                                        <a class="dropdown-content" href="#">Sheets</a>
                                    </div>
                            
                        </span>
                        </div>
                        <Table id="url" columns={CompTabcol} dataSource={tabcomplist}
                        rowSelection={{type: selectionTypeCompTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                    </>
                    :
                    <></>
                }
                {
                    tabledropselection == "Keywords" ? <>
                    <div className="tab-panel-url-options">
                            <span>
                                <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
                                    {settabkeywordList(
                                    searchdataKeywordTab.filter(person =>
                                    person.keyword.includes(nameSearch)
                                    )
                                    );console.log(nameSearch)}
                                    }
                                    id="input-s"
                                />
                            </span>
                            <span>
                                <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
                                    <option value="URL">URL</option>
                                    <option value="Competitors">Competitors</option>
                                    <option value="Keywords">Keywords</option>
                                </select>
                            </span>
                            <span class="export">
                            <button class="outline-btn ">Import</button>
                        </span>
                        <span class="export" style={{marginRight:0+'px'}}>
                            
                                    <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Export
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-content" href="#">Excel</a>
                                        <a class="dropdown-content" href="#">CSV</a>
                                        <a class="dropdown-content" href="#">Sheets</a>
                                    </div>
                            
                        </span>
                        </div>
                        <Table id="url" columns={KeywordTabcol} dataSource={tabkeywordlist}
                        rowSelection={{type: selectionTypeKeywordTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                    </> :<></>
                }
                </div>
                <div className="custom-column-70 none" id="account-settings">
                    Account Settings
                </div>
                <div className="custom-column-70 none" id="profile">
                    Profile
                </div>
                <div className="custom-column-70 none" id="admin">
                    Admin
                </div>
            </div>

          </div>
        </div>


      </section>
      <Modal show={show} onHide={()=>handleModal()} className="edit-project">  
            <Modal.Header closeButton>Update Allocation</Modal.Header>  
            <Modal.Body>
                    
                {optionSelected && optionSelected.map((i)=>{
                    return(
                        <div class="row">
                            <div class="col-md-8">
                                <div class="common-wrapper">

                                    <div class="common-wcard">

                                        <div class="common-form-fields">

                                            <div class="add-user">
                                                <div class="form-wrappers">
                                                    <label>Name:</label>
                                                    <input type="text" name="" placeholder="Ankit" value={i.value} disabled />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Role:</label>
                                                    <input type="text" name="" placeholder="Sr SEO" disabled />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Location:</label>
                                                    <input type="text" name="" placeholder="Bangalore" disabled />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Billing Start Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Billing End Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Percentage Allocation</label>
                                                    <input type="text" name="" placeholder="Enter %" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Preffered Time Zone</label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label></label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    </div>
                            </div>
                            <div class="col-md-3">
                                <div id="piechart">
                                    <Chart chartType="PieChart" data={piedata} options={pieOptions} graph_id="PieChart" width={"100%"} legend_toggle/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Modal.Body>  
            <Modal.Footer>  
            <Button onClick={()=>handleModal()}>UPDATE</Button>  
            
            </Modal.Footer>  
        </Modal>
        <Modal show={show1} onHide={()=>handleModal1()} className="edit-project">  
            <Modal.Header closeButton>UPDATE ALLOCATION</Modal.Header>  
            <Modal.Body>
            
                        <div class="row">
                            <div class="col-md-8">
                                <div class="common-wrapper">

                                    <div class="common-wcard">

                                        <div class="common-form-fields">

                                            <div class="add-user">
                                                
                                                <div class="form-wrappers">
                                                    <label>Billing Start Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Billing End Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Percentage Allocation</label>
                                                    <input type="text" name="" placeholder="Enter %" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Preffered Time Zone</label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label></label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    </div>
                            </div>
                            <div class="col-md-3">
                                <div class="box">
                                    <h4 class="box-title">Chosen Team Members</h4>
                                    {optionSelected && optionSelected.map((i)=>{
                                        return(
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <span class="box-name">{i.value} (20%)</span>
                                                    
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="box-close">X</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    
            </Modal.Body>  
            <Modal.Footer>  
            <Button onClick={()=>handleModal1()}>UPDATE</Button>   
            </Modal.Footer>  
        </Modal> 
    </>
  );
}


function TableRowDAPA(props){
  const [optionSelectedURL, setoptionSelectedURL] = useState(props.optionSelectedURL);
  function handleChangeURL(selected){
      setoptionSelectedURL(selected);
  };
  const [optionSelectedComp, setoptionSelectedComp] = useState(props.optionSelectedComp);
  function handleChangeComp(selected){
      setoptionSelectedComp(selected);
  };
  const [expand, setexpand] = useState(false);

  const openinp = (id) =>{
      console.log(id)
     var tagid="urlinputbox"+id;
     document.getElementById(tagid).classList.remove('none');
  }
  const [urlinputslist,seturlinputslist] = useState([]);
  const [compinputslist, setcominputslist] = useState([]);
  const handleKeyPress = (event) => {
      
      if(event.key === 'Enter'){
      var id = (event.target.id).replace('inputaddurl','');
      var data = [];
      urlinputslist.map((i)=>{
          data.push(i)
      })
      data.push(event.target.value);
      seturlinputslist(data);
      event.target.value="";
      var tagid="urlinputbox"+id;
      document.getElementById(tagid).classList.add('none');
      
      }
    }
    const opencomp = (id) =>{
      var tagid="compinputbox"+id;
      document.getElementById(tagid).classList.remove('none');
   }
   const handleKeyPresscomp = (event) => {
       
       if(event.key === 'Enter'){
       var id = (event.target.id).replace('inputaddcomp','');
      var data = [];
      compinputslist.map((i)=>{
          data.push(i)
      })
      data.push(event.target.value);
      setcominputslist(data);
       event.target.value="";
       var tagid="compinputbox"+id;
       document.getElementById(tagid).classList.add('none');
       }
     
     }
     function removeitemlist(a, type){
      
      if(type=="comp"){
          var list = compinputslist;
          setcominputslist(list.filter(item => item !== a))
      }
      if(type=="url"){
          var list = urlinputslist;
          seturlinputslist(list.filter(item => item !== a))
      }
     }

  return(
      <>
          <tr>
              <td>{props.id}</td>
              <td>{props.modulename}</td>
              <td style={{textAlign:"end"}}> 
                  <i className="fa fa-trash trash-module"></i> 
                  <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
                      {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
                  </button> 
              </td>
          </tr>
          <tr className={expand?"":"none"}>
              <td colspan="4">
                  <div >
                      <div class="module-description">  
                          <div class="common-wrapper"> 
                              <div class="common-wcard"> 
                                  <div class="common-form-fields"> 
                                      <div class="add-user"> 
                                          <div style={{display:"flex"}}> 
                                              <div class="form-wrappers"> 
                                                  <label>Url's</label> 
                                                  <div style={{display:"flex"}}> 
                                                      <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} />
                                                      <button style={{ border: "none", background: "none",     }} id={"addinp1"} onClick={(e)=>openinp("da")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
                                                  </div> 
                                                  <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxda"}> 
                                                      <div class="form-wrappers"> 
                                                          <label></label> 
                                                          <input type="text" name="" placeholder="Value" id={"inputaddurlda"} onKeyPress={handleKeyPress} /> 
                                                      </div> 
                                                  </div> 
                                                  <div > 
                                                      <ul className="input-list" id={"urlinputsda"} style={{marginTop:24+'px'}}> 
                                                          {urlinputslist && urlinputslist.map((i)=>{
                                                              return(
                                                                  <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"url")}}></i></li>
                                                              )
                                                          })}
                                                      </ul> 
                                                  </div> 
                                              </div> 
                                              <div class="form-wrappers"> 
                                                  <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
                                                  <select name="" id="">
                                                      <option value="Daily">Daily</option>
                                                      <option value="Weekly">Weeklt</option>
                                                      <option value="Fornightly">Fornightly</option>
                                                      <option value="Monthly">Monthly</option>
                                                  </select> 
                                              </div> 
                                          </div> 
                                          <div class="form-wrappers"> 
                                              <label>Competitors</label> 
                                              <div style={{display:"flex"}}> 
                                                  <ReactSelect options={props.OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> 
                                                  <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
                                              </div> 
                                              <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> 
                                                  <div class="form-wrappers"> 
                                                      <label></label> 
                                                      <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> 
                                                  </div> 
                                              </div> 
                                              <div > 
                                                  <ul className="input-list" id={"compinputs1"} style={{marginTop:24+'px'}}>
                                                  {compinputslist && compinputslist.map((i)=>{
                                                      return(
                                                          <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"comp")}}></i> </li>
                                                      )
                                                  })}
                                                  </ul> 
                                              </div> 
                                          </div> 
                                      </div> 
                                  </div> 
                              </div> 
                              <ul class="form-action-wrapper">  
                                  <li><a href="#" class="outline-btn">Update</a></li> 
                              </ul> 
                          </div> 
                      </div>
                  {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
                  </div>
              </td>
          </tr>
      </>
  )
}

function TableRowGT(props){
  const [KeywordGoogleTrendsSelected, setKeywordGoogleTrendsSelected] = useState(props.KeywordGoogleTrendsSelected);
  function handleChangeKeyword(selected){
      setKeywordGoogleTrendsSelected(selected);
  };
  const [keywordGTinputslist, setkeywordGTinputslist] = useState([]);
  const openkeywordGT = (id) =>{
      var tagid="keywordGT"+id;
      document.getElementById(tagid).classList.remove('none');
   }
   const handleKeyPresskeywordGT = (event) => {
       
       if(event.key === 'Enter'){
       var id = (event.target.id).replace('inputaddkeywordGT','');
      var data = [];
      keywordGTinputslist.map((i)=>{
          data.push(i)
      })
      data.push(event.target.value);
      setkeywordGTinputslist(data);
       event.target.value="";
       var tagid="keywordGT"+id;
       document.getElementById(tagid).classList.add('none');
       }
     
     }
     function removeitemlist(a, type){
      
      var list = keywordGTinputslist;
      setkeywordGTinputslist(list.filter(item => item !== a))
     }
  const [expand, setexpand] = useState(false);
  return(
      <>
          <tr>
              <td>{props.id}</td>
              <td>{props.modulename}</td>
              <td style={{textAlign:"end"}}> 
                  <i className="fa fa-trash trash-module"></i> 
                  <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
                      {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
                  </button> 
              </td>
          </tr>
          <tr className={expand?"":"none"}>
              <td colspan="4">
                  <div >
                      <div class="module-description">  
                          <div class="common-wrapper"> 
                              <div class="common-wcard"> 
                                  <div class="common-form-fields"> 
                                      <div class="add-user"> 
                                          <div class="form-wrappers"> 
                                              <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
                                              <br/>
                                              <select name="" id="keywordGTFrequency">
                                                  <option value="Daily">Daily</option>
                                                  <option value="Weekly">Weeklt</option>
                                                  <option value="Fornightly">Fornightly</option>
                                                  <option value="Monthly">Monthly</option>
                                              </select> 
                                          </div> 
                                          
                                          <div class="form-wrappers"> 
                                              <label>Keyword</label> 
                                              <div style={{display:"flex"}}> 
                                                  <ReactSelect options={props.KeywordsGT} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeKeyword} allowSelectAll={true} value={KeywordGoogleTrendsSelected} /> 
                                                  <button style={{ border: "none", background: "none" }} id={"addkeywordGT1"} onClick={(e)=>openkeywordGT(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
                                              </div> 
                                              <div style={{marginTop:24+'px'}} className="none" id={"keywordGT1"}> 
                                                  <div class="form-wrappers"> 
                                                      <label></label> 
                                                      <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddkeywordGT1"} onKeyPress={handleKeyPresskeywordGT} /> 
                                                  </div> 
                                              </div> 
                                              <div > 
                                                  <ul className="input-list" id={"keywordGTinputs1"} style={{marginTop:24+'px'}}>
                                                  {keywordGTinputslist && keywordGTinputslist.map((i)=>{
                                                      return(
                                                          <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"keywordGT")}}></i> </li>
                                                      )
                                                  })}
                                                  </ul> 
                                              </div> 
                                          </div> 
                                      </div> 
                                  </div> 
                              </div> 
                              <ul class="form-action-wrapper">  
                                  <li><a href="#" class="outline-btn">Update</a></li> 
                              </ul> 
                          </div> 
                      </div>
                  {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
                  </div>
              </td>
          </tr>
      </>
  )
}

function TableRowPS(props){
  const [UrlPSSelected, setUrlPSSelected] = useState(props.UrlPSSelected);
  function handleChangeUrlPS(selected){
      setUrlPSSelected(selected);
  };
  const [UrlPSinputslist, setUrlPSinputslist] = useState([]);
  const openUrlPS = (id) =>{
      var tagid="UrlPS"+id;
      document.getElementById(tagid).classList.remove('none');
   }
   const handleKeyPressUrlPS = (event) => {
       
       if(event.key === 'Enter'){
       var id = (event.target.id).replace('inputaddUrlPS','');
      var data = [];
      UrlPSinputslist.map((i)=>{
          data.push(i)
      })
      data.push(event.target.value);
      setUrlPSinputslist(data);
       event.target.value="";
       var tagid="UrlPS"+id;
       document.getElementById(tagid).classList.add('none');
       }
     
     }
     function removeitemlist(a, type){
      
      var list = UrlPSinputslist;
      setUrlPSinputslist(list.filter(item => item !== a))
     }
  const [expand, setexpand] = useState(false);
  return(
      <>
          <tr>
              <td>{props.id}</td>
              <td>{props.modulename}</td>
              <td style={{textAlign:"end"}}> 
                  <i className="fa fa-trash trash-module"></i> 
                  <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
                      {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
                  </button> 
              </td>
          </tr>
          <tr className={expand?"":"none"}>
              <td colspan="4">
                  <div >
                      <div class="module-description">  
                          <div class="common-wrapper"> 
                              <div class="common-wcard"> 
                                  <div class="common-form-fields"> 
                                      <div class="add-user"> 
                                          <div class="form-wrappers"> 
                                              <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
                                              <br/>
                                              <select name="" id="UrlPSFrequency">
                                                  <option value="Daily">Daily</option>
                                                  <option value="Weekly">Weeklt</option>
                                                  <option value="Fornightly">Fornightly</option>
                                                  <option value="Monthly">Monthly</option>
                                              </select> 
                                          </div> 
                                          
                                          <div class="form-wrappers"> 
                                              <label>Keyword</label> 
                                              <div style={{display:"flex"}}> 
                                                  <ReactSelect options={props.UrlPSList} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeUrlPS} allowSelectAll={true} value={UrlPSSelected} /> 
                                                  <button style={{ border: "none", background: "none" }} id={"addUrlPS1"} onClick={(e)=>openUrlPS(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
                                              </div> 
                                              <div style={{marginTop:24+'px'}} className="none" id={"UrlPS1"}> 
                                                  <div class="form-wrappers"> 
                                                      <label></label> 
                                                      <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddUrlPS1"} onKeyPress={handleKeyPressUrlPS} /> 
                                                  </div> 
                                              </div> 
                                              <div > 
                                                  <ul className="input-list" id={"UrlPSinputs1"} style={{marginTop:24+'px'}}>
                                                  {UrlPSinputslist && UrlPSinputslist.map((i)=>{
                                                      return(
                                                          <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"UrlPS")}}></i> </li>
                                                      )
                                                  })}
                                                  </ul> 
                                              </div> 
                                          </div> 
                                      </div> 
                                  </div> 
                              </div> 
                              <ul class="form-action-wrapper">  
                                  <li><a href="#" class="outline-btn">Update</a></li> 
                              </ul> 
                          </div> 
                      </div>
                  {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
                  </div>
              </td>
          </tr>
      </>
  )
}


export default Configuration;