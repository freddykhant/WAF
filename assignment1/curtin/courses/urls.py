from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index')
    path('schools/', views.school_list, name='school_list'),
    path('courses/', views.course_list, name='course_list'),
]