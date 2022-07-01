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
 * jira secret details
 *
 */
class PrivateJiraConnectionSecretResponseData {
  /**
   * Create a PrivateJiraConnectionSecretResponseData.
   * @property {string} baseUrl baseUrl to connect to jira instance
   * @property {string} username username to connect to jira instance
   * @property {string} password password to connect to jira instance
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateJiraConnectionSecretResponseData
   *
   * @returns {object} metadata of PrivateJiraConnectionSecretResponseData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateJiraConnectionSecretResponse_data',
      type: {
        name: 'Composite',
        className: 'PrivateJiraConnectionSecretResponseData',
        modelProperties: {
          baseUrl: {
            required: true,
            serializedName: 'baseUrl',
            type: {
              name: 'String'
            }
          },
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateJiraConnectionSecretResponseData;
