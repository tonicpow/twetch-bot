declare module '@twetch/sdk' {
  class Client {
    constructor(options?: {
      Storage?: any
      Wallet?: any
      clientIdentifier?: string
      network?: string
      apiUrl?: string
      privateKey?: string
    })

    init: () => Promise<void>
    publish: (
      action: string,
      payload: {
        bContent: string
        mapReply: string
        payParams: {
          tweetFromTwetch: boolean
          hideTweetFromTwetchLink: boolean
        }
      },
      file?: File
    ) => Promise<{ txid: string; abi: any }>
  }

  export default Client
}
