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

import { InjectionToken } from '@angular/core';

export interface ToolTrigger {
    group: 'tool';
    type: string;
    icon: string;
    title: string;
}

export interface BpmnElementTrigger {
    group: 'bpmn';
    type: string;
    icon: string;
    title: string;
    options: any;
}

export type BpmnTrigger = BpmnElementTrigger & ToolTrigger;

export interface PaletteSeparatorElement {
    group: 'separator';
}

export interface PaletteGroupElement {
    children?: BpmnTrigger[];
}

export type PaletteElement = PaletteSeparatorElement & PaletteGroupElement & BpmnTrigger;

export interface TiggerHandler {
    processEvent(event: any, element: BpmnTrigger): void;
}

export const CustomPaletteElementsToken = new InjectionToken<PaletteElement>('custom-palette-elements');
