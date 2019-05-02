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

const models = require('./index');

/**
 * Notification statistics
 *
 * @extends models['NotificationOverviewResult']
 */
class NotificationDetailsResult extends models['NotificationOverviewResult'] {
  /**
   * Create a NotificationDetailsResult.
   * @property {object} notificationContent
   * @property {string} [notificationContent.name] Notification name
   * @property {string} [notificationContent.title] Notification title
   * @property {string} [notificationContent.body] Notification body
   * @property {object} [notificationContent.customData] Notification custom
   * data (such as badge, color, sound, etc.)
   * @property {array} [failureOutcomes] Failture outcome counts
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NotificationDetailsResult
   *
   * @returns {object} metadata of NotificationDetailsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationDetailsResult',
      type: {
        name: 'Composite',
        className: 'NotificationDetailsResult',
        modelProperties: {
          notificationId: {
            required: true,
            serializedName: 'notification_id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 64
            },
            type: {
              name: 'String'
            }
          },
          notificationTarget: {
            required: false,
            serializedName: 'notification_target',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'NotificationTarget',
              className: 'NotificationTarget'
            }
          },
          sendTime: {
            required: false,
            serializedName: 'send_time',
            type: {
              name: 'DateTime'
            }
          },
          pnsSendFailure: {
            required: false,
            serializedName: 'pns_send_failure',
            type: {
              name: 'Number'
            }
          },
          pnsSendSuccess: {
            required: false,
            serializedName: 'pns_send_success',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          notificationContent: {
            required: true,
            serializedName: 'notification_content',
            type: {
              name: 'Composite',
              className: 'NotificationContent'
            }
          },
          failureOutcomes: {
            required: false,
            serializedName: 'failure_outcomes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NotificationFailureOutcomeCountElementType',
                  type: {
                    name: 'Composite',
                    className: 'NotificationFailureOutcomeCount'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationDetailsResult;
