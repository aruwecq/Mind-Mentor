import { Outlet } from "react-router-dom";
// import  MentorCard  from "../pages/landing/ui/mentorCard/MentorCard";
import ProectCard from "./landing/ui/proectCard/ProectCard";

export const Router = {    
        path: "",
        element: <Outlet/>,
        children:[
          // {
          //   path: "mentor",
          //   element: <MentorCard/>
          // },
          {
            path: "proect",
            element: <ProectCard/>
          }
        ]
    


    } 