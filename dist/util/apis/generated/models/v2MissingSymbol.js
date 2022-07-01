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
 * missing symbol
 *
 */
class V2MissingSymbol {
  /**
   * Create a V2MissingSymbol.
   * @property {string} symbolId symbol id
   * @property {string} name symbol name
   * @property {string} [platform] symbol plarform
   * @property {string} status symbol status. Possible values include:
   * 'missing', 'ignored', 'available'
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2MissingSymbol
   *
   * @returns {object} metadata of V2MissingSymbol
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2MissingSymbol',
      type: {
        name: 'Composite',
        className: 'V2MissingSymbol',
        modelProperties: {
          symbolId: {
            required: true,
            serializedName: 'symbol_id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = V2MissingSymbol;
