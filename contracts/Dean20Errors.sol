// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Dean20Errors {

    error ZERO_ADDRESS_NOT_ALLOWED();
    error MAXIMUM_TOKEN_SUPPLY_REACHED();
    error INSUFFICIENT_ALLOWANCE_BALANCE();
    error INSUFFICIENT_BALANCE();
    error ONLY_OWNER_IS_ALLOWED();
    error BALANCE_MORE_THAN_TOTAL_SUPPLY();
    error CANNOT_BURN_ZERO_TOKEN();
}
