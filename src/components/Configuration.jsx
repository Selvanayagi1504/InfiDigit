// import React, { useState, useEffect } from "react";
// import { NotificationSEO } from './index'
// import { Table, Input,  Row,  Col, Switch, Breadcrumb } from 'antd';
// import { default as ReactSelect, components } from "react-select";
// import { Button,Modal} from 'react-bootstrap';  
// import Chart from "react-google-charts";
// import { Link } from "react-router-dom";
// const Option = (props) => {
//   return (
//     <div>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label>{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };
// const pieOptions = {
//   title: "",
//   slices: [
//     {
//       color: "#2BB673"
//     },
//     {
//       color: "#d91e48"
//     },
//     {
//       color: "#007fad"
//     },
//     {
//       color: "#e9a227"
//     }
//   ],
//   legend: {
//     position: "bottom",
//     alignment: "center",
//     textStyle: {
//       color: "233238",
//       fontSize: 12
//     }
//   },
//   tooltip: {
//     showColorCode: true
//   },
//   chartArea: {
//     left: 20,
//     top: 0,
//     width: "100%",
//   },
// };

// function Configuration() {
//   const [optionSelected, setoptionSelected] = useState(null);
//   function handleChange(selected){
//       setoptionSelected(selected);
//   };
//   const [colourOptions, setcolor] = useState([
//       { value: "Ankit", label: "Ankit" },
//       { value: "Monal", label: "Monal" },
//       { value: "Rahul", label: "Rahul" },
//       { value: "Ravi", label: "Ravi" },
      
//   ])
//   const [optionSelectedmodule, setoptionSelectedmodulw] = useState(null);
//     function handleChangemodule(selected){
//         console.log(selected)
//         setoptionSelectedmodulw(selected);
//         console.log(optionSelectedmodule);
//     };
//     const [colourOptionsmodule, setcolormodule] = useState([
//         { value: "DA/PA Checker", label: "DA/PA Checker" },
//         { value: "Google Trends", label: "Google Trends" },
//         { value: "Page Speed and Core Web Vitals", label: "Page Speed and Core Web Vitals" },
//         { value:"Click Share", label:"Click Share" },
//         { value:"Rank Tracking", label:"Rank Tracking" },
//         { value:"Site Uptime Monitor", label:"Site Uptime Monitor" },
//         { value:"GSC Data Extractor", label:"GSC Data Extractor" },
//         { value:"Organic Research Module", label:"Organic Research Module" },
//         { value:"ROI Calculator", label:"ROI Calculator" },
//         { value:"Content Word Count On page", label:"Content Word Count On page" },
//         { value:"Backlinks Count", label:"Backlinks Count" },
//         { value:"Keywords Research", label:"Keywords Research" },
//         { value:"SEO Volatality", label:"SEO Volatality" },
//         { value:"SEO Manual Audit", label:"SEO Manual Audit" },
//         { value:"Google Analytics Data Extractor", label:"Google Analytics Data Extractor" },
//     ])
//     const [optionSelectedURL, setoptionSelectedURL] = useState([]);
//     // function handleChangeURL(selected){
//     //     console.log(selected);
//     //     setoptionSelectedURL(selected);
//     //     console.log(optionSelectedURL);

//     // };
//     const [OptionsURL, setURL] = useState([
//         { value: "www.myntra.com", label: "www.myntra.com" },
//         { value: "www.infi.com", label: "www.infi.com" },
//         { value: "www.grwo.com", label: "www.grwo.com" },
//         { value: "www.sample.com", label: "www.sample.com" }
//     ])
//     const [optionSelectedComp, setoptionSelectedComp] = useState(null);
//     // function handleChangeComp(selected){
//     //     setoptionSelectedComp(selected);
//     // };
//     const [OptionsComp, setcolorComp] = useState([
//         { value: "www.comp1.com", label: "www.comp1.com" },
//         { value: "www.comp2.com", label: "www.comp2.com" },
//         { value: "www.comp3.com", label: "www.comp3.com" }
//     ])
//     const [KeywordGoogleTrendsSelected, setKeywordGoogleTrendsSelected] = useState(null);
//     const [KeywordsGT, setKeywordGT] = useState([
//         { value: "Shoes", label: "Shoes" },
//             { value: "Rainy Shoes", label: "Rainy Shoes" },
//             { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
//             { value: "Casual Shoes", label: "Casual Shoes" }
//     ])
//     const [UrlPSSelected, setUrlPSSelected] = useState(null);
//     const [UrlPSList, setURlPSList] = useState([
//         { value: "www.myntra.com", label: "www.myntra.com" },
//         { value: "www.infi.com", label: "www.infi.com" },
//         { value: "www.grwo.com", label: "www.grwo.com" },
//         { value: "www.sample.com", label: "www.sample.com" }
//     ])
//   const [select, setSelect] = useState({
//     selectedRowKeys: [],
//     loading: false
//   });
//   const [show,setshow]= useState(false);
//   function handleModal(){
//       setshow(!show);
//   }
//   const [show1,setshow1]= useState(false);
//   function handleModal1(){
//       setshow1(!show1);
//   }
//   const [EditAuditModal, setEditAuditModal] = useState(false);
//   function handleEditAudit(){
//       setEditAuditModal(!EditAuditModal);
//   }
//   const [AddAuditModal, setAddAuditModal] = useState(false);
//   function handleAddAudit(){
//       setAddAuditModal(!AddAuditModal);
//   }
//   const { selectedRowKeys, loading } = select;

//     const rowSelection = {
//         selectedRowKeys,
//         onChange: (selectedRowKeys, selectedRows) => {
//         setSelect({
//             ...select,
//             selectedRowKeys: selectedRowKeys,
            
//         });
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//         }
//     };
//   const [sidenav,setsidenav] = useState(false); //navbar
//   const [client, setclient] = useState('Myntra'); //Saves Clinet names
//   const [clientproj, setclientproj] = useState([]); //Saves projects of Clinets 
//   const [chosenclientproj, setchosenclientproj] = useState('Myntra Project 0'); //Save chosen client project
//   const [currenttab, setcurrenttab] = useState([]); // saves current tab shown 
//   const [teamlist, setteamList] = useState([]); //team members list
//   const [selectionType, setSelectionType] = useState('checkbox'); //team members selection checkbox
//   const [teamcol,setteamcol] = useState([]); //team members column details
//   const [searchdata,setsearch] = useState([]); //team members search box
//   const [piedata, setpiedata] = useState([]); //pie data for modal 
//   const [maindropselection, setmaindropselection] = useState("URL"); //dropdown selection for URL and Comp
//   const [tabledropselection, settabledropselection] = useState("URL"); // Dropwn table sleection for URL and comp
//   const [taburllist, settaburlList] = useState([]); //URL tab list
//   const [selectionTypeURLTab, setSelectionTypeURLTab] = useState('checkbox'); //URL tab selection checkbox
//   const [URLTabcol,setURLTabcol] = useState([]); //URL tab column details
//   const [searchdataURLTab,setsearchURLTab] = useState([]); //URL tab search box
//   const [tabcomplist, settabcompList] = useState([]); //Comp tab list
//   const [selectionTypeCompTab, setSelectionTypeCompTab] = useState('checkbox'); //Comp tab selection checkbox
//   const [CompTabcol,setCompTabcol] = useState([]); //Comp tab column details
//   const [searchdataCompTab,setsearchCompTab] = useState([]); //Comp tab search box
//   const [tabkeywordlist, settabkeywordList] = useState([]); //Comp tab list
//   const [selectionTypeKeywordTab, setSelectionTypeKeywordTab] = useState('checkbox'); //Comp tab selection checkbox
//   const [KeywordTabcol,setKeywordTabcol] = useState([]); //Comp tab column details
//   const [searchdataKeywordTab,setsearchKeywordTab] = useState([]); //Comp tab search box
//   const [modulelisr, setmodulelist] = useState([]); //module list
//   const [modukecol,setmodulecol] = useState([]); //module column information
//   const [option, setoption] = useState('Director');
//     const [data,setData]= useState(
//     [
//         {
//             designation: "Director",
//             clientDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ] ,
//             teamMemberDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             modulesDataFields:[
//                 {
//                     field: "DA/PA Checker",
//                     checked: true 
//                 },
//                 {
//                     field: "Google Trends",
//                     checked: false
//                 },
//                 {
//                     field: "Page Speed",
//                     checked: false
//                 },
//                 {
//                     field: "Click Share",
//                     checked: true
//                 }
//             ],
//             projectsDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             projectConfigDataFields:[
//                 {
//                     field: "View",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 }
//             ]
//         },{
//             designation: "HR",
//             clientDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ] ,
//             teamMemberDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             modulesDataFields:[
//                 {
//                     field: "DA/PA Checker",
//                     checked: true 
//                 },
//                 {
//                     field: "Google Trends",
//                     checked: false
//                 },
//                 {
//                     field: "Page Speed",
//                     checked: false
//                 },
//                 {
//                     field: "Click Share",
//                     checked: true
//                 }
//             ],
//             projectsDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             projectConfigDataFields:[
//                 {
//                     field: "View",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 }
//             ]
//         },{
//             designation: "Sales",
//             clientDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ] ,
//             teamMemberDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             modulesDataFields:[
//                 {
//                     field: "DA/PA Checker",
//                     checked: true 
//                 },
//                 {
//                     field: "Google Trends",
//                     checked: false
//                 },
//                 {
//                     field: "Page Speed",
//                     checked: false
//                 },
//                 {
//                     field: "Click Share",
//                     checked: true
//                 }
//             ],
//             projectsDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             projectConfigDataFields:[
//                 {
//                     field: "View",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 }
//             ]
//         },{
//             designation: "SEO",
//             clientDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: true
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ] ,
//             teamMemberDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "Activate/Deactivate",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             modulesDataFields:[
//                 {
//                     field: "DA/PA Checker",
//                     checked: true 
//                 },
//                 {
//                     field: "Google Trends",
//                     checked: false
//                 },
//                 {
//                     field: "Page Speed",
//                     checked: false
//                 },
//                 {
//                     field: "Click Share",
//                     checked: true
//                 }
//             ],
//             projectsDataFields:[
//                 {
//                     field: "Add",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 },
//                 {
//                     field: "View",
//                     checked: true
//                 }
//             ],
//             projectConfigDataFields:[
//                 {
//                     field: "View",
//                     checked: true 
//                 },
//                 {
//                     field: "Update",
//                     checked: false
//                 }
//             ]
//         }
        
//     ])
//   const [DataAudit, setDataAudit] = useState([]);//data table for audit
//   const [AuditCol, setAuditCol] = useState([]); //column for audit
//   const [selectionTypeAudit, setSelectionTypeAudit] = useState('checkbox'); //Audit selection checkbox
//   const [searchdataAudit,setsearchAudit] = useState([]); //Audit search box
//   useEffect(()=>{
//     const a=[
//       ['Task', 'Hours per Day'],
//       ['Utilised', 6],
//       ['Not utilised', 4]
//    ];
//    setpiedata(a);
//     var data = [];
//     for(let i=0;i<5;i++){
//       data.push({value:`Myntra Project ${i}`})
//     }
//     setclientproj(data);
//     data = [];
//     for (let i = 1; i < 100; i++) {
//       data.push({
//           key: i,
//           teammember:`Ankit`,
//           allocation:"10%",
//           location:"Bangalore",
//           billingstart:"08/05/2020",
//           billingend:"08/05/2021",
//           shiftstart:"9.00AM",
//           shiftend:"4.00PM",
//           delete:<a href="edit-project"><i class="fa fa-trash"></i></a>

//       });
//       }

//       setsearch(data);
//       setteamList(data);
//       var columns = [
//           {
//           title: "Team Member",
//           dataIndex: "teammember",
//           key: "teammember"
//           },
//           {
//           title: "Allocation %",
//           dataIndex: "allocation",
//           key: "allocation"
//           },
//           {
//               title:"Location",
//               dataIndex:"location",
//               key:"location",
//           },
//           {
//               title:"Billing Start Date",
//               dataIndex:"billingstart",
//               key:"billingstart",
//           },
//           {
//               title:"Billing End Date",
//               dataIndex:"billingend",
//               key:"billingend",
//           },
//           {
//               title:"Shift Start Time",
//               dataIndex:"shiftstart",
//               key:"shiftstart",
//           },
//           {
//               title:"Shift End Time",
//               dataIndex:"shiftend",
//               key:"shiftend",
//           },
//           {
//           title:"",
//           dataIndex:"delete",
//           key:"delete",
//           },
//       ];
//       setteamcol(columns);

//       data=[];
//         for(let i=1;i<5;i++){
//             data.push({
//                 key:i,
//                 id:i,
//                 url:`www.myntra${i}.com`,
//                 delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//             })
//         }
//         settaburlList(data);
//         setsearchURLTab(data);
//         columns=[
//             {
//                 title: "#",
//                 dataIndex: "id",
//                 key: "id",
//                 width:"8%"
//             },
//             {
//                 title: "URL",
//                 dataIndex: "url",
//                 key: "url",
//                 width:"89%"
//             },
//             {
//                 title:"",
//                 dataIndex:"delete",
//                 key:"delete",
//                 width:"20%"
//             },
//         ];
//         setURLTabcol(columns);
//         //prepare data for Comp
//         data=[];
//         for(let i=1;i<5;i++){
//             data.push({
//                 key:i,
//                 id:i,
//                 comp:`myntra${i}`,
//                 delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//             })
//         }
//         settabcompList(data);
//         setsearchCompTab(data);
//         columns=[
//             {
//                 title: "#",
//                 dataIndex: "id",
//                 key: "id",
//                 width:"8%"
//             },
//             {
//                 title: "Competitors",
//                 dataIndex: "comp",
//                 key: "comp",
//                 width:"89%"
//             },
//             {
//                 title:"",
//                 dataIndex:"delete",
//                 key:"delete",
//                 width:"20%"
//             },
//         ];
//         setCompTabcol(columns);

//         //set data for keywords
//         data=[];
//         for(let i=1;i<5;i++){
//             data.push({
//                 key:i,
//                 id:i,
//                 keyword:`Shoe${i}`,
//                 delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//             })
//         }
//         settabkeywordList(data);
//         setsearchKeywordTab(data);
//         columns=[
//             {
//                 title: "#",
//                 dataIndex: "id",
//                 key: "id",
//                 width:"8%"
//             },
//             {
//                 title: "Keywords",
//                 dataIndex: "keyword",
//                 key: "keyword",
//                 width:"89%"
//             },
//             {
//                 title:"",
//                 dataIndex:"delete",
//                 key:"delete",
//                 width:"20%"
//             },
//         ];
//         setKeywordTabcol(columns);
//         columns = [
//           {
//               title: "#",
//               dataIndex: "id",
//               key: "id",
//               width:"8%"
//           },
//           {
//               title: "Module Name",
//               dataIndex: "modulename",
//               key: "modulename",
//               width:"89%"
//           },
//           {
//               title:"Action",
//               dataIndex:"delete",
//               key:"delete",
//               width:"20%"
//           },
//       ];
//       setmodulecol(columns);
//       data=[];
//       data.push({
//           key: "1",
//           id:"1",
//           modulename:`DA/PA Checker`,
//           delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//           // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputs1"}> {urlinputslist.map((i)=>{ return( <li>{i} <i onClick={removeItem(i)} class="fa fa-trash"></i></li> ) })} </ul> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
//           // description: <div> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp"+i} onClick={(e)=>openinp(i)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox"+i}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddurl"+i} onKeyPress={handleKeyPress} /></div> </div> <div ><ul id={"urlinputs"+i}></ul></div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp"+i} onClick={(e)=>opencomp(i)} ><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div className="none" id={"compinputbox"+i}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddcomp"+i} onKeyPress={handleKeyPressComp} /></div> </div> <div ><ul id="compinputs"></ul></div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
//           // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user">  <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> <div style={{marginLeft:48+'px'}}><label htmlFor="" style={{marginRight:24+'px'}}>Select Frequency</label><select name="" id=""><option value="Daily">Daily</option><option value="Weekly">Weeklt</option><option value="Fornightly">Fornightly</option><option value="Monthly">Monthly</option></select></div></div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /></div> </div> <div ><ul id={"urlinputs1"}></ul></div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}><ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"><label></label><input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /></div> </div> <div ><ul id={"compinputs1"}></ul></div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>,
//           // description:<div class="module-description"> <div class="main-title">BASE CONFIGURATION</div> <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>DA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>PA Score</label> <input type="text" name="" placeholder="Value" disabled /> </div> <div class="form-wrappers"> <label>Spam %</label> <input type="text" name="" placeholder="Value" disabled /> </div> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Please select" defaultValue={['a10', 'c12']} > {children} </Select> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurl1"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputs1"}></ul> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper"> <li><a href="#" class="ol-btn">Cancel</a></li> <li><a href="#" class="outline-btn">Save</a></li> </ul> </div> </div>
//           // description:<div class="module-description">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div className="da"> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("da")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxda"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlda"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputsda"}> </ul> </div> </div> <div class="form-wrappers"> <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label><select name="" id=""><option value="Daily">Daily</option><option value="Weekly">Weeklt</option><option value="Fornightly">Fornightly</option><option value="Monthly">Monthly</option></select> </div> </div> <div class="form-wrappers"> <label>Competitors</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> </div> </div> <div > <ul id={"compinputs1"}></ul> </div> </div> </div> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul> </div> </div>
//       });
//       data.push({
//           key:"2",
//           id:"2",
//           modulename:"Google Trends",
//           delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//           // description:<div class="module-description google-trends-des">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>Set Frequency</label><br/> <select name="" id=""> <option value="Daily">Daily</option> <option value="Weekly">Weekly</option> <option value="Fornightly">Fornightly</option> <option value="Monthly">Monthly</option> </select> </div> <div class="form-wrappers"> <label>Keyword</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("gt")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxgt"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlgt"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputsgt"}> </ul> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul></div> </div> </div>  </div> </div>
//       })
//       data.push({
//           key:"3",
//           id:"3",
//           modulename:"Page Speed",
//           delete:<a style={{marginLeft: 24+'px'}} href="#"><i class="fa fa-trash"></i></a>,
//           // description:<div class="module-description google-trends-des">  <div class="common-wrapper"> <div class="common-wcard"> <div class="common-form-fields"> <div class="add-user"> <div class="form-wrappers"> <label>Set Frequency</label><br/> <select name="" id=""> <option value="Daily">Daily</option> <option value="Weekly">Weekly</option> <option value="Fornightly">Fornightly</option> <option value="Monthly">Monthly</option> </select> </div> <div class="form-wrappers"> <label>Url's</label> <div style={{display:"flex"}}> <ReactSelect options={OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> <button style={{ border: "none", background: "none" }} id={"addinp1"} onClick={(e)=>openinp("pasp")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> </div> <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxpasp"}> <div class="form-wrappers"> <label></label> <input type="text" name="" placeholder="Value" id={"inputaddurlpasp"} onKeyPress={handleKeyPress} /> </div> </div> <div > <ul id={"urlinputspasp"}> </ul> </div> </div> <ul class="form-action-wrapper">  <li><a href="#" class="outline-btn">Update</a></li> </ul></div> </div> </div>  </div> </div>
//       })
//       setmodulelist(data);
//       columns = [];
//       columns = [
//         {
//             title:"Audit Module",
//             dataIndex:"modulename",
//             key:"modulename",
//             width:"15%"
//         },
//         {
//             title:"Actions",
//             dataIndex:"actions",
//             key:"actions",
//             width:"10%"
//         },
//         {
//             title:"",
//             dataIndex:"",
//             key:"",
//             width:"75%"
//         }
//     ]
//     setAuditCol(columns)
//     data = []
//     data = [
//         {
//             key:"1",
//             modulename:"Audit Module 1",
//             actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{handleEditAudit()}}> View </a><i class="fa fa-trash"></i></div>
//         },
//         {
//             key:"2",
//             modulename:"Audit Module 2",
//             actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{handleEditAudit()}}> View </a><i class="fa fa-trash"></i></div>
//         },
//         {
//             key:"3",
//             modulename:"Audit Module 3",
//             actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{handleEditAudit()}}> View </a><i class="fa fa-trash"></i></div>
//         },
//         {
//             key:"4",
//             modulename:"Audit Module 4",
//             actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{handleEditAudit()}}> View </a><i class="fa fa-trash"></i></div>
//         }
//     ]
//     setDataAudit(data);
//     setsearchAudit(data);
//   },[])
//   function checkbox(){
//     console.log(data)
// }
//   function changeclient(){
//     var a = document.getElementById('clients').value;
//     setclient(a);
//     var data = [];
//     for(let i=0;i<5;i++){
//       data.push({value:`${a} Project ${i}`})
//     }
//     setclientproj(data);
//   }
//   function changechoseclientproj(){
//     var a = document.getElementById('client-proj').value;
//     setchosenclientproj(a);
//   }
// //   function openTab(tabname, id){
// //     if(currenttab.length == 0){
// //       var data = [];
// //       if(id == 1){
// //         document.getElementById('main-col-2').classList.add('none');
// //         document.getElementById('main-col-3').classList.add('none');
// //         document.getElementById('main-col-1').classList.add('custom-column-30');
// //         document.getElementById('main-col-1').classList.remove('custom-column-33');
// //         document.getElementById('angle-1').classList.remove('none');
// //       }
// //       else if(id == 2){
// //         document.getElementById('main-col-1').classList.add('none');
// //         document.getElementById('main-col-3').classList.add('none');
// //         document.getElementById('main-col-2').classList.add('custom-column-30');
// //         document.getElementById('main-col-2').classList.remove('custom-column-33');
// //         document.getElementById('angle-2').classList.remove('none');
// //       }
// //       else if(id == 3){
// //         document.getElementById('main-col-2').classList.add('none');
// //         document.getElementById('main-col-1').classList.add('none');
// //         document.getElementById('main-col-3').classList.add('custom-column-30');
// //         document.getElementById('main-col-3').classList.add('custom-borrig');
// //         document.getElementById('main-col-3').classList.remove('custom-column-33');
// //         document.getElementById('angle-3').classList.remove('none');
// //       }
// //       document.getElementById(tabname).classList.remove('none');
// //       data.push({
// //         currentabname:tabname,
// //         currentid:id,
// //       })
// //       setcurrenttab(data);
// //     }
// //     else {
// //       document.getElementById(currenttab[0].currentabname).classList.add('none');
// //       document.getElementById(tabname).classList.remove('none');
// //       var data = []
// //       data.push({
// //         currentabname:tabname,
// //         currentid:id,
// //       })
// //       setcurrenttab(data);
// //     }
// //   }
// //   function closeTabs(){
// //     document.getElementById(currenttab[0].currentabname).classList.add('none');
// //     document.getElementById(`main-col-${currenttab[0].currentid}`).classList.remove('custom-column-30');
// //     document.getElementById(`main-col-${currenttab[0].currentid}`).classList.add('custom-column-33');
// //     document.getElementById(`angle-${currenttab[0].currentid}`).classList.add('none');
// //     if(currenttab[0].currentid == 3){
// //       document.getElementById('main-col-2').classList.remove('none');
// //       document.getElementById('main-col-1').classList.remove('none');
// //       document.getElementById('main-col-3').classList.remove('custom-borrig');  
// //     }
// //     if(currenttab[0].currentid == 1){
// //       document.getElementById('main-col-2').classList.remove('none');
// //       document.getElementById('main-col-3').classList.remove('none');
// //     }
// //     if(currenttab[0].currentid == 2){
// //       document.getElementById('main-col-3').classList.remove('none');
// //       document.getElementById('main-col-1').classList.remove('none');
// //     }
// //     setcurrenttab([])
// //   }
// function openTab(tabname, id){
//     if(currenttab.length == 0){
//       var data = [];
//       if(id == 1){
//         document.getElementById('main-col-2').classList.add('none');
//         document.getElementById('main-col-3').classList.add('none');
//         document.getElementById('main-col-4').classList.add('none');
//         document.getElementById('main-col-1').classList.add('custom-column-30');
//         document.getElementById('main-col-1').classList.remove('custom-column-33');
//         document.getElementById('angle-1').classList.remove('none');
//       }
//       else if(id == 2){
//         document.getElementById('main-col-1').classList.add('none');
//         document.getElementById('main-col-3').classList.add('none');
//         document.getElementById('main-col-4').classList.add('none');
//         document.getElementById('main-col-2').classList.add('custom-column-30');
//         document.getElementById('main-col-2').classList.remove('custom-column-33');
//         document.getElementById('angle-2').classList.remove('none');
//       }
//       else if(id == 3){
//         document.getElementById('main-col-2').classList.add('none');
//         document.getElementById('main-col-1').classList.add('none');
//         document.getElementById('main-col-4').classList.add('none');
//         document.getElementById('main-col-3').classList.add('custom-column-30');
        
