import { assert } from "chai"

import { planYourTrip } from "./planYourTrip.js";


describe("test1", ()=> {
    describe("first func", ()=> {
        
        it("invalid year", ()=> {
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023),
                Error, "Invalid Year!");
        });

        it("Should return 2024", ()=> {
            assert.strictEqual(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024),
                "Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("correct", ()=> {
            assert.strictEqual(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024),
                "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

         it("incorect destination", ()=> {
            assert.throws(() => planYourTrip.choosingDestination("Beach", "Summer", 2024),
                Error, "This destination is not what you are looking for.");
        });

        

       
    });

    describe("exploreOptions", ()=> {
        it("You must remove an element (activity) from the array that is located on the index specified as a parameter.", ()=> {
            assert.strictEqual(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1),
                "Skiing, Winter Hiking");
        });

        it("invalid number", ()=> {
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "invalid"),
                Error, "Invalid Information!");
        });

        it("throw an error for out-of-bounds  index", ()=> {
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 2),
                Error, "Invalid Information!");
        });

        it("Should return activities as a string joined by comma and space", ()=> {
            assert.strictEqual(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0),
                "Snowboarding, Winter Hiking");
        });

    });

    describe("estimateExpenses", ()=> {
        it("Should return  message for low total cost", ()=> {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 4), 
                "The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("Should return plan accordingly message for high total cost", ()=> {
            assert.strictEqual(planYourTrip.estimateExpenses(1000, 5), 
                "The estimated cost for the trip is $5000.00, plan accordingly.");
        });

        it("throw error for invalid distance", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses("not a number", 5),
                Error, "Invalid Information!");
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(100, -4),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(-4, 100),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(-4, -4),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses([], []),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses({}, {}),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(String, String),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(0, 0),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(0, 0),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(12, 0),
                Error, "Invalid Information!");
                
        });
        
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(0, 230),
                Error, "Invalid Information!");
                
        });

        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses({}, 230),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses([], 230),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses({}, 230),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(230, String),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(230, {}),
                Error, "Invalid Information!");
                
        });
        it("throw error for invalid  cost", ()=> {
            assert.throws(() => planYourTrip.estimateExpenses(230, []),
                Error, "Invalid Information!");
                
        });





    });








})