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
 * The organization that owns the distribution group, if it exists
 *
 */
class ListOKResponseDistributionGroup {
  /**
   * Create a ListOKResponseDistributionGroup.
   * @property {object} [owner] The information about the app's owner
   * @property {uuid} [owner.id] The unique id (UUID) of the owner
   * @property {string} [owner.avatarUrl] The avatar URL of the owner
   * @property {string} [owner.displayName] The owner's display name
   * @property {string} [owner.email] The owner's email address
   * @property {string} [owner.name] The unique name that used to identify the
   * owner
   * @property {string} [owner.type] The owner type. Can either be 'org' or
   * 'user'. Possible values include: 'org', 'user'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListOKResponseDistributionGroup
   *
   * @returns {object} metadata of ListOKResponseDistributionGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListOKResponse_distribution_group',
      type: {
        name: 'Composite',
        className: 'ListOKResponseDistributionGroup',
        modelProperties: {
          owner: {
            required: false,
            serializedName: 'owner',
            type: {
              name: 'Composite',
              className: 'ListOKResponseDistributionGroupOwner'
            }
          }
        }
      }
    };
  }
}

module.exports = ListOKResponseDistributionGroup;
