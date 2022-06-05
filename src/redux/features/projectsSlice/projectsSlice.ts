import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsState } from "../../../types/ProjectsTypes";

const initialState: ProjectsState = [];

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    loadAllProjects: (projects, action: PayloadAction<ProjectsState>) => [
      ...action.payload,
    ],
    deleteProject: (projects, action: PayloadAction<string>) =>
      projects.filter((project) => project.id !== action.payload),
  },
});

export const {
  loadAllProjects: loadAllProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
} = projectsSlice.actions;

export default projectsSlice.reducer;
