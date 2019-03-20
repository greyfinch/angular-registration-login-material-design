import { NgModule } from '@angular/core';
import { MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],
    exports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],
})

export class MyMaterialModule { }