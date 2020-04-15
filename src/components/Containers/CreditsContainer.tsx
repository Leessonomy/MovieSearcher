import React from "react";
import { connect } from "react-redux";
import CastInfo from "../Credits/Credits";
import { History } from "history";
import { withRouter } from "react-router-dom";

interface CastInfoContainerProps {
  credits: any;
  history: History;
}
class CastInfoContainer extends React.Component<CastInfoContainerProps> {
  render() {
    return (
      <CastInfo history={this.props.history} cast={this.props.credits.cast} crew={this.props.credits.crew} />
    );
  }
}

const mapStateToProps = (state) => ({
  credits: state.movies.movie.credits
});

export default withRouter(connect(mapStateToProps)(CastInfoContainer));
