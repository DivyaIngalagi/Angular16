import { EWallet } from "./EWallet"


describe("Testing EWallet.ts",()=>{
    let ewallet:EWallet
    beforeAll(()=>{
        ewallet = new EWallet(5000);
      })
    
      afterAll(()=>{
        ewallet = null;
      })
    it("Testing EWallet's doShopping() method",()=>{
        console.log(ewallet.getBalance());
        console.log("debited");
        ewallet.doShopping(1000);
        let debited=ewallet.getBalance();
        expect(debited).toBe(4000);
        console.log(ewallet.getBalance());
        console.log("debited");
    })
    it("Testing EWallet's depositMoney() method",()=>{
        console.log("credited");
        console.log(ewallet.getBalance());
        ewallet.depositMoney(500);
        let credited=ewallet.getBalance();
        expect(credited).toBe(4500);
        console.log(ewallet.getBalance());
        console.log("credited");   
    })
})