var dev, osc, running;
running = false;

function audioCallback(buffer, channelCount){
  // Fill the buffer with the oscillator output.
  if (running) osc.append(buffer, channelCount);
}

window.addEventListener('load', function(){
  // Create an instance of the AudioDevice class
  dev = audioLib.AudioDevice(audioCallback, 2);

  // Create an instance of the Oscillator class
  osc = audioLib.Oscillator(dev.sampleRate, 440);
}, true);

function toggle_sound() {
  if (running) {
    document.getElementById('fork_image').src = 'images/clker_Tuning_Fork_off.svg';
    running = false;
  }
  else {
    document.getElementById('fork_image').src = 'images/clker_Tuning_Fork_on.svg';
    running = true;
  }
};
