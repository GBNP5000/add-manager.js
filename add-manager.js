document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SETTINGS DICTIONARY ---
    const adSettings = {
        popunder: {
            url: "https://pl26803941.profitableratecpmnetwork.com/f7/4f/6b/f74f6bdf9d05b130a5818a491f243f2b.js"
        },
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

    // --- 2. AD LOADERS ---

    // Standard Script Loader (Popunder, Social Bar)
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

    // Iframe Banner Loader (300x250, 160x600, 728x90, etc.)
    function loadIframeBanner(selector, settings) {
        if (!settings || !settings.key) return;
        const container = document.querySelector(selector);
        if (!container) return;

        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.text = `atOptions = { 
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

    // Native Banner Loader
    function loadNativeAd(selector, settings) {
        if (!settings || !settings.url) return;
        const container = document.querySelector(selector);
        if (!container) return;

        if (settings.container) {
            const nativeDiv = document.createElement('div');
            nativeDiv.id = settings.container;
            container.appendChild(nativeDiv);
        }

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = settings.url;
        container.appendChild(s);
    }

    // --- 3. EXECUTION ---
    loadScriptAd('.ad-popunder', adSettings.popunder);
    loadScriptAd('.ad-social', adSettings.socialBar);
    loadNativeAd('.ad-native', adSettings.nativeBanner);
    loadIframeBanner('.ad-banner', adSettings.banner);
});
