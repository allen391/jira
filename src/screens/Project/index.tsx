import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import KanBan from "../KanBan";
import Epic from "../Epic";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        {/*projects/:projectId/kanban*/}
        <Route path={"/kanban"} element={<KanBan />} />
        {/*projects/:projectId/epic*/}
        <Route path={"/epic"} element={<Epic />} />
        <Route index element={<KanBan />} />
      </Routes>
    </div>
  );
};
