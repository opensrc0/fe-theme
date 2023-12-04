/* eslint-disable */

// REGEX
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NUMBER_REGEX = /\d/;
export const SPACE_REGEX = /\s/;
export const CONTAINS_ALPHA_REGEX = /.*[a-zA-Z]+.*/;
export const HTML_TAG_REGEX = /<(.|\n)*?>/;
export const ALPHA_OR_NUMERIC_REGEX = /^[0-9a-zA-Z]+$/;
export const IS_NUMBER_REGEX = /^[0-9]*$/;
export const IS_NUMBER_WITHORWITHOUT_DECIMAL_REGEX =  /^\d+(\.\d{1,2})?$/;
export const MOBILE_NUMBER_REGEX = /^[6789]\d{9}$/;
export const PASSWORD_REGEX = /^(?=.*\d).{6,}$/;
export const DATE_REGEX = /^([0-9]{1,2})\-([0-9]{1,2})\-([0-9]{4})$/;
export const SPCL_CHARS_REGEX = /[ !@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
export const IS_ENGLISH_ALPHANUMERIC_SPECIAL = /^[ A-Za-z0-9_@.,/#&+-\w]*$/;
export const PAN_REGAX = /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/;
export const VPA_REGEX = /^[\w\.\-_]{3,}@[a-zA-Z]{3,}$/;

// ERROR TEXT
export const ERROR_EMPTY = 'Mandatory fields cannot be empty';
export const ERROR_ADDRESS_LENGTH = 'Atleast 3 characters required';
export const INVALID_PASS = 'Password must be minimum of 6 characters with at least 1 number';
export const PASS_NOT_MATCH = 'Passwords does not match';
export const ERROR_EMAIL = 'Please enter a valid email address';
export const ERROR_M_NUMBER = 'Please enter a valid 10-digit mobile number';
export const ERROR_MULTIPLE_EMAIL = 'Please select one email address to login';
export const ERROR_P_NUMBER = 'Enter a valid Phone Number';
export const ERROR_PINCODE = 'Enter a valid Pincode';
export const ERROR_OTP = 'Invalid OTP';
export const ERROR_EMPTY_COUPON = 'Please enter a coupon code';
export const ERROR_TNC = 'Please agree to the terms and conditions';
export const ERROR_FAILED = 'Unable to process your request. Please try again.';
export const ERROR_BILLING_PIN = 'The entered PIN code should belong to the same state as that of selected store {STATE_NAME}. Please enter another PIN code.';
export const ERROR_BILLING_PIN_1 = 'Sorry, the selected address state is different than the selected Store’s state. Please select another address or add a new Billing Address.';

// SUCCESS TEXT
export const OTP_SENT = 'OTP sent to registered email address and mobile number';

export const PAGE_SIZES = [12, 24, 36];

export const MONTHS_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
];

export const SORT_ICONS = {
  relevance: 'fa fa-sort',
  'name-asc': 'fa fa-sort-alpha-asc',
  'name-desc': 'fa fa-sort-alpha-desc',
  'price-asc': 'fa fa-sort-amount-asc',
  'price-desc': 'fa fa-sort-amount-desc',
};

// TIME MAPPING for 24 Hours

export const timeMap = {
  1: '13',
  2:'14',
  3:'15',
  4:'16',
  5:'17',
  6:'18',
  7:'19',
  8:'20',
  9:'21',
  10:'22',
  11:'23',
  12:'24',
}

// YEAR MAPPING

export const yearMapping = {
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
  12: 'Dec',
};

// INDIAN STATES MAPPING

export const stateMapping = {
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
  WB: 'West Bengal',
};

// BANK EMI CODE MAPPING

export const bankMapping = {
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
export const DIRECTION_ICON_MAP = {
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
  continue: 'depart.png',
  straight: 'depart.png',
  'roundabout-right': 'circle_counterclockwise.png',
  'circle-counterclockwise': 'circle_counterclockwise.png',
  'roundabout-left': 'circle_clockwise.png',
  'circle-clockwise': 'circle_clockwise.png',
};

export const STELLR_CART_TYPES = {
  DG: true, // Gift card
  DM: true, // Digital software + Gift card
  DS: true, // Digital software
};

export const aspRatio = {
  ratio4isto3: { width: 4, height: 3 },
  ratio5isto3: { width: 5, height: 3 },
  ratio16isto9: { width: 16, height: 9 },
  ratio21isto4: { width: 21, height: 4 },
  ratio2isto1: { width: 2, height: 1 },
  ratio5isto2: { width: 5, height: 2 },
  ratio4isto1: { width: 4, height: 1 },
  ratio12isto1: { width: 12, height: 1 },
  ratio543isto284: { width: 543, height: 284 },
}
export const EXPRESS_DELIVERY_TEXT = "INSTA Delivery ";
export const EXPRESS_DELIVERY = "INSTA Delivery";

export const _printPage = () => {
  if(__BROWSER__) {
    window.print();
  }
}

export const TEASER_TAG_MAPPING = {
  best_buy: 'Best Buy',
  best_seller: 'Best Seller',
  cashback: 'Cashback',
  exclusive: 'Exclusive',
  new: 'New',
  nocostemi: 'No Cost EMI',
  offer_inside: 'Offer Inside',
  preorder: 'Pre-Order',
  comingsoon: 'Coming Soon',
  'deal-price': 'Deal Price',
  currentlyunavailable : 'Currently Unavailable',
  'cash-discount': 'Cash Discount',
  'flash-sale': 'Flash sale',
  'lowest-price': 'Lowest Price',
  extended_warranty :'Extended Warranty',
  limited_time_offer:'Limited Time Offer',
  multiple_offers: 'Multiple Offers',
  new_launch: 'New Launch',
  pre_book: 'Pre-Book',
  '1000_inst_disc': '₹1000 Instant Discount',
  '1500_inst_disc': '₹1500 Instant Discount',
  '3000_inst_disc': '₹3000 HDFC Instant Discount',
  '4000_inst_disc':'₹4000 HDFC Instant Discount',
  '5000_inst_disc':'₹5000 HDFC Instant Discount',
  '700_inst_disc':'₹700 Instant Discount',
  '500_inst_disc':'₹500 Instant Discount',
  '400_inst_disc':'₹400 Instant Discount',
  '300_inst_disc':'₹300 Instant Discount',
  '200_inst_disc':'₹200 Instant Discount',
  '150_inst_disc':'₹150 Instant Discount',
  '100_inst_disc':'₹100 Instant Discount',
  '25_inst_disc':'₹25 Instant Discount',
  '2000_inst_disc':'₹2000 Instant Discount',
  '2500_inst_disc':'₹2500 Instant Discount',
  'instant_discount': 'Instant Discount',
};

export const RATING_REVIEW_CONSTANTS = {
  SUBMIT_REVIEW_SUCCESS_MSG: 'Thank you for submitting a review. The review will be published once it is approved.',
  SUBMIT_REVIEW_ERROR_MSG: 'Failed to submit review. Please try again later.',
  SUBMIT_RATING_ERROR_MSG: 'Failed to submit rating. Please try again later.',
  RATE_THIS_PRODUCT: 'Rate this product',
  WRITE_A_REVIEW: 'Write a Review',
  EDIT_REVIEW: 'Edit Review',
  YES:'Yes',
  NO: 'No',
}
