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
 * Configuration for export to Blob Storage with customer linked subscription.
 *
 */
class ExportConfigurationBlobStorageLinkedSubscription {
  /**
   * Create a ExportConfigurationBlobStorageLinkedSubscription.
   * @property {string} type Type of export configuration. Possible values
   * include: 'blob_storage_connection_string',
   * 'application_insights_instrumentation_key',
   * 'blob_storage_linked_subscription',
   * 'application_insights_linked_subscription'
   * @property {array} [exportEntities]
   * @property {string} [resourceName] The resource name on azure
   * @property {string} [resourceGroup] The resource group name on azure
   * @property {boolean} [backfill] Field to determine if backfilling should
   * occur. The default value is true. If set to false export starts from date
   * and time of config creation.
   * @property {string} [blobPathFormatKind] The path to the blob when enum set
   * to 'WithoutAppId' is 'year/month/day/hour/minute' and when set to
   * 'WithAppId' is 'appId/year/month/day/hour/minute'. Possible values
   * include: 'WithoutAppId', 'WithAppId'
   * @property {string} subscriptionId Id of customer subscription linked in
   * App Center
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExportConfigurationBlobStorageLinkedSubscription
   *
   * @returns {object} metadata of ExportConfigurationBlobStorageLinkedSubscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'blob_storage_linked_subscription',
      type: {
        name: 'Composite',
        className: 'ExportConfigurationBlobStorageLinkedSubscription',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          exportEntities: {
            required: false,
            serializedName: 'export_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExportEntityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'crashes', 'errors', 'attachments', 'no_logs' ]
                  }
              }
            }
          },
          resourceName: {
            required: false,
            serializedName: 'resource_name',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resource_group',
            type: {
              name: 'String'
            }
          },
          backfill: {
            required: false,
            serializedName: 'backfill',
            type: {
              name: 'Boolean'
            }
          },
          blobPathFormatKind: {
            required: false,
            serializedName: 'blob_path_format_kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'WithoutAppId', 'WithAppId' ]
            }
          },
          subscriptionId: {
            required: true,
            serializedName: 'subscription_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportConfigurationBlobStorageLinkedSubscription;
