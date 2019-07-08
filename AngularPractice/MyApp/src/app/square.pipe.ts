import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Square'
})

export class SquarePipe implements PipeTransform {
    transform(num) {
        let sqr = num * num;
        return sqr;
    }
}
