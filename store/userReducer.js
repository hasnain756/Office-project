// import {createSlice} from "@reduxjs/toolkit";


// // data-section banane ka function
// export let userPart = createSlice({
//     name:'userPart',
//     initialState:{
//         user:null,
//         items:[],
//     },
//     // action
//     reducers:{

//         setUser(oldData, nyaData){

//             oldData.user = nyaData.payload;

            
//         },

//         addName(oldData, nyaData){

//             let productParaHua = oldData.items.find(function(p){
//                 if(p.id == nyaData.payload.id){
//                     return true;
//                 }
//             });

//             if(productParaHua){
//                 productParaHua.qty++;
//             }else{
//                 nyaData.payload.qty = 1;
//                 oldData.items.push(nyaData.payload)
//             }



//         },
//         removeName(oldData, nyaData){
//             oldData.items.splice(nyaData.payload, 1);
//         },
//         setValue(oldData, nyaData){
            
//             let productParaHua = oldData.items.find(function(p){
//                 if(p.id == nyaData.payload.id){
//                     return true;
//                 }
//             });

//             productParaHua.qty = nyaData.payload.qty;


//         },
//         updateName(oldData, nyaData){

            
//             let productParaHua = oldData.items.find(function(p){
//                 if(p.id == nyaData.payload.id){
//                     return true;
//                 }
//             });


//             if(nyaData.payload.abc == 'inc'){
//                 productParaHua.qty++;
//             }else{
//                 if(productParaHua.qty > 1){
//                     productParaHua.qty--;
//                 }
//             }
            
//             // oldData.items[nyaData.payload.ab] = nyaData.payload.nyaName;

//             // oldData.names.splice(nyaData.payload.ab, 1, nyaData.payload.nyaName);

//         }


//     }
// });

// // yahan  userPart.reducer basially aapka initialState ka object h

// export let userData = userPart.reducer

// export let {addName, removeName, updateName, setValue, setUser} = userPart.actions;






import { createSlice } from "@reduxjs/toolkit";


// data section banane ka function
export let userPart = createSlice({

    name: 'userPart',

    initialState: {
        user: null,
        items: [],
    },

    reducers: {

        // user save karne ke liye
        setUser(oldData, nyaData) {

            oldData.user = nyaData.payload;

        },


        // Product ko cart mein add karna
        addName(oldData, nyaData) {

            let productParaHua = oldData.items.find(function(p) {

                return p.id == nyaData.payload.id;

            });


            if (productParaHua) {

                // agar product already cart mein hai
                productParaHua.qty++;

            } 
            else {

                // agar product pehli dafa cart mein aa raha hai
                let newProduct = {
                    ...nyaData.payload,
                    qty: 1
                };

                oldData.items.push(newProduct);

            }

        },


        // Cart se product remove karna
        removeName(oldData, nyaData) {

            oldData.items.splice(nyaData.payload, 1);

        },


        // Product page se quantity change karna
        setValue(oldData, nyaData) {

            let productParaHua = oldData.items.find(function(p) {

                return p.id == nyaData.payload.id;

            });


            if (productParaHua) {

                productParaHua.qty = Number(nyaData.payload.qty);

            }

        },


        // Cart mein + aur - ke liye
        updateName(oldData, nyaData) {

            let productParaHua = oldData.items.find(function(p) {

                return p.id == nyaData.payload.id;

            });


            if (!productParaHua) {
                return;
            }


            if (nyaData.payload.abc == 'inc') {

                productParaHua.qty++;

            } 
            else {

                if (productParaHua.qty > 1) {

                    productParaHua.qty--;

                }

            }

        }

    }

});


// reducer
export let userData = userPart.reducer;


// actions
export let {
    addName,
    removeName,
    updateName,
    setValue,
    setUser
} = userPart.actions;