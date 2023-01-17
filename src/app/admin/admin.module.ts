import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { MatButtonModule } from '@angular/material/button';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [CreateCardComponent, WrapperComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
