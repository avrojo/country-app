import { Component, input} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/Country';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'country-results-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './results-table.component.html',
})
export class ResultsTableComponent {
  countries = input<Country[]>();
  error = input<Error | undefined>(undefined);
  isLoading = input(false);
}