//         document.getElementById('main-col-3').classList.remove('custom-column-33');
//         document.getElementById('angle-3').classList.remove('none');
//       }
//       else if(id == 4){
//         document.getElementById('main-col-2').classList.add('none');
//         document.getElementById('main-col-1').classList.add('none');
//         document.getElementById('main-col-3').classList.add('none');
//         document.getElementById('main-col-4').classList.add('custom-borrig');
//         document.getElementById('main-col-4').classList.add('custom-column-30');
//         document.getElementById('main-col-4').classList.remove('custom-column-33');
//         document.getElementById('angle-4').classList.remove('none');
//       }
//       document.getElementById(tabname).classList.remove('none');
//       data.push({
//         currentabname:tabname,
//         currentid:id,
//       })
//       setcurrenttab(data);
//     }
//     else {
//       document.getElementById(currenttab[0].currentabname).classList.add('none');
//       document.getElementById(tabname).classList.remove('none');
//       var data = []
//       data.push({
//         currentabname:tabname,
//         currentid:id,
//       })
//       setcurrenttab(data);
//     }
//   }
//   function closeTabs(){
//     document.getElementById(currenttab[0].currentabname).classList.add('none');
//     document.getElementById(`main-col-${currenttab[0].currentid}`).classList.remove('custom-column-30');
//     document.getElementById(`main-col-${currenttab[0].currentid}`).classList.add('custom-column-33');
//     document.getElementById(`angle-${currenttab[0].currentid}`).classList.add('none');
//     if(currenttab[0].currentid == 3){
//       document.getElementById('main-col-2').classList.remove('none');
//       document.getElementById('main-col-1').classList.remove('none');
//       document.getElementById('main-col-4').classList.remove('none'); 
//     }
//     if(currenttab[0].currentid == 1){
//       document.getElementById('main-col-2').classList.remove('none');
//       document.getElementById('main-col-3').classList.remove('none');
//       document.getElementById('main-col-4').classList.remove('none');
//     }
//     if(currenttab[0].currentid == 2){
//       document.getElementById('main-col-3').classList.remove('none');
//       document.getElementById('main-col-1').classList.remove('none');
//       document.getElementById('main-col-4').classList.remove('none');
//     }
//     if(currenttab[0].currentid == 4){
//         document.getElementById('main-col-2').classList.remove('none');
//         document.getElementById('main-col-1').classList.remove('none');
//         document.getElementById('main-col-3').classList.remove('none');
//         document.getElementById('main-col-4').classList.remove('custom-borrig'); 
//     }
//     setcurrenttab([])
//   }
//   function assign(){
//     console.log("selectedRowKeys", select);
//     if(optionSelected.length==1)
//     handleModal();
//     else
//     handleModal1();
//   }
//   function assign1(){
//       console.log("selectedRowKeys", select);
//       if(select.selectedRowKeys.length==1)
//       handleModal();
//       else
//       handleModal1();
//   }
//   function addmodule(){
//   }
//   const [ClientsList, setClientsList] = useState([
//     { value: "Myntra", label: "Myntra" },
//     { value: "CureFit", label: "CureFit" },
//     { value: "CultFit", label: "CultFit" },
//   ])
//   const [ClientsSelected, setClientsSelected] = useState({ value: "Myntra", label: "Myntra" });
//   function handleChangeClients(selected){
//     setClientsSelected(selected);
//     var a = selected.value;
//     console.log(a)
//     var data = [];
//     for(let i=0;i<5;i++){
//       data.push({value:`${a} Project ${i}`, label:`${a} Project ${i}`})
//     }
//     setClientsProjectChosenSelected({ value:`${a} Project 0`, label:`${a} Project 0` })
//     setClientsProjectChosen(data)
//     console.log(data);
//   }
//   const [ClientsProjectChosen, setClientsProjectChosen] = useState([
//     { value: "Myntra Project 1", label: "Myntra Project 1" },
//     { value: "Myntra Project 2", label: "Myntra Project 2" },
//     { value: "Myntra Project 3", label: "Myntra Project 3" },
//     { value: "Myntra Project 4", label: "Myntra Project 4" },
//   ])
//   const [ClientsProjectChosenSelected, setClientsProjectChosenSelected] = useState({ value: "Myntra Project 1", label: "Myntra Project 1" });
//   function handleChangeClientsProjects(selected){
//     setClientsProjectChosenSelected(selected);
//   }
//   const [OrganizationList, setOrganizationList] = useState([
//     { value: "InfiDigit", label: "InfiDigit" },
//   ])
//   const [OrganizationSelected, setOrganizationSelected] = useState({ value: "InfiDigit", label: "InfiDigit" });
//   function handleChangeOrganization(selected){
//     setOrganizationSelected(selected);
//   }
//   const [UserList, setUserList] = useState([
//     { value: "User 1", label: "User 1" },
//     { value: "User 2", label: "User 2" },
//     { value: "User 3", label: "User 3" },
//   ])
//   const [UserSelected, setUserSelected] = useState({ value: "User 1", label: "User 1" });
//   function handleChangeUser(selected){
//     setUserSelected(selected);
//   }
//   return (
//     <>
//       <section class="outer-wrapper configuration">
//         <div class="top-nav-bar">
//           <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
//           <div class="nav-bar-center">&nbsp;</div>
//           <div class="nav-bar-right">
//             <ul class="list-unstyled nav-right-menu">
//               <li>
//                 <NotificationSEO/>
//               </li>

//               <li class="dropdown">
//                 <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
//                     <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
//                     <span class="profile-name">Director</span>
//                 </button>



//                 <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                   <li><a href="/profile">Profile</a></li>

//                   <li><a href="/">Log Out</a></li>
//                 </ul>

//               </li>
//             </ul>
//           </div>
//           <div class="clearfix"></div>
//         </div>

//         <div class="sidebar-nav-bar">
//           <ul class="list-unstyled side-menu">
//             <li><a href="/dashboard"><i class="fa fa-columns"></i> Dashboard</a></li>
//             <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
//             <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
//             <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
//             <li><a href="configuration">Configuration</a></li>
//           </ul>
//         </div>
//         <div class="content-wrapper">
//           <div class="dashboard-wrapper">
//             <Breadcrumb>
//               <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
//               <Breadcrumb.Item>
//               <a href="/dashboard">Dashboard</a>
//               </Breadcrumb.Item>
//               <Breadcrumb.Item>
//               <a href="/configuration">Configuration</a>
//               </Breadcrumb.Item>
//             </Breadcrumb>

//             <div className="custom-row">
//                 <div className="custom-column-33 custom-borrig" id="main-col-1">
//                     <i className="fa fa-arrow-left none" id="angle-1" onClick={()=>closeTabs()}></i>
//                     <h2 className="tab-title-comfiguration">Organizations <i class="fa fa-plus common-ml-24"></i></h2>
//                     <ReactSelect
//                         className="SearchSelectMain"
//                         placeholder="Select or search module"
//                         options={OrganizationList}
//                         closeMenuOnSelect={true}
//                         onChange={handleChangeOrganization}
//                         value={OrganizationSelected}
//                     />
//                     <ul class="configuration-tab-list">
//                         <li>
//                             <a onClick={()=>{openTab('audit',1)}}>Audit</a>
//                         </li>
//                         <li>
//                             <a onClick={()=>{openTab('access-permissions',1)}}>Access Permissions</a>
//                         </li>
//                         <li>
//                             <a>Customize dashboard</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="custom-column-33 custom-borrig" id="main-col-2">
//                 <i className="fa fa-arrow-left none" id="angle-2" onClick={()=>closeTabs()}></i>
//                     {/* <select name="" id="clients" onChange={()=>{changeclient()}}>
//                     <option value="Myntra">Myntra</option>
//                     <option value="CultFit">CultFit</option>
//                     <option value="CureFit">CureFit</option>
//                     </select> */}
//                     <h2 className="tab-title-comfiguration">Clients <i class="fa fa-plus common-ml-24"></i></h2>
//                     <ReactSelect
//                         className="SearchSelectMain"
//                         placeholder="Select or search module"
//                         options={ClientsList}
//                         closeMenuOnSelect={true}
//                         onChange={handleChangeClients}
//                         value={ClientsSelected}
//                     />
//                     <ul class="configuration-tab-list">
//                     <li>
//                         <a onClick={()=>{openTab('account-settings',2)}}>Account Settings</a>
//                     </li>
//                     <li>
//                         <a onClick={()=>{openTab('profile',2)}}>Profile</a>
//                     </li>
//                     <li>
//                         <a onClick={()=>{openTab('admin',2)}}>Admin</a>
//                     </li>
//                     </ul>
//                 </div>
//                 <div className="custom-column-33 custom-borrig" id="main-col-3">
//                 <i className="fa fa-arrow-left none" id="angle-3" onClick={()=>closeTabs()}></i>
//                 <h2 className="tab-title-comfiguration">Projects <i onClick={()=>{openTab('create-project',3)}} class="fa fa-plus common-ml-24"></i></h2>
//                     {/* <select name="" id="client-proj" onChange={()=>{changechoseclientproj()}}>
//                     {clientproj.map((i)=>{
//                         return(
//                         <option value={i.value}>{i.value}</option>
//                         )
//                     })}
//                     </select> */}
//                     <ReactSelect
//                         className="SearchSelectMain"
//                         placeholder="Select or search module"
//                         options={ClientsProjectChosen}
//                         closeMenuOnSelect={true}
//                         onChange={handleChangeClientsProjects}
//                         value={ClientsProjectChosenSelected}
//                     />
//                     <ul class="configuration-tab-list">
//                     <li>
//                         <a onClick={()=>{openTab('team-members',3)}}>Team Members</a>
//                     </li>
//                     <li>
//                         <a onClick={()=>{openTab('modules',3)}}>Modules</a>
//                     </li>
//                     <li>
//                         <a onClick={()=>{openTab('url-comp',3)}}>Url and Competitors</a>
//                     </li>
//                     </ul>
//                 </div>
//                 <div className="custom-column-33" id="main-col-4">
//                     <i className="fa fa-arrow-left none" id="angle-4" onClick={()=>closeTabs()}></i>
//                     <h2 className="tab-title-comfiguration">Users <i class="fa fa-plus common-ml-24"></i></h2>
//                     <ReactSelect
//                         className="SearchSelectMain"
//                         placeholder="Select or search module"
//                         options={UserList}
//                         closeMenuOnSelect={true}
//                         onChange={handleChangeUser}
//                         value={UserSelected}
//                     />
//                     <ul className="configuration-tab-list">
//                         <li>
//                             <a onClick={()=>{openTab('customize',4)}}>Customize</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="custom-column-70 none" id="customize">
//                     user
//                 </div>
//                 {/* Team Members Expand */}
//                 <div className="custom-column-70 none" id="team-members">
//                     <div class="row">
//                     <div class="col-sm-5 pad-lzero">
//                         <div class="main-title">ASSIGN TEAM MEMBERS</div>
//                     </div>
//                     <div class="col-sm-7 add-new-btnw">
                        
//                     </div>
//                     </div>
//                     <div className="row">
//                     <div className="col-md-3">
//                         <ReactSelect
//                             options={colourOptions}
//                             isMulti
//                             closeMenuOnSelect={false}
//                             hideSelectedOptions={false}
//                             components={{
//                                 Option
//                             }}
//                             onChange={handleChange}
//                             allowSelectAll={true}
//                             value={optionSelected}
//                         />
//                     </div>
//                     <div className="col-md-3">
//                     <button onClick={()=>assign()}  class="outline-btn">Assign</button>
//                     </div>
//                     </div>
//                     <hr />
//                     <div class="add-new-btnw" style={{textAlign:"left"}}>
//                     <button onClick={()=>assign1()}  class="outline-btn">Edit</button>
//                     </div>

//                     <div className="row">
//                     <div className="col-sm-5"></div>
//                     <div className="col-sm-7 add-new-btnw">
//                         <div class="search" style={{marginLeft:0+'px', width:100+'%'}}>
//                         <div class="input-group" style={{display:"block"}}>
//                             <Input.Search
//                             allowClear
//                             placeholder="Search By name"
//                             onSearch={nameSearch =>
//                                 {setteamList(
//                                     searchdata.filter(person =>
//                                     person.name.includes(nameSearch)
//                                     )
//                                 );console.log(nameSearch)}
//                             }
//                             id="input-s"
//                             />
//                         </div>
//                         </div>
//                     </div>
//                     </div>
                    

//                     <div class="common-table">
//                     <div class="row">
//                         <div class="col-md-5">
//                         {/* <div class="data-per-page">Data Per page</div> */}
//                         </div>
//                         <div class="col-md-7">        
//                         <div class="data-export">
//                             <span class="export" style={{marginRight:0+'px'}}>
//                             <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Export
//                             </button>
//                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                 <a class="dropdown-content" href="#">Excel</a>
//                                 <a class="dropdown-content" href="#">CSV</a>
//                                 <a class="dropdown-content" href="#">Sheets</a>
//                             </div>
//                             </span>
//                         </div>
                                
//                         </div>
//                     </div>
//                     <Table id="sample" columns={teamcol} dataSource={teamlist}
//                     rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
//                     </div>
//                 </div>

//                 {/* Modules Expand */}
//                 <div className="custom-column-70 none" id="modules">
//                     <div class="row">
//                     <div class="col-sm-5 pad-lzero">
//                         <div class="main-title">UPDATE MODULES</div>
//                     </div>
//                     <div class="col-sm-7 add-new-btnw">
                        
//                     </div>
//                     </div>
//                     <div className="row">
//                     <div className="col-md-4">
//                         <ReactSelect
//                             placeholder="Select or search module"
//                             options={colourOptionsmodule}
//                             isMulti
//                             closeMenuOnSelect={false}
//                             hideSelectedOptions={true}
//                             components={{
//                                 Option
//                             }}
//                             onChange={handleChangemodule}
//                             allowSelectAll={true}
//                             value={optionSelectedmodule}
//                         />
//                     </div>
//                     <div className="col-md-3">
//                     <button onClick={()=>addmodule()}  class="outline-btn">ADD MODULE</button>
//                     </div>
//                     </div>
//                     <div class="common-table tab-panel-module">
//                     <table class="edit-project-modules">
//                         <thead>
//                             <tr>
//                             <th width="1%">#</th>
//                             <th width="9%">Module Name</th>
//                             <th width="90%" style={{textAlign:"end"}}>Action</th>
//                             <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {modulelisr.map((i)=>{
//                                 return(
//                                     <>
//                                         {
//                                             i.modulename== "DA/PA Checker"?<><TableRowDAPA id={i.id} modulename={i.modulename} OptionsURL={OptionsURL} optionSelectedURL={optionSelectedURL} optionSelectedComp={optionSelectedComp} OptionsComp={OptionsComp}  /></>:<></>
//                                         }   
//                                         {
//                                             i.modulename== "Google Trends"?<><TableRowGT id={i.id} modulename={i.modulename} KeywordsGT={KeywordsGT} KeywordGoogleTrendsSelected={KeywordGoogleTrendsSelected}  /></>:<></>
//                                         }
//                                         {
//                                             i.modulename== "Page Speed"?<><TableRowPS id={i.id} modulename={i.modulename} UrlPSList={UrlPSList} UrlPSSelected={UrlPSSelected}  /></>:<></>
//                                         }
//                                     </>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                     </div>
//                 </div>

//                 {/* Url and Competitors Expand */}
//                 <div className="custom-column-70 none" id="url-comp">
//                     <div className="row tab-panel-url">
//                     <div className="col-md-2">
//                         <select name="" id="select-type" value={maindropselection} onChange={()=>{setmaindropselection(document.getElementById('select-type').value)}}>
//                             <option value="URL">URL</option>
//                             <option value="Competitors">Competitors</option>
//                             <option value="Keywords">Keywords</option>
//                         </select>
//                     </div>
//                     <div className="col-md-10">
//                         {maindropselection == "URL" ? 
//                             <>
//                                 <div style={{display:"inline-block",width:100+"%"}}>
//                                     <span style={{marginRight:24+"px"}}>
//                                         <input style={{height:40+'px'}} type="text" placeholder="Enter URL" />
//                                     </span>
//                                     <span>
//                                         <button class="outline-btn">Add</button>
//                                     </span>
//                                 </div>
//                             </> 
//                             : 
//                             <>
//                             </>
//                         }
//                         {maindropselection == "Competitors" ?
//                             <>
//                                 <div style={{display:"inline-block",width:100+"%"}}>
//                                     <span style={{marginRight:24+"px"}}>
//                                         <input style={{height:40+'px'}} type="text" placeholder="Enter Competitors" />
//                                     </span>
//                                     <span>
//                                         <button class="outline-btn">Add</button>
//                                     </span>
//                                 </div>
//                             </>
//                             :
//                             <></>
//                         }
//                         {maindropselection == "Keywords" ?
//                             <>
//                                 <div style={{display:"inline-block",width:100+"%"}}>
//                                     <span style={{marginRight:24+"px"}}>
//                                         <input style={{height:40+'px'}} type="text" placeholder="Enter Keywords" />
//                                     </span>
//                                     <span>
//                                         <button class="outline-btn">Add</button>
//                                     </span>
//                                 </div>
//                             </>
//                             :
//                             <></>
//                         }
//                     </div>
//                 </div>
//                 <hr />
//                 {tabledropselection == "URL"
//                     ?
//                     <>
//                         <div className="tab-panel-url-options">
//                             <span>
//                                 <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
//                                     {settaburlList(
//                                     searchdataURLTab.filter(person =>
//                                     person.url.includes(nameSearch)
//                                     )
//                                     );console.log(nameSearch)}
//                                     }
//                                     id="input-s"
//                                 />
//                             </span>
//                             <span>
//                                 <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
//                                     <option value="URL">URL</option>
//                                     <option value="Competitors">Competitors</option>
//                                     <option value="Keywords">Keywords</option>
                                    
//                                 </select>
//                             </span>
//                             <span class="export">
//                             <button class="outline-btn ">Import</button>
//                         </span>
//                         <span class="export" style={{marginRight:0+'px'}}>
                            
//                             <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Export
//                             </button>
//                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                 <a class="dropdown-content" href="#">Excel</a>
//                                 <a class="dropdown-content" href="#">CSV</a>
//                                 <a class="dropdown-content" href="#">Sheets</a>
//                             </div>
                            
//                         </span>
//                         </div>
//                         <Table id="url" columns={URLTabcol} dataSource={taburllist}
//                         rowSelection={{type: selectionTypeURLTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
//                     </>
//                     :
//                     <>
//                     </>
//                 }
//                 {tabledropselection == "Competitors" ? 
//                     <>
//                         <div className="tab-panel-url-options">
//                             <span>
//                                 <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
//                                     {settabcompList(
//                                     searchdataCompTab.filter(person =>
//                                     person.comp.includes(nameSearch)
//                                     )
//                                     );console.log(nameSearch)}
//                                     }
//                                     id="input-s"
//                                 />
//                             </span>
//                             <span>
//                                 <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
//                                     <option value="URL">URL</option>
//                                     <option value="Competitors">Competitors</option>
//                                     <option value="Keywords">Keywords</option>
//                                 </select>
//                             </span>
//                             <span class="export">
//                             <button class="outline-btn ">Import</button>
//                         </span>
//                         <span class="export" style={{marginRight:0+'px'}}>
                            
//                                     <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         Export
//                                     </button>
//                                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                         <a class="dropdown-content" href="#">Excel</a>
//                                         <a class="dropdown-content" href="#">CSV</a>
//                                         <a class="dropdown-content" href="#">Sheets</a>
//                                     </div>
                            
