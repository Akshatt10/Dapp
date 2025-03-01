import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import { Airdrop } from './Airdrop';


function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/hejugB1zJJupC3KkHHu820DYH5C0ZeLb"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
              <div>
                HIII
              </div>
              <Airdrop> </Airdrop>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);
};

export default App
