import os
from flask import Flask
if os.path.exists("env.py"):
    import env

# initialize app
app = Flask(__name__)
