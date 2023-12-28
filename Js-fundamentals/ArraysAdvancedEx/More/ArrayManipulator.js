function manipulateArray(inputArray, commands) {
    let array = inputArray.slice(); 
    for (const command of commands) {
        let [action, ...params] = command.split(' ');

        switch (action) {
            case 'add':
                let addIndex = Number(params[0]);
                let addElement = Number(params[1]);
                array.splice(addIndex, 0, addElement);
                break;

            case 'addMany':
                let addManyIndex = Number(params[0]);
                let elementsToAdd = params.slice(1).map(Number);
                array.splice(addManyIndex, 0, ...elementsToAdd);
                break;

            case 'contains':
                let containsElement = Number(params[0]);
                let containsIndex = array.indexOf(containsElement);
                console.log(containsIndex);
                break;

            case 'remove':
                let removeIndex = Number(params[0]);
                array.splice(removeIndex, 1);
                break;

            case 'shift':
                let positionsToShift = Number(params[0]) % array.length;
                array = array.slice(positionsToShift).concat(array.slice(0, positionsToShift));
                break;

            case 'sumPairs':
                case 'sumPairs':
   
                array = array.reduce((acc, value, index, arr) => (index % 2 === 0) ? [...acc, value + (arr[index + 1] || 0)] : acc, []);
                   break;

          

            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                break;

            default:
                console.log('Invalid command');
                break;
        }
    }

  
}
manipulateArray([1, 2, 4, 5, 6, 7],
    ['sumPairs', 'contains 1', 'contains 3', 'print'])