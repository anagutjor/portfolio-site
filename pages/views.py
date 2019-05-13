from django.shortcuts import render
from pages.models import Project
from portfolio.forms import ContactForm
from django.core.mail import send_mail, BadHeaderError, EmailMessage

def index(req):
    return render(req, 'pages/index.html')

def about(req):
    return render(req, 'pages/about.html')

def projects(req):
    projects = Project.objects.all()
    context = {
        'projects': projects
    }
    return render(req, 'pages/projects.html', context)

def project(req, pk):
    project = Project.objects.get(pk = pk)
    context = {
        'project': project
    }
    print(context)
    return render(req, 'pages/project_detail.html', context)
    
def experience(req):
    return render(req, 'pages/experience.html')

def skill(req):
    return render(req, 'pages/skill.html')

def contact(req):
    if (req.method == 'GET'):
        form = ContactForm()
    else:
        form = ContactForm(req.POST)
        if form.is_valid():
            subject = 'Message from contact form of personal website'
            message = '''New message received from %s (%s):
            %s
            ''' % (form.cleaned_data['name'], form.cleaned_data['email'], form.cleaned_data['message'])
            try:
                email = EmailMessage(subject, message, 'anagjordano@gmail.com', to=['anagjordano@gmail.com'])
                email.send()
            except BadHeaderError:
                return render(req, 'pages/contact.html', {
                    'submitted': True,
                    'send_error': True,
                })
            return render( req, 'pages/contact.html', {
                'submitted': True,
                'send_error': False,
            })
    context = {
        'form': form,
    }
    return render(req, 'pages/contact.html', context)
