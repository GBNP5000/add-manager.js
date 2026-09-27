document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SETTINGS DICTIONARY (Auto-generated) ---
    const adSettings = {
        popunder: {
            url: "https://pl26803941.profitableratecpmnetwork.com/f7/4f/6b/f74f6bdf9d05b130a5818a491f243f2b.js"
        },
        smartlink: null,
        nativeBanner: {
            url: "https://pl31310401.profitableratecpmnetwork.com/3f03da4d9b38e92391206043bc9d9027/invoke.js"
        },
        socialBar: {
            url: "https://pl26803607.profitableratecpmnetwork.com/f5/51/0d/f5510d214261a4d0422738037ec6bf8f.js"
        },
        banner: {
            url: "https://www.highrevenueformat.com/071a26e7721c0c8f59ad44c14bbeea57/invoke.js",
            key: "071a26e7721c0c8f59ad44c14bbeea57",
            width: 300,
            height: 250
        }
    };

    // Helper to load atOptions Iframe-based Banners
    function loadIframeAd(container, settings) {
        if (!container || !settings || !settings.key) return;

        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.text = `window.atOptions = { 
            'key' : '${settings.key}', 
            'format' : 'iframe', 
            'height' : ${settings.height || 250}, 
            'width' : ${settings.width || 300}, 
            'params' : {} 
        };`;
        container.appendChild(conf);

        const inv = document.createElement('script');
        inv.type = 'text/javascript';
        inv.src = `https://www.highperformanceformat.com/${settings.key}/invoke.js`;
        container.appendChild(inv);
    }

    // Helper to load standard script tags
    function loadScriptAd(selector, settings) {
        if (!settings || !settings.url) return;
        const container = document.querySelector(selector);
        if (container) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = settings.url;
            container.appendChild(s);
        }
    }

    // --- 2. EXECUTION LOGIC ---
    loadScriptAd('.ad-popunder', adSettings.popunder);
    loadScriptAd('.ad-social', adSettings.socialBar);
    loadScriptAd('.ad-native', adSettings.nativeBanner);

    loadIframeAd(document.querySelector('.ad-banner'), adSettings.banner);
});
