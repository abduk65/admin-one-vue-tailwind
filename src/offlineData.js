import { ref } from 'vue'
export  const data = ref([
  {
    "id": 1,
    "product_id": 1,
    "quantity": 812,
    "adari": 26,
    "branch_id": 2,
    "commission_id": 14,
    "commission_quantity": 32,
    "created_at": "2024-06-28T00:24:48.000000Z",
    "updated_at": "2024-06-28T00:24:48.000000Z",
    "product": {
      "id": 1,
      "name": "bale7",
      "type": "Bread",
      "unit_price": 7,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 14,
      "product_id": 4,
      "discount_amount": 0.66,
      "commission_recipient_id": 3,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 2,
    "product_id": 3,
    "quantity": 1648,
    "adari": 33,
    "branch_id": 2,
    "commission_id": 3,
    "commission_quantity": 15,
    "created_at": "2024-05-30T12:18:38.000000Z",
    "updated_at": "2024-05-30T12:18:38.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 3,
      "product_id": 2,
      "discount_amount": 0.85,
      "commission_recipient_id": 5,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 3,
    "product_id": 2,
    "quantity": 1736,
    "adari": 25,
    "branch_id": 1,
    "commission_id": 15,
    "commission_quantity": 44,
    "created_at": "2024-07-04T03:08:07.000000Z",
    "updated_at": "2024-07-04T03:08:07.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 15,
      "product_id": 2,
      "discount_amount": 0.92,
      "commission_recipient_id": 4,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 4,
    "product_id": 2,
    "quantity": 4326,
    "adari": 36,
    "branch_id": 2,
    "commission_id": 17,
    "commission_quantity": 16,
    "created_at": "2024-07-12T21:30:41.000000Z",
    "updated_at": "2024-07-12T21:30:41.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 17,
      "product_id": 3,
      "discount_amount": 0.81,
      "commission_recipient_id": 2,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 5,
    "product_id": 4,
    "quantity": 4516,
    "adari": 27,
    "branch_id": 1,
    "commission_id": 12,
    "commission_quantity": 10,
    "created_at": "2024-01-29T00:59:05.000000Z",
    "updated_at": "2024-01-29T00:59:05.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 12,
      "product_id": 4,
      "discount_amount": 0.39,
      "commission_recipient_id": 3,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 6,
    "product_id": 2,
    "quantity": 4061,
    "adari": 17,
    "branch_id": 1,
    "commission_id": 9,
    "commission_quantity": 17,
    "created_at": "2024-03-20T13:33:42.000000Z",
    "updated_at": "2024-03-20T13:33:42.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 9,
      "product_id": 2,
      "discount_amount": 0.48,
      "commission_recipient_id": 3,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 7,
    "product_id": 4,
    "quantity": 1732,
    "adari": 36,
    "branch_id": 2,
    "commission_id": 19,
    "commission_quantity": 43,
    "created_at": "2024-02-02T02:58:59.000000Z",
    "updated_at": "2024-02-02T02:58:59.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 19,
      "product_id": 1,
      "discount_amount": 0.9,
      "commission_recipient_id": 3,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 8,
    "product_id": 2,
    "quantity": 4124,
    "adari": 4,
    "branch_id": 2,
    "commission_id": 17,
    "commission_quantity": 47,
    "created_at": "2024-05-13T09:11:39.000000Z",
    "updated_at": "2024-05-13T09:11:39.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 17,
      "product_id": 3,
      "discount_amount": 0.81,
      "commission_recipient_id": 2,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 9,
    "product_id": 2,
    "quantity": 1090,
    "adari": 25,
    "branch_id": 2,
    "commission_id": 14,
    "commission_quantity": 13,
    "created_at": "2024-05-03T02:27:13.000000Z",
    "updated_at": "2024-05-03T02:27:13.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 14,
      "product_id": 4,
      "discount_amount": 0.66,
      "commission_recipient_id": 3,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 10,
    "product_id": 3,
    "quantity": 3426,
    "adari": 24,
    "branch_id": 1,
    "commission_id": 20,
    "commission_quantity": 3,
    "created_at": "2024-02-22T04:38:56.000000Z",
    "updated_at": "2024-02-22T04:38:56.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 20,
      "product_id": 2,
      "discount_amount": 0.37,
      "commission_recipient_id": 4,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 11,
    "product_id": 3,
    "quantity": 4031,
    "adari": 25,
    "branch_id": 2,
    "commission_id": 3,
    "commission_quantity": 33,
    "created_at": "2024-06-20T02:31:29.000000Z",
    "updated_at": "2024-06-20T02:31:29.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 3,
      "product_id": 2,
      "discount_amount": 0.85,
      "commission_recipient_id": 5,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 12,
    "product_id": 3,
    "quantity": 862,
    "adari": 18,
    "branch_id": 2,
    "commission_id": 4,
    "commission_quantity": 21,
    "created_at": "2024-02-22T16:25:07.000000Z",
    "updated_at": "2024-02-22T16:25:07.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 4,
      "product_id": 4,
      "discount_amount": 0.09,
      "commission_recipient_id": 1,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 13,
    "product_id": 3,
    "quantity": 4884,
    "adari": 29,
    "branch_id": 2,
    "commission_id": 8,
    "commission_quantity": 8,
    "created_at": "2024-02-16T19:43:07.000000Z",
    "updated_at": "2024-02-16T19:43:07.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 8,
      "product_id": 2,
      "discount_amount": 0.41,
      "commission_recipient_id": 2,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 14,
    "product_id": 4,
    "quantity": 1974,
    "adari": 38,
    "branch_id": 1,
    "commission_id": 17,
    "commission_quantity": 10,
    "created_at": "2024-07-17T23:55:08.000000Z",
    "updated_at": "2024-07-17T23:55:08.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 17,
      "product_id": 3,
      "discount_amount": 0.81,
      "commission_recipient_id": 2,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 15,
    "product_id": 3,
    "quantity": 4774,
    "adari": 26,
    "branch_id": 1,
    "commission_id": 20,
    "commission_quantity": 6,
    "created_at": "2024-01-22T18:43:24.000000Z",
    "updated_at": "2024-01-22T18:43:24.000000Z",
    "product": {
      "id": 3,
      "name": "Donut",
      "type": "Cake",
      "unit_price": 30,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 20,
      "product_id": 2,
      "discount_amount": 0.37,
      "commission_recipient_id": 4,
      "status": "active",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 16,
    "product_id": 4,
    "quantity": 762,
    "adari": 38,
    "branch_id": 1,
    "commission_id": 15,
    "commission_quantity": 25,
    "created_at": "2024-04-20T04:56:44.000000Z",
    "updated_at": "2024-04-20T04:56:44.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 15,
      "product_id": 2,
      "discount_amount": 0.92,
      "commission_recipient_id": 4,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 17,
    "product_id": 1,
    "quantity": 968,
    "adari": 26,
    "branch_id": 2,
    "commission_id": 5,
    "commission_quantity": 44,
    "created_at": "2024-04-07T04:05:26.000000Z",
    "updated_at": "2024-04-07T04:05:26.000000Z",
    "product": {
      "id": 1,
      "name": "bale7",
      "type": "Bread",
      "unit_price": 7,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 5,
      "product_id": 2,
      "discount_amount": 0.41,
      "commission_recipient_id": 4,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 18,
    "product_id": 4,
    "quantity": 3339,
    "adari": 29,
    "branch_id": 1,
    "commission_id": 1,
    "commission_quantity": 48,
    "created_at": "2024-02-27T03:39:18.000000Z",
    "updated_at": "2024-02-27T03:39:18.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 1,
      "product_id": 4,
      "discount_amount": 0.49,
      "commission_recipient_id": 4,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 19,
    "product_id": 4,
    "quantity": 2051,
    "adari": 33,
    "branch_id": 1,
    "commission_id": 19,
    "commission_quantity": 5,
    "created_at": "2024-06-15T16:05:10.000000Z",
    "updated_at": "2024-06-15T16:05:10.000000Z",
    "product": {
      "id": 4,
      "name": "Kuribat",
      "type": "Cake",
      "unit_price": 40,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 1,
      "name": "saris",
      "type": "main",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 19,
      "product_id": 1,
      "discount_amount": 0.9,
      "commission_recipient_id": 3,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  },
  {
    "id": 20,
    "product_id": 2,
    "quantity": 3652,
    "adari": 7,
    "branch_id": 2,
    "commission_id": 13,
    "commission_quantity": 37,
    "created_at": "2024-03-30T15:13:38.000000Z",
    "updated_at": "2024-03-30T15:13:38.000000Z",
    "product": {
      "id": 2,
      "name": "bale10",
      "type": "Bread",
      "unit_price": 10,
      "created_at": "2024-07-16T14:32:41.000000Z",
      "updated_at": "2024-07-16T14:32:41.000000Z"
    },
    "branch": {
      "id": 2,
      "name": "tach_bet",
      "type": "sub",
      "created_at": "2024-07-19T08:58:42.000000Z",
      "updated_at": "2024-07-19T08:58:42.000000Z"
    },
    "commission": {
      "id": 13,
      "product_id": 3,
      "discount_amount": 0.17,
      "commission_recipient_id": 1,
      "status": "inactive",
      "created_at": "2024-07-19T10:05:24.000000Z",
      "updated_at": "2024-07-19T10:05:24.000000Z"
    }
  }
])
