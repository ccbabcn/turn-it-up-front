import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject, ProjectsState } from "../../../types/ProjectsTypes";

const initialState: ProjectsState = [];

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    loadProjects: (
      projects,
      action: PayloadAction<ProjectsState>
    ): ProjectsState => [...action.payload],
    deleteProject: (projects, action: PayloadAction<string>): ProjectsState =>
      projects.filter((project) => project.id !== action.payload),
    createProject: (
      projects,
      action: PayloadAction<IProject>
    ): ProjectsState => [...projects, action.payload],
  },
});

export const {
  loadProjects: loadProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
  createProject: createProjectActionCreator,
} = projectsSlice.actions;

export default projectsSlice.reducer;
