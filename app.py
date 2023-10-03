import numpy as np

import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import Column, Integer, String

from flask import Flask, jsonify
from flask_cors import CORS


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///database.sqlite")


# # reflect an existing database into a new model
Base = declarative_base()
class Brewery(Base):
    __tablename__ = "breweries"
    id = Column(String(50), primary_key=True)
    name = Column(String(50))
    brewery_type = Column(String(50))
    address_1 = Column(String(50))
    city = Column(String(50))
    state_province = Column(String(50))
    postal_code = Column(String(50))
    country =Column(String(50))
    longitude = Column(Integer)
    latitude = Column(Integer)
    phone = Column(Integer)
    website_url = Column(String(50))

# reflect the tables
conn = engine.connect()
Base.metadata.create_all(engine)

# Save reference to the table
breweries = Base.classes.Brewery


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
# @cross_origin()

# def index():
#     return render_template('index.html')

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

    """Return a list of all brewery names"""
    # Query all breweries
    results = session.query( id.name, breweries.name, breweries.brewery_type, breweries.address_1, breweries.city, breweries.state, breweries.postal_code, breweries.country, breweries.phone, breweries.website_url).all()
    session.close()

# Create a dictionary from the row data and append to a list of all_breweries
    all_breweries = []
    for  id, name, brewery_type, address_1, city, state, postal_code, country, phone, website_url, in results:
       
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
        breweries_dict["website_url"] = website_url

        all_breweries.append(breweries_dict)

    return jsonify(all_breweries)


if __name__ == '__main__':
    app.run(debug=True)