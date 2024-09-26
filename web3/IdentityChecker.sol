// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract IdentityChecker {
    struct User{
        string investorID;
        string name;
        string email;
        uint phoneNumber;
        string picture;
        uint chain;
        address walletAddress;        
    }

    mapping(string => User) userMapping;

    function SignUpuser(string memory _investorID, string memory _name, string memory _email, uint _phoneNumber, string memory _picture, uint _chain, address _walletAddress) external {
        
    }
}