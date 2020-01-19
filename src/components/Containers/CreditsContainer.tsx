import React from "react";
import { connect } from "react-redux";
import CastInfo from "../Credits/Credits";

interface CastInfoContainerProps {
  movie: any;
}

class CastInfoContainer extends React.Component<CastInfoContainerProps> {
  render() {
    return (
      <CastInfo cast={this.props.movie.cast} crew={this.props.movie.crew} />
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie.credits
});

export default connect(mapStateToProps)(CastInfoContainer);
