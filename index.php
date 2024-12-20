<?php
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
</script>
