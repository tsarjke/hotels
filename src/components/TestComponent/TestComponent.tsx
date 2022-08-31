import React from 'react';

interface TestComponentProps {
  text: string;
  number: number;
  btnText: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ text, number, btnText }) => (
  <>
    <h2>
      {number}
      .
      {' '}
      {text}
    </h2>
    <button type="button">{btnText}</button>
  </>
);

export default TestComponent;
