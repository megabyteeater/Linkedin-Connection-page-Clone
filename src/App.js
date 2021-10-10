import React from 'react';
import './App.css';
import Header from "./Header";
import Bar from"./Bar";
import Request from "./Request";
import Line2 from"./Line2";
// import Request2 from "./Request2";
import PrCards from "./PrCards"
import Line3 from"./Line3";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        {/*header*/}
         <Header /> 

        {/*App Body*/}
        <div className="app_body">
            {/* received/sent bar */}
            <Bar />
            {/* line2 */}
            <Line2 />
            {/* request */}
            <Request />
            <br />
            <Request />
            {/* line3 */}
            <Line3 />

            {/* Feed */}
            {/* Cards */}
            <div className="Fcards">
                <PrCards /> <PrCards /> <PrCards /> <PrCards />
            </div>
            <div className="Fcards">
                <PrCards /> <PrCards /> <PrCards /> <PrCards />
            </div>
            
            

        </div>
        

      </header>
    </div>
  );
}

export default App;
