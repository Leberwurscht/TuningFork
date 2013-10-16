var request = navigator.mozApps.install("manifest.webapp");
request.onsuccess = function() {
  // great - display a message, or redirect to a launch page
  alert('installed');
};
request.onerror = function() {
  // whoops - this.error.name has details
  document.body.textContent = 'ERROR: '+this.error.name;
};
