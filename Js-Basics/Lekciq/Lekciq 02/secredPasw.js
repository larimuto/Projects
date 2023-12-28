function secret(input){
    let pwd = input[0];
    if (pwd === "s3cr3t!P@ssw0rd" )
    {console.log("Welcome");}
    else { console.log("Wrong password!");}
}
secret(["s3cr3t!P@ssw0rd"])