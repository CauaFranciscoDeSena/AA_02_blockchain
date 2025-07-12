// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    string public donoDaConta;

    constructor() {
        count = 0;
        donoDaConta = "Caua Francisco de Sena";
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        if (count > 0) {
            count -= 1;
        }
    }

    function resetar() public { // Adicionado: Função para zerar o contador
        count = 0;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}