Array.prototype.contains = function (a) {
    for (var b = 0; b < this.length; b++) {
        if (this[b] == a) {
            return true
        }
    }
    return false
};
Array.prototype.index = function (a) {
    for (var b = 0; b < this.length; b++) {
        if (this[b] == a) {
            return b
        }
    }
    return -1
};
Array.prototype.del = function (a) {
    if (a < 0) {
        return this
    } else {
        return this.slice(0, a).concat(this.slice(a + 1, this.length))
    }
};
function validateInputNum(c) {
    var b = $(c);
    var a = b.val();
    if (a.length == 1) {
        b.val(a.replace(/[^1-9]/g, ""))
    } else {
        b.val(a.replace(/\D/g, ""))
    }
}
var CommonPerson = {};
CommonPerson.Base = {};
CommonPerson.Base.LoadingPic = {
    operation: {
        timeTest: null,
        loadingCount: 0,
        loadingImgUrl: "images/loading.gif",
        loadingImgHeight: 31,
        loadingImgWidth: 31
    }, FullScreenShow: function (a) {
        if (a === undefined) {
            a = ""
        }
        if ($("#div_loadingImg").length == 0) {
            $("body").append("<div id='div_loadingImg'></div>")
        }
        if (this.operation.loadingCount < 1) {
            this.operation.timeTest = setTimeout(function () {
                $("#div_loadingImg").append("<div id='loadingPage_bg' class='loadingPage_bg1'></div><div id='loadingPage'>" + a + "</div>");
                $("#loadingPage_bg").height($(top.window.document).height()).width($(top.window.document).width());
                if ($(document).scrollTop() >= $(document).height() - $(window).height() - 76) {
                    $("#div_loadingImg").css("margin-top", -($(window).height() / 2))
                } else {
                    $("#div_loadingImg").css("margin-top", -(($(top.window.document).height() - $(document).scrollTop()) / 2 + $(window).height() / 2))
                }
            }, 100)
        }
        this.operation.loadingCount += 1
    }, FullScreenHide: function () {
        this.operation.loadingCount -= 1;
        if (this.operation.loadingCount <= 0) {
            clearTimeout(this.operation.timeTest);
            $("#div_loadingImg").empty();
            $("#div_loadingImg").remove();
            this.operation.loadingCount = 0
        }
    }
};
jQuery.extend({
    validateInputNum: function (c) {
        var b = $(c);
        var a = b.val();
        if (/[^1-9]/g.test(a)) {
            b.val(a.replace(/\D/g, ""))
        }
    }, validateInputCertificate: function (c) {
        var b = $(c);
        var a = b.val();
        b.val(a.replace(/\D/g, ""))
    }, validateInputPhone: function (c) {
        var b = $(c);
        var a = b.val();
        if (/([^-&^[0-9])/g.test(a)) {
            b.val(a.replace(/([^-&^[0-9])/g, ""))
        }
    }, validateInputSpance: function (c) {
        var b = $(c);
        var a = b.val();
        b.val(a.replace(/\s+/g, ""))
    }, handlerJson: function (c, a, d) {
        var b;
        if ($.type(c) === "string") {
            if (c.indexOf("while(win != window.parent)") > 0) {
                window.location.href = welcomeIndexUrl;
                return false
            }
            b = $.parseJSON(c)
        } else {
            b = c
        }
        if ($.isFunction(d)) {
            if (b.responseInfo.respCode == 1) {
                d.call(this, true, b.responseInfo.respDesc, b.responseInfo.attribute)
            } else {
                d.call(this, false, b.responseInfo.respDesc, b.responseInfo.attribute)
            }
        }
        if (b.responseInfo.respCode == 0) {
            return true
        } else {
            if (a) {
                alert(b.responseInfo.respDesc)
            }
            return false
        }
    }, eduAjax: function (a, b, c) {
        CommonPerson.Base.LoadingPic.FullScreenShow("");
        b = $.trim(b) == "" ? {} : b;
        $.ajax({
            type: "post", data: b, url: a, dataType: "text", timeout: 60000, success: function (d) {
                CommonPerson.Base.LoadingPic.FullScreenHide();
                if ($.isFunction(c)) {
                    c.call(this, d)
                }
            }, error: function (e, f, d) {
                if (e.status == 401) {
                    window.location.href = loginOutUrl
                }
                CommonPerson.Base.LoadingPic.FullScreenHide();
                $.popupAutoTip("服务器出小差，请稍后再试!")
            }
        })
    }, eduCommonAjax: function (a, b) {
        CommonPerson.Base.LoadingPic.FullScreenShow("");
        b = $.trim(b) == "" ? {} : b;
        $.ajax({
            type: "post", data: b, url: a, dataType: "text", timeout: 60000, success: function (c) {
                CommonPerson.Base.LoadingPic.FullScreenHide();
                $.handlerJson(c, false, function (d, f, e) {
                    if (d) {
                        $.eduAlert(f, e.url)
                    } else {
                        $.eduAlert(f)
                    }
                })
            }, error: function (c) {
                if (c.status == 401) {
                    window.location.href = loginOutUrl
                }
                CommonPerson.Base.LoadingPic.FullScreenHide();
                $.popupAutoTip("服务器出小差，请稍后再试!")
            }
        })
    }, eduAlert: function (b, a) {
        $.popupAutoTip(b, a)
    }, ajaxSubmit_commit: function (b, a) {
        CommonPerson.Base.LoadingPic.FullScreenShow("");
        $(b).ajaxSubmit({
            url: a, success: function (c) {
                CommonPerson.Base.LoadingPic.FullScreenHide();
                $.handlerJson(c, false, function (d, f, e) {
                    if (d) {
                        $.eduAlert(f, e.url)
                    } else {
                        $.eduAlert(f)
                    }
                })
            }, error: function (c) {
                if (c.status == 401) {
                    window.location.href = loginOutUrl
                }
                CommonPerson.Base.LoadingPic.FullScreenHide();
                $.popupAutoTip("服务器出小差，请稍后再试!")
            }
        })
    }, datetimepickerYear: function (a) {
        this.id = a.id || "";
        if ($.trim(this.id) == "") {
            return
        }
        this.startDate = a.startDate || "1900-01-01";
        this.endDate = a.endDate || "2099-12-12";
        $("#" + this.id).datetimepicker({
            language: "zh-CN",
            format: "yyyy",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 4,
            minView: 4,
            startDate: this.startDate,
            endDate: this.endDate,
            viewSelect: 4
        }).on("changeDate", function (b) {
            $("#" + this.id).blur()
        })
    }, datetimepickerMonth: function (a) {
        this.id = a.id || "";
        if ($.trim(this.id) == "") {
            return
        }
        this.startDate = a.startDate || "1900-01-01";
        this.endDate = a.endDate || "2099-12-12";
        $("#" + this.id).datetimepicker({
            language: "zh-CN",
            format: "yyyy-mm",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 3,
            minView: 3,
            viewSelect: 3,
            startDate: this.startDate,
            endDate: this.endDate
        }).on("changeDate", function (b) {
            $("#" + this.id).blur()
        })
    }, datetimepickerDay: function (a) {
        this.id = a.id || "";
        if ($.trim(this.id) == "") {
            return
        }
        this.startDate = a.startDate || "1900-01-01";
        this.endDate = a.endDate || "2099-12-12";
        $("#" + this.id).datetimepicker({
            language: "zh-CN",
            format: "yyyy-mm-dd",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startDate: this.startDate,
            endDate: this.endDate,
            startView: 2,
            minView: 2,
            viewSelect: 2
        }).on("changeDate", function (b) {
            $("#" + this.id).blur()
        })
    }, datetimepickerDayCouple: function (b) {
        this.startId = b.startId || "";
        this.endId = b.endId || "";
        if ($.trim(this.startId) == "") {
            return
        }
        if ($.trim(this.endId) == "") {
            return
        }
        var a = "#" + this.startId;
        var c = "#" + this.endId;
        $(a + "," + c).datetimepicker({
            language: "zh-CN",
            format: "yyyy-mm-dd",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            viewSelect: 2
        }).on("changeDate", function (e) {
            var d = $.trim($(a).val());
            var e = $.trim($(c).val());
            if (d > e) {
                var f = "#" + $(this).attr("id");
                if (f == a) {
                    $(c).val("")
                } else {
                    $(a).val("")
                }
            }
            $(a).blur();
            $(c).blur()
        })
    }, datetimepickerMonthCouple: function (b) {
        this.startId = b.startId || "";
        this.endId = b.endId || "";
        if ($.trim(this.startId) == "") {
            return
        }
        if ($.trim(this.endId) == "") {
            return
        }
        var a = "#" + this.startId;
        var c = "#" + this.endId;
        $(a + "," + c).datetimepicker({
            language: "zh-CN",
            format: "yyyy-mm",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 3,
            minView: 3,
            viewSelect: 3
        }).on("changeDate", function (e) {
            var d = $.trim($(a).val());
            var e = $.trim($(c).val());
            if (d > e) {
                var f = "#" + $(this).attr("id");
                if (f == a) {
                    $(c).val("")
                } else {
                    $(a).val("")
                }
            }
            $(a).blur();
            $(c).blur()
        })
    }, datetimepickerTime: function (a) {
        this.id = a.id || "";
        if ($.trim(this.id) == "") {
            return
        }
        $("#" + this.id).datetimepicker({
            language: "zh-CN",
            format: "hh:ii",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 1,
            customClass: "datetime_time_hide",
            minView: 0,
            viewSelect: 0,
            forceParse: 0,
            showMeridian: 1
        }).on("changeDate", function (b) {
            $("#" + this.id).blur()
        })
    }, popup: function (a) {
        $.popupCommon(a, "consult")
    }, popupSecond: function (a) {
        $.popupCommon(a, "consult_sub")
    }, popupConfirm: function (a) {
        a.dimension = "sm";
        $.popupCommon(a, "confirm")
    }, popupStaffInfomationCompletion: function (a) {
        a.dimension = "bq";
        $.popupCommon(a, "confirm")
    }, popupCommon: function (b, c) {
        var a = "#" + c;
        $(a + "_confirm").unbind();
        $(a + "_confirm").removeClass("hide");
        $(a + "_cancel").unbind();
        var d = 900;
        if ($.trim(b.dimension) == "md") {
            d = 500
        } else {
            if ($.trim(b.dimension) == "sm") {
                d = 300
            } else {
                if ($.trim(b.dimension) == "bq") {
                    d = 400
                }
            }
        }
        if ($.trim(b.title) != "") {
            $(a + "_popup").find("h4").first().html(b.title)
        }
        if ($.trim(b.content) != "") {
            $(a + "_popup").find(".modal-body p").first().html(b.content)
        }
        if ($.trim(b.confirmText) != "") {
            $(a + "_confirm").html(b.confirmText)
        }
        if ($.trim(b.cancelText) != "") {
            $(a + "_cancel").html(b.cancelText)
        }
        if (b.hideConfirm) {
            $(a + "_confirm").addClass("hide")
        }
        if ($.type(b.confirmFunction) === "function") {
            $(a + "_confirm").bind("click", b.confirmFunction)
        }
        if ($.type(b.cancelFunction) === "function") {
            $(a + "_cancel").bind("click", b.cancelFunction)
        }
        $(a + "_popup").on("hidden.bs.modal", function () {
            $(a + "_popup").find(".modal-body p").first().html("")
        });
        $(a + "_popup").modal({width: d})
    }, goToTrain: function () {
        var a = base + "/staff/goToTrain.gson";
        $.eduCommonAjax(a, "")
    }, popupAutoTip: function (c, b) {
        var a = $("#alert_popup");
        if (c != "login") {
            a.find(".alarm-con").html(c);
            a.modal({width: 500})
        }
        window.setTimeout(function () {
            if (typeof(b) !== "undefined") {
                window.location.href = b
            }
            $("#alert_popup").modal("hide")
        }, 2000)
    }
});