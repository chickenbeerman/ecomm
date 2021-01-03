/* 제품 노출 */
<script>
  // Measures product impressions and also tracks a standard
  // pageview for the tag configuration.
  // Product impressions are sent by pushing an impressions object
  // containing one or more impressionFieldObjects.
  //get impressionsField
  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
    impressionField = 'mainPage'
  } else if (window.location.pathname == '/product/list.html') {
    impressionField = 'CategoryPage'
  }
  //get impressions datalayer
  var impressions = []

  var category = document.location.href.indexOf('?') > -1 ? document.location.href.split('?')[1].split('=')[1] : '';

  for (i = 0; i <= $('.prdListECO').length-1; i++) {
    $el = $('.prdListECO').eq(i);

    // var stateInfo = $('.promotion', $el).html();
    // var state = '';
    // if($('.promotion', $el).html().indexOf('215906562918629') > -1)        state = 'hit';
    // else if($('.promotion', $el).html().indexOf('315906562941890') > -1)   state = 'new';
    // else if($('.promotion', $el).html().indexOf('415906562976247') > -1)   state = 'sale';
    // else if($('.promotion', $el).html().indexOf('115906562884180') > -1)   state = 'event';

    var priceBeforeDiscount = getPrice($('.descriptionECO .spec', $el).text().replace(/\s+/g, ' ').split(' ')[1]);
    var priceAfterDiscount = getPrice($('.descriptionECO .spec', $el).text().replace(/\s+/g, ' ').split(' ')[0]);

    var dictObject = {
      'name': $('.descriptionECO .name' , $el) ? $('.descriptionECO .name' , $el).text().trim() : '',
      'id': $('.thumbnailECO > a', $el) ? $('.thumbnailECO > a', $el).attr('href').split('/')[3] : '',
      'priceBeforeDiscount': priceBeforeDiscount,
      'price': priceAfterDiscount,
      'discountRate': Math.round(100-(priceAfterDiscount*100/priceBeforeDiscount)),
      'category': category,
      // 'state': state ? state : '',
      'position': i+1,
    }
    impressions.push(dictObject);
  }

  dataLayer.push({
    'ecommerce': {
      'impressionField': impressionField,
      'impressions': impressions
    }
  });

  function getPrice(str) {
    return str && str.replace(/[^\d]/ig, '') ? str.replace(/[^\d]/ig, '') * 1 : 0;
  }
</script>


/* 제품 조회 - plain */
<script>
  isMobile = window.location.host == "m.eco-fresh.co.kr";

  if(isMobile) {
    dataLayer.push({
      'event': 'view_item',
      'currency': 'KRW',
      'ecomm_pagetype': 'offerdetail',
      'ecomm_totalvalue': $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1,
      'event_category': document.location.pathname.split('/')[5],
      'ecomm_prodid': [{
        'id': document.location.pathname.split('/')[3],
        'google_business_vertical': 'retail',
        /////////'value': $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1
      }],
      'ecommerce': {
        'detail': {
          'actionField': {'list': ''},    // 'detail' actions have an optional list property.
          'products': [{
            'name': $('.name') ? $('.name').text().trim() : '',         // Name or ID is required.
            'id': document.location.pathname.split('/')[3],
            'price': $('.prdInfo .price_block .price_price') ? $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1: '',
            'brand': '',
            'category': document.location.pathname.split('/')[5]*1 ? document.location.pathname.split('/')[5] : '',
            'variant': ''
           }]
         }
       }
    });
  } else {
    dataLayer.push({
      'event': 'view_item',
      'currency': 'KRW',
      'ecomm_pagetype': 'offerdetail',
      'ecomm_totalvalue': $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1,
      'event_category': document.location.pathname.split('/')[5],
      'ecomm_prodid': [{
        'id': document.location.pathname.split('/')[3],
        'google_business_vertical': 'retail',
        /////////'value': $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1
      }],
      'ecommerce': {
        'detail': {
          'actionField': {'list': ''},    // 'detail' actions have an optional list property.
          'products': [{
            'name': $('.pro_info .name') ? $('.pro_info .name').text().trim() : '',         // Name or ID is required.
            'id': document.location.pathname.split('/')[3],
            'price': $('.pro_info .pricebox .price') ? $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1: '',
            'brand': '',
            'category': document.location.pathname.split('/')[5] ? document.location.pathname.split('/')[5] : '',
            'variant': ''
           }]
         }
       }
    });
  }
