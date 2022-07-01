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
 * Class representing a Modules.
 */
class Modules {
  /**
   * Create a Modules.
   * @property {object} [modules]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Modules
   *
   * @returns {object} metadata of Modules
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Modules',
      type: {
        name: 'Composite',
        className: 'Modules',
        modelProperties: {
          modules: {
            required: false,
            serializedName: 'modules',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'BooleanElementType',
                        type: {
                          name: 'Boolean'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Modules;
