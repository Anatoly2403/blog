import { makeAutoObservable } from "mobx";

class Store {
  instance: Store | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  initStore() {}
}

export const store = new Store();
