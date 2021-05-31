// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

document.addEventListener("turbolinks:load", () => {
    let DWObject
    Dynamsoft.DWT.ResourcesPath = "Resources"

    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", Dynamsoft_OnReady)

    function Dynamsoft_OnReady() {
        DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer') // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer'

        if (DWObject) {
            DWObject.Width = 480 // Set the width of the Dynamic Web TWAIN Object
            DWObject.Height = 640 // Set the height of the Dynamic Web TWAIN Object
        }
    }
    
    document.querySelector('#scan').addEventListener('click', (e) => {

        if (DWObject) {
            const OnAcquireImageSuccess = OnAcquireImageFailure = function () {
                DWObject.CloseSource()
            }

            DWObject.SelectSource(function() {
                DWObject.OpenSource()
                DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure)
            }, function () {
                console.log('failled')
            })
        }
    })

    Dynamsoft.DWT.Load();

})