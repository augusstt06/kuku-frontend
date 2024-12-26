export type Ethereum = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (args: { method: string; params?: any[] }) => Promise<any>
  isMetaMask?: boolean
}
