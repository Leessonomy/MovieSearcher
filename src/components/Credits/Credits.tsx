import React from "react";
import {
  CastPerson,
  FieldCastCharacter,
  FieldCastName,
  CrewPerson,
  CharacterCastTitle,
  NameCastTitle,
  FieldCrewJob,
  CreditsContainer,
  FieldCrewName,
  FieldCrewDepartament,
  NameCrewTitle,
  NameCrewJob,
  NameCrewDepartment,
  CastWrapper,
  CrewWrapper,
  BackLink
} from "./Style";

const CastInfo = ({ cast, crew, history }) => {
  return (
    <CreditsContainer>
      <BackLink onClick={history.goBack}>
        Return to Movie Page
      </BackLink>
      <h2>Cast:</h2>
      <CastWrapper>
        <CharacterCastTitle>Character:</CharacterCastTitle>
        <NameCastTitle>Name:</NameCastTitle>
      </CastWrapper>
      {cast.map(cast => {
        return (
          <CastPerson>
            <FieldCastCharacter>
              {cast.character || "Not available"}
            </FieldCastCharacter>
            <FieldCastName>{cast.name || "Not available"}</FieldCastName>
          </CastPerson>
        );
      })}
      <h2>Crew:</h2>
      <CrewWrapper>
        <NameCrewTitle>Name:</NameCrewTitle>
        <NameCrewJob>Job:</NameCrewJob>
        <NameCrewDepartment>Department:</NameCrewDepartment>
      </CrewWrapper>
      {crew.map(crew => {
        return (
          <CrewPerson>
            <FieldCrewName>{crew.name || "Not available"}</FieldCrewName>
            <FieldCrewJob>{crew.job || "Not available"}</FieldCrewJob>
            <FieldCrewDepartament>
              {crew.department || "Not available"}
            </FieldCrewDepartament>
          </CrewPerson>
        );
      })}
    </CreditsContainer>
  );
};

export default CastInfo;
