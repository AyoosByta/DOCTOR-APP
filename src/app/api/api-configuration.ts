/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//34.68.84.96:7070';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
