import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Factlist = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    (async function (params) {
      const res = await axios.get(
        'http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA',
        {
          headers: { accept: 'application/json' },
          method: 'GET',
        }
      );
      setFacts(res.data);
    })();
  }, [setFacts]);

  return <>{console.log(facts)}</>;
};

export default Factlist;
