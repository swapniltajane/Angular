import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'TitleCase'
})

export class TitleCasePipe1 implements PipeTransform {
    transform(str) {
        let sentence = str.split(' ');
        let rSentence = '';
        for(var str1 of sentence) {
            let firstChar = str1.charAt(0);
            let restChar = str1.substring(1);
            rSentence += firstChar.toUpperCase() + restChar.toLowerCase() + ' ';
        }
        return rSentence;
    }
}
