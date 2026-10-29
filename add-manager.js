document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. CONFIGURATION & LINKS
    // ==========================================
    var adLinks = [
        "https://asiafilm.org/4/d52d736f7acf000347c0871ed8cff7a6",
        "https://asiafilm.org/4/9350a288c2d53f379b8706da1fb6fde4",
        "https://asiafilm.org/4/0acb9504d1602fb34911afc7304fb118",
        "https://beta.publishers.adsterra.com/referral/nqh4p1u1SP"
    ];

    // Single-line Adsterra Code Strings (Paste your cleaned code inside backticks)
    // These will be injected into the corresponding DIVs automatically
    const AD_CODES = {
        popunder: `<script type="text/javascript">atOptions={'key':'YOUR_KEY_HERE','format':'iframe','height':250,'width':300};</script><script src="https://www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js"></script>`,
        
        socialBar: `<script type="text/javascript" src="//pl123456.profitableratecpmnetwork.com/script.js"></script>`,
        
        vertical: `<script type="text/javascript">atOptions={'key':'YOUR_KEY_HERE','format':'iframe','height':600,'width':160};</script><script src="https://www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js"></script>`,
        
        banner: `<script type="text/javascript">atOptions={'key':'YOUR_KEY_HERE','format':'iframe','height':250,'width':300};</script><script src="https://www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js"></script>`
    };

    // ==========================================
    // 2. URL PARSING & UI SETUP
    // ==========================================
    var params = new URLSearchParams(window.location.search);
    var destinationUrl = params.get("url");
    
    // Elements
    var wrapper = document.getElementById("redirectWrapper");
    var content = document.getElementById("content");
    var urlDisplay = document.getElementById("destinationUrlDisplay");
    var gotoBtn = document.getElementById("gotoButton");
    var clickBox = document.getElementById("adClickBox");
    var errorMsg = document.getElementById("errorMessage");

    // If no URL param found, do nothing (let blog load normally)
    if (!destinationUrl) return;

    // Validate URL
    try {
        new URL(destinationUrl);
    } catch (e) {
        if(errorMsg) errorMsg.style.display = "block";
        return;
    }

    // Activate Redirect Mode
    if (content) content.classList.add("hideBlog");
    if (wrapper) wrapper.style.display = "flex";
    if (urlDisplay) urlDisplay.innerHTML = destinationUrl;
    if (gotoBtn) gotoBtn.style.display = "inline-block";

    // ==========================================
    // 3. INJECT ADS INTO DIVS
    // ==========================================
    function injectAd(selector, codeString) {
        if (!codeString) return;
        var container = document.querySelector(selector);
        if (container) {
            // Clear existing content and inject new single-line string
            container.innerHTML = ""; 
            container.innerHTML = codeString;
        }
    }

    // Inject codes on load
    injectAd('.ad-popunder', AD_CODES.popunder);
    injectAd('.ad-social', AD_CODES.socialBar);
    injectAd('.ad-vertical', AD_CODES.vertical);
    injectAd('.ad-banner', AD_CODES.banner);

    // ==========================================
    // 4. OPEN LINKS LOGIC
    // ==========================================
    var linkIndex = 0;

    function openNextAdLink() {
        if (linkIndex < adLinks.length) {
            window.open(adLinks[linkIndex], '_blank');
            linkIndex++;
            // Wait 1.5 seconds before opening next tab to avoid spam filters
            setTimeout(openNextAdLink, 1500);
        }
    }

    function handleRedirect() {
        // 1. Open Destination in SAME page
        window.location.href = destinationUrl;
        
        // 2. Trigger Ad Opening sequence
        openNextAdLink();
    }

    // Attach Click Events
    if (gotoBtn) gotoBtn.onclick = handleRedirect;
    if (urlDisplay) urlDisplay.onclick = handleRedirect;
    if (clickBox) clickBox.onclick = handleRedirect;

});
