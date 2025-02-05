import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import * as Components from "./assets/components/Components";
import SplashScreen from "./assets/components/SplashScreen"; // Import the splash screen component

export default function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [bgColor, setBgColor] = useState("#2196F3");
  const [activeTab, setActiveTab] = useState("preview");
  const [textColor, setTextColor] = useState("#ffffff");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set your desired loading time

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLaptop(window.innerWidth >= 900);
    };
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSelect = (componentKey) => {
    setSelectedComponent(Components[componentKey]);
  };

  // Convert hex color to RGB style
  const hexToRgbStyle = (hex) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Filter components based on search term
  const filteredComponents = Object.keys(Components).filter((key) =>
    Components[key].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return isLaptop ? (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Show the splash screen while loading */}
      {loading && <SplashScreen />}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Website Builder</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Component Selector */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Components</h2>

              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredComponents.slice(0, 20).map((key) => (
                  <button
                    key={key}
                    className={`w-full p-2 text-left rounded-lg transition-colors ${
                      selectedComponent?.name === Components[key].name
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSelect(key)}
                  >
                    {Components[key].name}
                  </button>
                ))}
              </div>
            </div>

            {selectedComponent && (
              <div className="bg-white rounded-lg shadow p-4 mt-4">
                <h2 className="text-lg font-semibold mb-4">Customize</h2>
                <label className="block text-sm font-medium text-gray-700">
                  Background Color:
                </label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="mt-1 w-full h-10 rounded-md"
                />
                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Text Color:
                </label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="mt-1 w-full h-10 rounded-md"
                />
              </div>
            )}
          </div>

          {/* Preview & Code Area */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "preview"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("preview")}
                  >
                    Preview
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "code"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("code")}
                  >
                    Code
                  </button>
                </div>
              </div>
              <div className="p-4">
                {selectedComponent ? (
                  <div>
                    {activeTab === "preview" ? (
                      <div className="border rounded-lg overflow-hidden">
                        <selectedComponent.Component
                          bgColor={hexToRgbStyle(bgColor)}
                          textColor={hexToRgbStyle(textColor)}
                        />
                      </div>
                    ) : (
                      <div className="border rounded-lg overflow-hidden">
                        <Editor
                          height="400px"
                          defaultLanguage="html"
                          theme="vs-dark"
                          value={selectedComponent.defaultCode.replace(
                            "{bgColor}",
                            hexToRgbStyle(bgColor)
                          )}
                          options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            fontSize: 14,
                            lineNumbers: "on",
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                          }}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    Select a component from the left sidebar to get started
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white fixed bottom-0 w-full py-2 text-center">
        <div >
          <p>&copy; {new Date().getFullYear()} Hachem Drissi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  ) : (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 className="text-2xl font-bold text-gray-900">This website is only accessible on laptops.</h1>
      <h2 className="text-lg font-semibold mb-4">We are working on it!!!</h2>
    </div>
  );
}
