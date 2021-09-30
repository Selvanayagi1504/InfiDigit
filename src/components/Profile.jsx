import React from 'react';
import ReactDOM, { render } from 'react-dom';




function Profile() {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm2a3C4uu3gfMyjK7oqThC29-XtCXFcyVUg&usqp=CAU" alt="profile" />
                </div>                
                <div className="col-md-2">
                    <button style={{height:38+'px',marginTop:90+'px'}} class="outline-btn" onClick={{}}>UPLOAD PICTURE</button>
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Emp Code</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Name</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Designation</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Reporting Manager</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Joined On</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Contact No.</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Country</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>State</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>City</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px'}}/>
                    </div>                             
                </div>
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2">
                        <label style={{marginLeft:50+'px'}}>Address</label>                        
                    </div> 
                    <div className="col-md-2">                        
                        <input type="text" style={{width:400+'px',height:125+'px'}}/>
                    </div>                             
                </div>
                
                <div className="row" style={{marginBottom:24+'px'}}>
                    <div className="col-md-2 add-new-btnw">
                        <button style={{height:38+'px',marginLeft:350+'px',width:150+'px'}} class="outline-btn" onClick={{}}>SUBMIT</button>                     
                    </div>  
                    <div className="col-md-2 add-new-btnw">
                        
                        <button style={{height:38+'px',marginLeft:250+'px',width:150+'px'}} class="outline-btn" onClick={{}}>CANCEL</button>
                    </div>               
                </div>
                                
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Profile;