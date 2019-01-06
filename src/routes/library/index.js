import React from 'react';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

export const Library = () => (
  <div className="library">
    <div className="mb2">
      <h4 className="mb1">Input</h4>
      <Input />
    </div>
    <div className="mb2">
      <h4 className="mb1">Button</h4>
      <Button
        text="Click Me!"
        color="green"
        disabled={ true }
      />
    </div>
  </div>
);

export default Library;
