var handleActions = require('redux-actions').handleActions;

function mergeSingleEnrollmentAndMerchant( merchant, enrollment) {
    switch ( enrollment ? enrollment.reward.status : 'non-member') {
        case 'active':
            merchant.isMember = true;
            merchant.isVIP = false;
            break;
        case 'vip':
            merchant.isMember = true;
            merchant.isVIP = true;
            break;
        default:
            merchant.isMember = false;
            merchant.isVIP = false;
            break;
    }

    //process the rules for available_to
    merchant.hasDealOffer = false;
    merchant.hasFreeOffer = false;
    merchant.merchant_locations.forEach( location => {
        if ( location.active_offer_types_available_to ) {
            location.active_offer_types_available_to.forEach(available_type => {
                if (consumerMatchesOfferRules(available_type.available_to, enrollment)) {
                    //set the offer type... ugly as crap but it works
                    //using this switch because there used to be 4 types and at least 1 will likely come back
                    if (available_type.type === 'DealOffer') {
                        merchant.hasDealOffer = true;
                        merchant.hasOffers = true;
                    } else if (available_type.type === 'FreeOffer') {
                        merchant.hasFreeOffer = true;
                        merchant.hasOffers = true;
                    } else if (available_type.type === 'RewardOffer') {
                        merchant.hasRewardOffer = true;
                    }
                    switch (location.offer_type_display) {
                        case 'DealOffer':
                            break;
                        case 'FreeOffer':
                            if (available_type.type === 'DealOffer') {
                                location.offer_type_display = 'DealOffer';
                            }
                            break;
                        default:
                            if (available_type.type === 'DealOffer') {
                                location.offer_type_display = 'DealOffer';
                            } else if (available_type.type === 'FreeOffer') {
                                location.offer_type_display = 'FreeOffer';
                            }
                            break;
                    }
                    switch (merchant.offer_type_display) {
                        case 'DealOffer':
                            break;
                        case 'FreeOffer':
                            if (available_type.type === 'DealOffer') {
                                merchant.offer_type_display = 'DealOffer';
                            }
                            break;
                        default:
                            if (available_type.type === 'DealOffer') {
                                merchant.offer_type_display = 'DealOffer';
                            } else if (available_type.type === 'FreeOffer') {
                                merchant.offer_type_display = 'FreeOffer';
                            }
                            break;
                    }
                }
            });
        }
    });
    return merchant;
}

function  consumerMatchesOfferRules(rule, merchant, enrollment) {
    'use strict';
    var isAvailable = false;
    if (rule) {
        if (!isAvailable && rule.indexOf('vip-members') > -1) {
            isAvailable = merchant.isVIP;
        }
        if (!isAvailable && rule.indexOf('non-members') > -1) {
            isAvailable = !merchant.isMember;
        }
        if (!isAvailable && rule.indexOf('all-members') > -1) {
            isAvailable = merchant.isMember;
        }
        if( !isAvailable && enrollment ) {
            if (!isAvailable && rule.indexOf('members-with-spend') > -1) {
                isAvailable = enrollment.lifetime_spend > 0 || enrollment.lifetime_visits > 0;
            }
            if (!isAvailable && rule.indexOf('members-without-spend') > -1) {
                isAvailable = enrollment.lifetime_spend === 0 && enrollment.lifetime_visits === 0;
            }
        }
        if (!isAvailable && rule.indexOf('everyone') > -1) {
            isAvailable = true;
        }
    } else {
        //the only time there is no rule is reward offers which always need to stick around
        isAvailable = false;
    }

    return isAvailable;
}

function mergeEnrollmentsIntoMerchants(merchants, enrollmentsArray) {
    if ( enrollmentsArray ) {
        //make a quick keyed map as enrollments is really small and merchants is really big
        var enrollments = {};
        enrollmentsArray.forEach(enrollment => {
            enrollments[enrollment.merchant_id] = enrollment;
        });
        return merchants.map(merchant => mergeSingleEnrollmentAndMerchant(merchant, enrollments[merchant.id]));
    } else {
        return merchants;
    }
}

export default handleActions({
        REQUEST_MERCHANTS: (state, action) => {
            return {
                isLoading: true,
                items: state.items
            }
        },

        RECEIVE_MERCHANTS: (state, action) => ({
            isLoading: false,
            items: mergeEnrollmentsIntoMerchants(action.payload.merchants, action.payload.enrollments)
        }),

        RECEIVE_ENROLLMENTS: (state, action) => {
            if (action.error) {
                return state;
            } else {
                return {
                    isLoading: state.isLoading,
                    items: mergeEnrollmentsIntoMerchants(state.items, action.payload)
                }
            }
        }
    },
    {
        isLoading: false,
        items: []
    }
);