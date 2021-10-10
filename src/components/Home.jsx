// import React from "react";
// import { useHistory } from 'react-router-dom';

// function Home() {
//   const history = useHistory();
  
//   function redirect(){
//     var e = document.getElementById("usertype");
//     var strUser = e.value;
//     if (strUser == "admin") {
//       history.push('/dashboard');
//     }
//     if (strUser == "HR") {
//       history.push('/team-members');
//     }
//     if (strUser == "sales") {
//       history.push('/dashboard-sales');
//     }
//     if (strUser == "SEO") {
//       history.push('/dashboard-seo?id=Myntra - Shoes')
//     }
//   }
// return (
// <>
//   <div class="user-moudle">
//     <div class="user-common-card">
//       <div class="alogo">
//         <div class="user-msg">Welcome Back</div>
//         <div class="alogo"><a href=""><img src="images/infidigit-logo.png" /></a><span>Growth</span></div>

//       </div>
//       <form>
//         <ul class="list-unstyled form-fields">

//           <li>
//             <div class="row">
//               <div class="col-md-12">
                
//                 <div class="form-label">User Type</div>
//                 <select name="usertype" id="usertype">
//                   <option value="admin">Director</option>
//                   <option value="HR">HR</option>
//                   <option value="sales">Sales</option>
//                   <option value="SEO">SEO</option>
//                 </select>
//               </div>
//             </div>
//           </li>
//           <li>
//             <div class="col-md-12">
//               <div class="weak"><a href="">Forgot Password?</a></div>
//               <a href="#" class="outline-btn" onClick={redirect}>Sign In</a>
//               <div class="weak">Don't have an account? <a href="sign-up.html">Sign Up</a></div>
//             </div>
//           </li>
//         </ul>
//       </form>

//     </div>
//   </div>
// </>
// );
// }

// export default Home;


import React from "react";
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  
  function redirect(){
    var e = document.getElementById("usertype");
    var strUser = e.value;
    localStorage.setItem('state', strUser);
    if (strUser == "admin") {
      history.push('/dashboard');
    }
    if (strUser == "HR") {
      history.push('/team-members');
    }
    if (strUser == "sales") {
      history.push('/dashboard-sales');
    }
    if (strUser == "SEO") {
      history.push('/dashboard-seo?id=Myntra - Shoes')
    }
    if(strUser == "Admin"){
      history.push('/dashboard-admin')
    }
    if(strUser == "Customers"){
      history.push('/dashboard-customers?id=Myntra - Shoes')
    }
    if(strUser == "SuperAdmin"){
      history.push('/dashboard-super-admin')
    }
  }
return (
<>
    <div>
        <ul class="list-unstyled form-fields" >
        
        <li>
        <div class="row">
            <div class="col-md-4"></div> 
            <div class="col-md-4"></div> 
            <div class="col-md-2"></div>    
            <div class="col-md-2 col-sm-12">         
              <select name="usertype" id="usertype" >
                  <option value="admin">Director</option>
                  <option value="HR">HR</option>
                  <option value="sales">Sales</option>
                  <option value="SEO">SEO</option>
                  {/* <option value="Admin">Admin</option> */}
                  <option value="Customers">Customers</option>
                  {/* <option value="SuperAdmin">Super Admin</option> */}
              </select>
            </div>
          
        </div>
        </li>
        
        </ul>
    </div>
  <div class="user-moudle">
    <div class="user-common-card">
      <div class="alogo">
        <div class="user-msg"><strong>Welcome Back</strong></div>
        <div class="alogo"><a href=""><img src="images/infidigit-logo.png" /></a><span><strong>Growth</strong></span></div>

      </div>
      <form>
        <ul class="list-unstyled form-fields">          
          <li>
            <div class="col-md-12">
              <div class="alogo">
                <div class="user-msg">Sign in</div>
                <br />
                <div class="google-btn">
                  <a href="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5gUULZ-oIzeqWBezPyuJHZzpC6B7q7k1-8c3Cb1S2Uaq4VPluBvrPpr5vLXq9S_JjKo&usqp=CAU" onClick={redirect}/>
                  </a>
                  <br />
                </div>

              </div>
              
              
            </div>
          </li>
        </ul>
      </form>

    </div>
  </div>
</>
);
}

export default Home;