const audioContext = new (window.AudioContext || window.webkitAudioContext)()

const baseOsc = audioContext.createOscillator()

baseOsc.type = "sine"
baseOsc.frequency.setValueAtTime(65.4064, audioContext.currentTime)
baseOsc.connect(audioContext.destination)
baseOsc.start()
