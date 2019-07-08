import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likesdemo',
  templateUrl: './likesdemo.component.html',
  styleUrls: ['./likesdemo.component.css']
})
export class LikesdemoComponent {
public cars = [
{Name: 'Audi', Photo: 'assets/audi.webp', Likes: 0, Dislikes: 0},
{Name: 'Range Rover', Photo: 'assets/car1.jpg', Likes: 0, Dislikes: 0},
{Name: 'Mercedes', Photo: 'assets/mercedes.jpg', Likes: 0, Dislikes: 0},
{Name: 'Jaguar', Photo: 'assets/jaguar.jpeg', Likes: 0, Dislikes: 0},
];

public Liked(car) {
car.Likes++;
}
public Disliked(car) {
  car.Dislikes++;
}
}
