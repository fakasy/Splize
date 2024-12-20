<?php
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("Content-Type: text/html; charset=utf-8");
header("Referrer-Policy: no-referrer");
header("Feature-Policy: vibrate 'none'; geolocation 'none'; microphone 'none'; camera 'none';");
header("X-Content-Type-Options: nosniff");
header("X-Permitted-Cross-Domain-Policies: none");
header("X-Download-Options: noopen");
header("X-ROBOTS-TAG: noindex, nofollow, nosnippet, noarchive, notranslate");
header("X-Robots-Tag: noimageindex");
include 'splize.html';
?>
<script>
// Security measures
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        alert('Access Denied');
    }
});

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
        alert('Access Denied');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Access Denied');
});
