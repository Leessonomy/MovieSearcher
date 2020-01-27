import styled from "styled-components";

const CreditsContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  margin-right: 38px;
  font-family: Segoe;
`;

const CastPerson = styled.li`
  margin: 10px 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3px 0;
  border-bottom: 1px solid #9c9696;
  background-color: #dcdadaab;
  color: #000000;
  font-weight: 600;
`;

const FieldCastName = styled.span`
  text-align: right;
`;
const FieldCastCharacter = styled.span`
  text-align: left;
  margin-right: 20px;
`;

const CrewPerson = styled.li`
  margin: 10px 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-basis: 10%;
  border-bottom: 1px solid #9c9696;
  background-color: #dcdadaab;
  color: #000000;
  font-weight: 600;
`;
const FieldCrewJob = styled.span`
  margin-right: 20px;
  display: flex;
  flex-basis: 15%;
`;
const FieldCrewName = styled.span`
  text-align: right;
  flex-basis: 9%;
`;

const FieldCrewDepartament = styled.span`
  text-align: right;
  flex-basis: 9%;
`;
const CharacterCastTitle = styled.h3``;

const NameCastTitle = styled.h3``;
const NameCrewTitle = styled.h3`
  display: inline-block;
`;
const NameCrewJob = styled.h3`
  display: inline-block;
`;
const NameCrewDepartment = styled.h3`
  display: inline-block;
`;

const CrewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackLink = styled.a`
font-size: 18px;
cursor: pointer;
font-weight: 800;
color: #0c8bd6eb;
border-bottom: 1px solid #0c8bd6eb;
`

export {
  CastPerson,
  FieldCastCharacter,
  FieldCastName,
  CrewPerson,
  FieldCrewName,
  FieldCrewJob,
  FieldCrewDepartament,
  CreditsContainer,
  CharacterCastTitle,
  NameCastTitle,
  NameCrewTitle,
  NameCrewJob,
  NameCrewDepartment,
  CrewWrapper,
  CastWrapper,
  BackLink
};
