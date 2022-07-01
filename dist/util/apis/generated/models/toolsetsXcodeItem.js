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
 * The Xcode version
 *
 */
class ToolsetsXcodeItem {
  /**
   * Create a ToolsetsXcodeItem.
   * @property {string} [name] The version name
   * @property {boolean} [current] If the Xcode is latest stable
   */
  constructor() {
  }

  /**
   * Defines the metadata of ToolsetsXcodeItem
   *
   * @returns {object} metadata of ToolsetsXcodeItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Toolsets_xcodeItem',
      type: {
        name: 'Composite',
        className: 'ToolsetsXcodeItem',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          current: {
            required: false,
            serializedName: 'current',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ToolsetsXcodeItem;
