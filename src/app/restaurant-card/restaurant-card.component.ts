/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input } from '@angular/core';
import { Restaurant } from '../../types/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent {
  onCardClicked = () => {
    if (this.restuarant) {
      this.router.navigate(['/restaurant', this.restuarant.id]);
    }
  }
  @Input() restuarant: Restaurant | null = null;
  constructor(private router: Router) { }

  getArrayFromNumber(num: number): any[] {
    num = Math.floor(num); // Ensure integer value, adjust as needed
    return num > 0 ? new Array(num).fill(0) : [];
  }

  getRatingDifference(rating: number): any[] {
    // Ensure rating is a number, subtract from 5, and handle negatives or NaN
    const length = Math.max(0, 5 - Math.round(rating ?? 0));
    return new Array(length).fill(null); // Fill with null or any other value as placeholder
  }
}
