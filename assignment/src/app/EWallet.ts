export class EWallet
{
    constructor(private balance:number)
    {

    }
    public doShopping(amount:number):void
    {
        this.balance -= amount;
    }
    public depositMoney(amount:number):void
    {
        this.balance += amount;
    }
    public getBalance():number
    {
        return this.balance;
    }
}
