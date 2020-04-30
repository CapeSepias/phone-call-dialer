/* global getPluginParameter, fieldProperties, launchIntent, setAnswer */

var isAndroid = (document.body.className.indexOf('android-collect') >= 0)
var phoneNumber = getPluginParameter('phone_number')
var buttonLabel = getPluginParameter('button_label')
var previewNumberContainer = document.getElementById('phone-preview-number-container')
var btnCallPhone = document.getElementById('btn-call-phone')
var statusContainer = document.getElementById('status-container')
var currentAnswer = fieldProperties.CURRENT_ANSWER || ''

// set the preview values to show what has been passed from the parameters
previewNumberContainer.innerHTML = phoneNumber
btnCallPhone.innerText = buttonLabel || 'Click here to call'

// define what the 'Call phone' button does
if (isAndroid) {
  btnCallPhone.onclick = function () {
    launchCallUsingAndroidIntent()
  }
} else {
  btnCallPhone.setAttribute('href', 'tel:' + phoneNumber)
}

function launchCallUsingAndroidIntent () {
  // set the parameters for the intent
  var params = {
    uri_data: 'tel:' + phoneNumber
  }
  // Launches the 'android.intent.action.DIAL' intent using the parameters above.
  launchIntent('android.intent.action.DIAL', params, function (error, result) {
    // Something went wrong while launching the intent.
    if (error) {
      currentAnswer += '[' + new Date().toLocaleString() + '] Failure calling the following phone number: ' + phoneNumber + '.\n'
      setAnswer(currentAnswer)
      statusContainer.innerHTML = error
    } else {
      currentAnswer += '[' + new Date().toLocaleString() + '] The following phone number was called: ' + phoneNumber + '.\n'
      setAnswer(currentAnswer)
      statusContainer.innerHTML = 'Success!'
    }
  })
}
