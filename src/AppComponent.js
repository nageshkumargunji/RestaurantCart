import React from "react";
// import ReactDom from "react-dom";
import Subscription from './Components/Subscription'
import NewSubscription from './Components/NewSubscription/NewSubscription';
function AppComponent() {
    let Subscriptions=[
      {
        id:"1",
        date:(new Date('2021','03','23')),
        title:"ret",
        amount:"124.78",
      },
      {
        id:"2",
        date:(new Date('2022','04','23')),
        title:"re",
        amount:"127.78",
      },
      {
        id:"3",
        date:(new Date('2025','03','23')),
        title:"r",
        amount:"60.78",
      },
      
    ]
    
      return (
        <div>
         <NewSubscription></NewSubscription>  
    
          <Subscription date={Subscriptions[0].date} title={Subscriptions[0].title}  Amount={Subscriptions[0].amount}/>
          <Subscription date={Subscriptions[1].date} title={Subscriptions[1].title}  Amount={Subscriptions[1].amount}/>
          <Subscription date={Subscriptions[2].date} title={Subscriptions[2].title}  Amount={Subscriptions[2].amount}/>
      
        
        
        
        </div>
      );
    }
    
    export default AppComponent;
    