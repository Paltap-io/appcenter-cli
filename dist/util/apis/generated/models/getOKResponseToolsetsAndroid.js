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
 * Build configuration for Android projects
 *
 */
class GetOKResponseToolsetsAndroid {
  /**
   * Create a GetOKResponseToolsetsAndroid.
   * @property {string} [gradleWrapperPath] Path to the Gradle wrapper script
   * @property {string} [module] The Gradle module to build
   * @property {string} [buildVariant] The Android build variant to build
   * @property {boolean} [runTests] Whether to run unit tests during the build
   * (default). Default value: true .
   * @property {boolean} [runLint] Whether to run lint checks during the build
   * (default)
   * @property {boolean} [isRoot] Whether it is the root module or not
   * @property {boolean} [automaticSigning] Whether to apply automatic signing
   * or not
   * @property {string} [keystorePassword] The password of the keystore
   * @property {string} [keyAlias] The key alias
   * @property {string} [keyPassword] The key password
   * @property {string} [keystoreFilename] The name of the keystore file
   * @property {string} [keystoreEncoded] The keystore encoded value
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetOKResponseToolsetsAndroid
   *
   * @returns {object} metadata of GetOKResponseToolsetsAndroid
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetOKResponse_toolsets_android',
      type: {
        name: 'Composite',
        className: 'GetOKResponseToolsetsAndroid',
        modelProperties: {
          gradleWrapperPath: {
            required: false,
            serializedName: 'gradleWrapperPath',
            type: {
              name: 'String'
            }
          },
          module: {
            required: false,
            serializedName: 'module',
            type: {
              name: 'String'
            }
          },
          buildVariant: {
            required: false,
            serializedName: 'buildVariant',
            type: {
              name: 'String'
            }
          },
          runTests: {
            required: false,
            serializedName: 'runTests',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          runLint: {
            required: false,
            serializedName: 'runLint',
            type: {
              name: 'Boolean'
            }
          },
          isRoot: {
            required: false,
            serializedName: 'isRoot',
            type: {
              name: 'Boolean'
            }
          },
          automaticSigning: {
            required: false,
            serializedName: 'automaticSigning',
            type: {
              name: 'Boolean'
            }
          },
          keystorePassword: {
            required: false,
            serializedName: 'keystorePassword',
            type: {
              name: 'String'
            }
          },
          keyAlias: {
            required: false,
            serializedName: 'keyAlias',
            type: {
              name: 'String'
            }
          },
          keyPassword: {
            required: false,
            serializedName: 'keyPassword',
            type: {
              name: 'String'
            }
          },
          keystoreFilename: {
            required: false,
            serializedName: 'keystoreFilename',
            type: {
              name: 'String'
            }
          },
          keystoreEncoded: {
            required: false,
            serializedName: 'keystoreEncoded',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetOKResponseToolsetsAndroid;
