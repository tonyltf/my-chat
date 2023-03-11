interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_CHATGPT_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
