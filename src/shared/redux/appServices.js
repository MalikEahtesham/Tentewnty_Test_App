// export {default as GetMoviesList} from './actions/GetMoviesList'

import { GetMovieDetailByID,  } from "./actions/GetMovieDetailByID";
import { GetMovieImagesByID, GetMovieImagesByIDClear } from "./actions/GetMovieImagesByID";
import { GetMoviesList } from "./actions/GetMoviesList";


export const appServices = {
    GetMoviesList,
    GetMovieDetailByID,
    GetMovieImagesByIDClear,
    GetMovieImagesByID
} 