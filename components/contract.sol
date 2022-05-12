pragma solidity ^0.8.0;

contract createToken {
     mapping(address => uint) public balances;

     enum Audit { Valid, NotValid }

     Audit public audit = Audit.Valid;


     function auditing() public {

     }

}


interface Data {
    function sendData(string name, uint age) external;

    function sendDetails(string name, uint year) external;
}

abstract NotImplement {

    function yourFunc(string[] memory person) external {}
}