//                         </span>
//                         </div>
//                         <Table id="url" columns={CompTabcol} dataSource={tabcomplist}
//                         rowSelection={{type: selectionTypeCompTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
//                     </>
//                     :
//                     <></>
//                 }
//                 {
//                     tabledropselection == "Keywords" ? <>
//                     <div className="tab-panel-url-options">
//                             <span>
//                                 <Input.Search allowClear placeholder="Search By name" onSearch={nameSearch=>
//                                     {settabkeywordList(
//                                     searchdataKeywordTab.filter(person =>
//                                     person.keyword.includes(nameSearch)
//                                     )
//                                     );console.log(nameSearch)}
//                                     }
//                                     id="input-s"
//                                 />
//                             </span>
//                             <span>
//                                 <select name="" id="select-type-table" value={tabledropselection} onChange={()=>{settabledropselection(document.getElementById('select-type-table').value)}}>
//                                     <option value="URL">URL</option>
//                                     <option value="Competitors">Competitors</option>
//                                     <option value="Keywords">Keywords</option>
//                                 </select>
//                             </span>
//                             <span class="export">
//                             <button class="outline-btn ">Import</button>
//                         </span>
//                         <span class="export" style={{marginRight:0+'px'}}>
                            
//                                     <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         Export
//                                     </button>
//                                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                         <a class="dropdown-content" href="#">Excel</a>
//                                         <a class="dropdown-content" href="#">CSV</a>
//                                         <a class="dropdown-content" href="#">Sheets</a>
//                                     </div>
                            
//                         </span>
//                         </div>
//                         <Table id="url" columns={KeywordTabcol} dataSource={tabkeywordlist}
//                         rowSelection={{type: selectionTypeKeywordTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
//                     </> :<></>
//                 }
//                 </div>
//                 <div className="custom-column-70 none" id="create-project">
//                     <CreateProject />
//                 </div>
//                 <div className="custom-column-70 none" id="account-settings">
//                     Account Settings
//                 </div>
//                 <div className="custom-column-70 none" id="profile">
//                     Profile
//                 </div>
//                 <div className="custom-column-70 none" id="admin">
//                     Admin
//                 </div>
                
//                 {/* Access Permissions Expand */}
//                 <div className="custom-column-70 none ModuleExpandDesignation" id="access-permissions">
//                     <div className="row ">
//                         <div className="col-md-3 my-3 my-md-0"><h2>Access Permissions</h2></div>
//                         <div className="col-md-5 "></div>
//                         <div className="col-md-4 add-new-btnw">
//                             <select id="choose" onChange={()=>{setoption(document.getElementById('choose').value)}} class="common-mr-24">
//                                 <option value="Director">Director</option>
//                                 <option value="HR">HR</option>
//                                 <option value="Sales">Sales</option>
//                                 <option value="SEO">SEO</option>
//                             </select>
//                             <button className="outline-btn" onClick={checkbox}>Save</button>
//                         </div>
                        
//                     </div>
//                     <div className="designation-box mt-5">
//                         <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
//                             <div className="col-2 ">
//                                 <h4>Client</h4>
//                             </div>
//                     {
//                         data.map(item=>{
//                             if(item.designation==option){
//                                 return(
//                                     item.clientDataFields.map(item=>{
//                                         return(
//                                         <div className="col-md-2">
//                                             <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}}  style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                        
//                                         </div>
//                                         )
//                                     })     
//                                 )     
//                             } 
//                         }) 
//                     }
                    
//                     </div>
//                     </div>
//                     <div className="designation-box">

//                         <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
//                             <div className="col-md-2 ">
//                                 <h4>Team Member</h4>
//                             </div>
//                             {
//                         data.map(item=>{
//                             if(item.designation==option){
//                                 return(
//                                     item.teamMemberDataFields.map(item=>{
//                                         return(
//                                         <div className="col-md-2">
//                                             <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
//                                         </div>
//                                         )
//                                     })     
//                                 )     
//                             } 
//                         }) 
//                     }
//                         </div>
//                     </div>
//                     <div className="designation-box">

//                         <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
//                             <div className="col-md-2 ">
//                                 <h4>Modules</h4>
//                             </div>
//                             {
//                                 data.map(item=>{
//                                     if(item.designation==option){
//                                         return(
//                                             item.modulesDataFields.map(item=>{
//                                                 return(
//                                                 <div className="col-md-2">
//                                                     <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
//                                                 </div>
//                                                 )
//                                             })     
//                                         )     
//                                     } 
//                                 }) 
//                             }
//                         </div>
//                     </div>
//                     <div className="designation-box">

//                         <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
//                             <div className="col-md-2 ">
//                                 <h4>Projects</h4>
//                             </div>
//                             {
//                                 data.map(item=>{
//                                     if(item.designation==option){
//                                         return(
//                                             item.projectsDataFields.map(item=>{
//                                                 return(
//                                                 <div className="col-md-2">
//                                                     <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
//                                                 </div>
//                                                 )
//                                             })     
//                                         )     
//                                     } 
//                                 }) 
//                             }
//                             <div className="col-md-2"></div>
//                         </div>
//                     </div>
//                     <div className="designation-box">

//                         <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
//                             <div className="col-md-2 ">
//                                 <h4>Project Configurations</h4>
//                             </div>
//                             {
//                                 data.map(item=>{
//                                     if(item.designation==option){
//                                         return(
//                                             item.projectConfigDataFields.map(item=>{
//                                                 return(
//                                                 <div className="col-md-2">
//                                                     <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
//                                                 </div>
//                                                 )
//                                             })     
//                                         )     
//                                     } 
//                                 }) 
//                     }
//                         <div className="col-md-2"></div>
//                         <div className="col-md-2"></div>

//                         </div>
//                     </div>
//                 </div>
            
//                 {/* Audit Expand */}
//                 <div className="custom-column-70 none" id="audit">
//                     <div class="row">
//                         <div class="col-sm-5 pad-lzero">
//                             <div class="main-title">Audit</div>
//                         </div>
//                         <div class="col-sm-7 add-new-btnw">
//                             <a style={{color:"#fff"}} class="outline-btn" onClick={()=>{handleAddAudit()}}>Add New Module</a>
//                         </div>
//                     </div>        
//                     <div class="common-table" >
//                         <div class="row common-mb-24">
//                             <div class="col-md-5">
//                             </div>
//                             <div class="col-md-7">
//                                 <div class="data-export-client">
//                                     <span class="count-drop">
//                                     </span>
//                                     <span class="common-mr-24">
//                                     <Input.Search
//                                         allowClear
//                                         placeholder="Search By name"
//                                         onSearch={nameSearch =>
//                                             {setDataAudit(
//                                                 searchdataAudit.filter(person =>
//                                                 person.modulename.includes(nameSearch)
//                                                 )
//                                             );console.log(nameSearch)}
//                                         }
//                                         id="input-s"
//                                     />
//                                     </span>
//                                     <span class="export" style={{marginRight:0+'px'}}>
//                                         <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             Export
//                                         </button>
//                                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                             <a class="dropdown-content" href="#">Excel</a>
//                                             <a class="dropdown-content" href="#">CSV</a>
//                                             <a class="dropdown-content" href="#">Sheets</a>
//                                         </div>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <Table id="sample" columns={AuditCol} dataSource={DataAudit} rowSelection={{type: selectionTypeAudit,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
//                     </div>
//                 </div>
//             </div>

//           </div>
//         </div>


//       </section>
//         <Modal show={show} onHide={()=>handleModal()} className="edit-project">  
//             <Modal.Header closeButton>Update Allocation</Modal.Header>  
//             <Modal.Body>
                    
//                 {optionSelected && optionSelected.map((i)=>{
//                     return(
//                         <div class="row">
//                             <div class="col-md-8">
//                                 <div class="common-wrapper">

//                                     <div class="common-wcard">

//                                         <div class="common-form-fields">

//                                             <div class="add-user">
//                                                 <div class="form-wrappers">
//                                                     <label>Name:</label>
//                                                     <input type="text" name="" placeholder="Ankit" value={i.value} disabled />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Role:</label>
//                                                     <input type="text" name="" placeholder="Sr SEO" disabled />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Location:</label>
//                                                     <input type="text" name="" placeholder="Bangalore" disabled />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Billing Start Date</label>
//                                                     <input type="date" name="" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Billing End Date</label>
//                                                     <input type="date" name="" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Percentage Allocation</label>
//                                                     <input type="text" name="" placeholder="Enter %" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Preffered Time Zone</label>
//                                                     <input type="text" name="" placeholder="Enter start time" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label></label>
//                                                     <input type="text" name="" placeholder="Enter start time" />
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     </div>
//                             </div>
//                             <div class="col-md-3">
//                                 <div id="piechart">
//                                     <Chart chartType="PieChart" data={piedata} options={pieOptions} graph_id="PieChart" width={"100%"} legend_toggle/>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </Modal.Body>  
//             <Modal.Footer>  
//             <Button onClick={()=>handleModal()}>UPDATE</Button>  
            
//             </Modal.Footer>  
//         </Modal>
//         <Modal show={show1} onHide={()=>handleModal1()} className="edit-project">  
//             <Modal.Header closeButton>UPDATE ALLOCATION</Modal.Header>  
//             <Modal.Body>
            
//                         <div class="row">
//                             <div class="col-md-8">
//                                 <div class="common-wrapper">

//                                     <div class="common-wcard">

//                                         <div class="common-form-fields">

//                                             <div class="add-user">
                                                
//                                                 <div class="form-wrappers">
//                                                     <label>Billing Start Date</label>
//                                                     <input type="date" name="" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Billing End Date</label>
//                                                     <input type="date" name="" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Percentage Allocation</label>
//                                                     <input type="text" name="" placeholder="Enter %" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label>Preffered Time Zone</label>
//                                                     <input type="text" name="" placeholder="Enter start time" />
//                                                 </div>

//                                                 <div class="form-wrappers">
//                                                     <label></label>
//                                                     <input type="text" name="" placeholder="Enter start time" />
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     </div>
//                             </div>
//                             <div class="col-md-3">
//                                 <div class="box">
//                                     <h4 class="box-title">Chosen Team Members</h4>
//                                     {optionSelected && optionSelected.map((i)=>{
//                                         return(
//                                             <div class="row">
//                                                 <div class="col-md-6">
//                                                     <span class="box-name">{i.value} (20%)</span>
                                                    
//                                                 </div>
//                                                 <div class="col-md-6">
//                                                     <span class="box-close">X</span>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
                    
//             </Modal.Body>  
//             <Modal.Footer>  
//             <Button onClick={()=>handleModal1()}>UPDATE</Button>   
//             </Modal.Footer>  
//         </Modal> 
//         <Modal show={EditAuditModal} onHide={()=>handleEditAudit()} className="audit-modal">  
//             <Modal.Header closeButton>EDIT MODULE</Modal.Header>  
//             <Modal.Body>
//                 <EditAudit />  
//             </Modal.Body>  
//             <Modal.Footer>  
//                 <ul class="form-action-wrapper">
//                     <li><a href="#" class="ol-btn">Cancel</a></li>
//                     <li><a href="#" class="outline-btn">Save</a></li>
//                 </ul>
//             </Modal.Footer>  
//         </Modal>  
//         <Modal show={AddAuditModal} onHide={()=>handleAddAudit()} className="audit-modal">  
//             <Modal.Header closeButton>ADD MODULE</Modal.Header>  
//             <Modal.Body>
//                 <AddNewModuleAudit />  
//             </Modal.Body>  
//             <Modal.Footer>  
//                 <ul class="form-action-wrapper">
//                     <li><a href="#" class="ol-btn">Cancel</a></li>
//                     <li><a href="#" class="outline-btn">Save</a></li>
//                 </ul>
//             </Modal.Footer>  
//         </Modal>                         
//     </>
//   );
// }


// function TableRowDAPA(props){
//   const [optionSelectedURL, setoptionSelectedURL] = useState(props.optionSelectedURL);
//   function handleChangeURL(selected){
//       setoptionSelectedURL(selected);
//   };
//   const [optionSelectedComp, setoptionSelectedComp] = useState(props.optionSelectedComp);
//   function handleChangeComp(selected){
//       setoptionSelectedComp(selected);
//   };
//   const [expand, setexpand] = useState(false);

//   const openinp = (id) =>{
//       console.log(id)
//      var tagid="urlinputbox"+id;
//      document.getElementById(tagid).classList.remove('none');
//   }
//   const [urlinputslist,seturlinputslist] = useState([]);
//   const [compinputslist, setcominputslist] = useState([]);
//   const handleKeyPress = (event) => {
      
//       if(event.key === 'Enter'){
//       var id = (event.target.id).replace('inputaddurl','');
//       var data = [];
//       urlinputslist.map((i)=>{
//           data.push(i)
//       })
//       data.push(event.target.value);
//       seturlinputslist(data);
//       event.target.value="";
//       var tagid="urlinputbox"+id;
//       document.getElementById(tagid).classList.add('none');
      
//       }
//     }
//     const opencomp = (id) =>{
//       var tagid="compinputbox"+id;
//       document.getElementById(tagid).classList.remove('none');
//    }
//    const handleKeyPresscomp = (event) => {
       
//        if(event.key === 'Enter'){
//        var id = (event.target.id).replace('inputaddcomp','');
//       var data = [];
//       compinputslist.map((i)=>{
//           data.push(i)
//       })
//       data.push(event.target.value);
//       setcominputslist(data);
//        event.target.value="";
//        var tagid="compinputbox"+id;
//        document.getElementById(tagid).classList.add('none');
//        }
     
//      }
//      function removeitemlist(a, type){
      
//       if(type=="comp"){
//           var list = compinputslist;
//           setcominputslist(list.filter(item => item !== a))
//       }
//       if(type=="url"){
//           var list = urlinputslist;
//           seturlinputslist(list.filter(item => item !== a))
//       }
//      }

//   return(
//       <>
//           <tr>
//               <td>{props.id}</td>
//               <td>{props.modulename}</td>
//               <td style={{textAlign:"end"}}> 
//                   <i className="fa fa-trash trash-module"></i> 
//                   <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
//                       {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
//                   </button> 
//               </td>
//           </tr>
//           <tr className={expand?"":"none"}>
//               <td colspan="4">
//                   <div >
//                       <div class="module-description">  
//                           <div class="common-wrapper"> 
//                               <div class="common-wcard"> 
//                                   <div class="common-form-fields"> 
//                                       <div class="add-user"> 
//                                           <div style={{display:"flex"}}> 
//                                               <div class="form-wrappers"> 
//                                                   <label>Url's</label> 
//                                                   <div style={{display:"flex"}}> 
//                                                       <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} />
//                                                       <button style={{ border: "none", background: "none",     }} id={"addinp1"} onClick={(e)=>openinp("da")}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
//                                                   </div> 
//                                                   <div style={{marginTop:24+'px'}} className="none" id={"urlinputboxda"}> 
//                                                       <div class="form-wrappers"> 
//                                                           <label></label> 
//                                                           <input type="text" name="" placeholder="Value" id={"inputaddurlda"} onKeyPress={handleKeyPress} /> 
//                                                       </div> 
//                                                   </div> 
//                                                   <div > 
//                                                       <ul className="input-list" id={"urlinputsda"} style={{marginTop:24+'px'}}> 
//                                                           {urlinputslist && urlinputslist.map((i)=>{
//                                                               return(
//                                                                   <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"url")}}></i></li>
//                                                               )
//                                                           })}
//                                                       </ul> 
//                                                   </div> 
//                                               </div> 
//                                               <div class="form-wrappers"> 
//                                                   <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
//                                                   <select name="" id="">
//                                                       <option value="Daily">Daily</option>
//                                                       <option value="Weekly">Weeklt</option>
//                                                       <option value="Fornightly">Fornightly</option>
//                                                       <option value="Monthly">Monthly</option>
//                                                   </select> 
//                                               </div> 
//                                           </div> 
//                                           <div class="form-wrappers"> 
//                                               <label>Competitors</label> 
//                                               <div style={{display:"flex"}}> 
//                                                   <ReactSelect options={props.OptionsComp} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeComp} allowSelectAll={true} value={optionSelectedComp} /> 
//                                                   <button style={{ border: "none", background: "none" }} id={"addcomp1"} onClick={(e)=>opencomp(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
//                                               </div> 
//                                               <div style={{marginTop:24+'px'}} className="none" id={"compinputbox1"}> 
//                                                   <div class="form-wrappers"> 
//                                                       <label></label> 
//                                                       <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddcomp1"} onKeyPress={handleKeyPresscomp} /> 
//                                                   </div> 
//                                               </div> 
//                                               <div > 
//                                                   <ul className="input-list" id={"compinputs1"} style={{marginTop:24+'px'}}>
//                                                   {compinputslist && compinputslist.map((i)=>{
//                                                       return(
//                                                           <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"comp")}}></i> </li>
//                                                       )
//                                                   })}
//                                                   </ul> 
//                                               </div> 
//                                           </div> 
//                                       </div> 
//                                   </div> 
//                               </div> 
//                               <ul class="form-action-wrapper">  
//                                   <li><a href="#" class="outline-btn">Update</a></li> 
//                               </ul> 
//                           </div> 
//                       </div>
//                   {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
//                   </div>
//               </td>
//           </tr>
//       </>
//   )
// }

// function TableRowGT(props){
//   const [KeywordGoogleTrendsSelected, setKeywordGoogleTrendsSelected] = useState(props.KeywordGoogleTrendsSelected);
//   function handleChangeKeyword(selected){
//       setKeywordGoogleTrendsSelected(selected);
//   };
//   const [keywordGTinputslist, setkeywordGTinputslist] = useState([]);
//   const openkeywordGT = (id) =>{
//       var tagid="keywordGT"+id;
//       document.getElementById(tagid).classList.remove('none');
//    }
//    const handleKeyPresskeywordGT = (event) => {
       
//        if(event.key === 'Enter'){
//        var id = (event.target.id).replace('inputaddkeywordGT','');
//       var data = [];
//       keywordGTinputslist.map((i)=>{
//           data.push(i)
//       })
//       data.push(event.target.value);
//       setkeywordGTinputslist(data);
//        event.target.value="";
//        var tagid="keywordGT"+id;
//        document.getElementById(tagid).classList.add('none');
//        }
     
//      }
//      function removeitemlist(a, type){
      
//       var list = keywordGTinputslist;
//       setkeywordGTinputslist(list.filter(item => item !== a))
//      }
//   const [expand, setexpand] = useState(false);
//   return(
//       <>
//           <tr>
//               <td>{props.id}</td>
//               <td>{props.modulename}</td>
//               <td style={{textAlign:"end"}}> 
//                   <i className="fa fa-trash trash-module"></i> 
//                   <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
//                       {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
//                   </button> 
//               </td>
//           </tr>
//           <tr className={expand?"":"none"}>
//               <td colspan="4">
//                   <div >
//                       <div class="module-description">  
//                           <div class="common-wrapper"> 
//                               <div class="common-wcard"> 
//                                   <div class="common-form-fields"> 
//                                       <div class="add-user"> 
//                                           <div class="form-wrappers"> 
//                                               <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
//                                               <br/>
//                                               <select name="" id="keywordGTFrequency">
//                                                   <option value="Daily">Daily</option>
//                                                   <option value="Weekly">Weeklt</option>
//                                                   <option value="Fornightly">Fornightly</option>
//                                                   <option value="Monthly">Monthly</option>
//                                               </select> 
//                                           </div> 
                                          
//                                           <div class="form-wrappers"> 
//                                               <label>Keyword</label> 
//                                               <div style={{display:"flex"}}> 
//                                                   <ReactSelect options={props.KeywordsGT} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeKeyword} allowSelectAll={true} value={KeywordGoogleTrendsSelected} /> 
//                                                   <button style={{ border: "none", background: "none" }} id={"addkeywordGT1"} onClick={(e)=>openkeywordGT(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
//                                               </div> 
//                                               <div style={{marginTop:24+'px'}} className="none" id={"keywordGT1"}> 
//                                                   <div class="form-wrappers"> 
//                                                       <label></label> 
//                                                       <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddkeywordGT1"} onKeyPress={handleKeyPresskeywordGT} /> 
//                                                   </div> 
//                                               </div> 
//                                               <div > 
//                                                   <ul className="input-list" id={"keywordGTinputs1"} style={{marginTop:24+'px'}}>
//                                                   {keywordGTinputslist && keywordGTinputslist.map((i)=>{
//                                                       return(
//                                                           <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"keywordGT")}}></i> </li>
//                                                       )
//                                                   })}
//                                                   </ul> 
//                                               </div> 
//                                           </div> 
//                                       </div> 
//                                   </div> 
//                               </div> 
//                               <ul class="form-action-wrapper">  
//                                   <li><a href="#" class="outline-btn">Update</a></li> 
//                               </ul> 
//                           </div> 
//                       </div>
//                   {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
//                   </div>
//               </td>
//           </tr>
//       </>
//   )
// }

// function TableRowPS(props){
//   const [UrlPSSelected, setUrlPSSelected] = useState(props.UrlPSSelected);
//   function handleChangeUrlPS(selected){
//       setUrlPSSelected(selected);
//   };
//   const [UrlPSinputslist, setUrlPSinputslist] = useState([]);
//   const openUrlPS = (id) =>{
//       var tagid="UrlPS"+id;
//       document.getElementById(tagid).classList.remove('none');
//    }
//    const handleKeyPressUrlPS = (event) => {
       
//        if(event.key === 'Enter'){
//        var id = (event.target.id).replace('inputaddUrlPS','');
//       var data = [];
//       UrlPSinputslist.map((i)=>{
//           data.push(i)
//       })
//       data.push(event.target.value);
//       setUrlPSinputslist(data);
//        event.target.value="";
//        var tagid="UrlPS"+id;
//        document.getElementById(tagid).classList.add('none');
//        }
     
//      }
//      function removeitemlist(a, type){
      
