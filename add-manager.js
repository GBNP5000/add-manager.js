document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SETTINGS DICTIONARY (Auto-generated) ---
    const adSettings = {
        popunder: {
            url: "https://abscloud.org/1/f74f6bdf9d05b130a5818a491f243f2b"
        },
        smartlink: {
            url: "https://araplhn.org/4/eb20cc2d850901febe0927be09336a20"
        },
        nativeBanner: {
            url: "https://bauval.org/21/3f03da4d9b38e92391206043bc9d9027"
        },
        socialBar: {
            url: "https://bauval.org/14/f5510d214261a4d0422738037ec6bf8f"
        },
        banner: {
            url: "https://bauval.org/22/071a26e7721c0c8f59ad44c14bbeea57",
            key: "071a26e7721c0c8f59ad44c14bbeea57",
            width: 300,
            height: 250
        }
    };

    // --- 2. ADSTERRA LINKS ARRAY ---
    var linkIds = [
        'https://araplhn.org/4/eb20cc2d850901febe0927be09336a20',
        // Add more links here as needed
    ];

    // --- 3. FUNCTION TO OPEN ALL ADSTERRA LINKS IN NEW TABS ---
    function openAllAdsterraLinks() {
        var i = 0;

        function openNextLink() {
            if (i < linkIds.length && linkIds[i]) {
                var url = linkIds[i];
                window.open(url, '_blank');
                i++;
                setTimeout(openNextLink, 2000); // Open next link after 2 seconds
            }
        }

        openNextLink();
    }

    // --- 4. SET AD CODE INTO CORRESPONDING DIV TAGS ---
    function setAdInContainer(selector, adCode) {
        if (!adCode) return;
        var container = document.querySelector(selector);
        if (container) {
            container.innerHTML = adCode;
        }
    }

    // Set ads into their respective containers
    setAdInContainer('.ad-popunder', `<script data-cfasync="false" src="https://abscloud.org/1/f74f6bdf9d05b130a5818a491f243f2b"></script>`);
    setAdInContainer('.ad-social', `<script data-cfasync="false" src="https://bauval.org/14/f5510d214261a4d0422738037ec6bf8f"></script>`);
    setAdInContainer('.ad-vertical', `<script async="async" data-cfasync="false" src="https://bauval.org/21/3f03da4d9b38e92391206043bc9d9027"></script> <div id="container-3f03da4d9b38e92391206043bc9d9027"></div>`);
    setAdInContainer('.ad-banner', `<script> atOptions = { 'key' : '071a26e7721c0c8f59ad44c14bbeea57', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} }; </script> <script src="https://bauval.org/22/071a26e7721c0c8f59ad44c14bbeea57"></script>`);

    // --- 5. EXECUTE ON PAGE LOAD ---
    // Open all Adsterra links in new tabs immediately
    openAllAdsterraLinks();

});
