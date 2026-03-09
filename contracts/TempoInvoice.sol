// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TempoInvoice {
    event InvoicePaid(address indexed payer, address indexed merchant, string invoiceId, uint256 amount);
    function payInvoice(address _stablecoin, address _merchant, string memory _invoiceId, uint256 _amount) external {
        IERC20 token = IERC20(_stablecoin);
        require(token.transferFrom(msg.sender, _merchant, _amount), "Payment failed");
        emit InvoicePaid(msg.sender, _merchant, _invoiceId, _amount);
    }
}
