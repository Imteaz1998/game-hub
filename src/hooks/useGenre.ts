
import useData from "./useData";
import genre from "../Data/genre";

export interface Genre{
    id:number;
    name: string;
    image_background: string; 
}
const useGenres=()=>({data:genre,isLoading:false,error:null});
export default useGenres