</script>

/* 제품 조회 - querystring */
<script>
  isMobile = window.location.host == "m.eco-fresh.co.kr";

  if(isMobile) {
    dataLayer.push({
      'event': 'view_item',
      'currency': 'KRW',
      'ecomm_pagetype': 'offerdetail',
      'ecomm_totalvalue': $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1,
      'event_category': '1',
      'ecomm_prodid': [{
        'id': $('.infoArea select').attr('option_product_no'),
        'google_business_vertical': 'retail',
        /////////'value': $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1
      }],
      'ecommerce': {
        'detail': {
          'actionField': {'list': ''},    // 'detail' actions have an optional list property.
          'products': [{
            'name': $('.name') ? $('.name').text().trim() : '',         // Name or ID is required.
            'id': $('.infoArea select').attr('option_product_no'),
            'price': $('.prdInfo .price_block .price_price') ? $('.prdInfo .price_block .price_price').text().replace(',','').replace('원','')*1: '',
            'brand': '',
            'category': document.location.pathname.split('/')[5]*1 ? document.location.pathname.split('/')[5] : '',
            'variant': ''
           }]
         }
       }
    });
  } else {
    dataLayer.push({
      'event': 'view_item',
      'currency': 'KRW',
      'ecomm_pagetype': 'offerdetail',
      'ecomm_totalvalue': $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1,
      'event_category': '1',
      'ecomm_prodid': [{
        'id': $('.infoArea select').attr('option_product_no'),
        'google_business_vertical': 'retail',
        /////////'value': $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1
      }],
      'ecommerce': {
        'detail': {
          'actionField': {'list': ''},    // 'detail' actions have an optional list property.
          'products': [{
            'name': $('.pro_info .name') ? $('.pro_info .name').text().trim() : '',         // Name or ID is required.
            'id': $('.infoArea select').attr('option_product_no'),
            'price': $('.pro_info .pricebox .price') ? $('.pro_info .pricebox .price').text().replace(',','').replace('원','')*1: '',
            'brand': '',
            'category': document.location.pathname.split('/')[5] ? document.location.pathname.split('/')[5] : '',
            'variant': ''
           }]
         }
       }
    });
  }
</script>


/* 제품 클릭 */
<script>
/**
* Call this function when a user clicks on a product link. This function uses the event
* callback datalayer variable to handle navigation after the ecommerce data has been sent
* to Google Analytics.
*/
  $('.prdListECO').click(function(e) {
    dataLayer.push({
      'event': 'productClick',
      'ecommerce': {
        'click': {
          'actionField': {'list': 'Search Results'},      // Optional list property.
          'products': [{
            'name': $('.descriptionECO .name' , $(this)) ? $('.descriptionECO .name' , $(this)).text().trim() : '',
            'id': $('.thumbnailECO > a', $(this)) ? $('.thumbnailECO > a', $(this)).attr('href').split('/')[3] : '',
            'price': $('.descriptionECO .spec', $(this)) ? getPrice($('.descriptionECO .spec', $(this)).text().replace(/\s+/g, ' ').split(' ')[0]) : '',
            'brand': '',
            'category': $(this).find('.thumbnailECO a').attr('href').split('/')[5] ?  $(this).find('.thumbnailECO a').attr('href').split('/')[5] : '',
            'variant': '',
            'position': $(this).selector.match(/\d+/) ? $(this).selector.match(/\d+/)[0]*1 : ''
           }]
         }
       }
      });
    })

    function getPrice(str) {
      return str && str.replace(/[^\d]/ig, '') ? str.replace(/[^\d]/ig, '') * 1 : 0;
    }
</script>


