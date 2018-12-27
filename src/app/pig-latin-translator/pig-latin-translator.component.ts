import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pig-latin-translator',
  templateUrl: './pig-latin-translator.component.html',
  styleUrls: ['./pig-latin-translator.component.css']
})
export class PigLatinTranslatorComponent implements OnInit {
  pigLatinForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    el.value = document.querySelector('.output').innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

}
