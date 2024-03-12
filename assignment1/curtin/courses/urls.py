from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index')
    #path('courses/', views.courses_list, name='courses_list'),
    #path('schools/', views.schools_list, name='schools_list'),
    #path('schools/<int:school_id>/', views.school_detail, name='school_detail'),
]