//       var list = UrlPSinputslist;
//       setUrlPSinputslist(list.filter(item => item !== a))
//      }
//   const [expand, setexpand] = useState(false);
//   return(
//       <>
//           <tr>
//               <td>{props.id}</td>
//               <td>{props.modulename}</td>
//               <td style={{textAlign:"end"}}> 
//                   <i className="fa fa-trash trash-module"></i> 
//                   <button className="expand-button" onClick={()=>{setexpand(!expand)}}>
//                       {expand? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
//                   </button> 
//               </td>
//           </tr>
//           <tr className={expand?"":"none"}>
//               <td colspan="4">
//                   <div >
//                       <div class="module-description">  
//                           <div class="common-wrapper"> 
//                               <div class="common-wcard"> 
//                                   <div class="common-form-fields"> 
//                                       <div class="add-user"> 
//                                           <div class="form-wrappers"> 
//                                               <label htmlFor="" style={{marginRight:24+'px'}}>Set Frequency</label>
//                                               <br/>
//                                               <select name="" id="UrlPSFrequency">
//                                                   <option value="Daily">Daily</option>
//                                                   <option value="Weekly">Weeklt</option>
//                                                   <option value="Fornightly">Fornightly</option>
//                                                   <option value="Monthly">Monthly</option>
//                                               </select> 
//                                           </div> 
                                          
//                                           <div class="form-wrappers"> 
//                                               <label>Keyword</label> 
//                                               <div style={{display:"flex"}}> 
//                                                   <ReactSelect options={props.UrlPSList} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeUrlPS} allowSelectAll={true} value={UrlPSSelected} /> 
//                                                   <button style={{ border: "none", background: "none" }} id={"addUrlPS1"} onClick={(e)=>openUrlPS(1)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button> 
//                                               </div> 
//                                               <div style={{marginTop:24+'px'}} className="none" id={"UrlPS1"}> 
//                                                   <div class="form-wrappers"> 
//                                                       <label></label> 
//                                                       <input style={{width:25+'em'}} type="text" name="" placeholder="Value" id={"inputaddUrlPS1"} onKeyPress={handleKeyPressUrlPS} /> 
//                                                   </div> 
//                                               </div> 
//                                               <div > 
//                                                   <ul className="input-list" id={"UrlPSinputs1"} style={{marginTop:24+'px'}}>
//                                                   {UrlPSinputslist && UrlPSinputslist.map((i)=>{
//                                                       return(
//                                                           <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeitemlist(i,"UrlPS")}}></i> </li>
//                                                       )
//                                                   })}
//                                                   </ul> 
//                                               </div> 
//                                           </div> 
//                                       </div> 
//                                   </div> 
//                               </div> 
//                               <ul class="form-action-wrapper">  
//                                   <li><a href="#" class="outline-btn">Update</a></li> 
//                               </ul> 
//                           </div> 
//                       </div>
//                   {/* <ReactSelect options={props.OptionsURL} isMulti closeMenuOnSelect={false} hideSelectedOptions={false} components={{ Option }} onChange={handleChangeURL} allowSelectAll={true} value={optionSelectedURL} /> */}
//                   </div>
//               </td>
//           </tr>
//       </>
//   )
// }

// function EditAudit(props){
//     const [notes1,setnotes1] = useState([]);
//     useEffect(()=>{
//         var data=[];
//         data = []
//         data.push({
//             id:1,
//             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,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"
//                 }
//             ]
//         })
//         data.push({
//             id:2,
//             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRISERgYHBUYGBISEhEREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLDAxNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYjISE0NDQxNDU0ND80MTQ0NDQ0MTQ0NDE0NDY1MTE0NDQ0NDQ0NDQ0NDQ0NDY2MTQxNDQ0Nf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMCAwYEBAUEAgMAAAABAgADESESMQQFQSJRYXGBkQYTscEyQqHwFVJy0eEUI2KCkrIkQ6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDBAEDAwUAAAAAAAAAAQIRAxIhMQRBUWGBE3GxIkLwBTKRocH/2gAMAwEAAhEDEQA/APIBIGjM06cygkwUjnsWftA0XvNBSQJDUFmZ0lCaSt4kpGpAmCBIBDVJLR2FidMGOO3vA05lWMJJoTY+X3mZY0bDzP2ksTGEfaA8vXB3kgLIizHMMQCk0TGhZMdSFx7/AEi9MNWt7D6QGyXhqIlZopC8TRLNCYAgtkQ1WQrYSGxCLQ2GYVoBMAAeDqlVDmBeUkUNVt4tjKEhOB6ykgAY4lK0kphmOhmmk98S2mdHsYav+/WTpFRckp3zJKodG8LKIjJdsTmMhF5IRFveURGANoBjXGIpd40NBKJRSXeFC6AVowYsr18Zo0ynSNSGmZykYoxGFJNEeoLE6cw1WGaf79JQisLFuOkC+DHP3xWmUmNAWktHfLlMkdhYq31jqOIurv6wkO0bdjNy2gVGtFF4p3vI0k0Gz3z5RZeKLyMdpaiVQ12x6xF5ciiVQFrIReVbMZaIAEWUywpbCACTIsYySgkdjKvJL0yR2B0VN/0jgsFEh3nJZkJdYJOIxmgERgC+3tMhvNj7RNsS4lIGkd45RFotjHgRSYmVaWBLkkiLIi2jjFGAAhpRHZ/f76SMISi8tDFqIB3j2WIdYJjQwHaQLLS140LiDExGmAyWmnTAcRqQJmVniWePqiZXmsdzREDQmMC8pzvLoqhivGrEIcR6SGSwgtz7QgM/r+sYqbS9ODM7JszkQgLn2jHWDt+kpMLCdYqG5lWzHYwNMkfiSAWdBsRbmEz3i2nKYgGQy9MkooB2goJKkEG0pIYxYZaILSaoaQobeGIpYxTFQi2i6hz7fSMUxb5MQEEYqwEEdE2Jg6cRWnPofpNBGIBWNSGmLppGiRBaWdo3IGwTM7maGEU6RRYIyu0y1Mmba6YmMCxnTE1iAgyfCRllKYbbzQooR1IwGXAPnLWTJCZtR5Km0UjdkeZ+0PXewmbiRRSyMMQS9jCLfSKgoWDvKLSr/eWoxLoqg9Mku0qTYjeVzC0TQ9EqSDggkEeINjLCTmMxGmJqLNjpEMhJAALE2AAFySeggthIyOIu06XMeXPR069ALg2VW1MLDN8WHSc5+kuMlJXF2i6BjEG0ErHIJTYmWqZHnCGCPOWptKtken1iTELLRdWsqjUxsJbnSCTsJ1fgnkY42s1SoA1KlYaG2dzlQR1AGT5iRlnHHB5JcL/fo0x49ToRy7lHG1lDLQVEI1K1aotPUvQhctY99p7PhvgqkUVm4hySAeyiAC4vbJN5OdcIyFuIYBmpK2g62VcgqpZRg2vv4Rf+tZQAHYAWAyRtieS/6hKS1JKn47ejphghKWmTUfbD4j4Gv+DiR4K9Ow/8lJ+k4XH/AA7xFDtPT1IN3pnWg87ZX1AnoaPOKg66xvm17CdThOfrcB+wc742wZUOtly06Fk6ZR4aftM+Zyp6/wCKOAov26QVH3ZUsFbrcr0PiPUdR5Az0YvVFS8nNPHKCTfD4Lg7mWdvWCPtLRmhbpMTJn1m4NMrkZm0DWJiqpaCIysMxbTcsZfHvJeUpltAQWvpBSpYwGMUcmFBRp13MZrxMamFqioKH3jUbFvKZbxqNFJAzXpki9ckzomj2KMtcBWslT8r2sr/APFvHx/ZwVKLIxVhpI6RYnf4dxXQXt8xLWY7HzHUHrOHI/pPV+38Er9X3OGyzscl4HSPmsMm4TwHVvX6ecztwBauEA0hrH+ldz9/0noKpCkKALDYdMeE5euzpY1GPf8AA4Rtni+b1TVqM17gdlfIfsn1nN+V+/SdrmHEfMctgAYUKAot328d4PD8rqOLqlh/MxCL7nf0nbiqEEntSJfO25yGT9+ksrNvE8KUwWRj3Iwe3naI0zRNS3RLFIsb8uGE28vuY0WAJOwBJ8gM/SNDONxatUqJw9MandkW18anwoPcOpPdPtXwz8PJwfDrRU62uWepa2t23NugwAB3AT5F8AOH5pTdj0rOP6vlsAPYn2E+4LXnL12WMUscuOTuxQaWxn47g1dHRgCrqysD1DCxnzn4ho/6dgiVGc2uVcKwUHa7fiv6z6gal583+NuHC8SWH50Rj5i6fRROLpccJZK7eB5708Hnl49h0HoSI/8AixIsy6h4m/72mQ04Pyp6kMcMbuKPOkr/AJQvjuKcEMnzLYOGBI9OsL5mrtWsTv5wzTlMTgHpgbbXJ+pMpy7HZPqnkxaJq2qp99gScSusMiLaCORCWSZKwtNdR7TI73m8DWIiobkyrSNKvNmyxj7+n+Zdsen3gBv36QnP2iQhTCUBYywf35CC7SkMHrCJgqJTCMA1MJWgdZZEloBweXEapIqFR7yhwKNg1qanFtyPc2jjw78O4LDBxcfhI8/1mBDOxywrUvTfJ02RuthnT9xPPyRlpak7TM402dThimX/ADabemTb9+E53Es73VAWZsDuA6knpi8HhnPaW99wSPA2h8RxZRLLbUx3tmw2/X7TxoQc8qXNf84NnsjPT4ZaYJVVquty1SpYUUtuc727z3dJy+J4t6mWqaxt2WunpbEJna5JZiTubm5i9M9iEJJ3J2YtqqQkLKdM+00MsEpNiRInO+IeL0UrdX7Itvbr9p19M8j8U1dddKdwqqouxuQNRySB3ACXj3kXBWzHyDm54aulUC+gnb/kLH9CZ9h5X8SpVF0qK3/G9mHmJ8JZRYnx3jPmspFmK9ldiR+UTHq+hj1FNumjuhl0qj9FpzYW/wAzx3OeYrxNQupDIBoVhkEKTcjwvf0tPmScdWK6PmvZsaS5AN8ZuZ7rldEpSpqRYqqgjx05/WYYOg+g3Ju3wjLqMuqKSD+XJ8qaBLtOqjjMwpzO6zc6zHVEekkU0RUGfQfSNaKrb47h9BGikYuJeZbx/EIYlCVIINrHe2rHXHUeHWbxqjWIJaxB6jOdsRxAR0fJQlXU96hsjzFiD4iHxPDXBdMWy9MG+kH86H8yG++4vnoTODdWBpOQqNlah/8ArfYN/ScBvCx/KINpqyhHEUijlD0Nr946HyIsfWLYGwPQkgelif8A2E6PG0GalqYaXoH5VRTvozob0sVv3BYHG8G3zEooCW0qoB72ZnJPo2/cJMZpqnzvfwBgti9sbX6X7os5vOrzrhRR0Ub3ZQXcnB11LWUjpZFTHeTOVNYu1YBtvIN5SNmWYwIRuYAMvVuPL7yWsYDLtJCkgI9lxPDNTPa26ObAHbIztmHwvEBWVwwNipuD+/GeT4XnDPhrk5N+hK7alvkeEFK7I+kdvAwNR3HQ3/TacVSlceH+QWJH0Fl0M3QMTb3v95j4qoSwB3AF/Pcj0vb0mBOYsWT8NiFJu3SwLfrM9DmKuNRbtXNwSACb/lY7zjw49E3Kh5IuqR0SJNMzJxNgxawIJKjcFRsTfY/2jw5K69NgWIuAQuobgToWRN1x9zBxaL0yikJlYbgj99e6TVKTUladioDTPnfxIx/1NXzUemlf7CfRWafO/iJf/kVfNf1UGbY+TTFycrVDDXI9B7C0hXB9PrBQ5m5uanzYDchRjvsBPpIa1h5Tw/w7wYqVRe9k7Z8bEWHv9DPbsJlN70YZH2DV4YaIURqiQZls0xVjNdQTO6XicgMgltTjClpLSGwM1WniZGo9MepAHXqZ1GSZ6lPEuM2NSM3COFZUqakF+xUUf7iE9V/nQ3N18SRnc+M4EgkWXVpLAU806ib66f3Xpm21gC1XT8JxuVYBkPmpwZv4DiVqL8rSKT3L0aiMdC1BnSAblQ1tr2vbAg5NPUuO5qnZq+GnV2UuofAoVVOz02BNNj4gqUv3Mk7XK+ADcfUqsLKiUwrNtcrYt6Kje5nn+Vt8rikJQolUOrUzjQ43S3g6oR4FZ3ua13agKVFdT1Lp2bbEnUSegC6hc4GqcXUSazJR2Ul/jyUjwvOeO+dXqVBs7sV/pGE//IEzUKLubIjOe5FZz7Cej/h/DcN2HDcbX606YLU0PcR1/wCwP9MTxPHcSRpHDfLTonyHZR6MNI9FE71m2SgtvL2QHLpcrqE2sFI3BOpx5ol2HqIFeiq4vqbqQw0j2vf3HlD4jiazCztU0/ym6J/4iy/pM6maR1PeTXwIWRmWN5DvLImiAZokitRkjACrwBpg3Ra2Aww4tfvsw1Dw/wAg5V5xUC6QUXcdmlRSwxcCyXHneenanncjf6YnL4zgVY76b72tm2xz5mc8b/duOMzOnHBhYAqbrdg1wb7WDfhyB1tAfjbu2oaTgabhQCoAN7nBNh/mM/0CWIOo33sBuL/pt7S+J4Is2pCEwBpYGxIOcx0rspys28u4tSbVNTA4DdoG5PRuu/lnrPScz4qgiItEMtzc0yx0npgdDe+Z4qtRq01XSSTpOtcGw65Pdc+8RUqOUV2dc9nSey+MXC/mFuov4yNKk/Q01VHq63NHYsKZLAZVagS4t0NtzY9IHAcxfXd6bFCMqrBGOMFbg4x3H+3EoK4pmrYMlyD33ABI/fdMy83dcXHU9pRcGxsLi1+kyeHtFKkS1Z7ZuLpsABhiSBm4I8xjqNpx3+HjxPEtnSmhWd8BrgFQFuMkkLnoDOG/FOoVw4Ia7C3QqRi3Tce4m3hueBQO2AxAFzi17Fhjpv6gS4RlBp8ruS41wcGvwjqWQowIJUg9CDteJXhH6IxPcBcz1tDmIAfUA+sG5Nj1N2GfERnBU7uCqX3YAFQbW3/UfvEt5ZW0lsdUPotPVafrgP4Z5eaVLW1tT72INguynuObkeM7JM08Oq0rtUS6uVUrbDEmw0kfmzjYxnEUBoV1AVCt7uwDA3ZWU+NxFkuk4q759HC4ycnaMYxaXqkenc9g6/DZvQHf0hjh3vp0m9ibHGLXvnwBPpFuxOLXYreCUjKaE7DV/T2vpLfs/iIW2TdlFvOSLS/Ahkg/Lj1AOzIfJlMIoEYhiuLgkMGXIxlTJtBpdmPRAde7fw3muoqCw1kmxJARrLboe/0mb+IqmFIRjftZ17XxcXUdLj3k6k1sr+BqErHLwHEEXNR6QtcfMqOl/ISqvJyReoyIcFOJp20atwHK4t44YeMzn4hNEqQ9VxaxVQWFxbshmtYdr9Js4X4vpEWam6avxa9BU+dj9pjP612lsu6N/p0uTqcz4cPTQuoRwyN2f51Cqc9xUtnuVT0l06hCsqEX2ze5IW+kAEFj4AjznJ4zm6llVCpXpdlVV8M/ht7Q24EMgZ/lltT2NZnang7oiYffdj9bTF45SmnLZI0cNjz3Hcye5VUKWJFqigsP+lgieQW/iYunzauBiq6+CHQPZbCegqBXH+8q1GVtPzGoBeyLroBDi6g5vvjuxM9Xk9J1LUw1PTbWquK2m4uCUvqAIB2LWttPQhOHDj80ZOLRyW5vxJAvWqN/UQ3XxmapxDt+J2Phew9hibX4S3VW8Vvb9QDBHCzZaF/akvgjUcxllOZ034SZ6nCy1JApI595Jr+RJHqRVnacXvMtZMR2qQi4mJknRgIIjErWxYH3H0jHSJKZvL5KTHOEbcd2Olgb28r2jFRNGgopGcDBN985tMFzHKxhpFuA3L0amEYsvWysQAc5sMFrYuZza/KO2FWppVrdrSGOB3Y7p19RhIlzJprhlKTR52vy10Ufhe+q+knFjne3d9YPD0daMLBXUqNWNL3NrHxGJ6d6AYEEAjumTmFIJRfSoWym1gBa8dtlKZy6tB6TFGIJtqsL4Ude4DcQV4xhpOog74uLHYzLR5iysrsA57SsTuy2GD7zPTqgkBjYDF8kARpPuWej4bnjhR2i1jsRchji+cWiuJ46ooQ1NYuCwLHssCTnxsb+0ocsASm6AuH0FlbO9sWGSpO81NwNVj2r0wC6fK1uVUq2cE7MQdvCS3peyE5mehzJ0YsLs2381u8nGRjrNic5rBy6vodbEl1VgpvbIPsRkGZX5K/So1r3sT34tj0xF1+T1RvUDnc6Sb46nHahrT9BrT7nUTjAzayAmoG5Ts9onJAHQ39InjOJCHDX8c39xbM57curhgmqn4ENdbYtcgHwl8Ry3iQDcLa4Fg4bUTjA94bc2W5Rqi6nMmUizHzazW8v8eMg5/U1AaVZb7G97WtjxG4JvMFbl9RXCOArEKfBQbgE28QZtq/DvEKBpVHufyONQv1N7C3rE4QbtkWkaqXPyGDWZjswqBCNrYOQcXtgfeaeO5mjIGOk6rG5XtLk4/T9Z56pwrJq1KQAdJNtQDDcX2veHw2tgURRUvZiLG/YINx7W64aChFU4lJ19jdx3MhqUFfyi66cLqJJsO/SReZRzEAsVUC/4BoDWGx28vczT/C2qB3Ysls7bk7g32G2Y3hfh3UAzvoscqASQtrixvvc7+UHpS3Jc0xC8WpS4AJIYsLi2tc/h3nY+Huamox4fW6rWUICxB0VSDoZelr2Uj82vO05HA8uLVGTViz6je9+gJAxqyY1+UvRamyuhIcFQCdVwVKscbAge8TUWqNNfY7nBc9K7uyOBZkVs3Fr4/6nvt5R38dRibknqAwBI3/Cd5xeb8kdq9V6bLZmaopN862LhB5XtOW/Kq6As4QBepf6AbxwqtmJzTe56vguecOrEOocHYGmGswIxq3se17jxnRTm3BMQGp001YW1Rwb9bgHHr3T5w1OppL/AC20jd7NpHmekPhteq5RlG93UlTtYdrB/wAS2thfp8H0ZK/CMbaWtYW01L5Pcf7xCpwr37VRBcgNrRhceGnw7/aeY5JxdN0emyH5hvpZEReoF79LWB9TFVqaj5qs7/7TFcAMr2BOeq48+szurTCoPsd35I/KCR0Opf7STk1q1dTZfw2GnSo06SARbPcRJMLl5QVHwjo1JWqXVWAqzqo5ggLy3pxlNIwiTwTZz2owkpTWVkCw1DsUtLMalKGohKIOQrJ8uZua0gaT+X3E3CDWphlK94IiT3GnueB/091A7ift/aKr8KROq6FWta3aIJPT065xKNMnpqHeN894nTR0WdXlNS1FATsLexM1HiCck38TvOZSfSoA/e8JX+0hxMmtzpDiZHrXFr28fXac+8gJi0i0m53uLAC5IF/M9TOitTxv4zjUzNlAzOUafoUuDoVEDjy/djNKAAADoJkpzQhmdK7Jvag9CkEFVIbcECx8++c3huWJScsikBwfHSbg2HcP7TpCWZVgpNCTBIjmSRkibAzLRXJCqD2TcKATbAuRI6A2JAJGx7vKN0wXElbDcmxDtF1XvggEdQciOZJldZcQItUbAADutiOqBXGlxqB6GY2p5jUBlbAxFD4f0PrFRNBDWVGLVBnZsYj6HJUUsSWcMblWtbwvYZtczXTeGXxBq9xuUmYanJqRN/8AcGALCo4GABjPhJNeqSIWp+TOFvLFOHTEaBG2KwEX9+kFhHhYtlisBQEu0mmGqxNgRFhhYSJGBYgAUSoUq0dAc/juWo5udQubnSbZ7/AzI3BKvVvW1/e07RWY+Ipy4yfkpSZyKi5xBRZoqUswUTM0suwQkeiR1OnHpTmbkS5GZac00llssimJuyGzYkYGEyh8QWqGTQG0vItSYGqSxVhQqOmGvCaYqVWPDyWhhmLeGWlQAWVimpzRAMAMzUpFpzYFxAdIWKzNeQiG6yKJdjAvJC0SQsBaxqySRsBvSDJJIBAmEJJI2JhrLWSSCEC0gkklFFjeIqSSRIDBV3iTKkllo1UZpEuSZy5IZTbRTSSRgQSpJIAC0hlyRgNpTQskkkA1hCSSQwIJGkkggCWRpJIwEVIsSSSgJJJJGB//2Q=="
//                 }
//             ]
//         })
//         data.push({
//             id:3,
//             description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,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"
//                 }
//             ]
//         })
//         setnotes1(data);
//     },[])
//     function addnewimg1(event,id) {
//         var a = notes1.filter(item => item.id == id)
//         var b = a[0].input;
//         b.push({imgsrc:URL.createObjectURL(event.target.files[0])});
//         a[0].input = b;
//         console.log(a)
//         var data = [];
//         notes1.map((i)=>{
//             if(i.id == id){
//                 data.push(a[0])
//             }
//             else{
//                 data.push(i);
//             }
//         })
//         setnotes1(data);
//       }
//       function addnote1(){
//         var note = "helo";
//         var data = [];
//         var id = 0;
//         notes1.map((i)=>{
//             data.push(i);
//             id+=1;
//         })
//         data.push({
//             id:id+1,
//             description:"",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,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"
//                 }
//             ]
//         })
//         setnotes1(data);
//     }
//     function openinp1(id){
        
//         var a = "fileMy1-"+id;
//         document.getElementById(a).click();
//     }
//     return(
//         <>
           
//             <div class="common-wrapper">

//                 <div class="common-wcard">

//                     <div class="common-form-fields">

