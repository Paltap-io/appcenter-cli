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
 * Class representing a ErrorGroupOperatingSystems.
 */
class ErrorGroupOperatingSystems {
  /**
   * Create a ErrorGroupOperatingSystems.
   * @property {number} [errorCount]
   * @property {array} [operatingSystems]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupOperatingSystems
   *
   * @returns {object} metadata of ErrorGroupOperatingSystems
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupOperatingSystems',
      type: {
        name: 'Composite',
        className: 'ErrorGroupOperatingSystems',
        modelProperties: {
          errorCount: {
            required: false,
            serializedName: 'errorCount',
            type: {
              name: 'Number'
            }
          },
          operatingSystems: {
            required: false,
            serializedName: 'operatingSystems',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorGroupOperatingSystemsOperatingSystemsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorGroupOperatingSystemsOperatingSystemsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupOperatingSystems;
