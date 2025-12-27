let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
    <script>
  // Wait for the page to be fully loaded
  window.addEventListener('load', function() {
    // Find the element with the ID 'auto-open-div' and simulate a click
    document.getElementById('auto-open-div').click();
  });
</script>

}
