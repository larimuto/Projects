function sorting(array, command) {
  let commands = {
    asc: () => array.sort((a, b) => a - b),
    desc: () => array.sort((a, b) => b - a),
  };

  return commands[command]();
}

