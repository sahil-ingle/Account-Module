import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import MainContent from "./Maincontent";
import AddStudentForm from "./AddStudentForm";
import AcademicYearPage from "./Master/AddAcademicPage";
import GenerateReceipt from "./Generatereceipt";
import CollectFee from "./CollectFee";
import Cookies from "js-cookie";
// import AddBranchPage from "./Master/AddBranchPage";
// import AddFeeHeadsPage from "./Master/AddFeeHeadsPage";
import Dashboard from "./Dashboard";
// import AddCategoryPage from "./Master/AddCategoryPage";
import MappingFeeHeadsToCategoriesPage from "./Master/MappingFeeHeadsToCategoriesPage";
import AddBranchForm from "./Master/AddBranchForm";
import AddFeeHeadForm from "./AddFeeHeadForm";
import AddCategoryForm from "./AddCategoryForm";
import AddAcademicYearForm from "./AddAcademicYearForm";
import MapFeeHeadsForm from "./MapFeeHeadsForm";

const Layout = () => {
  let history = useHistory();
  useEffect(() => {
    if (!Cookies.get("token")) {
      history.push("./login");
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
      {/* <Layout /> */}

      <Router>
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
                <Route exact path="/collectfee" component={CollectFee} />
                <Route
                  exact
                  path="/generatereceipts"
                  component={GenerateReceipt}
                />
                <Route exact path="/addStudent" component={AddStudentForm} />
                <Route
                  exact
                  path="/addacademicyear"
                  component={AddAcademicYearForm}
                />
                <Route exact path="/addbranch" component={AddBranchForm} />
                <Route exact path="/addfeeheads" component={AddFeeHeadForm} />
                <Route exact path="/addcategory" component={AddCategoryForm} />
                <Route exact path="/mapfeetocat" component={MapFeeHeadsForm} />
                <Route exact path="/logout" component={""} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Layout;

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
