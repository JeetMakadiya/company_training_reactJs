import { action, observable } from "mobx";

export const counterState = observable({
  count: 0,
  incrementCount: action(() => {
    counterState.count += 1;
  }),
  decrementCount: action(() => {
    counterState.count -= 1;
  }),
  get countMultiByTwo() {
    return this.count * 2;
  },
  get countMultiByTen() {
    return this.count * 10;
  },
});
