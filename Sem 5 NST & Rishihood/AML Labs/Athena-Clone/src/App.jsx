
// App.jsx

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import TestPage from "./pages/TestPage";

function Home() {
  const navigate = useNavigate();

  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const videoRef = useRef(null);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const removeListener =
      window.athena.registerListenerForTimerTickFromMain(setTimer);

    return removeListener;
  }, []);

  async function getCameraAccess() {
    try {
      const videoData = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = videoData;
      }

      setCameraEnabled(true);
    } catch (error) {
      console.error("Camera error:", error);
      alert("Cannot access Camera");
    }
  }

  async function enableFullScreen() {
    try {
      await document.documentElement.requestFullscreen();

      setFullScreen(true);
    } catch (error) {
      console.error("Fullscreen error:", error);
      alert("Cannot access full screen");
    }
  }

  async function startTest() {
    try {
      // Start timer in Electron/main process
      await window.athena.startTimerOnMain();

      // Redirect to quiz page
      navigate("/test");
    } catch (error) {
      console.error("Failed to start test:", error);
    }
  }

  return (
    <div className="page-container">

      {/* Main Card */}
      <div className="card-container">

        {/* Camera Section */}
        <div className="permission-item">
          <div className="permission-content">

            <h3>Configure Camera</h3>

            <p>
              Kindly configure Camera to attempt quiz/contests.
            </p>

            <div className="action-row">

              <button
                className="btn btn-black"
                disabled={cameraEnabled}
                onClick={getCameraAccess}
              >
                {cameraEnabled
                  ? "Camera Connected"
                  : "Get Camera Access"}
              </button>

              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="video-preview"
              />

            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Fullscreen Section */}
        <div className="permission-item">
          <div className="permission-content">

            <h3>Switch to full screen</h3>

            <p>
              Full screen mode is required to attempt the test.
            </p>

            <button
              className="btn btn-primary"
              disabled={fullScreen}
              onClick={enableFullScreen}
            >
              {fullScreen
                ? "Full Screen Enabled"
                : "Give Full Screen Permissions"}
            </button>

          </div>
        </div>

      </div>

      {/* Bottom Action */}
      <div className="bottom-actions">

        <button
          className="btn btn-primary"
          disabled={!cameraEnabled || !fullScreen}
          onClick={startTest}
        >
          Go To Test
        </button>

      </div>

      {/* Timer */}
      <div>
        {timer + " (s) elapsed"}
      </div>

    </div>
  );
}


function App() {
  return (
    <Routes>

      {/* Permission / Home Page */}
      <Route path="/" element={<Home />} />

      {/* Quiz Page */}
      <Route path="/test" element={<TestPage />} />

    </Routes>
  );
}

export default App;
