import React from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'


function Dashboard() {
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
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
      <li><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
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
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
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

  
</section>
</>
);
}

export default Dashboard;