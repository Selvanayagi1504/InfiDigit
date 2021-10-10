import React, { useEffect, useRef } from "react";
import {useState} from "react";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb } from "antd";
import {useLocation} from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NotificationSEO } from "./index";
import 'rsuite/dist/rsuite.css';
import {SideNavBarCustomClosed, SideNavBarCustom} from './index'

function DashboardCustomers() {
    const [sidenavToggle, setSidenavToggle] = useState(true);
    const [sidenav,setsidenav] = useState(false);
    const [sidenavsales, setsidenavsales] = useState(false);
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const [proj,setproj] = useState(id);
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
return (
<>
<section class="outer-wrapper dashboard-sales dashboard-seo">
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
                   <li onClick={()=>{setproj(i.projname);setIsMenuOpen(false)}}>{i.projname}</li>
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
         <NotificationSEO/>


                    </li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Customers</span>
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
          <div class="sidebar-nav-bar sidebar-sales">
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
      <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard dashboard-customers":"custom-column-90-dashboard-seo main-dashboard dashboard-customers"}>
      <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/dashboard-customers">Dashboard</a>
            </Breadcrumb.Item>
            
        </Breadcrumb>
        
            
        <div class="row common-mb-24">
            <div class="col-sm-5 pad-lzero">
            <div class="main-title">{proj}</div>
            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24">
            <button class="outline-btn">Export</button>
            </div>
        </div>
        <div className="row common-mb-24">
            <div className="col-sm-5 pad-lzero">

            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24 customers-right">
                <span className="heading-customers">
                    <span>Project Health</span>
                    <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                </span>
                <span className="heading-customers">
                    <span>Audit Progress</span>
                    <span class="progress-bar-customer">
                        <CircularProgressbar value="50" text="50%" />
                    </span>
                </span>
            </div>
        </div>
        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            DA / PA Checker
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x','https://www.infidigit.com/', 'https://www.ezrankings.org/'],
                        ['Aug 1',28,31],
                        ['Aug 4',30,28],
                        ['Aug 8',31,20],
                        ['Aug 10',32,40],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-da">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Page Speed
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.infidigit.com/'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        minValue:0,
                        maxValue:40
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-page-speed">View Full report</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Rank Tracking
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'Shoes'],
                        ["Aug 1", 1],
                        ["Aug 8", 3],
                        ["Aug 16", 5],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,25,50,75,100]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-rank-tracking">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Site Uptime Monitor
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.metroshoes.net/'],
                        ["Aug 1", 1],
                        ["Aug 2", 0],
                        ["Aug 3", 1],
                        ["Aug 4", 1],
                        ["Aug 5", 0],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Pass/ Fail",
                        },
                        vAxis: {
                        title: "https://www.metroshoes.net/",
                        ticks:[0.00,0.25,0.50,0.75,1.00]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-site-uptime">View Full report</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            ROI Calculator
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'ROI'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40,50],
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-roi">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Google Trends
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'shoes'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Keyword",
                        },
                        vAxis: {
                        title: "Shoes",
                        ticks:[0,20,40,60]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-google-trends">View Full report</a>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
  {/* <div class="content-wrapper">
    <div class="dashboard-wrapper dashboard-customers">
        
    </div>
  </div> */}

  
</section>
</>
);
}

export default DashboardCustomers;