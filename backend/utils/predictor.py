import torch
import joblib
import numpy as np
from PIL import Image
from torchvision import models, transforms

# Load PCA + SVM
pca = joblib.load("models/pca_model.pkl")
svm = joblib.load("models/svm_model.pkl")

# Class names
classes = ["Bird", "Bird + Drone", "Drone"]

# Device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# ResNet50
model = models.resnet50(pretrained=True)
model.fc = torch.nn.Identity()
model = model.to(device)
model.eval()

# Transform
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])


def predict_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        features = model(image)

    features = features.cpu().numpy()
    features_pca = pca.transform(features)

    prediction = svm.predict(features_pca)[0]
    probability = svm.predict_proba(features_pca)[0]

    confidence = float(np.max(probability) * 100)

    return {
        "class": classes[prediction],
        "confidence": round(confidence, 2)
    }