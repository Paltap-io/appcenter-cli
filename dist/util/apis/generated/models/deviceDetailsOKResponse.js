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
 * The information for a single iOS device
 *
 */
class DeviceDetailsOKResponse {
  /**
   * Create a DeviceDetailsOKResponse.
   * @property {string} udid The Unique Device IDentifier of the device
   * @property {string} model The model identifier of the device, in the format
   * iDeviceM,N
   * @property {string} deviceName The device description, in the format
   * "iPhone 7 Plus (A1784)"
   * @property {string} [fullDeviceName] A combination of the device model name
   * and the owner name.
   * @property {string} osBuild The last known OS version running on the device
   * @property {string} osVersion The last known OS version running on the
   * device
   * @property {string} [serial] The device's serial number. Always empty or
   * undefined at present.
   * @property {string} [imei] The device's International Mobile Equipment
   * Identity number. Always empty or undefined at present.
   * @property {string} [ownerId] The user ID of the device owner.
   * @property {string} status The provisioning status of the device.
   * @property {string} [registeredAt] Timestamp of when the device was
   * registered in ISO format.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceDetailsOKResponse
   *
   * @returns {object} metadata of DeviceDetailsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceDetailsOKResponse',
      type: {
        name: 'Composite',
        className: 'DeviceDetailsOKResponse',
        modelProperties: {
          udid: {
            required: true,
            serializedName: 'udid',
            type: {
              name: 'String'
            }
          },
          model: {
            required: true,
            serializedName: 'model',
            type: {
              name: 'String'
            }
          },
          deviceName: {
            required: true,
            serializedName: 'device_name',
            type: {
              name: 'String'
            }
          },
          fullDeviceName: {
            required: false,
            serializedName: 'full_device_name',
            type: {
              name: 'String'
            }
          },
          osBuild: {
            required: true,
            serializedName: 'os_build',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: true,
            serializedName: 'os_version',
            type: {
              name: 'String'
            }
          },
          serial: {
            required: false,
            serializedName: 'serial',
            type: {
              name: 'String'
            }
          },
          imei: {
            required: false,
            serializedName: 'imei',
            type: {
              name: 'String'
            }
          },
          ownerId: {
            required: false,
            serializedName: 'owner_id',
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
          },
          registeredAt: {
            required: false,
            serializedName: 'registered_at',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceDetailsOKResponse;
