import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
    name:"list",
    initialState:{
        tasks: [],
    },
    reducers: {
        addTask: (state, action) =>{
            state.tasks.push(action.payload);
        },
        toggleTaskStatus: (state, action) => {
            const { task } = action.payload;
            const toggledTask = state.tasks.find((t) => t.task === task);
            if (toggledTask) {
              toggledTask.status = !toggledTask.status;
            }
          },
    },
});

export const {addTask, toggleTaskStatus} = listSlice.actions;
export default  listSlice.reducer;