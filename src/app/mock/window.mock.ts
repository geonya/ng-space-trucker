import { DocumentMock } from './document.mock';
import { StroageMock } from './storage.mock';

export class WindowMock extends Window {
  public override document = new DocumentMock();
  public override localStorage = new StroageMock();
  public override sessionStorage = new StroageMock();
}
