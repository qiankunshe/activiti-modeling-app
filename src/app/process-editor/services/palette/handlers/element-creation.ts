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

import { Injectable } from '@angular/core';
import { BpmnElementTrigger, TiggerHandler } from 'ama-sdk';
import { ProcessModelerService } from '../../process-modeler.service';

@Injectable()
export class ElementCreationHandler implements TiggerHandler {

    constructor(private processModelerService: ProcessModelerService) {}

    private get create() {
        return this.processModelerService.getFromModeler('create');
    }

    private get elementFactory() {
        return this.processModelerService.getFromModeler('elementFactory');
    }

    processEvent(event: any, element: BpmnElementTrigger) {
        const shape = this.elementFactory.createShape(
            Object.assign({ type: element.type }, element.options)
        );
        if (element.options) {
            shape.businessObject.di.isExpanded = element.options.isExpanded;
        }
        this.create.start(event, shape);
    }
}