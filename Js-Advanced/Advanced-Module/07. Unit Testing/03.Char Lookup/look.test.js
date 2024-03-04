import { assert } from "chai";
import { lookupChar } from "./lookupChar.js";


describe("incorrect input" , ()=>{
    it("not a string",()=>{

        assert.equal(lookupChar({},{}), undefined,"array")
        assert.equal(lookupChar({},1), undefined,"array")
        assert.equal(lookupChar("dsadas",{}), undefined,"array")

        assert.equal(lookupChar([],[]), undefined,"array")
        assert.equal(lookupChar([],1), undefined,"array")
        assert.equal(lookupChar("dsasd",[]), undefined,"array")
        
        assert.equal(lookupChar(1,1), undefined,"typeError")
          assert.equal(lookupChar("asd", 1.1), undefined )
         



    })

       it("outOfBounds",()=>{ 

           
           assert.equal(lookupChar("asd", 1), "s")
           assert.equal(lookupChar("asd", -1), "Incorrect index")
           assert.equal(lookupChar("asds", 14), "Incorrect index")
           
           
         





        })









})