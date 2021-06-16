import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddActivity from "./components/AddActivity";
import Activities from "./components/Activities";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import SumActivities from "./components/SumActivities";

const App = () => {
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState() ;

  useEffect(() => {
    const getActivities = async () => {
      const activitiesFromServer = await fetchActivities();
      setActivities(activitiesFromServer);
    }

    getActivities()
  }, [])

  const fetchActivities = async () => {
    const res = await fetch("http://localhost:5000/activities");
    const data = await res.json();

    return data;
  }

  const addActivity = async (activity) => {
    const res = await fetch("http://localhost:5000/activities", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(activity),
    });

    const data = await res.json();
    setActivities([...activities, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddActivity(!showAddActivity)}
          showAdd={showAddActivity}
          onShow={() => setShowActivities(!showActivities)}
          showShow={showActivities}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              
              {showAddActivity && <AddActivity onAdd={addActivity} />}
              {showActivities && <Activities activities={activities} />}

            </>
          )}
        />
        
        {/* <Route path="/sum" component={SumActivities}/> */}
        {/* <Sum activities={activities} /> */}
      </div>
    </Router>
  );
};

export default App;
