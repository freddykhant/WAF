from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index')
    path('courses/', views.course_list, name='course_list'),
    path('schools/', views.school_list, name='school_list'),
    path('schools/<int:school_id>/', views.school_detail, name='school_detail'),
]