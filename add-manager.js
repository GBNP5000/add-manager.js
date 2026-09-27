document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 Ad-Manager: Initializing...");

    // --- 1. SETTINGS DICTIONARY ---
    const adSettings = {
        popunder: {
            url: "https://pl26803941.profitableratecpmnetwork.com/f7/4f/6b/f74f6bdf9d05b130a5818a491f243f2b.js"
        },
        socialBar: {
            url: "https://pl26803607.profitableratecpmnetwork.com/f5/51/0d/f5510d214261a4d0422738037ec6bf8f.js"
        },
        nativeBanner: {
            url: "https://pl31310401.profitableratecpmnetwork.com/3f03da4d9b38e92391206043bc9d9027/invoke.js"
        },
        banner: {
            url: "https://www.highrevenueformat.com/071a26e7721c0c8f59ad44c14bbeea57/invoke.js",
            key: "071a26e7721c0c8f59ad44c14bbeea57",
            width: 300,
            height: 250
        }
    };

    // Helper to load standard scripts
    function loadScriptAd(selector, url) {
        if (!url) return;
        const container = document.querySelector(selector);
        if (container) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = url;
            container.appendChild(s);
        }
    }

    // Helper for Iframe / Banner Ads
    function loadBannerAd(selector, settings) {
        if (!settings || !settings.key) return;
        const container = document.querySelector(selector);
        if (!container) return;

        // Set global options on window
        window.atOptions = {
            'key': settings.key,
            'format': 'iframe',
            'height': settings.height || 250,
            'width': settings.width || 300,
            'params': {}
        };

        const inv = document.createElement('script');
        inv.type = 'text/javascript';
        inv.src = settings.url;
        container.appendChild(inv);
    }

    // --- 2. EXECUTION ---
    loadScriptAd('.ad-popunder', adSettings.popunder.url);
    loadScriptAd('.ad-social', adSettings.socialBar.url);
    loadScriptAd('.ad-native', adSettings.nativeBanner.url);
    loadBannerAd('.ad-banner', adSettings.banner);
});
