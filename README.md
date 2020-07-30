# Phone call dialer

![Screenshot](extras/phone-call-dialer.jpg)

## Description

This field plug-in can dial a phone number for you in SurveyCTO Collect. Simply supply a valid phone number as a parameter (see the sample form for an example), and this field plug-in will allow you to dial that phone number automatically. This can be useful in CATI (computer assisted telephone interviews) surveys to save time and ensure the correct phone number is used.

For a more detailed guide to the **phone-call-dialer** field plug-in, see [the wiki](https://github.com/surveycto/phone-call-dialer/wiki/Guide-to-the-%22phone-call-dialer%22-field-plug-in).

[![Download now](extras/download-button.png)](https://github.com/surveycto/phone-call-dialer/raw/master/phone-call-dialer.fieldplugin.zip)

### Features

* **Dial a phone number**  
  Can be used to automatically dial a phone number that is defined by the form. For example, a number can be supplied from an attached dataset.

### Data format

This field plug-in requires the `text` field type.

A record of the call attempts are stored as the field's response in the following format:

* If the call was successful, the response will be:
  > [`TIMESTAMP`] The following phone number was called:  `phone_number`.
* If there was a call error, the response will be:
  > [`TIMESTAMP`] Failure calling the following phone number: `phone_number`.

Please note:

* Multiple calls made with this field plug-in will all be recorded in the response, each on their own line.
* If `hide_phone_number=1`, then the phone number will not appear in the response data. It will instead show the `phone_number_label` (if one is supplied).
* If you're using this field plug-in on iOS or web forms, then simply clicking the *CALL* button is considered a success (there is no error callback).

## How to use

### Getting started

1. Download the sample form [extras/sample-form](https://github.com/surveycto/phone-call-dialer/raw/master/extras/sample-form/Phone%20call%20dialer.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [phone-call-dialer.fieldplugin.zip](https://github.com/surveycto/phone-call-dialer/raw/master/phone-call-dialer.fieldplugin.zip) file from this repo, and attach it to the sample form on your SurveyCTO server.
1. Make sure to provide the correct parameters (see below).

### Parameters

| Key | Value |
| --- | --- |
| `phone_number` (required) | The phone number to dial. |
| `button_label` (optional) | The label of the button used to make the phone call. If no `button_label` parameter is specified, the button will be labeled "Click here to call". |

**Note:** it is suggested to use values stored in other fields for the parameters. Take a look at the sample form to see how this is accomplished.

## More resources

* **Sample form**  
[extras/test-form](https://github.com/surveycto/phone-call-dialer/raw/master/extras/sample-form/Phone%20call%20dialer.xlsx)
* **Wiki guide**  
[Wiki guide](https://github.com/surveycto/phone-call-dialer/wiki/Guide-to-the-%22phone-call-dialer%22-field-plug-in)
* **Developer documentation**  
Instructions and resources for developing your own field plug-ins.  
[https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
* **User documentation**  
How to get started using field plug-ins in your SurveyCTO form.  
[https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html](https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
