// Checks if a user is using a mobile device, if so, switch them to the mobile page
function checkBrowserPlatform(){
    const isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobile/));
    if (isMobile != false){
        console.log("mobile detected");
        document.location='mobile.html';
    } 
}