export class BalanceHelper {
    private walletAddress:string;
    public balance: number = 0;

    constructor(walletAddress:string){
        this.walletAddress = walletAddress; 
        this.callMetaverseAPI(this.walletAddress);
    }

    callMetaverseAPI = async(walletAddress: string) => {
        let BalanceAmount: number;
		try {
			const res = await fetch(
				`https://gateway.multiversx.com/address/${walletAddress}/esdt/UCT-1c2f4d`
			);

			const data = await res.json();

            return data.data.tokenData.balance; 

		} catch (err) {
			console.log(err);
		}  
	};

}