/* 장바구니 추가 */
<script>
  var products = []
  var items = []
  isMobile = window.location.host == "m.eco-fresh.co.kr";

  if(isMobile) {
    /////////////////////MOBILE
    for (i = 0; i <= $('.option_product').length-1; i++) {
      $el = $('.option_product').eq(i);

      var totalPrice = 0
      totalPrice += $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1

      obtionCount = $('.quantity_opt.eProductQuantityClass', $el).attr('value')*1;

      var dictObject = {
        'name': $('.product', $el) ? $('.product', $el).text().split(' - ')[0].trim() : '',
        'id': document.location.pathname.split('/')[3]*1 ? document.location.pathname.split('/')[3] : '',
        'price': $('.right .ec-front-product-item-price', $el) ? $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': document.location.pathname.split('/')[5]*1 ? document.location.pathname.split('/')[5] : '',
        'variant': $('.product', $el) ? $('.product', $el).text().split(' - ')[1].trim() : '',
        'quantity': obtionCount
      }
      var DR_dictObject = {
        'id': document.location.pathname.split('/')[3]*1 ? document.location.pathname.split('/')[3] : '',
        'value': $('.right .ec-front-product-item-price', $el) ? $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1 : '',
        'google_business_vertical': 'retail',
      }
      products.push(dictObject);
      items.push(DR_dictObject);
    }
    dataLayer.push({
      'event': 'add_to_cart',
      'currency': 'KRW',
      'ecomm_pagetype': 'conversionintent',
      'ecomm_totalvalue': totalPrice,
      'event_category': document.location.pathname.split('/')[5],
      'ecomm_prodid': items,
      'ecommerce': {
        'currencyCode': 'KRW',
        'add': {                                // 'add' actionFieldObject measures.
          'products': products
        }
      }
    });
  } else {
    ////////////////////////PC
    for (i = 0; i <= $('.option_product').length-1; i++) {
      $el = $('.option_product').eq(i);

      var totalPrice = 0
      totalPrice += $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1

      obtionCount = $('.quantity .quantity_opt', $el).attr('value')*1;

      var dictObject = {
        'name': $('.product', $el) ? $('.product', $el).text().split(' - ')[0].trim() : '',
        'id': document.location.pathname.split('/')[3]*1 ? document.location.pathname.split('/')[3] : '',
        'price': $('.right .ec-front-product-item-price', $el) ? $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': document.location.pathname.split('/')[5]*1 ? document.location.pathname.split('/')[5] : '',
        'variant': $('.product', $el) ? $('.product', $el).text().split(' - ')[1].trim() : '',
        'quantity': obtionCount
      }
      var DR_dictObject = {
        'id': document.location.pathname.split('/')[3]*1 ? document.location.pathname.split('/')[3] : '',
        ///////'value': $('.right .ec-front-product-item-price', $el) ? $('.right .ec-front-product-item-price', $el).text().replace(',','').replace('원','')*1 : '',
        'google_business_vertical': 'retail',
      }
      products.push(dictObject);
      items.push(DR_dictObject);
    }
    dataLayer.push({
      'event': 'add_to_cart',
      'currency': 'KRW',
      'ecomm_pagetype': 'conversionintent',
      'ecomm_totalvalue': totalPrice,
      'event_category': document.location.pathname.split('/')[5],
      'ecomm_prodid': items,
      'ecommerce': {
        'currencyCode': 'KRW',
        'add': {                                // 'add' actionFieldObject measures.
          'products': products
        }
      }
    });
  }

  dataLayer.push({
    'event': 'addToCart',
    'currency': 'KRW',
    'ecomm_pagetype': 'conversionintent',
    'ecomm_totalvalue': totalPrice,
    'event_category': document.location.pathname.split('/')[5],
    'ecomm_prodid': items,
    'ecommerce': {
      'currencyCode': 'KRW',
      'add': {                                // 'add' actionFieldObject measures.
        'products': products
      }
    }
  });

</script>

/* 장바구니 수량 변경 */
<script>
  // 수량 변경
  // 수량 더하기
  $('.ec-base-qty .up').click(function(e){
    dataLayer.push({
      'event': 'addToCart',
      'ecommerce': {
        'currencyCode': 'KWR',
        'add': {
          'products': [{
            'name': $(this).closest('.xans-record-').find('.ec-product-name') ? $(this).closest('.xans-record-').find('.ec-product-name').text() : '',
            'id': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
            'price': $(this).closest('.xans-record-').find('td').eq(8) ? $(this).closest('.xans-record-').find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
            'brand': '',
            'category': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
            'variant': $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText ? $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText.replace('[옵션: ','').replace(']','').trim() : '',
            'quantity': 1
          }]
        }
      }
    })
  })


  // 수량 빼기
  $('.ec-base-qty .down').click(function(e){
    dataLayer.push({
      'event': 'removeFromCart',
      'ecommerce': {
        'remove': {
          'products': [{
            'name': $(this).closest('.xans-record-').find('.ec-product-name') ? $(this).closest('.xans-record-').find('.ec-product-name').text() : '',
            'id': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
            'price': $(this).closest('.xans-record-').find('td').eq(8) ? $(this).closest('.xans-record-').find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
            'brand': '',
            'category': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
            'variant': $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText ? $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText.replace('[옵션: ','').replace(']','').trim() : '',
            'quantity': 1
           }]
        }
      }
    })
  })

  // 옵션 변경
