/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as BurnTokenScriptJson } from "../BurnToken.ral.json";

export const BurnToken = new ExecutableScript<{
  tokenId: HexString;
  amount: bigint;
}>(Script.fromJson(BurnTokenScriptJson));