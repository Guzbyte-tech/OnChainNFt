import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const OnchainNFTModule = buildModule("OnChainNFT", (m) => {

    const nft = m.contract("OnChainNFT");

    return { nft };
});

export default OnchainNFTModule;