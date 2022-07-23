from flask import render_template
from colorgrab import app

@app.route("/")
def home():
    """
    Renders the homepage
    """
    return render_template("pages/home.html")


@app.route("/palette")
def palette_page():
    """
    Renders the palette page
    """
    return render_template("pages/palette.html");


@app.errorhandler(404)
def page_not_found(e):
    """
    Renders 404 page
    """
    return render_template("pages/404.html"), 404


@app.errorhandler(500)
def server_error(e):
    """
    Renders 500 page
    """
    return render_template("pages/500.html"), 500
