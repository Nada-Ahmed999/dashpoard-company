// import Kpi from "./kpi/kpi.jsx";
import "@mui/material";
import "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import BarChart from "./barchart/BarChart.jsx";
import Department from "./department/Department.jsx";
import Pie from "./piechart/PieChart.jsx";
import DataApi from "./context/DataApi.jsx";
import Kpi from "./kpi/Kpi.jsx"


function App() {
  return (
    <>
    {/* provider context */}
      <DataApi>
        {/* review on company by nada-ahmed*/}
        <div className="  " style={{ backgroundColor: "#efefef" }}>
          <h1 className="text-secondary ms-5 p-3 ps-5 ">
            Company Overview Dashboard
          </h1>
          <div className="container bg-light  rounded-3 ">
            {/* kpi */}
            {/* key performance indicator */}

            <div className="py-4">
              <Kpi/>

            </div>

            <div className="d-lg-flex">
              <BarChart />
              <Department />
            </div>

            {/* piechart */}
            <Pie />
          </div>
        </div>
      </DataApi>
    </>
  );
}

export default App;
