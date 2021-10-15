
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../BookingJob.scss";
export default function BookingJob(props) {

  return (
    <div className="booking">
      <div className="container mia">
        <input id="tab-1" type="radio" name="tabs" defaultChecked />
        <label htmlFor="tab-1">Tab-1</label>
        <input id="tab-2" type="radio" name="tabs" />
        <label htmlFor="tab-2">Tab-2</label>
        <input id="tab-3" type="radio" name="tabs" />
        <label htmlFor="tab-3">Tab-3</label>
        <div className="content">
          <div id="content-1">
            <h2>Ta</h2>
            <p>
              This is t
            </p>
          </div>
          <div id="content-2">
            <h2>Tab-2</h2>
            <p>
              This is tab2
            </p>
          </div>
          <div id="content-3">
            <h2>Tab-3</h2>
            <p>
              This is tab3
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
