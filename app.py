import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func , inspect
import datetime as dt
from datetime import timedelta
import numpy as np
import pandas as pd
from flask import Flask, jsonify


#################################################
# Database Setup
#################################################

engine = create_engine('postgresql://postgres:postgres@localhost/books_db')
connection = engine.connect()

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables

Base.prepare(engine, reflect=True)
Base.classes.keys()
session = Session(engine)
inspector = inspect(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return (
        f"Available Routes:</br>"
        f"/api/v1.0/merged_author</br>"
        f"/api/v1.0/book_ratings</br>"
        f"/api/v1.0/full_books</br>"
        f"/api/v1.0/merged_publisher</br>"
        f"/api/v1.0/<start></br>"
        f"/api/v1.0/<start>/<end>"
    )

@app.route("/api/v1.0/merged_author")
def merged_author():
    session = Session(engine)
    authors = Base.classes.merged_author
    book_counts = session.query(authors.author, authors.book_count)
    session.close()
    auth_units_sold = session.query(authors.author, authors.units_sold)
    return jsonify(book_counts)
    return jsonify(auth_units_sold)

@app.route("/api/v1.0/book_ratings")
def book_ratings():
    session = Session(engine)
    ratings = Base.classes.book_ratings
    book_ratings_1 = session.query(ratings.book_average_rating, ratings.author)
    session.close()
    return jsonify(book_ratings_1)

@app.route("/api/v1.0/full_books")
def full_books():
    full_books = Base.classes.full_books
    decades_560 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '-560-1899').all()
    decades_1900 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1900-1909').all()
    decades_1910 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1910-1919').all()
    decades_1920 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1920-1929').all()
    decades_1930 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1930-1939').all()
    decades_1940 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1940-1949').all()
    decades_1950 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1950-1959').all()
    decades_1960 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1960-1969').all()
    decades_1970 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1970-1979').all()
    decades_1980 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1980-1989').all()
    decades_1990 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '1990-1999').all()
    decades_2000 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '2000-2009').all()
    decades_2010 = session.query(full_books.book_name,full_books.gross_sales,full_books.units_sold).filter(full_books.decades == '2010-2020').all()
    session.close()
    return jsonify(decades_560)
    
@app.route("/api/v1.0/merged_publisher")
def merged_publisher():
    merged_publisher = Base.classes.merged_publisher
    publisher_income = session.query(merged_publisher.publisher_revenue, merged_publisher.publisher, merged_publisher.gross_sales)
    session.close()
    return jsonify(merged_publisher)

if __name__ == '__main__':
    app.run(debug=True)