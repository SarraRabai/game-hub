import useuseData from './useData';


export interface Genre {
id: number;
name:string;
image_background:string;
}


const useGenres = () => useuseData<Genre>('/genres');

export default useGenres;