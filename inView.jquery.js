$.fn.isInView = function (threshold = 0) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop + threshold && elementTop < viewportBottom - threshold;
};

$.fn.inView = function (options) {
    // parsing options
    var defaults = {
        in: function () { },
        out: function () { },
        threshold: 0
    };
    var options = Object.assign(defaults, options);

    // persistent variables
    var element = $(this);
    var inView = false; // state

    // update function to check if in view and execute callbacks
    function update() {
        // check for change
        var newState = element.isInView(options.threshold);
        if (inView !== newState) {
            inView = newState;
            inView ? options.in() : options.out();
        }
    }
    update(); // run on execution

    // run on change
    $(window).on('resize scroll', function () {
        update();
    });
};