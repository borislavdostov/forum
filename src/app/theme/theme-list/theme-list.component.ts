import { Component, OnInit } from "@angular/core";
import { ITheme } from "src/app/shared/interfaces";
import { ThemeService } from "src/app/theme/theme.service";

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themeList!: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = themeList;
    });
  }

}
