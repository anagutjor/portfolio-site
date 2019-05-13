# Run

First of all, you need to change this line in the portfolio/wsgi.py file:
```
project_folder = os.path.expanduser('~/django/personal-website')
```
And specify the project directory in your local machine.
Also, you need to add the enviromental variable of EMAIL_HOST_PASSWORD in order to have the contact form working. For this, just create a .env file in the root directory (specified in the wsgi.py file) and add this line:
```
EMAIL_HOST_PASSWORD=<your-email's-password>
```
and change the following variables in pages/settings.py to adjust to your email:
```
EMAIL_HOST = 'smtp.<you-email-provider>'
EMAIL_HOST_USER = '<your-email-address'
```

Now, in the directory do:
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