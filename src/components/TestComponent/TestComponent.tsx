import React from 'react';

interface TestComponentProps {
  text: string;
  number: number;
}

const TestComponent: React.FC<TestComponentProps> = ({ text, number }) => (
  <h2>
    {number}
    .
    {' '}
    {text}
  </h2>
);

export default TestComponent;
