import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'basic-slider-marca',
  templateUrl: './slider-marca.component.html',
  styleUrls: ['./slider-marca.component.css']
})
export class SliderMarcaComponent implements AfterViewInit {
  @ViewChild('slideTrack') slideTrack: ElementRef | undefined;

  slides: string[] = [
    'assets/images/home1.svg',
    'assets/images/home2.svg',
    'assets/images/home3.svg',
  ];

  currentSlide: number = 0;

  ngAfterViewInit(): void {
    this.updateSlidePosition();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlidePosition();
  }

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.updateSlidePosition();
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
    this.updateSlidePosition();
  }

  private updateSlidePosition(): void {
    if (this.slideTrack) {
      this.slideTrack.nativeElement.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }
}
