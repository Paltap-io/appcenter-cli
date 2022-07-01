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
 * Class representing a GetLatestOKResponseItemDistributionStoresItem.
 */
class GetLatestOKResponseItemDistributionStoresItem {
  /**
   * Create a GetLatestOKResponseItemDistributionStoresItem.
   * @property {string} [id] ID identifying a unique distribution store.
   * @property {string} [name] A name identifying a unique distribution store.
   * @property {string} [type] type of the distribution store currently stores
   * type can be intune or googleplay. Possible values include: 'intune',
   * 'googleplay'
   * @property {string} [publishingStatus] publishing status of the release in
   * the store.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLatestOKResponseItemDistributionStoresItem
   *
   * @returns {object} metadata of GetLatestOKResponseItemDistributionStoresItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLatestOKResponseItem_distribution_storesItem',
      type: {
        name: 'Composite',
        className: 'GetLatestOKResponseItemDistributionStoresItem',
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
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLatestOKResponseItemDistributionStoresItem;
