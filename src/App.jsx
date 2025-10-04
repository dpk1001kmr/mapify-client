import React from "react";
import DashboardLayout from "./pages/DashboardLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <DashboardLayout>
      <HomePage />
    </DashboardLayout>
  );
};

export default App;
