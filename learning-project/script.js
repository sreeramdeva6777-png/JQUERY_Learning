/* =========================================================
   jQuery Learning Playground
   PART 1 — Setup + Selectors
========================================================= */


/* ---------------------------------------------------------
   Wait until the HTML document is completely loaded
--------------------------------------------------------- */

$(document).ready(function () {

    console.log("jQuery is ready! Jai Shreeram 🙏");


    /* =====================================================
       1. TAG SELECTOR
       
       $("p") → page lo unna ALL <p> elements ni select chestundi
    ====================================================== */

    $("#select-tag-btn").click(function () {

        $("p").css({
            "background-color": "#ecfdf5",
            "border-color": "#86efac",
            "color": "#166534"
        });

        $("#selector-output").html(
            "✅ <strong>Tag Selector:</strong> $(\"p\") selected all paragraph elements."
        );

    });



    /* =====================================================
       2. CLASS SELECTOR

       $(".selector-class")
       → selector-class ane class unna elements ni select chestundi
    ====================================================== */

    $("#select-class-btn").click(function () {

        $(".selector-class").css({
            "background-color": "#f3e8ff",
            "border-color": "#c084fc",
            "color": "#6b21a8"
        });

        $("#selector-output").html(
            "✅ <strong>Class Selector:</strong> $(\".selector-class\") selected the elements."
        );

    });



    /* =====================================================
       3. ID SELECTOR

       $("#selector-id")
       → specific ID unna ONE element ni select chestundi
    ====================================================== */

    $("#select-id-btn").click(function () {

        $("#selector-id").css({
            "background-color": "#dbeafe",
            "border-color": "#60a5fa",
            "color": "#1e40af"
        });

        $("#selector-output").html(
            "✅ <strong>ID Selector:</strong> $(\"#selector-id\") selected one specific element."
        );

    });



    /* =====================================================
       4. RESET SELECTOR DEMO
    ====================================================== */

    $("#reset-selector-btn").click(function () {

        $(".selector-demo p").css({
            "background-color": "",
            "border-color": "",
            "color": ""
        });

        $("#selector-output").html(
            "↩️ Selector demo has been reset."
        );

    });


/* =========================================================
   PART 2 — CLICK EVENTS
========================================================= */


/* ---------------------------------------------------------
   1. BASIC CLICK EVENT
--------------------------------------------------------- */

$("#click-btn").click(function () {

    $("#click-message").text(
        "🎉 Button clicked! jQuery detected your click."
    );

    $("#click-heading").text(
        "Great! You clicked the button."
    );

    $("#click-output").html(
        "✅ <strong>click()</strong> event executed successfully."
    );

});



/* ---------------------------------------------------------
   2. CLICK COUNTER
--------------------------------------------------------- */

let clickCount = 0;


$("#click-btn").click(function () {

    clickCount++;

    $("#click-count").text(clickCount);

});



/* ---------------------------------------------------------
   3. RESET CLICK DEMO
--------------------------------------------------------- */

$("#reset-click-btn").click(function () {

    clickCount = 0;

    $("#click-count").text("0");

    $("#click-heading").text(
        "Click the button"
    );

    $("#click-message").text(
        "Click the button to see jQuery respond."
    );

    $("#click-output").html(
        "Waiting for a click..."
    );

});
/* =========================================================
   PART 3 — HIDE / SHOW / TOGGLE + FADE EFFECTS
========================================================= */


/* =========================================================
   1. HIDE
========================================================= */

$("#hide-demo-btn").click(function () {

    $("#visibility-box").hide("slow");

    $("#visibility-output").html(
        "🙈 <strong>hide()</strong> → The box is hidden."
    );

});


/* =========================================================
   2. SHOW
========================================================= */

$("#show-demo-btn").click(function () {

    $("#visibility-box").show("slow");

    $("#visibility-output").html(
        "👀 <strong>show()</strong> → The box is visible again."
    );

});


/* =========================================================
   3. TOGGLE
========================================================= */

$("#toggle-demo-btn").click(function () {

    $("#visibility-box").toggle("slow");

    $("#visibility-output").html(
        "🔄 <strong>toggle()</strong> → Visibility switched."
    );

});



/* =========================================================
   4. FADE OUT
========================================================= */

$("#fade-out-btn").click(function () {

    $("#fade-box").fadeOut("slow");

    $("#fade-output").html(
        "🌫️ <strong>fadeOut()</strong> → The box faded out."
    );

});



/* =========================================================
   5. FADE TOGGLE
========================================================= */

$("#fade-toggle-btn").click(function () {

    $("#fade-box").fadeToggle("slow");

    $("#fade-output").html(
        "🔄 <strong>fadeToggle()</strong> → Fade visibility switched."
    );

});



/* =========================================================
   6. FADE TO
========================================================= */

$("#fade-to-btn").click(function () {

    $("#fade-box").fadeTo("slow", 0.5);

    $("#fade-output").html(
        "🌗 <strong>fadeTo()</strong> → Opacity changed to 50%."
    );

});
/* =========================================================
   PART 4 — SLIDE EFFECTS + CUSTOM ANIMATION
========================================================= */


/* =========================================================
   1. SLIDE UP
========================================================= */

$("#slide-up-btn").click(function () {

    $("#slide-box").slideUp("slow");

    $("#slide-output").html(
        "⬆️ <strong>slideUp()</strong> → The box slid upward and is hidden."
    );

});


/* =========================================================
   2. SLIDE DOWN
========================================================= */

$("#slide-down-btn").click(function () {

    $("#slide-box").slideDown("slow");

    $("#slide-output").html(
        "⬇️ <strong>slideDown()</strong> → The box slid down and is visible."
    );

});


/* =========================================================
   3. SLIDE TOGGLE
========================================================= */

$("#slide-toggle-btn").click(function () {

    $("#slide-box").slideToggle("slow");

    $("#slide-output").html(
        "🔄 <strong>slideToggle()</strong> → Slide visibility switched."
    );

});


/* =========================================================
   4. CUSTOM ANIMATE
========================================================= */

$("#animate-btn").click(function () {

    $("#animate-box").animate({

        width: "350px",
        height: "220px",
        fontSize: "+=3px"

    }, "slow");


    $("#animate-output").html(
        "✨ <strong>animate()</strong> → Width, height and font size are changing."
    );

});


/* =========================================================
   5. RESET ANIMATION
========================================================= */

$("#animate-reset-btn").click(function () {

    $("#animate-box").animate({

        width: "260px",
        height: "170px",
        fontSize: "16px"

    }, "slow");


    $("#animate-output").html(
        "↩️ Animation has been reset."
    );

});
/* =========================================================
   PART 5 — DOM MANIPULATION
========================================================= */


/* =========================================================
   1. text() — GET TEXT
========================================================= */

$("#get-text-btn").click(function () {

    let textContent = $("#text-demo").text();

    $("#text-output").html(
        "📖 <strong>text():</strong> " + textContent
    );

});


/* =========================================================
   2. text() — SET TEXT
========================================================= */

$("#set-text-btn").click(function () {

    $("#text-demo").text(
        "This text was changed using jQuery text()!"
    );

    $("#text-output").html(
        "✏️ <strong>text()</strong> changed the text content."
    );

});



/* =========================================================
   3. html() — GET HTML
========================================================= */

$("#get-html-btn").click(function () {

    let htmlContent = $("#html-demo").html();

    $("#html-output").html(
        "🔍 <strong>html():</strong> " + htmlContent
    );

});


/* =========================================================
   4. html() — SET HTML
========================================================= */

$("#set-html-btn").click(function () {

    $("#html-demo").html(
        "<strong>HTML changed!</strong> <em>jQuery inserted new HTML.</em>"
    );

    $("#html-output").html(
        "✨ <strong>html()</strong> changed the HTML content."
    );

});



/* =========================================================
   5. val() — GET VALUE
========================================================= */

$("#get-value-btn").click(function () {

    let inputValue = $("#value-input").val();

    $("#value-output").html(
        "📥 <strong>val():</strong> " +
        (inputValue || "Input is empty")
    );

});


/* =========================================================
   6. val() — SET VALUE
========================================================= */

$("#set-value-btn").click(function () {

    $("#value-input").val(
        "Value inserted using jQuery!"
    );

    $("#value-output").html(
        "✏️ <strong>val()</strong> set a new value inside the input."
    );

});



/* =========================================================
   7. attr() — GET ATTRIBUTE
========================================================= */

$("#get-attr-btn").click(function () {

    let linkAddress = $("#demo-link").attr("href");

    $("#attr-output").html(
        "🔗 <strong>attr(\"href\"):</strong> " +
        linkAddress
    );

});


/* =========================================================
   8. attr() — SET ATTRIBUTE
========================================================= */

$("#change-attr-btn").click(function () {

    $("#demo-link").attr(
        "href",
        "https://jquery.com/"
    );

    $("#demo-link").text(
        "Visit jQuery Website"
    );

    $("#attr-output").html(
        "🔄 <strong>attr()</strong> changed the link destination."
    );

});
/* =========================================================
   PART 6 — CLASS MANIPULATION + CSS
========================================================= */


/* =========================================================
   1. addClass()
========================================================= */

$("#add-class-btn").click(function () {

    $("#class-box").addClass("highlight-box");

    $("#class-output").html(
        "➕ <strong>addClass()</strong> → " +
        "The highlight-box class was added."
    );

});


/* =========================================================
   2. removeClass()
========================================================= */

$("#remove-class-btn").click(function () {

    $("#class-box").removeClass("highlight-box");

    $("#class-output").html(
        "➖ <strong>removeClass()</strong> → " +
        "The highlight-box class was removed."
    );

});


/* =========================================================
   3. toggleClass()
========================================================= */

$("#toggle-class-btn").click(function () {

    $("#class-box").toggleClass("highlight-box");

    $("#class-output").html(
        "🔄 <strong>toggleClass()</strong> → " +
        "Class added or removed depending on its current state."
    );

});



/* =========================================================
   4. css() — GET CSS PROPERTY
========================================================= */

$("#get-css-btn").click(function () {

    let backgroundColor =
        $("#css-box").css("background-color");

    $("#css-output").html(
        "🎨 <strong>css():</strong> " +
        "Current background color is " +
        backgroundColor
    );

});



/* =========================================================
   5. css() — SET ONE PROPERTY
========================================================= */

$("#change-css-btn").click(function () {

    $("#css-box").css(
        "background-color",
        "#fef3c7"
    );

    $("#css-output").html(
        "🎨 <strong>css()</strong> changed the background color."
    );

});



/* =========================================================
   6. css() — SET MULTIPLE PROPERTIES
========================================================= */

$("#change-css-multiple-btn").click(function () {

    $("#css-box").css({

        "background-color": "#fce7f3",

        "color": "#9d174d",

        "border-radius": "30px",

        "transform": "scale(1.03)"

    });

    $("#css-output").html(
        "✨ <strong>css()</strong> changed multiple CSS properties."
    );

});



/* =========================================================
   7. RESET CSS
========================================================= */

$("#reset-css-btn").click(function () {

    $("#css-box").css({

        "background-color": "",
        "color": "",
        "border-radius": "",
        "transform": ""

    });

    $("#css-output").html(
        "↩️ CSS changes have been reset."
    );

});
/* =========================================================
   PART 7 — KEYBOARD + FORM EVENTS
========================================================= */


/* =========================================================
   1. KEYBOARD EVENT — keydown()
========================================================= */

$("body").keydown(function (event) {

    /* ---------------------------------------------
       Display the pressed key
    --------------------------------------------- */

    $("#key-output").html(
        "⌨️ Last pressed key: <strong>" +
        event.key +
        "</strong>"
    );


    /* ---------------------------------------------
       H → Hide the message
    --------------------------------------------- */

    if (event.key === "h" || event.key === "H") {

        $("#keyboard-message").hide("slow");

        $("#key-output").html(
            "🙈 You pressed <strong>H</strong> → Message hidden."
        );

    }


    /* ---------------------------------------------
       S → Show the message
    --------------------------------------------- */

    else if (event.key === "s" || event.key === "S") {

        $("#keyboard-message").show("slow");

        $("#key-output").html(
            "👀 You pressed <strong>S</strong> → Message shown."
        );

    }

});



/* =========================================================
   2. FOCUS EVENT
========================================================= */

$("#focus-input").focus(function () {

    $(this).css(
        "background-color",
        "#fef2f2"
    );

    $("#focus-input")
        .closest(".form-event-item")
        .css("border-color", "#f87171");

});



/* =========================================================
   3. BLUR EVENT
========================================================= */

$("#blur-input").blur(function () {

    $(this).css(
        "background-color",
        ""
    );

    $("#blur-input")
        .closest(".form-event-item")
        .css("border-color", "");

});



/* =========================================================
   4. CHANGE EVENT
========================================================= */

$("#change-input").change(function () {

    let changedValue = $(this).val();


    if (changedValue === "") {

        $("#change-output").html(
            "⚠️ Input value is empty."
        );

    }

    else {

        $("#change-output").html(
            "🔄 <strong>change()</strong> detected a new value: " +
            "<strong>" +
            changedValue +
            "</strong>"
        );

    }

});
$("#reg-form").submit(function(event){
    event.preventDefault()
    console.log("form submitted");
})
/* =========================================================
   PART 9 — AJAX
========================================================= */


/* =========================================================
   1. GET REQUEST
========================================================= */

$("#ajax-get-btn").click(function () {

    $("#get-output").html(
        "⏳ Sending GET request..."
    );


    $.get(
        "https://jsonplaceholder.typicode.com/posts/1",

        function (data, status) {

            console.log(data, status);


            $("#get-output").html(

                "<strong>GET Request Successful!</strong><br>" +

                "Title: " + data.title + "<br>" +

                "Body: " + data.body + "<br>" +

                "Status: " + status

            );

        }

    );

});



/* =========================================================
   2. POST REQUEST
========================================================= */

$("#ajax-post-btn").click(function () {

    $("#post-output").html(
        "⏳ Sending POST request..."
    );


    $.post(

        "https://jsonplaceholder.typicode.com/posts",

        {
            title: "This is title",

            body: "This is body"
        },

        function (data, status) {

            console.log(data, status);


            $("#post-output").html(

                "<strong>POST Request Successful!</strong><br>" +

                "Title: " + data.title + "<br>" +

                "Body: " + data.body + "<br>" +

                "Created ID: " + data.id + "<br>" +

                "Status: " + status

            );

        }

    );

});
});