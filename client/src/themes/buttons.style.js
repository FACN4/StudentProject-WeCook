import styled from "styled-components";
import { Field } from "redux-form";

export const Search = styled.button`
  color: white;
  height: 40px;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${props => props.theme.orange};
  font-family: ${props => props.theme.bodyFont};
  padding: 0px 20px;
  width: 100%;
  margin: auto;
  border: none;
`;

export const InputField = styled(Field)`
  border: 0.5px solid #b6b6b6;
  border-radius: 10px;
  height: 40px;
  font-size: 17px;
  padding-left: 8px;
  color: #474747;
  font-family: ${props => props.theme.bodyFont};
  width: 100%;
  margin: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const LocationInput = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/28222381/45644633-dedb3900-bac6-11e8-8838-07261915f486.jpg);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
`;

export const DateInput = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/28222381/45644814-4e512880-bac7-11e8-842b-9f3310232676.jpg);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
`;

export const UserLogin = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/28222381/45644814-4e512880-bac7-11e8-842b-9f3310232676.jpg);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
`;

export const UserPassword = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/28222381/45644814-4e512880-bac7-11e8-842b-9f3310232676.jpg);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
`;
