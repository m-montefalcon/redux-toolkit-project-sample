//DUCKS pattern
//Import the basic imports needed in the toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//define type of the counter state
export interface CounterState{
    value: number;
}
//initializing the value of the counter state
const initialState : CounterState = {
    value: 10
}

//creating slice with its name, the initial state and the reducers
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //increment
        //can do this instead of copying the object since that immer makes it immutable 
        incremented(state){
            state.value++; 
        },
        //decrement

        //amountadded
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }

        //reset
        
    }
});

export const { incremented, amountAdded } = counterSlice.actions; //Exporting the incremented as actions
export default counterSlice.reducer; //Exporting all the reducers inside counter slices as deafu