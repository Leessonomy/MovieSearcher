import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ICastInfoContainerProps } from "./Types";
import CastInfo from "../Credits/Credits";

class CastInfoContainer extends React.Component<ICastInfoContainerProps> {
  render() {
    return (
      <CastInfo
        history={this.props.history}
        cast={this.props.credits.cast}
        crew={this.props.credits.crew}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  credits: state.movies.movie.credits,
});

export default withRouter(connect(mapStateToProps)(CastInfoContainer));
