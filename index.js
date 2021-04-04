window.requestIdleCallback =
    window.requestIdleCallback ||
    function(cb, options) {
        var options = options || {};
        var timeout = options.timeout || 1;
        var start = Date.now();
        return setTimeout(function() {
            cb({
                get didTimeout() {
                    return options.timeout ? false : (Date.now() - start) > timeout;
                },
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - start));
                },
            });
        }, 1);
    };

window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function(id) {
        clearTimeout(id);
    };
