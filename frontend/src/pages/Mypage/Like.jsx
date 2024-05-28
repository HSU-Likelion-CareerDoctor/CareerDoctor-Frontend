import React from 'react';
import styled from 'styled-components';

const MyLikeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 10px;
  font-size: 1vw;
  z-index: 999;
`;

const Like = () => {
  return (
    <MyLikeContainer>
      <div>좋아요를 표시했습니다.</div>
    </MyLikeContainer>
  );
};

export default Like;
