import { ThemeService } from './../../../../services/theme/theme.service';
import { StyleVariables } from './../../../../core/theme/styleVariables.model';
import { AppSettings } from './../../../../shared/models/appSettings.model';
import { Router } from '@angular/router';
import { UtilityService } from './../../../../services/utility/utility.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-categories',
  templateUrl: './landing-categories.component.html',
  styleUrls: ['./landing-categories.component.scss']
})
export class LandingCategoriesComponent implements OnInit, OnDestroy {

  @Input() settings: AppSettings;
  @Input() style: StyleVariables;

  isLoading: boolean = false;

  categorySubscription: Subscription;
  categories: Array<any> = [];

  constructor(
    private util: UtilityService,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.isLoading = true;
    this.categorySubscription = this.util.getLanguageCategoryData.subscribe((data) => {
      if (data && data.english) {
        this.categories = data.english;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    });
  }

  onCategorySelect(category: any) {
    this.util.loading.next(true);

    const previousSelectedCategroyId = this.util.getLocalData('last_categoryId') || category.id;
    this.util.setLocalData('selected_category', category, true);
    let path = (category.name).replace(/\s+/g, '-').toLowerCase() + '/home';

    this.router.navigate([path], { queryParams: { app: category.type, cat_flow_id: category.id } }).then(() => {
      this.settings.app_type = category.type;
      this.util.setSettings(this.settings);
      this.themeService.setStyles();
      this.util.setLocalData('last_categoryId', category.id);
      if (previousSelectedCategroyId != category.id) this.util.setCart([]);
      setTimeout(() => {
        this.util.loading.next(false);
      }, 1000);
    });
  }
  trackByCatFn(id, index) {
    return index;
  }
  ngOnDestroy() {
    if (!!this.categorySubscription) this.categorySubscription.unsubscribe();
  }

}
