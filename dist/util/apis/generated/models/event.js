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
 * Class representing a Event.
 */
class Event {
  /**
   * Create a Event.
   * @property {string} [id]
   * @property {string} [name]
   * @property {number} [deviceCount]
   * @property {number} [previousDeviceCount] The device count of previous time
   * range of the event.
   * @property {number} [count]
   * @property {number} [previousCount] The event count of previous time range
   * of the event.
   * @property {number} [countPerDevice]
   * @property {number} [countPerSession]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Event
   *
   * @returns {object} metadata of Event
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Event',
      type: {
        name: 'Composite',
        className: 'Event',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          deviceCount: {
            required: false,
            serializedName: 'device_count',
            type: {
              name: 'Number'
            }
          },
          previousDeviceCount: {
            required: false,
            serializedName: 'previous_device_count',
            type: {
              name: 'Number'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          previousCount: {
            required: false,
            serializedName: 'previous_count',
            type: {
              name: 'Number'
            }
          },
          countPerDevice: {
            required: false,
            serializedName: 'count_per_device',
            type: {
              name: 'Number'
            }
          },
          countPerSession: {
            required: false,
            serializedName: 'count_per_session',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Event;
