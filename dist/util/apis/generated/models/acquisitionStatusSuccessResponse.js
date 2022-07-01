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
 * Class representing a AcquisitionStatusSuccessResponse.
 */
class AcquisitionStatusSuccessResponse {
  /**
   * Create a AcquisitionStatusSuccessResponse.
   * @property {string} code The code indicating the status
   * @property {string} message The message indicating the status
   */
  constructor() {
  }

  /**
   * Defines the metadata of AcquisitionStatusSuccessResponse
   *
   * @returns {object} metadata of AcquisitionStatusSuccessResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AcquisitionStatusSuccessResponse',
      type: {
        name: 'Composite',
        className: 'AcquisitionStatusSuccessResponse',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AcquisitionStatusSuccessResponse;
