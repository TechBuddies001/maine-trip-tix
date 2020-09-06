import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('starts');

        // this.scriptArr.forEach((script) => {
        //   let scriptElem = document.getElementById(script.scriptID);

        //   if (scriptElem) {
        //     scriptElem.remove();
        //   }
        // })

        let scriptElem = document.getElementById(this.scriptID);

        if (scriptElem) {
          scriptElem.remove();
        }

        let mainScriptElem = document.getElementById(this.mainScriptID);

        if (mainScriptElem) {
          mainScriptElem.remove();
        }
      }

      if (event instanceof NavigationEnd) {
        console.log('ends');

        // this.scriptArr.forEach((script) => {
        //   // create new script element
        //   let elem = document.createElement('script');
        //   elem.src = script.scriptSrc;
        //   elem.id = script.scriptID;

        //   // appending script element to body when router-outlet component is fully loaded
        //   document.body.appendChild(elem);
        // });

        // create new script element script.js
        let scriptElem = document.createElement('script');
        scriptElem.src = this.scriptSrc;
        scriptElem.id = this.scriptID;

        // appending script element to body when router-outlet component is fully loaded
        document.body.appendChild(scriptElem);


        if (this.router.url.includes('/home')) {
          // create new script element for main.js
          let mainScriptElem = document.createElement('script');
          mainScriptElem.src = this.mainScriptSrc;
          mainScriptElem.id = this.mainScriptID;

          // appending script element to body when router-outlet component is fully loaded
          document.body.appendChild(mainScriptElem);
        }


      }
    })
  }

  title = 'maine-trip-tix';

  scriptID = 'script';
  scriptSrc = 'assets/js/script.js';

  mainScriptID = 'mainScript';
  mainScriptSrc = 'assets/js/main.js';

  // details of scripts, loaded after route is fully loaded
  // scriptArr: { scriptSrc: string, scriptID: string }[] = [
  //   { scriptID: 'script', scriptSrc: 'assets/js/script.js' },
  //   { scriptID: 'mainScript', scriptSrc: 'assets/js/main.js' },
  // ]


}
