import React, { Component } from "react";
import { withRouter, Route, RouteComponentProps } from "react-router-dom";

interface ScrollToTopRouteProps {
  location: any;
  RouteKey?: boolean;
  component: any;
}

class ScrollToTopRoute extends Component<
  ScrollToTopRouteProps & RouteComponentProps
> {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { component: Component, RouteKey, location, ...rest } = this.props;
    const Key = RouteKey ? location.pathname + location.id : null;
    console.log(location.pathname + location.id);

    return (
      <Route {...rest} render={props => <Component {...props} key={Key} />} />
    );
  }
}

export default withRouter(ScrollToTopRoute);
