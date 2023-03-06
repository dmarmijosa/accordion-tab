import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccordionComponent } from "./accordion.component";
import { AccordionItem } from "./directives/accordion-item.directive";
import { AccordionContent } from "./directives/accordion-content.directive";
import { AccordionTitle } from "./directives/accordion-title.directive";
import { AccordionHeader } from "./directives/accordion-header.directive";

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ]
})
export class AccordionModule {}
