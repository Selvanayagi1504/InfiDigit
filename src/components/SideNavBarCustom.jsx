import React, {useEffect, useState} from 'react';

function SideNavBarCustom(){
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
                            <li><a href=""><i class="fa fa-home"></i>Home</a></li>
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
                            <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
                            <li><a href="clinets-sales-dir"><i class="fa fa-users"></i> Clients</a></li>
                            <li><a href="project-list-sales-dir"><i class="fa fa-user"></i> Projects</a></li>
                            <li><a href="configuration"><i className="fa fa-cogs"></i>Configuration</a></li>
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
                            <li><a href=""><i class="fa fa-users"></i> Team Members</a></li>
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
                            <li><a href="/dashboard-sales"><i class="fa fa-home"></i>Home</a></li>
                            <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
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
                            <li><a href="/dashboard-customers?id=Myntra%20-%20Shoes"><i class="fa fa-home"></i>Home</a></li>
                            <li><a href="tickets-list-customers"><i class="fa fa-ticket"></i> Tickets</a></li>
                        </ul>
                    </>
                :
                    <></>
            }
        </>
    )
}

export default SideNavBarCustom;