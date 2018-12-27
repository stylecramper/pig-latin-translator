import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pig-latin-translator',
  templateUrl: './pig-latin-translator.component.html',
  styleUrls: ['./pig-latin-translator.component.css']
})
export class PigLatinTranslatorComponent implements OnInit {
  pigLatinForm: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.pigLatinForm = this.fb.group({
      piglatin: ['']
    });
  }

  showCopyButton(): boolean {
    return this.pigLatinForm.get('piglatin').value.length > 0;
  }

  copyOutput(): void {
    const el = document.createElement('textarea');
    const p = <HTMLElement> document.querySelector('.output');
    el.value = p.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.snackBar.open(`Pig latin copied.`, '', { duration: 2000 });
  };

}
