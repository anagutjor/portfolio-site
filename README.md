# Run
In the directory do:
```
python3 -m venv venv
source venv/bin/activate
pip install django
python manage.py runserver
```
Et voilà!

# Run with Docker

Inside the directory, do:
```
docker build -t <name-you-want-for-the-image> .
docker run -p 8000:8000 <name-you-want-for-the-image>
```

# See in production

url coming soon...