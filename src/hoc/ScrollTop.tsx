import React, { Component } from "react";
import { withRouter, Route, RouteComponentProps } from "react-router-dom";
import { IScrollToTopRouteProps } from "./Types";

class ScrollToTopRoute extends Component<
  IScrollToTopRouteProps & RouteComponentProps
> {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { component: Component, RouteKey, location, ...rest } = this.props;
    const Key = RouteKey ? location.pathname : null;
    return (
      <Route {...rest} render={(props) => <Component {...props} key={Key} />} />
    );
  }
}

export default withRouter(ScrollToTopRoute);
