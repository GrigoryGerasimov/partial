import React from "react";
import { Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import Main from "./pages/main/MainPage";
import Teammates from "./pages/teammates/Teammates";
import TeammatesList from "./pages/teammates/TeammatesList";
import TeammatePage from "./pages/teammates/TeammatePage";

export const routes = [
    { path: "", element: <Main/> },
    {
        path: "teammates",
        element: <Teammates/>,
        children: [
            { path: "", element: <TeammatesList/> },
            { path: ":mateId", element: <TeammatePage/> },
            { path: "*", element: <Navigate to=""/> }
        ]
    },
    { path: "feedback", element: "FeedbackPage" },
    { path: "contact", element: "ContactPage" },
    { path: "*", element: <PageNotFound/> }
];
