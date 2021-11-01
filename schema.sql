Alter Table book_ratings
Add ID Serial Primary Key; 

Alter Table full_books
Add ID Serial Primary Key; 

Alter Table merged_author
Add ID Serial Primary Key; 

Alter Table merged_publisher
Add ID Serial Primary Key; 

alter table merged_author
add constraint ma_author_uniq unique (author);

alter table merged_publisher
add constraint mp_pub_uniq unique (publisher);


Alter Table book_ratings
add constraint br_author_fk Foreign key (author) 
References merged_author (author);

Alter Table full_books
add constraint fb_author_fk Foreign key (author)
References merged_author (author);

Alter Table full_books
add constraint  fb_publisher_fk Foreign key (publisher)
References merged_publisher (publisher);

SELECT * FROM full_books;