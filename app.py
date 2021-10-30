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

engine = create_engine('postgresql://postgres:postgres@localhost/book_DB')
connection = engine.connect()

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

Merged_author = Base.classes.merged_author
Book_ratings = Base.classes.book_ratings
Full_books = Base.classes.full_books
Merged_publisher = Base.classes.merged_publisher
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
db = SQLAlchemy(app)
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
    book_counts = session.query(Merged_author.author, Merged_author.book_count).all()
    # list_book_count = list(np.ravel(book_counts))
    session.close()
    all_authors = []
    for author, book_count in book_counts:
        author_dict = {}
        author_dict["author"]=author
        author_dict['book_count'] = book_count
        all_authors.append(author_dict)
    return jsonify(all_authors)



@app.route("/api/v1.0/book_ratings")
def book_ratings():
    session = Session(engine)

    book_ratings_1 = session.query(Book_ratings.book_average_rating, Book_ratings.author).all()
    session.close()
    all_ratings = []
    for book_average_ratings, author in book_ratings_1:
        ratings_dict = {}
        ratings_dict["average_rating"] = book_average_ratings
        ratings_dict["author"] = author
        all_ratings.append(ratings_dict) 
    return jsonify(all_ratings)

@app.route("/api/v1.0/full_books")
def full_books():
    session = Session(engine)
    decades_560 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '-560-1899').all()
    decades_1900 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1900-1909').all()
    decades_1910 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1910-1919').all()
    decades_1920 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1920-1929').all()
    decades_1930 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1930-1939').all()
    decades_1940 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1940-1949').all()
    decades_1950 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1950-1959').all()
    decades_1960 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1960-1969').all()
    decades_1970 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1970-1979').all()
    decades_1980 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1980-1989').all()
    decades_1990 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '1990-1999').all()
    decades_2000 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '2000-2009').all()
    decades_2010 = session.query(Full_books.book_name,Full_books.gross_sales,Full_books.units_sold,Full_books.decades).filter(Full_books.decades == '2010-2020').all()
    session.close()

    decades_info = {}
    all_560 = []
    for book_name, gross_sales,units_sold, decades  in decades_560:
        dict_560= {}
        dict_560["book_name"] = book_name
        dict_560["gross_sales"] = gross_sales
        dict_560["units_sold"] = units_sold
        dict_560["decades"] = decades
        all_560.append(dict_560) 


    
    all_1900 = []
    for book_name, gross_sales,units_sold, decades  in decades_1900:
        dict_1900= {}
        dict_1900["book_name"] = book_name
        dict_1900["gross_sales"] = gross_sales
        dict_1900["units_sold"] = units_sold
        dict_1900["decades"] = decades
        all_1900.append(dict_1900) 


    all_1910 = []
    for book_name, gross_sales,units_sold, decades  in decades_1910:
        dict_1910= {}
        dict_1910["book_name"] = book_name
        dict_1910["gross_sales"] = gross_sales
        dict_1910["units_sold"] = units_sold
        dict_1910["decades"] = decades
        all_1910.append(dict_1910) 

    
    all_1920 = []
    for book_name, gross_sales,units_sold, decades  in decades_1920:
        dict_1920= {}
        dict_1920["book_name"] = book_name
        dict_1920["gross_sales"] = gross_sales
        dict_1920["units_sold"] = units_sold
        dict_1920["decades"] = decades
        all_1920.append(dict_1920) 


    all_1930 = []
    for book_name, gross_sales,units_sold, decades  in decades_1930:
        dict_1930= {}
        dict_1930["book_name"] = book_name
        dict_1930["gross_sales"] = gross_sales
        dict_1930["units_sold"] = units_sold
        dict_1930["decades"] = decades
        all_1930.append(dict_1930) 


    all_1940 = []
    for book_name, gross_sales,units_sold, decades  in decades_1940:
        dict_1940= {}
        dict_1940["book_name"] = book_name
        dict_1940["gross_sales"] = gross_sales
        dict_1940["units_sold"] = units_sold
        dict_1940["decades"] = decades
        all_1940.append(dict_1940) 


    all_1950 = []
    for book_name, gross_sales,units_sold, decades  in decades_1950:
        dict_1950= {}
        dict_1950["book_name"] = book_name
        dict_1950["gross_sales"] = gross_sales
        dict_1950["units_sold"] = units_sold
        dict_1950["decades"] = decades
        all_1950.append(dict_1950) 
  

    all_1960 = []
    for book_name, gross_sales,units_sold, decades  in decades_1960:
        dict_1960= {}
        dict_1960["book_name"] = book_name
        dict_1960["gross_sales"] = gross_sales
        dict_1960["units_sold"] = units_sold
        dict_1960["decades"] = decades
        all_1960.append(dict_1960) 
 

    all_1970 = []
    for book_name, gross_sales,units_sold, decades  in decades_1970:
        dict_1970= {}
        dict_1970["book_name"] = book_name
        dict_1970["gross_sales"] = gross_sales
        dict_1970["units_sold"] = units_sold
        dict_1970["decades"] = decades
        all_1970.append(dict_1970) 


    all_1980 = []
    for book_name, gross_sales,units_sold, decades  in decades_1980:
        dict_1980= {}
        dict_1980["book_name"] = book_name
        dict_1980["gross_sales"] = gross_sales
        dict_1980["units_sold"] = units_sold
        dict_1980["decades"] = decades
        all_1980.append(dict_1980) 

    
    all_1990 = []
    for book_name, gross_sales,units_sold, decades  in decades_1990:
        dict_1990= {}
        dict_1990["book_name"] = book_name
        dict_1990["gross_sales"] = gross_sales
        dict_1990["units_sold"] = units_sold
        dict_1990["decades"] = decades
        all_1990.append(dict_1990) 


    all_2000 = []
    for book_name, gross_sales,units_sold, decades  in decades_2000:
        dict_2000= {}
        dict_2000["book_name"] = book_name
        dict_2000["gross_sales"] = gross_sales
        dict_2000["units_sold"] = units_sold
        dict_2000["decades"] = decades
        all_2000.append(dict_2000) 


    all_2010 = []
    for book_name, gross_sales,units_sold, decades  in decades_2010:
        dict_2010= {}
        dict_2010["book_name"] = book_name
        dict_2010["gross_sales"] = gross_sales
        dict_2010["units_sold"] = units_sold
        dict_2010["decades"] = decades
        all_2010.append(dict_2010) 


    decades_info = {}
    decades_info['-560 - 1899'] = all_560
    decades_info["1900's"] = all_1900
    decades_info["1910's"] = all_1910
    decades_info["1920's"] = all_1920
    decades_info["1930's"] = all_1930
    decades_info["1940's"] = all_1940
    decades_info["1950's"] = all_1950
    decades_info["1960's"] = all_1960
    decades_info["1970's"] = all_1970
    decades_info["1980's"] = all_1980
    decades_info["1990's"] = all_1990
    decades_info["2000's"] = all_2000
    decades_info["2010's"] = all_2010
    return jsonify(decades_info)


@app.route("/api/v1.0/merged_publisher")
def merged_publisher():
    session = Session(engine)
    publisher_income = session.query(Merged_publisher.publisher_revenue, Merged_publisher.publisher, Merged_publisher.gross_sales)
    session.close()

    all_publishers = []
    for publisher_revenue, publisher, gross_sales in publisher_income:
        publisher_dict = {}
        publisher_dict["publisher_revenue"] = publisher_revenue
        publisher_dict["publisher"] = publisher
        publisher_dict["gross_sales"] = gross_sales
        all_publishers.append(publisher_dict) 
    return jsonify(all_publishers)


if __name__ == '__main__':
    app.run(debug=True)