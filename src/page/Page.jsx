import React from 'react';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';


export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClick={onClick} />
    </div>
  );
}
