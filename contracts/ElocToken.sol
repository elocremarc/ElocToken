// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ElocToken is ERC20 {
    
    mapping (address => bool) public  claimed;
    uint256 public claimAmt = 10000000000000000000;

    constructor(uint256 initialSupply) public ERC20("Eloc", "ELOC") {
        _mint(msg.sender, initialSupply);
    }

    function claim() public {
    	require(!claimed[msg.sender], "No double claiming");
    	claimed[msg.sender] = true;
        _mint(msg.sender, claimAmt);
    }

}    