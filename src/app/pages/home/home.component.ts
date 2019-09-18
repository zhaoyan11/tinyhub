import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tags: any[];
  public userInput: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.tags = [
      { text: '云计算', popular: true },
      { text: 'Node.js', popular: true },
      { text: 'Go' },
      { text: 'Ruby', popular: true },
      { text: '算法' },
      { text: '容器' },
      { text: '架构', popular: true },
      { text: '数据分析' },
      { text: '前端' },
      { text: 'Python' },
      { text: '大数据' },
      { text: 'AWS', popular: true },
    ];
  }


  search(): void {
    this.router.navigate(['search'], {queryParams: {keyWords: this.userInput}});
  }
}
