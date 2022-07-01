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
 * Class representing a DeviceFrameGrid.
 */
class DeviceFrameGrid {
  /**
   * Create a DeviceFrameGrid.
   * @property {number} [width]
   * @property {number} [height]
   * @property {string} [frameUrl]
   * @property {array} [screen]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceFrameGrid
   *
   * @returns {object} metadata of DeviceFrameGrid
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceFrame_grid',
      type: {
        name: 'Composite',
        className: 'DeviceFrameGrid',
        modelProperties: {
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          },
          frameUrl: {
            required: false,
            serializedName: 'frameUrl',
            type: {
              name: 'String'
            }
          },
          screen: {
            required: false,
            serializedName: 'screen',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceFrameGrid;
