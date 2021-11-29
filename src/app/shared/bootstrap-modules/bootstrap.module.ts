import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {PopoverModule} from 'ngx-bootstrap/popover';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    CollapseModule,
    ProgressbarModule,
    TabsModule,
    BsDropdownModule,
    ModalModule,
    AccordionModule,
    PopoverModule
  ]
})
export class BootstrapModule { }
