import React, { useState, useEffect } from "react";
// import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Cookies from "js-cookie";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AddFeeHeadForm from "./components/Master/AddFeeHeadForm";
import AddAcademicYearForm from "./components/Master/AddAcademicYearForm";
import AddStudentForm from "./components/Master/AddStudentForm";
import GenerateReceipt from "./components/Generatereceipt";
import AddCategoryForm from "./components/Master/AddCategoryForm";
import MapFeeHeadsForm from "./components/Master/MapFeeHeadsForm";
import CollectFee from "./components/CollectFee";
import Dashboard from "./components/Dashboard";
import AddBranchForm from "./components/Master/AddBranchForm";

const App = () => {
  const [isLoggedin, setisLoggedin] = useState(true);
  useEffect(() => {
    if (Cookies.get("token") === "") {
      setisLoggedin(!isLoggedin);
    }
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };
  const formatTime = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };
  const formatWeekday = () => {
    const options = {
      // year: 'numeric',
      // month: 'long',
      // day: 'numeric',
      weekday: "long",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  return (
    <>
      <div>
        {/* <Layout /> */}
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/logout" component={LoginPage} />
            <Router>
              {isLoggedin ? (
                <div className="container">
                  <Navbar />
                  <div className="content">
                    <Sidebar />
                    <div style={styles.mainContent}>
                      <div style={styles.greeting}>
                        <h1>Hello, User</h1>
                        <div className="dt" style={styles.dt}>
                          <p className="para">{formatDate()}</p>
                          <p className="para">{formatWeekday()}</p>
                          <p className="para">{formatTime()}</p>
                        </div>
                      </div>
                      <hr style={styles.horizontalLine} />

                      <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route
                          exact
                          path="/collectfee"
                          component={CollectFee}
                        />
                        <Route
                          exact
                          path="/generatereceipts"
                          component={GenerateReceipt}
                        />
                        <Route
                          exact
                          path="/addStudent"
                          component={AddStudentForm}
                        />
                        <Route
                          exact
                          path="/addacademicyear"
                          component={AddAcademicYearForm}
                        />
                        <Route
                          exact
                          path="/addbranch"
                          component={AddBranchForm}
                        />
                        <Route
                          exact
                          path="/addfeeheads"
                          component={AddFeeHeadForm}
                        />
                        <Route
                          exact
                          path="/addcategory"
                          component={AddCategoryForm}
                        />
                        <Route
                          exact
                          path="/mapfeetocat"
                          component={MapFeeHeadsForm}
                        />
                        <Route exact path="/logout" component={""} />
                      </Switch>
                    </div>
                  </div>
                </div>
              ) : (
                <LoginPage />
              )}
            </Router>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },
};
