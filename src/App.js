import React from "react";
// import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ModuleExpandNonCompliant,ModuleExpandSEOAudit, ProjectDetailsDir,EditEmployeeDir,EditProjectDir,EditClientDir,Profile,Home, About, Contact, Dashboard, DashboardSEO,DashboardSales, SalesList, SubProjects, TeamMembers, EditEmployee, SalesNew, CreateProject, EditProject, ViewClientDetails, ClientList, ProjectList, CreateClient, EditClient, ModuleExpandDAPA, ModuleExpandGoogleTrends, ModuleExpandPageSpeed, TeamMembersSalesDir, ClinetsSalesDir, ProjectSalesDir, ViewClientDetailsSalesDir, ProjectsListSalesDir, Tickets, TicketsList,TicketsSales, TicketsListSales, ModuleExpandSiteUptime, ModuleExpandRankTracking, ModuleExpandGSC, ModuleExpandContentWordCount, ModuleExpandGoogleAnalytics, ModuleExpandSEOVolatality, ModuleExpandKeywordResearch, ModuleExpandClickShare, ModuleExpandROI, ModuleExpandBackLinks, ModuleExpandOrganicResearch,Designation, DashboardAdmin, AccessPermissionsAdmin, AdminAuditUpdate, DashboardCustomers, Configuration, TicketsListCustomers, TicketCustomers, DashboardSuperAdmin, ConfigurationSEO } from "./components";
// const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
//   <React.Fragment>
//     {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
//   </React.Fragment>
// ));
function App() {
  return (
    <div className="App">
      <Router>
        {/* <div style={{marginLeft:11+"%", marginTop:4+'%'}}>
          <Breadcrumbs />
        </div> */}
      
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/profile" exact component={() => <Profile/>} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/dashboard-seo" exact component={() => <DashboardSEO />} />
          <Route path="/dashboard-sales" exact component={() => <DashboardSales />} />
          <Route path="/team-members" exact component={() => <TeamMembers />} />
          <Route path="/sales-list" exact component={() => <SalesList />} />
          <Route path="/sub-projects" exact component={() => <SubProjects />} />
          <Route path="/edit-employee" exact component={() => <EditEmployee/>} />
          <Route path="/edit-employee-dir" exact component={() => <EditEmployeeDir/>} />
          <Route path="/project-details-dir" exact component={() => <ProjectDetailsDir/>} />
          <Route path="/sales-new" exact component={() => <SalesNew/>} />
          <Route path="/create-project" exact component={() => <CreateProject/>} />
          <Route path="/edit-project" exact component={() => <EditProject/>} />
          <Route path="/edit-project-dir" exact component={() => <EditProjectDir/>} />
          <Route path="/view-client-details" exact component={() => <ViewClientDetails/>} />
          <Route path="/client-list" exact component={() => <ClientList/>} />
          <Route path="/project-list" exact component={() => <ProjectList/>} />
          <Route path="/create-client" exact component={() => <CreateClient/>} />
          <Route path="/edit-client" exact component={() => <EditClient/>} />
          <Route path="/edit-client-dir" exact component={() => <EditClientDir/>} />
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
          <Route path="/tickets-sales" exact component={() => <TicketsSales />} />
          <Route path="/ticketslist-sales" exact component={() => <TicketsListSales />} />
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
          <Route path="/designation" exact component={() => <Designation/>} />
          <Route path="/dashboard-admin" exact component={() => <DashboardAdmin/>} />
          <Route path="/access-permissions-admin" exact component={() => <AccessPermissionsAdmin/>} />
          <Route path="/admin-audit-update" exact component={() => <AdminAuditUpdate/>} />
          <Route path="/module-expand-seo-audit" exact component={() => <ModuleExpandSEOAudit/>} />
          <Route path="/dashboard-customers" exact component={() => <DashboardCustomers/>} />
          <Route path="/module-expand-non-compliant" exact component={() => <ModuleExpandNonCompliant/>} />
          <Route path="/configuration" exact component={()=> <Configuration /> } />
          <Route path="/tickets-list-customers" exact component={()=> <TicketsListCustomers /> } />
          <Route path="/ticket-customers" exact component={()=> <TicketCustomers /> } />
          <Route path="/dashboard-super-admin" exact component={()=> <DashboardSuperAdmin /> } />
          <Route path="/configuration-seo" exact component={()=> <ConfigurationSEO /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