//                         <div class="add-user">
//                             <div class="form-wrappers">
//                                 <label>Audit Module</label>
//                                 <input type="text" name="" placeholder="Audit Module 1 " disabled />
//                             </div>

//                             <div class="form-wrappers">
//                                 <label>Audit Point Title</label>
//                                 <input type="text" name="" placeholder="Title" disabled />
//                             </div>

//                             <div class="form-wrappers">
//                                 <label>Description</label>
//                             </div>
                        
//                             {notes1 && notes1.map((i, index)=>{
//                                 return(
//                                     <div className="description-box-outer">
//                                         <textarea name="" id={i.id}>{i.description}</textarea>
//                                         <div class="images-description">
//                                         {i.input.map((j)=>{
//                                             return(
//                                                 <img src={j.imgsrc}/>
//                                             )
//                                         })}
//                                         <button class="file-btn" onClick={()=>{openinp1(i.id)}}><i class="fa fa-plus"></i></button>
//                                         <input type='file' id={`fileMy1-${i.id}`} class="none" onChange={(e)=>addnewimg1(e,i.id)}></input>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
                            
//                             <ul class="form-action-wrapper">
                                
//                                 <li><button class="outline-btn" onClick={()=>{addnote1()}}>Add new</button></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//                 {/* <ul class="form-action-wrapper">
//                     <li><a href="#" class="ol-btn">Cancel</a></li>
//                     <li><a href="#" class="outline-btn">Save</a></li>
//                 </ul> */}
//             </div>
//         </>
//     )
// }

// function AddNewModuleAudit(props){
//     const [notes,setnotes] = useState([]);
//     useEffect(()=>{
//         var data=[];
        
//         data.push({
//             id:1,
//             description:"",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRISERgYHBUYGBISEhEREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLDAxNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYjISE0NDQxNDU0ND80MTQ0NDQ0MTQ0NDE0NDY1MTE0NDQ0NDQ0NDQ0NDQ0NDY2MTQxNDQ0Nf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMCAwYEBAUEAgMAAAABAgADESESMQQFQSJRYXGBkQYTscEyQqHwFVJy0eEUI2KCkrIkQ6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDBAEDAwUAAAAAAAAAAQIRAxIhMQRBUWGBE3GxIkLwBTKRocH/2gAMAwEAAhEDEQA/APIBIGjM06cygkwUjnsWftA0XvNBSQJDUFmZ0lCaSt4kpGpAmCBIBDVJLR2FidMGOO3vA05lWMJJoTY+X3mZY0bDzP2ksTGEfaA8vXB3kgLIizHMMQCk0TGhZMdSFx7/AEi9MNWt7D6QGyXhqIlZopC8TRLNCYAgtkQ1WQrYSGxCLQ2GYVoBMAAeDqlVDmBeUkUNVt4tjKEhOB6ykgAY4lK0kphmOhmmk98S2mdHsYav+/WTpFRckp3zJKodG8LKIjJdsTmMhF5IRFveURGANoBjXGIpd40NBKJRSXeFC6AVowYsr18Zo0ynSNSGmZykYoxGFJNEeoLE6cw1WGaf79JQisLFuOkC+DHP3xWmUmNAWktHfLlMkdhYq31jqOIurv6wkO0bdjNy2gVGtFF4p3vI0k0Gz3z5RZeKLyMdpaiVQ12x6xF5ciiVQFrIReVbMZaIAEWUywpbCACTIsYySgkdjKvJL0yR2B0VN/0jgsFEh3nJZkJdYJOIxmgERgC+3tMhvNj7RNsS4lIGkd45RFotjHgRSYmVaWBLkkiLIi2jjFGAAhpRHZ/f76SMISi8tDFqIB3j2WIdYJjQwHaQLLS140LiDExGmAyWmnTAcRqQJmVniWePqiZXmsdzREDQmMC8pzvLoqhivGrEIcR6SGSwgtz7QgM/r+sYqbS9ODM7JszkQgLn2jHWDt+kpMLCdYqG5lWzHYwNMkfiSAWdBsRbmEz3i2nKYgGQy9MkooB2goJKkEG0pIYxYZaILSaoaQobeGIpYxTFQi2i6hz7fSMUxb5MQEEYqwEEdE2Jg6cRWnPofpNBGIBWNSGmLppGiRBaWdo3IGwTM7maGEU6RRYIyu0y1Mmba6YmMCxnTE1iAgyfCRllKYbbzQooR1IwGXAPnLWTJCZtR5Km0UjdkeZ+0PXewmbiRRSyMMQS9jCLfSKgoWDvKLSr/eWoxLoqg9Mku0qTYjeVzC0TQ9EqSDggkEeINjLCTmMxGmJqLNjpEMhJAALE2AAFySeggthIyOIu06XMeXPR069ALg2VW1MLDN8WHSc5+kuMlJXF2i6BjEG0ErHIJTYmWqZHnCGCPOWptKtken1iTELLRdWsqjUxsJbnSCTsJ1fgnkY42s1SoA1KlYaG2dzlQR1AGT5iRlnHHB5JcL/fo0x49ToRy7lHG1lDLQVEI1K1aotPUvQhctY99p7PhvgqkUVm4hySAeyiAC4vbJN5OdcIyFuIYBmpK2g62VcgqpZRg2vv4Rf+tZQAHYAWAyRtieS/6hKS1JKn47ejphghKWmTUfbD4j4Gv+DiR4K9Ow/8lJ+k4XH/AA7xFDtPT1IN3pnWg87ZX1AnoaPOKg66xvm17CdThOfrcB+wc742wZUOtly06Fk6ZR4aftM+Zyp6/wCKOAov26QVH3ZUsFbrcr0PiPUdR5Az0YvVFS8nNPHKCTfD4Lg7mWdvWCPtLRmhbpMTJn1m4NMrkZm0DWJiqpaCIysMxbTcsZfHvJeUpltAQWvpBSpYwGMUcmFBRp13MZrxMamFqioKH3jUbFvKZbxqNFJAzXpki9ckzomj2KMtcBWslT8r2sr/APFvHx/ZwVKLIxVhpI6RYnf4dxXQXt8xLWY7HzHUHrOHI/pPV+38Er9X3OGyzscl4HSPmsMm4TwHVvX6ecztwBauEA0hrH+ldz9/0noKpCkKALDYdMeE5euzpY1GPf8AA4Rtni+b1TVqM17gdlfIfsn1nN+V+/SdrmHEfMctgAYUKAot328d4PD8rqOLqlh/MxCL7nf0nbiqEEntSJfO25yGT9+ksrNvE8KUwWRj3Iwe3naI0zRNS3RLFIsb8uGE28vuY0WAJOwBJ8gM/SNDONxatUqJw9MandkW18anwoPcOpPdPtXwz8PJwfDrRU62uWepa2t23NugwAB3AT5F8AOH5pTdj0rOP6vlsAPYn2E+4LXnL12WMUscuOTuxQaWxn47g1dHRgCrqysD1DCxnzn4ho/6dgiVGc2uVcKwUHa7fiv6z6gal583+NuHC8SWH50Rj5i6fRROLpccJZK7eB5708Hnl49h0HoSI/8AixIsy6h4m/72mQ04Pyp6kMcMbuKPOkr/AJQvjuKcEMnzLYOGBI9OsL5mrtWsTv5wzTlMTgHpgbbXJ+pMpy7HZPqnkxaJq2qp99gScSusMiLaCORCWSZKwtNdR7TI73m8DWIiobkyrSNKvNmyxj7+n+Zdsen3gBv36QnP2iQhTCUBYywf35CC7SkMHrCJgqJTCMA1MJWgdZZEloBweXEapIqFR7yhwKNg1qanFtyPc2jjw78O4LDBxcfhI8/1mBDOxywrUvTfJ02RuthnT9xPPyRlpak7TM402dThimX/ADabemTb9+E53Es73VAWZsDuA6knpi8HhnPaW99wSPA2h8RxZRLLbUx3tmw2/X7TxoQc8qXNf84NnsjPT4ZaYJVVquty1SpYUUtuc727z3dJy+J4t6mWqaxt2WunpbEJna5JZiTubm5i9M9iEJJ3J2YtqqQkLKdM+00MsEpNiRInO+IeL0UrdX7Itvbr9p19M8j8U1dddKdwqqouxuQNRySB3ACXj3kXBWzHyDm54aulUC+gnb/kLH9CZ9h5X8SpVF0qK3/G9mHmJ8JZRYnx3jPmspFmK9ldiR+UTHq+hj1FNumjuhl0qj9FpzYW/wAzx3OeYrxNQupDIBoVhkEKTcjwvf0tPmScdWK6PmvZsaS5AN8ZuZ7rldEpSpqRYqqgjx05/WYYOg+g3Ju3wjLqMuqKSD+XJ8qaBLtOqjjMwpzO6zc6zHVEekkU0RUGfQfSNaKrb47h9BGikYuJeZbx/EIYlCVIINrHe2rHXHUeHWbxqjWIJaxB6jOdsRxAR0fJQlXU96hsjzFiD4iHxPDXBdMWy9MG+kH86H8yG++4vnoTODdWBpOQqNlah/8ArfYN/ScBvCx/KINpqyhHEUijlD0Nr946HyIsfWLYGwPQkgelif8A2E6PG0GalqYaXoH5VRTvozob0sVv3BYHG8G3zEooCW0qoB72ZnJPo2/cJMZpqnzvfwBgti9sbX6X7os5vOrzrhRR0Ub3ZQXcnB11LWUjpZFTHeTOVNYu1YBtvIN5SNmWYwIRuYAMvVuPL7yWsYDLtJCkgI9lxPDNTPa26ObAHbIztmHwvEBWVwwNipuD+/GeT4XnDPhrk5N+hK7alvkeEFK7I+kdvAwNR3HQ3/TacVSlceH+QWJH0Fl0M3QMTb3v95j4qoSwB3AF/Pcj0vb0mBOYsWT8NiFJu3SwLfrM9DmKuNRbtXNwSACb/lY7zjw49E3Kh5IuqR0SJNMzJxNgxawIJKjcFRsTfY/2jw5K69NgWIuAQuobgToWRN1x9zBxaL0yikJlYbgj99e6TVKTUladioDTPnfxIx/1NXzUemlf7CfRWafO/iJf/kVfNf1UGbY+TTFycrVDDXI9B7C0hXB9PrBQ5m5uanzYDchRjvsBPpIa1h5Tw/w7wYqVRe9k7Z8bEWHv9DPbsJlN70YZH2DV4YaIURqiQZls0xVjNdQTO6XicgMgltTjClpLSGwM1WniZGo9MepAHXqZ1GSZ6lPEuM2NSM3COFZUqakF+xUUf7iE9V/nQ3N18SRnc+M4EgkWXVpLAU806ib66f3Xpm21gC1XT8JxuVYBkPmpwZv4DiVqL8rSKT3L0aiMdC1BnSAblQ1tr2vbAg5NPUuO5qnZq+GnV2UuofAoVVOz02BNNj4gqUv3Mk7XK+ADcfUqsLKiUwrNtcrYt6Kje5nn+Vt8rikJQolUOrUzjQ43S3g6oR4FZ3ua13agKVFdT1Lp2bbEnUSegC6hc4GqcXUSazJR2Ul/jyUjwvOeO+dXqVBs7sV/pGE//IEzUKLubIjOe5FZz7Cej/h/DcN2HDcbX606YLU0PcR1/wCwP9MTxPHcSRpHDfLTonyHZR6MNI9FE71m2SgtvL2QHLpcrqE2sFI3BOpx5ol2HqIFeiq4vqbqQw0j2vf3HlD4jiazCztU0/ym6J/4iy/pM6maR1PeTXwIWRmWN5DvLImiAZokitRkjACrwBpg3Ra2Aww4tfvsw1Dw/wAg5V5xUC6QUXcdmlRSwxcCyXHneenanncjf6YnL4zgVY76b72tm2xz5mc8b/duOMzOnHBhYAqbrdg1wb7WDfhyB1tAfjbu2oaTgabhQCoAN7nBNh/mM/0CWIOo33sBuL/pt7S+J4Is2pCEwBpYGxIOcx0rspys28u4tSbVNTA4DdoG5PRuu/lnrPScz4qgiItEMtzc0yx0npgdDe+Z4qtRq01XSSTpOtcGw65Pdc+8RUqOUV2dc9nSey+MXC/mFuov4yNKk/Q01VHq63NHYsKZLAZVagS4t0NtzY9IHAcxfXd6bFCMqrBGOMFbg4x3H+3EoK4pmrYMlyD33ABI/fdMy83dcXHU9pRcGxsLi1+kyeHtFKkS1Z7ZuLpsABhiSBm4I8xjqNpx3+HjxPEtnSmhWd8BrgFQFuMkkLnoDOG/FOoVw4Ia7C3QqRi3Tce4m3hueBQO2AxAFzi17Fhjpv6gS4RlBp8ruS41wcGvwjqWQowIJUg9CDteJXhH6IxPcBcz1tDmIAfUA+sG5Nj1N2GfERnBU7uCqX3YAFQbW3/UfvEt5ZW0lsdUPotPVafrgP4Z5eaVLW1tT72INguynuObkeM7JM08Oq0rtUS6uVUrbDEmw0kfmzjYxnEUBoV1AVCt7uwDA3ZWU+NxFkuk4q759HC4ycnaMYxaXqkenc9g6/DZvQHf0hjh3vp0m9ibHGLXvnwBPpFuxOLXYreCUjKaE7DV/T2vpLfs/iIW2TdlFvOSLS/Ahkg/Lj1AOzIfJlMIoEYhiuLgkMGXIxlTJtBpdmPRAde7fw3muoqCw1kmxJARrLboe/0mb+IqmFIRjftZ17XxcXUdLj3k6k1sr+BqErHLwHEEXNR6QtcfMqOl/ISqvJyReoyIcFOJp20atwHK4t44YeMzn4hNEqQ9VxaxVQWFxbshmtYdr9Js4X4vpEWam6avxa9BU+dj9pjP612lsu6N/p0uTqcz4cPTQuoRwyN2f51Cqc9xUtnuVT0l06hCsqEX2ze5IW+kAEFj4AjznJ4zm6llVCpXpdlVV8M/ht7Q24EMgZ/lltT2NZnang7oiYffdj9bTF45SmnLZI0cNjz3Hcye5VUKWJFqigsP+lgieQW/iYunzauBiq6+CHQPZbCegqBXH+8q1GVtPzGoBeyLroBDi6g5vvjuxM9Xk9J1LUw1PTbWquK2m4uCUvqAIB2LWttPQhOHDj80ZOLRyW5vxJAvWqN/UQ3XxmapxDt+J2Phew9hibX4S3VW8Vvb9QDBHCzZaF/akvgjUcxllOZ034SZ6nCy1JApI595Jr+RJHqRVnacXvMtZMR2qQi4mJknRgIIjErWxYH3H0jHSJKZvL5KTHOEbcd2Olgb28r2jFRNGgopGcDBN985tMFzHKxhpFuA3L0amEYsvWysQAc5sMFrYuZza/KO2FWppVrdrSGOB3Y7p19RhIlzJprhlKTR52vy10Ufhe+q+knFjne3d9YPD0daMLBXUqNWNL3NrHxGJ6d6AYEEAjumTmFIJRfSoWym1gBa8dtlKZy6tB6TFGIJtqsL4Ude4DcQV4xhpOog74uLHYzLR5iysrsA57SsTuy2GD7zPTqgkBjYDF8kARpPuWej4bnjhR2i1jsRchji+cWiuJ46ooQ1NYuCwLHssCTnxsb+0ocsASm6AuH0FlbO9sWGSpO81NwNVj2r0wC6fK1uVUq2cE7MQdvCS3peyE5mehzJ0YsLs2381u8nGRjrNic5rBy6vodbEl1VgpvbIPsRkGZX5K/So1r3sT34tj0xF1+T1RvUDnc6Sb46nHahrT9BrT7nUTjAzayAmoG5Ts9onJAHQ39InjOJCHDX8c39xbM57curhgmqn4ENdbYtcgHwl8Ry3iQDcLa4Fg4bUTjA94bc2W5Rqi6nMmUizHzazW8v8eMg5/U1AaVZb7G97WtjxG4JvMFbl9RXCOArEKfBQbgE28QZtq/DvEKBpVHufyONQv1N7C3rE4QbtkWkaqXPyGDWZjswqBCNrYOQcXtgfeaeO5mjIGOk6rG5XtLk4/T9Z56pwrJq1KQAdJNtQDDcX2veHw2tgURRUvZiLG/YINx7W64aChFU4lJ19jdx3MhqUFfyi66cLqJJsO/SReZRzEAsVUC/4BoDWGx28vczT/C2qB3Ysls7bk7g32G2Y3hfh3UAzvoscqASQtrixvvc7+UHpS3Jc0xC8WpS4AJIYsLi2tc/h3nY+Huamox4fW6rWUICxB0VSDoZelr2Uj82vO05HA8uLVGTViz6je9+gJAxqyY1+UvRamyuhIcFQCdVwVKscbAge8TUWqNNfY7nBc9K7uyOBZkVs3Fr4/6nvt5R38dRibknqAwBI3/Cd5xeb8kdq9V6bLZmaopN862LhB5XtOW/Kq6As4QBepf6AbxwqtmJzTe56vguecOrEOocHYGmGswIxq3se17jxnRTm3BMQGp001YW1Rwb9bgHHr3T5w1OppL/AC20jd7NpHmekPhteq5RlG93UlTtYdrB/wAS2thfp8H0ZK/CMbaWtYW01L5Pcf7xCpwr37VRBcgNrRhceGnw7/aeY5JxdN0emyH5hvpZEReoF79LWB9TFVqaj5qs7/7TFcAMr2BOeq48+szurTCoPsd35I/KCR0Opf7STk1q1dTZfw2GnSo06SARbPcRJMLl5QVHwjo1JWqXVWAqzqo5ggLy3pxlNIwiTwTZz2owkpTWVkCw1DsUtLMalKGohKIOQrJ8uZua0gaT+X3E3CDWphlK94IiT3GnueB/091A7ift/aKr8KROq6FWta3aIJPT065xKNMnpqHeN894nTR0WdXlNS1FATsLexM1HiCck38TvOZSfSoA/e8JX+0hxMmtzpDiZHrXFr28fXac+8gJi0i0m53uLAC5IF/M9TOitTxv4zjUzNlAzOUafoUuDoVEDjy/djNKAAADoJkpzQhmdK7Jvag9CkEFVIbcECx8++c3huWJScsikBwfHSbg2HcP7TpCWZVgpNCTBIjmSRkibAzLRXJCqD2TcKATbAuRI6A2JAJGx7vKN0wXElbDcmxDtF1XvggEdQciOZJldZcQItUbAADutiOqBXGlxqB6GY2p5jUBlbAxFD4f0PrFRNBDWVGLVBnZsYj6HJUUsSWcMblWtbwvYZtczXTeGXxBq9xuUmYanJqRN/8AcGALCo4GABjPhJNeqSIWp+TOFvLFOHTEaBG2KwEX9+kFhHhYtlisBQEu0mmGqxNgRFhhYSJGBYgAUSoUq0dAc/juWo5udQubnSbZ7/AzI3BKvVvW1/e07RWY+Ipy4yfkpSZyKi5xBRZoqUswUTM0suwQkeiR1OnHpTmbkS5GZac00llssimJuyGzYkYGEyh8QWqGTQG0vItSYGqSxVhQqOmGvCaYqVWPDyWhhmLeGWlQAWVimpzRAMAMzUpFpzYFxAdIWKzNeQiG6yKJdjAvJC0SQsBaxqySRsBvSDJJIBAmEJJI2JhrLWSSCEC0gkklFFjeIqSSRIDBV3iTKkllo1UZpEuSZy5IZTbRTSSRgQSpJIAC0hlyRgNpTQskkkA1hCSSQwIJGkkggCWRpJIwEVIsSSSgJJJJGB//2Q=="
//                 }
//             ]
//         })
//         setnotes(data);
//     },[])
//     function addnewimg(event,id) {
//         var a = notes.filter(item => item.id == id)
//         var b = a[0].input;
//         b.push({imgsrc:URL.createObjectURL(event.target.files[0])});
//         a[0].input = b;
//         console.log(a)
//         var data = [];
//         notes.map((i)=>{
//             if(i.id == id){
//                 data.push(a[0])
//             }
//             else{
//                 data.push(i);
//             }
//         })
//         setnotes(data);
//       }
//       function addnote(){
//         var note = "helo";
//         var data = [];
//         var id = 0;
//         notes.map((i)=>{
//             data.push(i);
//             id+=1;
//         })
//         data.push({
//             id:id+1,
//             description:"",
//             input:[
//                 {
//                     imgsrc:"data:image/jpeg;base64,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"
//                 }
//             ]
//         })
//         setnotes(data);
//     }
//     function openinp(id){
        
//         var a = "fileMy-"+id;
//         document.getElementById(a).click();
//     }
//     return(
//         <>
            
            
//             <div class="common-wrapper">

//                 <div class="common-wcard">

//                     <div class="common-form-fields">

//                         <div class="add-user">
//                             <div class="form-wrappers">
//                                 <label>Audit Module</label>
//                                 <input type="text" name="" placeholder="Enter Audit Module" />
//                             </div>

//                             <div class="form-wrappers">
//                                 <label>Audit Point Title</label>
//                                 <input type="text" name="" placeholder="Enter Audit Point Title" />
//                             </div>
                            
//                             <div class="form-wrappers">
//                                 <label>Description</label>
//                             </div>
                            
//                             {notes && notes.map((i, index)=>{
//                                 return(
//                                     <div className="description-box-outer">
//                                         <textarea name="" id={i.id}></textarea>
//                                         <div class="images-description">
//                                         {i.input.map((j)=>{
//                                             return(
//                                                 <img src={j.imgsrc}/>
//                                             )
//                                         })}
//                                         <button class="file-btn" onClick={()=>{openinp(i.id)}}><i class="fa fa-plus"></i></button>
//                                         <input type='file' id={`fileMy-${i.id}`} class="none" onChange={(e)=>addnewimg(e,i.id)}></input>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
                            
//                             <ul class="form-action-wrapper">
                                