</script>


/* 장바구니에서 제품 제거 */
<script>
  // 선택 삭제하기(컨펌 체크 들어감)
  $('.xans-record- .button .Button').click(function(e){
    if ($(this).text() == '삭제하기') {
      dataLayer.push({
        'event': 'removeFromCart',
        'ecommerce': {
          'remove': {                               // 'remove' actionFieldObject measures.
            'products': [{                          //  removing a product to a shopping cart.
                'name': $(this).closest('.xans-record-').find('.ec-product-name').text() ? $(this).closest('.xans-record-').find('.ec-product-name').text() : '',
                'id': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
                'price': $(this).closest('.xans-record-').find('td').eq(8) ? $(this).closest('.xans-record-').find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
                'brand': '',
                'category': $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] ? $(this).closest('.xans-record-').find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
                'variant': $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText ? $(this).closest('.xans-record-').find('.xans-order-optionall .xans-record-')[0].innerText.replace('[옵션: ','').replace(']','').trim() : '',
                'quantity': $(this).closest('.xans-record-').find('#quantity_id_0')[0] ? $(this).closest('.xans-record-').find('#quantity_id_0')[0].value*1 : ''
            }]
          }
        }
      })
    }
  });

  // 선택상품 삭제(컨펌)
  $('.ec-base-button .gLeft').click(function(e){

    var products = []
    for (i=0; i <= $("input:checkbox[name=basket_product_normal_type_normal]:checked").length-1; i++) {
      var dictObject = {}
      var $el = $("input:checkbox[name=basket_product_normal_type_normal]:checked").eq(i).closest('.xans-record-')

      dictObject = {                          //  removing a product to a shopping cart.
          'name': $el.find('.ec-product-name').text() ? $el.find('.ec-product-name').text() : '',
          'id': $el.find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $el.find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
          'price': $el.find('td').eq(8).text() ? $el.find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
          'brand': '',
          'category': $el.find('.thumb.gClearLine a').attr('href').split('=')[2] ? $el.find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
          'variant': $el.find('.xans-order-optionall .xans-record-')[0].innerText ? $el.find('.xans-order-optionall .xans-record-')[0].innerText.replace('[옵션: ','').replace(']','').trim() : '',
          'quantity': $el.find('#quantity_id_0')[0] ? $el.find('#quantity_id_0')[0].value*1 : ''
      }
      products.push(dictObject);
    }

    dataLayer.push({
      'event': 'removeFromCart',
      'ecommerce': {
        'remove': {                               // 'remove' actionFieldObject measures.
          'products': products
        }
      }
    })
  })

  $(document).ajaxSuccess(function(event, xhr, settings) {
    if(settings.url == "/exec/front/order/basket/") {
      var products = []
      for (i=0; i <= $('.orderListArea.ec-base-table.typeList.gBorder .xans-element-.xans-order.xans-order-list.center tr.xans-record-').length-1; i++) {
        var dictObject = {}
        var $el = $('.orderListArea.ec-base-table.typeList.gBorder .xans-element-.xans-order.xans-order-list.center tr.xans-record-').eq(i)

        dictObject = {                          //  removing a product to a shopping cart.
            'name': $el.find('.ec-product-name').text() ? $el.find('.ec-product-name').text() : '',
            'id': $el.find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $el.find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
            'price': $el.find('td').eq(8).text() ? $el.find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
            'brand': '',
            'category': $el.find('.thumb.gClearLine a').attr('href').split('=')[2] ? $el.find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
            'variant': $el.find('.xans-order-optionall .xans-record-')[0].innerText ? $el.find('.xans-order-optionall .xans-record-')[0].innerText.replace('[옵션: ','').replace(']','').trim() : '',
            'quantity': $el.find('#quantity_id_0')[0] ? $el.find('#quantity_id_0')[0].value*1 : ''
        }
        products.push(dictObject);
      }

      dataLayer.push({
        'event': 'removeFromCart',
        'ecommerce': {
          'remove': {                               // 'remove' actionFieldObject measures.
            'products': products
          }
        }
      })
      console.log('dataLayer complete')
    }
  });
