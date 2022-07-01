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
 * symbol update message
 *
 */
class V2SymbolUpdateInfo {
  /**
   * Create a V2SymbolUpdateInfo.
   * @property {string} symbolId UUID of the symbol
   * @property {string} appId application id
   * @property {string} status symbol upload status. Possible values include:
   * 'missing', 'ignored', 'available'
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2SymbolUpdateInfo
   *
   * @returns {object} metadata of V2SymbolUpdateInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2SymbolUpdateInfo',
      type: {
        name: 'Composite',
        className: 'V2SymbolUpdateInfo',
        modelProperties: {
          symbolId: {
            required: true,
            serializedName: 'symbol_id',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
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

module.exports = V2SymbolUpdateInfo;
