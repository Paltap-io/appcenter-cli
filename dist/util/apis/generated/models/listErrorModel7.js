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
 * Class representing a ListErrorModel7.
 */
class ListErrorModel7 {
  /**
   * Create a ListErrorModel7.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListErrorModel7
   *
   * @returns {object} metadata of ListErrorModel7
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListErrorModel',
      type: {
        name: 'Composite',
        className: 'ListErrorModel7',
        modelProperties: {
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

module.exports = ListErrorModel7;
