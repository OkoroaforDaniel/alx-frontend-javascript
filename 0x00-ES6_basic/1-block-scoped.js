export default function taskBlock(trueOrFalse) {
    const task = false;  // Changed 'var' to 'let'
    const task2 = true;  // Changed 'var' to 'let'
  
    if (trueOrFalse) {
      const task = true;  // Changed 'var' to 'let'
      const task2 = false;  // Changed 'var' to 'let'
    }
  
    return [task, task2];
  }