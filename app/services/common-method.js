import web3 from 'web3';

export var Web3 = new web3();

if (process.env.NODE_ENV == 'development') {
    Web3 = new web3();
} else {
    Web3 = new web3(new web3.providers.HttpProvider("http://localhost:8560"));
}


export var accountObject = Web3.eth.accounts.create();
export var kycAbi = [
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_assetName",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_assetPaperId",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_assetOrgAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_assetAddress",
                "type": "address"
            }
        ],
        "name": "addAsset",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_userName",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_userEmail",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_userPhone",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_userNID",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "addCustomer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_orgName",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_orgEmail",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_orgPhone",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_orgTradeId",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_orgAddress",
                "type": "address"
            }
        ],
        "name": "addOrg",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetAddress",
                "type": "address"
            }
        ],
        "name": "lockAsset",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "lockCustomer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_orgAddress",
                "type": "address"
            }
        ],
        "name": "lockOrg",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetAddress",
                "type": "address"
            }
        ],
        "name": "unlockAsset",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "unlockCustomer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_orgAddress",
                "type": "address"
            }
        ],
        "name": "unlockOrg",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_assetAddress",
                "type": "address"
            }
        ],
        "name": "getAsset",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "getCustomer",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_orgAddress",
                "type": "address"
            }
        ],
        "name": "getOrg",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];



