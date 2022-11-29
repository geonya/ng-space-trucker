import { Injectable } from '@angular/core';
import { WindowMock } from '../mock/window.mock';

const getWindow = (): Window => (window != null ? window : new WindowMock());

@Injectable({
  providedIn: 'root',
})
export class WindowRefService {
  private readonly windowObject: Window;
  constructor() {
    this.windowObject = getWindow();
  }
  public get window(): Window {
    return this.windowObject;
  }
  public get document(): Document {
    return this.window.document;
  }
  public get localStorage(): Storage {
    return this.window.localStorage;
  }
  public get sessionStorage(): Storage {
    return this.window.sessionStorage;
  }
}
