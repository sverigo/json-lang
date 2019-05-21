import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    nodes: any;
    downloadHref: SafeUrl;

    constructor(private sanitizer: DomSanitizer) { }

    onFileUpload(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const file = event.target.files[0];
            reader.readAsText(file);

            reader.onload = () => {
               this.nodes = JSON.parse(reader.result.toString());
            }
        }
    }

    ngOnInit() {

    }

    onSubmit() {
        let object = JSON.stringify(this.nodes);
        let uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(object));
        this.downloadHref = uri;
    }
}
