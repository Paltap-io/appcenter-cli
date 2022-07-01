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
 * Class representing a ListForOrgErrorModel.
 */
class ListForOrgErrorModel {
  /**
   * Create a ListForOrgErrorModel.
   * @property {object} error
   * @property {string} [error.code] Possible values include: 'BadRequest',
   * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
   * 'Unauthorized', 'TooManyRequests'
   * @property {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListForOrgErrorModel
   *
   * @returns {object} metadata of ListForOrgErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListForOrgErrorModel',
      type: {
        name: 'Composite',
        className: 'ListForOrgErrorModel',
        modelProperties: {
          error: {
            required: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ListForOrgErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = ListForOrgErrorModel;
