import { configureStore } from '@reduxjs/toolkit'
import  countSlice  from './components/slices/countSlice'

export default configureStore({
  reducer: {
    cartItemCount: countSlice
  }
})