import json
from flask import Flask, request, render_template
from flask_mongoengine import MongoEngine
from pymongo import MongoClient

#################################################
# Database Setup
#################################################
# engine = create_engine("MongoEngine")

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(autoload_with=engine)

# # Save reference to the table
# Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'breweries',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)

class Brewery(db.Document):
    id = db.breweries.find({"id"})
    name = db.breweries.find({"name"})
    brewery_type = db.breweries.find({"brewery_type"})
    address_1 = db.breweries.find({"address_1"})
    city = db.breweries.find({"city"})
    state_province = db.breweries.find({"state_province"})
    postal_code = db.breweries.find({"postal_code"})
    country = db.breweries.find({"country"})
    longitude = db.breweries.find({"longitude"})
    latitude = db.breweries.find({"latitude"})
    phone = db.breweries.find({"phone"})
    website_url = db.breweries.find({"website_url"})

Brewery.objects(name="105 West Brewing Co").first()


if __name__ == "__main__":
    app.run(debug=True)



#################################################
# Flask Routes
#################################################

# @app.route('/', methods=('GET', 'POST'))
# def index():
#     return render_template('index.html')