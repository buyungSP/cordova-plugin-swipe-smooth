
module.exports = {
    executeCommand: function(command, options = {}) {
        const finalOption = { ...options }; // Salin semua opsi dari objek options ke finalOption
        cordova.exec(null, null, "Swipe", command, [finalOption]);
    },
    initialize: function(options = {}) {
        const finalOption = {
            isEnable: options.isEnable || true,
            toastShow: options.toastShow || false,
            toastText: options.toasText || "location reload",
            jsAction: options.jsAction || "window.location.reload()",
            backgroundColor: options.backgroundColor || "#ffffff",
            distance: options.distance || 200,
            colors: options.colors || ["#000000"]
        };
        return new Promise(function(successCallback, errorCallback) {
            cordova.exec(result => successCallback(result.toLowerCase() === "ok"), errorCallback, "Swipe", "initialize", [finalOption]);
        });
    },
    enable: function(options = {}) {
        this.executeCommand("enable", options);
    },
    enableToast: function(options = {}) {
        this.executeCommand("enableToast", options);
    },
    textToast: function(options = {}) {
        this.executeCommand("textToast", options);
    },
    jsAction: function(options = {}) {
        this.executeCommand("jsAction", options);
    },
    backgroundColor: function(options = {}) {
        this.executeCommand("backgroundColor", options);
    },
    colors: function(options = {}) {
        this.executeCommand("colors", options);
    },
    distance: function(options = {}) {
        this.executeCommand("distance", options);
    }
};