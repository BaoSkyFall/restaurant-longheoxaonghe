import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ],
})
export class AboutModule { }
