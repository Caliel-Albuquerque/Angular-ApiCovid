
export type StateBrazil = {
  data: Array<{
    uid: number,
    uf: string,
    state: string,
    cases: number,
    deaths: number,
    suspects: number,
    refuses: number,
  }>
}