// import {configureStore }  from '@reduxjs/toolkit';
// import { userData } from './userReducer';


// export let meraStore = configureStore({
//     // data-section
//     reducer:{
//         userData
//     }
// });




import { configureStore } from "@reduxjs/toolkit";

import { userData } from "./userReducer";


export const meraStore = configureStore({

    reducer: {

        userData: userData

    }

});
