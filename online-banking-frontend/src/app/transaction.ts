export class Transaction {
    constructor(public transactionid:number,
        //public accountno:Account,
        //public timestamp:date,
        public recipientno:number,
        public recipient_name:String,
        public amount:number
    ){}
}
