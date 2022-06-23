CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	"friends_id" bigint,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.reports (
	"_id" serial NOT NULL,
	"spot" varchar NOT NULL,
	"description" varchar NOT NULL,
	"crowd" varchar NOT NULL,
	"auther_id" bigint NOT NULL,
	CONSTRAINT "reports_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.users ADD CONSTRAINT "users_fk0" FOREIGN KEY ("friends_id") REFERENCES  public.users("_id");
ALTER TABLE public.reports ADD CONSTRAINT "reports_fk0" FOREIGN KEY ("auther_id") REFERENCES  public.users("_id");

INSERT INTO public.users VALUES (1, 'Jared', 'ToastMaduro', 'postress', 'myEmail@gmail.com')
INSERT INTO public.reports VALUES (1, 'Honolua Bay', 'Looks pretty fun, about 3 foot and consistent.', 'Heavy', 1);

psql -d postgres://ybbkdjmw:ON2FOLZG95WVWM_l-_SpgTV8CcBbDgsU@heffalump.db.elephantsql.com/ybbkdjmw -f wavze_postgress_create.sql

ALTER TABLE public.reports ADD CONSTRAINT "email_unique" UNIQUE ("email");