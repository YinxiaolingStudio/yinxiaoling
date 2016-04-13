!
function(e, a) {
    var t = function(e, a, t) {
        var s;
        return function() {
            function l() {
                t || e.apply(o, i),
                s = null
            }
            var o = this,
            i = arguments;
            s ? clearTimeout(s) : t && e.apply(o, i),
            s = setTimeout(l, a || 100)
        }
    };
    e.fn[a] = function(e) {
        return e ? this.bind("resize", t(e)) : this.trigger(a)
    }
} ($, "smartResize"),
$(document).ready(function() {
    function e() {
        $(".menu-list").each(function() {
            var e = $(this);
            e.hasClass("nav-active") && e.find("> ul").slideUp(200,
            function() {
                e.removeClass("nav-active"),
                e.find("i.pull-right").removeClass("ion-ios7-arrow-up").addClass("ion-ios7-arrow-down")
            })
        })
    }
    function a() {
        var e = $("<a>", {
            id: "back-to-top",
            href: "#top"
        }),
        a = $("<i>", {
            "class": "fa fa-chevron-up"
        });
        e.appendTo("body"),
        a.appendTo(e),
        e.hide(),
        $(window).scroll(function() {
            $(this).scrollTop() > 150 ? e.fadeIn() : e.fadeOut()
        }),
        e.click(function(e) {
            e.preventDefault(),
            $("body, html").animate({
                scrollTop: 0
            },
            600)
        })
    }
    $(".menu-list > a").click(function() {
        var a = $(this).parent(),
        t = a.position(),
        s = a.find("> ul");
        return $("body").hasClass("left-side-collapsed") || (s.is(":visible") ? s.slideUp(200,
        function() {
            a.removeClass("nav-active"),
            a.find("i.pull-right").removeClass("ion-ios7-arrow-up").addClass("ion-ios7-arrow-down")
        }) : (e(), a.addClass("nav-active"), a.find("i.pull-right").removeClass("ion-ios7-arrow-down").addClass("ion-ios7-arrow-up"), $(".left-side").scrollTop(t.top), s.slideDown(200,
        function() {}))),
        !1
    }),
    $(".custom-nav > li").hover(function() {
        $(this).addClass("nav-hover")
    },
    function() {
        $(this).removeClass("nav-hover")
    }),
    $(".toggle-btn").click(function(e) {
        e.stopPropagation();
        var a = $("body");
        $(window).width() > 992 ? (a.hasClass("left-side-collapsed") ? (a.removeClass("left-side-collapsed"), $(".custom-nav li.active ul").css({
            display: "block"
        }), $(this).removeClass("menu-collapsed")) : (a.addClass("left-side-collapsed"), $(".custom-nav ul").attr("style", ""), $(this).addClass("menu-collapsed")), a.hasClass("left-side-show") && a.removeClass("left-side-show")) : a.hasClass("left-side-show") ? a.removeClass("left-side-show") : a.addClass("left-side-show")
    }),
    $(window).smartResize(function() {
        var e = $("body");
        $(window).width() <= 992 ? e.removeClass("left-side-collapsed") : e.hasClass("left-side-show") && e.removeClass("left-side-show")
    }),
    a(),
    $('[data-toggle="tooltip"]').tooltip(),
    $('[data-toggle="popover"]').popover(),
    $(".has-scroll").slimScroll({
        allowPageScroll: !0,
        wheelStep: 15,
        alwaysVisible: !1
    }),
    $(".tab-drop, .pill-drop").tabdrop("layout"),
    $(".btn-number").click(function(e) {
        e.preventDefault(),
        fieldName = $(this).attr("data-field"),
        type = $(this).attr("data-type");
        var a = $("input[name='" + fieldName + "']"),
        t = parseInt(a.val());
        isNaN(t) ? a.val(0) : "minus" == type ? (t > a.attr("min") && a.val(t - 1).change(), parseInt(a.val()) == a.attr("min") && $(this).attr("disabled", !0)) : "plus" == type && (t < a.attr("max") && a.val(t + 1).change(), parseInt(a.val()) == a.attr("max") && $(this).attr("disabled", !0))
    }),
    $(".input-number").focusin(function() {
        $(this).data("oldValue", $(this).val())
    }),
    $(".input-number").change(function() {
        minValue = parseInt($(this).attr("min")),
        maxValue = parseInt($(this).attr("max")),
        valueCurrent = parseInt($(this).val()),
        name = $(this).attr("name"),
        valueCurrent >= minValue ? $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr("disabled") : (alert("Sorry, the minimum value was reached"), $(this).val($(this).data("oldValue"))),
        maxValue >= valueCurrent ? $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr("disabled") : (alert("Sorry, the maximum value was reached"), $(this).val($(this).data("oldValue")))
    }),
    $(".input-number").keydown(function(e) { - 1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault()
    }),
    $("label.tree-toggler").click(function() {
        var e = $(this).children(".fa");
        e.hasClass("fa-folder-o") ? e.removeClass("fa-folder-o").addClass("fa-folder-open-o") : e.removeClass("fa-folder-open-o").addClass("fa-folder-o"),
        $(this).parent().children("ul.tree").toggle(300,
        function() {
            $(this).parent().toggleClass("open")
        })
    })
});