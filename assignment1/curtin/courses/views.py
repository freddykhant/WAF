from django.shortcuts import render, get_list_or_404
#from django.http import HttpResponse
from .models import Course, School


# Create your views here.
#def index(request):
#    return HttpResponse("Hello, World!")

def school_list(request):
    schools = School.objects.all()
    return render(request, 'courses/school_list.html', {'schools' : schools})

def course_list(request):
    courses = Course.objects.all()
    return render(request, 'courses/course_list.html', {'courses' : courses})