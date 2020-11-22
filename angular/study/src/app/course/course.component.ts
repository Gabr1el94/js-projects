import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  // selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  _filterBy: string = '';

  filteredCourse: Course[] = [];

  _courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll():void {
    this.courseService.retrieveAll().subscribe({  
      next: courses => {
        this._courses = courses;
        this.filteredCourse = this._courses;
      },
      error: err => console.log('Error:',err)
    });
  }

  deleteById(id: number):void{
    this.courseService.deleteById(id).subscribe({
      next:()=>{
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error:', err)
    })
  }

  set filter(value:string){
    this._filterBy = value;
    this.filteredCourse = this._courses.filter((course :Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }
  
}
