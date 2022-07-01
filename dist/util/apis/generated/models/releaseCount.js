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
 * Class representing a ReleaseCount.
 */
class ReleaseCount {
  /**
   * Create a ReleaseCount.
   * @property {string} releaseId
   * @property {string} [distributionGroup] Distribution group queried.
   * @property {number} uniqueCount Count of unique downloads against user id.
   * @property {number} totalCount Total count of downloads.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseCount
   *
   * @returns {object} metadata of ReleaseCount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseCount',
      type: {
        name: 'Composite',
        className: 'ReleaseCount',
        modelProperties: {
          releaseId: {
            required: true,
            serializedName: 'release_id',
            type: {
              name: 'String'
            }
          },
          distributionGroup: {
            required: false,
            serializedName: 'distribution_group',
            type: {
              name: 'String'
            }
          },
          uniqueCount: {
            required: true,
            serializedName: 'unique_count',
            type: {
              name: 'Number'
            }
          },
          totalCount: {
            required: true,
            serializedName: 'total_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseCount;
