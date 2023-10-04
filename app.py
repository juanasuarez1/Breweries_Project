from sqlalchemy import create_engine
from flask import Flask, jsonify
from flask_cors import CORS
import json

##### import Path ####
from sqlalchemy import create_engine, inspect
import pandas as pd

#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///database.sqlite")

################################################
# Flask Setup
################################################

app = Flask (__name__)
CORS(app)


### Api route #####
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/locations<br/>"
        f"api/v1.0/geoJSON<br/>"
    )


################
## In this updated code, we have added two new API routes: `/api/v1.0/locations` and `/api/v1.0/geoJSON`. 
## The `/api/v1.0/locations` route returns a list of locations in JSON format, while the `/api/v1.0/geoJSON` route returns a geoJSON representation of the locations.
### The `locations` variable is a list of dictionaries
## Table name ###
@app.route("/api/v1.0/locations")
def locations():
    with engine.connect() as conn:
        result = conn.execute('SELECT * FROM database')

        data = [dict(row) for row in result]

    return jsonify(data)

### Table to Features ###
@app.route("/api/v1.0/geoJSON")
def geoJsonify():
    with engine.connect() as conn:
        result = conn.execute('SELECT * FROM database')

        geoData = [dict(row) for row in result]

        geoJson = {
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "geometry" : {
                    "type": "Point",
                    "coordinates": [d["longitude"], d["latitude"]],
                    },
                "properties" : d,
            } for d in geoData if (d['longitude'] != '' and d['latitude'] != '')]
        }

    return jsonify(geoJson)

if __name__ == '__main__':
    app.run(debug=True)
