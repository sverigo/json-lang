import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent{
    @Input() nodes;

    isString(value) {
        return typeof value === 'string';
    }

    trackByFn(index: any) {
        return index;
    }
}
