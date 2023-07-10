import React from 'react';

interface button {
    title: string;
    addExpenses?: () => void;
}

export default function Button({ title, addExpenses }: button) {
  return (
    <button onClick={addExpenses}>
        <span>{title}</span>
    </button>
  )
}
