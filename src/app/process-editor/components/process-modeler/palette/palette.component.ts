 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Inject, Optional } from '@angular/core';
import { ProcessModelerPaletteService } from '../../../services/palette/process-modeler-palette.service';
import { PaletteElement, CustomPaletteElementsToken } from 'ama-sdk';
const paletteElements = require('../../../config/palette-elements.json');

@Component({
    templateUrl: './palette.component.html',
    selector: 'ama-process-palette'
})
export class PaletteComponent {

    public paletteElements: PaletteElement[];

    constructor(
        private processModelerPaletteService: ProcessModelerPaletteService,
        @Optional() @Inject(CustomPaletteElementsToken) customPaletteElements: PaletteElement[]
    ) {
        this.paletteElements = paletteElements.concat(customPaletteElements || []);
    }

    public isSeparator(element: PaletteElement) {
        return element.group === 'separator';
    }

    public hasChildren(element: PaletteElement) {
        return element.group === 'container' && element.children && element.children.length;
    }

    delegateEvent(paletteItem: PaletteElement, event: any) {
        this.processModelerPaletteService.delegateEvent(paletteItem, event);
    }
}
