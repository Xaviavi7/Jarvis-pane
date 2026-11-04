export type Remark = { text: string; isBusy: boolean }

declare module 'claude-code' {
  interface PluginState {
    jarvis: { remark: Shaped<Remark> }
  }
}
