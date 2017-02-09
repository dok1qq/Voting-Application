import { Wrapped } from "../interfaces/wrapped";

export class NumberWrapper implements Wrapped<number> {
  constructor(private value: number) {}
  valueOf(): number { return this.value; }
}