</script>


/* 체크아웃 단계 1 */
<script>
  isMobile = window.location.host == "m.eco-fresh.co.kr";
  if(isMobile) {
    /////////////모바일
    products = []
    $el = $('.contents.prdArea .prdInfo.xans-record-')
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[3] : '',
        'price': $el.eq(i).find('.prdTotal strong').text() ? $el.eq(i).find('.prdTotal strong').text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[5] : '',
        'variant': $el.eq(i).find('.info .option').text() ? $el.eq(i).find('.info .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('.price .quantity').text() ? $el.eq(i).find('.price .quantity').text().replace('개','')*1 : ''
     }
     products.push(dictObject)
    }
    ///////////비회원, 회원 비교
    var option = '회원구매'
    if ($('#eSimpleJoinByOrderForm').length === 0) {
      option = '회원구매'
    } else {
      option = '비회원구매'
    };
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 1, 'option': option},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  } else {
    ///////////////PC
    products = []
    $el = $('.orderListArea .ec-base-table .xans-element-.xans-order.xans-order-normallist.center .xans-record-')
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
        'price': $el.eq(i).find('td').eq(8) ? $el.eq(i).find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
        'variant': $el.eq(i).find('.left.gClearLine .option') ? $el.eq(i).find('.left.gClearLine .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('td').eq(4) ? $el.eq(i).find('td').eq(4).text()*1 : ''
     }
     products.push(dictObject)
    }
    ///////////비회원, 회원 비교
    var option = '회원구매'
    if ($('#eSimpleJoinByOrderForm').length === 0) {
      option = '회원구매'
    } else {
      option = '비회원구매'
    };
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 1, 'option': option},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  }
</script>


/* 체크아웃 단계 2 */
<script>
  isMobile = window.location.host == "m.eco-fresh.co.kr";
  if(isMobile) {
    /////////////////////모바일
    products = []
    $el = $('.contents.prdArea .prdInfo.xans-record-')
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[3] : '',
        'price': $el.eq(i).find('.prdTotal strong').text() ? $el.eq(i).find('.prdTotal strong').text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[5] : '',
        'variant': $el.eq(i).find('.info .option').text() ? $el.eq(i).find('.info .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('.price .quantity').text() ? $el.eq(i).find('.price .quantity').text().replace('개','')*1 : ''
     }
     products.push(dictObject)
    }
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 2, 'option': '나머지주소 입력'},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  } else {
    /////////////////////////PC
    products = []
    $el = $('.orderListArea .ec-base-table .xans-element-.xans-order.xans-order-normallist.center .xans-record-');
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
        'price': $el.eq(i).find('td').eq(8) ? $el.eq(i).find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
        'variant': $el.eq(i).find('.left.gClearLine .option') ? $el.eq(i).find('.left.gClearLine .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('td').eq(4) ? $el.eq(i).find('td').eq(4).text()*1 : ''
     }
     products.push(dictObject)
    }
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 2, 'option': '나머지주소 입력'},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  }
</script>


