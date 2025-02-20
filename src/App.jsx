import React, { useContext, useState, useEffect } from "react";
import Login from "./pages/Login";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // it is used to get the data from AuthProvider.
  const auth = useContext(AuthContext);
  // destructure authData
  const { employees, admin } = auth || { employees: [], admin: null };

  // variable that tells whether signed in user is an admin or an emloyee.
  // we check if there is any user data in the local storage and set it to the user otherwise set it to null.
  const [user, setUser] = useState(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  //  to keep track whether user is signed in or not when we refresh or close the tab.
  // we check if there is any loggedInUser data in the local storage and set it to the loggedInUser otherwise set it to null.
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUserDet = localStorage.getItem("loggedInUser");
    return savedUserDet ? JSON.parse(savedUserDet) : null;
  });

  useEffect(() => {
    // to store the user and loggedInUser data in the local storage when it is updated.

    localStorage.setItem("user", JSON.stringify(user));

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

  }, [user, loggedInUser]);

  // function to authenticate user is employee or admin or a valid user.
  function handleLogin(email, password) {
    // to authenticate admin
    if (email === "admin@me.com" && password === "123") {
      //  to get the information of the employee if the email and password matches.
      setUser("admin");
      setLoggedInUser(admin[0]);
    }

    // to authenticate employee
    else if (auth) {
      //  to get the information of the employee if the email and password matches.
      const employee = employees.find(
        (emp) => emp.email === email && emp.password === password
      );

      // if the employee is found then set the user as employee and set the loggedInUser.
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
      } else {
        alert("Invalid credentials");
        setUser(null);
      }
    }
    // if user is not authenticated as a valid user.
    else {
      alert("Invalid credentials");
      setUser(null);
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user === "employee" ? <EmployeeDashboard user={loggedInUser} /> : ""}

      {user === "admin" ? <AdminDashboard /> : ""}
    </>
  );
};

export default App;
