import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-produit',
  imports: [FormsModule, MatInputModule],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.scss',
})
export class EditProduitComponent {
  onAjoutProduit() {
    console.log('Formulaire soumis');
  }
}