/* 체크아웃 단계 3 */
<script>
  isMobile = window.location.host == "m.eco-fresh.co.kr";
  if(isMobile) {
    /////////////////모바일
    products = []
    $el = $('.contents.prdArea .prdInfo.xans-record-')
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[3] : '',
        'price': $el.eq(i).find('.prdTotal strong').text() ? $el.eq(i).find('.prdTotal strong').text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.prdName a').attr('href') ? $el.eq(i).find('.prdName a').attr('href').split('/')[5] : '',
        'variant': $el.eq(i).find('.info .option').text() ? $el.eq(i).find('.info .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('.price .quantity').text() ? $el.eq(i).find('.price .quantity').text().replace('개','')*1 : ''
     }
     products.push(dictObject)
    }
    $el = $('.payment .ec-base-label > input')
    var option = ''
    for (i = 0; i <= $el.length-1; i++) {
      if ($el.eq(i).attr('checked') == true) {
        option = $el.eq(i).parent('.ec-base-label').text()
      }
    }
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 3, 'option': option},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  } else {
    //////////////////PC
    products = []
    $el = $('.orderListArea .ec-base-table .xans-element-.xans-order.xans-order-normallist.center .xans-record-')
    for (i = 0; i <= $el.length - 1; i++) {
      var dictObject = {}
      dictObject = {
        'name': $el.eq(i).find('.ec-product-name') ? $el.eq(i).find('.ec-product-name').text() : '',
        'id': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[1].split('&')[0] : '',
        'price': $el.eq(i).find('td').eq(8) ? $el.eq(i).find('td').eq(8).text().replace(',','').replace('원','')*1 : '',
        'brand': '',
        'category': $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] ? $el.eq(i).find('.thumb.gClearLine a').attr('href').split('=')[2] : '',
        'variant': $el.eq(i).find('.left.gClearLine .option') ? $el.eq(i).find('.left.gClearLine .option').text().replace('[옵션: ','').replace(']','').trim() : '',
        'quantity': $el.eq(i).find('td').eq(4) ? $el.eq(i).find('td').eq(4).text()*1 : ''
     }
     products.push(dictObject)
    }
    $el = $('.payment .ec-base-label > input')
    var option = ''
    for (i = 0; i <= $el.length-1; i++) {
      if ($el.eq(i).attr('checked') == true) {
        option = $el.eq(i).parent('.ec-base-label').text()
      }
    }
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {'step': 3, 'option': option},
          'products': products
       }
     },
     'eventCallback': function() {}
    });
  }
</script>



