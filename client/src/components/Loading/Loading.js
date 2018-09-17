import React from "react";
import { SyncLoader } from "react-spinners";
import override from './Loading.style'


const Loading = () => (
  <SyncLoader
    className={override}
    sizeUnit={"px"}
    size={20}
    color={"#15B7D3"}
  />
);

export default Loading;
