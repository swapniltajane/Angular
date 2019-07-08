import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SentenceCase'
})
export class SentenceCasePipe implements PipeTransform {
    transform(str) {
        let firstChar = str.charAt(0);
        let restChar = str.substring(1);
        let sentence = firstChar.toUpperCase() + restChar.toLowerCase();
        return sentence;
    }
}
