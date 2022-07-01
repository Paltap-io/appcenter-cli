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
 * apple secret details
 *
 */
class AppleCredentialsSecretRequestData {
  /**
   * Create a AppleCredentialsSecretRequestData.
   * @property {string} [username] username to connect to apple store.
   * @property {string} [authCode] 6 digit auth code
   * @property {string} [password] password to connect to apple store.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleCredentialsSecretRequestData
   *
   * @returns {object} metadata of AppleCredentialsSecretRequestData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleCredentialsSecretRequest_data',
      type: {
        name: 'Composite',
        className: 'AppleCredentialsSecretRequestData',
        modelProperties: {
          username: {
            required: false,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          authCode: {
            required: false,
            serializedName: 'authCode',
            constraints: {
              MaxLength: 6,
              MinLength: 6
            },
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
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

module.exports = AppleCredentialsSecretRequestData;
