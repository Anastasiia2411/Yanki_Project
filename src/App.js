import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { LikedPage } from "./pages/Liked/LikedPage";
import { BuysPage } from "./pages/Buys/BuysPage";
import { Layout } from "./components/Layout/Layout";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/liked" element={<LikedPage/>}/>
            <Route path="/buys" element={<BuysPage/>}/>
            <Route path="*" element={<div>Not found page</div>}/>
        </Route>
    )
);

export function App() {
    return (
        <RouterProvider router={router}/>
    );
}




