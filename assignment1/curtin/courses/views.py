from django.shortcuts import render, get_list_or_404
#from django.http import HttpResponse
from .models import Course, School


# Create your views here.
#def index(request):
#    return HttpResponse("Hello, World!")

def courses_list(request):
    courses = Course.objects.all()
    return render(request, 'courses/courses_list.html', {'course' : courses})

def schools_list(request):
    schools = School.objects.all()
    return render(request, 'courses/schools_list.html', {'school' : schools})

def school_detail(request, school_id):
    school = get_list_or_404(School, id=school_id)
    return render(request, 'courses/school_detail.html', {'school' : school})

