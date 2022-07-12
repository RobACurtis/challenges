 CREATE TABLE "location" (
	"id" serial NOT NULL,
	"timezone" TEXT NOT NULL,
	"lattitude" TEXT NOT NULL,
	"longitude" timestamp with time zone NOT NULL,
	CONSTRAINT "location_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "daily-forecast" (
	"dailyID" serial NOT NULL,
	"sunrise" TEXT NOT NULL,
	"sunset" TEXT NOT NULL,
	"description" timestamp with time zone NOT NULL,
	"humidity" int NOT NULL,
	"id" int NOT NULL,
	"temperature-high" TEXT NOT NULL,
	"temperature-low" TEXT NOT NULL,
	CONSTRAINT "daily-forecast_pk" PRIMARY KEY ("dailyID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "daily-forecast" ADD CONSTRAINT "daily-forecast_fk0" FOREIGN KEY ("id") REFERENCES "location"("id");
