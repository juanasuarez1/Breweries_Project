import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

import flask_cors
from flask_cors import CORS, cross_origin

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///database.sqlite")


# # reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
breweries = Base.classes.brewery_data_df_ordered


#################################################
# Flask Setup
#################################################
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#################################################
# Flask Routes
#################################################

@app.route("/")
@cross_origin()

def index():
    return render_template('index.html')

def welcome():
    """It worked! List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/brewery_data"
    )

@app.route("/api/v1.0/brewery_data")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query( id.name, breweries.name, breweries.brewery_type, breweries.address_1, breweries.city, breweries.state, breweries.postal_code, breweries.country, breweries.phone, breweries.website).all()
    session.close()

# Create a dictionary from the row data and append to a list of all_passengers
    all_breweries = []
    for  id, name, brewery_type, address_1, city, state, postal_code, country, phone, website, in results:
        breweries_dict = {}

        breweries_dict["id"] = id
        breweries_dict["name"] = name
        breweries_dict["brewery_type"] = brewery_type
        breweries_dict["address_1"] = address_1
        breweries_dict["city"] = city
        breweries_dict["state"] = state
        breweries_dict["postal_code"] = postal_code
        breweries_dict["country"] = country
        breweries_dict["phone"] = phone
        breweries_dict["website"] = website


        all_breweries.append(breweries_dict)

    return jsonify(all_breweries)


if __name__ == '__main__':
    app.run(debug=True)