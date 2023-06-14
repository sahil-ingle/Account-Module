import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  let history = useHistory();

  const [logout, setlogout] = useState(false);
  const removeCookies = () => {
    setlogout(!logout)
    Cookies.set("token", "");
    history.push("./login");
    window.location.reload();
  };

  return (
    <aside style={styles.sidebar}>
      <ul style={styles.optionList}>
        <Link to="/collectfee" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-money-bill-wave" style={styles.icon}></i>
            <span style={styles.optionText}>Collect Fee</span>
          </li>
        </Link>
        <Link to="/generatereceipts" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-receipt" style={styles.icon}></i>
            <span style={styles.optionText}>Generate Receipts</span>
          </li>
        </Link>

        <div id="mastertab" className="navlink">
          <li className="master" style={styles.option}>
            <i className="fas fa-table" style={styles.icon}></i>
            {/* <span style={styles.optionText}>Master Tab</span> */}
            <div className="masterlist">
              <span
                onClick={() => {
                  setActive(!active);
                }}
                style={styles.optionText}
                className="dropdown-btn"
              >
                Master
                <i id="caret-down" className="fa fa-caret-down"></i>
              </span>
              {active && (
                <ul className="dropdown-container">
                  <li className="">
                    <Link to="/addStudent" className="navlink">
                      Add Student
                    </Link>
                  </li>
                  <li>
                    <Link to="addbranch" className="navlink">
                      Add New Branch
                    </Link>
                  </li>
                  <li>
                    <Link to="addacademicyear" className="navlink">
                      Add Academic Year
                    </Link>
                  </li>
                  <li>
                    <Link to="addfeeheads" className="navlink">
                      Add Fee Heads
                    </Link>
                  </li>
                  <li>
                    <Link to="addcategory" className="navlink">
                      Add Category
                    </Link>
                  </li>
                  <li>
                    <Link to="mapfeetocat" className="navlink">
                      Mapping Fee Heads to Category
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </div>

        <Link to="#" onClick={removeCookies} className="navlink">
          <li style={styles.option}>
            <i className="fas fa-sign-out-alt" style={styles.icon}></i>
            <span style={styles.optionText}>Logout</span>
          </li>
        </Link>
      </ul>
      <footer style={styles.footer}>
        <p style={styles.footerText}> Ⓒ GetFly Technologies</p>
      </footer>
    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    backgroundColor: "#f9f9f9",
    padding: "10px 45px",
  },
  optionList: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px 0",
  },
  icon: {
    marginRight: "30px",
    width: "10%",
  },
  optionText: {
    fontSize: "16px",
  },
  footer: {
    // marginTop: "auto",
    // alignSelf: "flex-end",
  },
  footerText: {
    fontSize: "12px",
    color: "#666",
    // alignSelf: "flex-end",
    // marginTop: "400px",
  },
};
