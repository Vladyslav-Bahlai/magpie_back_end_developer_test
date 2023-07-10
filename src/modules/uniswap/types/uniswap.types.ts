export type UniswapResponse = Partial<{
  pools: UniswapPool[];
  tokens: UniswapToken[];
}>;

export type UniswapToken = Partial<{
  id: string;
  name: string;
  symbol: string;
}>;

export type UniswapPool = Partial<{
  id: string;
  token0: UniswapToken;
  token1: UniswapToken;
}>;
