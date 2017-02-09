export interface Poll {
  title: string, // required
  options: {
    first: string, // required
    second: string, // requiredng
    third?: string,
    fourth?: string,
    fifth?: string,
    sixth?: string,
    seventh?: string,
    eighth?: string,
    ninth?: string,
    tenth?: string
  }
}
