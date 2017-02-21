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
 * @fileoverview Ensures `<audio>` elements have captions.
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit');

class AudioCaption extends AxeAudit {
  /**
   * @return {!AuditMeta}
   */
  static get meta() {
    return {
      category: 'Accessibility',
      name: 'audio-caption',
      description: 'All `<audio>` elements contain a `<track>` element with the `kind`' +
          'attribute value "captions"',
      helpText: 'Captions convey information such as identifying who is speaking, dialogue, and ' +
          'non-speech information. This can help deaf or hearing impaired users access ' +
          'meaningful content.',
      requiredArtifacts: ['Accessibility']
    };
  }
}

module.exports = AudioCaption;