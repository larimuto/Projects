let indexOfObject = array.findIndex(object => {
    return object.name === name;
  });
  if (indexOfObject != -1) {
  
  array.splice(indexOfObject, 1);
  }