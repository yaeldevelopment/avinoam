/// <reference types="jquery" />
import 'jquery';

declare module 'jquery' {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}
