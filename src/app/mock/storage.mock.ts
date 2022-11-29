export class StroageMock implements Storage {
  public length = 0;
  public clear() {
    return null;
  }
  public getItem(key: string): string | null {
    return null;
  }
  public setItem(key: string, value: string): void {
    return;
  }
  public key(index: number): string | null {
    return null;
  }
  public removeItem(key: string): void {
    return;
  }
}
