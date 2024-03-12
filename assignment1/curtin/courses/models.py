from django.db import models


class School(models.Model):
    name = models.CharField(max_length=255) # School name
    head = models.CharField(max_length=255) # School head
    location = models.CharField(max_length=255) # School Location

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=255) # Course name
    coordinator = models.CharField(max_length=255) # Course coordinator
    credits = models.IntegerField() # Credits for course
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='courses') # Link Course to School

    def __str__(self):
        return self.name