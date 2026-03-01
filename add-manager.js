document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 Ad-Manager: Initializing from GitHub...");

    // --- 1. SETTINGS DICTIONARY ---
    const adSettings = {
        popunder: {
            url: "https://pl26803941.effectivegatecpm.com/f7/4f/6b/f74f6bdf9.js"
        },
        socialBar: {
            // Replace 'YOUR_SOCIAL_KEY' with your actual key if needed
            url: "https://bit.ly/4siVtJA"
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

    // --- 2. HELPER FUNCTION FOR INJECTION ---
    function injectScript(selector, src, type = "standard", config = null) {
        const container = document.querySelector(selector);
        if (!container) return;

        console.log(`Checking container: ${selector} - Found!`);

        if (type === "standard") {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = src;
            s.onerror = function() {
                console.error(`❌ Ad-Manager Error: Failed to load script for ${selector}. Likely blocked by Antivirus/AdBlock.`);
            };
            container.appendChild(s);
        } 
        else if (type === "atOptions" && config) {
            const conf = document.createElement('script');
            conf.text = `atOptions = { 'key' : '${config.key}', 'format' : 'iframe', 'height' : ${config.height}, 'width' : ${config.width}, 'params' : {} };`;
            container.appendChild(conf);

            const inv = document.createElement('script');
            inv.src = `//www.highperformanceformat.com/${config.key}/invoke.js`;
            inv.onerror = () => console.error(`❌ Ad-Manager Error: Banner blocked for ${selector}`);
            container.appendChild(inv);
        }
    }

    // --- 3. EXECUTION ---
    injectScript('.ad-popunder', adSettings.popunder.url);
    injectScript('.ad-social', adSettings.socialBar.url);
    injectScript('.ad-native', adSettings.native.url);
    
    // Banners use the 'atOptions' type
    injectScript('.ad-vertical', null, "atOptions", adSettings.vertical);
    injectScript('.ad-banner', null, "atOptions", adSettings.banner);

    console.log("✅ Ad-Manager: Injection complete.");
});

