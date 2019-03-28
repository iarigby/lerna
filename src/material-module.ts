import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({

    imports: [
    ],
    exports: [
        BrowserAnimationsModule,
        MatListModule, MatButtonModule, MatInputModule
    ],
})
export class MaterialModule { }
