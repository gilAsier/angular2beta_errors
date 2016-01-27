import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import './styles.css!';
import {AppComponent} from './app.component';

//import { enableProdMode } from 'angular2/core';
//enableProdMode();

bootstrap(AppComponent,[HTTP_PROVIDERS]);

