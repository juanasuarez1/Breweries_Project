-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Brewery" (
    "id" int   NOT NULL,
    "name" varchar(30)   NOT NULL,
    "brewery_type" varchar(30)   NOT NULL,
    "address_1" varchar(100)   NOT NULL,
    "city" varchar(30)   NOT NULL,
    "state_province" varchar(30)   NOT NULL,
    "postal_code" varchar(30)   NOT NULL,
    "country" varchar(30)   NOT NULL,
    "longitude" int   NOT NULL,
    "latitude" int   NOT NULL,
    "phone" int   NOT NULL,
    "website_url" varchar(100)   NOT NULL,
    CONSTRAINT "pk_Brewery" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Location" (
    "id" int   NOT NULL,
    "name" varchar(30)   NOT NULL,
    "longitude" int   NOT NULL,
    "latitude" int   NOT NULL,
    CONSTRAINT "pk_Location" PRIMARY KEY (
        "name"
     )
);

CREATE TABLE "Type" (
    "id" int   NOT NULL,
    "name" varchar(30)   NOT NULL,
    "brewery_type" varchar(30)   NOT NULL,
    CONSTRAINT "pk_Type" PRIMARY KEY (
        "name"
     )
);

CREATE TABLE "Contact" (
    "id" int   NOT NULL,
    "name" varchar(30)   NOT NULL,
    "address_1" varchar(100)   NOT NULL,
    "city" varchar(30)   NOT NULL,
    "state_province" varchar(30)   NOT NULL,
    "postal_code" varchar(30)   NOT NULL,
    "phone" int   NOT NULL,
    "website_url" varchar(100)   NOT NULL,
    CONSTRAINT "pk_Contact" PRIMARY KEY (
        "name"
     )
);

ALTER TABLE "Brewery" ADD CONSTRAINT "fk_Brewery_id" FOREIGN KEY("id")
REFERENCES "Location" ("id");

