import { IHistoryApi } from "../Containers/MovieList/Types";
import { ICast, ICrew } from "../Containers/Types";

export interface ICreditsProps extends Pick<IHistoryApi, "history"> {
  cast: ICast[];
  crew: ICrew[];
}
