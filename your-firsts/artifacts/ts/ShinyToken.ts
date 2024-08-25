/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as ShinyTokenContractJson } from "../ShinyToken.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace ShinyTokenTypes {
  export type State = Omit<ContractState<any>, "fields">;

  export interface CallMethodTable {
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> =
    Callss["length"] extends 1
      ? MultiCallResults<Callss[0]>
      : { [index in keyof Callss]: MultiCallResults<Callss[index]> };

  export interface SignExecuteMethodTable {
    getTotalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getSymbol: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getName: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getDecimals: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<ShinyTokenInstance, {}> {
  encodeFields() {
    return encodeContractFields({}, this.contract.fieldsSig, []);
  }

  at(address: string): ShinyTokenInstance {
    return new ShinyTokenInstance(address);
  }

  tests = {
    getTotalSupply: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };
}

// Use this object to test and deploy the contract
export const ShinyToken = new Factory(
  Contract.fromJson(
    ShinyTokenContractJson,
    "",
    "24c7978eaf7b6a729f50107cc2143e0804dadd748e27ebcc39ab12b0dfb504da",
    []
  )
);

// Use this class to interact with the blockchain
export class ShinyTokenInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<ShinyTokenTypes.State> {
    return fetchContractState(ShinyToken, this);
  }

  view = {
    getTotalSupply: async (
      params?: ShinyTokenTypes.CallMethodParams<"getTotalSupply">
    ): Promise<ShinyTokenTypes.CallMethodResult<"getTotalSupply">> => {
      return callMethod(
        ShinyToken,
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getSymbol: async (
      params?: ShinyTokenTypes.CallMethodParams<"getSymbol">
    ): Promise<ShinyTokenTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        ShinyToken,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: ShinyTokenTypes.CallMethodParams<"getName">
    ): Promise<ShinyTokenTypes.CallMethodResult<"getName">> => {
      return callMethod(
        ShinyToken,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: ShinyTokenTypes.CallMethodParams<"getDecimals">
    ): Promise<ShinyTokenTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        ShinyToken,
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getTotalSupply: async (
      params: ShinyTokenTypes.SignExecuteMethodParams<"getTotalSupply">
    ): Promise<ShinyTokenTypes.SignExecuteMethodResult<"getTotalSupply">> => {
      return signExecuteMethod(ShinyToken, this, "getTotalSupply", params);
    },
    getSymbol: async (
      params: ShinyTokenTypes.SignExecuteMethodParams<"getSymbol">
    ): Promise<ShinyTokenTypes.SignExecuteMethodResult<"getSymbol">> => {
      return signExecuteMethod(ShinyToken, this, "getSymbol", params);
    },
    getName: async (
      params: ShinyTokenTypes.SignExecuteMethodParams<"getName">
    ): Promise<ShinyTokenTypes.SignExecuteMethodResult<"getName">> => {
      return signExecuteMethod(ShinyToken, this, "getName", params);
    },
    getDecimals: async (
      params: ShinyTokenTypes.SignExecuteMethodParams<"getDecimals">
    ): Promise<ShinyTokenTypes.SignExecuteMethodResult<"getDecimals">> => {
      return signExecuteMethod(ShinyToken, this, "getDecimals", params);
    },
  };

  async multicall<Callss extends ShinyTokenTypes.MultiCallParams[]>(
    ...callss: Callss
  ): Promise<ShinyTokenTypes.MulticallReturnType<Callss>> {
    return (await multicallMethods(
      ShinyToken,
      this,
      callss,
      getContractByCodeHash
    )) as ShinyTokenTypes.MulticallReturnType<Callss>;
  }
}
