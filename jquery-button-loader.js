/*! 
 *  By Micael Mota
 *  v1.0; 
 */

(function ($) {
    $.fn.buttonLoader = function (action, options) {
        if(action === "load" ){
            var opt = $.extend({
                icon: null,
                disable: true
            }, options);
            
            prev = "<span style='display: none'>" + this.html() + "<span>";
            
            if (opt.icon !== null)
                this.html("<i class='" + opt.icon + "'></i>" + prev);
            else
                this.html("<i>Please wait...</i>" + prev);

            this.attr('disabled', opt.disable);
        }else{
            this.children('i').remove();
            this.children('span').show();
        }
        
        return this;
    };

}(jQuery));