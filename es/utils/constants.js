"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yearMapping = exports.timeMap = exports.stateMapping = exports.bankMapping = exports.aspRatio = exports._printPage = exports.VPA_REGEX = exports.TEASER_TAG_MAPPING = exports.STELLR_CART_TYPES = exports.SPCL_CHARS_REGEX = exports.SPACE_REGEX = exports.SORT_ICONS = exports.RATING_REVIEW_CONSTANTS = exports.PASS_NOT_MATCH = exports.PASSWORD_REGEX = exports.PAN_REGAX = exports.PAGE_SIZES = exports.OTP_SENT = exports.NUMBER_REGEX = exports.MONTHS_NAME = exports.MOBILE_NUMBER_REGEX = exports.IS_NUMBER_WITHORWITHOUT_DECIMAL_REGEX = exports.IS_NUMBER_REGEX = exports.IS_ENGLISH_ALPHANUMERIC_SPECIAL = exports.INVALID_PASS = exports.HTML_TAG_REGEX = exports.EXPRESS_DELIVERY_TEXT = exports.EXPRESS_DELIVERY = exports.ERROR_TNC = exports.ERROR_P_NUMBER = exports.ERROR_PINCODE = exports.ERROR_OTP = exports.ERROR_M_NUMBER = exports.ERROR_MULTIPLE_EMAIL = exports.ERROR_FAILED = exports.ERROR_EMPTY_COUPON = exports.ERROR_EMPTY = exports.ERROR_EMAIL = exports.ERROR_BILLING_PIN_1 = exports.ERROR_BILLING_PIN = exports.ERROR_ADDRESS_LENGTH = exports.EMAIL_REGEX = exports.DIRECTION_ICON_MAP = exports.DATE_REGEX = exports.CONTAINS_ALPHA_REGEX = exports.ALPHA_OR_NUMERIC_REGEX = void 0;
/* eslint-disable */

