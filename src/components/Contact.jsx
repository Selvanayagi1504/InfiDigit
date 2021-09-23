import React from "react";
import {useState} from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Contact() {
  const [act,setact] = useState(false);
    function handleToggle(){
        setact(!act);
    }
  return (
    <div className="contact">
      <label class="switch"><input type="checkbox" id="toggle2" onClick={()=>handleToggle()} /><span class="slider round"></span></label>
                    <br/>
                    <label class="switch">
                    <input type="checkbox" id="toggle2" onClick={()=>handleToggle()} />
                      <span class="slider round"></span>
                    </label>
 <div class={act?"":"none"}>
                                <h1>helo</h1>
                            </div>
<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>


      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
