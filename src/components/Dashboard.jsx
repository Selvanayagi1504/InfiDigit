import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb } from "antd";
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};
function Dashboard() {
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
  const [openproj, setopenproj] = useState(false);
  const [proj,setproj] = useState('');
  const [chartdata, setchartdata] = useState([]);
  const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
  const [healthaudit, sethealthaudit] = useState([]);
  const [healthauditcol, sethealthauditcol] = useState([]);
  const [selectionType, setSelectionType] = useState('checkbox');
  const [ticketmin, setticketmin] = useState(true);
  const [ticketstable, setticketstable] = useState([]);
  const [ticketscol, setticketscol] = useState([]);
  const [ticketstableWait, setticketstableWait] = useState([]);
  const [ticketscolWait, setticketscolWait] = useState([]);

  useEffect(()=>{
    var data = [
      ['x', 'totalClicks', 'totalImp','organicUsers', 'newUsers', 'organicSessions'],
      ["24/1/2021", 0,10,20,30,40],
      ["25/1/2021", 10,20,30,40,50],
      ["26/1/2021", 23,33,43,53,63],
      ["27/1/2021", 17,27,37,47,57],
      ["28/1/2021", 18,28,38,48,58],
    ]
    setchartdata(data);
    setchartdataContentWordCount(data);
    data = [
      {
        title:"",
        dataIndex:"projects",
        key:"projects"
      },
      {
        title:"Compliance %",
        dataIndex:"comp",
        key:"comp"
      },
      {
        title:"Health Score",
        dataIndex:"healthscore",
        key:"healthscore",
      },
      {
        title:"Total Score",
        dataIndex:"totalscore",
        key:"totalscore"
      }
    ]
    sethealthauditcol(data);
    data = [
      {
        projects:"Myntra Shoes",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      },
      {
        projects:"Myntra Loafers",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      },
      {
        projects:"Amazon Fashion",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      }
    ]
    sethealthaudit(data);
    data = [
      {
        title:"Ticket #",
        dataIndex:"ticketno",
        key:"ticketno"
      },
      {
        title:"Status",
        dataIndex:"status",
        key:"status"
      },
      {
        title:"Priority",
        dataIndex:"priority",
        key:"priority"
      },
      {
        title:"Raised On",
        dataIndex:"raisedon",
        key:"raisedon"
      }
    ]
    setticketscol(data);
    setticketscolWait(data);
    data = [
      {
        ticketno: <Link to={{pathname: "/Tickets",search: `?id=1`,state: { detail: "1" },}}>1</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=2`,state: { detail: "2" },}}>2</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=3`,state: { detail: "3" },}}>3</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=4`,state: { detail: "4" },}}>4</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=5`,state: { detail: "5" },}}>5</Link>,
        status:<div class="Inprogress">Inprogress</div>,
        priority:<div class="Low">Low</div>,
        raisedon:<div>15-09-2021</div>
      }
    ]
    setticketstable(data);
    data = [
      {
        ticketno: <Link to={{pathname: "/Tickets",search: `?id=11`,state: { detail: "11" },}}>11</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=12`,state: { detail: "12" },}}>12</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=13`,state: { detail: "13" },}}>13</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=14`,state: { detail: "14" },}}>14</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/Tickets",search: `?id=15`,state: { detail: "15" },}}>15</Link>,
        status:<div class="Inprogress">Inprogress</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>15-09-2021</div>
      }
    ]
    setticketstableWait(data);
  },[])
  function sidenavtoggle(){
    setsidenavsales(!sidenavsales)
  }
  const [sidenavToggle, setSidenavToggle] = useState(true);
  
return (
<>
<section class="outer-wrapper">
  <div class="top-nav-bar">
      <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
      <div class="nav-bar-center">&nbsp;</div>
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          
          {/* <li><a href="new-user.html" class="outline-btn ot-btn"><i class="fa fa-plus"></i> Add New User</a></li>
          <li><a href="client-new.html" class="outline-btn"><i class="fa fa-plus"></i> Add New Client</a></li> */}
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
  {/* <div class="sidebar-nav-bar">
    <ul class="list-unstyled side-menu">
      <li onClick={()=>{setopenproj(false);}}><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
      <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
      <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
      <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
      <li><a href="configuration">Configuration</a></li>
    </ul>
  </div> */}
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
      </Breadcrumb>
      <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">Dashboard</div>
              </div>
          
            </div>
            
            <div class="row">
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                    <div class="rsnap-lft">
                      <span class="rsnap-title">Clients</span>
                      <span class="rsnap-count">100</span>
                    </div>
                    <div class="rsnap-rgt">
                      
                      <div class="text-success">+11%</div>
                    </div>
                    <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Projects</span>
                    <span class="rsnap-count">24</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Members</span>
                    <span class="rsnap-count">54</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Reports</span>
                    <span class="rsnap-count">12</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-decline">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Clients</div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Reports</div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <img src="images/graph2.png" alt="" />
              </div>
            </div>
          </div>
    </div>
  </div>
  {/* <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
      <Breadcrumb>
        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item>
        <a href="/dashboard">Dashboard</a>
        </Breadcrumb.Item>
        
    </Breadcrumb>
      {openproj 
        ? 
          <>
            
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">{proj}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="add-new-btnw">
                  <label htmlFor="" style={{marginRight:24+'px'}}>Date Range</label>
                  <input type="date" style={{marginRight:24+'px'}} />
                  <input type="date" />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="row tickets-heading">
                  <div className="col-lg-5">
                    <h4>Tickets</h4>
                    <MyFDate />
                  </div>
                  <div className="col-lg-3">
                    <a href ="ticketslist">View all Tickets</a>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-1">
                    {ticketmin?<i class="fa fa-window-minimize" aria-hidden="true" onClick={()=>setticketmin(!ticketmin)}></i>:<i class="fa fa-window-maximize" aria-hidden="true" onClick={()=>setticketmin(!ticketmin)}></i>}
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-lg-7" id={!ticketmin?"full":""}>
                
                
                <div class={!ticketmin?"charts-flex":""}>
                  <div class="charts-main-box">
                    <div className="chart-legend-listing">
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Total Clicks</p>
                        <h1>676</h1>
                        </div>
                        <hr style={{backgroundColor:"#4e73df"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Total Impressions</p>
                        <h1>20,312</h1>
                        </div>
                        <hr style={{backgroundColor:"#008000"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Organic Users</p>
                        <h1>3.33%</h1>
                        </div>
                        <hr style={{backgroundColor:"#ffc107"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>New Users</p>
                        <h1>13.8</h1>
                        </div>
                        <hr style={{backgroundColor:"#5f9ea0"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Organic Sessions</p>
                        <h1>676</h1>
                        </div>
                        <hr style={{backgroundColor:"#e9967a"}}/>
                      </div>
                    </div>
                    <Chart
                        className="line-graph"
                        width={'800px'}
                        height={'400px'}
                        chartType="LineChart"
                        data={chartdata}
                        
                        options={{colors:['#4e73df', '#008000', '#ffc107', '#5f9ea0', '#e9967a'],legend:{position:"none"}}}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                  <div class="charts-main-box">
                    <div className="chart-legend-listing">
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Tickets Raised</p>
                        </div>
                        <hr style={{backgroundColor:"#4e73df"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Tickets Resolved</p>
                        </div>
                        <hr style={{backgroundColor:"#008000"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Tickets WIP</p>
                        </div>
                        <hr style={{backgroundColor:"#ffc107"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Tickets Not Started</p>
                        </div>
                        <hr style={{backgroundColor:"#5f9ea0"}}/>
                      </div>
                      <div className="legend-list">
                        <div class="legend-list-inner">
                        <p>Tickets on Hold</p>
                        </div>
                        <hr style={{backgroundColor:"#e9967a"}}/>
                      </div>
                    </div>
                    <Chart
                      className="line-graph"
                      width={'800px'}
                      height={'400px'}
                      chartType="ColumnChart"
                      data={chartdataContentWordCount}
                      
                      options={{
                          hAxis: {
                          title: "",
                          },
                          vAxis: {
                          title: "",
                          },
                          legend:{position:"none"},
                          colors:['#4e73df', '#008000', '#ffc107', '#5f9ea0', '#e9967a']
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                </div>
                
                <div className="audit-score-title">
                  Health Audit Score
                </div>
                <Table id="sample-module-expand" columns={healthauditcol} dataSource={healthaudit} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                <div className="full-report"><a>View full report</a></div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4 tickets">
                
                {
                  ticketmin
                  ?
                    <>
                      <Table id="sample-module-expand" columns={ticketscol} dataSource={ticketstable} pagination={{position:[]}} />
                      <div className="audit-score-title">
                        Waiting for Approval
                      </div>
                      <Table id="sample-module-expand" columns={ticketscolWait} dataSource={ticketstableWait} pagination={{position:[]}} />
                    </>
                  :
                    <>
                    </>
                }
              </div>
            </div>

          </>
        :
          <>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">Dashboard</div>
              </div>
          
            </div>
            
            <div class="row">
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                    <div class="rsnap-lft">
                      <span class="rsnap-title">Clients</span>
                      <span class="rsnap-count">100</span>
                    </div>
                    <div class="rsnap-rgt">
                      
                      <div class="text-success">+11%</div>
                    </div>
                    <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Projects</span>
                    <span class="rsnap-count">24</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Members</span>
                    <span class="rsnap-count">54</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Reports</span>
                    <span class="rsnap-count">12</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-decline">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Clients</div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Reports</div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <img src="images/graph2.png" alt="" />
              </div>
            </div>
          </div>
        </>
      }
      
    </div>
  </div> */}

  
</section>
</>
);
}
function MyFDate() {
  var myCurrentDate = new Date();
  var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate();
  let a =new Date(date)
  let longMonth = a.toLocaleString('en-us', { month: 'long' });
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  date = days[myCurrentDate.getDay()]+', ' +myCurrentDate.getDate()+' ' + longMonth;
  const newCurrentDate =date;
  return (
    <p>{newCurrentDate}</p>
  );
}
export default Dashboard;