// REGEX
var EMAIL_REGEX = exports.EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var NUMBER_REGEX = exports.NUMBER_REGEX = /\d/;
var SPACE_REGEX = exports.SPACE_REGEX = /\s/;
var CONTAINS_ALPHA_REGEX = exports.CONTAINS_ALPHA_REGEX = /.*[a-zA-Z]+.*/;
var HTML_TAG_REGEX = exports.HTML_TAG_REGEX = /<(.|\n)*?>/;
var ALPHA_OR_NUMERIC_REGEX = exports.ALPHA_OR_NUMERIC_REGEX = /^[0-9a-zA-Z]+$/;
var IS_NUMBER_REGEX = exports.IS_NUMBER_REGEX = /^[0-9]*$/;
var IS_NUMBER_WITHORWITHOUT_DECIMAL_REGEX = exports.IS_NUMBER_WITHORWITHOUT_DECIMAL_REGEX = /^\d+(\.\d{1,2})?$/;
var MOBILE_NUMBER_REGEX = exports.MOBILE_NUMBER_REGEX = /^[6789]\d{9}$/;
var PASSWORD_REGEX = exports.PASSWORD_REGEX = /^(?=.*\d).{6,}$/;
var DATE_REGEX = exports.DATE_REGEX = /^([0-9]{1,2})\-([0-9]{1,2})\-([0-9]{4})$/;
var SPCL_CHARS_REGEX = exports.SPCL_CHARS_REGEX = /[ !@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
var IS_ENGLISH_ALPHANUMERIC_SPECIAL = exports.IS_ENGLISH_ALPHANUMERIC_SPECIAL = /^[ A-Za-z0-9_@.,/#&+-\w]*$/;
var PAN_REGAX = exports.PAN_REGAX = /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/;
var VPA_REGEX = exports.VPA_REGEX = /^[\w\.\-_]{3,}@[a-zA-Z]{3,}$/;

// ERROR TEXT
var ERROR_EMPTY = exports.ERROR_EMPTY = 'Mandatory fields cannot be empty';
var ERROR_ADDRESS_LENGTH = exports.ERROR_ADDRESS_LENGTH = 'Atleast 3 characters required';
var INVALID_PASS = exports.INVALID_PASS = 'Password must be minimum of 6 characters with at least 1 number';
var PASS_NOT_MATCH = exports.PASS_NOT_MATCH = 'Passwords does not match';
var ERROR_EMAIL = exports.ERROR_EMAIL = 'Please enter a valid email address';
var ERROR_M_NUMBER = exports.ERROR_M_NUMBER = 'Please enter a valid 10-digit mobile number';
var ERROR_MULTIPLE_EMAIL = exports.ERROR_MULTIPLE_EMAIL = 'Please select one email address to login';
var ERROR_P_NUMBER = exports.ERROR_P_NUMBER = 'Enter a valid Phone Number';
var ERROR_PINCODE = exports.ERROR_PINCODE = 'Enter a valid Pincode';
var ERROR_OTP = exports.ERROR_OTP = 'Invalid OTP';
var ERROR_EMPTY_COUPON = exports.ERROR_EMPTY_COUPON = 'Please enter a coupon code';
var ERROR_TNC = exports.ERROR_TNC = 'Please agree to the terms and conditions';
var ERROR_FAILED = exports.ERROR_FAILED = 'Unable to process your request. Please try again.';
var ERROR_BILLING_PIN = exports.ERROR_BILLING_PIN = 'The entered PIN code should belong to the same state as that of selected store {STATE_NAME}. Please enter another PIN code.';
var ERROR_BILLING_PIN_1 = exports.ERROR_BILLING_PIN_1 = 'Sorry, the selected address state is different than the selected Store’s state. Please select another address or add a new Billing Address.';

// SUCCESS TEXT
var OTP_SENT = exports.OTP_SENT = 'OTP sent to registered email address and mobile number';
var PAGE_SIZES = exports.PAGE_SIZES = [12, 24, 36];
var MONTHS_NAME = exports.MONTHS_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var SORT_ICONS = exports.SORT_ICONS = {
  relevance: 'fa fa-sort',
  'name-asc': 'fa fa-sort-alpha-asc',
  'name-desc': 'fa fa-sort-alpha-desc',
  'price-asc': 'fa fa-sort-amount-asc',
  'price-desc': 'fa fa-sort-amount-desc'
};

// TIME MAPPING for 24 Hours

var timeMap = exports.timeMap = {
  1: '13',
  2: '14',
  3: '15',
  4: '16',
  5: '17',
  6: '18',
  7: '19',
  8: '20',
  9: '21',
  10: '22',
  11: '23',
  12: '24'
};

// YEAR MAPPING

var yearMapping = exports.yearMapping = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sept',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

// INDIAN STATES MAPPING

var stateMapping = exports.stateMapping = {
  AND: 'Andhra Pradesh',
  ARU: 'Arunachal Pradesh',
  ASA: 'Assam',
  BIH: 'Bihar',
  CHA: 'Chhattisgarh',
  GOA: 'Goa',
  GUJ: 'Gujarat',
  HAR: 'Haryana',
  HIM: 'Himachal Pradesh',
  JK: 'Jammu and Kashmir',
  JHA: 'Jharkhand',
  KAR: 'Karnataka',
  KER: 'Kerala',
  MAD: 'Madhya Pradesh',
  MAH: 'Maharashtra',
  MAN: 'Manipur',
  MEG: 'Meghalaya',
  MIZ: 'Mizoram',
  NAG: 'Nagaland',
  ODI: 'Odisha',
  PUN: 'Punjab',
  RAJ: 'Rajasthan',
  SIK: 'Sikkim',
  TN: 'Tamil Nadu',
  TEL: 'Telangana',
  TRI: 'Tripura',
  UP: 'Uttar Pradesh',
  UTK: 'Uttarakhand',
  WB: 'West Bengal'
};

// BANK EMI CODE MAPPING

var bankMapping = exports.bankMapping = {
  // Billdesk Bank list
  ICICIEMI: 'ICICI Bank',
  AXISEMI: 'Axis Bank',
  HSBCEMI: 'HSBC Bank',
  RBLEMI: 'RBL Bank',
  HDFCEMI: 'HDFC Bank',
  HDFC: 'HDFC Bank',
  KOTAKEMI: 'Kotak Mahindra Bank',
  SCBEMI: 'Standard Chartered Bank',
  SBIEMI: 'SBI Bank',
  YBKEMI: 'Yes Bank',
  INDUSEMI: 'IndusInd Bank',
  CITIEMI: 'Citi Bank',
  // BFL and PineLabs Bank List
  AXISNEWEMI: 'AXIS Bank',
  AXIS: 'AXIS Bank',
  AXISDEBITNEWEMI: 'Axis Debit',
  AMEXNEWEMI: 'American Express',
  HSBCNEWEMI: 'HSBC Bank',
  INDUSINDNEWEMI: 'Indusind Bank',
  KOTAKNEWEMI: 'Kotak Mahindra Bank',
  SCBNEWEMI: 'Standard Chartered Bank',
  SBINEWEMI: 'SBI',
  RBLNEWEMI: 'RBL Bank',
  UNIONNEWEMI: 'Union Bank Of India',
  YESNEWEMI: 'YES Bank',
  JKNEWEMI: 'J&K Bank',
  BOBNEWEMI: 'Bank of Baroda',
  BFLNEWEMI: 'Bajaj Finance',
  ICICINEWEMI: 'ICICI Bank',
  ICICIDEBITNEWEMI: 'ICICI Debit',
  HDFCNEWEMI: 'HDFC Bank',
  CITINEWEMI: 'CITI Bank',
  IDBINEWEMI: 'IDBI Bank',
  UBINEWEMI: 'Union Bank Of India',
  MASHREQNEWEMI: 'MASHREQ',
  LVBNEWEMI: 'Lakshmi Vilas Bank',
  FEDERALNEWEMI: 'FEDERAL Bank',
  SBI87NEWEMI: 'SBI87',
  ONECARDNEWEMI: 'OneCard',
  IDFCNEWEMI: 'IDFC First Bank'
};
// Direction icons map for store locator google maps direction
var DIRECTION_ICON_MAP = exports.DIRECTION_ICON_MAP = {
  'uturn-right': 'uturn_right.png',
  'uturn-left': 'uturn_left.png',
  'turn-right': 'turn_right.png',
  'turn-left': 'turn_left.png',
  'slightly-right': 'slightly_right.png',
  'ramp-right': 'slightly_right.png',
  'slightly-left': 'slightly_left.png',
  'ramp-left': 'slightly_left.png',
  right: 'right.png',
  'keep-right': 'right.png',
  merge: 'merge.png',
  left: 'left.png',
  'keep-left': 'left.png',
  'turn-sharp-right': 'hard_right.png',
  'turn-sharp-left': 'hard_left.png',
  'turn-slight-right': 'exit_right.png',
  'exit-right': 'exit_right.png',
  'turn-slight-left': 'exit_left.png',
  'exit-left': 'exit_left.png',
  depart: 'depart.png',
  "continue": 'depart.png',
  straight: 'depart.png',
  'roundabout-right': 'circle_counterclockwise.png',
  'circle-counterclockwise': 'circle_counterclockwise.png',
  'roundabout-left': 'circle_clockwise.png',
  'circle-clockwise': 'circle_clockwise.png'
};
var STELLR_CART_TYPES = exports.STELLR_CART_TYPES = {
  DG: true,
  // Gift card
  DM: true,
  // Digital software + Gift card
  DS: true // Digital software
};

var aspRatio = exports.aspRatio = {
  ratio4isto3: {
    width: 4,
    height: 3
  },
  ratio5isto3: {
    width: 5,
    height: 3
  },
  ratio16isto9: {
    width: 16,
    height: 9
  },
  ratio21isto4: {
    width: 21,
    height: 4
  },
  ratio2isto1: {
    width: 2,
    height: 1
  },
  ratio5isto2: {
    width: 5,
    height: 2
  },
  ratio4isto1: {
    width: 4,
    height: 1
  },
  ratio12isto1: {
    width: 12,
    height: 1
  },
  ratio543isto284: {
    width: 543,
    height: 284
  }
};
var EXPRESS_DELIVERY_TEXT = exports.EXPRESS_DELIVERY_TEXT = "INSTA Delivery ";
var EXPRESS_DELIVERY = exports.EXPRESS_DELIVERY = "INSTA Delivery";
var _printPage = exports._printPage = function _printPage() {
  if (__BROWSER__) {
    window.print();
  }
};
var TEASER_TAG_MAPPING = exports.TEASER_TAG_MAPPING = {
  best_buy: 'Best Buy',
  best_seller: 'Best Seller',
  cashback: 'Cashback',
  exclusive: 'Exclusive',
  "new": 'New',
  nocostemi: 'No Cost EMI',
  offer_inside: 'Offer Inside',
  preorder: 'Pre-Order',
  comingsoon: 'Coming Soon',
  'deal-price': 'Deal Price',
  currentlyunavailable: 'Currently Unavailable',
  'cash-discount': 'Cash Discount',
  'flash-sale': 'Flash sale',
  'lowest-price': 'Lowest Price',
  extended_warranty: 'Extended Warranty',
  limited_time_offer: 'Limited Time Offer',
  multiple_offers: 'Multiple Offers',
  new_launch: 'New Launch',
  pre_book: 'Pre-Book',
  '1000_inst_disc': '₹1000 Instant Discount',
  '1500_inst_disc': '₹1500 Instant Discount',
  '3000_inst_disc': '₹3000 HDFC Instant Discount',
  '4000_inst_disc': '₹4000 HDFC Instant Discount',
  '5000_inst_disc': '₹5000 HDFC Instant Discount',
  '700_inst_disc': '₹700 Instant Discount',
  '500_inst_disc': '₹500 Instant Discount',
  '400_inst_disc': '₹400 Instant Discount',
  '300_inst_disc': '₹300 Instant Discount',
  '200_inst_disc': '₹200 Instant Discount',
  '150_inst_disc': '₹150 Instant Discount',
  '100_inst_disc': '₹100 Instant Discount',
  '25_inst_disc': '₹25 Instant Discount',
  '2000_inst_disc': '₹2000 Instant Discount',
  '2500_inst_disc': '₹2500 Instant Discount',
  'instant_discount': 'Instant Discount'
};
var RATING_REVIEW_CONSTANTS = exports.RATING_REVIEW_CONSTANTS = {
  SUBMIT_REVIEW_SUCCESS_MSG: 'Thank you for submitting a review. The review will be published once it is approved.',
  SUBMIT_REVIEW_ERROR_MSG: 'Failed to submit review. Please try again later.',
  SUBMIT_RATING_ERROR_MSG: 'Failed to submit rating. Please try again later.',
  RATE_THIS_PRODUCT: 'Rate this product',
  WRITE_A_REVIEW: 'Write a Review',
  EDIT_REVIEW: 'Edit Review',
  YES: 'Yes',
  NO: 'No'
};