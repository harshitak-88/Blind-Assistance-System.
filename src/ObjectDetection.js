import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    };

    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };

    loadModel();
    startCamera();
  }, []);

  useEffect(() => {
    if (model) {
      const interval = setInterval(() => {
        detectFrame();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [model]);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); // avoid overlap
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const detectFrame = async () => {
    const predictions = await model.detect(videoRef.current);
    const filtered = predictions.filter(p => p.score > 0.5);
    const uniqueLabels = [...new Set(filtered.map(p => p.class))];

    if (uniqueLabels.length > 0) {
      const message =
        uniqueLabels.length === 1
          ? `I see a ${uniqueLabels[0]}`
          : `I see ${uniqueLabels.slice(0, -1).join(", ")} and ${uniqueLabels.slice(-1)}`;
      speak(message);
    } else {
      speak("I don't see anything clearly.");
    }
  };

  // Voice Command
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      if (command.includes("what do you see")) {
        detectFrame();
      }
    };
    recognition.start();
  }, [model]);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted playsInline width="640" height="480" />
      <p>Say "What do you see?" to trigger object detection.</p>
    </div>
  );
};

export default ObjectDetection;