/* 구매완료 */
<script>
  // Send transaction data with a pageview if available
  // when the page loads. Otherwise, use an event when the transaction
  // data becomes available.

  // variables
  var actionFieldObject = {};
  var products = [];
  var items = [];
  var dl_data = {};

  // Check mobile
  isMobile = window.location.host == "m.eco-fresh.co.kr";

  if(isMobile) {
    /////////////////////////// Mobile
    actionFieldObject = {
      'id': $('input[name="order_id"]').val(),                         // Transaction ID. Required for purchases and refunds.
      'affiliation': 'Online Store',
      'revenue': $('input[name="total_order_price"]').val() * 1.00,                     // Total transaction value (incl. tax and shipping)
      'tax': $('.contents strong', $('.totalPrice').eq(0)).eq(1).text().replace(',','').replace('원','')*1.00,
      'shipping': $('.contents strong', $('.totalPrice').eq(0)).eq(2).text().replace(',','').replace('원','')*1.00 + $('.contents strong', $('.totalPrice').eq(0)).eq(2).text().replace(',','').replace('원','')*1.00,
      'coupon': ''
    };

    var $el = $('.xans-element-.xans-order.xans-order-normalresultlist').eq(0).find('.xans-record-');

    for (i=0; i <= $el.length-1; i++) {
      var dictObject = {
        'name': $el.eq(i).find('.ec-product-name').text(),
        'id': $el.eq(i).find('input[name="productNo"]').val(),
        'price': $el.eq(i).find('li.price span[title="판매가"] strong').eq(0).text().replace(',','').replace('원','')*1.00,
        'brand': '',
        'category': $el.eq(i).find('.prdImg a').attr('href').indexOf('=') > -1 &&  $el.eq(i).find('.prdImg a').attr('href').split('=').length >= 3 ? $el.eq(i).find('.prdImg a').attr('href').split('=')[2] : '',
        'variant': $el.eq(i).find('.option').text().replace('[옵션: ','').replace(']','').trim(),
        'quantity': $el.eq(i).find('.quantity').eq(0).text()*1,
        'coupon': '',
        'google_business_vertical': 'retail'
      };
      var DR_dictObject = {
        'id': $el.eq(i).find('input[name="productNo"]').val(),
        ////////'value': $el.eq(i).find('li.price span[title="판매가"] strong').eq(0).text().replace(',','').replace('원','')*1.00,
        'google_business_vertical': 'retail',
      }
      products.push(dictObject);
      items.push(DR_dictObject);
    }

    dl_data = {
      'event': 'purchase',
      'currency': 'KRW',
      'ecomm_pagetype': 'conversion',
      'ecomm_totalvalue': $('input[name="total_order_price"]').val() * 1.00,
      'event_category': $('.xans-element-.xans-order.xans-order-normalresultlist').eq(0).find('.xans-record-').eq(0).find('.prdImg a').attr('href').split('=')[2],
      'ecomm_prodid': items,
      'ecommerce': {
        'purchase': {
          'actionField': actionFieldObject,
          'products': products
        }
      }
    };

  } else {
    /////////////////////////// PC
    actionFieldObject = {
      'id': $('.orderInfo li strong').text(),                         // Transaction ID. Required for purchases and refunds.
      'affiliation': 'Online Store',
      'revenue': $('.orderArea .ec-base-table .txtEm.txt18').text().replace(',','')*1.00,                     // Total transaction value (incl. tax and shipping)
      'tax': $('#order_layer_detail .ec-base-desc.typeDot.gLarge.rightDD .displaynone .desc').text().replace(',','').replace('원','')*1.00,
      'shipping': $('#order_layer_detail .ec-base-desc.typeDot.gLarge.rightDD li .desc').eq(2).text().replace(',','').replace('원','')*1.00 + $('#order_layer_detail .ec-base-desc.typeDot.gLarge.rightDD li .desc').eq(3).text().replace(',','').replace('원','')*1,
      'coupon': $('.totalArea .ec-base-table .box.txt16').eq(1).text().trim()
    };

    var $el = $('.xans-element-.xans-order.xans-order-normalresultlist.center').eq(0).find('.xans-record-');

    for (i=0; i <= $el.length-1; i++) {
      var dictObject = {
        'name': $el.eq(i).find('.ec-product-name').text(),
        'id': $el.eq(i).find('input[name="productNo"]').val(),
        'price': $el.eq(i).find('.right strong').eq(0).text().replace(',','').replace('원','')*1.00,
        'brand': '',
        'category': $el.eq(i).find('.thumb a').attr('href').split('=')[2] ? $el.eq(i).find('.thumb a').attr('href').split('=')[2] : '',
        'variant': $el.eq(i).find('.left .option').text().replace('[옵션: ','').replace(']','').trim(),
        'quantity': $el.eq(i).find('td').eq(3).text()*1,
        'coupon': '',
        'google_business_vertical': 'retail'
      };
      var DR_dictObject = {
        'id': $el.eq(i).find('input[name="productNo"]').val(),
        /////'value': $el.eq(i).find('.right strong').eq(0).text().replace(',','').replace('원','')*1.00,
        'google_business_vertical': 'retail',
      }
      products.push(dictObject);
      items.push(DR_dictObject);
    }

    dl_data = {
      'event': 'purchase',
      'currency': 'KRW',
      'ecomm_pagetype': 'conversion',
      'ecomm_totalvalue': $('.orderArea .ec-base-table .txtEm.txt18').text().replace(',','')*1.00,
      'event_category': $('.xans-element-.xans-order.xans-order-normalresultlist.center').eq(0).find('.xans-record-').eq(0).find('.thumb a').attr('href').split('=')[2],
      'ecomm_prodid': items,
      'ecommerce': {
        'purchase': {
          'actionField': actionFieldObject,
          'products': products
        }
      }
    };

  }
  dataLayer.push(dl_data);

  dataLayer.push({
    'event': 'gtm.purchase',
    'transaction_id': actionFieldObject.id,
    'transaction_revenue': actionFieldObject.revenue
  });

</script>

/* 환불 신청 */
<script>
  isMobile = window.location.host == 'm.eco-fresh.co.kr'
  if (isMobile) {
    $('.orderList .order.xans-record- .button.request a.btnBasic').click(function(e){
      if ($(this).text() == '주문취소') {
        var transactionId = $(this).closest('.order.xans-record-').find('.number a').attr('href').split('order_id=')[1].split('&')[0]
        dataLayer.push({
          'ecommerce': {
            'refund': {
              'actionField': {'id': transactionId}         // Transaction ID. Required for purchases and refunds.
            }
          }
        });
      }
    })
  } else {
    $('.center .xans-record- .number a img').click(function(e){
      if ($(this).attr('alt') == '주문취소') {
        var transactionId = $(this).closest('.xans-record-').find('p').eq(0).text()
        dataLayer.push({
          'ecommerce': {
            'refund': {
              'actionField': {'id': transactionId.replace('[','').replace(']','')}         // Transaction ID. Required for purchases and refunds.
            }
          }
        });
      }
    })
  }
</script>
