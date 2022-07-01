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
 * Class representing a UWPToolsetUwpSolutionsItem.
 */
class UWPToolsetUwpSolutionsItem {
  /**
   * Create a UWPToolsetUwpSolutionsItem.
   * @property {string} path The path to the UWP solution
   * @property {array} configurations The possible configurations detected for
   * the UWP solution
   */
  constructor() {
  }

  /**
   * Defines the metadata of UWPToolsetUwpSolutionsItem
   *
   * @returns {object} metadata of UWPToolsetUwpSolutionsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UWPToolset_uwpSolutionsItem',
      type: {
        name: 'Composite',
        className: 'UWPToolsetUwpSolutionsItem',
        modelProperties: {
          path: {
            required: true,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          configurations: {
            required: true,
            serializedName: 'configurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UWPToolsetUwpSolutionsItem;
