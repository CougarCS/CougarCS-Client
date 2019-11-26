import axios from 'axios';
import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    const getData = async () => {
      const res = await axios('/api/member/');
      console.log(res.data);
    };
    getData();
  });
  return <div>Test</div>;
}

export default Test;