//                                 <li><button class="outline-btn" onClick={()=>{addnote()}}>Add new</button></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


                
//             </div>  
//         </>
//     )
// }

// function CreateProject(props){
//     const [filelist,setfilelist] = useState([]);
//     function updateList() {
//         var input = document.getElementById('myfile');
//         const a = []
//         for (var i = 0; i < input.files.length; ++i) {
//             a.push(input.files.item(i).name);
//         }
//         setfilelist(a);
//     }
//     function removeItem(i){
//         var list = filelist;
//         setfilelist(list.filter(item => item !== i))
//     }
//     return(
//         <>
//             <div class="row">
//                     <div class="col-sm-5 pad-lzero">
//                         <div class="main-title">CREATE NEW PROJECT</div>
//                     </div>
//                     <div class="col-sm-7 add-new-btnw">
//                     </div>
//                 </div>

//                 <div class="common-wrapper">

//                     <div class="common-wcard">

//                         <div class="common-form-fields">

//                             <div class="add-user" style={{width:100+'%'}}>
//                                 <div class="form-wrappers">
//                                     <label>Project Code</label>
//                                     <input type="text" name="" placeholder="Enter Project Code" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Customer Name</label>
//                                     <select>
//                                         <option>Myntra</option>
//                                         <option>Infi</option>
//                                     </select>
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Start Date</label>
//                                     <input type="date" name="" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Estimated Completion Date</label>
//                                     <input type="date" name="" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Domain Name</label>
//                                     <input type="text" name="" placeholder="Enter Domain Name" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Cost</label>
//                                     <input type="text" name="" placeholder="Enter Cost" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Location</label>
//                                     <input type="text" name="" placeholder="Enter Location" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>POC</label>
//                                     <input type="text" name="" placeholder="Enter POC" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Contact</label>
//                                     <input type="text" name="" placeholder="Enter Contact" />
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Status</label>
//                                     <select>
//                                         <option>Lead</option>
//                                         <option>Active</option>
//                                         <option value="">Prospect</option>
//                                     </select>
//                                 </div>

//                                 <div class="form-wrappers">
//                                     <label>Document Upload</label>
//                                     <br />
//                                     {/* <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /> */}
//                                     <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>

//                                 </div>
//                                 <div id="fileList">
//                                     <ul>
//                                     {filelist && filelist.map((i, index)=>{
//                                         return(
//                                             <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
//                                         )
//                                     })}
//                                     </ul>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>


//                     <ul class="form-action-wrapper">
//                         <li><a href="#" class="ol-btn">Cancel</a></li>
//                         <li><a href="#" class="outline-btn">Save</a></li>
//                     </ul>
//                 </div>
//         </>
//     )
// }

// export default Configuration;

import {useHistory} from "react-router-dom";


import React, { useState, useEffect } from "react";
import { NotificationSEO, SideNavBarCustom, SideNavBarCustomClosed } from './index'
import { Table, Input,  Row,  Col, Switch, Breadcrumb } from 'antd';
import { default as ReactSelect, components } from "react-select";
import { Button,Modal} from 'react-bootstrap';  
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import EditEmployee from "./EditEmployee";
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
  const [EditAuditModal, setEditAuditModal] = useState(false);
  function handleEditAudit(){
      setEditAuditModal(!EditAuditModal);
  }
  const [AddAuditModal, setAddAuditModal] = useState(false);
  function handleAddAudit(){
      setAddAuditModal(!AddAuditModal);
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
  const [option, setoption] = useState('Director');
    const [data,setData]= useState(
    [
        {
            designation: "Director",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "HR",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "Sales",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        },{
            designation: "SEO",
            clientDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: true
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ] ,
            teamMemberDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "Activate/Deactivate",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            modulesDataFields:[
                {
                    field: "DA/PA Checker",
                    checked: true 
                },
                {
                    field: "Google Trends",
                    checked: false
                },
                {
                    field: "Page Speed",
                    checked: false
                },
                {
                    field: "Click Share",
                    checked: true
                }
            ],
            projectsDataFields:[
                {
                    field: "Add",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                },
                {
                    field: "View",
                    checked: true
                }
            ],
            projectConfigDataFields:[
                {
                    field: "View",
                    checked: true 
                },
                {
                    field: "Update",
                    checked: false
                }
            ]
        }
        
    ])
  const [DataAudit, setDataAudit] = useState([]);//data table for audit
  const [AuditCol, setAuditCol] = useState([]); //column for audit
  const [selectionTypeAudit, setSelectionTypeAudit] = useState('checkbox'); //Audit selection checkbox
  const [searchdataAudit,setsearchAudit] = useState([]); //Audit search box
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
      columns = [];
      columns = [
        {
            title:"Audit Module",
            dataIndex:"modulename",
            key:"modulename",
            width:"15%"
        },
        {
            title:"Actions",
            dataIndex:"actions",
            key:"actions",
            width:"10%"
        },
        {
            title:"",
            dataIndex:"",
            key:"",
            width:"75%"
        }
    ]
    setAuditCol(columns)
    data = []
    data = [
        {
            key:"1",
            modulename:<div>Audit Module 0 <ul class="audit-titles"><li onClick={()=>{changeAuditModalData(1,1)}}>Title 0 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(1,2)}}>Title 1 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(1,3)}}>Title 2 <i class="fa fa-trash"></i></li></ul></div>,
            actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{changeAuditModalData(1,1)}}> View </a><i class="fa fa-trash"></i></div>
        },
        {
            key:"2",
            modulename:<div>Audit Module 1 <ul class="audit-titles"><li onClick={()=>{changeAuditModalData(2,1)}}>Title 0 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(2,2)}}>Title 1 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(2,3)}}>Title 2 <i class="fa fa-trash"></i></li></ul></div>,
            actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{changeAuditModalData(2,1)}}> View </a><i class="fa fa-trash"></i></div>
        },
        {
            key:"3",
            modulename:<div>Audit Module 2 <ul class="audit-titles"><li onClick={()=>{changeAuditModalData(3,1)}}>Title 0 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(3,2)}}>Title 1 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(3,3)}}>Title 2 <i class="fa fa-trash"></i></li></ul></div>,
            actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{changeAuditModalData(3,1)}}> View </a><i class="fa fa-trash"></i></div>
        },
        {
            key:"4",
            modulename:<div>Audit Module 3 <ul class="audit-titles"><li onClick={()=>{changeAuditModalData(4,1)}}>Title 0 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(4,2)}}>Title 1 <i class="fa fa-trash"></i></li><li onClick={()=>{changeAuditModalData(4,3)}}>Title 2 <i class="fa fa-trash"></i></li></ul></div>,
            actions:<div><a class="common-mr-24 view-audit-config" onClick={()=>{changeAuditModalData(4,1)}}> View </a><i class="fa fa-trash"></i></div>
        }
    ]
    setDataAudit(data);
    setsearchAudit(data);
  },[])
  const [EditAuditDataModal, setEditAuditDataModal] = useState([]);
  function changeAuditModalData(moduleid, titleid){
      var data = [{
        module:moduleid,
        title:titleid
    }]
    setEditAuditDataModal(data);
    handleEditAudit();
  }
  function checkbox(){
    console.log(data)
}
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
        document.getElementById('main-col-4').classList.add('none');
        document.getElementById('main-col-1').classList.add('custom-column-30');
        document.getElementById('main-col-1').classList.remove('custom-column-33');
        document.getElementById('angle-1').classList.remove('none');
      }
      else if(id == 2){
        document.getElementById('main-col-1').classList.add('none');
        document.getElementById('main-col-3').classList.add('none');
        document.getElementById('main-col-4').classList.add('none');
        document.getElementById('main-col-2').classList.add('custom-column-30');
        document.getElementById('main-col-2').classList.remove('custom-column-33');
        document.getElementById('angle-2').classList.remove('none');
      }
      else if(id == 3){
        document.getElementById('main-col-2').classList.add('none');
        document.getElementById('main-col-1').classList.add('none');
        document.getElementById('main-col-4').classList.add('none');
        document.getElementById('main-col-3').classList.add('custom-column-30');
        
        document.getElementById('main-col-3').classList.remove('custom-column-33');
        document.getElementById('angle-3').classList.remove('none');
      }
      else if(id == 4){
        document.getElementById('main-col-2').classList.add('none');
        document.getElementById('main-col-1').classList.add('none');
        document.getElementById('main-col-3').classList.add('none');
        document.getElementById('main-col-4').classList.add('custom-borrig');
        document.getElementById('main-col-4').classList.add('custom-column-30');
        document.getElementById('main-col-4').classList.remove('custom-column-33');
        document.getElementById('angle-4').classList.remove('none');
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
      document.getElementById('main-col-4').classList.remove('none'); 
    }
    if(currenttab[0].currentid == 1){
      document.getElementById('main-col-2').classList.remove('none');
      document.getElementById('main-col-3').classList.remove('none');
      document.getElementById('main-col-4').classList.remove('none');
    }
    if(currenttab[0].currentid == 2){
      document.getElementById('main-col-3').classList.remove('none');
      document.getElementById('main-col-1').classList.remove('none');
      document.getElementById('main-col-4').classList.remove('none');
    }
    if(currenttab[0].currentid == 4){
        document.getElementById('main-col-2').classList.remove('none');
        document.getElementById('main-col-1').classList.remove('none');
        document.getElementById('main-col-3').classList.remove('none');
        document.getElementById('main-col-4').classList.remove('custom-borrig'); 
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
    console.log(a)
    var data = [];
    for(let i=0;i<5;i++){
      data.push({value:`${a} Project ${i}`, label:`${a} Project ${i}`})
    }
    setClientsProjectChosenSelected({ value:`${a} Project 0`, label:`${a} Project 0` })
    setClientsProjectChosen(data)
    console.log(data);
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
  const [OrganizationList, setOrganizationList] = useState([
    { value: "InfiDigit", label: "InfiDigit" },
  ])
  const [OrganizationSelected, setOrganizationSelected] = useState({ value: "InfiDigit", label: "InfiDigit" });
  function handleChangeOrganization(selected){
    setOrganizationSelected(selected);
  }
  const [sidenavToggle, setSidenavToggle] = useState(true);
  const [UserList, setUserList] = useState([
    { value: "User 1", label: "User 1" },
    { value: "User 2", label: "User 2" },
    { value: "User 3", label: "User 3" },
  ])
  const [UserSelected, setUserSelected] = useState({ value: "User 1", label: "User 1" });
  function handleChangeUser(selected){
    setUserSelected(selected);
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

        <div className="custom-row-dashboard-seo">
            <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
            <div class="sidebar-nav-bar">
                {sidenavToggle 
                    ?
                    <>
                        
                        <SideNavBarCustom/>
                        <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                        <i class="fa fa-angle-right"></i>
                        </button>
                    </>
                    :
                    <>
                        
                        <SideNavBarCustomClosed/>
                        <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                        <i class="fa fa-angle-right"></i>
                        </button>
                    </>
                }
                
                
                        
            </div>
            </div>
            <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard":"custom-column-90-dashboard-seo main-dashboard"}>
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
                    <h2 className="tab-title-comfiguration">Organizations <i class="fa fa-plus common-ml-24"></i></h2>
                    <ReactSelect
                        className="SearchSelectMain"
                        placeholder="Select or search module"
                        options={OrganizationList}
                        closeMenuOnSelect={true}
                        onChange={handleChangeOrganization}
                        value={OrganizationSelected}
                    />
                    <ul class="configuration-tab-list">
                        <li>
                            <a onClick={()=>{openTab('audit',1)}}>Audit Checklist</a>
                        </li>
                        <li>
                            <a onClick={()=>{openTab('access-permissions',1)}}>Access Permissions</a>
                        </li>
                        <li>
                            <a onClick={()=>{openTab('customize',1)}}>Customize dashboard</a>
                        </li>
                        <li>
                            <a onClick={()=>{openTab('roles',1)}}>Roles</a>
                        </li>
                        <li>
                            <a onClick={()=>{openTab('Employees',1)}}>Employees</a>
                        </li>
                    </ul>
                </div>
                <div className="custom-column-33 custom-borrig" id="main-col-2">
                <i className="fa fa-arrow-left none" id="angle-2" onClick={()=>closeTabs()}></i>
                    {/* <select name="" id="clients" onChange={()=>{changeclient()}}>
                    <option value="Myntra">Myntra</option>
                    <option value="CultFit">CultFit</option>
                    <option value="CureFit">CureFit</option>
                    </select> */}
                    <h2 className="tab-title-comfiguration">Clients <i class="fa fa-plus common-ml-24"></i></h2>
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
                        <a onClick={()=>{openTab('account-settings',2)}}>Account Settings</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('profile',2)}}>Profile</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('admin',2)}}>Admin</a>
                    </li>
                    </ul>
                </div>
                <div className="custom-column-33 custom-borrig" id="main-col-3">
                <i className="fa fa-arrow-left none" id="angle-3" onClick={()=>closeTabs()}></i>
                <h2 className="tab-title-comfiguration">Projects <i onClick={()=>{openTab('create-project',3)}} class="fa fa-plus common-ml-24"></i></h2>
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
                    <ul class="configuration-tab-list projects-list">
                    <li>
                        <a onClick={()=>{openTab('team-members',3)}}>Team Members</a>
                    </li>
                    {/* <li>
                        <a onClick={()=>{openTab('modules',3)}}>Modules</a>
                    </li> */}
                    <li>
                        <a onClick={()=>{openTab('module-da',3)}}>DA / PA Checker <input type="checkbox" /></a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('gt',3)}}>Google Trends</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('page-speed',3)}}>Page Speed</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('Click-share',3)}}>Click Share</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('rank-tracking',3)}}>Rank Tracking</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('SUM',3)}}>Site Uptime Monitor</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('GSC',3)}}>GSC Data Extractor</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('ORM',3)}}>Organic Research Module</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('ROI',3)}}>ROI Calculator</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('CWC',3)}}>Content Word Count on a Page</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('BL',3)}}>BackLinks</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('KR',3)}}>Keyword Research</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('SEOV',3)}}>SEO Volatality</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('GA',3)}}>Google Analytics</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('SEOA',3)}}>SEO Audit</a>
                    </li>
                    <li>
                        <a onClick={()=>{openTab('url-comp',3)}}>Url, Competitors and Keywords</a>
                    </li>
                    </ul>
                </div>
                <div className="custom-column-33" id="main-col-4">
                    <i className="fa fa-arrow-left none" id="angle-4" onClick={()=>closeTabs()}></i>
                    <h2 className="tab-title-comfiguration">Users <i class="fa fa-plus common-ml-24"></i></h2>
                    <ReactSelect
                        className="SearchSelectMain"
                        placeholder="Select or search module"
                        options={UserList}
                        closeMenuOnSelect={true}
                        onChange={handleChangeUser}
                        value={UserSelected}
                    />
                    <ul className="configuration-tab-list">
                        <li>
                            <a onClick={()=>{openTab('customize',4)}}>Customize</a>
                        </li>
                    </ul>
                </div>
                {/* DA Expand */}
                <div className="custom-column-70 none modules-config" id="module-da">
                    <TableRowDAPA id="1" modulename="DA/PA Checker" OptionsURL={OptionsURL} optionSelectedURL={optionSelectedURL} optionSelectedComp={optionSelectedComp} OptionsComp={OptionsComp}  />
                </div>
                {/* Google trends expand */}
                <div className="custom-column-70 none modules-config" id="gt">
                    <TableRowGT id="2" modulename="Google Trends" KeywordsGT={KeywordsGT} KeywordGoogleTrendsSelected={KeywordGoogleTrendsSelected}  />
                </div>
                {/* Page Speed */}
                <div className="custom-column-70 none modules-config" id="page-speed">
                    <TableRowPS id="3" modulename="Page Speed" UrlPSList={UrlPSList} UrlPSSelected={UrlPSSelected}  />
                </div>
                {/* Click Share */}
                <div className="custom-column-70 none" id="Click-share"><div className="main-title">Click Share</div></div>
                {/* Rank tracking Expand */}
                <div className="custom-column-70 none" id="rank-tracking"><div className="main-title">Rank Tracking</div></div>
                {/* Site Uptime Expand */}
                <div className="custom-column-70 none" id="SUM"><div className="main-title">Site Uptime Monitor</div></div>
                {/* GSC Expand */}
                <div className="custom-column-70 none" id="GSC"><div className="main-title">GSC Data Extractor</div></div>
                {/* ORM Expand */}
                <div className="custom-column-70 none" id="ORM"><div className="main-title">Ornagic Research Module</div></div>
                {/* ROI Expand */}
                <div className="custom-column-70 none" id="ROI"><div className="main-title">ROI Calculator</div></div>
                {/* CWC Expand */}
                <div className="custom-column-70 none" id="CWC"><div className="main-title">Content Word Count</div></div>
                {/* BL Expand */}
                <div className="custom-column-70 none" id="BL"><div className="main-title">Back Links</div></div>
                {/* KR Expand */}
                <div className="custom-column-70 none" id="KR"><div className="main-title">Keyword Research</div></div>
                {/* SEOV Expand */}
                <div className="custom-column-70 none" id="SEOV"><div className="main-title">SEO Volatality</div></div>
                {/* GA Expand */}
                <div className="custom-column-70 none" id="GA"><div className="main-title">Google Analytics</div></div>
                {/* SEOA Expand */}
                <div className="custom-column-70 none" id="SEOA"><div className="main-title">SEO Audit</div></div>
                {/* Employees Expand */}
                <div className="custom-column-70 none" id="Employees">
                    <Employees />
                </div>
                {/* Roles Expand */}
                <div className="custom-column-70 none" id="roles">
                    <Roles />
                </div>
                {/* Create Project */}
                <div className="custom-column-70 none" id="create-project">
                    <CreateProject />
                </div>
                {/* Customize Dashbaord */}
                <div className="custom-column-70 none" id="customize">
                    <CustomizeDashboard />
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
                    <div className="col-md-4">
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
                {/* Account Settings Expand */}
                <div className="custom-column-70 none" id="account-settings">
                    Account Settings
                </div>
                {/* Profile Expand */}
                <div className="custom-column-70 none" id="profile">
                    Profile
                </div>
                {/* Admin Expand */}
                <div className="custom-column-70 none" id="admin">
                    Admin
                </div>
                
                {/* Access Permissions Expand */}
                <div className="custom-column-70 none ModuleExpandDesignation" id="access-permissions">
                    <div className="row ">
                        <div className="col-md-3 my-3 my-md-0"><h2>Access Permissions</h2></div>
                        <div className="col-md-5 "></div>
                        <div className="col-md-4 add-new-btnw">
                            <select id="choose" onChange={()=>{setoption(document.getElementById('choose').value)}} class="common-mr-24">
                                <option value="Director">Director</option>
                                <option value="HR">HR</option>
                                <option value="Sales">Sales</option>
                                <option value="SEO">SEO</option>
                            </select>
                            <button className="outline-btn" onClick={checkbox}>Save</button>
                        </div>
                        
                    </div>
                    <div className="designation-box mt-5">
                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-2 ">
                                <h4>Client</h4>
                            </div>
                    {
                        data.map(item=>{
                            if(item.designation==option){
                                return(
                                    item.clientDataFields.map(item=>{
                                        return(
                                        <div className="col-md-2">
                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}}  style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                        
                                        </div>
                                        )
                                    })     
                                )     
                            } 
                        }) 
                    }
                    
                    </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Team Member</h4>
                            </div>
                            {
                        data.map(item=>{
                            if(item.designation==option){
                                return(
                                    item.teamMemberDataFields.map(item=>{
                                        return(
                                        <div className="col-md-2">
                                            <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                        </div>
                                        )
                                    })     
                                )     
                            } 
                        }) 
                    }
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Modules</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.modulesDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Projects</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.projectsDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                            }
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="designation-box">

                        <div className="row my-3 px-3 py-5 align-item-center justify-content-between">
                            <div className="col-md-2 ">
                                <h4>Project Configurations</h4>
                            </div>
                            {
                                data.map(item=>{
                                    if(item.designation==option){
                                        return(
                                            item.projectConfigDataFields.map(item=>{
                                                return(
                                                <div className="col-md-2">
                                                    <label><input defaultChecked={item.checked} onChange={()=>{item.checked=!item.checked}} style={{ madginRight: "10px" }} type="checkbox" /> {item.field} </label>
                                                </div>
                                                )
                                            })     
                                        )     
                                    } 
                                }) 
                    }
                        <div className="col-md-2"></div>
                        <div className="col-md-2"></div>

                        </div>
                    </div>
                </div>
            
                {/* Audit Expand */}
                <div className="custom-column-70 none" id="audit">
                    <div class="row">
                        <div class="col-sm-5 pad-lzero">
                            <div class="main-title">Audit</div>
                        </div>
                        <div class="col-sm-7 add-new-btnw">
                            <a style={{color:"#fff"}} class="outline-btn" onClick={()=>{handleAddAudit()}}>Add New Module</a>
                        </div>
                    </div>        
                    <div class="common-table" >
                        <div class="row common-mb-24">
                            <div class="col-md-5">
                            </div>
                            <div class="col-md-7">
                                <div class="data-export-client">
                                    <span class="count-drop">
                                    </span>
                                    <span class="common-mr-24">
                                    <Input.Search
                                        allowClear
                                        placeholder="Search By name"
                                        onSearch={nameSearch =>
                                            {setDataAudit(
                                                searchdataAudit.filter(person =>
                                                person.modulename.includes(nameSearch)
                                                )
                                            );console.log(nameSearch)}
                                        }
                                        id="input-s"
                                    />
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
                            </div>
                        </div>
                        <Table id="sample" columns={AuditCol} dataSource={DataAudit} rowSelection={{type: selectionTypeAudit,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
                    </div>
                </div>
            </div>
            </div>
        </div>
      
    
        <Modal show={EditAuditModal} onHide={()=>handleEditAudit()} className="audit-modal">  
            <Modal.Header closeButton>EDIT MODULE</Modal.Header>  
            <Modal.Body>
                <EditAudit dataFields={EditAuditDataModal} />  
            </Modal.Body>  
            <Modal.Footer>  
                <ul class="form-action-wrapper">
                    <li><a href="#" class="ol-btn">Cancel</a></li>
                    <li><a href="#" class="outline-btn">Save</a></li>
                </ul>
            </Modal.Footer>  
        </Modal> 

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
                                                    <label>Start Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>End Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Percentage Allocation</label>
                                                    <input type="text" name="" placeholder="Enter %" />
                                                </div>

                                                {/* <div class="form-wrappers">
                                                    <label>Preffered Time Zone</label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label></label>
                                                    <input type="text" name="" placeholder="Enter start time" />
                                                </div> */}

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
                                                    <label> Start Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label> End Date</label>
                                                    <input type="date" name="" />
                                                </div>

                                                <div class="form-wrappers">
                                                    <label>Percentage Allocation</label>
                                                    <input type="text" name="" placeholder="Enter %" />
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
         
        <Modal show={AddAuditModal} onHide={()=>handleAddAudit()} className="audit-modal">  
            <Modal.Header closeButton>ADD MODULE</Modal.Header>  
            <Modal.Body>
                <AddNewModuleAudit />  
            </Modal.Body>  
            <Modal.Footer>  
                <ul class="form-action-wrapper">
                    <li><a href="#" class="ol-btn">Cancel</a></li>
                    <li><a href="#" class="outline-btn">Save</a></li>
                </ul>
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
          {/* <tr>
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
              <td colspan="4"> */}
                <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">DA / PA Checker</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
                </div>
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
              {/* </td>
          </tr> */}
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
          {/* <tr>
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
              <td colspan="4"> */}
              <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">Google Trends</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
                </div>
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
              {/* </td>
          </tr> */}
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
          {/* <tr>
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
              <td colspan="4"> */}
              <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">Page Speed</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
                </div>
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
              {/* </td>
          </tr> */}
      </>
  )
}

