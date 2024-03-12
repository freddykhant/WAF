from django.shortcuts import render, get_object_or_404
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

def school_detail(request, school_id):
    school = get_object_or_404(School, id=school_id)
    courses = school.courses.all()
    return render(request, 'courses/school_detail.html', {'school': school, 'courses': courses})