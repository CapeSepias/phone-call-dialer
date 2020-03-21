# Call phone number

![](extras/call-phone-number.jpg)

## Description

This plug-in illustrates how to use the intents API, in Android, to automatically launch the default dialer app on the device. It receives a phone number as parameter, and provides a button to launch the dialer app (using the number from the parameters).

## Features

* Supports the `text` field type, but doesn't provide an actual text input. The response that gets recorded in your form data will be based on the parameters.
* If the dailer app is successfully launched, the following text will be appended to the field's response:  
    > [TIMESTAMP] The following phone number was called: [phone_number].
* If the dailer app cannot be launched, the following text will be appended to the field's response:  
    > [TIMESTAMP] Failure calling the following phone number: [phone_number].

## How to use

1. Download the test form [extras/test-form](extras/test-form) from this repo and upload it to your SurveyCTO server.
1. Download the [call-phone-number.fieldplugin.zip](call-phone-number.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
1. Make sure to provide the correct paramaters (see below).

## Required parameters

| Key | Value |
| --- | --- |
| `phone_number` | The phone number to dial. |
| `button_label` | The label of the button used to make the phone call. |

*Note: it is suggested to use values stored in other fields for the parameters. Take a look at the test form to see how this is accomplished.

## More resources

* **Test form**  
[extras/test-form](extras/test-form)
* **Developer documentation for field plug-ins**  
More instructions for developing and using field plug-ins. [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
