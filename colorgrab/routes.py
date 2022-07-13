from flask import render_template
from colorgrab import app

@app.route("/")
def home_page():
    """
    Renders the homepage
    """
    return render_template("home.html")
