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
 * Class representing a DeleteOKResponseModelModel.
 */
class DeleteOKResponseModelModel {
  /**
   * Create a DeleteOKResponseModelModel.
   * @property {string} [appId]
   * @property {string} [crashGroupId]
   * @property {string} [crashId]
   * @property {number} [crashesDeleted]
   * @property {number} [attachmentsDeleted]
   * @property {number} [blobsSucceeded]
   * @property {number} [blobsFailed]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteOKResponseModelModel
   *
   * @returns {object} metadata of DeleteOKResponseModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteOKResponse',
      type: {
        name: 'Composite',
        className: 'DeleteOKResponseModelModel',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          crashGroupId: {
            required: false,
            serializedName: 'crash_group_id',
            type: {
              name: 'String'
            }
          },
          crashId: {
            required: false,
            serializedName: 'crash_id',
            type: {
              name: 'String'
            }
          },
          crashesDeleted: {
            required: false,
            serializedName: 'crashes_deleted',
            type: {
              name: 'Number'
            }
          },
          attachmentsDeleted: {
            required: false,
            serializedName: 'attachments_deleted',
            type: {
              name: 'Number'
            }
          },
          blobsSucceeded: {
            required: false,
            serializedName: 'blobs_succeeded',
            type: {
              name: 'Number'
            }
          },
          blobsFailed: {
            required: false,
            serializedName: 'blobs_failed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteOKResponseModelModel;
