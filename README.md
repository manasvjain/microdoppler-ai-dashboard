# 🚀 Micro-Doppler AI Dashboard

A full-stack AI-powered defense surveillance dashboard for Micro-Doppler based target classification using Deep Learning and Machine Learning.

---

# 📌 Project Overview

This project classifies aerial targets such as:

* 🐦 Bird
* 🚁 Drone
* 🛰️ Bird + Drone

using spectrogram images generated from radar signals.

The system combines:

* Deep Learning feature extraction
* PCA dimensionality reduction
* SVM classification
* FastAPI backend
* React + Tailwind frontend

into a professional real-time AI dashboard.

---

# ✨ Features

## 🎨 Frontend

* Modern Defense Dashboard UI
* Drag & Drop Image Upload
* Glassmorphism Design
* Neon Cyber Theme
* Animated UI using Framer Motion
* Confidence Progress Bar
* Prediction History
* Responsive Layout

---

## 🧠 AI Backend

* Spectrogram Image Classification
* Deep Learning Feature Extraction
* PCA Optimization
* SVM Classification
* Real-Time Prediction API
* FastAPI Inference Server

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* React Dropzone

---

## Backend

* FastAPI
* PyTorch
* Torchvision
* Scikit-learn
* NumPy
* Pillow
* Joblib
* Uvicorn

---

# 📂 Project Structure

```bash
microdoppler-ai-dashboard/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── models/
│   │   ├── pca_model.pkl
│   │   └── svm_model.pkl
│   ├── uploads/
│   └── utils/
│       └── predictor.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/microdoppler-ai-dashboard.git

cd microdoppler-ai-dashboard
```

---

# 🔥 Backend Setup

## Go to backend folder

```bash
cd backend
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Backend

```bash
python app.py
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

## Go to frontend folder

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🌐 Deployment

## Frontend Deployment

Frontend deployed using:

* Vercel

---

## Backend Deployment

Backend deployed using:

* Render

---

# 🧠 AI Workflow

```text
Spectrogram Image
        ↓
Deep Learning Feature Extraction
        ↓
PCA Dimensionality Reduction
        ↓
SVM Classification
        ↓
Prediction Result
```

---

# 📊 Model Details

## Feature Extractor

* ResNet50 / MobileNetV2

## Dimensionality Reduction

* PCA (Principal Component Analysis)

## Classifier

* SVM (Support Vector Machine)

---

# 📷 Dashboard Preview

Features included:

* Real-Time Prediction
* Confidence Meter
* Detection History
* Drag & Drop Upload
* Animated Defense Dashboard

---

# 🎯 Future Improvements

* GradCAM Heatmaps
* Live Radar Animation
* Video Upload Support
* Multiple Target Detection
* MongoDB Integration
* Authentication System
* Real-Time Analytics
* Webcam Detection

---

# 📚 Viva Explanation

## Why Deep Learning?

Deep learning models extract high-level image features automatically from spectrogram images.

---

## Why PCA?

PCA reduces feature dimensionality and improves classification efficiency.

---

## Why SVM?

SVM performs well for high-dimensional extracted features and smaller datasets.

---

## Why FastAPI?

FastAPI provides high-performance APIs for real-time inference.

---

## Why React?

React enables a modern and interactive user interface.

---

# 👨‍💻 Author

Developed by:

MANASV JAIN

---

# ⭐ If You Like This Project

Give it a star on GitHub ⭐
