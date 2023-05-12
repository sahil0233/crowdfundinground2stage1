// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract UserInfo {
    struct User {
        string email;
        string username;
        string userAddress;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string email, string username, string usserAddress);

    function registerUser(string memory _email, string memory _username, string memory _userAddress) public {
        require(bytes(_email).length > 0, "Email is required");
        require(bytes(_username).length > 0, "Username is required");
        require(bytes(_userAddress).length > 0, "Address is required");

        require(bytes(users[msg.sender].email).length == 0, "User already registered");

        User memory newUser = User(_email, _username, _userAddress);
        users[msg.sender] = newUser;

        emit UserRegistered(msg.sender, _email, _username, _userAddress);
    }

    function getUserInfo(address userAddress) public view returns (string memory, string memory, string memory) {
        User memory user = users[userAddress];
        return (user.email, user.username, user.userAddress);
    }
}



