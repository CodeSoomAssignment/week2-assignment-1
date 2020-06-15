import React from 'react';

export default function Counter({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={() => onClick(1)}>
        Click me!
        (
        { count }
        )
      </button>
    </p>
  );
}
