import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.section`
  width: 80%;
  padding-top: 15px;
  margin: 0 auto;
  label {
    display: none;
  }
`;

export const Form = styled.form`
  margin-top: 0px;
`;

export const InputField = styled.input`
  margin: 0 auto;
  display: block;
  border: 0.5px solid #b6b6b6;
  border-radius: 10px;
  height: 40px;
  font-size: 17px;
  padding-left: 8px;
  color: #474747;
  font-family: ${props => props.theme.bodyFont};
  width: 100%;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

export const LoginInput = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/9437789/45782441-9c069600-bc6b-11e8-8584-6c9d87f84612.png);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
  margin-top: 20px;
`;

export const PasswordInput = styled(InputField)`
  background: url(https://user-images.githubusercontent.com/9437789/45782440-9c069600-bc6b-11e8-8252-02db112ea399.png);
  background-repeat: no-repeat;
  background-position: 97% 50%;
  background-size: auto 27px;
`;

export const Login = styled.button`
  background: #15b7d3;
  border-radius: 10px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  font-family: ${props => props.theme.bodyFont};
`;

export const StyledLink = styled(Link)`
  background: #6bc869;
  display: block;
  border-radius: 10px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  margin-top: 0px;
  font-size: 17px;
  color: #fff;
  font-family: ${props => props.theme.bodyFont};
  margin-bottom: 25px;
`;

export const Or = styled.p`
  text-align: center;
  margin: 25px 0;
`;
