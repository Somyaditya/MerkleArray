const Web3 = require('web3');
const keccak256 = require('keccak256');
const web3 = new Web3("https://mainnet.infura.io/v3/")

/* Given array */

var newHexdata2 = [["0x1C541e05a5A640755B3F1B2434dB4e8096b8322f","100"],["0x5b38Da6a701c568545dCfcB03FcB875f56beddC4","100"]];


/* formating
    first wallet address from the tuple is required to be converted into its kecckak256 bytes32 form using method given below
    */
    const buf2hex = x => '0x' + x.toString('hex')

    const finaladdress = buf2hex(keccak256("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4").toString('hex'))

    /* 
    the amount should be converted into bytes32 value using the method below
    */
   const finalamount = web3.utils.encodePacked("100");

   /* Now the array should look like this */
    const preArray = [finaladdress, finalamount];

    const finalArray = (web3.utils.soliditySha3(preArray[0], preArray[1])).toString('hex')
    

    /* 
    the final JSON data should contain all finalArray
     */
