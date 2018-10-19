import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Flashlight} from "@ionic-native/flashlight";
import {Platform} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn: boolean ;
  constructor(public navCtrl: NavController,private flashLight: Flashlight,
              private platform: Platform ) {
    this.platform.ready().then(()=>{
      this.updateStatusOfFlashLight();
    })

  }
  switchOnFlashLight(){
    this.flashLight.switchOn();
    this.updateStatusOfFlashLight();
  }
  switchOffFlashLight(){
    this.flashLight.switchOff();
    this.updateStatusOfFlashLight();
  }
  toggleFlashLight(){
    this.flashLight.toggle();
    this.updateStatusOfFlashLight()
  }
  updateStatusOfFlashLight(){
    this.isOn = this.flashLight.isSwitchedOn();
  }

}
