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
 * Billing plans for a given period
 *
 */
class BillingPeriod {
  /**
   * Create a BillingPeriod.
   * @property {string} [startTime] Inclusive start of the period
   * @property {string} [endTime] Exclusive end of the period.
   * @property {object} [byAccount] Selection of a billing plan
   * @property {number} [byAccount.count] Number of instances of the billing
   * plan.
   * @property {object} [byAccount.plan] Billing Plan
   * @property {string} [byAccount.plan.id] The Billing Plan ID
   * @property {string} [byAccount.plan.version] Version of the Billing Plan
   * schema
   * @property {number} [byAccount.plan.price] Price of the Billing Plan
   * @property {string} [byAccount.plan.paymentSource] Service that receives
   * payments for this billing plan. Possible values include: 'None',
   * 'AppCenter', 'GitHub', 'Xtc'
   * @property {string} [byAccount.plan.service] Name of the service that the
   * plan applies to. Possible values include: 'Build', 'Test'
   * @property {object} [byAccount.plan.limits] A collection of named numeric
   * values
   * @property {object} [byAccount.plan.attributes] Collection of attribute
   * values.
   * @property {string} [byAccount.plan.parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingPeriod
   *
   * @returns {object} metadata of BillingPeriod
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingPeriod',
      type: {
        name: 'Composite',
        className: 'BillingPeriod',
        modelProperties: {
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'String'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'String'
            }
          },
          byAccount: {
            required: false,
            serializedName: 'byAccount',
            type: {
              name: 'Composite',
              className: 'BillingPeriodByAccount'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingPeriod;
