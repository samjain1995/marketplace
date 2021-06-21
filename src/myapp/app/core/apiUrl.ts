export const ApiUrl = {

  getDbKey: '/secret_key',
  getSettings: '/getSettings',
  getSpecialOffers: '/get_all_offer_list',
  getSpecialOffersV1: '/get_all_offer_list/v1',
  getSpecialOffersV2: '/get_all_offer_list/v2',
  getAllCategories: '/get_all_category_new',
  getAllCategoriesV1: '/get_all_category_new/V1',
  getSubcategory: '/Subcategory_listing',
  getRecSubcategory: '/home/subcategory_listing_v1',
  getProductDetail: '/get_product_details',
  getProductAddon: '/product/adds_on/list',
  getProducts: '/get_products',
  getCoutries: '/get_all_country',
  getCities: '/get_all_city',
  getAreas: '/get_all_area',
  productSearchResults: '/product_acco_to_area',
  filterProducts: '/v1/product_filteration',
  addToCart: '/v1/add_to_cart',
  updateCartInfo: '/update_cart_info',
  generateOrder: '/v2/genrate_order',
  generateRentalBooking: '/v2/genrate_order',
  getVariantList: '/common/variant_list',
  getCategories: '/category_list',
  getAllOffers: '/view_all_offer',
  getAllPromotions: '/get_promoation_product',
  getSupplierDetail: '/supplier_details',
  getSupplierList: '/get_supplier_list',
  getSupplierListV1: '/get_supplier_list/V1',
  rateProduct: '/rate_product',
  getReviews: '/product_rating_review',
  rateSupplier: '/supplier_rating',
  checkPromo: '/checkPromoV1',
  getSupplierDetailProduct: '/supplier/product_list',
  getSupplierDetailProductV1: '/v1/supplier/product_list',
  getSupplierCategoryList: '/user/list_supplier_categories',
  getSupplierBranchProduct: '/supplier_branch/product_list',
  getHomeSuppliers: '/home/supplier_list',
  getHomeSuppliersV1: '/home/supplier_list/V1',
  getHomeSuppliersV2: '/home/supplier_list/V2',
  getHomeSuppliersV3: '/home/supplier_list/V3',
  addToWishlist: '/product_mark_fav_unfav',
  getWishList: '/favourite_product',
  checkProductList: '/v1/check_product_list',
  getPopularProduct: '/popular/product',
  getPopularProductV1: '/popular/product/V1',
  getTermsConditions: '/list_termsConditions',
  getQuestions: '/getQuestionsByCategoryId',
  getPayStackAccessCode: '/paystack/access_code',
  getChat: '/getChat',
  getMyReferral: '/user/myReferral',
  paypalCreateOrder: '/paypal/create-order',
  getBraintreeClientToken: '/braintree/client-token',
  getReferralAmount: '/user/referralAmount',
  uploadPaymentReceipt: '/user/order/addReceipt',
  sendEmail: '/common/send_email',
  tagSearch: '/search/tags',
  productSupplierList: '/product/supplier_list',
  supplierPrescriptionUpload: '/user/order/request',
  addCard: '/customer/add_card',
  getCards: '/customer/get_cards',
  deleteCard: '/customer/delete_card',
  getCaptureContext: '/customer/get_context',
  getNotification: '/get_all_notification',
  rateAgent: '/user_rate_order',
  getSadadPaymentUrl: '/user/Sadded/getPaymentUrl',
  getMyFatoorahPaymentUrl: '/get_myfatoorah_payment_url',
  getTapPaymentUrl: '/user/tap/getPaymentUrl',
  getTelrPaymentUrl: '/user/telr/getPaymentUrl',
  getConvergePaymentToken: '/get_converge_payment_token',
  getSupplierBranches: '/get_supplier_branch_list',
  getSupplierBranchesV1: '/get_supplier_branch_list/V1',
  getWindcavePaymentUrl: '/user/windcave/getUrl',
  getmPaisaPaymentUrl: '/user/mPaisa/getUrl',
  checkPayherePaymentStatus: '/check_payhere_payment_status',
  addWalletMoney: '/user/wallet/add_money',
  getUserWalletTransactions: '/user/wallet/transactions',
  shareWalletMoney: '/user/wallet/share',
  getSupplierSlots: '/user/list_supplier_slots',
  getSupplierSlotsV1: '/user/list_supplier_slots/v1',
  getSupplierAvailabilities: '/user/supplier_availabilities',
  getDialogFlowToken: '/common/dialog/token',
  documntUpload: '/user/upload/document',
  submitFeedback: '/add_feedback',
  getSuggestions: '/get_user_suggestions',
  getMessageId: '/getChatMessageId',
  updateRecentlyViewed: '/view/product',
  recentlyViewed: '/user/recent/view',
  registerSupplier: '/common/supplier_register',
  registerAgent: '/agent/registeration',
  getGoogleDistance: '/user/google/matrix',
  getGoogleDistanceV1: '/user/google/matrix/V1',
  getCountriesCodes: '/admin/list_country_codes',
  giftCard: {
    list: '/home/gift/list',
    purchase: '/user/gift/purchase',
    purchaseList: '/user/gift/purchaseList'
  },

  agent: {
    getAgents: '/sevice/agent/list',
    getAgentKeys: '/agent/get_agent_keys',
    availability: '/agent/availability',
    getSlots: '/agent/slots',
    getAllSlots: '/agent/available/slots',
    checkAgentSlot: '/agent/checkAgentSlotsAvailability'
  },

  address: {
    addAddress: '/add_new_address',
    editAddress: '/edit_address',
    deleteAddress: '/delete_customer_address',
    getAreaByPincode: '/get_area',
    getAddress: '/get_all_customer_address',
    setDefault: '/address/set_default'
  },

  favourite: {
    getFavourites: '/get_my_favourite',
    addToFavourites: '/add_to_favourite',
    removeFromFavourites: '/un_favourite'
  },

  orders: {
    getOrderDetail: '/v2/user_order_details',
    getOrderHistory: '/v2/history_order',
    getUpcomingOrders: '/v2/upcoming_order',
    getScheduledOrders: '/schedule_orders',
    cancelOrder: '/cancel_order',
    scheduleOrder: '/schedule_order_new',
    requestReturn: '/user/order/return_request',
    requestList: '/user/order/requestList',
    rejectOrderRequest: '/user/order/request_reject',
    orderPayment: '/user/order/make_payment',
    payRmainingAmount: '/user/order/remaining_payment',
    geofenceAreas: '/common/geofencing_gateways',
    addItems: '/user/order/add_items',
    changeOrderStatus: '/user/change_order_status',
    trackDHL: '/user/dhl/shipment/track'
  },

  auth: {
    login: '/login',
    signUp_step1: '/customer_register_step_first',
    signUp_step2: '/customer_register_step_second',
    signUp_step3: '/customer_register_step_third',
    checkOTP: '/check_otp',
    checkOTPNew: '/check_otp_new',
    resendOTP: '/resend_otp',
    forgotPassword: '/forget_password',
    facebookLogin: '/facebook_login',
    googleLogin: '/google_login',
    changePassword: '/change_password',
    signUp: '/v1/user/registration',
    whatsappSendOtp: '/user/register/byPhone',
    whatsappResendOtp: '/user/resend/otp',
    whatsappOtpVerify: '/user/otp/verify',
  },

  loyalty: {
    get: '/user/loyality'
  },

  getSubscriptions: '/get_user_subscriptions_list',
  buySubscription: '/buy_user_subscription',
  cancelSubscription: '/cancel_delete_user_subscription',
  getMySubscriptionList: '/get_my_subscriptions_list',

  getTableBookingRequestList: `/user/list_booking_requests`,
  makeTableBookingRequest: `/user/make_table_booking_requests`,
  getSupplierTableList: `/user/list_supplier_tables`,
  verifyTable: `/user/verify_table_number`,

  generateDeepLink: '/user/genrate_table_deeplink',

  getAamarPayPaymentUrl: '/user/aamarpay/getPaymentUrl',

  getPromoCodeList: '/user/promo_codes',

  saferpay_payment: '/user/order/make_safer_payment',
  paynow_payment: '/user/order/make_paynow_payment',
  check_paynow_payment: '/user/order/check_paynow_payment',

  socialEcommerce: {
    createPost: '/user/create_post',
    getPosts: '/user/get_posts',
    deletePost: '/user/post/delete',
    addComment: '/user/add_comment',
    addLike: '/user/add_like',
    getPostComments: '/user/get_post_comments',
    updatePost: '/user/update_post',
    getPostLikes: '/user/get_post_likes_users_list',
    updateComment: '/user/update_comment',
    deleteComment: '/user/delete_comment',
    removeLike: '/user/remove_like',
    getUserPostDetails: '/user/post_details',
    reportPost: '/user/post_report',
    blockUnblockUser: '/user/block_unblock_user'
  },

  sosAlertNotification: '/user/sos_alert_notification',

  getHyperPaymentUrl: '/user/hyperpay/getPaymentUrlId',
  getThawaniPaymentUrl: '/user/thawani/getPaymentUrl',
  getSupplierListByTagId: '/user/getSupplierListByTagId',
  getSupplierListByTagIdV1: '/user/getSupplierListByTagId/V1',

  zoom_auth: '/zoom_auth',
  zoom_create_meeting: '/zoom_create_meeting',

  getSupplierTags: '/admin/list_tags_for_supplier',

  getFastestDeliverySuppliers: '/home/fastest_delivery_suppliers',

  otpContactUs: '/user/contact_us',
  getPaymayaUrl: '/user/get_paymaya_url',

  getCatWiseVendors: '/user/category_wise_suppliers',

  getUserTableSittingCapacity: '/user/list_tables_seating_capacities',

  holdSupplierSlot: '/user/hold_supplier_slots',


  getSupplierZones: '/user/get_zone'

}
