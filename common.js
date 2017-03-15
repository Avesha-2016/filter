$(document).ready(function() {

    $(function() {
        $('#datetimepicker').datetimepicker({ language: 'ru' });
    });

    $(function() {
        $('#datetimepickers').datetimepicker({ language: 'ru' });
    });

    $(function() {
        $('#datetimepickerss').datetimepicker({ language: 'ru' });
    });

    $(function() {
        $('#datetimepickers2').datetimepicker({ language: 'ru' });
    });


    $(".but_strelka").on("click", function() {
        if ($(".box_oteli").css("display") == "none") {
            $(".box_oteli").css("display", "block");
        } else {
            $(".box_oteli").css("display", "none");
        }
    });

    $(".clik").on("click", function() {
        $("#select_reb").css("display", "block");
    });

    $(".numb_child").on("click", function() {
        var x = $(this).html(),
            y = $(".ggg"),
            z = $(".divider");
        y.remove();
        z.remove();
        if (x != 0) {
            for (var i = 1; i <= x; i++) {
                $('<p class="ggg">' + i + '-й ребенок <input type="text" class="numb_child_inp"></p><p role="separator" class="divider"></p>').insertBefore(".but");
            }
            $("#vozrast_reb").css("display", "block");
            $(".num_red2").html(x);
        } else {
            $("#vozrast_reb").css("display", "none");
            $(".num_red2").html(x);
            $("#select_reb").css("display", "none");
        }
    });

    $(".but").on("click", function() {
        var d = new Array;
        $("input[class='numb_child_inp']").each(function() {
            d.push($(this).val());
        });
        $("#select_reb").css("display", "none");
        $("#vozrast_reb").css("display", "none");

        var t = "(";
        for (i = 0; i < d.length; i++) {
            t += d[i] + ", ";
        }

        var to = t.length - 2;
        t = t.substring(0, to);
        t += " лет)";
        $(".itog").html(t);
    });

    $(".rasch_poisk p, .rasch_poisk_2 p").on("click", function() {
        var x = $(this).data("eventof");
        $("#menu_polnoe").toggle();
        $("#but_poisk_full").toggle();
        $("#menu_kor").toggle();
        $("#but_poisk").toggle();
        $(".rasch_poisk_2").toggle();
        $(".rasch_poisk").toggle();
        if (x == "more") {
            var foo = $("#datetimepicker input").val();
            var select_from = $("#select_from_div_min select").val();
            var select_to = $("#select_to_div_min select").val();

            $("#datetimepickers input").val(foo);
            $("#select_from_div select").val(select_from);
            $("#select_to_div select").val(select_to);
        }
        if (x == "less") {
            var fooS = $("#datetimepickers input").val();
            var select_from = $("#select_from_div select").val();
            var select_to = $("#select_to_div select").val();

            $("#datetimepicker input").val(fooS);
            $("#select_from_div_min select").val(select_from);
            $("#select_to_div_min select").val(select_to);
        }
    });

    var g;
    $(".knopka_gray").on("click", function() {

        var dataValue = $(this).attr('data-grey');
        var classOn = $("[data-table='" + dataValue + "']").attr('class');

        if (classOn == "table_spisok") {
            g = $(this).html();
            $("[data-table='" + dataValue + "']").removeClass("table_spisok");
            $("[data-table='" + dataValue + "']").addClass("table_spisok_hide");
            $(this).html("Свернуть"); // Свернуть 
        } else {
            $("[data-table='" + dataValue + "']").removeClass("table_spisok_hide");
            $("[data-table='" + dataValue + "']").addClass("table_spisok");
            $(this).html(g); //Развернуть
        }
    });

    $(".clik_vibor").on("click", function() {
        $("#vib_vzrosliy").css("display", "block");
    });

    $(".numb_vzr").on("click", function() {
        var xx = $(this).html();
        $(".num_red").html(xx);
        $("#vib_vzrosliy").css("display", "none");
    });


    function changeStrNight(znak) {
        var str_night = "";
        if (znak == 1)
            str_night = "ночь";
        else if (znak == 2 || znak == 3 || znak == 4)
            str_night = "ночи";
        else
            str_night = "ночей";
        return str_night;
    }

    $(".plus").on("click", function() {
        var plus = $(".count_night").html();
        plus = plus.substring(0, 2);
        if (plus != 20)
            plus++;
        var str_night_plus = changeStrNight(plus);
        $(".count_night").html(plus + " " + str_night_plus);
    });
    $(".minus").on("click", function() {
        var minus = $(".count_night").html();
        minus = minus.substring(0, 2);
        if (minus != 1)
            minus--;
        var str_night_minus = changeStrNight(minus);
        $(".count_night").html(minus + " " + str_night_minus);
    });


    function turAboutMore(more, notmore, spisok, kor_spisok, nomer, info, disblock, disnone) {
        spisok.css("display", "block");
        notmore.css("display", "block");
        more.css("display", "none");
        kor_spisok.css("display", "none");
        nomer.addClass("visible_info");
        info.addClass("visible_info");
        disblock.css("display", "none");
        disnone.css("display", "block");
    }

    function turAboutNotMore(more, notmore, spisok, kor_spisok, nomer, info, disblock, disnone) {
        spisok.css("display", "none"); //.spisok
        notmore.css("display", "none");
        more.css("display", "block");
        kor_spisok.css("display", "block"); //.kor_spisok
        nomer.removeClass("visible_info"); //.nomer_
        info.removeClass("visible_info"); //.info_
        disnone.css("display", "none"); //.dis_none_
        disblock.css("display", "block"); //.dis_block_
    }

    $(".btn_blue").on("click", function() {

        var spisokM = $(this).attr("data-unique");

        turAboutMore($(this), $(".knopka_svernut" + spisokM), $(".spisok" + spisokM), $(".kor_spisok" + spisokM), $(".nomer_" + spisokM), $(".info_" + spisokM), $(".dis_block_" + spisokM), $(".dis_none_" + spisokM));
    });

    $(".knopka").on("click", function() {
        var spisokN = $(this).attr("data-uniques");

        turAboutNotMore($("[data-unique= " + spisokN + "]"), $(".knopka_svernut" + spisokN), $(".spisok" + spisokN), $(".kor_spisok" + spisokN), $(".nomer_" + spisokN), $(".info_" + spisokN), $(".dis_block_" + spisokN), $(".dis_none_" + spisokN));
    });


    $('[data-toggle="popover"]').popover()
        .click(function(e) {
            e.preventDefault();
        });

    $('[data-toggle="tooltip"]').tooltip();


    $(".stoimost2").on("mouseenter mouseleave", function(event) {
        $(this).parent().siblings(".inf").toggle();
    });


    $(".input_pole_otel").on("input", function() {
        var input_av = $(this).val();
        $("li label.label_av").each(function(indx, element) {
            if ($(element).html().indexOf(input_av) == -1) {
                $(element).parent("li").css("display", "none");
            } else {
                if ($(element).parent("li").css("display") == "none") {
                    $(element).parent("li").css("display", "block");
                }
            }
        });
    });

    $("#all").on("change", function() {
        $(".chek_av").each(function(indx, element) {
            if ($("#all").prop("checked") == true) {
                $(element).prop("checked", true);
                $(element).parent("li").addClass("chek_active");
            } else {
                $(element).removeAttr("checked");
                $(element).parent("li").removeClass("chek_active");
            }
        });
    });

    $(".button_oteli > span").on("click", function() {
        var input_text = "";
        $("input[name='hotel_1']:checked").each(function(indx, element) {
            input_text += $(element).siblings(".label_av").html() + ", ";
        });
        input_text = input_text.substr(0, input_text.length - 2);
        $(".all_oteli").val(input_text);
        $(".box_oteli").css("display", "none");
    });

    $(".chek_av").on("change", function() {
        if ($(this).prop("checked") == true) {
            $(this).parent("li").addClass("chek_active");
        } else {
            $(this).parent("li").removeClass("chek_active");
        }
    });
});
