Example = (function() {
    var config = {
        authToken: '',
        videoSupport: true,
        localVideoContainerId: null,
        remoteVideoContainerId: null,
        width: 640,
        height: 480,
        informationBlock: 'info'
    };

    function showInfo(text) {
        document.getElementById(config.informationBlock).innerText = text;
    }

    var buttons = {
        answer: null,
        hangup: null,
        reject: null
    };

    showInfo("SDK is connecting...");

    document.addEventListener('DOMContentLoaded', function(e) {
        buttons.answer = document.getElementById('answer');
        buttons.hangup = document.getElementById('hangup');
        buttons.reject = document.getElementById('reject');

        hideAllButtons();

        buttons.answer.addEventListener('click', function() {
            DoctorAtWorkTM.call.answer();
            
            showInfo('Consultation in progress');
            
            buttons.hangup.hidden = false;
            buttons.reject.hidden = false;
            buttons.answer.hidden = true;
        });
    
        buttons.hangup.addEventListener('click', function() {
            DoctorAtWorkTM.call.hangup();
            hideAllButtons();
            showInfo('Call ended');
        });
    
        buttons.reject.addEventListener('click', function () {
            DoctorAtWorkTM.call.reject();
            hideAllButtons();
        });
    });
    
    function showAllButtons() {
        buttons.answer.hidden = false;
        buttons.hangup.hidden = false;
        buttons.reject.hidden = false;
    }

    function hideAllButtons() {
        buttons.answer.hidden = true;
        buttons.hangup.hidden = true;
        buttons.reject.hidden = true;
    }

    // SDK events
    DoctorAtWorkTM.onSdkNotSupported = function () {
        showInfo('Video-call is not suppported');
    };

    DoctorAtWorkTM.onMicAccessFailed = function () {
        showInfo('Mic not found');
    };

    DoctorAtWorkTM.onCamAccessFailed = function () {
        showInfo('Cam not found');
    };

    DoctorAtWorkTM.onConnectionEstablished = function () {
        showInfo("Connection established. Waiting for an incoming call...");
    };

    DoctorAtWorkTM.onConnectionClosed = function () {
        showInfo('Connection has been lost');
        hideAllButtons();
    };

    DoctorAtWorkTM.onConnectionFailed = function () {
        showInfo('Failed to connect');
        hideAllButtons();
    };

    DoctorAtWorkTM.onCallIncoming = function (e) {
        showInfo('Incomming call');
        showAllButtons();
    };

    DoctorAtWorkTM.onCallAnswered = function () {
        showInfo('Consultation in progress');
        hideAllButtons();
        buttons.hangup.hidden = false;
    };

    DoctorAtWorkTM.onCallDisconnected = function () {
        showInfo('Call disconnected.');
        hideAllButtons();
    };

    DoctorAtWorkTM.onCallRejected = function () {
        showInfo('Call rejected');
        hideAllButtons();
    };
    
    DoctorAtWorkTM.onUnauthorized = function () {
        showInfo('Authentication failed. Update the authentication token');
        hideAllButtons();
    };

    return {
        setConfig: function (cfg) {
            for (var key in config) {
                if (cfg[key] !== undefined) {
                    config[key] = cfg[key];
                }
            }

            // SDK initialization
            var options = {
                localVideoContainerId: config.localVideoContainerId,
                remoteVideoContainerId: config.remoteVideoContainerId,
                showLocalVideo: config.showLocalVideo,
                height: config.height,
                width: config.width
            };

            DoctorAtWorkTM.ready(
                "Bearer " + config.authToken,
                // All fields are optional, height & width should be passed together.
                options,
                // Your callback on SDK ready.
                onVoipSdkInit
            );

            var onVoipSdkInit = function() {
                showInfo("SDK is ready to go!");
            };
        }
    }
})();
