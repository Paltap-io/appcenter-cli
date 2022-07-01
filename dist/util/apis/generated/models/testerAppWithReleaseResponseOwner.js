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
 * The information about the app's owner
 *
 */
class TesterAppWithReleaseResponseOwner {
  /**
   * Create a TesterAppWithReleaseResponseOwner.
   * @property {string} [id] The unique id (UUID) of the owner
   * @property {string} [avatarUrl] The avatar URL of the owner
   * @property {string} [displayName] The owner's display name
   * @property {string} [email] The owner's email address
   * @property {string} [name] The unique name that used to identify the owner
   * @property {string} [type] The owner type. Can either be 'org' or 'user'.
   * Possible values include: 'org', 'user'
   */
  constructor() {
  }

  /**
   * Defines the metadata of TesterAppWithReleaseResponseOwner
   *
   * @returns {object} metadata of TesterAppWithReleaseResponseOwner
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TesterAppWithReleaseResponse_owner',
      type: {
        name: 'Composite',
        className: 'TesterAppWithReleaseResponseOwner',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: false,
            serializedName: 'email',
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
          }
        }
      }
    };
  }
}

module.exports = TesterAppWithReleaseResponseOwner;
