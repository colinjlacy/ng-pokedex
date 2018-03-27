import { browser, by, element } from 'protractor';
import { iSpecDefinition } from './models';

export class Step {

  constructor(private _title:string, private _description:string, private _target:string, private _execution:(done?: any) => void) {}

  public get title():string {
    return this._title;
  }

  public set title(value:string) {
    this._title = value;
  }

  public get description():string {
    return this._description;
  }

  public set description(value:string) {
    this._description = value;
  }

  public get target():string {
    return this._target;
  }

  public set target(value:string) {
    this._target = value;
  }

  public get execution():(p1?:any)=>void {
    return this._execution;
  }

  public set execution(value:(p1?:any)=>void) {
    this._execution = value;
  }

}

export class Guide {
  constructor(title: string, desc: string, ...steps: Step[]) {
    describe(desc, function() {
      this.result.title = title;
      steps.forEach((step: Step, ind: number) => {
        let elem: {height: number, width: number, top: number, left: number} = null;
        let self = this;
        it(step.description, function() {
          self['children'][ind].result.title = step.title;
          step.execution.call(this, arguments);
          if(step.target) {
            const el = element(by.css(step.target));
            const sizePromise: any = el.getSize();
            const locationPromise: any = el.getLocation();
            Promise.all([sizePromise, locationPromise])
              .then((res) => {
                elem = {
                  height: res[0].height,
                  width: res[0].width,
                  top: res[1].y,
                  left: res[1].x
                };
                self['children'][ind].result.element = elem;
              });
          }
        });
      });
    });
  }
}

