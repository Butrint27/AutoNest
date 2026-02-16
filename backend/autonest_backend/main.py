from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AutoNest Backend running with python3 🚀"}
