
module.exports = {
    executeCommand: function(command, options = {}) {
        const finalOption = { ...options };
        cordova.exec(null, null, "Swipe", command, [finalOption]);
    },
    initialize: function(options = {}) {
        const finalOption = {
            isEnable: options.isEnable || true,
            toastShow: options.toastShow || false,
            toastText: options.toasText || "location reload",
            jsAction: options.jsAction || "window.location.reload()",
            backgroundColor: options.backgroundColor || "#ffffff",
            colors: options.colors || ["#000000"],
            distance: options.distance || 200,
        };
        return new Promise(function(successCallback, errorCallback) {
            cordova.exec(result => successCallback(result.toLowerCase() === "ok"), errorCallback, "Swipe", "initialize", [finalOption]);
        });
    },
    enable: function(options = { enable: true}) {
        this.executeCommand("enable", options);
    },
    enableToast: function(options = {enable: false}) {
        this.executeCommand("enableToast", options);
    },
    textToast: function(options = {}) {
        this.executeCommand("textToast", options);
    },
    jsAction: function(options = {}) {
        this.executeCommand("jsAction", options);
    },
    backgroundColor: function(options = { backgroundColor : "#ffffff"}) {
        this.executeCommand("backgroundColor", options);
    },
    colors: function(options = {colors: ["#000000"]}) {
        this.executeCommand("colors", options);
    },
    distance: function(options = {distance:200}) {
        this.executeCommand("distance", options);
    }
};