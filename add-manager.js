document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SETTINGS DICTIONARY ---
    // Update your Keys and URLs here. 
    const adSettings = {
        popunder: {
            url: "https://pl26803941.effectivegatecpm.com/f7/4f/6b/f74f6bdf9.js"
        },
        socialBar: {
            url: "https://pl26803607.effectivegatecpm.com/f5/51/0d/f5510d214261a4d0422738037ec6bf8f.js"
        },
        vertical: {
            key: "YOUR_VERTICAL_BANNER_KEY",
            width: 160,
            height: 600
        },
        banner: {
            key: "YOUR_SQUARE_BANNER_KEY",
            width: 300,
            height: 250
        },
        native: {
            url: "https://www.topcreativeformat.com/YOUR_NATIVE_KEY/invoke.js"
        }
    };

    // --- 2. EXECUTION LOGIC ---

    // Popunder
    const popDiv = document.querySelector('.ad-popunder');
    if (popDiv) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = adSettings.popunder.url;
        popDiv.appendChild(s);
    }

    // Social Bar
    const socialDiv = document.querySelector('.ad-social');
    if (socialDiv) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = adSettings.socialBar.url;
        socialDiv.appendChild(s);
    }

    // Vertical Banner
    const vertDiv = document.querySelector('.ad-vertical');
    if (vertDiv) {
        const conf = document.createElement('script');
        conf.text = `atOptions = { 'key' : '${adSettings.vertical.key}', 'format' : 'iframe', 'height' : ${adSettings.vertical.height}, 'width' : ${adSettings.vertical.width}, 'params' : {} };`;
        vertDiv.appendChild(conf);

        const inv = document.createElement('script');
        inv.src = `//www.highperformanceformat.com/${adSettings.vertical.key}/invoke.js`;
        vertDiv.appendChild(inv);
    }

    // Standard Banner
    const bannerDiv = document.querySelector('.ad-banner');
    if (bannerDiv) {
        const conf = document.createElement('script');
        conf.text = `atOptions = { 'key' : '${adSettings.banner.key}', 'format' : 'iframe', 'height' : ${adSettings.banner.height}, 'width' : ${adSettings.banner.width}, 'params' : {} };`;
        bannerDiv.appendChild(conf);

        const inv = document.createElement('script');
        inv.src = `//www.highperformanceformat.com/${adSettings.banner.key}/invoke.js`;
        bannerDiv.appendChild(inv);
    }

    // Native Ad
    const nativeDiv = document.querySelector('.ad-native');
    if (nativeDiv) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = adSettings.native.url;
        nativeDiv.appendChild(s);
    }
});