function EditAudit(props){
    const [notes1,setnotes1] = useState([]);
    const [moduleid, setmoduleid] = useState(Number);
    const [titleid, settitleid] = useState(Number);
    const [fulldata, setfulldata] = useState([])
    useEffect(()=>{
        var data=[];
        data = [];
        var data1 = [];
        data1.push({
            id:1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRISERgYHBUYGBISEhEREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLDAxNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYjISE0NDQxNDU0ND80MTQ0NDQ0MTQ0NDE0NDY1MTE0NDQ0NDQ0NDQ0NDQ0NDY2MTQxNDQ0Nf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMCAwYEBAUEAgMAAAABAgADESESMQQFQSJRYXGBkQYTscEyQqHwFVJy0eEUI2KCkrIkQ6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDBAEDAwUAAAAAAAAAAQIRAxIhMQRBUWGBE3GxIkLwBTKRocH/2gAMAwEAAhEDEQA/APIBIGjM06cygkwUjnsWftA0XvNBSQJDUFmZ0lCaSt4kpGpAmCBIBDVJLR2FidMGOO3vA05lWMJJoTY+X3mZY0bDzP2ksTGEfaA8vXB3kgLIizHMMQCk0TGhZMdSFx7/AEi9MNWt7D6QGyXhqIlZopC8TRLNCYAgtkQ1WQrYSGxCLQ2GYVoBMAAeDqlVDmBeUkUNVt4tjKEhOB6ykgAY4lK0kphmOhmmk98S2mdHsYav+/WTpFRckp3zJKodG8LKIjJdsTmMhF5IRFveURGANoBjXGIpd40NBKJRSXeFC6AVowYsr18Zo0ynSNSGmZykYoxGFJNEeoLE6cw1WGaf79JQisLFuOkC+DHP3xWmUmNAWktHfLlMkdhYq31jqOIurv6wkO0bdjNy2gVGtFF4p3vI0k0Gz3z5RZeKLyMdpaiVQ12x6xF5ciiVQFrIReVbMZaIAEWUywpbCACTIsYySgkdjKvJL0yR2B0VN/0jgsFEh3nJZkJdYJOIxmgERgC+3tMhvNj7RNsS4lIGkd45RFotjHgRSYmVaWBLkkiLIi2jjFGAAhpRHZ/f76SMISi8tDFqIB3j2WIdYJjQwHaQLLS140LiDExGmAyWmnTAcRqQJmVniWePqiZXmsdzREDQmMC8pzvLoqhivGrEIcR6SGSwgtz7QgM/r+sYqbS9ODM7JszkQgLn2jHWDt+kpMLCdYqG5lWzHYwNMkfiSAWdBsRbmEz3i2nKYgGQy9MkooB2goJKkEG0pIYxYZaILSaoaQobeGIpYxTFQi2i6hz7fSMUxb5MQEEYqwEEdE2Jg6cRWnPofpNBGIBWNSGmLppGiRBaWdo3IGwTM7maGEU6RRYIyu0y1Mmba6YmMCxnTE1iAgyfCRllKYbbzQooR1IwGXAPnLWTJCZtR5Km0UjdkeZ+0PXewmbiRRSyMMQS9jCLfSKgoWDvKLSr/eWoxLoqg9Mku0qTYjeVzC0TQ9EqSDggkEeINjLCTmMxGmJqLNjpEMhJAALE2AAFySeggthIyOIu06XMeXPR069ALg2VW1MLDN8WHSc5+kuMlJXF2i6BjEG0ErHIJTYmWqZHnCGCPOWptKtken1iTELLRdWsqjUxsJbnSCTsJ1fgnkY42s1SoA1KlYaG2dzlQR1AGT5iRlnHHB5JcL/fo0x49ToRy7lHG1lDLQVEI1K1aotPUvQhctY99p7PhvgqkUVm4hySAeyiAC4vbJN5OdcIyFuIYBmpK2g62VcgqpZRg2vv4Rf+tZQAHYAWAyRtieS/6hKS1JKn47ejphghKWmTUfbD4j4Gv+DiR4K9Ow/8lJ+k4XH/AA7xFDtPT1IN3pnWg87ZX1AnoaPOKg66xvm17CdThOfrcB+wc742wZUOtly06Fk6ZR4aftM+Zyp6/wCKOAov26QVH3ZUsFbrcr0PiPUdR5Az0YvVFS8nNPHKCTfD4Lg7mWdvWCPtLRmhbpMTJn1m4NMrkZm0DWJiqpaCIysMxbTcsZfHvJeUpltAQWvpBSpYwGMUcmFBRp13MZrxMamFqioKH3jUbFvKZbxqNFJAzXpki9ckzomj2KMtcBWslT8r2sr/APFvHx/ZwVKLIxVhpI6RYnf4dxXQXt8xLWY7HzHUHrOHI/pPV+38Er9X3OGyzscl4HSPmsMm4TwHVvX6ecztwBauEA0hrH+ldz9/0noKpCkKALDYdMeE5euzpY1GPf8AA4Rtni+b1TVqM17gdlfIfsn1nN+V+/SdrmHEfMctgAYUKAot328d4PD8rqOLqlh/MxCL7nf0nbiqEEntSJfO25yGT9+ksrNvE8KUwWRj3Iwe3naI0zRNS3RLFIsb8uGE28vuY0WAJOwBJ8gM/SNDONxatUqJw9MandkW18anwoPcOpPdPtXwz8PJwfDrRU62uWepa2t23NugwAB3AT5F8AOH5pTdj0rOP6vlsAPYn2E+4LXnL12WMUscuOTuxQaWxn47g1dHRgCrqysD1DCxnzn4ho/6dgiVGc2uVcKwUHa7fiv6z6gal583+NuHC8SWH50Rj5i6fRROLpccJZK7eB5708Hnl49h0HoSI/8AixIsy6h4m/72mQ04Pyp6kMcMbuKPOkr/AJQvjuKcEMnzLYOGBI9OsL5mrtWsTv5wzTlMTgHpgbbXJ+pMpy7HZPqnkxaJq2qp99gScSusMiLaCORCWSZKwtNdR7TI73m8DWIiobkyrSNKvNmyxj7+n+Zdsen3gBv36QnP2iQhTCUBYywf35CC7SkMHrCJgqJTCMA1MJWgdZZEloBweXEapIqFR7yhwKNg1qanFtyPc2jjw78O4LDBxcfhI8/1mBDOxywrUvTfJ02RuthnT9xPPyRlpak7TM402dThimX/ADabemTb9+E53Es73VAWZsDuA6knpi8HhnPaW99wSPA2h8RxZRLLbUx3tmw2/X7TxoQc8qXNf84NnsjPT4ZaYJVVquty1SpYUUtuc727z3dJy+J4t6mWqaxt2WunpbEJna5JZiTubm5i9M9iEJJ3J2YtqqQkLKdM+00MsEpNiRInO+IeL0UrdX7Itvbr9p19M8j8U1dddKdwqqouxuQNRySB3ACXj3kXBWzHyDm54aulUC+gnb/kLH9CZ9h5X8SpVF0qK3/G9mHmJ8JZRYnx3jPmspFmK9ldiR+UTHq+hj1FNumjuhl0qj9FpzYW/wAzx3OeYrxNQupDIBoVhkEKTcjwvf0tPmScdWK6PmvZsaS5AN8ZuZ7rldEpSpqRYqqgjx05/WYYOg+g3Ju3wjLqMuqKSD+XJ8qaBLtOqjjMwpzO6zc6zHVEekkU0RUGfQfSNaKrb47h9BGikYuJeZbx/EIYlCVIINrHe2rHXHUeHWbxqjWIJaxB6jOdsRxAR0fJQlXU96hsjzFiD4iHxPDXBdMWy9MG+kH86H8yG++4vnoTODdWBpOQqNlah/8ArfYN/ScBvCx/KINpqyhHEUijlD0Nr946HyIsfWLYGwPQkgelif8A2E6PG0GalqYaXoH5VRTvozob0sVv3BYHG8G3zEooCW0qoB72ZnJPo2/cJMZpqnzvfwBgti9sbX6X7os5vOrzrhRR0Ub3ZQXcnB11LWUjpZFTHeTOVNYu1YBtvIN5SNmWYwIRuYAMvVuPL7yWsYDLtJCkgI9lxPDNTPa26ObAHbIztmHwvEBWVwwNipuD+/GeT4XnDPhrk5N+hK7alvkeEFK7I+kdvAwNR3HQ3/TacVSlceH+QWJH0Fl0M3QMTb3v95j4qoSwB3AF/Pcj0vb0mBOYsWT8NiFJu3SwLfrM9DmKuNRbtXNwSACb/lY7zjw49E3Kh5IuqR0SJNMzJxNgxawIJKjcFRsTfY/2jw5K69NgWIuAQuobgToWRN1x9zBxaL0yikJlYbgj99e6TVKTUladioDTPnfxIx/1NXzUemlf7CfRWafO/iJf/kVfNf1UGbY+TTFycrVDDXI9B7C0hXB9PrBQ5m5uanzYDchRjvsBPpIa1h5Tw/w7wYqVRe9k7Z8bEWHv9DPbsJlN70YZH2DV4YaIURqiQZls0xVjNdQTO6XicgMgltTjClpLSGwM1WniZGo9MepAHXqZ1GSZ6lPEuM2NSM3COFZUqakF+xUUf7iE9V/nQ3N18SRnc+M4EgkWXVpLAU806ib66f3Xpm21gC1XT8JxuVYBkPmpwZv4DiVqL8rSKT3L0aiMdC1BnSAblQ1tr2vbAg5NPUuO5qnZq+GnV2UuofAoVVOz02BNNj4gqUv3Mk7XK+ADcfUqsLKiUwrNtcrYt6Kje5nn+Vt8rikJQolUOrUzjQ43S3g6oR4FZ3ua13agKVFdT1Lp2bbEnUSegC6hc4GqcXUSazJR2Ul/jyUjwvOeO+dXqVBs7sV/pGE//IEzUKLubIjOe5FZz7Cej/h/DcN2HDcbX606YLU0PcR1/wCwP9MTxPHcSRpHDfLTonyHZR6MNI9FE71m2SgtvL2QHLpcrqE2sFI3BOpx5ol2HqIFeiq4vqbqQw0j2vf3HlD4jiazCztU0/ym6J/4iy/pM6maR1PeTXwIWRmWN5DvLImiAZokitRkjACrwBpg3Ra2Aww4tfvsw1Dw/wAg5V5xUC6QUXcdmlRSwxcCyXHneenanncjf6YnL4zgVY76b72tm2xz5mc8b/duOMzOnHBhYAqbrdg1wb7WDfhyB1tAfjbu2oaTgabhQCoAN7nBNh/mM/0CWIOo33sBuL/pt7S+J4Is2pCEwBpYGxIOcx0rspys28u4tSbVNTA4DdoG5PRuu/lnrPScz4qgiItEMtzc0yx0npgdDe+Z4qtRq01XSSTpOtcGw65Pdc+8RUqOUV2dc9nSey+MXC/mFuov4yNKk/Q01VHq63NHYsKZLAZVagS4t0NtzY9IHAcxfXd6bFCMqrBGOMFbg4x3H+3EoK4pmrYMlyD33ABI/fdMy83dcXHU9pRcGxsLi1+kyeHtFKkS1Z7ZuLpsABhiSBm4I8xjqNpx3+HjxPEtnSmhWd8BrgFQFuMkkLnoDOG/FOoVw4Ia7C3QqRi3Tce4m3hueBQO2AxAFzi17Fhjpv6gS4RlBp8ruS41wcGvwjqWQowIJUg9CDteJXhH6IxPcBcz1tDmIAfUA+sG5Nj1N2GfERnBU7uCqX3YAFQbW3/UfvEt5ZW0lsdUPotPVafrgP4Z5eaVLW1tT72INguynuObkeM7JM08Oq0rtUS6uVUrbDEmw0kfmzjYxnEUBoV1AVCt7uwDA3ZWU+NxFkuk4q759HC4ycnaMYxaXqkenc9g6/DZvQHf0hjh3vp0m9ibHGLXvnwBPpFuxOLXYreCUjKaE7DV/T2vpLfs/iIW2TdlFvOSLS/Ahkg/Lj1AOzIfJlMIoEYhiuLgkMGXIxlTJtBpdmPRAde7fw3muoqCw1kmxJARrLboe/0mb+IqmFIRjftZ17XxcXUdLj3k6k1sr+BqErHLwHEEXNR6QtcfMqOl/ISqvJyReoyIcFOJp20atwHK4t44YeMzn4hNEqQ9VxaxVQWFxbshmtYdr9Js4X4vpEWam6avxa9BU+dj9pjP612lsu6N/p0uTqcz4cPTQuoRwyN2f51Cqc9xUtnuVT0l06hCsqEX2ze5IW+kAEFj4AjznJ4zm6llVCpXpdlVV8M/ht7Q24EMgZ/lltT2NZnang7oiYffdj9bTF45SmnLZI0cNjz3Hcye5VUKWJFqigsP+lgieQW/iYunzauBiq6+CHQPZbCegqBXH+8q1GVtPzGoBeyLroBDi6g5vvjuxM9Xk9J1LUw1PTbWquK2m4uCUvqAIB2LWttPQhOHDj80ZOLRyW5vxJAvWqN/UQ3XxmapxDt+J2Phew9hibX4S3VW8Vvb9QDBHCzZaF/akvgjUcxllOZ034SZ6nCy1JApI595Jr+RJHqRVnacXvMtZMR2qQi4mJknRgIIjErWxYH3H0jHSJKZvL5KTHOEbcd2Olgb28r2jFRNGgopGcDBN985tMFzHKxhpFuA3L0amEYsvWysQAc5sMFrYuZza/KO2FWppVrdrSGOB3Y7p19RhIlzJprhlKTR52vy10Ufhe+q+knFjne3d9YPD0daMLBXUqNWNL3NrHxGJ6d6AYEEAjumTmFIJRfSoWym1gBa8dtlKZy6tB6TFGIJtqsL4Ude4DcQV4xhpOog74uLHYzLR5iysrsA57SsTuy2GD7zPTqgkBjYDF8kARpPuWej4bnjhR2i1jsRchji+cWiuJ46ooQ1NYuCwLHssCTnxsb+0ocsASm6AuH0FlbO9sWGSpO81NwNVj2r0wC6fK1uVUq2cE7MQdvCS3peyE5mehzJ0YsLs2381u8nGRjrNic5rBy6vodbEl1VgpvbIPsRkGZX5K/So1r3sT34tj0xF1+T1RvUDnc6Sb46nHahrT9BrT7nUTjAzayAmoG5Ts9onJAHQ39InjOJCHDX8c39xbM57curhgmqn4ENdbYtcgHwl8Ry3iQDcLa4Fg4bUTjA94bc2W5Rqi6nMmUizHzazW8v8eMg5/U1AaVZb7G97WtjxG4JvMFbl9RXCOArEKfBQbgE28QZtq/DvEKBpVHufyONQv1N7C3rE4QbtkWkaqXPyGDWZjswqBCNrYOQcXtgfeaeO5mjIGOk6rG5XtLk4/T9Z56pwrJq1KQAdJNtQDDcX2veHw2tgURRUvZiLG/YINx7W64aChFU4lJ19jdx3MhqUFfyi66cLqJJsO/SReZRzEAsVUC/4BoDWGx28vczT/C2qB3Ysls7bk7g32G2Y3hfh3UAzvoscqASQtrixvvc7+UHpS3Jc0xC8WpS4AJIYsLi2tc/h3nY+Huamox4fW6rWUICxB0VSDoZelr2Uj82vO05HA8uLVGTViz6je9+gJAxqyY1+UvRamyuhIcFQCdVwVKscbAge8TUWqNNfY7nBc9K7uyOBZkVs3Fr4/6nvt5R38dRibknqAwBI3/Cd5xeb8kdq9V6bLZmaopN862LhB5XtOW/Kq6As4QBepf6AbxwqtmJzTe56vguecOrEOocHYGmGswIxq3se17jxnRTm3BMQGp001YW1Rwb9bgHHr3T5w1OppL/AC20jd7NpHmekPhteq5RlG93UlTtYdrB/wAS2thfp8H0ZK/CMbaWtYW01L5Pcf7xCpwr37VRBcgNrRhceGnw7/aeY5JxdN0emyH5hvpZEReoF79LWB9TFVqaj5qs7/7TFcAMr2BOeq48+szurTCoPsd35I/KCR0Opf7STk1q1dTZfw2GnSo06SARbPcRJMLl5QVHwjo1JWqXVWAqzqo5ggLy3pxlNIwiTwTZz2owkpTWVkCw1DsUtLMalKGohKIOQrJ8uZua0gaT+X3E3CDWphlK94IiT3GnueB/091A7ift/aKr8KROq6FWta3aIJPT065xKNMnpqHeN894nTR0WdXlNS1FATsLexM1HiCck38TvOZSfSoA/e8JX+0hxMmtzpDiZHrXFr28fXac+8gJi0i0m53uLAC5IF/M9TOitTxv4zjUzNlAzOUafoUuDoVEDjy/djNKAAADoJkpzQhmdK7Jvag9CkEFVIbcECx8++c3huWJScsikBwfHSbg2HcP7TpCWZVgpNCTBIjmSRkibAzLRXJCqD2TcKATbAuRI6A2JAJGx7vKN0wXElbDcmxDtF1XvggEdQciOZJldZcQItUbAADutiOqBXGlxqB6GY2p5jUBlbAxFD4f0PrFRNBDWVGLVBnZsYj6HJUUsSWcMblWtbwvYZtczXTeGXxBq9xuUmYanJqRN/8AcGALCo4GABjPhJNeqSIWp+TOFvLFOHTEaBG2KwEX9+kFhHhYtlisBQEu0mmGqxNgRFhhYSJGBYgAUSoUq0dAc/juWo5udQubnSbZ7/AzI3BKvVvW1/e07RWY+Ipy4yfkpSZyKi5xBRZoqUswUTM0suwQkeiR1OnHpTmbkS5GZac00llssimJuyGzYkYGEyh8QWqGTQG0vItSYGqSxVhQqOmGvCaYqVWPDyWhhmLeGWlQAWVimpzRAMAMzUpFpzYFxAdIWKzNeQiG6yKJdjAvJC0SQsBaxqySRsBvSDJJIBAmEJJI2JhrLWSSCEC0gkklFFjeIqSSRIDBV3iTKkllo1UZpEuSZy5IZTbRTSSRgQSpJIAC0hlyRgNpTQskkkA1hCSSQwIJGkkggCWRpJIwEVIsSSSgJJJJGB//2Q=="
                }
            ]
        })
        data1.push({
            id:2,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        data1.push({
            id:3,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        data = [
            {
                modulename:"Audit Module 1",
                title:[
                    {
                        titleid:"Audit Title Point 1",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 2",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 3",
                        desfields:data1
                    }
                ]
            },
            {
                modulename:"Audit Module 2",
                title:[
                    {
                        titleid:"Audit Title Point 1",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 2",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 3",
                        desfields:data1
                    }
                ]
            },
            {
                modulename:"Audit Module 3",
                title:[
                    {
                        titleid:"Audit Title Point 1",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 2",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 3",
                        desfields:data1
                    }
                ]
            },
            {
                modulename:"Audit Module 4",
                title:[
                    {
                        titleid:"Audit Title Point 1",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 2",
                        desfields:data1
                    },
                    {
                        titleid:"Audit Title Point 3",
                        desfields:data1
                    }
                ]
            }
        ]
        setfulldata(data)
        var final = data[(props.dataFields[0].module)-1];
        final = final.title[(props.dataFields[0].title)-1];
        setmoduleid((props.dataFields[0].module)-1);
        settitleid((props.dataFields[0].title)-1)
        
        setnotes1(final.desfields);
    },[])
    function changeprev(){
        if(titleid == 0){
            
        }
        else{
            settitleid(titleid-1);
            var final = fulldata[(props.dataFields[0].module)-1];
            final = final.title[titleid];
            console.log(final)
            setnotes1(final.desfields);
        }
    }
    function changenext(){
        if(titleid == 2){
            
        }
        else{
            settitleid(titleid+1);
            // console.log(titleid);
            var final = fulldata[moduleid];
            
            final = final.title[titleid];
            console.log(final)
            setnotes1(final.desfields);
        }
    }
    function addnewimg1(event,id) {
        var a = notes1.filter(item => item.id == id)
        var b = a[0].input;
        b.push({imgsrc:URL.createObjectURL(event.target.files[0])});
        a[0].input = b;
        console.log(a)
        var data = [];
        notes1.map((i)=>{
            if(i.id == id){
                data.push(a[0])
            }
            else{
                data.push(i);
            }
        })
        setnotes1(data);
      }
      function addnote1(){
        var data = [];
        var id = 0;
        notes1.map((i)=>{
            data.push(i);
            id+=1;
        })
        data.push({
            id:id+1,
            description:"",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        var full = [];
        var a = [];
        fulldata.map((i,index)=>{
            a = []
            if(index == moduleid){
                i.title.map((j,jindex)=>{
                    if(jindex == titleid){
                        var b = JSON.parse(JSON.stringify(j.desfields));
                        b.push(data);
                        a.push({
                            titleid:j.titleid,
                            desfields:b
                        })
                    }
                    else{
                        a.push(j);
                    }
                })
                console.log(a[0].desfields[3])
                full.push({
                    modulename:"Audit Module 1",
                    title:a[0].desfields[3]
                })
            }
            else{
                full.push(i);
            }
        })
        // setfulldata(full);
        console.log(fulldata)
        console.log(full);
        setnotes1(data);
    }
    function openinp1(id){
        var a = "fileMy1-"+id;
        document.getElementById(a).click();
    }
    return(
        <>
           
            <div class="common-wrapper">

                <div class="common-wcard">

                    <div class="common-form-fields">

                        <div class="add-user">
                            <div class="form-wrappers">
                                <label>Audit Module</label>
                                <input type="text" name="" placeholder={`Audit Module ${moduleid}`} disabled />
                            </div>

                            <div class="form-wrappers">
                                <label>Audit Point Title</label>
                                <input type="text" name="" placeholder={`Audit Point Title ${titleid}`  } disabled />
                            </div>

                            <div class="form-wrappers">
                                <label>Description</label>
                            </div>
                            
                            {notes1 && notes1.map((i, index)=>{
                                return(
                                    <div className="description-box-outer">
                                        <textarea name="" id={i.id}>{i.description}</textarea>
                                        <div class="images-description">
                                        {i.input.map((j)=>{
                                            return(
                                                <img src={j.imgsrc}/>
                                            )
                                        })}
                                        <button class="file-btn" onClick={()=>{openinp1(i.id)}}><i class="fa fa-plus"></i></button>
                                        <input type='file' id={`fileMy1-${i.id}`} class="none" onChange={(e)=>addnewimg1(e,i.id)}></input>
                                        </div>
                                    </div>
                                )
                            })}
                            
                            <ul class="form-action-wrapper">
                                <li><button class="outline-btn" onClick={()=>{addnote1()}}>Add new</button></li>
                            </ul>
                            <ul className="prev-nex">
                                <button class="outline-btn" onClick={()=>changeprev()}>
                                    <i className="fa fa-angle-left"></i>
                                </button>
                                <button class="outline-btn" onClick={()=>changenext()}>
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function AddNewModuleAudit(props){
    const [notes,setnotes] = useState([]);
    useEffect(()=>{
        var data=[];
        
        data.push({
            id:1,
            description:"",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        setnotes(data);
    },[])
    function addnewimg(event,id) {
        var a = notes.filter(item => item.id == id)
        var b = a[0].input;
        b.push({imgsrc:URL.createObjectURL(event.target.files[0])});
        a[0].input = b;
        console.log(a)
        var data = [];
        notes.map((i)=>{
            if(i.id == id){
                data.push(a[0])
            }
            else{
                data.push(i);
            }
        })
        setnotes(data);
      }
      function addnote(){
        var note = "helo";
        var data = [];
        var id = 0;
        notes.map((i)=>{
            data.push(i);
            id+=1;
        })
        data.push({
            id:id+1,
            description:"",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        setnotes(data);
    }
    function openinp(id){
        
        var a = "fileMy-"+id;
        document.getElementById(a).click();
    }
    return(
        <>
            
            
            <div class="common-wrapper">

                <div class="common-wcard">

                    <div class="common-form-fields">

                        <div class="add-user">
                            <div class="form-wrappers">
                                <label>Audit Module</label>
                                <input type="text" name="" placeholder="Enter Audit Module" />
                            </div>

                            <div class="form-wrappers">
                                <label>Audit Point Title</label>
                                <input type="text" name="" placeholder="Enter Audit Point Title" />
                            </div>
                            
                            <div class="form-wrappers">
                                <label>Description</label>
                            </div>
                            
                            {notes && notes.map((i, index)=>{
                                return(
                                    <div className="description-box-outer">
                                        <textarea name="" id={i.id}></textarea>
                                        <div class="images-description">
                                        {i.input.map((j)=>{
                                            return(
                                                <img src={j.imgsrc}/>
                                            )
                                        })}
                                        <button class="file-btn" onClick={()=>{openinp(i.id)}}><i class="fa fa-plus"></i></button>
                                        <input type='file' id={`fileMy-${i.id}`} class="none" onChange={(e)=>addnewimg(e,i.id)}></input>
                                        </div>
                                    </div>
                                )
                            })}
                            
                            <ul class="form-action-wrapper">
                                
                                <li><button class="outline-btn" onClick={()=>{addnote()}}>Add new</button></li>
                            </ul>
                        </div>
                    </div>
                </div>


                
            </div>  
        </>
    )
}
function CreateProject(props){
    const [filelist,setfilelist] = useState([]);
    function updateList() {
        var input = document.getElementById('myfile');
        const a = []
        for (var i = 0; i < input.files.length; ++i) {
            a.push(input.files.item(i).name);
        }
        setfilelist(a);
    }
    function removeItem(i){
        var list = filelist;
        setfilelist(list.filter(item => item !== i))
    }
    return(
        <>
            <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">CREATE NEW PROJECT</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                    </div>
                </div>

                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user" style={{width:100+'%'}}>
                                <div class="form-wrappers">
                                    <label>Project Code</label>
                                    <input type="text" name="" placeholder="Enter Project Code" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Customer Name</label>
                                    <select>
                                        <option>Myntra</option>
                                        <option>Infi</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Start Date</label>
                                    <input type="date" name="" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Estimated Completion Date</label>
                                    <input type="date" name="" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Domain Name</label>
                                    <input type="text" name="" placeholder="Enter Domain Name" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Cost</label>
                                    <input type="text" name="" placeholder="Enter Cost" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Location</label>
                                    <input type="text" name="" placeholder="Enter Location" />
                                </div>

                                <div class="form-wrappers">
                                    <label>POC</label>
                                    <input type="text" name="" placeholder="Enter POC" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Contact</label>
                                    <input type="text" name="" placeholder="Enter Contact" />
                                </div>

                                <div class="form-wrappers">
                                    <label>Status</label>
                                    <select>
                                        <option>Lead</option>
                                        <option>Active</option>
                                        <option value="">Prospect</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Document Upload</label>
                                    <br />
                                    {/* <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /> */}
                                    <input type="file" id="myfile" name="myfile" multiple onChange={updateList} /><label id="fileLabel">{filelist.length>0?`${filelist.length} files`:""}</label>

                                </div>
                                <div id="fileList">
                                    <ul>
                                    {filelist && filelist.map((i, index)=>{
                                        return(
                                            <li id={i}>{i} <i class="fa fa-trash" onClick={()=>{removeItem(i)}}></i></li>
                                        )
                                    })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <ul class="form-action-wrapper">
                        <li><a href="#" class="ol-btn">Cancel</a></li>
                        <li><a href="#" class="outline-btn">Save</a></li>
                    </ul>
                </div>
        </>
    )
}
function Employees(props){
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
    const [edit, setedit] = useState(false);
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [searchdata,setsearch] = useState([]);
    useEffect(()=>{
        const data = [];
        var filterdesig=[], filterdpmt=[], filtersrsupervisor=[], filtersupervisor=[];
        var k=<input type="date" value="2021-08-26" />;
        data.push({
            key: "0",
            empcode:"1001",
            name: "Ankit",
            empdesignation: "SEO",
            department: "Operations",
            empjoinigdate:"01/02/2000",
            tmsupervisor:"Ravi",
            tmsrsupervisor:"Kiran",
            dob:"15/04/1997",
            phone:"8796541230",
            email:"ankit@infidigit.com",
            salary:"######",
            // tmstatus:<button class="deactivate">Resigned</button>,
            tmstatus:"Resigned",
            accntactivation:<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>,
            lastwrkdate:k
        });
        filterdesig.push({
            text:"SEO",
            value:"SEO"
        })
        filterdpmt.push({
            text:"Operations",
            value:"Operations"
        })
        filtersupervisor.push({
            text:"Ravi",
            value:"Ravi"
        })
        filtersrsupervisor.push({
            text:"Kiran",
            value:"Kiran"
        })
        for (let i = 1; i < 100; i++) {
          var  k="N/A";
        data.push({
            key: i,
            // empcode:<Link to={{pathname: '/edit-employee', search: `?id=${i}`,state: { detail: "1" }}}> {i} </Link>,
            empcode:<a onClick={()=>{editemp(i)}}>{i}</a>,
            name: `Edrward ${i}`,
            empdesignation: `Man ${i}`,
            department: `department ${i}`,
            empjoinigdate:"01/02/2000",
            tmsupervisor:"Kiran ",
            tmsrsupervisor:"kaushal",
            dob:"15/04/1997",
            phone:"9022568981",
            email:"edward@infidigit.com",
            salary:"######",
            // tmstatus:<button style={{width:"130px"}} class="active">Active</button>,
            tmstatus:"Active",
            accntactivation:<label  class="switch"><input data-onstyle="success" type="checkbox" /><span  class="slider round"></span></label>,
            lastwrkdate: k
        });
        filterdesig.push({
            text:`Man ${i}`,
            value:`Man ${i}`
        })
        filterdpmt.push({
            text:`department ${i}`,
            value:`department ${i}`
        })
        filtersupervisor.push({
            text:"Kiran",
            value:"Kiran"
        })
        filtersrsupervisor.push({
            text:"Kaushal",
            value:"kaushal"
        })
        }
        // [...new Map(array.map((x) => [x[key], x])).values()];
        filterdesig = [... new Set(filterdesig.map(JSON.stringify))].map(JSON.parse)
        filterdpmt = [... new Set(filterdpmt.map(JSON.stringify))].map(JSON.parse)
        filtersupervisor = [... new Set(filtersupervisor.map(JSON.stringify))].map(JSON.parse)
        filtersrsupervisor = [... new Set(filtersrsupervisor.map(JSON.stringify))].map(JSON.parse)
        setsearch(data);
        setteamList(data);
        const columns = [
            {
              title:"Emp Code",
              dataIndex: "empcode",
              key: "empcode",
              
            },
            {
              title: "Name",
              dataIndex: "name",
              key: "name"
            },
            {
                title:"Emp Designation",
                dataIndex:"empdesignation",
                key:"empdesignation",
                filters:filterdesig,
                filterSearch: true,
                onFilter: (value, record) => record.empdesignation.indexOf(value) === 0
            },
            {
                title:"Department",
                dataIndex:"department",
                key:"department",
                filters:filterdpmt,
                filterSearch: true,
                onFilter: (value, record) => record.department.indexOf(value) === 0
            },
            {
                title:"Emp Joining Date",
                dataIndex:"empjoinigdate",
                key:"empjoinigdate",
            },
            {
                title:"Emp Supervisor",
                dataIndex:"tmsupervisor",
                key:"tmsupervisor",
                filters:filtersupervisor,
                filterSearch: true,
                onFilter: (value, record) => record.tmsupervisor.indexOf(value) === 0
            },
            {
                title:"Emp Sr. Supervisor",
                dataIndex:"tmsrsupervisor",
                key:"tmsrsupervisor",
                filters:filtersrsupervisor,
                filterSearch: true,
                onFilter: (value, record) => record.tmsrsupervisor.indexOf(value) === 0
            },
            {
                title:"Date Of Birth",
                dataIndex:"dob",
                key:"dob"
            },
            {
                title:"Phone Number",
                dataIndex:"phone",
                key:"phone"
            },
            {
                title:"Email ID",
                dataIndex:"email",
                key:"email"
            },
            {
                title:"Salary",
                dataIndex:"salary",
                key:"salary"
            },
            {
                title:"Emp Status",
                dataIndex:"tmstatus",
                key:"tmstatus",
                filters:[{text:"Active", value:"Active"}, {text:"Resigned", value:"Resigned"}],
                filterSearch: true,
                onFilter: (value, record) => record.tmstatus.indexOf(value) === 0,
                render(text, record) {
                    return {
                       
                        
                        children: text == "Active" ? <button class="active" style={{width:"130px"}}>{text}</button> : <button class="deactivate">{text}</button>
                    };
                }
            },
            {
                title:"Account Activation",
                dataIndex:"accntactivation",
                key:"accntactivation"
            },
            {
                title:"Last Working Date",
                dataIndex:"lastwrkdate",
                key:"lastwrkdate"
            },
          ];
          setteamcol(columns);
          setedit(false);
          console.log("hi")
    },[]);
    
    const history = useHistory();
    function editemp(a){
    //    return(<EditEmployeeConfig />)
        console.log(a)
        // setedit(true);
    }
    return(
        <>
            {edit ? <><EditEmployeeConfig /></>:<><div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">TEAM MEMBERS</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        {/* <a href="#" class="outline-btn">Add New</a> */}
                    </div>
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

                

                <div class="common-table" >
                <div class="row">
                    <div class="col-md-5">
                        <div class="data-per-page">Data Per page</div>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-8">
                                <div class="data-export">
                                    
                                   
                                    <span class="export">
                                        <button class="ms-5 outline-btn ">Import</button>
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
                            </div>
                        </div>
                    </div>
                </div>
                    <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                </div></>}
        </>
    )
}
function Roles(props){
    const [userroles, setuserroles] = useState([]);
    const [userrolescol, setuserrolescol] = useState([]);
    useEffect(()=>{
        var data = [
            {
                title:"#",
                dataIndex:"id",
                key:"id",
                width:"5%"
            },
            {
                title:"Role",
                dataIndex:"role",
                key:"role",
                width:"10%"
            },
            // {
            //     title:"Action",
            //     dataIndex:"action",
            //     key:"action"
            // }
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"85%"
            }
        ]
        setuserrolescol(data);
        data = [
            {
                key:"1",
                id:"1",
                role:"Director",
                // action:<div><i class="fa fa-trash"></i></div>
            },
            {
                key:"2",
                id:"2",
                role:"HR",
                // action:<div><i class="fa fa-trash"></i></div>
            },
            {
                key:"3",
                id:"3",
                role:"Sales",
                // action:<div><i class="fa fa-trash"></i></div>
            },
            {
                key:"4",
                id:"4",
                role:"SEO",
                // action:<div><i class="fa fa-trash"></i></div>
            },
            {
                key:"5",
                id:"5",
                role:"Customers",
                // action:<div><i class="fa fa-trash"></i></div>
            }
        ]
        setuserroles(data);
    },[])
    function addrole(){
        var a = document.getElementById("role-name").value;
        console.log(userroles)
        var allItems = JSON.parse(JSON.stringify(userroles));
        allItems.push(
            {
                key:allItems.length+1,
                id:allItems.length+1,
                role:a,
                // action:<div><i class="fa fa-trash"></i></div>
            }
        )
        console.log(allItems)
        setuserroles(allItems);
        document.getElementById("role-name").value="";
    }
    return(
        <>
            <div className="row common-mb-24">
                <div className="col-md-1" style={{marginTop:5+'px'}}>Role</div>
                <div className="col-md-6">
                    <input type="text" id="role-name" />
                </div>
                <div className="col-md-5 add-new-btnw">
                    <button class="outline-btn" onClick={()=>{addrole()}}>Add</button>
                </div>
            </div>
            <Table id="sample-module-expand" dataSource={userroles} columns={userrolescol} />
        </>
    )
}
function EditEmployeeConfig(props){
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
      };
    
    //   const pieOptions = { pieSliceText: 'perce','colors':['#7bb720', 'red'], fontSize: 17, backgroundColor: 'transparent', legend : {position: 'none', textStyle: { fontSize: 16}}, chartArea:{left:0,top:10,width:'65%',height:'100%'}}
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
          position: "none",
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
    const [show,setshow]= useState(false);
    function handleModal(){
        setshow(!show);
    }
    const [piedata, setpiedata] = useState([]);
    const [ProjList, setProjList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [projcol,setprojcol] = useState([]);
    useEffect(()=>{
        const a=[
           ['Task', 'Hours per Day'],
           ['Utilised', 6],
           ['Not utilised', 4]
        ];
        setpiedata(a);
        const data = [];
        var filterclientname=[];
        data.push({
           key: 0,
           projectstatus:"Completed",
           clientname:"Infi",
           billingstartdate:"03/05/2020",
           billingenddate:"03/05/2021",
           allocation:"20%",
           billingperiod:"Monthly",
           projectpoc:"Rahul"
        });
        filterclientname.push({
            text:"Infi",
            value:"Infi"
        })
        for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            projectstatus:"Active",
            clientname:`Myntra ${i}`,
            billingstartdate:"03/05/2020",
            billingenddate:"03/05/2021",
            allocation:"20%",
            billingperiod:"Monthly",
            projectpoc:"Rahul"
        });
        filterclientname.push({
            text:`Myntra ${i}`,
            value:`Myntra ${i}`
        })
        
        }
        filterclientname = [... new Set(filterclientname.map(JSON.stringify))].map(JSON.parse);
        setProjList(data);
        const columns = [
            {
              title: "Project Status",
              dataIndex: "projectstatus",
              key: "projectstatus",
              filters:[
                  {
                      text:"Active",
                      value:"Active"
                  },
                  {
                      text:"Completed",
                      value:"Completed"
                  }
              ],
                filterSearch: true,
                onFilter: (value, record) => record.projectstatus.indexOf(value) === 0
            },
            {
              title: "Client Name",
              dataIndex: "clientname",
              key: "clientname",
              filters:filterclientname,
                filterSearch: true,
                onFilter: (value, record) => record.clientname.indexOf(value) === 0
            },
            {
                title:"Billing Start Date",
                dataIndex:"billingstartdate",
                key:"billingstartdate",
            },
            {
                title:"Billing End Date",
                dataIndex:"billingenddate",
                key:"billingenddate",
            },
            {
                title:"% Allocation",
                dataIndex:"allocation",
                key:"allocation",
            },
            {
                title:"Billing Period",
                dataIndex:"billingperiod",
                key:"billingperiod"
            },
            {
                title:"Project POC",
                dataIndex:"projectpoc",
                key:"projectpoc"
            },
          ];
          setprojcol(columns);
    },[]);
    return(
        <>
            <div class="row">
                    <div class="col-sm-5 pad-lzero">
                        <div class="main-title">PROJECT DETAILS AND UTILIZATION</div>
                    </div>
                    <div class="col-sm-7 add-new-btnw">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="common-filter">
                        <ul class="filter-fields tab-project-list">
                            <li>
                                <select>
                                    <option value="12">Last 12 months</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sept</option>
                                </select>
                            </li>
                            <li style={{marginLeft:24+'px'}}><button class="outline-btn" onClick={()=>handleModal()}>Custom</button></li>
                        </ul>
                    </div>
                </div>
                

                

                <div class="common-table">
                    <div className="row">
                        <div className="col-md-2">
                            <div id="piechart">
                            <Chart chartType="PieChart" data={piedata} options={pieOptions} graph_id="PieChart" width={"100%"} height={"400px"} legend_toggle/>
                            <div>
                                <div class="rect green"></div>
                                <div class="pie-content">Utilised</div>
                            </div>
                            
                            <div>
                                <div class="rect red"></div>
                                <div class="pie-content">Not Utilised</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                        <div class="data-export">   
                            <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Export
                                                </button>
                                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                                    <a class=" dropdown-content" href="#">Excel</a>
                                                    <a class="dropdown-content" href="#">CSV</a>
                                                    <a class="dropdown-content" href="#">Sheets</a>

                                                </div>
                               
                            </div>
                            <Table id="sample" columns={projcol} dataSource={ProjList} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[ "bottomRight"]}} />
                        </div>
                    </div>
                </div>
        
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

    )
}
function CustomizeDashboard(props){
    const [contentArray,setContentArray] = useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}])
    function addContent(){
        var tempArray = JSON.parse(JSON.stringify(contentArray));
        // var tempArray=contentArray;
        tempArray.push({id:tempArray.length+1});
        console.log(tempArray)
        setContentArray(tempArray)
    }
    return(
        <>
            <div className="config-dashboard">
                <div className="my-3">
                    <label htmlFor="" style={{marginRight:52+'px'}}>Theme Name</label>
                    <input type="text" />
                </div>
                <div className="my-3">
                    <div className="row">
                        <div className="col-lg-1">
                            <label htmlFor="" style={{marginRight:52+'px'}}>Layout</label>
                        </div>
                        <div className="col-lg-3 layout text-center  ">
                            <div className="d-flex my-2 ms-3 layout layout-row ">
                                <div className="col-5 layout layout-col">1</div>
                                <div className="col-1"></div>
                                <div className="col-5 layout layout-col">2</div>
                            </div>
                            <div className="d-flex my-2 ms-3 layout layout-row ">
                                <div className="col-5 layout layout-col">3</div>
                                <div className="col-1"></div>
                                <div className="col-5 layout layout-col">4</div>
                            </div>
                            <div className="d-flex my-2 ms-3 layout layout-row ">
                                <div className="col-5 layout layout-col">5</div>
                                <div className="col-1"></div>
                                <div className="col-5 layout layout-col">6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <table class="table-modules text-center">
                        <thead class="table-modules-head">
                            <tr>
                            <th width="1%"></th>
                            <th classname="left-right-border" width="25%">Placeholder</th>
                            <th width="25%" >Chart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contentArray.map((item)=>{
                                        return(
                                            <tr key={item.id}>
                                                <td><button onClick={addContent}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"> <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/></svg></button> </td>
                                                <td classname="left-right-border">{item.id}</td>
                                                <td><select name="" id="">
                                                        <option value="">Key Words chart</option>
                                                        <option value="">bar chart</option>
                                                        <option value="">line chart</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        );
                                    })}
                        </tbody>
                    </table>
                </div>
                <div className="my-3 d-flex justify-content-between">
                    <button className="outline-btn">Cancel</button>
                    <button className="outline-btn">Apply & Save</button>
                    <button className="outline-btn">Save</button>
                    <div className="col-6"></div>
                </div>
            </div>
        </>
    )
}
export default Configuration;