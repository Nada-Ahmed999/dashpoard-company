import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";

import {
  faFileCircleCheck,
  faHourglassEnd,
  faLaptopCode,
  faListCheck,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { content } from "../context/DataApi";


export default function kpi() {
  let { employees, client, projects, tasks } = useContext(content);
  

  function overdueTasks() {
    let last = tasks.filter((task) => task["status"] !== "Done");
    return last.length;
  }

  function Rate() {
    let completedTasks = tasks.filter((t) => t.status === "Done").length;
    let completionRate = Math.round((completedTasks / tasks.length) * 100);

    return completionRate;
  }

  const color = [
    "#5b345b",
    "#412b72",
    "#750d61",
    "#02917e",
    "#034ab2",
    "#1c4f3e",
  ];
  const partment = [
    "Total Employees",
    "Total Clients",
    "Active Projects",
    "Total Tasks",
    "Overdue Tasks",
    "Completion Rate",
  ];
  const data = {
    "Total Employees": employees ? employees.length : 0,
    "Total Clients": client ? client.length : 0,
    "Active Projects": projects ? projects.length : 0,
    "Total Tasks": tasks ? tasks.length : 0,
    "Overdue Tasks": tasks ? overdueTasks() : 0,
    "Completion Rate": tasks ? `${Rate()}%` : 0,
  };
  const icon = [
    faUserTie,
    faUsers,
    faLaptopCode,
    faListCheck,
    faFileCircleCheck,
    faHourglassEnd,
  ];

  return (
    <>
      <div className="d-flex justify-content-around bg-light container-lg ">
        {partment.map((part, index) => {
          return (
            <div
              key={index}
              className=" p-4  m-1  fw-bold w-100 text-center"
              style={{
                backgroundColor: `${color[index]}`,
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              {part}
              <h1 className="text-center text-light  py-3">{data[part]}</h1>

              <FontAwesomeIcon
                icon={icon[index]}
                className="fs-1 "
                style={{ color: "#ffffff" }}
              ></FontAwesomeIcon>
            </div>
          );
        })}
      </div>
    </>
  );
}
