import { useEffect, useState } from 'react';

export function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [isCtrlPressed, setIsCtrlPressed] = useState(true);
  const [pasted, setPasted] = useState(false);


  function downHandler({ key }) {
    if(key == targetKey) {
     setIsCtrlPressed(true);
    }
    (isCtrlPressed && key == 'v') && setPasted(true);
  }


  const upHandler = ({ key }) => {
      if (key === 'Control') {
      setIsCtrlPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return [pasted,isCtrlPressed];
}