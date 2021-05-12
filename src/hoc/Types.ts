import { Location } from "history";

export interface IScrollToTopRouteProps {
  exact?: boolean;
  path: string;
  location: Location;
  RouteKey?: boolean;
  component: any;
}
