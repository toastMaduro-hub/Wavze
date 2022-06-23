CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"username" varchar,
	"password" varchar,
	"email" varchar,
	"friends_id" bigint,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.reports (
	"_id" serial NOT NULL,
	"spot" varchar NOT NULL,
	"description" varchar,
	"crowd" varchar,
	"auther_id" varchar,
	CONSTRAINT "reports_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.users ADD CONSTRAINT "users_fk0" FOREIGN KEY ("friends_id") REFERENCES  public.users("_id");
ALTER TABLE public.reports ADD CONSTRAINT "reports_fk0" FOREIGN KEY ("auther_id") REFERENCES  public.users("_id");