# env-tool
Tool to help with Environment and Awareness. Track disaster events around the world. Links to other organizations that are making efforts.

## Access
Production (main site) URL: https://env-tool-production.up.railway.app/ 

## Tech Stack
- Django Python Web Framework, Javascript, HTML, CSS, PostgreSQL DBMS

# Installation
---

Steps:
1. git clone repo
2. Create your virtual environment.
3. Install a database, such as PostgreSQL. Then in OS environment, set the values for: `PGDATABASE` ,`PGHOST`, 
 `PGPASSWORD`, `PGPORT`, `PGUSER` , `PGPASSWORD`, `DJANGO_SECRET_KEY` and `DEBUG`.
4. In the main folder, run `pip install -r requirements.txt`
5. Run `python manage.py create`
6. Run `python manage.py runserver` to run the server.

