export interface GoogleFonts {
  families?: Families
  display?: string
  subsets?: string[] | string
}

export interface Families {
  [family: string]: boolean | number | number[] | FamilyStyles
}

export interface FamilyStyles {
  [style: string]: number | number[]
}

export interface FontInputOutput {
  inputFont: string
  outputFont: string
  inputText: string
  outputText: string
}

export interface DownloadOptions {
  base64: boolean
  overwriting: boolean
  outputDir: string
  stylePath: string
  fontsDir: string
  fontsPath: string
}
