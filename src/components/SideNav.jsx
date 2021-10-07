import React, {useEffect, useState} from 'react';

function SideNav(){
    const [user, setuser] = useState('');
    useEffect(()=>{
        var u = localStorage.getItem('User');
        setuser(u)
    },[])
    return(
        <>
            {
                user == "admin" 
                ? 
                    <>
                        <ul class="list-unstyled side-menu">
                            <li><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
                            <li><a href="team-members-sales-dir"><i class="fa fa-tasks"></i> Team Members</a></li>
                            <li><a href="clinets-sales-dir"><i class="fa fa-tasks"></i> Clients</a></li>
                            <li><a href="project-list-sales-dir"><i class="fa fa-tasks"></i> Projects</a></li>
                            <li><a href="configuration">Configuration</a></li>
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
                            <li><a href="/dashboard-sales"><i class="fa fa-columns"></i> Dashboard</a></li>
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

                    </>
                :
                    <></>
            }
            {
                user == ""
                ?
                    <>

                    </>
                :
                    <></>
            }
            {
                user == ""
                ?
                    <>

                    </>
                :
                    <></>
            }
            {
                user == ""
                ?
                    <>

                    </>
                :
                    <></>
            }
        </>
    )
}

export default SideNav();