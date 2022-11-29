import { ElementRef, Injectable, NgZone } from '@angular/core';
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  Light,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { WindowRefService } from '../services/window-ref.service';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene: Scene;
  private camera: ArcRotateCamera;
  private light: Light;
  private sphere: Mesh;

  constructor(private ngZone: NgZone, private windowRef: WindowRefService) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas = canvas.nativeElement;
    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);
    this.setupCamera();
    this.setupLight();
    this.createSphere();
    this.setupGround();
  }

  private setupCamera() {
    let camAlpha = 0,
      camBeta = 1.26,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    this.camera = new ArcRotateCamera(
      'camera1',
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      this.scene,
    );
    this.camera.attachControl(this.canvas, false);
  }

  private setupLight() {
    this.light = new HemisphericLight(
      'light',
      new Vector3(0, 1, 0),
      this.scene,
    );
    this.light.intensity = 0.7;
  }

  private createSphere() {
    this.sphere = MeshBuilder.CreateSphere(
      'sphere',
      { diameter: 2, segments: 32 },
      this.scene,
    );
    this.sphere.position.y = 1;
  }
  private setupGround() {
    MeshBuilder.CreateGround('ground', { width: 5, height: 5 }, this.scene);
  }

  public action() {
    this.ngZone.runOutsideAngular(() => {
      const renderLoopCallback = () => {
        this.scene.render();
      };
      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(renderLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(renderLoopCallback);
        });
      }
      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }
}
