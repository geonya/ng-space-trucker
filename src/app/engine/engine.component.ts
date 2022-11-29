import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss'],
})
export class EngineComponent implements OnInit {
  @ViewChild('renderCanvas', { static: true })
  public renderCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engineService: EngineService) {}

  ngOnInit(): void {
    this.engineService.createScene(this.renderCanvas);
    this.engineService.action();
  }
}
