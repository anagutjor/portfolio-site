# Run

First of all, you need to change this line in the portfolio/wsgi.py file:
```
project_folder = os.path.expanduser('~/django/portfolio-site')
```
And specify the project directory in your local machine.

Then, create a file in the root directoty you just specified called '.env'.
There, add this line with your custom SECRET_KEY variable:
```
SECRET_KEY='<your-custom-secret-key>'
```
> This would be enough for the webapp to run and you can skip to the commands of the end of this section to have it up and running.

But if you also want to have the contact form working you need to:
1. First add the enviromental variable EMAIL_HOST_PASSWORD also in the .env file like this:
```
EMAIL_HOST_PASSWORD=<your-email's-password>
```
2. Change the following variables in pages/settings.py to adjust to your email:
```
EMAIL_HOST = 'smtp.<you-email-provider>'
EMAIL_HOST_USER = '<your-email-address>'
```

> Finally, in a terminal inside the directory do:
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
set -a; source .env; set +a
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

http://anagutjor-portfolio.herokuapp.com/