import axios from"axios"
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    BestSellerData :[]
}

 const BestSellerProductSlice = createSlice({
    name: "BestSellerProduct",
    initialState,
    reducers: {
      fetchBesllerProduct(state, actions) {
            
            state.data = actions.payload;
        }

    }
})

export const { fetchBesllerProduct } = BestSellerProductSlice.actions;
export default BestSellerProductSlice.reducer

export function getbestsellerProduct() {
    return async function getbestsellerProductThunk(dispatch,state){

        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        dispatch(fetchBesllerProduct(data))
    }

}