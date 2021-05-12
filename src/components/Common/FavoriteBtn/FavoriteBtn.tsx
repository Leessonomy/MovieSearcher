import React from "react";
import { StyleBtn } from "./Style";

const FavoriteBtn = ({ toggleText, handlerClick }) => (
  <div>
    <StyleBtn onClick={handlerClick}>
      {toggleText ? "Remove from favorite list" : "Add to favorite list"}
    </StyleBtn>
  </div>
);

export default FavoriteBtn;
