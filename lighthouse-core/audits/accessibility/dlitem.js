/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * @fileoverview Ensures that all child <dd> and <dt> elements have a <dl> as a parent.
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit');

class DLItem extends AxeAudit {
  /**
   * @return {!AuditMeta}
   */
  static get meta() {
    return {
      category: 'Accessibility',
      name: 'dlitem',
      description: 'All definition list items are wrapped in parent <dl> elements.',
      helpText: 'Definition list items (<dt> and/or <dd>) wrapped in parent <dl> elements enable ' +
          'screen readers to properly announce content.',
      requiredArtifacts: ['Accessibility']
    };
  }
}

module.exports = DLItem;