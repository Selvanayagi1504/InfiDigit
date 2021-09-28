import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Home, About, Contact, Dashboard, SalesList, SubProjects, TeamMembers, EditEmployee, SalesNew, CreateProject, EditProject, ViewClientDetails, ClientList, ProjectList, CreateClient, EditClient, ModuleExpandDAPA, ModuleExpandGoogleTrends, ModuleExpandPageSpeed, TeamMembersSalesDir, ClinetsSalesDir, ProjectSalesDir, ViewClientDetailsSalesDir, ProjectsListSalesDir, Tickets, TicketsList, ModuleExpandSiteUptime, ModuleExpandRankTracking, ModuleExpandGSC, ModuleExpandContentWordCount, ModuleExpandGoogleAnalytics, ModuleExpandSEOVolatality, ModuleExpandKeywordResearch, ModuleExpandClickShare, ModuleExpandROI, ModuleExpandBackLinks, ModuleExpandOrganicResearch } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/team-members" exact component={() => <TeamMembers />} />
          <Route path="/sales-list" exact component={() => <SalesList />} />
          <Route path="/sub-projects" exact component={() => <SubProjects />} />
          <Route path="/edit-employee" exact component={() => <EditEmployee/>} />
          <Route path="/sales-new" exact component={() => <SalesNew/>} />
          <Route path="/create-project" exact component={() => <CreateProject/>} />
          <Route path="/edit-project" exact component={() => <EditProject/>} />
          <Route path="/view-client-details" exact component={() => <ViewClientDetails/>} />
          <Route path="/client-list" exact component={() => <ClientList/>} />
          <Route path="/project-list" exact component={() => <ProjectList/>} />
          <Route path="/create-client" exact component={() => <CreateClient/>} />
          <Route path="/edit-client" exact component={() => <EditClient/>} />
          <Route path="/module-expand-da" exact component={() => <ModuleExpandDAPA/>} />
          <Route path="/module-expand-google-trends" exact component={() => <ModuleExpandGoogleTrends/>} />
          <Route path="/module-expand-page-speed" exact component={() => <ModuleExpandPageSpeed/>} />
          <Route path="/team-members-sales-dir" exact component={() => <TeamMembersSalesDir/>} />
          <Route path="/clinets-sales-dir" exact component={() => <ClinetsSalesDir/>} />
          <Route path="/project-sales-dir" exact component={() => <ProjectSalesDir/>} />
          <Route path="/view-client-sales-dir" exact component={() => <ViewClientDetailsSalesDir/>} />
          <Route path="/project-list-sales-dir" exact component={() => <ProjectsListSalesDir/>} />
          <Route path="/tickets" exact component={() => <Tickets />} />
          <Route path="/ticketslist" exact component={() => <TicketsList />} />
          <Route path="/module-expand-site-uptime" exact component={()=> <ModuleExpandSiteUptime />} />
          <Route path="/module-expand-rank-tracking" exact component={()=> <ModuleExpandRankTracking />} />
          <Route path="/module-expand-gsc" exact component={()=> <ModuleExpandGSC />} />
          <Route path="/content-word-count" exact component={()=> <ModuleExpandContentWordCount />} />
          <Route path="/module-expand-google-analytics" exact component={()=> <ModuleExpandGoogleAnalytics />} />
          <Route path="/module-expand-seo-volatality" exact component={()=> <ModuleExpandSEOVolatality />} />
          <Route path="/module-expand-keyword-research" exact component={() => <ModuleExpandKeywordResearch/>} />
          <Route path="/module-expand-click-share" exact component={() => <ModuleExpandClickShare/>} />
          <Route path="/module-expand-roi" exact component={() => <ModuleExpandROI/>} />
          <Route path="/module-expand-backlinks" exact component={() => <ModuleExpandBackLinks/>} />
          <Route path="/module-expand-organic-research" exact component={() => <ModuleExpandOrganicResearch/>} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
