import { Location, History } from "history";

export interface AppProps {
  location: Location;
  history: History;
  genresId: string;
  clearGenres: () => void;
}
