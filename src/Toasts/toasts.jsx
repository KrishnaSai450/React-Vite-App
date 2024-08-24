import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successToasts,errorToasts } from './toastHelper';


const CustomToast=({message})=>{
    const notify=()=>{
        successToasts("Hii","top-right")
    }
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}

export default CustomToast

