import { platformBrowser } from '@angular/platform-browser'; 
import { AppModule } from './app/y/app.module'; 

platformBrowser()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
