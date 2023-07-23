const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
    const proofName = process.argv[2];
    const checkName = process.argv[3];

    console.log(proofName);
    console.log(checkName);
    if (proofName == null || checkName == null) {
        console.log('Usage: node client/index.js "name-to-proof" "name-to-check"');
        process.exit();
    }

    const index = niceList.findIndex(name => name === proofName);
    console.log(index);
    if (index < 0) {
        console.log("Please enter a valid name to build proof");
        process.exit();
    }

    const merkleTree = new MerkleTree(niceList);
    const proof = merkleTree.getProof(index);

    // const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    //     // TODO: add request body parameters here!
    // });

    // console.log({ gift });
}

main();