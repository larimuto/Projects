function vow(input) {
    let name=input[0];
    let finalSum =0;
    for (let index = 0; index < name.length; index++) {
        switch (name[index]) {
            case 'a':
                finalSum +=1;
                break;
            case 'e':
                finalSum +=2;
                break;
            case 'i':
                finalSum +=3;
                break;
            case 'o':
                finalSum +=4;
                break;
            case 'u':
                finalSum +=5;
                break;
        
            default:
                break;
        }
        
    }
    console.log(finalSum);
}
vow(["hello"])