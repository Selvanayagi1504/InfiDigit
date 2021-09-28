import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Chart from "react-google-charts";



function Dashboard() {
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
  const [openproj, setopenproj] = useState(false);
  const [proj,setproj] = useState('');
  const [chartdata, setchartdata] = useState([]);
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
  },[])
  function sidenavtoggle(){
    setsidenavsales(!sidenavsales)
  }
  
return (
<>
<section class="outer-wrapper">
  <div class="top-nav-bar">
      <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
      <div class="nav-bar-center">&nbsp;</div>
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          
          <li><a href="new-user.html" class="outline-btn ot-btn"><i class="fa fa-plus"></i> Add New User</a></li>
          <li><a href="client-new.html" class="outline-btn"><i class="fa fa-plus"></i> Add New Client</a></li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">M.Subash</span>
          </button>
            
              
              
              <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a href="">Profile</a></li>
                <li><a href="myclients.html" data-target="myclients.html">My Clients</a></li>
                <li><a href="myprojects.html" data-target="myprojects.html">My Projects</a></li>
                <li><a href="">Change Password</a></li>
                <li><a href="/">Log Out</a></li>
              </ul>
            
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  <div class="sidebar-nav-bar">
    <ul class="list-unstyled side-menu">
      <li onClick={()=>{setopenproj(false);}}><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
      <li>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="drop-dire">
          Sales <i class="fa fa-angle-right side-dropdown"  aria-hidden="true"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href="team-members-sales-dir">Team Members</Dropdown.Item>
              <Dropdown.Item href="clinets-sales-dir">Clients</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
      <li>
        <UncontrolledButtonDropdown className="uncontrolled">
          <DropdownToggle caret size="md" >
            Clients <i class="fa fa-angle-right"  aria-hidden="true"></i>
          </DropdownToggle>
          <DropdownMenu>
            <span onClick={()=>{setopenproj(true);setproj("Myntra");}}> Myntra </span>
            <DropdownItem onClick={()=>{setopenproj(true);setproj("Myntra - Myntra Shoes");}}>Myntra Shoes</DropdownItem>
            <DropdownItem onClick={()=>{setopenproj(true);setproj("Myntra - Myntra Loafers");}}>Myntra Loafers</DropdownItem>
            <span onClick={()=>{setopenproj(true);setproj("Amazon");}}> Amazon </span>
            <DropdownItem onClick={()=>{setopenproj(true);setproj("Amazon - Fashion");}}>Fashion</DropdownItem>
            <DropdownItem onClick={()=>{setopenproj(true);setproj("Amazon - Jewellery");}}>Jewellery</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </li>
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
     
      {openproj 
        ? 
          <>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">{proj}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="add-new-btnw">
                  <label htmlFor="" style={{marginRight:24+'px'}}>Date Range</label>
                  <input type="date" style={{marginRight:24+'px'}} />
                  <input type="date" />
                </div>
                <div className="chart-legend-listing">
                  <div className="legend-list">
                    <p>Total Clicks</p>
                    <h1>676</h1>
                    <hr style={{backgroundColor:"#4e73df"}}/>
                  </div>
                  <div className="legend-list">
                    <p>Total Impressions</p>
                    <h1>20,312</h1>
                    <hr style={{backgroundColor:"#008000"}}/>
                  </div>
                  <div className="legend-list">
                    <p>Organic Users</p>
                    <h1>3.33%</h1>
                    <hr style={{backgroundColor:"#ffc107"}}/>
                  </div>
                  <div className="legend-list">
                    <p>New Users</p>
                    <h1>13.8</h1>
                    <hr style={{backgroundColor:"#5f9ea0"}}/>
                  </div>
                  <div className="legend-list">
                    <p>Organic Sessions</p>
                    <h1>676</h1>
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
              </div>
              <div className="col-md-5"></div>
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
  </div>

  
</section>
</>
);
}

export default Dashboard;