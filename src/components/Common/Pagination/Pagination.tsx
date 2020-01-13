import React from "react";
import {
  ButtonNext,
  ButtonPrev,
  ButtonNextWrapper,
  ButtonPrevWrapper
} from "./style";

const Pagination = ({
  handlePrevClick,
  handleNextClick,
  currentPage,
  totalPages
}) => {
  const showNextButton = currentPage < totalPages;
  const showPrevButton = currentPage > 1;
  return (
    <div>
      {showPrevButton ? (
        <ButtonPrevWrapper>
          <ButtonPrev onClick={handlePrevClick} />
        </ButtonPrevWrapper>
      ) : null}
      {showNextButton ? (
        <ButtonNextWrapper>
          <ButtonNext onClick={handleNextClick} />
        </ButtonNextWrapper>
      ) : null}
    </div>
  );
};

export default Pagination;

/* const Pagination = (props) => {
  let pageLinks = [];
  for (let i = 1; i < props.pages; i++) {
      let active = props.currentPage == i ? 'active' : '' ;
      
  pageLinks.push(<li className={`waves-effect`} key={i} onClick={() => props.nextPage(i)}>{i}</li>)
  }

  return(
    <div>
    <div>
        <ul>
{props.currentPage > 1 ? <button className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}>Prev</button> : ''}
{pageLinks}
{props.currentPage < props.pages + 1 ? <button className={`waves-effect `} onClick={() => props.nextPage(props.currentPage + 1)}>Next</button> : ''}
        </ul>
    </div>
</div>
  )

} */
