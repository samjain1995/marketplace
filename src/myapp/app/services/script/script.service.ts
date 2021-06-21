import { UtilityService } from './../utility/utility.service';
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../window/window.service';
import { ScriptModel } from '../../shared/models/script.model';
import { DOCUMENT } from '@angular/common';

// declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor(
    private util: UtilityService,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document
  ) { }

  loadScript(script: ScriptModel): Promise<ScriptModel> {
    return new Promise((resolve, reject) => {
      //resolve if already loaded

      if (this.document.getElementById(script.id)) {
        script.isLoaded = true;
        return resolve(script);
      } else {
        //load script
        let scriptElement = this.document.createElement('script');
        scriptElement.id = script.id;
        scriptElement.type = 'text/javascript';
        scriptElement.src = script.src;
        if (scriptElement.readyState) {  //IE
          scriptElement.onreadystatechange = () => {
            if (scriptElement.readyState === "loaded" || scriptElement.readyState === "complete") {
              scriptElement.onreadystatechange = null;
              script.isLoaded = true;
              return resolve(script);
            }
          };
        } else {  //Others
          scriptElement.onload = () => {
            script.isLoaded = true;
            return resolve(script);
          };
        }
        scriptElement.onerror = (error: any) => resolve(script);
        this.document.getElementsByTagName('head')[0].appendChild(scriptElement);
      }
    });
  }
}


