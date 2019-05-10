from django.shortcuts import render
from django.http import HttpResponse

def index(req):
    #return HttpResponse('<h1>Hello World</h1>')
    return render(req, 'pages/index.html')

def about(req):
    return render(req, 'pages/about.html')

def projects(req):
    return render(req, 'pages/projects.html')

def experience(req):
    return render(req, 'pages/experience.html')

def skill(req):
    return render(req, 'pages/skill.html')

def contact(req):
    return render(req, 'pages/contact.html')