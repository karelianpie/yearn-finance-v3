import { Wallet, Config, Web3Provider, UserService, VaultService, TokenService } from '@types';

export interface DIContainer {
  context: ContextContainer;
  services: ServiceContainer;
  config: ConfigContainer;
}

export interface ContextContainer {
  wallet: Wallet;
  web3Provider: Web3Provider;
}
export interface ServiceContainer {
  userService: UserService;
  vaultService: VaultService;
  tokenService: TokenService;
}

export interface ConfigContainer extends Config {}