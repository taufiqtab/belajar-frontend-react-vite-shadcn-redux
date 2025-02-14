import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface RenameState {
    value: string
}

const initialState: RenameState = {
    value: ''
}

export const renameSlice = createSlice({
    name: 'rename',
    initialState,
    reducers: {
        rename: (state, action : PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { rename } = renameSlice.actions
export const selectRename = (state : RootState) => state.rename.value
export default renameSlice.reducer