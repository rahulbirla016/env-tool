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
2. Create your virtual environment. python3 -m `<venv>` `/path/to/new/virtual/`environment. Activate using source `./venv/bin/activate`.
3. Install a database, such as PostgreSQL. Then in OS environment, set the values for: `PGDATABASE` ,`PGHOST`, `PGPORT`, `PGUSER` , `PGPASSWORD`, `DJANGO_SECRET_KEY` and `DEBUG`.
4. In the main folder, run `pip3 install -r requirements.txt`
5. Run `python3 manage.py create`
6. Run `python3 manage.py runserver` to run the server.

