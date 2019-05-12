from django.shortcuts import render
from pages.models import Project

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
    return render(req, 'pages/contact.html')
