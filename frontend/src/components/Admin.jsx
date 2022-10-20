import React from 'react';
import "./AdminStyles.css";
import { useState,useEffect } from 'react';
import axios from "axios";

const Admin = () => {
    const [rq,setRq] = useState([]);
    const [formData, Setformdata] = useState({});
    useEffect(()=>{
        axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchall`)
        .then(({data})=>{
             setRq(data);
        });
       },[])

      const handleChange = (e)=>{
         let name = e.target.name;
         Setformdata({
         ...formData,
         [name]: e.target.value,  
         });
      }

      const handleSubmit = (e)=>{
         e.preventDefault();
         axios.post(`https://intoglo-first-api.herokuapp.com/quote/fetchByEmail`, formData, {
         headers: { "Content-Type": "application/json" },
         }).then((responce)=>{
            const {data} = responce;
            setRq(data);
         })
      };

      const handle_sea = ()=>{
        axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/sea`)
        .then(({data})=>{
             setRq(data);
        });
      }

      const handle_all = ()=>{
         window.location.reload();
      }

      const handle_air = ()=>{
         axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/air`)
         .then(({data})=>{
              setRq(data);
         });
       }

      const handle_sea_lcl = ()=>{
         axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/sea?transportation_by=LCL`)
         .then(({data})=>{
              setRq(data);
         });
       }

      const handle_sea_fcl = ()=>{
         axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/sea?transportation_by=FCL`)
         .then(({data})=>{
              setRq(data);
         });
       }

      const handle_air_sc = ()=>{
         axios.get(`https://intoglo-first-api.herokuapp.com/quote/fetchByMode/air?transportation_by=SC`)
         .then(({data})=>{
              setRq(data);
         });
      }
      
      const handleacc = () =>{     
         var acc = document.getElementsByClassName("accordion");
         var i;
         for (i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function() {
             this.classList.toggle("active");
             var panel = this.nextElementSibling;
             if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
             } else {
               panel.style.maxHeight = panel.scrollHeight + "px";
             } 
           });
         }
         }
         return (
            <>
            <div className='header'>
             <div className='header1'>
               <img src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/logo/original/intoglo_logo.png?tr=w-150" alt="intoglo_logo" />
               <div className='searchform'>
               <form onSubmit={handleSubmit}>
               <input type="text" name="email" placeholder='Enter email...' onChange={handleChange}/>
               <input type="submit" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value="Search"/>
               </form>
               </div> 
             </div>
            </div>
            <div className='body'>
             <div className='body1'>
              <div className='sidebar'>
                
        <aside class="w-64" aria-label="Sidebar">
           <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
              <ul class="space-y-2">
                 <li>
                    <a href="/admin" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                       <span class="ml-3">Dashboard</span>
                    </a>
                 </li>
                 <li>
                    <a href="/requestquote" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Request Quote</span>
                       <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                    </a>
                 </li>
                 <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Total Quotes</span>
                       <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{rq.length}</span>
                    </a>
                 </li>
                 {/* <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                    </a>
                 </li>
                 <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                    </a>
                 </li>
                 <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                    </a>
                 </li>
                 <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                       <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                    </a>
                 </li> */}
              </ul>
           </div>
        </aside>
              <div className='searchfil'>
              <button type="button" onClick={handle_sea} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SEA</button>
              <button type="button" onClick={handle_air} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">AIR</button>
              <button type="button" onClick={handle_all}class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ALL</button>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LCL</button>
              <button type="button" onClick={handle_sea_lcl} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SEA + LCL</button>
              <button type="button" onClick={handle_sea_fcl} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SEA + FCL</button>
              <button type="button" onClick={handle_air_sc} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SC</button>
              </div>
              </div>
              <div>
                 
              </div>
              <div className='data'>
                 <div>
                    
                     
                 </div>
               {rq && rq.map((e)=>{
                return (
                    <>
                    <button onClick={handleacc} class="accordion">Request Quote : {e.id}</button>
                    <div class="panel">
                    <table id="customers">
          <tr>
            <td>Request Quote Id </td>
            <td>{e.id}</td>
          </tr>
          <tr>
            <td>Product Name </td>
            <td>{e.product_details.name}</td>
          </tr>
          <tr>
            <td>Product Details</td>
            <td>{e.product_details.discription}</td>
          </tr>
          <tr>
            <td>HS Code</td>
            <td>{e.product_details.hscode}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{e.product_details.category}</td>
          </tr>
          <tr>
            <td>Level</td>
            <td>{e.product_details.level}</td>
          </tr>
          <tr>
            <td>Delivery Mode</td>
            <td>{e.delivery_mode}</td>
          </tr>
          <tr>
            <td>Transportation By</td>
            <td>{e.transportation_by}</td>
          </tr>
          <tr>
            <td>Container Type</td>
            <td>{e.container_type}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{e.weight}mt</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>{e.volume}m3</td>
          </tr>
          <tr>
            <td>Location From</td>
            <td>{e.location_from}</td>
          </tr>
          <tr>
            <td>Location To</td>
            <td>{e.location_to}</td>
          </tr>
          <tr>
            <td>Ready to load</td>
            <td>{e.ready_to_load}</td>
          </tr>
          <tr>
            <td>Associated services</td>
            <td>{e.associated_services}</td>
          </tr>
          {e.by_units ? <>
           {e.dimensions.map((c)=>{
                          return(
                             <>
                             <tr>
                             <td>Dimensions</td>
                             <td>Width : {c.width} &nbsp;&nbsp;&nbsp; Height : {c.height} &nbsp;&nbsp;&nbsp; Length : {c.length} &nbsp;&nbsp;&nbsp; Quantity : {c.quantity} &nbsp;&nbsp;&nbsp; Gross Weight : {c.gross_weight}</td>
                             </tr>
                             </>
                          )
                        })}
          </>:<>
          <tr>
            <td>Demensions</td>
            <td>N/A</td>
          </tr>
          </>}
          <tr>
            <td>First_Name </td>
            <td>{e.first_name}</td>
          </tr>
          <tr>
            <td>Last_Name </td>
            <td>{e.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{e.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{e.phone}</td>
          </tr>
        </table>
                    </div>
                    </>
                )
               })}
              {/* <div className='users'>
        
              </div> */}
              </div>
             </div>
             {/* <div className='users'>
        
             </div> */}
            </div>
            </>
          )
}

export default Admin