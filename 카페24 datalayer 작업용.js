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
<script>
    // 장바구니에 담기 버튼 클릭시 이벤트    
    function addtoCart(){
        // 수량이 1이상이어야 장바구니에 담기 이벤트가 실행됨
        var total_quantity = $(".total").html().substring($(".total").html().indexOf('(')+1, $(".total").html().indexOf('개'));

        if( total_quantity && total_quantity > 0){

            dataLayer.push({
                'event': 'addToCart',
                'ecommerce': {
                    'currencyCode': 'KRW',
                    'add': {                                // 'add' actionFieldObject measures.
                        'products': [{                    //  adding a product to a shopping cart.
                            'name': '{$name}',          // Name or ID is required.
                            'id': '{$product_no}',
                            'price': '{$product_sale_price}'.split('.')[0],
                            'brand': 'Healo',
                            'category': '{$cate_no}',
                            'quantity': total_quantity
                        }]
                    }
                }
            });
        }
  }
</script>



#quantity
