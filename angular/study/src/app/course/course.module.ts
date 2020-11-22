import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StartModule } from '../shared/component/start/start.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseComponent } from './course.component';


@NgModule({
    declarations: [
        CourseComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StartModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id',component: CourseInfoComponent
              },
              {
                path:'courses',component: CourseComponent
              },
            ]),
    ]
})
export class CourseModule {

}