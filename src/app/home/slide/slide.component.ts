import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SlideService } from  '../../lib/slide.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent extends BaseComponent implements OnInit {

  constructor(private slideService: SlideService, injector: Injector) {
    super(injector);
  }
  slides: any;
  ngOnInit(): void {
    this.slideService
      .GetSlide()
      .pipe(first())
      .subscribe((slides) => {
        // console.log(slides);
        setTimeout(() => {
          this.loadScripts();
        });
        this.slides = slides;
      });
  }

}
