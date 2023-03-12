import React from 'react';
import { useParams } from 'react-router-dom';

function Videos() {
  const { keyword } = useParams();
  return <div>{keyword}</div>;
}

export default Videos;
