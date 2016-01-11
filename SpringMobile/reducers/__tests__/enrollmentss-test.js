jest.dontMock('../enrollments');

describe('REQUEST_ENROLLMENTS', function () {
    it('should carry through whatever is in the current state', function () {
        var instance = require('../enrollments').default;

        var state = {
            isLoading: false,
            items: [
                {
                    some: 'object'
                }
            ]
        };

        var payload = {
            type: 'REQUEST_ENROLLMENTS'
        };

        expect(instance.REQUEST_ENROLLMENTS(state, payload)).toEqual({
            isLoading: true,
            items: [
                {
                    some: 'object'
                }
            ]
        })
    });
});

describe('RECEIVE_ENROLLMENTS', function () {
    it('should do nothing if there is an error fetching enrollments', function () {
        var instance = require('../enrollments').default;

        var state = {
            isLoading: true,
            items: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        };

        var payload = {
            type: 'RECEIVE_ENROLLMENTS',
            error: true
        };

        expect(instance.RECEIVE_ENROLLMENTS(state, payload)).toEqual(state);
    });

    it('should flag status on enrollments everywhere there is an enrollment', function () {
        var instance = require('../enrollments').default;

        var state = {
            isLoading: true,
            items: [
                {
                    id: 29058
                },
                {
                    id: 2
                }
            ]
        };

        var payload = {
            type: 'RECEIVE_ENROLLMENTS',
            payload: [
                {
                    "id": 31476,
                    "merchant_id": 29058,
                    "merchant_name": "Spring Deli",
                    "merchant_image_thumbnail": "/images/enrollments/springdeli/img_thumb.jpg",
                    "reward": {
                        "id": 31476,
                        "status": "active",
                        "activation_date": "2014-10-10T20:58:06Z",
                        "rewards_offer_message": null,
                        "preferences": {
                            "offers": {
                                "status": "opted-in"
                            },
                            "newsletter": {
                                "status": "opted-in"
                            }
                        },
                        "message": "Reward automatically applies to your next purchase with your registered debit or credit card."
                    }
                },
                {
                    "id": 31775,
                    "merchant_id": 29204,
                    "merchant_name": "Mrs. Murphy \u0026 Sons Irish Bistro",
                    "merchant_image_thumbnail": "/images/enrollments/mrsmurphy/img_thumb.jpg",
                    "reward": {
                        "id": 31775,
                        "status": "active",
                        "activation_date": "2014-11-12T15:26:54Z",
                        "rewards_offer_message": null,
                        "preferences": {
                            "offers": {
                                "status": "opted-in"
                            },
                            "newsletter": {
                                "status": "opted-out",
                                "reason_id": null,
                                "reason": null,
                                "message": null
                            }
                        },
                        "message": "Reward automatically applies to your next purchase with your registered debit or credit card."
                    },
                    "offer_claims": [
                        {
                            "id": 3720,
                            "activation_date": "2014-12-17T21:58:38Z",
                            "end_date": "2016-09-01",
                            "status": "active",
                            "merchant_id": 29204,
                            "offer": {
                                "id": 29736,
                                "display_name": "A $25 Gift For You",
                                "end_date": "2016-09-01",
                                "redeem_within": null,
                                "image_thumbnail": "/images/enrollments/mrsmurphy/offers/img_thumb.jpg",
                                "type": "FreeOffer",
                                "value_amount": "25.0",
                                "value_type": "currency",
                                "min_purchase": "25.0",
                                "location_acceptance_status": "one",
                                "location_acceptance_names": [
                                    "Mrs. Murphy \u0026 Sons Irish Bistro - North S"
                                ],
                                "merchant_name": "Mrs. Murphy \u0026 Sons Irish Bistro"
                            }
                        }
                    ]
                }
            ]
        };

        expect(instance.RECEIVE_ENROLLMENTS(state, payload)).toEqual({
            isLoading: false,
            items: [
                {
                    "id": 31476,
                    "merchant_id": 29058,
                    "merchant_name": "Spring Deli",
                    "merchant_image_thumbnail": "/images/enrollments/springdeli/img_thumb.jpg",
                    "reward": {
                        "id": 31476,
                        "status": "active",
                        "activation_date": "2014-10-10T20:58:06Z",
                        "rewards_offer_message": null,
                        "preferences": {
                            "offers": {
                                "status": "opted-in"
                            },
                            "newsletter": {
                                "status": "opted-in"
                            }
                        },
                        "message": "Reward automatically applies to your next purchase with your registered debit or credit card."
                    }
                },
                {
                    "id": 31775,
                    "merchant_id": 29204,
                    "merchant_name": "Mrs. Murphy \u0026 Sons Irish Bistro",
                    "merchant_image_thumbnail": "/images/enrollments/mrsmurphy/img_thumb.jpg",
                    "reward": {
                        "id": 31775,
                        "status": "active",
                        "activation_date": "2014-11-12T15:26:54Z",
                        "rewards_offer_message": null,
                        "preferences": {
                            "offers": {
                                "status": "opted-in"
                            },
                            "newsletter": {
                                "status": "opted-out",
                                "reason_id": null,
                                "reason": null,
                                "message": null
                            }
                        },
                        "message": "Reward automatically applies to your next purchase with your registered debit or credit card."
                    },
                    "offer_claims": [
                        {
                            "id": 3720,
                            "activation_date": "2014-12-17T21:58:38Z",
                            "end_date": "2016-09-01",
                            "status": "active",
                            "merchant_id": 29204,
                            "offer": {
                                "id": 29736,
                                "display_name": "A $25 Gift For You",
                                "end_date": "2016-09-01",
                                "redeem_within": null,
                                "image_thumbnail": "/images/enrollments/mrsmurphy/offers/img_thumb.jpg",
                                "type": "FreeOffer",
                                "value_amount": "25.0",
                                "value_type": "currency",
                                "min_purchase": "25.0",
                                "location_acceptance_status": "one",
                                "location_acceptance_names": [
                                    "Mrs. Murphy \u0026 Sons Irish Bistro - North S"
                                ],
                                "merchant_name": "Mrs. Murphy \u0026 Sons Irish Bistro"
                            }
                        }
                    ]
                }
            ]
        });
    });
});