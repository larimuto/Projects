import { assert } from "chai";
import { mathEnforcer } from "./mathEnforcer.js";


describe("addFive", ()=>{

it("should return incorrect values",()=>{

assert.equal(mathEnforcer.addFive({}),undefined,"object")
assert.equal(mathEnforcer.addFive([]),undefined,"array")
assert.equal(mathEnforcer.addFive(''),undefined,"xsd")


})

it("should return correct values",()=>{
    assert.equal(mathEnforcer.addFive(5),10,"object")
    assert.equal(mathEnforcer.addFive(-5),0,"object")
    assert.equal(mathEnforcer.addFive(0),5,"object")
    assert.equal(mathEnforcer.addFive(0.1),5.1,"object")
    assert.equal(mathEnforcer.addFive(-0.5),4.5,"object")
     
      
})

})

describe("subtractTen", ()=>{


it("incorect values",()=>{
    assert.equal(mathEnforcer.subtractTen([]),undefined,"array")
    assert.equal(mathEnforcer.subtractTen({}),undefined,"array")
    assert.equal(mathEnforcer.subtractTen(''),undefined,"array")




})

it("correct values",()=>{
assert.equal(mathEnforcer.subtractTen(10),0,"correct")
assert.equal(mathEnforcer.subtractTen(-10),-20,"correct")
assert.equal(mathEnforcer.subtractTen(-0.5),-10.5,"correct")
assert.equal(mathEnforcer.subtractTen(0.5),-9.5,"correct")
assert.equal(mathEnforcer.subtractTen(0),-10,"correct")

    
})

    
})


describe("sum", ()=>{
    it("incorrect values",()=>{
        assert.equal(mathEnforcer.sum([],[]),undefined,"array")
        assert.equal(mathEnforcer.sum({},{}),undefined,"array")
        assert.equal(mathEnforcer.sum([],{}),undefined,"array")
        assert.equal(mathEnforcer.sum({},[]),undefined,"array")
        assert.equal(mathEnforcer.sum("",[]),undefined,"array")
        assert.equal(mathEnforcer.sum([],""),undefined,"array")
        assert.equal(mathEnforcer.sum({},""),undefined,"array")
        assert.equal(mathEnforcer.sum("",{}),undefined,"array")
        assert.isNaN(mathEnforcer.sum(NaN,1),"array")
        assert.isNaN(mathEnforcer.sum(1,NaN),"array")
        assert.equal(mathEnforcer.sum(String,[]),undefined,"array")
        assert.equal(mathEnforcer.sum([],String),undefined, "array")
        assert.equal(mathEnforcer.sum([],4),undefined, "array")
        assert.equal(mathEnforcer.sum({},4),undefined, "array")
        assert.equal(mathEnforcer.sum("5",4),undefined, "array")
        assert.equal(mathEnforcer.sum("",4),undefined, "array")
        assert.equal(mathEnforcer.sum(45,""),undefined, "array")
        assert.equal(mathEnforcer.sum(45,{}),undefined, "array")
        assert.equal(mathEnforcer.sum(45,[]),undefined, "array")
        
        
        

    })



 it("correct values",()=>{

    assert.equal(mathEnforcer.sum(10,10),20,"array")
    assert.equal(mathEnforcer.sum(10,-10),0,"array")
    assert.equal(mathEnforcer.sum(10,0.5),10.5,"array")
    assert.equal(mathEnforcer.sum(10,-0.5),9.5,"array")
    assert.equal(mathEnforcer.sum(-0.5,10),9.5,"array")
    assert.equal(mathEnforcer.sum(0.5,10),10.5,"array")
    assert.equal(mathEnforcer.sum(-10,10),0,"array")
    assert.equal(mathEnforcer.sum(0,10),10,"array")
    assert.equal(mathEnforcer.sum(10,0),10,"array")
    assert.equal(mathEnforcer.sum(-0,0),0,"array")
    assert.equal(mathEnforcer.sum(-50,10),-40,"array")



        
    })


    
})