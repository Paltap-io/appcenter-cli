/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Wheither or not to skip the validation for this release
 *
 */
class SkipValidationRequest {
  /**
   * Create a SkipValidationRequest.
   * @property {boolean} [skipValidation] true if we want to skip the
   * validation, false otherwise
   */
  constructor() {
  }

  /**
   * Defines the metadata of SkipValidationRequest
   *
   * @returns {object} metadata of SkipValidationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SkipValidationRequest',
      type: {
        name: 'Composite',
        className: 'SkipValidationRequest',
        modelProperties: {
          skipValidation: {
            required: false,
            serializedName: 'skip_validation',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SkipValidationRequest;
