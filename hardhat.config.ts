import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    // Rede Hardhat em memória (para testes rápidos)
    hardhat: {
      chainId: 31337, // Mude para 31337, é o chainId padrão do Hardhat Network
    },
    // Rede para conectar ao Ganache
    ganache: { // Você pode chamar de "localhost" também
      url: "http://127.0.0.1:8545", // Endereço do seu Ganache
      chainId: 1337, // chainId que o seu Ganache está usando
    },
  },
};

export default config;