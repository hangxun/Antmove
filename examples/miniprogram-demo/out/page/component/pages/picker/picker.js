const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/picker/picker"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "picker",
            path: "page/component/pages/picker/picker"
        };
    },

    data: {
        array: ["中国", "美国", "巴西", "日本"],
        index: 0,
        date: "2016-09-01",
        time: "12:01"
    },

    bindPickerChange(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value);
        this.setData({
            index: e.detail.value
        });
    },

    bindDateChange(e) {
        this.setData({
            date: e.detail.value
        });
    },

    bindTimeChange(e) {
        this.setData({
            time: e.detail.value
        });
    },

    bindcancel(e) {
        console.log("picker取消选择，携带值为", e);
    }
});
