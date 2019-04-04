import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {
  private vowels: Array<string> = [
    'a',
    'e',
    'i',
    'o',
    'u',
    'y'
  ];
  private suffix = 'ay';

  transform(value: string, args?: any): string {
    if (value.length === 0) {
      return value;
    }
    return value
      .split(' ')
      .map((word) => {
        if (word.length === 0) {
          return word;
        }
        const firstVowelIndex = this.findFirstVowel(word);
        return word.substring(firstVowelIndex) +
              word.substring(0, firstVowelIndex) +
              this.suffix;
      })
      .join(' ');
  }

  findFirstVowel(word: string): number {
    let firstVowelIndex = 0;
    for (let i = 0; i < word.length; i++) {
      firstVowelIndex = i;
      if (i === 0 && word.charAt(i) === 'y') {
        continue;
      }
      if (this.vowels.includes(word.charAt(i))) {
        break;
      }
    }
    return firstVowelIndex;
  }

}
