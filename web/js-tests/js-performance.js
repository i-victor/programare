<head>
<script>
	performance.mark('started');
</script>
</head>

<script>
    performance.mark('first-contentful-paint');
    console.log(performance.getEntriesByName('first-contentful-paint'));
</script>
<script>
function showPaintTimings() {
  if (window.performance) {
    console.log('Performance timing is supported ... OK');
    var performanceEntries = window.performance.getEntriesByType('mark');
    performanceEntries.forEach( (performanceEntry, i, entries) => {
      console.log("The time to " + performanceEntry.name + " was " + performanceEntry.startTime + " milliseconds.");
    });
  } else {
    console.log('Performance timing isn\'t supported.');
  }
}
showPaintTimings();
//console.log(window.performance);
</script>