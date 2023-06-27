
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BirthRegistration {
    struct Detail {
        string name;
        string dob;
        string gender;
        string location;
        string grandFatherName;
        string fatherName;
        string motherName;
        uint256 timestamp;
        bytes32 blockHash;
    }

    mapping(uint256 => Detail) public details;
    uint256 public itemCount;

    event Registration(uint256 indexed itemId, bytes32 blockHash);

    function register(
        string memory _name,
        string memory _dob,
        string memory _gender,
        string memory _location,
        string memory _grandFatherName,
        string memory _fatherName,
        string memory _motherName
    ) public {
        itemCount++;
        
        details[itemCount] = Detail({
            name: _name,
            dob: _dob,
            gender:_gender,
            location: _location,
            grandFatherName: _grandFatherName,
            fatherName: _fatherName,
            motherName: _motherName,
            timestamp: block.timestamp,
            blockHash: blockhash(block.number - 1)
        });

        emit Registration(itemCount, blockhash(block.number - 1));
    }

    function getAllDetails() public view returns (Detail[] memory) {
        Detail[] memory allDetails = new Detail[](itemCount);
        for (uint256 i = 1; i <= itemCount; i++) {
            allDetails[i - 1] = details[i];
        }
        return allDetails;
    }

     function checkBlockHash(bytes32 _blockHash) public view returns (bool) {
        uint256 totalItems = itemCount;
        for (uint256 i = 1; i <= totalItems; i++) {
            if (details[i].blockHash == _blockHash) {
                return true; // Block hash exists in the details array
            }
        }
        return false; // Block hash doesn't exist
    }
}