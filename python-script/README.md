#  ---- Create virtual env ------#
python3 -m venv env

# ----- activate virtual env and go inside virtual env -----#
source env/bin/activate


# ---------- install all dependencies from requirements.txt  -----
pip install -r requirements.txt 


# ---------- run server  -----
python run.py
    => this will run flask server on localhost ,port : 8123