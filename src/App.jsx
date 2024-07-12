import React from "react";

import "./App.css";

function App() {
 
  return (
    <div
      className="outer-frame">
    
      
      <div className="container">
        <div className="checkbox-container">
          <label className="page-title">All Pages</label>
          <input type="checkbox" name="page2" />
        </div>{" "}
        <div className="hr">
          <hr />
        </div>
        <div className="checkbox-container">
          <label className="page-title">Page 1</label>
          <input type="checkbox" name="page1" />
        </div>
        <div className="checkbox-container">
          <label className="page-title">Page 2</label>
          <input type="checkbox" name="page2" />
        </div>
        <div className="checkbox-container">
          <label className="page-title">Page 3</label>
          <input type="checkbox" name="page3" />
        </div>
        <div className="checkbox-container">
          <label className="page-title">Page 4</label>
          <input type="checkbox" name="page4" />
        </div>
        <hr />
        <div className="button">
          <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default App;
