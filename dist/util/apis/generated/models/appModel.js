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
 * Class representing a AppModel.
 */
class AppModel {
  /**
   * Create a AppModel.
   * @property {string} [description] A short text describing the app
   * @property {string} [releaseType] A one-word descriptive release-type value
   * that starts with a capital letter but is otherwise lowercase
   * @property {string} displayName The descriptive name of the app. This can
   * contain any characters
   * @property {string} [name] The name of the app used in URLs
   * @property {string} os The OS the app will be running on. Possible values
   * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows', 'Linux',
   * 'Custom'
   * @property {string} platform The platform of the app. Possible values
   * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
   * 'Xamarin', 'Unity', 'Electron', 'WPF', 'WinForms', 'Custom'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppModel
   *
   * @returns {object} metadata of AppModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'app',
      type: {
        name: 'Composite',
        className: 'AppModel',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          releaseType: {
            required: false,
            serializedName: 'release_type',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
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
          os: {
            required: true,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppModel;
