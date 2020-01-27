import React from "react";
import { withRouter} from "react-router-dom";
import { BackButton } from "./Style"

const BackBtn = ({ history }) => (
  <>
    <BackButton onClick={history.goBack}>
        Back
    </BackButton>
  </>
);

export default withRouter(BackBtn);
