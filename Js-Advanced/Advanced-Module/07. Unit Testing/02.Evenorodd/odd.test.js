import { describe } from "mocha";
import { isOddOrEven } from "./isOddOrEven.js";
import { assert } from "chai";

describe("invalid ", ()=>{

  it("non-string",()=>{

    assert.equal(isOddOrEven({name : "Andreew"}),undefined , " object");
    assert.equal(isOddOrEven(["dsasd"]),undefined , "dsa");
    assert.equal(isOddOrEven(1),undefined , "dsa");
    




  })


it("string valid", ()=>{

    
        assert.equal(isOddOrEven("andrew"),"even" , " even");
    
        assert.equal(isOddOrEven("andro"),"odd" , " odd");
    




})




it("string train valid", ()=>{

    
    assert.equal(isOddOrEven("andrew","andrew"),"even" , " even");

    assert.equal(isOddOrEven("andro","andro"),"odd" , " odd");





})






})