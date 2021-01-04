// funnel 1 variable - 제품 조회 배열
function() {
  var productInfo = [{
    'id': iProductNo,
    'name': product_name,
    'price': product_price,
    'category': iCategoryNo
  }];
  return productInfo;
}


// funnel 1 tag - 제품 조회 datalayer push
<script>
  dataLayer.push({
    'event': 'detail',
    'ecommerce': {
      'detail': {
        'actionField': {'step': 1},
        'products': {{funnel_1_제품조회_배열}}
      }
    }
  });
</script>

// funnel 2 variable - 장바구니 추가


// funnel 2 tag - 장바구니 추가
// 장바구니에 담기 버튼 클릭 시 트리거
    <script>
      dataLayer.push({
        'event': 'addToCart',
        'ecommerce': {
          'detail': {
            'actionField': {'step': 2},
            'products': {{funnel_1_제품조회_배열}}
          }
        }
      });
    </script>


// funnel 3 variable - 결제시작 주문서 작성
function() {
  var source = aBasketProductOrderData;
  var productInfo = [];
  for(var i = 0 ; i < source.length ; i++) {
      var productId = source[i].product_no;
      var productPrice = source[i].product_sale_price;
      var productQty = source[i].quantity;
      var productCate = source[i].main_cate_no;

      productInfo.push({
        'id': productId,
        'price': productPrice,
        'quantity': productQty,
        'category': productCate
      });
  }
  return productInfo;
}

// funnel 3 tag - 결제시작 주문서 작성
<script>
  dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
    'checkout': {
      'actionField': {'step': 3},
      'products': {{funnel_3_결제시작_배열}}
      }
    }
  });
</script>

// funnel 4 variable - 주문완료 - transaction id
function() {
  var source = EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA;
  var orderId = source.order_id;
	return orderId;
}

// funnel 4 variable - 주문완료 - 배송비
function() {
  var source = EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA;
  var shippingFee = source.total_basic_ship_fee;
	return shippingFee;
}
