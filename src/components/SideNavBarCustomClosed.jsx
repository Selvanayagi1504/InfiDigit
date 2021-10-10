import React, {useEffect, useState} from 'react';

function SideNavBarCustomClosed(){
    const [user, setuser] = useState('');
    useEffect(()=>{
        var u = localStorage.getItem('state');
        setuser(u);
    },[])
    return(
        <>
            {
                user == "admin" 
                ? 
                    <>
                        <ul class="list-unstyled side-menu">
                            <li><a href=""><i class="fa fa-home"></i></a></li>
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
                            <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i></a></li>
                            <li><a href="clinets-sales-dir"><i class="fa fa-users"></i></a></li>
                            <li><a href="project-list-sales-dir"><i class="fa fa-user"></i></a></li>
                            <li><a href="configuration"><i className="fa fa-cogs"></i></a></li>
                        </ul>
                    </>
                :
                    <>
                    </>
            }
            {
                user == "HR"
                ?
                    <>
                        <ul class="list-unstyled side-menu">
                            <li><a href=""><i class="fa fa-users"></i></a></li>
                        </ul>
                    </>
                :
                    <></>
            }
            {
                user == "sales"
                ?
                    <>
                        <ul class="list-unstyled side-menu">
                            <li><a href="/dashboard-sales"><i class="fa fa-home"></i></a></li>
                            <li><a href="client-list"><i class="fa fa-users"></i></a></li>
                        </ul>
                    </>
                :
                    <></>
            }
            {
                user == "SEO"
                ?
                    <>
                        <ul class="list-unstyled side-menu">
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
                        </ul>
                    </>
                :
                    <></>
            }
            {
                user == "Customers"
                ?
                    <>
                         <ul class="list-unstyled side-menu">
                            <li><a href="/dashboard-customers?id=Myntra%20-%20Shoes"><i class="fa fa-home"></i></a></li>
                            <li><a href="tickets-list-customers"><i class="fa fa-ticket"></i></a></li>
                        </ul>
                    </>
                :
                    <></>
            }
        </>
    )
}

export default SideNavBarCustomClosed;