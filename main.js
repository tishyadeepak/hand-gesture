prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5.version:', ml5.version);
classifier = ml5.imageClassifier(https://teachablemachine.withgoogle.com/models/YY-VU8tHN/model.json', modelLoaded);

    function modelLoaded() {
        console.log('modeLloaded');
    }
function speak() {
        var synth = window.speechSynthesis;
        speak_data_1 = "THe first prediction is " + prediction_1;
        speak_data_2 = " And the second prediction is " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis);
    }


function check() {
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResult);

    }

function gotResult(error, results) {

        if (error) {
            console.error(error);
        }
        else {
            console.log(results);
            document.getElementById("result_gesture_name").innerHTML = results[0].label;
            document.getElementById("result_gesture_name2").innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();

            if (results[0].label == "point") {
                document.getElementById('update_gesture').innerHTML = "&#9757;";
            }

            if (results[0].label == "first") {
                document.getElementById('update_gesture').innerHTML = "&#9994;";
            }

            if (results[0].label == "plam") {
                document.getElementById('update_gesture').innerHTML = "&#9995;";
            }

            if (results[0].label == "V") {
                document.getElementById('update_gesture').innerHTML = "&#9996;";
            }


            if (results[1].label == "point up") {
                document.getElementById('update_gesture2').innerHTML = "&#128070;";
            }

            if (results[1].label == "point down") {
                document.getElementById('update_gesture2').innerHTML = "&#128071;";
            }

            if (results[1].label == "point right") {
                document.getElementById('update_gesture2').innerHTML = "&#128072;";
            }
        


        }
    }
    