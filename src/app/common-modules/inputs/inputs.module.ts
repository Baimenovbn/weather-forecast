import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SearchInputComponent, ReactiveFormsModule]
})
export class InputsModule {}
