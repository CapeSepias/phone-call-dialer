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
if (!fieldProperties.READONLY) {
  if (isAndroid) {
    btnCallPhone.onclick = function () {
      launchCallUsingAndroidIntent()
    }
  } else {
    btnCallPhone.setAttribute('href', 'tel:' + phoneNumber)
    btnCallPhone.onclick = function () {
      saveResponse('success')
    }
  }
} else {
  btnCallPhone.classList.add('disabled')
}

// Define how to store the response
function saveResponse (result) {
  if (result === 'success') {
    var successResponse = '[' + new Date().toLocaleString() + '] The following phone number was called: ' + phoneNumber + '.\n'
    currentAnswer += successResponse
    setAnswer(currentAnswer)
  } else {
    var failResponse = '[' + new Date().toLocaleString() + '] Failure calling the following phone number: ' + phoneNumber + '.\n'
    currentAnswer += failResponse
    setAnswer(currentAnswer)
  }
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
      saveResponse(error)
      statusContainer.innerHTML = error
    } else {
      saveResponse('success')
      statusContainer.innerHTML = 'Success!'
    }
  })
}
