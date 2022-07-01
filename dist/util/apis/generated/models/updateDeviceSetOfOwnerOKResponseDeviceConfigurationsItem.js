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
 * Class representing a UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem.
 */
class UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem {
  /**
   * Create a UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem.
   * @property {uuid} [id] The unique id of the device configuration
   * @property {object} [image]
   * @property {string} [image.thumb]
   * @property {object} [model]
   * @property {string} [model.name]
   * @property {string} [model.manufacturer]
   * @property {string} [model.releaseDate]
   * @property {string} [model.formFactor]
   * @property {string} [os]
   * @property {string} [osName]
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem
   *
   * @returns {object} metadata of UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateDeviceSetOfOwnerOKResponse_deviceConfigurationsItem',
      type: {
        name: 'Composite',
        className: 'UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            serializedName: 'image',
            type: {
              name: 'Composite',
              className: 'UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItemImage'
            }
          },
          model: {
            required: false,
            serializedName: 'model',
            type: {
              name: 'Composite',
              className: 'UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItemModel'
            }
          },
          os: {
            required: false,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          osName: {
            required: false,
            serializedName: 'osName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateDeviceSetOfOwnerOKResponseDeviceConfigurationsItem;
