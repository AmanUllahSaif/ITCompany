jQuery(function(a){return"undefined"==typeof wc_add_to_cart_params?!1:void a(document).on("click",".add_to_cart_button",function(b){var c=a(this);if(c.is(".product_type_simple")){if(!c.attr("data-product_id"))return!0;c.removeClass("added"),c.addClass("loading");var d={action:"woocommerce_add_to_cart"};return a.each(c.data(),function(a,b){d[a]=b}),a("body").trigger("adding_to_cart",[c,d]),a.post(wc_add_to_cart_params.ajax_url,d,function(b){if(b){var d=window.location.toString();return d=d.replace("add-to-cart","added-to-cart"),b.error&&b.product_url?void(window.location=b.product_url):"yes"===wc_add_to_cart_params.cart_redirect_after_add?void(window.location=wc_add_to_cart_params.cart_url):(c.removeClass("loading"),fragments=b.fragments,cart_hash=b.cart_hash,fragments&&a.each(fragments,function(b,c){a(b).addClass("updating")}),a(".shop_table.cart, .updating, .cart_totals").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}}),c.addClass("added"),wc_add_to_cart_params.is_cart||0!==c.parent().find(".added_to_cart").size()||c.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),fragments&&a.each(fragments,function(b,c){a(b).replaceWith(c)}),a(".widget_shopping_cart, .updating").stop(!0).css("opacity","1").unblock(),a(".shop_table.cart").load(d+" .shop_table.cart:eq(0) > *",function(){a(".shop_table.cart").stop(!0).css("opacity","1").unblock(),a("body").trigger("cart_page_refreshed")}),a(".cart_totals").load(d+" .cart_totals:eq(0) > *",function(){a(".cart_totals").stop(!0).css("opacity","1").unblock()}),a("body").trigger("added_to_cart",[fragments,cart_hash,c]),void 0)}}),!1}return!0})});